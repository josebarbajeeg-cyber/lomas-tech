// Generates public/sitemap.xml from src/data/products.ts.
// Plain Node ESM — no TS deps, no external libs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// IMPORTANT: keep in sync with `SITE_URL` in src/config/siteConfig.ts.
// Override at build time with `SITE_URL=https://prod.example.com npm run build`
// to avoid hardcoding the production origin in two places.
const SITE_URL = process.env.SITE_URL ?? 'https://www.lomastech.mx';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PRODUCTS_PATH = resolve(ROOT, 'src/data/products.ts');
const PUBLIC_DIR = resolve(ROOT, 'public');
const OUT_PATH = resolve(PUBLIC_DIR, 'sitemap.xml');

/**
 * Pulls distinct values for a given field key from the products.ts source by regex.
 * Matches: brand: 'Foo' | brand: "Foo" | category: 'Bar'
 */
function extractDistinctField(source, field) {
  const re = new RegExp(`${field}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`, 'g');
  const out = new Set();
  let match;
  while ((match = re.exec(source)) !== null) {
    const value = match[1].trim();
    if (value) out.add(value);
  }
  return Array.from(out).sort((a, b) => a.localeCompare(b, 'es'));
}

function xmlEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry({ loc, priority, changefreq, lastmod }) {
  return [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority != null ? `    <priority>${priority.toFixed(1)}</priority>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

function build() {
  if (!existsSync(PRODUCTS_PATH)) {
    throw new Error(`Cannot find products source at ${PRODUCTS_PATH}`);
  }

  const source = readFileSync(PRODUCTS_PATH, 'utf8');
  const categories = extractDistinctField(source, 'category');
  const brands = extractDistinctField(source, 'brand');

  const today = new Date().toISOString().slice(0, 10);

  const staticRoutes = [
    { loc: `${SITE_URL}/`, priority: 1.0, changefreq: 'daily' },
    { loc: `${SITE_URL}/catalog`, priority: 0.9, changefreq: 'daily' },
    { loc: `${SITE_URL}/brands`, priority: 0.8, changefreq: 'weekly' },
    { loc: `${SITE_URL}/preguntas-frecuentes`, priority: 0.7, changefreq: 'monthly' },
  ];

  const categoryRoutes = categories.map((c) => ({
    loc: `${SITE_URL}/catalog?category=${encodeURIComponent(c)}`,
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const brandRoutes = brands.map((b) => ({
    loc: `${SITE_URL}/catalog?brands=${encodeURIComponent(b)}`,
    priority: 0.6,
    changefreq: 'weekly',
  }));

  const all = [...staticRoutes, ...categoryRoutes, ...brandRoutes].map((r) => ({
    ...r,
    lastmod: today,
  }));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...all.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n');

  if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(OUT_PATH, xml, 'utf8');

  const total = all.length;
  // eslint-disable-next-line no-console
  console.log(
    `✓ sitemap.xml: ${staticRoutes.length} static + ${categoryRoutes.length} categories + ${brandRoutes.length} brands = ${total} urls`
  );
}

build();

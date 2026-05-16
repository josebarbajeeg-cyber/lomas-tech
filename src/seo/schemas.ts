/**
 * Pure schema builders for JSON-LD structured data.
 *
 * Each function returns a plain, JSON-serializable object (or array) suitable
 * for the `schema` prop on <SEO>. No side effects.
 *
 * IMPORTANT: We do NOT re-emit Organization, LocalBusiness (Store), or WebSite
 * here — those are inlined globally in `index.html` (Stream A) so they are
 * visible to bots that don't run JS. Per-page schemas only.
 */
import { BRAND_NAME, ROUTES, SITE_URL } from '../config/siteConfig';
import type { Brand } from '../data/brands';
import type { Faq } from '../data/faqs';
import type { Product } from '../data/products';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type ItemListEntry = {
  name: string;
  url: string;
  image?: string;
};

/**
 * BreadcrumbList — Google rich-result trail above the page title in search.
 * Every `url` MUST be absolute.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * ItemList — generic ordered list of links (catalog grid, best sellers, etc.).
 * Each entry becomes a ListItem with optional image.
 */
export function itemListSchema(opts: {
  name: string;
  items: ItemListEntry[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        url: item.url,
        name: item.name,
      };
      if (item.image) {
        listItem.image = item.image;
      }
      return listItem;
    }),
  };
}

/**
 * Maps a Product.status string to a schema.org availability URL.
 *
 * Spec: https://schema.org/ItemAvailability
 * - In Stock / Original / B2B TOP → InStock
 * - Poco Inventario               → LimitedAvailability
 * - OEM / anything unknown        → InStock (we keep stock of OEM lines)
 */
function mapAvailability(status: Product['status']): string {
  switch (status) {
    case 'Poco Inventario':
      return 'https://schema.org/LimitedAvailability';
    case 'En Stock':
    case 'Original':
    case 'B2B TOP':
    case 'OEM':
    default:
      return 'https://schema.org/InStock';
  }
}

/**
 * Product — individual product entity.
 *
 * Public-facing price is intentionally omitted (B2B prices are quote-driven).
 * We include an Offer with `availability`, `priceCurrency`, `url`, and `seller`.
 * The Offer URL deep-links into the catalog filtered by SKU, so the user lands
 * on the right card with a WhatsApp CTA.
 */
export function productSchema(product: Product): Record<string, unknown> {
  const productUrl = `${SITE_URL}${ROUTES.catalog}?q=${encodeURIComponent(product.sku)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.sku,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'MXN',
      availability: mapAvailability(product.status),
      seller: {
        '@type': 'Organization',
        name: BRAND_NAME,
      },
    },
  };
}

/**
 * FAQPage — drives the Google FAQ rich result. Pass ALL FAQ items even on
 * pages that visually render only a subset; search engines should see the full
 * set on every page that uses this schema.
 */
export function faqSchema(items: Faq[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * ItemList of brands, where each entry wraps a Brand-as-Organization with an
 * optional logo. Brands with empty `logo` strings omit the `image` field
 * entirely — schema.org `image` should be a real URL, not an empty string.
 */
export function brandItemListSchema(brands: Brand[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Marcas oficiales distribuidas por Lomas Tech-Wholesale',
    numberOfItems: brands.length,
    itemListElement: brands.map((brand, index) => {
      const org: Record<string, unknown> = {
        '@type': 'Organization',
        name: brand.name,
      };
      if (brand.logo) {
        org.logo = brand.logo;
        org.image = brand.logo;
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: org,
      };
    }),
  };
}

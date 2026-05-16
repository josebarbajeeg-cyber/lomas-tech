# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Lomas Tech-Wholesale** — B2B landing site for a Mexican wholesale tech/office-supply distributor (Guadalajara). React 19 + Vite 6 + TailwindCSS 4 SPA. All copy is in Spanish. Originally scaffolded from Google AI Studio (`@google/genai` is a dependency but is not yet wired up to any source file).

## Commands

```bash
npm install          # install deps
npm run dev          # vite dev server on 0.0.0.0:3000
npm run build        # production build to dist/
npm run preview      # serve built bundle
npm run lint         # tsc --noEmit (typecheck only; there is no ESLint config)
npm run clean        # rm -rf dist
```

No test runner is configured. There is no single-test command — adding tests requires picking a framework first (e.g. Vitest, which pairs naturally with Vite).

### Environment

- `GEMINI_API_KEY` is read in `vite.config.ts` via `loadEnv` and inlined into the client bundle as `process.env.GEMINI_API_KEY`. Put it in `.env.local`. Note: inlining means the key ships to the browser — fine for a public Gemini demo, **not** safe for any key you care about protecting.
- `DISABLE_HMR=true` turns off Vite HMR. AI Studio sets this so file watching does not flicker during agent edits; keep that behavior intact if editing `vite.config.ts`.

## Architecture

### Routing & shell (`src/App.tsx`)

`BrowserRouter` with three top-level routes:

| Path | Component |
|---|---|
| `/` | `LandingPage` |
| `/catalog` | `CatalogPage` |
| `/brands` | `BrandsPage` |

`Navbar` and `Footer` are rendered around the `<Routes>` outlet, plus a fixed WhatsApp floating button. The footer holds the canonical company contact info (address, phone, email) — update it there, not per-page.

### Product data (`src/data/products.ts`)

Single source of truth: a hardcoded `products: Product[]` array (~1700 lines). Every consumer derives from it:

- `CatalogPage` builds the `categories` and `brands` filter lists via `useMemo(() => Array.from(new Set(...)))`.
- `LandingPage` selects featured items by filtering on a hand-curated `bestSellersSkus` whitelist and re-sorting by that list's order.
- Product images are hot-linked from `contenidos.exel.com.mx` (the supplier's CDN). Brand logos are hot-linked from `i.imgur.com`. There is no asset pipeline.

`Product.status` is a string union (`'En Stock' | 'Poco Inventario' | 'OEM' | 'B2B TOP' | 'Original'`); `CatalogPage` only branches on the first three when picking badge colors, so new status values render as the default blue.

### Catalog filtering (`src/components/CatalogPage.tsx`)

State lives in `useState` and is **partially** mirrored to the URL via `useSearchParams`:

- `category` and `q` are URL-synced (via `setSearchParams` + `useEffect` listeners on the params).
- `selectedBrands` (multi-select checkboxes) is local state only — not in the URL.
- The "Pagination" UI at the bottom is static markup; `filteredProducts` is rendered in full without slicing. Real pagination is not implemented.

`Navbar`'s search form navigates to `/catalog?q=...`; `LandingPage`'s category tiles link to `/catalog?category=...`. Preserve those query-param contracts when changing the catalog page.

### Styling

TailwindCSS 4 with the Vite plugin (`@tailwindcss/vite`); no `tailwind.config.js`. Theme tokens (`--color-primary`, `--color-secondary`, `--shadow-glow`, etc.) and the `.glass`, `.gradient-text`, `.btn-primary`, `.card-hover` utility classes are defined in `src/index.css` via `@theme` and `@layer base`. Reuse those classes rather than reintroducing one-off gradients/shadows.

Animations use `motion/react` (Framer Motion's new package name) — `motion.div`, `AnimatePresence`, infinite-loop brand carousel in `BrandsSection`.

### TypeScript & aliases

`tsconfig.json` uses `moduleResolution: "bundler"`, `noEmit: true`, and maps `@/*` → repo root. Source code currently imports via relative paths; the `@/` alias is wired but unused.

## Known footguns

- `BrandsSection.tsx` and `BrandsPage.tsx` each contain their own copy-pasted `brands` array. Edits must be made in both files or the carousel and the brands page will drift.
- `express` and `@types/express` are in `dependencies` but no server file exists. Treat them as dead deps unless you are intentionally adding an API.
- `react-router-dom` v7 is in use — `BrowserRouter`/`Routes`/`Route` are still the right API here, but check the v7 docs before reaching for data-router features.

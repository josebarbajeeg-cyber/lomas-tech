import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Filter, LayoutGrid, List as ListIcon,
  MessageCircle, PackageSearch, Search, SlidersHorizontal, X,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products, type Product } from '../data/products';
import { STATUS_STYLES } from '../lib/status';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { cn } from '../lib/cn';
import { ProductImage } from './ProductImage';
import SEO from '../seo/SEO';
import { breadcrumbSchema, itemListSchema } from '../seo/schemas';
import { ROUTES, SITE_URL, WHATSAPP_URL } from '../config/siteConfig';

const PAGE_SIZE = 24;

type ViewMode = 'grid' | 'list';

function whatsappLink(product: Product): string {
  const text = `Hola, me interesa cotizar el SKU ${product.sku} (${product.name}).`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridRef = useRef<HTMLDivElement>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // URL → state derivado
  const selectedCategory = searchParams.get('category');
  const selectedBrands = useMemo(
    () => (searchParams.get('brands')?.split(',').filter(Boolean) ?? []),
    [searchParams]
  );
  const urlQuery = searchParams.get('q') ?? '';
  const viewMode: ViewMode = (searchParams.get('view') === 'list') ? 'list' : 'grid';
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10) || 1);

  // Búsqueda local (debounce)
  const [searchInput, setSearchInput] = useState(urlQuery);
  const debouncedQuery = useDebouncedValue(searchInput, 250);

  // Sincronizar input cuando cambia la URL desde otra parte (navbar search)
  useEffect(() => {
    setSearchInput(urlQuery);
  }, [urlQuery]);

  // Propagar query debounced a URL (solo cuando difiere)
  useEffect(() => {
    if (debouncedQuery === urlQuery) return;
    const next = new URLSearchParams(searchParams);
    if (debouncedQuery) next.set('q', debouncedQuery);
    else next.delete('q');
    next.delete('page');
    setSearchParams(next, { replace: true });
  }, [debouncedQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  // Listas únicas
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    []
  );
  const brandList = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    []
  );

  // Filtrado
  const filteredProducts = useMemo(() => {
    const q = debouncedQuery.toLowerCase();
    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.sku.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [selectedCategory, selectedBrands, debouncedQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);

  // Helpers URL
  const updateParams = (mutator: (p: URLSearchParams) => void, replace = false) => {
    const next = new URLSearchParams(searchParams);
    mutator(next);
    setSearchParams(next, { replace });
  };

  const setCategory = (cat: string | null) => {
    updateParams((p) => {
      if (cat) p.set('category', cat);
      else p.delete('category');
      p.delete('page');
    });
  };

  const toggleBrand = (brand: string) => {
    const next = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    updateParams((p) => {
      if (next.length > 0) p.set('brands', next.join(','));
      else p.delete('brands');
      p.delete('page');
    });
  };

  const setView = (v: ViewMode) => {
    updateParams((p) => {
      if (v === 'list') p.set('view', 'list');
      else p.delete('view');
    });
  };

  const goToPage = (n: number) => {
    updateParams((p) => {
      if (n <= 1) p.delete('page');
      else p.set('page', String(n));
    });
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const clearAll = () => {
    setSearchInput('');
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const hasFilters = Boolean(selectedCategory) || selectedBrands.length > 0 || debouncedQuery.length > 0;

  const pageNumbers = buildPageNumbers(currentPage, totalPages);

  // ---------------------------------------------------------------------------
  // Dynamic SEO derived from URL state.
  // - q (search) → noindex, canonicalize to bare /catalog
  // - category + brand → both included in title and breadcrumbs
  // - category only / brand only → templated title focused on that facet
  // - no filters → flagship catalog title
  // ---------------------------------------------------------------------------
  const primaryBrand = selectedBrands[0] ?? null;
  const isSearch = debouncedQuery.length > 0;

  let seoTitle: string;
  let seoDescription: string;
  let seoNoindex = false;

  if (isSearch) {
    seoTitle = `Búsqueda: "${debouncedQuery}" | Catálogo Lomas`;
    seoDescription = `Resultados de búsqueda en el catálogo mayorista de Lomas para "${debouncedQuery}".`;
    seoNoindex = true;
  } else if (selectedCategory && primaryBrand) {
    seoTitle = `${selectedCategory} ${primaryBrand} al Mayoreo en México | Lomas Tech-Wholesale`;
    seoDescription = `${filteredProducts.length} SKUs de ${primaryBrand} en la categoría ${selectedCategory}. Distribuidor mayorista en Guadalajara con envío 24–48 h a México.`;
  } else if (selectedCategory) {
    seoTitle = `${selectedCategory} al Mayoreo en México | Lomas Tech-Wholesale`;
    seoDescription = `${filteredProducts.length} SKUs en ${selectedCategory}. Mayorista B2B con precios de distribuidor y envío nacional desde Guadalajara.`;
  } else if (primaryBrand) {
    seoTitle = `Distribuidor Mayorista de ${primaryBrand} en México | Lomas Tech-Wholesale`;
    seoDescription = `Distribuidor autorizado de ${primaryBrand} en México. ${filteredProducts.length} SKUs en stock con respaldo y garantía oficial. Envío 24–48 h desde Guadalajara.`;
  } else {
    seoTitle = `Catálogo Mayorista B2B | ${products.length} SKUs en Tecnología y Papelería | Lomas`;
    seoDescription = `Catálogo completo: ${products.length} SKUs de impresoras, tóners, cómputo, redes y papelería. Filtra por marca, categoría o SKU. Precios exclusivos para distribuidores registrados.`;
  }

  const seoSchema = useMemo<Record<string, unknown>[]>(() => {
    if (seoNoindex) return [];
    const crumbs = [
      { name: 'Inicio', url: `${SITE_URL}/` },
      { name: 'Catálogo', url: `${SITE_URL}${ROUTES.catalog}` },
      ...(selectedCategory
        ? [{
            name: selectedCategory,
            url: `${SITE_URL}${ROUTES.catalog}?category=${encodeURIComponent(selectedCategory)}`,
          }]
        : []),
      ...(primaryBrand
        ? [{
            name: primaryBrand,
            url: `${SITE_URL}${ROUTES.catalog}?brands=${encodeURIComponent(primaryBrand)}`,
          }]
        : []),
    ];
    return [
      breadcrumbSchema(crumbs),
      itemListSchema({
        name: seoTitle,
        items: filteredProducts.slice(0, 50).map((p) => ({
          name: p.name,
          url: `${SITE_URL}${ROUTES.catalog}?q=${encodeURIComponent(p.sku)}`,
          image: p.image,
        })),
      }),
    ];
  }, [seoNoindex, seoTitle, selectedCategory, primaryBrand, filteredProducts]);

  let seoCanonical: string;
  if (isSearch) {
    seoCanonical = ROUTES.catalog;
  } else if (selectedCategory && primaryBrand) {
    // Param order matches what `URLSearchParams` emits in updateParams (category set first, brands second)
    seoCanonical = `${ROUTES.catalog}?category=${encodeURIComponent(selectedCategory)}&brands=${encodeURIComponent(primaryBrand)}`;
  } else if (selectedCategory) {
    seoCanonical = `${ROUTES.catalog}?category=${encodeURIComponent(selectedCategory)}`;
  } else if (primaryBrand) {
    seoCanonical = `${ROUTES.catalog}?brands=${encodeURIComponent(primaryBrand)}`;
  } else {
    seoCanonical = ROUTES.catalog;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        noindex={seoNoindex}
        schema={seoSchema.length > 0 ? seoSchema : undefined}
      />
      {/* Header */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 pulse-dot text-blue-600" />
            Portal B2B Activo
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Catálogo Mayorista <span className="gradient-text">B2B</span>
          </h1>
          <p className="text-slate-600">
            {filteredProducts.length} de {products.length} SKUs · Precios exclusivos para distribuidores registrados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          {/* Buscador */}
          <div className="relative flex-1 max-w-xl">
            <label htmlFor="catalog-search" className="sr-only">Buscar productos</label>
            <span aria-hidden="true" className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              id="catalog-search"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar por nombre, SKU, marca o categoría…"
              className="w-full bg-white border border-slate-200 rounded-full py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-colors placeholder:text-slate-400 text-slate-900"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFiltersOpen(true)}
              className="lg:hidden btn-secondary text-sm px-4 py-2.5"
              aria-label="Abrir filtros"
            >
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              Filtros
              {hasFilters && <span className="ml-1 text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">{(selectedCategory ? 1 : 0) + selectedBrands.length}</span>}
            </button>

            <div className="inline-flex items-center bg-white p-1 rounded-full border border-slate-200 shadow-[var(--shadow-xs)]">
              <button
                type="button"
                onClick={() => setView('grid')}
                aria-label="Vista en cuadrícula"
                aria-pressed={viewMode === 'grid'}
                className={cn(
                  'inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors',
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'
                )}
              >
                <LayoutGrid className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                aria-label="Vista en lista"
                aria-pressed={viewMode === 'list'}
                className={cn(
                  'inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors',
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'
                )}
              >
                <ListIcon className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Active filters chips */}
        {hasFilters && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Filtros activos:</span>
            {selectedCategory && (
              <Chip onRemove={() => setCategory(null)}>{selectedCategory}</Chip>
            )}
            {selectedBrands.map((b) => (
              <Chip key={b} onRemove={() => toggleBrand(b)}>{b}</Chip>
            ))}
            {debouncedQuery && (
              <Chip onRemove={() => setSearchInput('')}>“{debouncedQuery}”</Chip>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-blue-600 font-semibold hover:underline ml-1"
            >
              Limpiar todo
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters desktop */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24">
            <FiltersPanel
              categories={categories}
              brands={brandList}
              selectedCategory={selectedCategory}
              selectedBrands={selectedBrands}
              onCategoryChange={setCategory}
              onBrandToggle={toggleBrand}
              onClearAll={clearAll}
              hasFilters={hasFilters}
            />
          </div>
        </aside>

        {/* Filters drawer mobile */}
        {isFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
            <button
              type="button"
              aria-label="Cerrar filtros"
              onClick={() => setIsFiltersOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-0 h-full w-full sm:w-80 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
                <span className="font-black text-slate-900">Filtros</span>
                <button
                  type="button"
                  onClick={() => setIsFiltersOpen(false)}
                  aria-label="Cerrar filtros"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <FiltersPanel
                  categories={categories}
                  brands={brandList}
                  selectedCategory={selectedCategory}
                  selectedBrands={selectedBrands}
                  onCategoryChange={(c) => { setCategory(c); }}
                  onBrandToggle={toggleBrand}
                  onClearAll={clearAll}
                  hasFilters={hasFilters}
                  compact
                />
              </div>
              <div className="p-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFiltersOpen(false)}
                  className="btn-primary w-full"
                >
                  Ver {filteredProducts.length} productos
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1 min-w-0" ref={gridRef}>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-600">
              {filteredProducts.length === 0
                ? 'Sin resultados'
                : `Mostrando ${startIndex + 1}–${Math.min(startIndex + PAGE_SIZE, filteredProducts.length)} de ${filteredProducts.length} productos`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 mb-6">
                <PackageSearch className="w-7 h-7" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-black text-slate-900 mb-2">No encontramos SKUs que coincidan</h2>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Pregúntanos por WhatsApp: manejamos pedidos especiales y conseguimos producto en menos de 7 días hábiles.
              </p>
              <div className="inline-flex flex-wrap items-center justify-center gap-3">
                <button type="button" onClick={clearAll} className="btn-secondary">Limpiar filtros</button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Pedir cotización por WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div
              className={cn(
                'grid gap-5',
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              )}
            >
              {paginatedProducts.map((product) => (
                <ProductCard key={product.sku} product={product} view={viewMode} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Paginación" className="mt-12 flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Página anterior"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              {pageNumbers.map((n, i) =>
                n === '…' ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-slate-400" aria-hidden="true">…</span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    onClick={() => goToPage(n)}
                    aria-current={n === currentPage ? 'page' : undefined}
                    aria-label={`Ir a página ${n}`}
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-xl font-semibold text-sm transition-colors',
                      n === currentPage
                        ? 'bg-blue-600 text-white shadow-[var(--shadow-sm)]'
                        : 'text-slate-600 hover:bg-slate-100'
                    )}
                  >
                    {n}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Página siguiente"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Sub-components
   ------------------------------------------------------------------------- */

function Chip({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
      {children}
      <button type="button" onClick={onRemove} aria-label={`Quitar filtro ${children}`} className="hover:text-blue-900">
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </span>
  );
}

function FiltersPanel({
  categories, brands, selectedCategory, selectedBrands,
  onCategoryChange, onBrandToggle, onClearAll, hasFilters, compact,
}: {
  categories: string[];
  brands: string[];
  selectedCategory: string | null;
  selectedBrands: string[];
  onCategoryChange: (cat: string | null) => void;
  onBrandToggle: (brand: string) => void;
  onClearAll: () => void;
  hasFilters: boolean;
  compact?: boolean;
}) {
  return (
    <div className={cn(!compact && 'bg-white p-6 rounded-2xl border border-slate-200/70 shadow-[var(--shadow-sm)]')}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold flex items-center gap-2 text-slate-900">
          <Filter className="w-4 h-4" aria-hidden="true" /> Filtros
        </h2>
        {hasFilters && (
          <button type="button" onClick={onClearAll} className="text-xs text-blue-600 font-semibold hover:underline">
            Limpiar
          </button>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Categorías</legend>
        <label className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 cursor-pointer min-h-9">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === null}
            onChange={() => onCategoryChange(null)}
            className="w-4 h-4 accent-blue-600"
          />
          <span className={selectedCategory === null ? 'font-bold text-blue-600' : ''}>Todas</span>
        </label>
        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 cursor-pointer min-h-9">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => onCategoryChange(cat)}
              className="w-4 h-4 accent-blue-600"
            />
            <span className={selectedCategory === cat ? 'font-bold text-blue-600' : ''}>{cat}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="space-y-2 pt-6 mt-6 border-t border-slate-100">
        <legend className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Marcas</legend>
        <div className="space-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 cursor-pointer min-h-9">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandToggle(brand)}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className={selectedBrands.includes(brand) ? 'font-bold text-blue-600' : ''}>{brand}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function ProductCard({ product, view }: { product: Product; view: ViewMode }) {
  const status = STATUS_STYLES[product.status];

  if (view === 'list') {
    return (
      <article className="card-hover flex flex-col sm:flex-row items-stretch p-4 gap-5 group">
        <div className="relative w-full sm:w-48 aspect-square sm:aspect-auto sm:h-48 bg-slate-50 rounded-xl flex items-center justify-center p-4 shrink-0">
          <span className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 rounded-md text-[9px] font-black text-slate-500 border border-slate-100 uppercase tracking-tighter z-10">
            {product.sku}
          </span>
          <span className={cn('absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider z-10', status.bg, status.text, status.ring)}>
            {status.label}
          </span>
          <ProductImage
            src={product.image}
            alt={product.name}
            category={product.category}
            sku={product.sku}
            width={200}
            height={200}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">{product.brand} • {product.category}</p>
          <h3 className="font-semibold text-slate-900 leading-snug text-lg mb-4 group-hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 bg-[color:var(--color-whatsapp)]/10 hover:bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-dark)] hover:text-white border border-[color:var(--color-whatsapp)]/30 font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="card-hover overflow-hidden flex flex-col group">
      <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-6">
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2 py-0.5 rounded-md text-[9px] font-black text-slate-500 border border-slate-100 uppercase tracking-tighter z-10">
          {product.sku}
        </span>
        <span className={cn('absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider z-10', status.bg, status.text, status.ring)}>
          {status.label}
        </span>
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          sku={product.sku}
          width={280}
          height={280}
          imgClassName="group-hover:scale-105 transition-transform duration-500 motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">{product.brand} • {product.category}</p>
        <h3 className="font-semibold text-slate-900 leading-snug text-sm line-clamp-2 min-h-[2.5rem] mb-4 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        <a
          href={whatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-[color:var(--color-whatsapp)]/10 hover:bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-dark)] hover:text-white border border-[color:var(--color-whatsapp)]/30 font-semibold py-2.5 rounded-xl transition-colors text-xs"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Cotizar por WhatsApp
        </a>
      </div>
    </article>
  );
}

function buildPageNumbers(current: number, total: number): Array<number | '…'> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const result: Array<number | '…'> = [];
  result.push(1);
  if (current > 4) result.push('…');
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) result.push(i);
  if (current < total - 3) result.push('…');
  result.push(total);
  return result;
}

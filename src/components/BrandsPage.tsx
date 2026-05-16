import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandCategories, brands as allBrands, BrandCategory } from '../data/brands';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { cn } from '../lib/cn';
import SEO from '../seo/SEO';
import { brandItemListSchema, breadcrumbSchema } from '../seo/schemas';
import { ROUTES, SITE_URL } from '../config/siteConfig';

type FilterCategory = BrandCategory | 'Todas';
const FILTERS: FilterCategory[] = ['Todas', ...brandCategories];

export default function BrandsPage() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FilterCategory>('Todas');
  const debounced = useDebouncedValue(query, 200);

  const filtered = useMemo(() => {
    const q = debounced.toLowerCase().trim();
    return allBrands.filter((b) => {
      if (category !== 'Todas' && b.category !== category) return false;
      if (q && !b.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [debounced, category]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Marcas Oficiales que Distribuimos en México | Lomas Tech-Wholesale"
        description={`Distribuidor autorizado de ${allBrands.length} marcas oficiales en México: HP, Lexmark, Epson, Xerox, Brother, Canon y más. Garantía y respaldo desde Guadalajara.`}
        canonical={ROUTES.brands}
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Marcas', url: `${SITE_URL}${ROUTES.brands}` },
          ]),
          brandItemListSchema(allBrands),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
        <div className="absolute inset-0 surface-grid opacity-40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Volver al inicio
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Marcas Oficiales que <span className="gradient-text">Distribuimos en México</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                {allBrands.length} fabricantes con respaldo y garantía oficial. Distribuidores autorizados desde Guadalajara para toda la República mexicana.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-[var(--shadow-sm)]">
                <span className="text-3xl font-black text-blue-600">{allBrands.length}</span>
                <span className="text-sm text-slate-600 leading-tight">Alianzas<br />comerciales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-white border-b border-slate-100 sticky top-20 z-20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <label htmlFor="brand-search" className="sr-only">Buscar marca</label>
            <span aria-hidden="true" className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              id="brand-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar marca…"
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 focus:bg-white transition-colors text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setCategory(f)}
                aria-pressed={category === f}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-colors',
                  category === f
                    ? 'bg-blue-600 text-white shadow-[var(--shadow-sm)]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 lg:py-16">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200">
            <p className="text-slate-500 mb-4">No encontramos marcas con esos filtros.</p>
            <button
              type="button"
              onClick={() => { setQuery(''); setCategory('Todas'); }}
              className="btn-secondary"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.025, 0.4), duration: 0.35 }}
              >
                <Link
                  to={`/catalog?brands=${encodeURIComponent(brand.name)}`}
                  className="card-hover aspect-square p-6 flex flex-col items-center justify-center group focus-ring"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      width="160"
                      height="80"
                      loading="lazy"
                      className="max-h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  ) : (
                    <span className="flex items-center justify-center h-16 px-4 rounded-xl bg-slate-100 text-slate-700 font-black text-base tracking-tight group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {brand.name}
                    </span>
                  )}
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                    {brand.category}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white p-10 lg:p-16 text-center">
          <div className="absolute inset-0 surface-grid-dark opacity-50" aria-hidden="true" />
          <div className="absolute -right-32 -top-32 w-[400px] h-[400px] bg-blue-600/30 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">¿Buscas una marca específica?</h2>
            <p className="text-slate-300 mb-8">
              Si trabajas con una marca que no aparece, escríbenos. Negociamos cuentas nuevas con fabricantes en menos de 30 días.
            </p>
            <Link to="/#contact" className="btn-secondary text-base">
              Contactar ventas B2B
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, Download, ExternalLink, Eye, FileText, MessageCircle, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  albarShowcase,
  catalogById,
  catalogs,
  downloadSections,
  driveDownloadUrl,
  drivePreviewUrl,
  offihoShowcase,
  type Catalog,
  type DownloadSection,
} from '../data/downloads';
import { cn } from '../lib/cn';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import { ROUTES, SITE_URL, WHATSAPP_URL } from '../config/siteConfig';

type Filter = DownloadSection | 'Todos';
const FILTERS: Filter[] = ['Todos', ...downloadSections];

function meta(c: Catalog) {
  return [c.year, c.sizeMb ? `${c.sizeMb} MB` : null, 'PDF'].filter(Boolean).join(' · ');
}

export default function DownloadsPage() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('Todos');
  const [active, setActive] = useState<Catalog | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return catalogs.filter((c) => {
      if (filter !== 'Todos' && c.section !== filter) return false;
      if (!q) return true;
      return `${c.title} ${c.brand} ${c.description} ${c.year ?? ''}`.toLowerCase().includes(q);
    });
  }, [query, filter]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  const preview = (id: string) => {
    const c = catalogById(id);
    if (c) setActive(c);
  };

  const brandCount = new Set(catalogs.map((c) => c.brand)).size;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Catálogos Descargables de Mobiliario y Papelería | Lomas Tech-Wholesale"
        description={`Descarga ${catalogs.length} catálogos en PDF de Albar, Offiho, Deli, Nextep, Tops y más marcas de mobiliario, papelería y oficina. Mayorista en Guadalajara.`}
        canonical={ROUTES.downloads}
        schema={breadcrumbSchema([
          { name: 'Inicio', url: `${SITE_URL}/` },
          { name: 'Descargables', url: `${SITE_URL}${ROUTES.downloads}` },
        ])}
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
                Catálogos <span className="gradient-text">descargables</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Mobiliario, papelería y oficina de nuestras marcas. Previsualiza cada catálogo y descárgalo en PDF para
                cotizar con tu asesor.
              </p>
            </div>
            <div className="lg:justify-self-end flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-[var(--shadow-sm)]">
                <span className="text-3xl font-black text-blue-600">{catalogs.length}</span>
                <span className="text-sm text-slate-600 leading-tight">Catálogos<br />en PDF</span>
              </div>
              <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-[var(--shadow-sm)]">
                <span className="text-3xl font-black text-blue-600">{brandCount}</span>
                <span className="text-sm text-slate-600 leading-tight">Marcas<br />y líneas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
      {/* Controls */}
      <section className="bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <label htmlFor="download-search" className="sr-only">Buscar catálogo</label>
            <span aria-hidden="true" className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              id="download-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar catálogo o marca…"
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 focus:bg-white transition-colors text-slate-900"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-colors',
                  filter === f
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

      {/* Catalog grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 lg:py-16">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200">
            <p className="text-slate-500 mb-4">No encontramos catálogos con esos filtros.</p>
            <button
              type="button"
              onClick={() => { setQuery(''); setFilter('Todos'); }}
              className="btn-secondary"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c, index) => (
              <motion.article
                key={c.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.4), duration: 0.35 }}
                className="card-hover flex flex-col overflow-hidden group"
              >
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  aria-label={`Vista previa de ${c.brand} ${c.title}`}
                  className="relative block aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 p-4 focus-ring"
                >
                  <img
                    src={c.cover}
                    alt={`Portada ${c.brand} ${c.title}`}
                    width="560"
                    height="420"
                    loading="lazy"
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/25 transition-colors">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <Eye className="w-4 h-4" aria-hidden="true" /> Vista previa
                    </span>
                  </span>
                </button>

                <div className="flex flex-col flex-1 p-5">
                  <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
                    {c.brand}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">{c.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{meta(c)}</p>
                  <p className="text-sm text-slate-600 mt-3 mb-5 flex-1">{c.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActive(c)}
                      className="inline-flex items-center justify-center gap-2 h-10 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 transition-colors focus-ring"
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" /> Ver
                    </button>
                    <a
                      href={driveDownloadUrl(c.driveId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-10 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors focus-ring"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" /> Descargar
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
      </div>

      {/* Albar */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 lg:gap-14 items-start">
            <div>
              <div className="inline-flex items-center justify-center h-20 w-40 rounded-2xl bg-white border border-slate-200 shadow-[var(--shadow-sm)] mb-6">
                <img src={albarShowcase.logo} alt="Albar" width="160" height="100" loading="lazy" className="w-28 h-auto object-contain" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                Mobiliario <span className="gradient-text">Albar</span>
              </h2>
              <p className="text-slate-600 mb-6">{albarShowcase.tagline} Elige una línea para ver su catálogo completo.</p>
              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Familias de producto Albar">
                {albarShowcase.families.map((f) => (
                  <li key={f} className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={albarShowcase.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Sitio oficial <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {albarShowcase.lines.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => preview(l.catalogId)}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 group focus-ring text-left"
                  aria-label={`Ver catálogo Albar ${l.label}`}
                >
                  <img
                    src={l.image}
                    alt={`Línea ${l.label} de Albar`}
                    width="800"
                    height="600"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" aria-hidden="true" />
                  <span className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-2 text-white">
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-200">Línea</span>
                      <span className="block text-lg font-black leading-tight">{l.label}</span>
                    </span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-slate-900 shrink-0">
                      <Eye className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offiho */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center justify-center h-20 w-40 rounded-2xl bg-white border border-slate-200 shadow-[var(--shadow-sm)] mb-6">
                <img src={offihoShowcase.logo} alt="Offiho" width="160" height="100" loading="lazy" className="w-28 h-auto object-contain" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                Sillería <span className="gradient-text">Offiho</span>, Black y Econosillas
              </h2>
              <p className="text-slate-600">{offihoShowcase.tagline} Descarga el catálogo de la línea que necesitas.</p>
            </div>
            <a
              href={offihoShowcase.site}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 self-start lg:self-auto"
            >
              Sitio oficial <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {offihoShowcase.lines.map((l) => {
              const c = catalogById(l.catalogId);
              if (!c) return null;
              return (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => setActive(c)}
                  className="card-hover text-left overflow-hidden group focus-ring"
                  aria-label={`Ver catálogo ${l.label}`}
                >
                  <span className="block aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 p-3">
                    <img
                      src={c.cover}
                      alt={`Portada ${l.label}`}
                      width="560"
                      height="420"
                      loading="lazy"
                      className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="flex items-center justify-between gap-2 p-4">
                    <span className="font-black text-slate-900 leading-tight">{l.label}</span>
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-5">Familias de producto</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {offihoShowcase.families.map((f) => (
              <figure key={f.label} className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-slate-100 group">
                <img
                  src={f.image}
                  alt={`Offiho ${f.label}`}
                  width="800"
                  height="534"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" aria-hidden="true" />
                <figcaption className="absolute left-3 bottom-3 text-sm font-black text-white">{f.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white p-10 lg:p-16 text-center">
          <div className="absolute inset-0 surface-grid-dark opacity-50" aria-hidden="true" />
          <div className="absolute -right-32 -top-32 w-[400px] h-[400px] bg-blue-600/30 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">¿Buscas un catálogo que no aparece?</h2>
            <p className="text-slate-300 mb-8">
              Escríbenos y te lo conseguimos. Cotizamos mobiliario, papelería y oficina al mayoreo.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=Hola%20Lomas%2C%20busco%20un%20cat%C3%A1logo`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> Hablar con un asesor
            </a>
          </div>
        </div>
      </section>

      {/* Preview modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista previa: ${active.brand} ${active.title}`}
          >
            <button
              type="button"
              aria-label="Cerrar vista previa"
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />
            <div className="relative flex flex-col w-full max-w-5xl h-[88vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">{active.brand}</p>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 truncate">{active.title}</h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={driveDownloadUrl(active.driveId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors focus-ring"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Descargar</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Cerrar"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus-ring"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <iframe
                key={active.id}
                src={drivePreviewUrl(active.driveId)}
                title={`Vista previa de ${active.brand} ${active.title}`}
                className="flex-1 w-full bg-slate-100"
                allow="autoplay"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

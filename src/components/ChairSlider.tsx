import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from 'lucide-react';
import { products } from '../data/products';
import {
  brandGalleries,
  catalogById,
  driveDownloadUrl,
  galleryBrands,
  type GalleryBrand,
} from '../data/downloads';
import { cn } from '../lib/cn';

type Slide = { sku: string; name: string; brand: GalleryBrand; image: string };
type GalleryState = { brand: GalleryBrand; images: { src: string; alt: string }[]; index: number };

const AUTOPLAY_MS = 3500;

const brandLogos: Record<GalleryBrand, string> = {
  Offiho: '/logos/trim/offiho.png',
  Albar: '/logos/trim/albar.png',
};

function useSlides(): Slide[] {
  return useMemo(() => {
    const byBrand = galleryBrands.map((brand) =>
      products
        .filter((p) => p.category === 'Mobiliario de Oficina' && p.brand === brand)
        .map((p) => ({ sku: p.sku, name: p.name, brand, image: p.image }))
    );
    const out: Slide[] = [];
    const max = Math.max(...byBrand.map((b) => b.length));
    for (let i = 0; i < max; i++) byBrand.forEach((b) => b[i] && out.push(b[i]));
    return out;
  }, []);
}

export default function ChairSlider() {
  const slides = useSlides();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [gallery, setGallery] = useState<GalleryState | null>(null);

  const scrollStep = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? 200) + 16;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    if (reduceMotion || paused || gallery || slides.length === 0) return;
    const id = window.setInterval(() => scrollStep(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, gallery, slides.length]);

  const open = (s: Slide) => {
    const lead = { src: s.image, alt: s.name };
    setGallery({ brand: s.brand, images: [lead, ...brandGalleries[s.brand].images], index: 0 });
  };

  const move = (dir: 1 | -1) =>
    setGallery((g) => (g ? { ...g, index: (g.index + dir + g.images.length) % g.images.length } : g));

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGallery(null);
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === 'ArrowLeft') move(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [gallery]);

  if (slides.length === 0) return null;

  const current = gallery ? gallery.images[gallery.index] : null;
  const gBrand = gallery ? brandGalleries[gallery.brand] : null;
  const gCatalog = gBrand ? catalogById(gBrand.catalogId) : undefined;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-end justify-between gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            {galleryBrands.map((b) => (
              <span key={b} className="inline-flex items-center justify-center h-12 w-24 rounded-xl bg-white border border-slate-200 shadow-[var(--shadow-sm)]">
                <img src={brandLogos[b]} alt="" width="96" height="48" className="max-h-9 max-w-[4.5rem] w-auto h-auto object-contain" />
              </span>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Mobiliario Sillería Offiho y Albar</p>
            <p className="text-sm text-slate-600">Toca una silla para ver más imágenes de la marca.</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollStep(-1)}
            aria-label="Sillas anteriores"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors focus-ring"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollStep(1)}
            aria-label="Sillas siguientes"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors focus-ring"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carrusel"
        aria-label="Sillas Offiho y Albar"
      >
        {slides.map((s) => (
          <button
            key={s.sku}
            type="button"
            onClick={() => open(s)}
            aria-label={`Ver galería ${s.brand}: ${s.name}`}
            className="group snap-start shrink-0 w-[46%] sm:w-[30%] lg:w-[19%] bg-white rounded-2xl border border-slate-200 shadow-[var(--shadow-sm)] overflow-hidden text-left hover:border-blue-300 hover:shadow-md transition-all focus-ring"
          >
            <span className="block aspect-square bg-white">
              <img
                src={s.image}
                alt={s.name}
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="flex items-center justify-between gap-2 px-3 py-2.5 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">{s.brand}</span>
              <span className="text-[11px] font-semibold text-slate-500 truncate">{s.sku}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {gallery && current && gBrand && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Galería ${gallery.brand}`}
          >
            <button
              type="button"
              aria-label="Cerrar galería"
              onClick={() => setGallery(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <div className="relative flex flex-col w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Galería</p>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 truncate">
                    {gallery.brand} · {gallery.index + 1} / {gallery.images.length}
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {gCatalog && (
                    <a
                      href={driveDownloadUrl(gCatalog.driveId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors focus-ring"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Catálogo</span>
                    </a>
                  )}
                  <a
                    href={gBrand.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sitio oficial de ${gallery.brand}`}
                    className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus-ring"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setGallery(null)}
                    aria-label="Cerrar"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus-ring"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 min-h-0 bg-slate-50 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="max-h-[62vh] w-full object-contain"
                  />
                </AnimatePresence>
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-md hover:bg-white transition-colors focus-ring"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-md hover:bg-white transition-colors focus-ring"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto p-3 border-t border-slate-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {gallery.images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setGallery((g) => (g ? { ...g, index: i } : g))}
                    aria-label={`Ver imagen ${i + 1}`}
                    aria-current={i === gallery.index}
                    className={cn(
                      'shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-colors focus-ring bg-slate-100',
                      i === gallery.index ? 'border-blue-600' : 'border-transparent hover:border-slate-300'
                    )}
                  >
                    <img src={img.src} alt="" width="80" height="64" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

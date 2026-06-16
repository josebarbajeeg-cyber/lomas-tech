import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight, Award, Calendar, CheckCircle2, ChevronLeft, ChevronRight,
  HardDrive, Mail, MapPin, MessageCircle, Minus, Network, Phone,
  Printer, ShieldCheck, ShoppingCart, Sparkles, Truck, Wifi,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import BrandsSection from './BrandsSection';
import ContactForm from './ContactForm';
import Faq from './Faq';
import { ProductImage } from './ProductImage';
import SEO from '../seo/SEO';
import { faqSchema, itemListSchema } from '../seo/schemas';
import { products } from '../data/products';
import { brands } from '../data/brands';
import { faqs } from '../data/faqs';
import { STATUS_STYLES } from '../lib/status';
import { cn } from '../lib/cn';
import {
  EMAIL_SALES,
  EMAIL_SUPPORT,
  PHONE_DISPLAY,
  PHONE_E164,
  ROUTES,
  SITE_URL,
  WHATSAPP_URL,
  formatAddress,
} from '../config/siteConfig';

const PRODUCT_COUNT = products.length;
const BRAND_COUNT = brands.length;

const featuredCategories = [
  {
    title: 'Impresión y Multifuncionales',
    blurb: 'Impresoras y multifuncionales láser de Xerox, Canon y más para oficinas de todos los tamaños.',
    category: 'Impresión y Multifuncionales',
    icon: Printer,
  },
  {
    title: 'Consumibles',
    blurb: 'Tóner y tinta originales con respaldo del fabricante para Canon, Xerox y más.',
    category: 'Consumibles',
    icon: Sparkles,
  },
  {
    title: 'Cómputo',
    blurb: 'Laptops y desktops corporativos de HP, Lenovo, Dell y más.',
    category: 'Cómputo',
    icon: HardDrive,
  },
  {
    title: 'Servidores y Almacenamiento',
    blurb: 'Infraestructura de servidores y soluciones de almacenamiento empresarial.',
    category: 'Servidores y Almacenamiento',
    icon: Network,
  },
  {
    title: 'Digitalización',
    blurb: 'Escáneres de alta velocidad Canon y Xerox para digitalización de archivos corporativos.',
    category: 'Digitalización de Documentos',
    icon: Wifi,
  },
  {
    title: 'Papel',
    blurb: 'Papel y suministros de alta calidad para impresoras y copiadoras.',
    category: 'Papel',
    icon: ShoppingCart,
  },
];

const bestSellersSkus = [
  'B405_DN', 'B600_DN', '2223C024AA',
  '421G6LA#ABM', '20SL00VNLM', 'MMM55',
  '2995C003AA', '1242C001AA',
];

const bestSellers = products
  .filter((p) => bestSellersSkus.includes(p.sku))
  .sort((a, b) => bestSellersSkus.indexOf(a.sku) - bestSellersSkus.indexOf(b.sku));

const heroImages = [
  'https://i.imgur.com/DPDzM7a.jpeg',
  'https://i.imgur.com/ebofAco.jpeg',
  'https://i.imgur.com/bghAFK9.jpeg',
  'https://i.imgur.com/pvFQUSP.jpeg',
  'https://i.imgur.com/9XyWGDl.jpeg',
  'https://i.imgur.com/cd7oUiJ.jpeg',
];

const aboutImages = [
  'https://i.imgur.com/675cRCL.png',
  'https://i.imgur.com/kj8SIRm.png',
  'https://i.imgur.com/urcDB09.png',
  'https://i.imgur.com/QMaCl0i.png',
  'https://i.imgur.com/pRoPNzL.png',
];

const trustChips = [
  { icon: Calendar,    label: '15+ años en el mercado mexicano' },
  { icon: Truck,       label: 'Envío 24–48 h' },
  { icon: ShieldCheck, label: 'Factura electrónica CFDI 4.0' },
];

const valueProps = [
  {
    icon: ShoppingCart,
    color: 'bg-blue-500/15 text-blue-300',
    title: 'Precios de mayorista',
    text: 'Hasta 18% por debajo del PVP del fabricante. Escalas adicionales por volumen y crédito a 30, 60 y 90 días.',
  },
  {
    icon: Truck,
    color: 'bg-cyan-500/15 text-cyan-300',
    title: 'Envíos 24–48 h a toda la República',
    text: 'Operamos con DHL, Estafeta y FedEx. Mismo día en la zona metropolitana de Guadalajara para pedidos antes de las 14:00.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-emerald-500/15 text-emerald-300',
    title: 'Garantía oficial del fabricante',
    text: 'Distribuidores autorizados de 34 marcas. Si hay falla, gestionamos el RMA directo con la marca, sin trámites para el comprador.',
  },
];

type ComparisonRow = {
  feature: string;
  lomas: string;
  lomasYes?: boolean;
  marketplace: string;
  marketplaceYes?: boolean;
  importer: string;
  importerYes?: boolean;
};

const comparisonRows: ComparisonRow[] = [
  { feature: 'Pedido mínimo',                 lomas: '1 unidad',         lomasYes: true,  marketplace: '1 unidad',        marketplaceYes: true,  importer: '50+ unidades',   importerYes: false },
  { feature: 'Tiempo de entrega',             lomas: '24–48 h',          lomasYes: true,  marketplace: '5–10 días',       marketplaceYes: false, importer: '4–8 semanas',    importerYes: false },
  { feature: 'Factura CFDI 4.0',              lomas: 'Sí, automática',   lomasYes: true,  marketplace: 'Variable',        marketplaceYes: false, importer: 'Rara vez',       importerYes: false },
  { feature: 'Garantía oficial fabricante',   lomas: 'Sí',               lomasYes: true,  marketplace: 'No siempre',      marketplaceYes: false, importer: 'No',             importerYes: false },
  { feature: 'Soporte en español dedicado',   lomas: 'Sí, asesor por cuenta', lomasYes: true, marketplace: 'Chat genérico', marketplaceYes: false, importer: 'Inglés básico',  importerYes: false },
  { feature: 'Stock en almacén nacional',     lomas: 'Sí',               lomasYes: true,  marketplace: 'Drop-ship',       marketplaceYes: false, importer: 'Pedido a fábrica', importerYes: false },
];

export default function LandingPage() {
  const reduceMotion = useReducedMotion();
  const [heroIndex, setHeroIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);

  // Counts per category — derived from products.ts so it never drifts.
  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      map.set(p.category, (map.get(p.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const homeFaqs = useMemo(() => faqs.slice(0, 6), []);

  useEffect(() => {
    if (reduceMotion) return;
    const a = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 5000);
    const b = setInterval(() => setAboutIndex((p) => (p + 1) % aboutImages.length), 4500);
    return () => { clearInterval(a); clearInterval(b); };
  }, [reduceMotion]);

  return (
    <div className="flex flex-col antialiased">
      <SEO
        title="Lomas Tech-Wholesale | Mayorista de Tecnología y Papelería en Guadalajara"
        description={`Mayorista B2B de impresoras, tóners, cómputo y papelería en México. ${PRODUCT_COUNT} SKUs de ${BRAND_COUNT} marcas oficiales. Envío 24–48 h desde Guadalajara. Cotiza por WhatsApp.`}
        canonical="/"
        schema={[
          itemListSchema({
            name: 'Más vendidos en Lomas Tech-Wholesale',
            items: bestSellers.map((p) => ({
              name: p.name,
              url: `${SITE_URL}${ROUTES.catalog}?q=${encodeURIComponent(p.sku)}`,
              image: p.image,
            })),
          }),
          faqSchema(faqs),
        ]}
      />
      {/* ===================================================================
          Hero
         ================================================================ */}
      <section className="relative pt-12 lg:pt-20 pb-24 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
        <div className="absolute inset-0 surface-grid opacity-40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7 lg:space-y-8"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 pulse-dot text-blue-600" />
              Mayorista B2B en Guadalajara · Cobertura nacional
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Mayorista de Tecnología y Papelería en{' '}
              <span className="gradient-text">México</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              El catálogo más completo de impresoras, tóners, suministros y mucho más al mejor precio del mercado.
              Todo lo que necesitas de oficina y tecnología lo encuentras aquí.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to={ROUTES.catalog} className="btn-primary text-base px-7 py-3.5">
                Ver catálogo ({PRODUCT_COUNT} SKUs)
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-7 py-3.5"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                WhatsApp directo a un asesor
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {trustChips.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                  <Icon className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-400/20 via-cyan-300/20 to-transparent blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative glass rounded-3xl p-3 shadow-[var(--shadow-lg)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroIndex}
                    src={heroImages[heroIndex]}
                    alt={`Producto destacado ${heroIndex + 1} de ${heroImages.length}`}
                    width="800"
                    height="800"
                    loading="eager"
                    fetchPriority="high"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Controles */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    onClick={() => setHeroIndex((p) => (p - 1 + heroImages.length) % heroImages.length)}
                    aria-label="Imagen anterior"
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-slate-900 shadow-md hover:bg-white transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroIndex((p) => (p + 1) % heroImages.length)}
                    aria-label="Imagen siguiente"
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-slate-900 shadow-md hover:bg-white transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setHeroIndex(idx)}
                      aria-label={`Ir a imagen ${idx + 1}`}
                      aria-current={idx === heroIndex}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300',
                        idx === heroIndex ? 'w-8 bg-white shadow' : 'w-2 bg-white/50 hover:bg-white/80'
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white px-4 py-3 rounded-2xl shadow-[var(--shadow-lg)] flex items-center gap-3 border border-slate-100">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Truck className="w-5 h-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Envíos rápidos</span>
                  <span className="block text-base font-black text-slate-900">24/48 horas</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================
          Brands carousel
         ================================================================ */}
      <section className="py-14 bg-white border-y border-slate-100">
        <BrandsSection />
      </section>

      {/* ===================================================================
          About — Bento
         ================================================================ */}
      <section id="about" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card p-8 lg:p-10 space-y-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Acerca de Lomas
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Somos referente líder en la distribución de suministros de oficina
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Llevamos 15 años distribuyendo tecnología de oficina a empresas mexicanas. Operamos
              desde un almacén propio en la colonia Del Fresno (Guadalajara) y enviamos a las 32
              entidades de la República en 24 a 48 horas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Trabajamos directo con {BRAND_COUNT} marcas oficiales sin intermediarios. Eso se
              traduce en precios hasta 18% por debajo del PVP del fabricante y respaldo de garantía
              sin trámites.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
              Habla con un asesor B2B <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8 flex flex-col justify-between bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-700"
            >
              <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Experiencia</span>
              <p className="text-5xl lg:text-6xl font-black mt-3">15+</p>
              <p className="text-sm opacity-90 mt-2">Años distribuyendo en México</p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 flex flex-col justify-between"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Clientes B2B</span>
              <p className="text-5xl lg:text-6xl font-black mt-3 text-slate-900">2,400+</p>
              <p className="text-sm text-slate-600 mt-2">Distribuidores activos</p>
            </motion.div>
          </div>

          {/* Imagen bento — full width */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-12 card overflow-hidden p-0 relative aspect-[21/9] group"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={aboutIndex}
                src={aboutImages[aboutIndex]}
                alt={`Almacén Lomas, vista ${aboutIndex + 1}`}
                width="1400"
                height="600"
                loading="lazy"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <p className="font-bold text-lg">Operación logística en Guadalajara</p>
              <div className="flex items-center gap-2 z-10">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAboutIndex(idx)}
                    aria-label={`Ir a vista ${idx + 1}`}
                    aria-current={idx === aboutIndex}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      idx === aboutIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================
          Categories — 6 real categories with SKU counts
         ================================================================ */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Catálogo por categoría
            </h2>
            <p className="text-lg text-slate-600">
              {PRODUCT_COUNT} SKUs organizados por línea. Cada tarjeta abre el catálogo filtrado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const count = categoryCounts.get(cat.category) ?? 0;
              return (
                <motion.div
                  key={cat.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <Link
                    to={`${ROUTES.catalog}?category=${encodeURIComponent(cat.category)}`}
                    className="card-hover h-full p-7 flex flex-col group focus-ring"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mb-1">{cat.title}</h3>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                      {count} SKUs
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">{cat.blurb}</p>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Explorar <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          Comparison table — Lomas vs marketplaces vs importadores
         ================================================================ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Lomas vs marketplaces vs importadores
            </h2>
            <p className="text-lg text-slate-600">
              Lo que cambia cuando compras directo con un mayorista oficial.
            </p>
          </div>

          <div className="glass rounded-3xl overflow-hidden shadow-[var(--shadow-sm)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Comparativa entre Lomas, marketplaces genéricos e importadores directos
                </caption>
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200">
                    <th
                      scope="col"
                      className="text-left font-bold text-slate-700 uppercase tracking-wider text-xs px-5 py-4"
                    >
                      Característica
                    </th>
                    <th
                      scope="col"
                      className="text-left font-black text-blue-700 uppercase tracking-wider text-xs px-5 py-4 bg-blue-50"
                    >
                      Lomas
                    </th>
                    <th
                      scope="col"
                      className="text-left font-bold text-slate-600 uppercase tracking-wider text-xs px-5 py-4"
                    >
                      Marketplace genérico
                    </th>
                    <th
                      scope="col"
                      className="text-left font-bold text-slate-600 uppercase tracking-wider text-xs px-5 py-4"
                    >
                      Importador directo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        'border-b border-slate-100 last:border-b-0',
                        idx % 2 === 1 && 'bg-slate-50/40'
                      )}
                    >
                      <th
                        scope="row"
                        className="text-left font-semibold text-slate-900 px-5 py-4 align-top"
                      >
                        {row.feature}
                      </th>
                      <td className="px-5 py-4 align-top bg-blue-50/60">
                        <span className="inline-flex items-start gap-2 text-slate-900 font-semibold">
                          {row.lomasYes ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
                          )}
                          <span>{row.lomas}</span>
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-slate-600">
                        <span className="inline-flex items-start gap-2">
                          {row.marketplaceYes ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
                          )}
                          <span>{row.marketplace}</span>
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-slate-600">
                        <span className="inline-flex items-start gap-2">
                          {row.importerYes ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
                          )}
                          <span>{row.importer}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Best Sellers
         ================================================================ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">Más vendidos</h2>
              <p className="text-lg text-slate-600">Productos con alta rotación y excelente margen para tu negocio.</p>
            </div>
            <Link
              to={ROUTES.catalog}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Ver todo el catálogo <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => {
              const status = STATUS_STYLES[product.status];
              return (
                <article key={product.sku} className="card-hover overflow-hidden flex flex-col group">
                  <div className="relative aspect-square bg-slate-50 flex items-center justify-center p-6">
                    <span className={cn(
                      'absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider z-10',
                      status.bg, status.text, status.ring
                    )}>
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
                    <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">
                      {product.brand} • {product.category}
                    </p>
                    <h3 className="font-semibold text-slate-900 leading-snug line-clamp-2 min-h-[2.5rem] mb-4 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>

                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola, me interesa cotizar el SKU ${product.sku} (${product.name}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 font-semibold py-2.5 rounded-xl transition-colors text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                      Cotizar ahora
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          Value Props — única sección dark
         ================================================================ */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 surface-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              Por qué elegirnos
            </span>
            <h2 className="text-3xl lg:text-4xl font-black mt-4 tracking-tight">
              Construido para distribuidores que exigen más
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {valueProps.map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
                <span className={cn('inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5', color)}>
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-black tracking-tight mb-2">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          B2B CTA
         ================================================================ */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute -right-32 top-0 w-[500px] h-[500px] bg-blue-200/40 blur-3xl rounded-full" aria-hidden="true" />
        <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] bg-cyan-200/40 blur-3xl rounded-full" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-slate-700 px-5 py-2 rounded-full shadow-sm mb-8 border border-slate-200">
            <span className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Portal B2B Mayorista</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Optimiza tus compras con un{' '}
            <span className="gradient-text">asesor B2B dedicado</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Inventario en tiempo real, líneas de crédito a 30, 60 y 90 días, factura CFDI 4.0
            automática y un ejecutivo asignado a tu cuenta. Atendemos por WhatsApp en menos de
            4 horas hábiles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark text-base px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Contactar un asesor
            </a>
            <Link to={ROUTES.catalog} className="btn-secondary text-base px-8 py-4">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Inline FAQ — top 6, link to full page
         ================================================================ */}
      <Faq
        items={homeFaqs}
        title="Preguntas que recibimos a diario"
        subtitle={`Las 6 más comunes. Mira las ${faqs.length} en preguntas frecuentes.`}
      />
      <div className="max-w-3xl mx-auto px-6 md:px-8 -mt-8 mb-20 text-center">
        <Link
          to={ROUTES.faq}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
        >
          Ver todas las preguntas <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>

      {/* ===================================================================
          Map
         ================================================================ */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Visítanos</h2>
              <p className="text-lg text-slate-600 mt-2">Encuentra nuestras oficinas centrales en Guadalajara.</p>
            </div>
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span>{formatAddress('short')}</span>
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-lg)] border border-slate-200 h-[420px]">
            <iframe
              title="Ubicación de Lomas Tech-Wholesale en Guadalajara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.227054004451!2d-103.38131068877992!3d20.660339600250083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ade102726e0b%3A0x9df69b7a27aa8a36!2sPl%C3%A1tano%201406%2C%20Del%20Fresno%2C%2044909%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1778515123250!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          Contact
         ================================================================ */}
      <section id="contact" className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                Impulsamos tu <br />
                <span className="gradient-text">estrategia B2B</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Estamos listos para atender tus necesidades de mayoreo.
                Nuestro equipo de expertos te brindará atención personalizada.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">Oficinas centrales</h3>
                  <p className="text-slate-600">{formatAddress('long')}</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">Teléfono</h3>
                  <a href={`tel:${PHONE_E164}`} className="text-slate-600 hover:text-blue-600 transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">Correo</h3>
                  <a href={`mailto:${EMAIL_SALES}`} className="block text-slate-600 hover:text-blue-600 transition-colors">{EMAIL_SALES}</a>
                  <a href={`mailto:${EMAIL_SUPPORT}`} className="block text-slate-600 hover:text-blue-600 transition-colors">{EMAIL_SUPPORT}</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[var(--shadow-lg)] border border-slate-200/60">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

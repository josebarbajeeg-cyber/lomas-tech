import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, Search, X,
  Home, Package, Building2, Info, Phone,
  MessageCircle, Mail, MapPin, ArrowRight, Sparkles, TrendingUp,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/cn';
import {
  BRAND_NAME,
  EMAIL_SALES,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
} from '../config/siteConfig';

const navLinks = [
  { to: '/',         label: 'Inicio',    icon: Home,       hash: '' },
  { to: '/catalog',  label: 'Catálogo',  icon: Package,    hash: '' },
  { to: '/brands',   label: 'Marcas',    icon: Building2,  hash: '' },
  { to: '/#about',   label: 'Nosotros',  icon: Info,       hash: '#about' },
  { to: '/#contact', label: 'Contacto',  icon: Phone,      hash: '#contact' },
];

const popularSearches = [
  'Impresoras HP',
  'Tóner Lexmark',
  'Tinta Epson',
  'Multifuncional',
  'Papel bond carta',
];

// Category names MUST match the literal `Product.category` strings in
// src/data/products.ts. The catalog filter is exact-string equality, so a
// mismatch here returns zero products silently.
const popularCategories = [
  { label: 'Impresoras',  to: '/catalog?category=Impresi%C3%B3n%20y%20Digitalizaci%C3%B3n' },
  { label: 'Tóner',       to: '/catalog?category=Consumibles' },
  { label: 'Papel',       to: '/catalog?category=Papeler%C3%ADa' },
  { label: 'Cómputo',     to: '/catalog?category=C%C3%B3mputo' },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Cerrar drawers en cambio de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // Lock scroll
  useEffect(() => {
    const lock = isMenuOpen || isSearchOpen;
    const prev = document.body.style.overflow;
    if (lock) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isMenuOpen, isSearchOpen]);

  // Elevación al scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ESC para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const goToQuery = (q: string) => {
    navigate(`/catalog?q=${encodeURIComponent(q)}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1);
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 w-full z-40 transition-shadow duration-200',
          'bg-white/90 backdrop-blur-xl border-b border-slate-200/60',
          isScrolled && 'shadow-[0_6px_20px_-8px_rgba(15,23,42,0.12)]'
        )}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity focus-ring rounded-md"
            aria-label={`${BRAND_NAME}, ir al inicio`}
          >
            <img
              src="https://i.imgur.com/qeUrkYU.jpeg"
              alt="Lomas"
              width="120"
              height="48"
              className="h-9 sm:h-11 lg:h-14 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          {/* Nav links desktop (centrado, solo lg+) */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center font-semibold text-sm">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.to}>
                {l.to.startsWith('/#') ? (
                  <a
                    href={l.to}
                    className={cn(
                      'px-4 py-2 rounded-full transition-colors focus-ring',
                      isActive(l.to)
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    )}
                  >
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    to={l.to}
                    className={({ isActive: a }) => cn(
                      'px-4 py-2 rounded-full transition-colors focus-ring',
                      a
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    )}
                    end={l.to === '/'}
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Spacer para mobile/tablet */}
          <div className="flex-1 lg:hidden" />

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Search button (todos los breakpoints) */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Buscar productos"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus-ring"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* CTA WhatsApp — desktop xl+ */}
            <a
              href={`${WHATSAPP_URL}?text=Hola%20Lomas%2C%20me%20gustar%C3%ADa%20cotizar%20productos`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hidden xl:inline-flex items-center justify-center gap-2',
                'h-11 px-5 rounded-full font-semibold text-sm',
                'bg-blue-600 text-white hover:bg-blue-700 transition-colors',
                'shadow-[0_4px_12px_-2px_rgba(0,102,255,0.35)]'
              )}
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Cotizar ahora
            </a>

            {/* CTA compact — lg only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar por WhatsApp"
              className="hidden lg:inline-flex xl:hidden items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-ring"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </a>

            {/* Hamburguesa mobile/tablet */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus-ring"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          MOBILE DRAWER
          ===================================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />
            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-2xl flex flex-col"
            >
              {/* Header con gradiente */}
              <div className="relative overflow-hidden bg-slate-950 px-6 pt-6 pb-8 text-white">
                <div className="absolute inset-0 surface-grid-dark opacity-40" aria-hidden="true" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/30 blur-3xl rounded-full" aria-hidden="true" />
                <div className="absolute -left-16 bottom-0 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full" aria-hidden="true" />

                <div className="relative flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    Mayorista B2B
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Cerrar menú"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-ring text-white"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <h2 className="relative text-2xl font-black tracking-tight">Lomas Tech-Mayoreo</h2>
                <p className="relative text-sm text-slate-300 mt-1">Tecnología y papelería al mejor precio.</p>
              </div>

              {/* Quick CTAs */}
              <div className="px-5 -mt-5 relative z-10 grid grid-cols-2 gap-2.5">
                <a
                  href={`${WHATSAPP_URL}?text=Hola%20Lomas%2C%20quiero%20cotizar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start justify-between rounded-2xl bg-blue-600 text-white p-3.5 shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors min-h-[88px]"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span className="mt-2">
                    <span className="block text-[10px] uppercase tracking-wider opacity-80 font-bold">WhatsApp</span>
                    <span className="block text-sm font-bold leading-tight">Cotizar ahora</span>
                  </span>
                </a>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="flex flex-col items-start justify-between rounded-2xl bg-white border border-slate-200 p-3.5 shadow-sm hover:border-blue-300 hover:bg-blue-50/40 transition-colors min-h-[88px]"
                >
                  <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span className="mt-2">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Llámanos</span>
                    <span className="block text-sm font-bold text-slate-900 leading-tight">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </div>

              {/* Navegación */}
              <div className="px-5 pt-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2 px-1">Navegación</p>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 pb-4" aria-label="Menú principal">
                <ul className="space-y-0.5">
                  {navLinks.map((l) => {
                    const Icon = l.icon;
                    const active = isActive(l.to);
                    return (
                      <li key={l.to}>
                        {l.to.startsWith('/#') ? (
                          <a
                            href={l.to}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              'flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold transition-colors group',
                              active
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                            )}
                          >
                            <span className={cn(
                              'inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors',
                              active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                            )}>
                              <Icon className="w-4 h-4" aria-hidden="true" />
                            </span>
                            <span className="flex-1">{l.label}</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                          </a>
                        ) : (
                          <Link
                            to={l.to}
                            className={cn(
                              'flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold transition-colors group',
                              active
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                            )}
                          >
                            <span className={cn(
                              'inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors',
                              active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                            )}>
                              <Icon className="w-4 h-4" aria-hidden="true" />
                            </span>
                            <span className="flex-1">{l.label}</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* Categorías populares */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2.5 px-1 flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3" aria-hidden="true" /> Más buscado
                  </p>
                  <div className="flex flex-wrap gap-1.5 px-1">
                    {popularCategories.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-xs font-semibold text-slate-700 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Footer contacto */}
              <div className="border-t border-slate-100 px-5 py-4 bg-slate-50/60 space-y-2.5">
                <a
                  href={`mailto:${EMAIL_SALES}`}
                  className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{EMAIL_SALES}</span>
                </a>
                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">Guadalajara, Jalisco · Envío nacional</span>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          SEARCH OVERLAY
          ===================================================================== */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <button
              type="button"
              aria-label="Cerrar búsqueda"
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Buscar productos"
            >
              <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
                {/* Form */}
                <form onSubmit={handleSearch} role="search" className="flex items-center gap-2 sm:gap-3">
                  <label htmlFor="overlay-search" className="sr-only">Buscar productos</label>
                  <div className="relative flex-1">
                    <span aria-hidden="true" className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-blue-600" />
                    </span>
                    <input
                      id="overlay-search"
                      type="search"
                      autoFocus
                      placeholder="Buscar impresoras, tóner, papel, SKU…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl py-3.5 pl-12 pr-12 text-base sm:text-lg font-medium text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Limpiar búsqueda"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="hidden sm:inline-flex items-center justify-center h-12 px-5 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Buscar
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Cerrar"
                    className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors focus-ring"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </form>

                {/* Sugerencias */}
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3" aria-hidden="true" /> Búsquedas populares
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearches.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => goToQuery(q)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <Search className="w-3 h-3" aria-hidden="true" />
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-3 flex items-center gap-1.5">
                      <Package className="w-3 h-3" aria-hidden="true" /> Explorar categorías
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {popularCategories.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-700 transition-colors"
                        >
                          {c.label}
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs text-slate-400 text-center sm:text-left">
                  Presiona <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">ESC</kbd> para cerrar
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './components/LandingPage';
import CatalogPage from './components/CatalogPage';
import BrandsPage from './components/BrandsPage';
import FaqPage from './components/FaqPage';
import { ROUTES, WHATSAPP_URL } from './config/siteConfig';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-blue-600/20 selection:text-blue-700">
        <a href="#main" className="skip-link">Saltar al contenido</a>

        <Navbar />

        <main id="main" className="flex-grow">
          <Routes>
            <Route path={ROUTES.home} element={<LandingPage />} />
            <Route path={ROUTES.catalog} element={<CatalogPage />} />
            <Route path={ROUTES.brands} element={<BrandsPage />} />
            <Route path={ROUTES.faq} element={<FaqPage />} />
          </Routes>
        </main>

        <Footer />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--color-whatsapp)] text-white shadow-lg hover:bg-emerald-500 hover:scale-105 transition-transform duration-200 motion-reduce:hover:scale-100"
        >
          <MessageCircle className="w-7 h-7" aria-hidden="true" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </a>
      </div>
    </Router>
  );
}

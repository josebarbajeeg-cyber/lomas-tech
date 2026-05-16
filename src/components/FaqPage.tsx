import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import Faq from './Faq';
import SEO from '../seo/SEO';
import { breadcrumbSchema, faqSchema } from '../seo/schemas';
import { faqs } from '../data/faqs';
import { ROUTES, SITE_URL, WHATSAPP_URL } from '../config/siteConfig';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Preguntas frecuentes B2B | Lomas Tech-Wholesale"
        description="Respuestas a las dudas más comunes de distribuidores: pedidos mínimos, factura CFDI 4.0, crédito B2B, tiempos de envío, garantía y métodos de pago."
        canonical={ROUTES.faq}
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', url: `${SITE_URL}/` },
            { name: 'Preguntas frecuentes', url: `${SITE_URL}${ROUTES.faq}` },
          ]),
          faqSchema(faqs),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
        <div className="absolute inset-0 surface-grid opacity-40" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-8 py-16 lg:py-20">
          <Link
            to={ROUTES.home}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Volver al inicio
          </Link>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Preguntas frecuentes — <span className="gradient-text">Lomas Tech-Wholesale</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Más de 2,400 distribuidores nos eligen porque resolvemos sus dudas antes de comprar.
            Aquí están las 12 preguntas que recibimos cada semana, con respuestas directas.
          </p>
        </div>
      </section>

      {/* Full FAQ */}
      <Faq />

      {/* Final CTA */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white p-10 lg:p-14 text-center">
            <div className="absolute inset-0 surface-grid-dark opacity-50" aria-hidden="true" />
            <div className="absolute -right-32 -top-32 w-[400px] h-[400px] bg-blue-600/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">
                ¿Listo para tu primer pedido?
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Revisa los 213 SKUs en catálogo o escríbele directo a un asesor. Cotizamos pedidos por volumen en menos de 4 horas hábiles.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to={ROUTES.catalog} className="btn-primary text-base px-7 py-3.5">
                  Ver catálogo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base px-7 py-3.5"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

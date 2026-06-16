import { motion } from 'motion/react';
import { ShoppingCart, FileText, ArrowRight } from 'lucide-react';
import SEO from '../seo/SEO';
import { WHATSAPP_URL } from '../config/siteConfig';

const papelBondProducts = [
  {
    id: 1,
    brand: 'Paperline',
    name: 'Paperline Papel Bond Carta 97% Blancura 70 Grs. c/5000',
    image: 'https://i.imgur.com/6V6QDvs.png',
    blancura: '97%',
    gramaje: '70 Grs.',
  },
  {
    id: 2,
    brand: 'Reprograf',
    name: 'Reprograf Papel Bond Carta 92% Blancura 75 Grs. c/5000',
    image: 'https://i.imgur.com/RO6h1xl.png',
    blancura: '92%',
    gramaje: '75 Grs.',
  },
  {
    id: 3,
    brand: 'FaciaBond',
    name: 'FaciaBond Carta 100% Blancura 75 Grs. c/5000',
    image: 'https://i.imgur.com/QeKRYFF.png',
    blancura: '100%',
    gramaje: '75 Grs.',
  },
  {
    id: 4,
    brand: 'Xerox',
    name: 'Xerox Papel Ecológico Carta 93% Blancura 75 Grs. c/5000',
    image: 'https://i.imgur.com/c05CYuW.png',
    blancura: '93%',
    gramaje: '75 Grs.',
  },
  {
    id: 5,
    brand: 'Xerox',
    name: 'Xerox Papel Bond Carta 99% Blancura 75 Grs. c/5000',
    image: 'https://i.imgur.com/1SnUI41.png',
    blancura: '99%',
    gramaje: '75 Grs.',
  },
  {
    id: 6,
    brand: 'EcoBond',
    name: 'EcoBond Papel Carta 95% Blancura 70/75 Grs. c/5000',
    image: 'https://i.imgur.com/EYrKs5V.png',
    blancura: '95%',
    gramaje: '70/75 Grs.',
  },
];

export default function PapelBondPage() {
  return (
    <div className="flex flex-col antialiased">
      <SEO
        title="Papel Bond Carta | Lomas Tech-Wholesale"
        description="Papel bond carta mayorista: Paperline, Reprograf, FaciaBond, Xerox y EcoBond. Paquetes de 5,000 hojas en 70 y 75 gramos. Precios de distribuidora desde Guadalajara."
        canonical="/papel-bond"
      />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600">
              <FileText className="w-6 h-6" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Categoría exclusiva</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Papel Bond Carta
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            La mejor selección de papel bond carta en diferentes gramajes y porcentajes de blancura.
            Paquetes de 5,000 hojas a precio de mayorista, envío 24–48 h a toda la República.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {papelBondProducts.map((product, idx) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="card-hover overflow-hidden flex flex-col group bg-white"
              >
                <div className="relative bg-white flex items-center justify-center p-8 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={320}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 motion-reduce:group-hover:scale-100"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                      {product.brand}
                    </span>
                    <span className="text-[10px] text-slate-400">·</span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {product.blancura} Blancura · {product.gramaje}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 leading-snug mb-5 flex-1 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola, me interesa cotizar: ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                    Cotizar ahora
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-slate-600 mb-5 text-lg">
              ¿Necesitas grandes volúmenes? Contáctanos para obtener un precio especial.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, me interesa cotizar papel bond en volumen.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              Solicitar cotización por volumen
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

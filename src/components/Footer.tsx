import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import {
  EMAIL_SALES,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_E164,
  ROUTES,
  formatAddress,
} from '../config/siteConfig';

const supportLinks = [
  { label: 'Información de Envío', subject: 'Consulta sobre envíos' },
  { label: 'Garantía',              subject: 'Consulta de garantía' },
  { label: 'Política de Privacidad', subject: 'Solicitud de política de privacidad' },
  { label: 'Términos de Servicio',  subject: 'Solicitud de términos de servicio' },
];

const socialLinks = [
  { href: 'https://facebook.com/',  icon: Facebook,  label: 'Facebook'  },
  { href: 'https://instagram.com/', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/',  icon: Linkedin,  label: 'LinkedIn'  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full pt-16 pb-8 text-sm antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-black text-slate-900 tracking-tight">LOMAS</div>
          <p className="text-slate-500 leading-relaxed">
            Tu puente logístico hacia el futuro. Proveemos soluciones tecnológicas y de oficina para empresas que exigen excelencia.
          </p>
        </div>

        <nav aria-labelledby="footer-empresa">
          <h2 id="footer-empresa" className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Empresa</h2>
          <ul className="space-y-3">
            <li><a href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors">Nosotros</a></li>
            <li><Link to="/catalog" className="text-slate-600 hover:text-blue-600 transition-colors">Programa de Mayoreo</Link></li>
            <li><Link to="/brands" className="text-slate-600 hover:text-blue-600 transition-colors">Marcas</Link></li>
            <li><a href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contacto</a></li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-soporte">
          <h2 id="footer-soporte" className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Soporte</h2>
          <ul className="space-y-3">
            <li>
              <Link to={ROUTES.faq} className="text-slate-600 hover:text-blue-600 transition-colors">
                Preguntas frecuentes
              </Link>
            </li>
            {supportLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={`mailto:${EMAIL_SALES}?subject=${encodeURIComponent(l.subject)}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contacto</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>{formatAddress('long')}</span>
            </li>
            <li>
              <a href={`tel:${PHONE_E164}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone aria-hidden="true" className="w-4 h-4 text-blue-600" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_SALES}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail aria-hidden="true" className="w-4 h-4 text-blue-600" />
                <span>{EMAIL_SALES}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 font-medium text-xs md:text-sm text-center md:text-left">
          {LEGAL_NAME.toUpperCase()}
        </p>
        <ul className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-4 text-center md:text-left">
        <p className="text-slate-400 text-xs">
          © {year} Lomas Comercializadora Mayorista — Hecho en Guadalajara.
        </p>
      </div>
    </footer>
  );
}

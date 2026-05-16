// Domain not yet finalized. Default placeholder; swap on deploy.
// TODO(deploy): replace SITE_URL with the production origin.
export const SITE_URL = 'https://www.lomastech.mx';

export const BRAND_NAME = 'Lomas Tech-Wholesale';
export const LEGAL_NAME = 'Comercializadora Mayorista Lomas, S. de R.L. de C.V.';

export const NAP = {
  street: 'Plátano 1406',
  neighborhood: 'Del Fresno',
  postalCode: '44909',
  city: 'Guadalajara',
  region: 'Jalisco',
  regionCode: 'MX-JAL',
  country: 'México',
  countryCode: 'MX',
} as const;

export const PHONE_E164 = '+523336394904';
export const PHONE_DISPLAY = '33 3639 4904';
export const WHATSAPP_NUMBER = '523336394904';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL_SALES = 'ventas@lomas.com.mx';
export const EMAIL_SUPPORT = 'soporte@lomas.com.mx';

export const GEO = { lat: 20.660339600250083, lng: -103.38131088 } as const;

// Mon–Fri 9:00–18:00, Sat 9:00–14:00 (typical B2B hours; adjust if owner provides actuals)
export const OPEN_HOURS = [
  { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '09:00', closes: '18:00' },
  { days: ['Sa'], opens: '09:00', closes: '14:00' },
] as const;

export const SOCIAL = {
  facebook: '',
  instagram: '',
  linkedin: '',
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  brands: '/brands',
  faq: '/preguntas-frecuentes',
} as const;

/**
 * Formats the company address from NAP parts.
 *
 * - 'short': single-line, abbreviated city — for inline mentions / map cards.
 *   e.g. "Plátano 1406, Del Fresno, 44909 GDL"
 * - 'long': full canonical postal form — for footer / contact / schema.
 *   e.g. "Plátano 1406, Del Fresno, 44909 Guadalajara, Jal., México."
 */
export function formatAddress(format: 'short' | 'long' = 'long'): string {
  const { street, neighborhood, postalCode, city, region, country } = NAP;
  if (format === 'short') {
    return `${street}, ${neighborhood}, ${postalCode} GDL`;
  }
  // Region as abbreviated "Jal." for typical MX postal display
  const regionAbbr = region === 'Jalisco' ? 'Jal.' : region;
  return `${street}, ${neighborhood}, ${postalCode} ${city}, ${regionAbbr}, ${country}.`;
}

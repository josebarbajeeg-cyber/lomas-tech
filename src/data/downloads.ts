// Catálogos descargables (carpeta de Google Drive "Mayorista Lomas Catálogos de Papelería y Mobiliario").
// Las portadas viven en public/descargables/thumbs; el PDF se descarga y previsualiza desde Drive.

export type DownloadSection = 'Albar' | 'Offiho' | 'Oficina y papelería';

export interface Catalog {
  id: string;
  driveId: string;
  title: string;
  brand: string;
  section: DownloadSection;
  year?: string;
  sizeMb?: number;
  description: string;
  cover: string;
}

export const downloadSections: DownloadSection[] = ['Albar', 'Offiho', 'Oficina y papelería'];

const thumb = (name: string) => `/descargables/thumbs/${name}.jpg`;

export const catalogs: Catalog[] = [
  // --- Albar ---
  { id: 'albar-oficinas',   driveId: '1ZrGs4UGdO_oc_uQlRTKTgJn10i0ON4d5', title: 'Línea Oficinas',      brand: 'Albar', section: 'Albar', year: '2026',  sizeMb: 9.1,  description: 'Sillas operativas, semi-ejecutivas, secretariales y de visita para oficina.', cover: thumb('albar-oficinas') },
  { id: 'albar-escritorios', driveId: '1vQ325D4YviD1tcvlsgO9vHK1aq6ULvV4', title: 'Línea Escritorios',  brand: 'Albar', section: 'Albar',                  sizeMb: 17.6, description: 'Escritorios y mobiliario de oficina para equipar espacios de trabajo.',      cover: thumb('albar-linea-escritorios') },
  { id: 'albar-escolar',    driveId: '1-_9oCZtcMwY1x0q01rv7HnU8_SqG14Pk', title: 'Línea Escolar',       brand: 'Albar', section: 'Albar', year: '27-28', sizeMb: 2,    description: 'Mobiliario escolar para aulas y escuelas.',                                 cover: thumb('albar-escolar') },
  { id: 'albar-salas',      driveId: '1BB8H38BFQKkNOYBovq_7q9fQrD7VTTFZ', title: 'Línea Salas',         brand: 'Albar', section: 'Albar', year: '27-28', sizeMb: 1.7,  description: 'Salas y mobiliario para áreas de espera y descanso.',                       cover: thumb('albar-salas') },
  { id: 'albar-restaurantes', driveId: '1LN-3mSTplMeR9C6SF_WE24W97bl0CyvQ', title: 'Línea Restaurantes', brand: 'Albar', section: 'Albar', year: '27-28', sizeMb: 5.9,  description: 'Sillas y mobiliario para restaurantes y cafeterías.',                       cover: thumb('albar-restaurantes') },

  // --- Offiho ---
  { id: 'offiho-econosillas-2026', driveId: '1N42yg0aWCQmGq0wNXzZrv6cGvd2689Vm', title: 'Offiho + Econosillas', brand: 'Offiho', section: 'Offiho', year: '2026', sizeMb: 26.3, description: 'Catálogo completo de la colección 2026: todas las familias en un solo archivo.', cover: thumb('offiho-econosillas-2026') },
  { id: 'offiho-general',          driveId: '1sEaFVfoBlR-nOTMTuB0nDbPPZ5iUMGsH', title: 'Offiho + Econosillas · Catálogo general', brand: 'Offiho', section: 'Offiho', description: 'Catálogo general de Offiho y Econosillas.', cover: '/descargables/offiho/directivos.jpg' },
  { id: 'offiho-black',            driveId: '18h0JjvmhC8FkASgDhKgm1T2NVJNIScis', title: 'Offiho Black',         brand: 'Offiho', section: 'Offiho', year: '2026', sizeMb: 12.5, description: 'Colección Offiho Black: asientos de diseño para oficina y espacios de convivencia.', cover: thumb('offiho-black') },
  { id: 'offiho-econosillas',      driveId: '1LFxQM0yH50Ipu-Cs_uenXCaiTtrB4oXI', title: 'Econosillas',          brand: 'Offiho', section: 'Offiho', year: '2026', sizeMb: 8.3,  description: 'Línea Econosillas: sillas económicas para oficina y visita.',                cover: thumb('offiho-econosillas') },
  { id: 'offiho-int-ext',          driveId: '1kmtidokMuQ86iw6oiV2kXVRKwDjkE2dE', title: 'Interior / Exterior',  brand: 'Offiho', section: 'Offiho', year: '2026', sizeMb: 12.8, description: 'Mesas, sillas y bancos para interiores y exteriores.',                      cover: thumb('offiho-int-ext') },
  { id: 'offiho-escolar',          driveId: '1gU1ZpYMUwnN_BPSqhZodf5dCh5QgtpD_', title: 'Colección Escolar',    brand: 'Offiho', section: 'Offiho',              sizeMb: 15.5, description: 'Sillas y pupitres para aulas, escuelas y centros de capacitación.',          cover: thumb('offiho-escolar') },

  // --- Oficina y papelería ---
  { id: 'deli-2026',       driveId: '1Q9VhIEDVfiWeVALmf6dzvwnHOBq9PEoi', title: 'Catálogo de productos', brand: 'Deli',   section: 'Oficina y papelería', year: '2026', sizeMb: 46.4, description: 'Catálogo de productos Deli 2026: papelería y artículos de oficina.',            cover: thumb('deli') },
  { id: 'nextep-2026',     driveId: '1-xuvLv8gadWVR0ofXNyL-2koOQW_oY9k', title: 'Catálogo de productos', brand: 'Nextep', section: 'Oficina y papelería', year: '2026', sizeMb: 45.9, description: 'Papelería, tecnología y punto de venta.',                                      cover: thumb('nextep') },
  { id: 'nextep-folleto',  driveId: '1dFh9vFswiUsCeuo8rHf_rbZO-LAWTDVk', title: 'Folleto de papelería',  brand: 'Nextep', section: 'Oficina y papelería', year: '2024', sizeMb: 5.6,  description: 'Papelería y accesorios para oficina: organización, mobiliario y limpieza.',    cover: thumb('nextep-folleto') },
  { id: 'tops-2025',       driveId: '1uIY9uWwl2ZLHqdO_l1rhR6JkXf7JflT3', title: 'Catálogo digital',      brand: 'Tops',   section: 'Oficina y papelería', year: '2025', sizeMb: 13.2, description: 'Catálogo digital de productos Tops Products.',                                 cover: thumb('tops') },
  { id: 'saira-2025',      driveId: '1mb6s23i9qHxO2rV1ExPLynO3ra5AZgqK', title: 'Catálogo Saira',        brand: 'Saira',  section: 'Oficina y papelería', year: '2025', sizeMb: 31.1, description: 'Catálogo de productos Saira 2025.',                                            cover: thumb('saira') },
  { id: 'alfra-2026',      driveId: '1idZZWWeHaowcvPgQF1aM8yNgBwFfv_i3', title: 'Catálogo Alfra',        brand: 'Alfra',  section: 'Oficina y papelería', year: '2026', sizeMb: 14.6, description: 'Catálogo 2026: redefiniendo la comunicación visual.',                          cover: thumb('alfra') },
  { id: 'papeleria-2024',  driveId: '1jHWiOarMfjPXPXS_NFmWQJcjTqLOOH5E', title: 'Catálogo de Papelería', brand: 'Papelería', section: 'Oficina y papelería', year: '2024', sizeMb: 13.8, description: 'Catálogo de papelería para tu oficina.',                                       cover: thumb('papeleria') },
  { id: 'gompe-2023',      driveId: '1gOLXM1GjzEMwjN8h996C64bPWyAsOLoh', title: 'Línea Escritorios',     brand: 'Gompe',  section: 'Oficina y papelería', year: '2023', sizeMb: 3.7,  description: 'Catálogo 2023 de la línea de escritorios Gompe.',                              cover: thumb('gompe') },
];

export const catalogById = (id: string) => catalogs.find((c) => c.id === id);

export const driveDownloadUrl = (driveId: string) => `https://drive.google.com/uc?export=download&id=${driveId}`;
export const driveViewUrl = (driveId: string) => `https://drive.google.com/file/d/${driveId}/view`;
export const drivePreviewUrl = (driveId: string) => `https://drive.google.com/file/d/${driveId}/preview`;
export const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1SwzVmsqEQtE__H85Gc48bxDtxbapnHMc';

// --- Contenido visual de las marcas (imágenes en public/descargables) ---

export const albarShowcase = {
  name: 'Albar',
  logo: '/logos/norm/albar.png',
  site: 'https://grupoalbar.com/',
  tagline: 'Muebles para oficina, escuelas, salas y restaurantes.',
  families: ['Semi-ejecutivas', 'Operativos', 'Secretariales', 'Visitantes', 'Confortables', 'Bancas', 'Entrega inmediata'],
  lines: [
    { label: 'Oficinas',     image: '/descargables/albar/oficinas.jpg',     catalogId: 'albar-oficinas' },
    { label: 'Escolar',      image: '/descargables/albar/escolar.jpg',      catalogId: 'albar-escolar' },
    { label: 'Salas',        image: '/descargables/albar/salas.jpg',        catalogId: 'albar-salas' },
    { label: 'Restaurantes', image: '/descargables/albar/restaurantes.jpg', catalogId: 'albar-restaurantes' },
  ],
};

export const offihoShowcase = {
  name: 'Offiho',
  logo: '/logos/norm/offiho.png',
  site: 'https://www.offiho.com/',
  tagline: 'Sillería y mobiliario para oficina, escuela, interior y exterior.',
  lines: [
    { label: 'Offiho Black',       catalogId: 'offiho-black' },
    { label: 'Econosillas',        catalogId: 'offiho-econosillas' },
    { label: 'Interior / Exterior', catalogId: 'offiho-int-ext' },
    { label: 'Colección Escolar',  catalogId: 'offiho-escolar' },
  ],
  families: [
    { label: 'Directivos',          image: '/descargables/offiho/directivos.jpg' },
    { label: 'Ejecutivos',          image: '/descargables/offiho/ejecutivos.jpg' },
    { label: 'Operativos',          image: '/descargables/offiho/operativos.jpg' },
    { label: 'Industrial',          image: '/descargables/offiho/industrial.jpg' },
    { label: 'Visitantes interior', image: '/descargables/offiho/visitantes-interior.jpg' },
    { label: 'Visitantes exterior', image: '/descargables/offiho/visitantes-exterior.jpg' },
    { label: 'Mesas',               image: '/descargables/offiho/mesas.jpg' },
    { label: 'Bancos',              image: '/descargables/offiho/bancos.jpg' },
    { label: 'Confortables',        image: '/descargables/offiho/confortables.jpg' },
    { label: 'Bancas',              image: '/descargables/offiho/bancas.jpg' },
    { label: 'Escolar',             image: '/descargables/offiho/escolar.jpg' },
    { label: 'Accesorios',          image: '/descargables/offiho/accesorios.jpg' },
  ],
};

// --- Galerías de marca (slider de sillas en /descargables) ---

export type GalleryBrand = 'Offiho' | 'Albar';

export const galleryBrands: GalleryBrand[] = ['Offiho', 'Albar'];

const galleryImages = (brand: GalleryBrand) =>
  [1, 2, 3, 4, 5].map((n) => ({
    src: `/descargables/galeria/${brand.toLowerCase()}-${n}.jpg`,
    alt: `${brand}, imagen ${n} de la galería`,
  }));

export const brandGalleries: Record<GalleryBrand, { catalogId: string; site: string; images: { src: string; alt: string }[] }> = {
  Offiho: { catalogId: 'offiho-econosillas-2026', site: 'https://www.offiho.com/', images: galleryImages('Offiho') },
  Albar:  { catalogId: 'albar-oficinas',          site: 'https://grupoalbar.com/', images: galleryImages('Albar') },
};

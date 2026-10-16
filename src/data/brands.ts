// Source of truth for the brands we distribute.
// Brands with logo: '' render as text-only in BrandsSection / BrandsPage.
// Each brand appears exactly once, grouped by its single most accurate category
// and sorted alphabetically within the group.
// Logos live in public/logos/norm/: trimmed and scaled to the same ink box on a
// common canvas so every logo renders at the same visual size.

export type BrandCategory = 'Impresión' | 'Cómputo' | 'Papelería' | 'Mobiliario' | 'Accesorios' | 'General';

export interface Brand {
  name: string;
  logo: string;
  category: BrandCategory;
}

export const brands: Brand[] = [
  // --- Impresión ---
  { name: 'Brother',      logo: '/logos/norm/brother.png',                  category: 'Impresión' },
  { name: 'Canon',        logo: '/logos/norm/canon.png',                    category: 'Impresión' },
  { name: 'Epson',        logo: '/logos/norm/epson.png',                    category: 'Impresión' },
  { name: 'HP',           logo: '/logos/norm/hp.png',                       category: 'Impresión' },
  { name: 'Kodak Alaris', logo: '/logos/norm/kodak-alaris.png',             category: 'Impresión' },
  { name: 'Lexmark',      logo: '/logos/norm/lexmark.png',                  category: 'Impresión' },
  { name: 'Xerox',        logo: '/logos/norm/xerox.png',                    category: 'Impresión' },

  // --- Cómputo ---
  { name: 'Acer',         logo: '/logos/norm/acer.png',                     category: 'Cómputo' },
  { name: 'AOC',          logo: '/logos/norm/aoc.png',                      category: 'Cómputo' },
  { name: 'Asus',         logo: '/logos/norm/asus.png',                     category: 'Cómputo' },
  { name: 'BenQ',         logo: '/logos/norm/benq.png',                     category: 'Cómputo' },
  { name: 'Dell',         logo: '/logos/norm/dell.png',                     category: 'Cómputo' },
  { name: 'Intel',        logo: '/logos/norm/intel.png',                    category: 'Cómputo' },
  { name: 'Kaspersky',    logo: '/logos/norm/kaspersky.png',                category: 'Cómputo' },
  { name: 'Lenovo',       logo: '/logos/norm/lenovo.png',                   category: 'Cómputo' },
  { name: 'LG',           logo: '/logos/norm/lg.png',                       category: 'Cómputo' },
  { name: 'Microsoft',    logo: '/logos/norm/microsoft.png',                category: 'Cómputo' },
  { name: 'Norton',       logo: '/logos/norm/norton.png',                   category: 'Cómputo' },
  { name: 'TP-Link',      logo: '/logos/norm/tp-link.png',                  category: 'Cómputo' },
  { name: 'Vorago',       logo: '/logos/norm/vorago.png',                   category: 'Cómputo' },
  { name: 'WatchGuard',   logo: '/logos/norm/watchguard.png',               category: 'Cómputo' },

  // --- Accesorios ---
  { name: 'Adata',        logo: '/logos/norm/adata.png',                    category: 'Accesorios' },
  { name: 'CyberPower',   logo: '/logos/norm/cyberpower.png',               category: 'Accesorios' },
  { name: 'Honeywell',    logo: '/logos/norm/honeywell.png',                category: 'Accesorios' },
  { name: 'Kingston',     logo: '/logos/norm/kingston.png',                 category: 'Accesorios' },
  { name: 'Logitech',     logo: '/logos/norm/logitech.png',                 category: 'Accesorios' },
  { name: 'Perfect Choice', logo: '/logos/norm/perfect-choice.png',           category: 'Accesorios' },
  { name: 'SanDisk',      logo: '/logos/norm/sandisk.png',                  category: 'Accesorios' },
  { name: 'Seagate',      logo: '/logos/norm/seagate.png',                  category: 'Accesorios' },
  { name: 'Tripp Lite',   logo: '/logos/norm/tripp-lite.png',               category: 'Accesorios' },
  { name: 'Verbatim',     logo: '/logos/norm/verbatim.png',                 category: 'Accesorios' },
  { name: 'Western Digital', logo: '/logos/norm/western-digital.png',          category: 'Accesorios' },

  // --- Papelería ---
  { name: 'Baco',         logo: '/logos/norm/baco.png',                     category: 'Papelería' },
  { name: 'Barrilito',    logo: '/logos/norm/barrilito.png',                category: 'Papelería' },
  { name: 'Bic',          logo: '/logos/norm/bic.png',                      category: 'Papelería' },
  { name: 'COPAMEX',      logo: '/logos/norm/copamex.png',                  category: 'Papelería' },
  { name: 'Deli',         logo: '/logos/norm/deli.png',                     category: 'Papelería' },
  { name: 'EcoBond',      logo: '/logos/norm/ecobond.png',                  category: 'Papelería' },
  { name: 'Estrella',     logo: '/logos/norm/estrella.png',                 category: 'Papelería' },
  { name: 'FaciaBond',    logo: '/logos/norm/faciabond.png',                category: 'Papelería' },
  { name: 'Fellowes',     logo: '/logos/norm/fellowes.png',                 category: 'Papelería' },
  { name: 'Papermate',    logo: '/logos/norm/papermate.png',                category: 'Papelería' },
  { name: 'Pelikan',      logo: '/logos/norm/pelikan.png',                  category: 'Papelería' },
  { name: 'Pritt',        logo: '/logos/norm/pritt.png',                    category: 'Papelería' },
  { name: 'Reprograf',    logo: '/logos/norm/reprograf.png',                category: 'Papelería' },
  { name: 'Scribe',       logo: '/logos/norm/scribe.png',                   category: 'Papelería' },
  { name: 'Tops',         logo: '/logos/norm/tops.png',                     category: 'Papelería' },

  // --- Mobiliario ---
  { name: 'Albar',        logo: '/logos/norm/albar.png',                    category: 'Mobiliario' },
  { name: 'Offiho',       logo: '/logos/norm/offiho.png',                   category: 'Mobiliario' },

  // --- General ---
  { name: 'Hisense',      logo: '/logos/norm/hisense.png',                  category: 'General' },
  { name: 'Honor',        logo: '/logos/norm/honor.png',                    category: 'General' },
  { name: 'Huawei',       logo: '/logos/norm/huawei.png',                   category: 'General' },
  { name: 'Motorola',     logo: '/logos/norm/motorola.png',                 category: 'General' },
  { name: 'Nextep',       logo: '/logos/norm/nextep.png',                   category: 'General' },
  { name: 'Samsung',      logo: '/logos/norm/samsung.png',                  category: 'General' },
  { name: 'Sony',         logo: '/logos/norm/sony.png',                     category: 'General' },
  { name: 'Xiaomi',       logo: '/logos/norm/xiaomi.png',                   category: 'General' },
];

export const brandCategories: BrandCategory[] = ['Impresión', 'Cómputo', 'Papelería', 'Mobiliario', 'Accesorios', 'General'];

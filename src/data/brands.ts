// Source of truth for the brands we distribute. Real brand names derived from
// `src/data/products.ts` (one entry per distinct `Product.brand`), ranked by SKU count.
//
// Logo URLs are inherited from the Google AI Studio scaffold and were authored
// against placeholder names ("Brand 1"…"Brand 34"). The pairing between a logo
// hash and the real brand name below is best-effort by SKU rank and may not
// match the actual logo. Replace each `logo` with the official brand-supplied
// URL (or remove the field) once available.
//
// Brands with logo: '' render text-only in BrandsSection / BrandsPage.

export type BrandCategory = 'Impresión' | 'Cómputo' | 'Papelería' | 'Mobiliario' | 'Accesorios' | 'General';

export interface Brand {
  name: string;
  logo: string;
  category: BrandCategory;
}

export const brands: Brand[] = [
  { name: 'HP',              logo: 'https://i.imgur.com/LpWZDil.png', category: 'Cómputo'    },
  { name: 'Vorago',          logo: 'https://i.imgur.com/kYXbta8.png', category: 'Accesorios' },
  { name: 'Nextep',          logo: 'https://i.imgur.com/wASDIHa.png', category: 'Accesorios' },
  { name: 'Brother',         logo: 'https://i.imgur.com/9efSQhs.png', category: 'Impresión'  },
  { name: 'Samsung',         logo: 'https://i.imgur.com/YivATB8.png', category: 'Cómputo'    },
  { name: 'Xerox',           logo: 'https://i.imgur.com/Uc0rNpj.png', category: 'Impresión'  },
  { name: 'Adata',           logo: 'https://i.imgur.com/ioKO1pS.png', category: 'Cómputo'    },
  { name: 'PCM',             logo: 'https://i.imgur.com/ToyebDa.png', category: 'Papelería'  },
  { name: 'Canon',           logo: 'https://i.imgur.com/a7bgGPw.png', category: 'Impresión'  },
  { name: 'Kingston',        logo: 'https://i.imgur.com/WZgBjL8.png', category: 'Cómputo'    },
  { name: 'TP-Link',         logo: 'https://i.imgur.com/AKG0KJ3.png', category: 'General'    },
  { name: 'Acer',            logo: 'https://i.imgur.com/CAczmVk.png', category: 'Cómputo'    },
  { name: 'Verbatim',        logo: 'https://i.imgur.com/fvx4XgI.png', category: 'Cómputo'    },
  { name: 'Perfect Choice',  logo: 'https://i.imgur.com/Sb8bNkp.png', category: 'Accesorios' },
  { name: 'Logitech',        logo: 'https://i.imgur.com/5ErShUY.png', category: 'Accesorios' },
  { name: 'Lenovo',          logo: 'https://i.imgur.com/c0DjRYl.png', category: 'Cómputo'    },
  { name: 'Dell',            logo: 'https://i.imgur.com/U51ECOq.png', category: 'Cómputo'    },
  { name: 'LG',              logo: 'https://i.imgur.com/lLN9Gqr.png', category: 'Cómputo'    },
  { name: 'Epson',           logo: 'https://i.imgur.com/Gy4gX5c.png', category: 'Impresión'  },
  { name: 'Kodak Alaris',    logo: 'https://i.imgur.com/jMdKFEw.png', category: 'Impresión'  },
  { name: 'Xiaomi',          logo: 'https://i.imgur.com/ZpClWcD.png', category: 'Cómputo'    },
  { name: 'Tripp Lite',      logo: 'https://i.imgur.com/ImqXekp.png', category: 'General'    },
  { name: 'Manhattan',       logo: 'https://i.imgur.com/TkVS6Qc.png', category: 'General'    },
  { name: 'Dragón XT',       logo: 'https://i.imgur.com/ZcS8Q63.png', category: 'Accesorios' },
  { name: 'Asus',            logo: 'https://i.imgur.com/bxUlVLL.png', category: 'Cómputo'    },
  { name: 'BenQ',            logo: 'https://i.imgur.com/pIcpkuL.png', category: 'Cómputo'    },
  { name: 'Lexmark',         logo: 'https://i.imgur.com/KtgXeiH.png', category: 'Impresión'  },
  { name: 'Microsoft',       logo: 'https://i.imgur.com/T3hDfWm.png', category: 'General'    },
  { name: 'HiLook',          logo: 'https://i.imgur.com/1xgUFlT.png', category: 'General'    },
  { name: 'S-Print',         logo: 'https://i.imgur.com/smi2Kcd.png', category: 'Impresión'  },
  { name: 'Huawei',          logo: 'https://i.imgur.com/kTpdz3y.png', category: 'Cómputo'    },
  { name: 'Kaspersky',       logo: 'https://i.imgur.com/EZ7nSZA.png', category: 'General'    },
  { name: 'Ezviz',           logo: 'https://i.imgur.com/jWBbXwn.png', category: 'General'    },
  { name: 'WatchGuard',      logo: 'https://i.imgur.com/C1Ho6qR.png', category: 'General'    },
  { name: 'Sony',            logo: '',                                category: 'Accesorios' },
  { name: 'Seagate',         logo: '',                                category: 'Cómputo'    },
  { name: 'Western Digital', logo: '',                                category: 'Cómputo'    },
  { name: 'Scribe',          logo: '',                                category: 'Papelería'  },
];

export const brandCategories: BrandCategory[] = ['Impresión', 'Cómputo', 'Papelería', 'Mobiliario', 'Accesorios', 'General'];

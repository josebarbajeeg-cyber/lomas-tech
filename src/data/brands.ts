// Source of truth for the brands we distribute.
// Brands with logo: '' render as text-only in BrandsSection / BrandsPage.

export type BrandCategory = 'Impresión' | 'Cómputo' | 'Papelería' | 'Mobiliario' | 'Accesorios' | 'General';

export interface Brand {
  name: string;
  logo: string;
  category: BrandCategory;
}

export const brands: Brand[] = [
  // --- Impresión ---
  { name: 'HP',              logo: 'https://i.imgur.com/LpWZDil.png',                                                          category: 'Impresión'  },
  { name: 'Brother',         logo: 'https://i.imgur.com/9efSQhs.png',                                                          category: 'Impresión'  },
  { name: 'Xerox',           logo: 'https://i.imgur.com/Uc0rNpj.png',                                                          category: 'Impresión'  },
  { name: 'Canon',           logo: 'https://i.imgur.com/a7bgGPw.png',                                                          category: 'Impresión'  },
  { name: 'Epson',           logo: 'https://i.imgur.com/Gy4gX5c.png',                                                          category: 'Impresión'  },
  { name: 'Kodak Alaris',    logo: 'https://i.imgur.com/jMdKFEw.png',                                                          category: 'Impresión'  },
  { name: 'Lexmark',         logo: 'https://i.imgur.com/KtgXeiH.png',                                                          category: 'Impresión'  },

  // --- Cómputo ---
  { name: 'Acer',            logo: 'https://i.imgur.com/CAczmVk.png',                                                          category: 'Cómputo'    },
  { name: 'Asus',            logo: 'https://i.imgur.com/bxUlVLL.png',                                                          category: 'Cómputo'    },
  { name: 'BenQ',            logo: 'https://i.imgur.com/pIcpkuL.png',                                                          category: 'Cómputo'    },
  { name: 'Dell',            logo: 'https://i.imgur.com/U51ECOq.png',                                                          category: 'Cómputo'    },
  { name: 'Hisense',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hisense.svg/200px-Hisense.svg.png', category: 'Cómputo'   },
  { name: 'Huawei',          logo: 'https://i.imgur.com/kTpdz3y.png',                                                          category: 'Cómputo'    },
  { name: 'Intel',           logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/200px-Intel_logo_2023.svg.png', category: 'Cómputo' },
  { name: 'Lenovo',          logo: 'https://i.imgur.com/c0DjRYl.png',                                                          category: 'Cómputo'    },
  { name: 'LG',              logo: 'https://i.imgur.com/lLN9Gqr.png',                                                          category: 'Cómputo'    },
  { name: 'Microsoft',       logo: 'https://i.imgur.com/T3hDfWm.png',                                                          category: 'Cómputo'    },
  { name: 'Verbatim',        logo: 'https://i.imgur.com/fvx4XgI.png',                                                          category: 'Cómputo'    },
  { name: 'Xiaomi',          logo: 'https://i.imgur.com/ZpClWcD.png',                                                          category: 'Cómputo'    },

  // --- Accesorios ---
  { name: 'Adata',           logo: 'https://i.imgur.com/ioKO1pS.png',                                                          category: 'Accesorios' },
  { name: 'CyberPower',      logo: '/logos/cyberpower.webp',                                                                     category: 'Accesorios' },
  { name: 'Dragón XT',       logo: 'https://i.imgur.com/ZcS8Q63.png',                                                          category: 'Accesorios' },
  { name: 'Honeywell',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Honeywell_logo.svg/200px-Honeywell_logo.svg.png', category: 'Accesorios' },
  { name: 'Kingston',        logo: 'https://i.imgur.com/WZgBjL8.png',                                                          category: 'Accesorios' },
  { name: 'Logitech',        logo: 'https://i.imgur.com/5ErShUY.png',                                                          category: 'Accesorios' },
  { name: 'Norton',          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/200px-Norton-logo-2021.svg.png', category: 'Accesorios' },
  { name: 'Perfect Choice',  logo: 'https://i.imgur.com/Sb8bNkp.png',                                                          category: 'Accesorios' },
  { name: 'Samsung',         logo: 'https://i.imgur.com/YivATB8.png',                                                          category: 'Accesorios' },
  { name: 'SanDisk',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SanDisk_2024_logo.svg/200px-SanDisk_2024_logo.svg.png', category: 'Accesorios' },
  { name: 'Seagate',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Seagate_logo.svg/200px-Seagate_logo.svg.png', category: 'Accesorios' },
  { name: 'Sony',            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/200px-Sony_logo.svg.png', category: 'Accesorios' },
  { name: 'Tops',            logo: '/logos/tops.jpg',                                                                            category: 'Accesorios' },
  { name: 'Vorago',          logo: 'https://i.imgur.com/kYXbta8.png',                                                          category: 'Accesorios' },
  { name: 'Western Digital', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/WD_Logo.svg/200px-WD_Logo.svg.png', category: 'Accesorios' },

  // --- Papelería ---
  { name: 'Baco',            logo: '/logos/baco.png',                                                                            category: 'Papelería'  },
  { name: 'Barrilito',       logo: '/logos/barrilito.png',                                                                      category: 'Papelería'  },
  { name: 'Bic',             logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Bic_%28company%29_Logo.svg/200px-Bic_%28company%29_Logo.svg.png', category: 'Papelería' },
  { name: 'COPAMEX',         logo: '/logos/coparmex.jpg',                                                                       category: 'Papelería'  },
  { name: 'Deli',            logo: '/logos/deli.jpg',                                                                           category: 'Papelería'  },
  { name: 'Estrella',        logo: '/logos/estrella.png',                                                                        category: 'Papelería'  },
  { name: 'FaciaBond',       logo: 'https://i.imgur.com/txYp896.png',                                                          category: 'Papelería'  },
  { name: 'Fellowes',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Fellowes_Brands_Logo_Silver_Black_NEW.jpg/200px-Fellowes_Brands_Logo_Silver_Black_NEW.jpg', category: 'Papelería' },
  { name: 'Nextep',          logo: 'https://i.imgur.com/wASDIHa.png',                                                          category: 'Papelería'  },
  { name: 'Paperline',       logo: 'https://i.imgur.com/c33IvF5.png',                                                          category: 'Papelería'  },
  { name: 'Papermate',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Paper_mate_textlogo.svg/200px-Paper_mate_textlogo.svg.png', category: 'Papelería' },
  { name: 'PCM',             logo: 'https://i.imgur.com/ToyebDa.png',                                                          category: 'Papelería'  },
  { name: 'Pelikan',         logo: '/logos/pelikan.webp',                                                                        category: 'Papelería'  },
  { name: 'Pritt',           logo: '/logos/pritt.png',                                                                          category: 'Papelería'  },
  { name: 'Reprograf',       logo: 'https://i.imgur.com/eHddZwz.png',                                                          category: 'Papelería'  },
  { name: 'S-Print',         logo: 'https://i.imgur.com/smi2Kcd.png',                                                          category: 'Papelería'  },
  { name: 'Scribe',          logo: '/logos/scribe.jpg',                                                                         category: 'Papelería'  },

  // --- Mobiliario ---
  { name: 'Albar',           logo: '/logos/albar.jpg',                                                                           category: 'Mobiliario' },
  { name: 'Offiho',          logo: '',                                                                                          category: 'Mobiliario' },

  // --- General ---
  { name: 'AOC',             logo: '/logos/aoc.png',                                                                             category: 'General'    },
  { name: 'Ezviz',           logo: 'https://i.imgur.com/jWBbXwn.png',                                                          category: 'General'    },
  { name: 'HiLook',          logo: 'https://i.imgur.com/1xgUFlT.png',                                                          category: 'General'    },
  { name: 'Honor',           logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Honor_2026_logo.svg/200px-Honor_2026_logo.svg.png', category: 'General' },
  { name: 'Kaspersky',       logo: 'https://i.imgur.com/EZ7nSZA.png',                                                          category: 'General'    },
  { name: 'Manhattan',       logo: 'https://i.imgur.com/TkVS6Qc.png',                                                          category: 'General'    },
  { name: 'Motorola',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Motorola-Logo.svg/200px-Motorola-Logo.svg.png', category: 'General' },
  { name: 'TP-Link',         logo: 'https://i.imgur.com/AKG0KJ3.png',                                                          category: 'General'    },
  { name: 'Tripp Lite',      logo: 'https://i.imgur.com/ImqXekp.png',                                                          category: 'General'    },
  { name: 'WatchGuard',      logo: 'https://i.imgur.com/C1Ho6qR.png',                                                          category: 'General'    },
];

export const brandCategories: BrandCategory[] = ['Impresión', 'Cómputo', 'Papelería', 'Mobiliario', 'Accesorios', 'General'];

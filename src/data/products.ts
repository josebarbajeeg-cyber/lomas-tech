
export interface Product {
  sku: string;
  name: string;
  brand: string;
  category: string;
  status: 'En Stock' | 'Poco Inventario' | 'OEM' | 'B2B TOP' | 'Original';
  image: string;
  description?: string;
  price?: string;
  oldPrice?: string;
  discount?: string;
  badge?: string;
  unit?: string;
}

export const products: Product[] = [
  // Accesorios y Gaming
  {
    sku: 'LGR300',
    name: 'Aro de Luz Vorago Game Factor LGR300 30cm',
    brand: 'Vorago',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/LGR300.png'
  },
  {
    sku: 'FKG400',
    name: 'Kit Ventiladores Vorago Game Factor FKG400 3 Fans 12mm',
    brand: 'Vorago',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/FKG400.png',
    badge: 'Gaming'
  },
  {
    sku: 'NE-460R',
    name: 'Silla Gamer Ergonómica Dragón XT Racing Rojo-Negro',
    brand: 'Dragón XT',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-460R.png'
  },
  {
    sku: 'NE-460N',
    name: 'Silla Gamer Ergonómica Dragón XT Racing Negro',
    brand: 'Dragón XT',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-460N.png'
  },
  {
    sku: 'NE-462R',
    name: 'Silla Gamer Ergonómica Dragón XT Falkor Rojo-Negro',
    brand: 'Dragón XT',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-462R.png'
  },
  {
    sku: 'NE-484',
    name: 'Teclado Gamer Dragon XT USB Mecánico Iluminado',
    brand: 'Dragón XT',
    category: 'Accesorios y Gaming',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-484.png'
  },
  // Audio
  {
    sku: 'PC-112600',
    name: 'BOCINA PERFECT CHOICE PC-112600 ESTEREO 2.0',
    brand: 'Perfect Choice',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PC-112600.png'
  },
  {
    sku: 'PC-111009',
    name: 'Audífonos Perfect Choice Diadema USB Micrófono Flexible',
    brand: 'Perfect Choice',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PC-111009.png'
  },
  {
    sku: '981-000667',
    name: 'Audifonos Logitech G433 Gaming Color Negro',
    brand: 'Logitech',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/981-000667.png'
  },
  {
    sku: 'HS-502',
    name: 'Diadema Vorago Gamer HS-502 Micrófono RGB 3.5mm',
    brand: 'Vorago',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HS-502.png'
  },
  {
    sku: '980-001315',
    name: 'BOCINAS LOGITECH Z607 MERIDA MULTIMEDIA 5.1',
    brand: 'Logitech',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/980-001315.png'
  },
  {
    sku: 'PC-112983',
    name: 'Mini Bafle Perfect Choice Apollo 8" Bluetooth',
    brand: 'Perfect Choice',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PC-112983.png'
  },
  {
    sku: 'PC-113034',
    name: 'Barra de Audio Perfect Choice Lungo Beat Bluetooth',
    brand: 'Perfect Choice',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PC-113034.png'
  },
  {
    sku: '980-000401',
    name: 'BOCINA LOGITECH Z313 2.1 50W RMS NEGRO',
    brand: 'Logitech',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/980-000401.png'
  },
  {
    sku: '981-000755',
    name: 'AUDIFONOS LOGITECH GAMING G332 MICROFONO',
    brand: 'Logitech',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/981-000755.png'
  },
  {
    sku: 'ESB-400',
    name: 'Audífonos Vorago Sport ESB-400 Bluetooth 5 TWS',
    brand: 'Vorago',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ESB-400.png'
  },
  {
    sku: 'NE-425',
    name: 'Diadema Nextep Micrófono Conexión USB Negro',
    brand: 'Nextep',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-425.png'
  },
  {
    sku: 'EL-995487',
    name: 'Audífonos Inalámbricos Perfect Choice Viva Buds Pro',
    brand: 'Perfect Choice',
    category: 'Audio',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/EL-995487.png'
  },
  // Cómputo
  {
    sku: '8ZQ75LTABM',
    name: 'Laptop HP ProBook 440 G7 14" Intel Core i5 10210U 256GB SSD',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/8ZQ75LTABM.png'
  },
  {
    sku: '153B4LTABM',
    name: 'Laptop HP 250 G7 15.6" Intel Core i7 1065G7 1TB HDD 8GB Ram',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/153B4LTABM.png'
  },
  {
    sku: '2E5H4LAABM',
    name: 'Desktop HP ProDesk 400 G6 SFF Intel Core i5 9400 512GB SSD',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/2E5H4LAABM.png'
  },
  {
    sku: '7ZU66LAABM',
    name: 'Desktop HP ProDesk 400 G5 DM Intel Core i5 9500T 256GB SSD',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/7ZU66LAABM.png'
  },
  {
    sku: '8PB56LTABM',
    name: 'All in One HP 205 G3 19.5" AMD A4 9125 1TB HDD',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/8PB56LTABM.png'
  },
  {
    sku: '81MB0004US',
    name: 'Laptop Lenovo 300e Chromebook 2G 11.6" Intel Celeron N4000',
    brand: 'Lenovo',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/81MB0004US.png'
  },
  {
    sku: '11FJ007KLS',
    name: 'All in One Lenovo V50a-24IMB 23.8" Intel Core i5 10400T 256GB',
    brand: 'Lenovo',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/11FJ007KLS.png'
  },
  {
    sku: '20U2S35A00',
    name: 'Laptop Lenovo Thinkpad L14 14" Intel Core i3 10110U 256GB SSD',
    brand: 'Lenovo',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/20U2S35A00.png'
  },
  {
    sku: '81VW003LLM',
    name: 'Laptop Lenovo IdeaPad S340-15IIL 15.6" Intel Core i5 1TB',
    brand: 'Lenovo',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/81VW003LLM.png'
  },
  {
    sku: '63JHH',
    name: 'Laptop Dell Vostro 3401 14" Intel Core i3 1005G1 1TB HDD',
    brand: 'Dell',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/63JHH.png'
  },
  {
    sku: 'KWNWX',
    name: 'Laptop Dell Inspiron 3505 15.6" Intel Core i3 1005G1 1TB HDD',
    brand: 'Dell',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/KWNWX.png'
  },
  {
    sku: '085PD',
    name: 'Laptop Dell Inspiron 15 5594 15.6" Intel Core i5 1035G1 256GB',
    brand: 'Dell',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/085PD.png'
  },
  {
    sku: 'K6NW5',
    name: 'Laptop Dell Latitude 14 3410 14" Intel Core i5 10210U 256GB',
    brand: 'Dell',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/K6NW5.png'
  },
  {
    sku: 'NX.HS5AL.003',
    name: 'Laptop Acer Aspire 3 A315-56-30C6 15.6" Intel Core i3',
    brand: 'Acer',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NX.HS5AL.003.png'
  },
  {
    sku: 'NX.HS5AL.00B',
    name: 'Laptop Acer Aspire 3 A315-56-52R4 15.6" Intel Core i5',
    brand: 'Acer',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NX.HS5AL.00B.png'
  },
  {
    sku: 'NX.HURAL.005',
    name: 'Laptop Acer Aspire 5 A514-53-72YP 14" Intel Core i7',
    brand: 'Acer',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NX.HURAL.005.png'
  },
  {
    sku: 'A540NA-GQ058T',
    name: 'Laptop Asus A540NA 15.6" Intel Celeron N3350 500 GB',
    brand: 'Asus',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/A540NA-GQ058T.png'
  },
  {
    sku: 'A543BA-GQ550T',
    name: 'Laptop Asus A543BA 15.6" AMD A4 9125 500 GB',
    brand: 'Asus',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/A543BA-GQ550T.png'
  },
  {
    sku: 'P2540FA',
    name: 'Laptop Asus ExpertBook P2450FA 15.6" Intel Core i5',
    brand: 'Asus',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/P2540FA-i58G512WP-01.png'
  },
  {
    sku: 'FX505DT-BQ017T',
    name: 'Laptop Asus TUF Gaming FX505DT 15.6" AMD R7 3750H',
    brand: 'Asus',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/FX505DT-BQ017T.png'
  },
  {
    sku: '4YX80LA',
    name: 'All in One POS HP RP9 G1 9115A 15.6" Intel Celeron',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/4YX80LA.png'
  },
  {
    sku: '1NW76UA',
    name: 'All in One POS HP Engage One Touch 141 14" Intel Celeron',
    brand: 'HP',
    category: 'Cómputo',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1NW76UA.png'
  },
  // Pantallas y Proyectores
  {
    sku: '65CCAAC6US',
    name: 'Monitor Lenovo LED LI2215S FHD 21.5" Panel TN',
    brand: 'Lenovo',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/65CCAAC6US.png'
  },
  {
    sku: '210-AUNF',
    name: 'Monitor Dell Entry E2220H 21.5" 1920x1080',
    brand: 'Dell',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/210-AUNF.png'
  },
  {
    sku: 'UM.XV6AA.A06',
    name: 'Monitor Acer LED V196HQL Ab 18.5" 1366x768',
    brand: 'Acer',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/UM.XV6AA.A06.png'
  },
  {
    sku: 'UM.UV6AA.005',
    name: 'Monitor Acer V6 V246HQL bi FHD 23.6" Panel IPS',
    brand: 'Acer',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/UM.UV6AA.005.png'
  },
  {
    sku: '70UN7100PUA',
    name: 'Pantalla LG Al ThinQ 4K UHD 70" 3840x2160',
    brand: 'LG',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/70UN7100PUA.png'
  },
  {
    sku: 'UN43TU6900',
    name: 'Televisor Samsung TU7000 43" Crystal UHD Smart TV',
    brand: 'Samsung',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/UN43TU6900FXZX.png'
  },
  {
    sku: '60UN7300PUA',
    name: 'Televisor LG 60UN7300PUA AI ThinQ 60" UHD 4K',
    brand: 'LG',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/60UN7300PUA.png'
  },
  {
    sku: 'MS550',
    name: 'Proyector BenQ MS550 3600 Lúmenes SVGA',
    brand: 'BenQ',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MS550.png'
  },
  {
    sku: '65UN7300PUC',
    name: 'Pantalla LG 65UN7300PUC TV AI ThinQ 65" UHD 4K',
    brand: 'LG',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/65UN7300PUC.png'
  },
  {
    sku: '65UN7000PUD',
    name: 'Televisor LG 65UN7000PUD 65" 4K UHD LED Smart TV',
    brand: 'LG',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/65UN7000PUD.png'
  },
  {
    sku: '50UN6951ZUF',
    name: 'Pantalla LG TV Al ThinQ 50" 4K UHD Smart TV',
    brand: 'LG',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/50UN6951ZUF.png'
  },
  {
    sku: 'LH32BETBLG',
    name: 'Televisor Samsung LED Profesional 32" LH32BETBLGK',
    brand: 'Samsung',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/LH32BETBLGKXZX.png'
  },
  {
    sku: 'UN65TU7000',
    name: 'Pantalla Samsung TU7000 65" UHD 4K Smart TV',
    brand: 'Samsung',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/UN65TU7000FXZX.png'
  },
  {
    sku: 'MH550',
    name: 'Proyector BenQ MH550 3500 Lúmenes Full HD',
    brand: 'BenQ',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MH550.png'
  },
  {
    sku: 'MW550',
    name: 'Proyector BenQ MW550 3600 Lúmenes WXGA',
    brand: 'BenQ',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MW550.png'
  },
  {
    sku: 'V11H843021',
    name: 'VIDEOPROYECTOR EPSON POWERLITE X41+',
    brand: 'Epson',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/V11H843021.png'
  },
  {
    sku: 'T6N32AA',
    name: 'Monitor POS HP LED L7014t 14" Wide Táctil',
    brand: 'HP',
    category: 'Pantallas y Proyectores',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/T6N32AA.png'
  },
  // Impresión y Digitalización
  {
    sku: 'DCP-B7535DW',
    name: 'Multifuncional Brother DCP-B7535DW Monocromática Láser Tóner Benefit',
    brand: 'Brother',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DCPB7535DW.png'
  },
  {
    sku: 'DCPL2551DW',
    name: 'Multifuncional Brother DCPL2551DW Monocromática Láser',
    brand: 'Brother',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DCPL2551DW.png'
  },
  {
    sku: 'G3110',
    name: 'Multifuncional Canon Pixma G3110 Color Tinta Continua',
    brand: 'Canon',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/2315C004AB.png'
  },
  {
    sku: 'B405DN',
    name: 'Multifuncional Xerox VersaLink B405DN Monocromática Láser',
    brand: 'Xerox',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/B405_DN.png'
  },
  {
    sku: 'G2110',
    name: 'Multifuncional Canon Pixma G2110 Color Tinta Continua',
    brand: 'Canon',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/2313C004AB.png'
  },
  {
    sku: 'MFC-T4500DW',
    name: 'Multifuncional Brother InkBenefit Tank Business MFC-T4500DW Color',
    brand: 'Brother',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MFCT4500DW.png'
  },
  {
    sku: 'C405DN',
    name: 'Multifuncional Xerox VersaLink C405DN Color Láser',
    brand: 'Xerox',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C405_DN.png'
  },
  {
    sku: 'B205_NI',
    name: 'Multifuncional Xerox B205_NI Monocromática Wi-Fi',
    brand: 'Xerox',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/B205_NI.png'
  },
  {
    sku: 'L6171',
    name: 'Multifuncional Epson EcoTank L6171 Color Tinta Continua',
    brand: 'Epson',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C11CG20301.png'
  },
  {
    sku: 'L805',
    name: 'Impresora de Inyección Epson Ecotank L805 Color',
    brand: 'Epson',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C11CE86301.png'
  },
  {
    sku: '1000w',
    name: 'Impresora Láser HP NeverStop 1000w Monocromática',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/4RY23ABGJ.png'
  },
  {
    sku: '8210',
    name: 'Impresora de Inyección HP OfficeJet 8210 Color',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/D9L63AAKY.png'
  },
  {
    sku: 'M521DN',
    name: 'Multifuncional HP LaserJet Pro M521DN Monocromática Láser',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/A8P79ABGJ.png'
  },
  {
    sku: 'MX321adn',
    name: 'Multifuncional Lexmark MX321adn Monocromática Láser',
    brand: 'Lexmark',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/36S0620.png'
  },
  {
    sku: 'B2236DW',
    name: 'Impresora Láser Lexmark B2236DW Monocromática',
    brand: 'Lexmark',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/18M0100.png'
  },
  {
    sku: 'Z1Z36AA',
    name: 'Escáner de Códigos de Barras POS HP II Lineales',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/Z1Z36AA.png'
  },
  {
    sku: 'TM-T88V',
    name: 'Impresora POS Epson TM-T88V-834 Térmica',
    brand: 'Epson',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C31CA85834.png'
  },
  {
    sku: '2000_s2',
    name: 'Escáner HP ScanJet Pro 2000 s2 ADF 600dpi',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/6FW06ABGJ.png'
  },
  {
    sku: 'N4000_snw1',
    name: 'Escáner HP ScanJet Pro N4000 snw1 ADF 600 dpi',
    brand: 'HP',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/6FW08ABGJ.png'
  },
  {
    sku: 'i1150',
    name: 'Escáner Kodak Alaris ScanMate i1150 600 dpi',
    brand: 'Kodak Alaris',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1664390.png'
  },
  {
    sku: 'i940',
    name: 'Escáner Kodak Alaris ScanMate i940 600 dpi',
    brand: 'Kodak Alaris',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/I940.png'
  },
  {
    sku: 'i1100',
    name: 'Escáner Kodak Alaris i1100 i1190 600 dpi 40PPM',
    brand: 'Kodak Alaris',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1333848.png'
  },
  {
    sku: 'E1035',
    name: 'Escáner Kodak Alaris E1035 600 dpi 35PPM ADF',
    brand: 'Kodak Alaris',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1025071.png'
  },
  {
    sku: 'S2000',
    name: 'Escáner Kodak Alaris S2000 S2080W 600 dpi',
    brand: 'Kodak Alaris',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1015189.png'
  },
  {
    sku: 'DR-M260',
    name: 'Escáner Canon ImageFormula DR-M260 60 PPM',
    brand: 'Canon',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/2405C002AC.png'
  },
  {
    sku: 'ADS-2800W',
    name: 'Escáner Brother ADS-2800W Resolucion 600 x 600',
    brand: 'Brother',
    category: 'Impresión y Digitalización',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ADS2800W.png'
  },
  // Consumibles
  {
    sku: 'CF410A',
    name: 'TONER HP 410A NEGRO (CF410A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CF410A.png'
  },
  {
    sku: 'F6V31AL',
    name: 'TINTA HP 664XL NEGRO ALTO RENDIMIENTO',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/F6V31AL.png'
  },
  {
    sku: 'CF226A',
    name: 'TONER HP 26A NEGRO (CF226A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CF226A.png'
  },
  {
    sku: 'CE255A',
    name: 'TONER HP NEGRO P3015 6K (CE255A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CE255A.png'
  },
  {
    sku: '101R00554',
    name: 'TAMBOR XEROX O UNIDAD DE IMAGEN 65K',
    brand: 'Xerox',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/101R00554.png'
  },
  {
    sku: 'TZE231',
    name: 'CINTA BROTHER TZ-231 NEGRO/BLANCO 12MM',
    brand: 'Brother',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TZE231.png'
  },
  {
    sku: 'TN1060',
    name: 'TONER BROTHER TN1060 NEGRO HL1112',
    brand: 'Brother',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TN1060.png'
  },
  {
    sku: 'DR630',
    name: 'TAMBOR BROTHER NEGRO HL-L2360DW',
    brand: 'Brother',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DR630.png'
  },
  {
    sku: 'TN660',
    name: 'TONER BROTHER ALTO RENDIMIENTO HL-L2360DW',
    brand: 'Brother',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TN660.png'
  },
  {
    sku: 'CL-141',
    name: 'TINTA CANON CL-141 COLOR (5203B001AB)',
    brand: 'Canon',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/5203B001AB.png'
  },
  {
    sku: 'PG-145',
    name: 'TINTA CANON PG-145 BK (8275B001AA)',
    brand: 'Canon',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/8275B001AA.png'
  },
  {
    sku: 'TN850',
    name: 'TONER BROTHER TN850 NEGRO 8000 PAG',
    brand: 'Brother',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TN850.png'
  },
  {
    sku: 'PG-140',
    name: 'TINTA CANON PG-140 NEGRO (5201B001AB)',
    brand: 'Canon',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/5201B001AB.png'
  },
  {
    sku: '113R00773',
    name: 'TAMBOR XEROX WORKCENTER 3615',
    brand: 'Xerox',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/113R00773.png'
  },
  {
    sku: '106R03583',
    name: 'TONER XEROX CAPACIDAD ALTA 13.9K B400/B405',
    brand: 'Xerox',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/106R03583.png'
  },
  {
    sku: '106R03396',
    name: 'TONER XEROX NEGRO 31K VERSALINK B70XX',
    brand: 'Xerox',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/106R03396.png'
  },
  {
    sku: '56F4000',
    name: 'TONER LEXMARK NEGRO PROG RETORNO',
    brand: 'Lexmark',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/56F4000.png'
  },
  {
    sku: 'B234000',
    name: 'TONER LEXMARK NEGRO PROGRAMA RETORNO',
    brand: 'Lexmark',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/B234000.png'
  },
  {
    sku: 'CF258A',
    name: 'Toner HP 58A Negro Original LaserJet',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CF258A.png'
  },
  {
    sku: 'SU803A',
    name: 'TONER S-PRINT A4 MLT-D111L NEGRO',
    brand: 'S-Print',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SU803A.png'
  },
  {
    sku: 'CE285A',
    name: 'TONER HP P1102/P1102W (CE285A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CE285A.png'
  },
  {
    sku: 'CF217A',
    name: 'TONER HP 17A NEGRO (CF217A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CF217A.png'
  },
  {
    sku: 'CF248A',
    name: 'TONER HP 48A NEGRO (CF248A)',
    brand: 'HP',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CF248A.png'
  },
  {
    sku: 'SU815A',
    name: 'TONER S-PRINT A4 MLT-D111S NEGRO',
    brand: 'S-Print',
    category: 'Consumibles',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SU815A.png'
  },
  // Almacenamiento
  {
    sku: 'AUV210',
    name: 'Memoria USB Adata UV210 16 GB Metálica',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AUV210-16G-RGD.png'
  },
  {
    sku: 'AHV620',
    name: 'DISCO DURO ADATA HV620/2TB NEGRO USB 3.0',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AHV620S-2TU31-CBK.png'
  },
  {
    sku: '97488',
    name: 'DISCO COMPACTO CD-R 700MB TORRE 50 UNIDADES',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/97488.png'
  },
  {
    sku: 'SU630',
    name: 'SSD Interno Adata Ultimate SU630 480 GB',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ASU630SS-480GQ-R.png'
  },
  {
    sku: 'AHV620-1TB',
    name: 'DISCO DURO ADATA HV620/1TB NEGRO USB 3.1',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AHV620S-1TU31-CBK.png'
  },
  {
    sku: '94554',
    name: 'DISCO COMPACTO VERBATIM R 52X 80MIN 700MB',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/94554.png'
  },
  {
    sku: '97176',
    name: 'DVD-R VERBATIM 4.7GB 16X SPINDLE C/50',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/97176.png'
  },
  {
    sku: '97167',
    name: 'DVD-R VERBATIM 4.7GB 16X BLANCO SPINDLE',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/97167.png'
  },
  {
    sku: 'HDD-300',
    name: 'ENCLOSURE VORAGO HDD-300 NEGRO DD 2.5/3.5',
    brand: 'Vorago',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HDD-300.png'
  },
  {
    sku: '94178',
    name: 'CAJAS DELGADAS VERBATIM ALMACENAMIENTO',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/94178.png'
  },
  {
    sku: '94776',
    name: 'DISCO COMPACTO VERBATIM R 52X 80MIN SLIM',
    brand: 'Verbatim',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/94776.png'
  },
  {
    sku: 'CR-101',
    name: 'LECTOR MEMORIA VORAGO CR-101 SD/T-FLASH',
    brand: 'Vorago',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CR-101.png'
  },
  {
    sku: 'HDD-102',
    name: 'CARCASA VORAGO DISCO DURO HDD-102 AZUL',
    brand: 'Vorago',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HDD-102.png'
  },
  {
    sku: 'AC008',
    name: 'MEMORIA USB ADATA AC008 16GB RETAIL BLACK',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AC008-16G-RKD.png'
  },
  {
    sku: 'AHD710P',
    name: 'DISCO DURO ADATA EXTERNO SPORT USB 3.0 1TB',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AHD710P-1TU31-CBK.png'
  },
  {
    sku: 'SA400S37-240G',
    name: 'SSD Kingston 240 GB SATA 3 2.5" SA400S37',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SA400S37240G.png'
  },
  {
    sku: 'AUSDX128G',
    name: 'Memoria Micro SD Adata SDXC UHS-1 U1 128 GB',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AUSDX128GUICL10A1-RA.png'
  },
  {
    sku: 'SA400S37-480G',
    name: 'SSD Kingston 480 GB SATA 3 2.5" SA400S37',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SA400S37480G.png'
  },
  {
    sku: 'SDCS2-32GB',
    name: 'Memoria Micro SD Kingston Canvas Select Plus 32GB',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SDCS232GB.png'
  },
  {
    sku: 'DTSE9H',
    name: 'MEMORIA KINGSTON 16GB DATATRAVELER SE9',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DTSE9H16GBZ.png'
  },
  {
    sku: 'SDCS2-128GB',
    name: 'Memoria Kingston Micro SDCS2 Canvas Select 128GB',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SDCS2128GB.png'
  },
  {
    sku: 'AHD710P-2TB',
    name: 'DISCO DURO ADATA HD710 2TB NEGRO USB 3.1',
    brand: 'Adata',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AHD710P-2TU31-CBK.png'
  },
  {
    sku: 'DT100G3-64GB',
    name: 'MEMORIA KINGSTON USB 64GB DT100G3',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DT100G364GB.png'
  },
  {
    sku: 'DT100G3-32GB',
    name: 'MEMORIA KINGSTON USB 32GB DT100G3',
    brand: 'Kingston',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DT100G332GB.png'
  },
  {
    sku: 'C7976A',
    name: 'CARTUCHO DATOS HP LTO-6 ULTRIUM RW 6.25 TB',
    brand: 'HP',
    category: 'Almacenamiento',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C7976A.png'
  },
  // Telefonía y Wearables
  {
    sku: '51094XRQ',
    name: 'Smartphone Huawei Y9 Prime 6.59" 64GB/4GB',
    brand: 'Huawei',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/51094XRQ.png'
  },
  {
    sku: 'REDMINOTE8',
    name: 'Smartphone Xiaomi Redmi Note 8 6.3" 64GB/4GB',
    brand: 'Xiaomi',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/REDMINOTE8-A.png'
  },
  {
    sku: 'SAM-A01CORD-R',
    name: 'Smartphone Samsung Galaxy A01 5.3" 16GB/1GB',
    brand: 'Samsung',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SAMA01CORD-R.png'
  },
  {
    sku: '51095EBA',
    name: 'Smartphone Huawei Y8s 6.5" 64GB/4GB',
    brand: 'Huawei',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/51095EBA.png'
  },
  {
    sku: 'REDMINOTE9S',
    name: 'Smartphone Xiaomi Redmi Note 9s 6.67" 128GB/4GB',
    brand: 'Xiaomi',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/REDMINOTE9S1284-G.png'
  },
  {
    sku: 'REDMINOTE9PRO',
    name: 'Smartphone Xiaomi Redmi Note 9 Pro 6.67" 128GB',
    brand: 'Xiaomi',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/REDMINOTE9PRO-V.png'
  },
  {
    sku: 'SM-A115M',
    name: 'Smartphone Samsung Galaxy A11 6.4" 64GB',
    brand: 'Samsung',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SM-A115M-64GB-B.png'
  },
  {
    sku: 'SAM-A01CORD-N',
    name: 'Smartphone Samsung Galaxy A01 16GB/1GB Negro',
    brand: 'Samsung',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SAMA01CORD-N.png'
  },
  {
    sku: 'SM-A015M',
    name: 'Smartphone Samsung Galaxy A01 5.7" HD+ 16GB',
    brand: 'Samsung',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SM-A015MZKAMXO.png'
  },
  {
    sku: 'SAM-GLXA10S',
    name: 'Smartphone Samsung Galaxy A10S 6.2" HD+ 32GB',
    brand: 'Samsung',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SAMGLXA10S-AZ.png'
  },
  {
    sku: 'MI-BAND4',
    name: 'Band Xiaomi Mi Smart 4 Pantalla 0.95" Negro',
    brand: 'Xiaomi',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MI-BAND4.png'
  },
  {
    sku: 'MI-BAND4C',
    name: 'Band Xiaomi 4C Pantalla 1.08" Sensor Ritmo',
    brand: 'Xiaomi',
    category: 'Telefonía y Wearables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MI-BAND4C.png'
  },
  // Energía
  {
    sku: 'PSU-101',
    name: 'FUENTE PODER VORAGO GABNET PSU-101 500W',
    brand: 'Vorago',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PSU-101.png'
  },
  {
    sku: 'SMART1500-TL',
    name: 'UPS TRIPP LITE 1500VA 1PUERTO SERIAL USB',
    brand: 'Tripp Lite',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SMART1500LCD.png'
  },
  {
    sku: 'SMART1000-TL',
    name: 'UPS TRIPP LITE SMART LCD 1000VA 500W USB',
    brand: 'Tripp Lite',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SMART1000LCD.png'
  },
  {
    sku: 'INTERNET550U',
    name: 'UPS Tripp Lite Standby 550VA/300W 10 Cont.',
    brand: 'Tripp Lite',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/INTERNET550U.png'
  },
  {
    sku: 'UPS-301',
    name: 'NO BREAK VORAGO UPS-301 800VA 480W 6 CONT.',
    brand: 'Vorago',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/UPS-301.png'
  },
  {
    sku: 'AVR-100',
    name: 'Regulador Vorago AVR-100 1000VA 8 Contactos',
    brand: 'Vorago',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/AVR-100.png'
  },
  {
    sku: 'SMART1500-LCDT',
    name: 'UPS TRIPP LITE SMART LCD 1500VA INTERACT.',
    brand: 'Tripp Lite',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SMART1500LCDT.png'
  },
  {
    sku: 'MNC-SUPAB001',
    name: 'Barra Multicontacto Manhattan Prot. 6 Cont.',
    brand: 'Manhattan',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MNCSUPAB001.png'
  },
  {
    sku: 'MNC-ACCAC001',
    name: 'Batería CMOS Manhattan CR2032 Litio 3V',
    brand: 'Manhattan',
    category: 'Energía',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MNCACCAC001.png'
  },
  // Punto de Venta y Cables
  {
    sku: 'P568-010',
    name: 'CABLE TRIPP LITE HDMI ALTA VELOCIDAD 3M',
    brand: 'Tripp Lite',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/P568-010.png'
  },
  {
    sku: 'CAB-109',
    name: 'CABLE VORAGO CAB-109 HDMI A HDMI 2 MTS',
    brand: 'Vorago',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/CAB-109.png'
  },
  {
    sku: 'MNC-CALAB015',
    name: 'Cable Manhattan HDMI 1.3 M-M Blindado 5m',
    brand: 'Manhattan',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MNCCALAB015.png'
  },
  {
    sku: 'NE-500',
    name: 'Lector de Códigos de Barra Nextep 1D USB',
    brand: 'Nextep',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-500.png'
  },
  {
    sku: 'NE-511',
    name: 'Mini Impresora Térmica Nextep 80mm USB',
    brand: 'Nextep',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-511.png'
  },
  {
    sku: 'NE-515',
    name: 'Cajón de Dinero Nextep 5 Billetes/8 Monedas',
    brand: 'Nextep',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-515.png'
  },
  {
    sku: 'NE-514',
    name: 'Cajón de Dinero Nextep 4 Billetes/8 Monedas',
    brand: 'Nextep',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NE-514.png'
  },
  {
    sku: '1RL96AA',
    name: 'Impresora de Recibos POS HP Engage One',
    brand: 'HP',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1RL96AA.png'
  },
  {
    sku: '4AK35AA',
    name: 'Cajón de Dinero POS HP Eléctrico',
    brand: 'HP',
    category: 'Punto de Venta y Cables',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/4AK35AA.png'
  },
  // Software y Seguridad Digital
  {
    sku: 'FQC-08981',
    name: 'Microsoft Windows 10 Pro 64-bit Español OEM',
    brand: 'Microsoft',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/FQC-08981.png'
  },
  {
    sku: 'HAV-00003',
    name: 'Microsoft Windows 10 Home 32/64-bit USB',
    brand: 'Microsoft',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HAV-00003.png'
  },
  {
    sku: 'GAG-00004',
    name: 'Software Microsoft Office 365 Personal 1 Usuario',
    brand: 'Microsoft',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/QQ2-00507.png'
  },
  {
    sku: '79G-05044',
    name: 'Microsoft Office Home and Student 2019 Mac/Win',
    brand: 'Microsoft',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/79G-05044.png'
  },
  {
    sku: 'KL1941ACAFL',
    name: 'Antivirus Kaspersky Internet Security 1 Dispositivo',
    brand: 'Kaspersky',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/KL1941ACAFL.png'
  },
  {
    sku: 'KL1941BCAFL',
    name: 'Antivirus Kaspersky Internet Security 3 Dispositivos',
    brand: 'Kaspersky',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/KL1941BCAFL.png'
  },
  {
    sku: 'WDB-822-01',
    name: 'Software WatchGuard Basic Security Suite 1 Año',
    brand: 'WatchGuard',
    category: 'Software y Seguridad Digital',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/WDB-822-01.png'
  },
  // CCTV y Seguridad
  {
    sku: 'HWT-B110-P',
    name: 'Cámara Bullet HiLook 720p 2.8mm Exterior IP66',
    brand: 'HiLook',
    category: 'CCTV y Seguridad',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HWT-B110-P.png'
  },
  {
    sku: 'DVR-204G-F1',
    name: 'DVR HiLook 4 Canales 1080p Lite H.264+ Metal',
    brand: 'HiLook',
    category: 'CCTV y Seguridad',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/DVR-204G-F1.png'
  },
  {
    sku: 'HWT-T110-P',
    name: 'Cámara Domo HiLook 720p 2.8mm Interior Plástico',
    brand: 'HiLook',
    category: 'CCTV y Seguridad',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/HWT-T110-P.png'
  },
  {
    sku: 'E25',
    name: 'Cámara IP Ezviz Interior 1080p Audio Dos Vías',
    brand: 'Ezviz',
    category: 'CCTV y Seguridad',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/E25.png'
  },
  {
    sku: 'C3WN',
    name: 'Cámara IP Ezviz Exterior 1080p Wi-Fi IP66',
    brand: 'Ezviz',
    category: 'CCTV y Seguridad',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C3WN.png'
  },
  // Redes
  {
    sku: 'ARCHER-C20',
    name: 'Router TP-Link Archer C20 AC750 Doble Banda',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ARCHER-C20.png'
  },
  {
    sku: 'TL-WR840N',
    name: 'Router TP-Link TL-WR840N 300Mbps 2 Antenas',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TL-WR840N.png'
  },
  {
    sku: 'TL-WA850RE',
    name: 'Extensor de Rango TP-Link TL-WA850RE 300Mbps',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TL-WA850RE.png'
  },
  {
    sku: 'TL-SF1008D',
    name: 'Switch TP-Link TL-SF1008D 8 Puertos 10/100Mbps',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TL-SF1008D.png'
  },
  {
    sku: 'ARCHER-C6',
    name: 'Router TP-Link Archer C6 AC1200 Gigabit Doble Banda',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ARCHER-C6.png'
  },
  {
    sku: 'EAP225-OUTDOOR',
    name: 'Access Point TP-Link EAP225 Exterior AC1200',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/EAP225-OUTDOOR.png'
  },
  {
    sku: 'TL-SG1024',
    name: 'Switch TP-Link TL-SG1024 24 Puertos Gigabit Rack',
    brand: 'TP-Link',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/TL-SG1024.png'
  },
  {
    sku: 'MNC-NREAB001',
    name: 'Switch Manhattan 8 Puertos 10/100Mbps Compacto',
    brand: 'Manhattan',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MNCNREAB001.png'
  },
  {
    sku: 'MNC-NREAB002',
    name: 'Adaptador USB Ethernet Manhattan 10/100Mbps',
    brand: 'Manhattan',
    category: 'Redes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MNCNREAB002.png'
  },
  // Vídeo y Proyección
  {
    sku: '1918C002AA',
    name: 'Proyector Canon Rayo S1 Compacto 100 Lúmenes',
    brand: 'Canon',
    category: 'Vídeo y Proyección',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/1918C002AA.png'
  },
  {
    sku: 'EB-S41',
    name: 'Proyector Epson PowerLite S41+ 3300 Lúmenes',
    brand: 'Epson',
    category: 'Vídeo y Proyección',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/C11CF44301.png'
  },
  {
    sku: 'X118HP',
    name: 'Proyector Acer X118HP 4000 Lúmenes SVGA HDMI',
    brand: 'Acer',
    category: 'Vídeo y Proyección',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/MR.JR811.00R.png'
  },
  {
    sku: 'VPL-DX221',
    name: 'Proyector Sony VPL-DX221 2800 Lúmenes XGA',
    brand: 'Sony',
    category: 'Vídeo y Proyección',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/VPL-DX221.png'
  },
  {
    sku: 'MS550',
    name: 'Proyector BenQ MS550 3600 Lúmenes SVGA Doble HDMI',
    brand: 'BenQ',
    category: 'Vídeo y Proyección',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/9H.JJ477.13L.png'
  },
  // Componentes y Otros
  {
    sku: 'ST1000DM010',
    name: 'Disco Duro Seagate BarraCuda 1TB 3.5" SATA 6GB/S',
    brand: 'Seagate',
    category: 'Componentes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/ST1000DM010.png'
  },
  {
    sku: 'WDS240G2G0A',
    name: 'SSD WD Green 240GB 2.5" SATA 6GB/S',
    brand: 'Western Digital',
    category: 'Componentes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/WDS240G2G0A.png'
  },
  {
    sku: 'GAB-101',
    name: 'Gabinete Vorago GAB-101 Micro ATX 500W',
    brand: 'Vorago',
    category: 'Componentes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/GAB-101.png'
  },
  {
    sku: 'KM-103',
    name: 'Kit Teclado y Mouse Vorago KM-103 USB Negro',
    brand: 'Vorago',
    category: 'Componentes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/KM-103.png'
  },
  {
    sku: 'PAD-101',
    name: 'Mouse Pad Vorago PAD-101 Negro',
    brand: 'Vorago',
    category: 'Componentes',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PAD-101.png'
  },
  // Papelería
  {
    sku: 'NEAPAPAE001',
    name: 'Papel Cortado Maestro Special Carta 95% de Blancura 75Grs Caja c/5000 Hojas',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NEAPAPAE001.png',
    price: '$95.00',
    unit: 'Caja'
  },
  {
    sku: 'NXPPAPAR003',
    name: 'Rollo Papel Nextep Termico para Terminal Movil 57mm x 12m Caja c/100 Rollos',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NXPPAPAR003.png'
  },
  {
    sku: 'NEAPAPAE007',
    name: 'Papel Cortado Nextep Copy Carta 92% de Blancura 75Grs Caja c/5000 Hojas',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NEAPAPAE007.png'
  },
  {
    sku: 'NXPPAPAR002',
    name: 'Rollo Papel Nextep Termico 80mm x 70m Caja c/50 Rollos',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NXPPAPAR002.png'
  },
  {
    sku: 'NEAPAPAE004',
    name: 'Papel Cortado Nextep Ecologico Carta 75Grs Caja c/5000 Hojas',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NEAPAPAE004.png'
  },
  {
    sku: 'NXPPAPAR005',
    name: 'Rollo Papel Nextep Bond 76mm x 70m Caja c/50 Rollos',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NXPPAPAR005.png'
  },
  {
    sku: 'PMPPAPAD061',
    name: 'Rollo de Papel PCM Termico 57x36mts Blanco con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD061.png'
  },
  {
    sku: 'PMPPAPAD007',
    name: 'Rollo de Papel PCM Termico 57x60mts Blanco con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD007.png'
  },
  {
    sku: 'PMPPAPAD004',
    name: 'Rollo de Papel PCM Autocopia 76x70mts Blanco/Amarillo con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD004.png'
  },
  {
    sku: 'PMPPAPAD003',
    name: 'Rollo de Papel PCM Bond 76x70mts Blanco con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD003.png'
  },
  {
    sku: 'PMPPAPAD052',
    name: 'Rollo de Papel PCM Termico 80x70mts Blanco con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD052.png'
  },
  {
    sku: 'PMPPAPAD017',
    name: 'Rollo de Papel PCM Termico 57x12mts Blanco con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD017.png'
  },
  {
    sku: 'PMPPAPAD045',
    name: 'Rollo de Papel PCM Autocopia 2H 76x70mts Blanco/Rosa con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD045.png'
  },
  {
    sku: 'PMPPAPAD044',
    name: 'Rollo de Papel PCM Autocopia 3H 76x70mts Blanco/Canario/Rosa con 10 rollos',
    brand: 'PCM',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/PMPPAPAD044.png'
  },
  {
    sku: 'NXPPAPAR008',
    name: 'Rollo Papel Nextep Bond 57mm x 60m Caja c/100 Rollos',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NXPPAPAR008.png'
  },
  {
    sku: 'NXPPAPAR009',
    name: 'Rollo Papel Nextep Termico 57mm x 60m Caja c/100 Rollos',
    brand: 'Nextep',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/NXPPAPAR009.png'
  },
  {
    sku: 'SCAPAPAE017',
    name: 'Papel Scribe Fotocopiado Oficio 500H 75g',
    brand: 'Scribe',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/SCAPAPAE017.png',
    price: '$110.00',
    unit: 'Resma'
  },
  {
    sku: 'XEAPAPAE007',
    name: 'Papel Xerox Marathon Carta 500H 75g',
    brand: 'Xerox',
    category: 'Papelería',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/XEAPAPAE007.png',
    price: '$98.00',
    unit: 'Resma'
  },
  {
    sku: '910-004842',
    name: 'Mouse Logitech M280 Inalámbrico Negro',
    brand: 'Logitech',
    category: 'Accesorios',
    status: 'En Stock',
    image: 'https://contenidos.exel.com.mx/imgProducto/910-004842.png'
  },
 ];

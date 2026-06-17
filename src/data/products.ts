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
  {
    "sku": "20SL00VNLM",
    "name": "Laptop Lenovo ThinkBook 14-IIL Aluminio 14\" Intel Core i3 1005G1 Disco duro 1 TB Ram 8 GB Windows 10 Pro",
    "brand": "Lenovo",
    "category": "Cómputo",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/LNHLATAC081.webp"
  },
  {
    "sku": "MMM55",
    "name": "Laptop Dell Latitude 15 3520 15.6\" Intel Core i5 1135G7 Disco duro 1 TB Ram 8 GB Windows 10 Pro Color Negro",
    "brand": "Dell",
    "category": "Cómputo",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/DEHLATAB311.webp"
  },
  {
    "sku": "421G6LA#ABM",
    "name": "Desktop HP ProDesk 400 G7 SFF Intel Core i5 10400 Disco duro 256 GB SSD Ram 8 GB Windows 10 Pro",
    "brand": "HP",
    "category": "Cómputo",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/HPHDEKAB547.webp"
  },
  {
    "sku": "400-ATKJ",
    "name": "Disco duro Dell 2 TB 7.2K RPM SATA 3.5\" Hot-plug Hard para Servidores R240/R340/R440/R540/R740",
    "brand": "Dell",
    "category": "Servidores y Almacenamiento",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/DEVDISAG008.webp"
  },
  {
    "sku": "2313C004AC",
    "name": "Multifuncional Canon Pixma G2110 Color Tinta Continua",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIIMPAG124.webp"
  },
  {
    "sku": "2315C004AC",
    "name": "Multifuncional Canon Pixma G3110 Color Tinta Continua Wi-Fi",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIIMPAG119.webp"
  },
  {
    "sku": "2316C004AB",
    "name": "Multifuncional Canon Pixma G4110 Color Tinta Continua Wi-Fi/ADF/Wireless direct",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIIMPAG131.webp"
  },
  {
    "sku": "2223C024AA",
    "name": "Multifuncional Canon ImageClass D1620 Monocromática Láser de 45ppm",
    "brand": "Canon",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIIMPAG113.webp"
  },
  {
    "sku": "0667C001AC",
    "name": "TINTA CANON GI-190 G1110/G2110/G3110/G4110 NEGRA TINTA CONTINUA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB205.webp"
  },
  {
    "sku": "0668C001AC",
    "name": "TINTA CANON GI-190 G1110/G2110/G3110/G4110 CYAN TINTA CONTINUA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB206.webp"
  },
  {
    "sku": "0669C001AC",
    "name": "TINTA CANON GI-190 G1110/G2110/G3110/G4110 MAGENTA TINTA CONTINUA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB207.webp"
  },
  {
    "sku": "0670C001AC",
    "name": "TINTA CANON GI-190 G1110/G2110/G3110/G4110 AMARILLO TINTA CONTINUA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB208.webp"
  },
  {
    "sku": "3391C001AA",
    "name": "Tinta Canon GI-10 Cian Pixma Tinta Continua",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB233.webp"
  },
  {
    "sku": "3392C001AA",
    "name": "Tinta Canon GI-10 Magenta Pixma Tinta Continua",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB234.webp"
  },
  {
    "sku": "3393C001AA",
    "name": "Tinta Canon GI-10 Amarilla Pixma Tinta Continua",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB235.webp"
  },
  {
    "sku": "4534C001AA",
    "name": "Tinta Canon Pixma GI-11 Color Cian",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB237.webp"
  },
  {
    "sku": "4535C001AA",
    "name": "Tinta Canon Pixma GI-11 Color Magenta",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB238.webp"
  },
  {
    "sku": "4536C001AA",
    "name": "Tinta Canon Pixma GI-11 Color Amarillo",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB239.webp"
  },
  {
    "sku": "3382C001AA",
    "name": "Tinta Canon GI-10 Negra Pixma Tinta Continua",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB232.webp"
  },
  {
    "sku": "4525C001AA",
    "name": "Tinta Canon Pixma GI-11 Color Negro",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB236.webp"
  },
  {
    "sku": "4563B001AB",
    "name": "TANQUE TINTA CANON MAGENTA CLI-126",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB092.webp"
  },
  {
    "sku": "6531B001AA",
    "name": "TINTA CANON CLI-151 Y",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB124.webp"
  },
  {
    "sku": "6528B001AA",
    "name": "TINTA CANON CLI-151 BK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB127.webp"
  },
  {
    "sku": "6529B001AA",
    "name": "TINTA CANON CLI-151 C",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB134.webp"
  },
  {
    "sku": "6530B001AA",
    "name": "TINTA CANON CLI-151 M",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB135.webp"
  },
  {
    "sku": "9244B001AA",
    "name": "TANQUE TINTA CANON PGI 1100 CYAN MB2010",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB197.webp"
  },
  {
    "sku": "9245B001AA",
    "name": "TANQUE TINTA CANON PGI 1100 MAGENTA MB2010",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB198.webp"
  },
  {
    "sku": "9246B001AA",
    "name": "TANQUE TINTA CANON PGI 1100 AMARILLO MB2010",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB199.webp"
  },
  {
    "sku": "6402B010AA",
    "name": "TINTA CANON NEGRO MATE PGI-72 MBK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB219.webp"
  },
  {
    "sku": "6409B010AA",
    "name": "TINTA CANON GRIS PGI-72 GY",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB220.webp"
  },
  {
    "sku": "6408B010AA",
    "name": "TINTA CANON MAGENTA FOTO PGI-72 PM",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB221.webp"
  },
  {
    "sku": "6406B010AA",
    "name": "TINTA CANON AMARILLO PGI-72 Y",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB223.webp"
  },
  {
    "sku": "6405B010AA",
    "name": "TINTA CANON MAGENTA PGI-72 M",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB224.webp"
  },
  {
    "sku": "6403B010AA",
    "name": "TINTA CANON NEGRO FOTO PGI-72 PBK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB226.webp"
  },
  {
    "sku": "6404B010AA",
    "name": "TINTA CANON CIAN  PGI-72 C",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB227.webp"
  },
  {
    "sku": "6411B010AA",
    "name": "TINTA CANON CHROMO OPTIMIZER PGI-72 CO",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB228.webp"
  },
  {
    "sku": "0623B035AA",
    "name": "TANQUE TINTA CANON AMARILLO CLI-8 (450 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB076.webp"
  },
  {
    "sku": "4533B001AB",
    "name": "TANQUE TINTA CANON NEGRO PGI-125",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB088.webp"
  },
  {
    "sku": "6500B001AA",
    "name": "TINTA CANON PGI-150 PGBK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB126.webp"
  },
  {
    "sku": "6384B009AA",
    "name": "TINTA CANON CLI-42 NEGRO",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB136.webp"
  },
  {
    "sku": "6385B009AA",
    "name": "TINTA CANON CLI-42 CYAN",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB137.webp"
  },
  {
    "sku": "6386B009AA",
    "name": "TINTA CANON CLI-42 MAGENTA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB140.webp"
  },
  {
    "sku": "6387B009AA",
    "name": "TINTA CANON CLI-42 AMARILLO",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB141.webp"
  },
  {
    "sku": "6388B009AA",
    "name": "TINTA CANON CLI-42 PHOTO CYAN",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB142.webp"
  },
  {
    "sku": "6389B009AA",
    "name": "TINTA CANON CLI-42 PHOTO MAGENTA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB143.webp"
  },
  {
    "sku": "1509B020AA",
    "name": "TINTA CANON NEGRO PGI-35 (190 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB100.webp"
  },
  {
    "sku": "2974B017AA",
    "name": "TINTA CANON NEGRO PG-210 BK (250 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB102.webp"
  },
  {
    "sku": "9316B001AA",
    "name": "TINTA CANON CIAN PGI-2100 C",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB215.webp"
  },
  {
    "sku": "9317B001AA",
    "name": "TINTA CANON MAGENTA PGI-2100 M",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB216.webp"
  },
  {
    "sku": "9318B001AA",
    "name": "TINTA CANON AMARILLO PGI-2100 Y",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB217.webp"
  },
  {
    "sku": "6435B001AA",
    "name": "TINTA CANON PGI-150XL PGBK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB128.webp"
  },
  {
    "sku": "6477B001AA",
    "name": "TINTA CANON CLI-151XL BK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB129.webp"
  },
  {
    "sku": "6480B001AA",
    "name": "TINTA CANON CLI-151XL Y",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB130.webp"
  },
  {
    "sku": "6481B001AA",
    "name": "TINTA CANON CLI-151XL GY",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB131.webp"
  },
  {
    "sku": "6478B001AA",
    "name": "TINTA CANON CLI-151XL C",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB132.webp"
  },
  {
    "sku": "6479B001AA",
    "name": "TINTA CANON CLI-151XL M",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB133.webp"
  },
  {
    "sku": "9223B001AA",
    "name": "TANQUE TINTA CANON PGI 1100 BLACK MB2010",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB196.webp"
  },
  {
    "sku": "0615B050AA",
    "name": "TINTA CANON NEGRO PG-40 BK (355 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB069.webp"
  },
  {
    "sku": "2973B017AA",
    "name": "TINTA CANON NEGRO PG-210XL BK (400 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB104.webp"
  },
  {
    "sku": "1511B020AA",
    "name": "TINTA CANON CLI-36 COLOR (250 Pág.)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB101.webp"
  },
  {
    "sku": "2976B017AA",
    "name": "TINTA CANON CL-211 COLOR (225 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB103.webp"
  },
  {
    "sku": "8274B001AA",
    "name": "TINTA CANON PG-145 XL BK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB147.webp"
  },
  {
    "sku": "5200B001AB",
    "name": "TINTA CANON PG-140 XL NEGRO ALTO RENDIMIENTO",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB095.webp"
  },
  {
    "sku": "0617B050AA",
    "name": "TINTA CANON COLOR CL-41 (320 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB070.webp"
  },
  {
    "sku": "9208B001AA",
    "name": "TANQUE TINTA CANON ALTA CAPACIDAD CYAN PGI 1100XL",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB210.webp"
  },
  {
    "sku": "9209B001AA",
    "name": "TANQUE TINTA CANON ALTA CAPACIDAD MAGENTA PGI 1100XL",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB211.webp"
  },
  {
    "sku": "9210B001AA",
    "name": "TANQUE TINTA CANON ALTA CAPACIDAD AMARILLO PGI 1100XL",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB212.webp"
  },
  {
    "sku": "9295B001AA",
    "name": "TINTA CANON NEGRO PGI-2100 BK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB214.webp"
  },
  {
    "sku": "9281B001AA",
    "name": "TINTA CANON MAGENTA ALTA CAPACIDAD PGI-2100 XLM",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB229.webp"
  },
  {
    "sku": "9282B001AA",
    "name": "TINTA CANON AMARILLO ALTA CAPACIDAD PGI-2100 XLY",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB230.webp"
  },
  {
    "sku": "9280B001AA",
    "name": "TINTA CANON CYAN ALTA CAPACIDAD PGI-2100 XL C",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB231.webp"
  },
  {
    "sku": "2975B017AA",
    "name": "TINTA CANON CL-211XL COLOR (349 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB105.webp"
  },
  {
    "sku": "9187B001AA",
    "name": "TANQUE TINTA CANON ALTA CAPACIDAD NEGRO PGI 1100XL",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB209.webp"
  },
  {
    "sku": "8276B001AA",
    "name": "TINTA CANON CL-146 XL CLR",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB146.webp"
  },
  {
    "sku": "9259B001AA",
    "name": "TINTA CANON NEGRO ALTA CAPACIDAD PGI-2100 XL BK",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB218.webp"
  },
  {
    "sku": "3488C001AA",
    "name": "Tinta Canon PFI-030 Color Negro Mate para Series TA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB143.webp"
  },
  {
    "sku": "3489C001AA",
    "name": "Tinta Canon PFI-030 Color Negro para Series TA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB144.webp"
  },
  {
    "sku": "3490C001AA",
    "name": "Tinta Canon PFI-030 Color Cian para Series TA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB145.webp"
  },
  {
    "sku": "3491C001AA",
    "name": "Tinta Canon PFI-030 Color Magenta para Series TA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB146.webp"
  },
  {
    "sku": "3492C001AA",
    "name": "Tinta Canon PFI-030 Color Amarillo para Series TA",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB147.webp"
  },
  {
    "sku": "5198B001AB",
    "name": "Tinta Canon Pixma PG-140 XXL Color Negro",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB241.webp"
  },
  {
    "sku": "5202B001AB",
    "name": "TINTA CANON CL-141 XL COLOR ALTO RENDIMIENTO",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB097.webp"
  },
  {
    "sku": "2142C001AA",
    "name": "TINTA CANON NEGRO MATTE PFI-007 MBK 90ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB078.webp"
  },
  {
    "sku": "2143C001AA",
    "name": "TINTA CANON NEGRO PFI-007BK 90ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB079.webp"
  },
  {
    "sku": "2144C001AA",
    "name": "TINTA CANON CYAN PFI-007C 90ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB080.webp"
  },
  {
    "sku": "2145C001AA",
    "name": "TINTA CANON MAGENTA PFI-007M 90ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB081.webp"
  },
  {
    "sku": "2146C001AA",
    "name": "TINTA CANON AMARILLO PFI-007Y 90ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB082.webp"
  },
  {
    "sku": "0692C005AA",
    "name": "Cabezal Canon Combo Tinta Negra y Color BH-1 CH-1 para Pixma G1110 G2110 G3110 G4110",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACACCAE008.webp"
  },
  {
    "sku": "1242C001AA",
    "name": "Toner Canon 045 Negro Capacidad Estandar",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB074.webp"
  },
  {
    "sku": "6272B001AA",
    "name": "Toner Canon 131 Negro",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB068.webp"
  },
  {
    "sku": "1239C001AA",
    "name": "Toner Canon 045 Amarillo para ImageClass Series MF630C/LBP610C (1300 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB071.webp"
  },
  {
    "sku": "1241C001AA",
    "name": "Toner Canon 045 Cyan para ImageClass Series MF630C/LBP610C (1300 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB073.webp"
  },
  {
    "sku": "2164C001AA",
    "name": "Tóner Canon 047 Negro para ImageClass Series LBP110/MF110 (1600 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB094.webp"
  },
  {
    "sku": "1492A002CA",
    "name": "Toner Canon Negro E-20 para Serie PC 2mil paginas",
    "brand": "Canon",
    "category": "Cómputo",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB008.webp"
  },
  {
    "sku": "0263B001BA",
    "name": "Toner Canon 104 para ImageClass D420/D480/ MF4100/4600 Series (2mil pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB039.webp"
  },
  {
    "sku": "1240C001AA",
    "name": "Toner Canon 045 Magenta para ImageClass Series MF630C/LBP610C (1300 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB072.webp"
  },
  {
    "sku": "3484B001AA",
    "name": "Toner Canon 125",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB062.webp"
  },
  {
    "sku": "3500B001AA",
    "name": "Toner Canon 128",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB063.webp"
  },
  {
    "sku": "3024C001AA",
    "name": "Tóner Canon 054 Capacidad 1500 Páginas Color Negro",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB086.webp"
  },
  {
    "sku": "6704B001AA",
    "name": "TANQUE TINTA CANON NEGRO MATE PFI-107MBK 130ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB050.webp"
  },
  {
    "sku": "1320B014CC",
    "name": "Cartucho Mantenimiento Canon MC-10 (IPF650/655/750/760/765)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB060.webp"
  },
  {
    "sku": "9435B001AA",
    "name": "Toner Canon 137",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB070.webp"
  },
  {
    "sku": "6705B001AA",
    "name": "TANQUE TINTA CANON NEGRO PFI-107BK 130ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB051.webp"
  },
  {
    "sku": "6706B001AA",
    "name": "Tinta Canon PFI-107C 130ml Color Cian",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB052.webp"
  },
  {
    "sku": "6707B001AA",
    "name": "TANQUE TINTA CANON MAGNETA PFI-107M 130ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB053.webp"
  },
  {
    "sku": "6708B001AA",
    "name": "TANQUE TINTA CANON AMARILLO PFI-107Y 130ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB054.webp"
  },
  {
    "sku": "3479B001AA",
    "name": "Toner Canon 119",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB064.webp"
  },
  {
    "sku": "1156C002AA",
    "name": "Cartucho Mantenimiento Canon MC-30 Imageprograf para Serie Pro/Serie TX/GP",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACCATAC005.webp"
  },
  {
    "sku": "3631B001AA",
    "name": "TINTA CANON MAGENTA PFI-104 M 130ML (IPF-650/655/750)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB040.webp"
  },
  {
    "sku": "6270B001AA",
    "name": "Toner Canon 131 Magenta",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB066.webp"
  },
  {
    "sku": "6271B001AA",
    "name": "Toner Canon 131 Cyan",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB067.webp"
  },
  {
    "sku": "6269B001AA",
    "name": "Toner Canon 131 Amarillo",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB069.webp"
  },
  {
    "sku": "3023C001AA",
    "name": "Tóner Canon 054 Capacidad 1200 Páginas Color Cian",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB087.webp"
  },
  {
    "sku": "3022C001AA",
    "name": "Tóner Canon 054 Capacidad 1200 Páginas Color Magenta",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB088.webp"
  },
  {
    "sku": "3021C001AA",
    "name": "Tóner Canon 054 Capacidad 1200 Páginas Color Amarillo",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB089.webp"
  },
  {
    "sku": "1243C001AA",
    "name": "Toner Canon 045H Amarillo para ImageClass Series MF630C/LBP610C (2200 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB075.webp"
  },
  {
    "sku": "1244C001AA",
    "name": "Toner Canon 045H Magenta para ImageClass Series MF630C/LBP610C (2200 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB076.webp"
  },
  {
    "sku": "1245C001AA",
    "name": "Toner Canon 045H Cyan para ImageClass Series MF630C/LBP610C (2200 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB077.webp"
  },
  {
    "sku": "1246C001AA",
    "name": "Toner Canon 045 Negro Alta Capacidad",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB078.webp"
  },
  {
    "sku": "2199C001AA",
    "name": "Toner Canon 052BK LBP210 MF420 3100 Paginas",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB079.webp"
  },
  {
    "sku": "0894B001AA",
    "name": "TINTA CANON NEGRO MATTE PFI-102 MBK (SOLO iPF605 /",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB012.webp"
  },
  {
    "sku": "0895B001AA",
    "name": "TINTA CANON NEGRA PFI-102BK (SOLO iPF605/510/650/6",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB013.webp"
  },
  {
    "sku": "0896B001AA",
    "name": "TINTA CANON CYAN PFI-102C (SOLO iPF605/510/650/655",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB014.webp"
  },
  {
    "sku": "0897B001AA",
    "name": "TINTA CANON MAGENTA PFI-102M (SOLO iPF605/510/710/720)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB015.webp"
  },
  {
    "sku": "0898B001AA",
    "name": "Tinta Canon PFI-102Y Color Amarillo (Solo iPF605/501/650)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB016.webp"
  },
  {
    "sku": "3009C001AA",
    "name": "Tóner Canon 057 para ImageClass Series LBP226dw / MF445dw (3000 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB090.webp"
  },
  {
    "sku": "1249C001AA",
    "name": "Toner Canon 046 Cyan para MF735 MF733 MF731 2300 Paginas",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB082.webp"
  },
  {
    "sku": "1248C001AA",
    "name": "Toner Canon 046 Magenta para ImageClass Series MF730C/LBP650C (2300 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB083.webp"
  },
  {
    "sku": "1247C001AA",
    "name": "Toner Canon 046 Amarillo para MF735 MF733 MF731 2300 Paginas",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB084.webp"
  },
  {
    "sku": "7833A001BA",
    "name": "Tóner Canon S-35 D340/D320",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB028.webp"
  },
  {
    "sku": "3252C001AA",
    "name": "Toner Canon 121 para ImageClass Series D1620/D1650 5000 Paginas",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB085.webp"
  },
  {
    "sku": "2617B001AA",
    "name": "Toner Canon 120 para ImageClass Series D1120 / D1150 /D1170 / D1180 /D1320 / D1350 / D1370 /D1520 / D1550 (3000 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB053.webp"
  },
  {
    "sku": "8792B001AA",
    "name": "TANQUE TINTA CANON AMARILLO PFI-207Y 300ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB172.webp"
  },
  {
    "sku": "2662B001AA",
    "name": "Toner Canon 118 Negro para ImageClass Series LBP7200Cdn / LBP7660Cdn / MF8350Cdn / MF8380Cdw / MF8580Cdw / MF726Cdw /",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB058.webp"
  },
  {
    "sku": "2661B001AA",
    "name": "Toner Canon 118 Cyan para ImageClass Series LBP7200Cdn / LBP7660Cdn / MF8350Cdn / MF8380Cdw / MF8580Cdw / MF726Cdw / M",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB059.webp"
  },
  {
    "sku": "2660B001AA",
    "name": "Toner Canon 118 Magenta para ImageClass Series LBP7200Cdn / LBP7660Cdn / MF8350Cdn / MF8380Cdw / MF8580Cdw / MF726Cdw",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB060.webp"
  },
  {
    "sku": "2659B001AA",
    "name": "Toner Canon 118 Amarillo",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB061.webp"
  },
  {
    "sku": "8788B001AA",
    "name": "TANQUE TINTA CANON NEGRO MATE PFI-207MBK 300ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTINAB168.webp"
  },
  {
    "sku": "3480B001AA",
    "name": "Toner Canon 119 II Alta Capacidad",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB065.webp"
  },
  {
    "sku": "9810B001AA",
    "name": "Tanque Tinta Canon PF1-307 MBK Color Negro Mate 330ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB055.webp"
  },
  {
    "sku": "0264B001AA",
    "name": "Toner Canon 106 para ImageClass MF6530/MF6550 Series",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB040.webp"
  },
  {
    "sku": "2362C001AA",
    "name": "Tinta Canon PFI-310 Y Color Amarillo 330ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB142.webp"
  },
  {
    "sku": "2200C001AA",
    "name": "Toner Canon 052H para ImageClass Series LBP210/MF420 (3100 Pag)",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTONAB080.webp"
  },
  {
    "sku": "2957B001AA",
    "name": "TANQUE TINTA CANON NEGRA MATTE PFI-303 MBK 330ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB065.webp"
  },
  {
    "sku": "0810C001AA",
    "name": "TINTA CANON NEGRO MATTE PFI-1300 MBK 330ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB102.webp"
  },
  {
    "sku": "2353C001AA",
    "name": "TINTA CANON PFI-710 MBK NEGRO MATE 700ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB121.webp"
  },
  {
    "sku": "2962B001AA",
    "name": "TANQUE TINTA CANON NEGRA MATTE PFI-703MBK 700ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB035.webp"
  },
  {
    "sku": "2964B001AA",
    "name": "TANQUE TINTA CANON CYAN PFI-703 C 700ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB037.webp"
  },
  {
    "sku": "6682B001AA",
    "name": "TINTA CANON CYAN PFI-706 C-700[[A",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB062.webp"
  },
  {
    "sku": "6681B001AA",
    "name": "TINTA CANON NEGRA PFI-706 BK 700ML",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB115.webp"
  },
  {
    "sku": "6688B001AA",
    "name": "TINTA CANON VERDE PFI-706 G - 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB119.webp"
  },
  {
    "sku": "0774C001AA",
    "name": "TINTA CANON NEGRO MATTE PFI-1700 MBK de 700ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB066.webp"
  },
  {
    "sku": "0780C001AA",
    "name": "TINTA CANON FHOTO MAGENTA PFI-1700 (PM) de 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB072.webp"
  },
  {
    "sku": "0781C001AA",
    "name": "TINTA CANON GRIS PFI-1700 de 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB073.webp"
  },
  {
    "sku": "0782C001AA",
    "name": "TINTA CANON FHOTO GRIS PFI-1700 de 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB074.webp"
  },
  {
    "sku": "0783C001AA",
    "name": "TINTA CANON FHOTO ROJO PFI-1700 (R) de 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB075.webp"
  },
  {
    "sku": "0785C001AA",
    "name": "TINTA CANON CHROMA OPTIMIZER PFI-1700 (CO) de 700 ml",
    "brand": "Canon",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACTIFAB077.webp"
  },
  {
    "sku": "2628C003AA",
    "name": "Cámara Canon EOS T100 con lente EF-S 18-55mm f/3.5-5.6",
    "brand": "Canon",
    "category": "Cámara, Video y Proyección",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAECAMAB252.webp"
  },
  {
    "sku": "2727C002AA",
    "name": "Camara Canon EOS Rebel T7 Con Lente EF-S 18-55mm f/3.5-5.6",
    "brand": "Canon",
    "category": "Cámara, Video y Proyección",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAECAMAB258.webp"
  },
  {
    "sku": "8568B001AA",
    "name": "Papel Canon RP108",
    "brand": "Canon",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACPAPAE023.webp"
  },
  {
    "sku": "3115B001AA",
    "name": "Tinta/Papel Canon KP-108IN Para Selphy CP (Cont. 108 Papel)",
    "brand": "Canon",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CACPAPAN005.webp"
  },
  {
    "sku": "2995C003AA",
    "name": "Escáner Canon ScanLIDE 300",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB025.webp"
  },
  {
    "sku": "9705B007AC",
    "name": "Escaner Canon ImageFormula P-215II Resolución 600 dpi",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB015.webp"
  },
  {
    "sku": "2646C002AC",
    "name": "Escáner Canon ImageFormula DR-C230 de 30ppm con Cap 60 Hojas",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB029.webp"
  },
  {
    "sku": "3258C002AA",
    "name": "Escaner Canon ImageFormula DR-C225II Resolución 600 ppp",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB027.webp"
  },
  {
    "sku": "0651C002AE",
    "name": "Escaner Canon ImageFormula DR-C240 de 45ppm con Cap 60 Hojas",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB023.webp"
  },
  {
    "sku": "2405C002AE",
    "name": "Escáner Canon ImageFormula DR-M260 de 60 PPM con Cap. 90 Hojas",
    "brand": "Canon",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/CAIESCAB032.webp"
  },
  {
    "sku": "B600_DN",
    "name": "Impresora Láser Xerox VersaLink B600DN Monocromática con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAE102.webp"
  },
  {
    "sku": "B610_DN",
    "name": "Impresora Láser Xerox VersaLink B610DN Monocromática con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAE103.webp"
  },
  {
    "sku": "B405_DN",
    "name": "Multifuncional Xerox VersaLink B405DN Monocromática Láser con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG208.webp"
  },
  {
    "sku": "C8130_T",
    "name": "Multifuncional Xerox AltaLink C8130 Color Láser con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG249.webp"
  },
  {
    "sku": "C8135_T",
    "name": "Multifuncional Xerox AltaLink C8135A3 Color Láser Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG254.webp"
  },
  {
    "sku": "B8155_F",
    "name": "Multifuncional Xerox AltaLink B8155 MFP A3 Monocromática Láser 55 PPM",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG255.webp"
  },
  {
    "sku": "C8145_F",
    "name": "Multifuncional Xerox AltaLink C8145 Color Láser A3 con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG246.webp"
  },
  {
    "sku": "C8155_F",
    "name": "Multifuncional Xerox AltaLink C8155 Color Láser con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG250.webp"
  },
  {
    "sku": "B8170_F",
    "name": "Multifuncional Xerox AltaLink B8170Monocromática Láser con Tecnología ConnectKey",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIIMPAG248.webp"
  },
  {
    "sku": "116R00003",
    "name": "Kit Rodillos de Alimentación Xerox 116R00003 100000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB017.webp"
  },
  {
    "sku": "108R01124",
    "name": "Cartucho Residual Xerox 108R01124 30000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB568.webp"
  },
  {
    "sku": "108R01470",
    "name": "Rodillo Xerox TR 1 VersaLink B605_S",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB022.webp"
  },
  {
    "sku": "008R13089",
    "name": "Contenedor de Desperdicio Xerox 008R13089 33000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECCOTAB002.webp"
  },
  {
    "sku": "008R13036",
    "name": "Cartucho de Residuo Xerox Tóner PK",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB040.webp"
  },
  {
    "sku": "008R08102",
    "name": "Cartucho Residuos Xerox Desperdicios 69K Páginas para AltaLink C8170/B8170",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAS036.webp"
  },
  {
    "sku": "108R00982",
    "name": "Cartucho de Residuos Xerox Phaser 7800 Hasta 20000 Páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB020.webp"
  },
  {
    "sku": "497N05495",
    "name": "Adaptador Xerox 497N05495 Red Inalámbrica para B1025",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE591.webp"
  },
  {
    "sku": "008R12964",
    "name": "Cartucho de Grapas Xerox 008R12964",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECGRAAB021.webp"
  },
  {
    "sku": "497K17800",
    "name": "Bandeja Xerox Interna 497K17800 Salida Dual",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE575.webp"
  },
  {
    "sku": "104R00256",
    "name": "Limpiador Xerox para Banda de Transferencia 160K Versalink C8000/C9000",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECLIMAB005.webp"
  },
  {
    "sku": "008r13086",
    "name": "Rodillo de Transferencia Xerox 008r13086 200000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB013.webp"
  },
  {
    "sku": "109R00783",
    "name": "Kit Mantenimiento Xerox 109R00783 30000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB026.webp"
  },
  {
    "sku": "4VA",
    "name": "Kit de Velocidades  Xerox 4VA 20 PPM",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE581.webp"
  },
  {
    "sku": "497K13660",
    "name": "Kit de Compra Xerox 497K13660",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAS008.webp"
  },
  {
    "sku": "108R00861",
    "name": "Unidad de Imagen Xerox 108R00861 80000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB023.webp"
  },
  {
    "sku": "113R00672",
    "name": "Módulo Xerox Xerográfico para WC5645/5645/5665/5675/5687",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB005.webp"
  },
  {
    "sku": "497K18340",
    "name": "Kit Postscript 3 Xerox 497K18340",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE583.webp"
  },
  {
    "sku": "497K13630",
    "name": "Bandeja de Papel Xerox 497K13630 para 550 hojas",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECBAEAB005.webp"
  },
  {
    "sku": "013R00603",
    "name": "Unidad de Tambor Xerox 013R00603 100000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB053.webp"
  },
  {
    "sku": "008R13087",
    "name": "Fusor 120V Xerox 008R13087 100000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB047.webp"
  },
  {
    "sku": "097S04949",
    "name": "Bandeja de Papel Xerox 097S04949 para 550 hojas",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE585.webp"
  },
  {
    "sku": "108R00691",
    "name": "Unidad de Imagen Xerox 108R00691 20000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB015.webp"
  },
  {
    "sku": "115R00119",
    "name": "Kit Mantenimiento Xerox 110V VersaLink B400/B405 200K (Incluye Fusor y Rodillo Transferencia Polarización)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAF005.webp"
  },
  {
    "sku": "008R13041",
    "name": "Cartucho de Grapas Xerox 008R130418R13041",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB039.webp"
  },
  {
    "sku": "108R01121",
    "name": "Unidad de Imagen Xerox 108R01121 60000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECKITAH001.webp"
  },
  {
    "sku": "109R00752",
    "name": "Fusor 110V Xerox 109R00752 400000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB027.webp"
  },
  {
    "sku": "013R00602",
    "name": "Unidad de Tambor Xerox 013R00602 231000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB054.webp"
  },
  {
    "sku": "001R00610",
    "name": "Cinta Transferencia Xerox 001R00610 para WorkCentre 7120/7125 200000 páginas",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECCINAD005.webp"
  },
  {
    "sku": "497K17440",
    "name": "Kit de Transporte Horizontal Xerox para Finalizadora BR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECKITAB062.webp"
  },
  {
    "sku": "LB1",
    "name": "Bandeja de Papel Xerox LB1 para 550 hojas",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE517.webp"
  },
  {
    "sku": "108R00648",
    "name": "Unidad de Imagen Xerox Phaser 7400 30000 páginas Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB011.webp"
  },
  {
    "sku": "115R00063",
    "name": "Kit Mantenimiento Xerox 115R00063 200000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB029.webp"
  },
  {
    "sku": "013R00655",
    "name": "Tambor Xerox Color Negro 1 CRU/CT",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB055.webp"
  },
  {
    "sku": "008R13044",
    "name": "Fusor Xerox Workcentre 7232 100000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB049.webp"
  },
  {
    "sku": "008R12988",
    "name": "Fusor 120V Xerox 008R12988 200000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB030.webp"
  },
  {
    "sku": "008R13102",
    "name": "Fusor Xerox Módulo 110V 560/570",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB039.webp"
  },
  {
    "sku": "109R00731",
    "name": "Kit de Mantenimiento Xerox 109R00731 300000 páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB025.webp"
  },
  {
    "sku": "EZK",
    "name": "Finalizador de Oficina Xerox para AltaLink C81XX/B81XX",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE592.webp"
  },
  {
    "sku": "097S04948",
    "name": "Bandeja de Papel Xerox 097S04948 2000 hojas",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE590.webp"
  },
  {
    "sku": "108R01416",
    "name": "CARTUCHO DE RESIDUOS XEROX",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB616.webp"
  },
  {
    "sku": "116R00010",
    "name": "Kit de Rodillo Xerox para Bandeja de Papel para VersaLink C",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB020.webp"
  },
  {
    "sku": "116R00009",
    "name": "RODILLO XEROX DE TRANSFERENCIA 200K VERSALINK B600",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB021.webp"
  },
  {
    "sku": "008R12990",
    "name": "TONER XEROX BOTELLA DESPERDICIO CT",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB378.webp"
  },
  {
    "sku": "115R00116",
    "name": "Rodillo De Transferencia Xerox Versalink B70XX 200K",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB018.webp"
  },
  {
    "sku": "115R00129",
    "name": "Botella de Desperdicio Xerox 21.2K VersaLink C7000 SFP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECCOTAB005.webp"
  },
  {
    "sku": "115R00126",
    "name": "Rodillo de Transferencia Xerox 180k VersaLink C7000 SFP",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB019.webp"
  },
  {
    "sku": "008R13061",
    "name": "TONER XEROX CARTUCHO RESERVA WC 7425/7428/7435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB454.webp"
  },
  {
    "sku": "006R01573",
    "name": "TONER XEROX WC 5021",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB536.webp"
  },
  {
    "sku": "006R01731",
    "name": "Toner Xerox Negro para B1025",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB668.webp"
  },
  {
    "sku": "108R00865",
    "name": "TONER XEROX DESPERDICIO PHASER 7500",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB424.webp"
  },
  {
    "sku": "101R00664",
    "name": "Tambor Xerox Negro Rendimiento 10000 Páginas para B210/B205/B215",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB069.webp"
  },
  {
    "sku": "006R01773",
    "name": "Tóner Xerox 52K Páginas para AltaLink B8170 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB703.webp"
  },
  {
    "sku": "106R04348",
    "name": "Toner Xerox Capacidad Estandar 3K Paginas B205/B210/B215 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB687.webp"
  },
  {
    "sku": "106R02762",
    "name": "TONER XEROX AMARILLO PARA PHASER 6020/6022 Y WC 6025/6027",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB599.webp"
  },
  {
    "sku": "108R01504",
    "name": "CARTUCHO RESIDUOS XEROX VERSALINK C8000 C9000 47K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAF008.webp"
  },
  {
    "sku": "106R01598",
    "name": "TONER XEROX PHASER 6500/6505 CYAN 1000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB485.webp"
  },
  {
    "sku": "106R01599",
    "name": "TONER XEROX PHASER 6500/6505 MAGENTA 1000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB486.webp"
  },
  {
    "sku": "106R01600",
    "name": "TONER XEROX PHASER 6500/6505 AMARILLO 1000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB487.webp"
  },
  {
    "sku": "106R02778",
    "name": "TONER XEROX NEGRO WC3215 /3225 3000 PAGINA S",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB586.webp"
  },
  {
    "sku": "101R00555",
    "name": "TAMBOR O UNIDAD DE IMAGEN XEROX P/ 3330/ 3335/ 3345 30K IMPR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB042.webp"
  },
  {
    "sku": "106R01632",
    "name": "TONER XEROX PHASER 6000/6010 MAGENTA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB480.webp"
  },
  {
    "sku": "8NA",
    "name": "Kit Inicialización Xerox 25PPM MFP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE562.webp"
  },
  {
    "sku": "115R00128",
    "name": "Botella de Desperdicio Xerox 30K VersaLink C7020/7025/7030",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECCOTAB004.webp"
  },
  {
    "sku": "006R01772",
    "name": "Tóner Xerox 52K Páginas para AltaLink B8145/55 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB702.webp"
  },
  {
    "sku": "106R03745",
    "name": "Toner Xerox 22.2K Color Negro VersaLink C7020/7025/7030",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB637.webp"
  },
  {
    "sku": "006R01461",
    "name": "TONER XEROX NEGRO WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB471.webp"
  },
  {
    "sku": "106R02180",
    "name": "TONER XEROX PHASER 3040_B/3010_B CAPACIDAD 1K NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB507.webp"
  },
  {
    "sku": "101R00474",
    "name": "TAMBOR XEROX WC3215",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB040.webp"
  },
  {
    "sku": "106R02773",
    "name": "TONER XEROX IMPRESIÓN NEGRO 3020/3025",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB585.webp"
  },
  {
    "sku": "008R13178",
    "name": "ROLLO TRANSFERENCIA XEROX PARA WC 5945/55",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECROLAB001.webp"
  },
  {
    "sku": "001R00613",
    "name": "LIMPIADOR CORREA XEROX 160K PAGINAS WC 7525/7530/753",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECLIMAB003.webp"
  },
  {
    "sku": "101R00554",
    "name": "Tambor Xerox 65K Páginas VersaLink B400",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB047.webp"
  },
  {
    "sku": "106R03396",
    "name": "TONER XEROX NEGRO 31K VERSALINK B70XX",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB628.webp"
  },
  {
    "sku": "106R03485",
    "name": "TONER XEROX CYAN ALTA CAPACIDAD 2.4K PHASER 6510 WC6515",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB609.webp"
  },
  {
    "sku": "106R03486",
    "name": "TONER XEROX MAGENTA ALTA CAPACIDAD 2.4K PHASER 6510 WC6515",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB610.webp"
  },
  {
    "sku": "013R00650",
    "name": "TONER XEROX NEGRO 120000 PAG CC ASSEMBLY",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB467.webp"
  },
  {
    "sku": "106R03484",
    "name": "Toner Xerox Capacidad Estandar 2.5K Paginas Phaser 6510/Workcentre 6515 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB677.webp"
  },
  {
    "sku": "006R01701",
    "name": "Toner Xerox Alatlink Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB630.webp"
  },
  {
    "sku": "106R01047",
    "name": "TONER XEROX C20W M20W C20IW",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB162.webp"
  },
  {
    "sku": "006R01517",
    "name": "TONER XEROX WC7545/75567525/7530/7535 NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB503.webp"
  },
  {
    "sku": "108R01036",
    "name": "UNIDAD LIMPIEZA XEROX IBT PHASER 7800",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECKITAB060.webp"
  },
  {
    "sku": "006R01683",
    "name": "Tóner Xerox 2 Botes C/U 44K AltaLink B80XX Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB629.webp"
  },
  {
    "sku": "106R03746",
    "name": "Toner Xerox Amarillo 11.8K VersaLink C7020/7025/7030",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB634.webp"
  },
  {
    "sku": "106R03748",
    "name": "Toner Xerox Cyan 11.8K VersaLink C7020/7025/7030",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB636.webp"
  },
  {
    "sku": "106R03488",
    "name": "TONER XEROX NEGRO EXTRA ALTA CAPACIDAD 5.5K PHASER 6510 WC",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB612.webp"
  },
  {
    "sku": "106R02308",
    "name": "TONER XEROX WC 3315 NEGRO CAPACIDAD ESTANDA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB535.webp"
  },
  {
    "sku": "106R03520",
    "name": "Toner Xerox Alta Capacidad 4.8K VersaLink C400/405 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB617.webp"
  },
  {
    "sku": "106R03581",
    "name": "TONER XEROX CAPACIDAD ESTANDAR 5.9K** PARA B400/B405",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB625.webp"
  },
  {
    "sku": "108R01488",
    "name": "TAMBOR XEROX NEGRO VERSALINK C600 SERIES 40K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB062.webp"
  },
  {
    "sku": "108R01485",
    "name": "TAMBOR XEROX CYAN VERSALINK C600 SERIES 40K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB063.webp"
  },
  {
    "sku": "108R01486",
    "name": "TAMBOR XEROX MAGENTA VERSALINK C600 SERIES 40K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB064.webp"
  },
  {
    "sku": "108R01487",
    "name": "TAMBOR XEROX AMARILLO VERSALINK C600 SERIES 40K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB065.webp"
  },
  {
    "sku": "497K16590",
    "name": "Kit Transportación Xerox Horizontal AltaLink B80XX",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAS033.webp"
  },
  {
    "sku": "106R03048",
    "name": "TONER XEROX DUAL PACK NEGRO WC3020 /3025 3000 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB588.webp"
  },
  {
    "sku": "006R01659",
    "name": "Toner Xerox Negro C70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB580.webp"
  },
  {
    "sku": "006R01660",
    "name": "Toner Xerox Cyan C70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB581.webp"
  },
  {
    "sku": "006R01661",
    "name": "Toner Xerox Magenta C70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB582.webp"
  },
  {
    "sku": "006R01662",
    "name": "Toner Xerox Amarillo C70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB583.webp"
  },
  {
    "sku": "113R00671",
    "name": "TAMBOR XEROX C20W M20W C20IW",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB008.webp"
  },
  {
    "sku": "106R01601",
    "name": "TONER XEROX PHASER 6500 CYAN 2500 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB495.webp"
  },
  {
    "sku": "106R01602",
    "name": "TONER XEROX PHASER 6500 MAGENTA 2500 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB496.webp"
  },
  {
    "sku": "106R01603",
    "name": "TONER XEROX PHASER 6500 YELLOW 2500 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB497.webp"
  },
  {
    "sku": "006R01160",
    "name": "TONER XEROX NEGRO (RENDIMIENTO 30000 IMPRESIO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB518.webp"
  },
  {
    "sku": "106R01487",
    "name": "TONER XEROX ALTA CAPACIDAD WORKCENTRE 3210/3220",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB415.webp"
  },
  {
    "sku": "008R13064",
    "name": "RODILLO DE TRANSFERENCIA XEROX 200 PAGINAS P/ 7830 7835",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECRODAB015.webp"
  },
  {
    "sku": "006R01702",
    "name": "Toner Xerox Altalink Cyan",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB631.webp"
  },
  {
    "sku": "006R01703",
    "name": "Toner Xerox Altalink Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB632.webp"
  },
  {
    "sku": "006R01704",
    "name": "Toner Xerox Altalink Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB633.webp"
  },
  {
    "sku": "006R01561",
    "name": "Toner Xerox 006R01561 Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB567.webp"
  },
  {
    "sku": "106R02249",
    "name": "TONER XEROX CYAN PARA WC6605 / PH6600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB602.webp"
  },
  {
    "sku": "106R02250",
    "name": "TONER XEROX MAGENTA PARA WC6605 / PH6600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB603.webp"
  },
  {
    "sku": "106R02251",
    "name": "TONER XEROX AMARILLO PARA WC6605 / PH6600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB604.webp"
  },
  {
    "sku": "106R02252",
    "name": "TONER XEROX NEGRO PARA WC6605 / PH6600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB605.webp"
  },
  {
    "sku": "108R00958",
    "name": "TINTA XEROX SOLIDA CYAN 6 BARRAS 17.300 PAG.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB144.webp"
  },
  {
    "sku": "108R00959",
    "name": "TINTA XEROX SOLIDA MAGENTA 6 BARRAS 17.300 PAG.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB145.webp"
  },
  {
    "sku": "108R00960",
    "name": "TINTA XEROX SOLIDA AMARILLO 6 BARRAS 17.300 PAG.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB146.webp"
  },
  {
    "sku": "108R00961",
    "name": "TINTA XEROX SOLIDA NEGRO 6 BARRAS 17.300 PAG.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB147.webp"
  },
  {
    "sku": "106R01604",
    "name": "TONER XEROX PHASER 6500/6505 NEGRO 3000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB484.webp"
  },
  {
    "sku": "106R03693",
    "name": "TONER XEROX CYAN EXTRA ALTA CAPACIDAD 4.3K PHASER 6510 WC6",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB613.webp"
  },
  {
    "sku": "106R03694",
    "name": "TONER XEROX MAGENTA EXTRA ALTA CAPACIDAD 4.3K PHASER 6510",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB614.webp"
  },
  {
    "sku": "106R03695",
    "name": "TONER XEROX AMARILLO EXTRA ALTA CAPACIDAD 4.3K PHASER 6510",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB615.webp"
  },
  {
    "sku": "106R03772",
    "name": "Tóner Xerox Capacidad Estándar 3.3K VersaLink C7000 SFP Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB644.webp"
  },
  {
    "sku": "006R01379",
    "name": "Toner Xerox 700 Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB455.webp"
  },
  {
    "sku": "006R01380",
    "name": "Toner Xerox 700 Cyan",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB456.webp"
  },
  {
    "sku": "006R01381",
    "name": "Toner Xerox 700 Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB457.webp"
  },
  {
    "sku": "006R01382",
    "name": "Toner Xerox 700 Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB458.webp"
  },
  {
    "sku": "006R01606",
    "name": "TONER XEROX NEGRO WC5945/5955",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB577.webp"
  },
  {
    "sku": "108R01419",
    "name": "TAMBOR XEROX AMARILLO 48K PHASER6510 WC6515",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB045.webp"
  },
  {
    "sku": "108R01420",
    "name": "TAMBOR XEROX NEGRO 48K PHASER6510 WC6515",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB046.webp"
  },
  {
    "sku": "006R01529",
    "name": "Toner Xerox 550/560 Negro 30000 Paginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB489.webp"
  },
  {
    "sku": "006R01530",
    "name": "Toner Xerox 550/560 Amarillo 32000 Paginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB490.webp"
  },
  {
    "sku": "006R01531",
    "name": "Tóner Xerox 550/560 Magenta 32000 Páginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB491.webp"
  },
  {
    "sku": "006R01532",
    "name": "Toner Xerox 550/560 Cyan 32000 Paginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB492.webp"
  },
  {
    "sku": "108R01151",
    "name": "UNIDAD IMAGEN XEROX NEGRO PHASER 7100",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB032.webp"
  },
  {
    "sku": "106R03887",
    "name": "Toner Xerox Negro Extra Alta Capacidad 12.1K para Versalink",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB652.webp"
  },
  {
    "sku": "106R03621",
    "name": "TONER XEROX DE ALTA CAPACIDAD P/ 3330/ 3335/ 3345 8500 IMP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB607.webp"
  },
  {
    "sku": "008R12941",
    "name": "GRAPAS XEROX PHASER 5500 APILADOR 3 CAJAS 5000 C/U",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECGRAAB026.webp"
  },
  {
    "sku": "006R01219",
    "name": "Toner Xerox Docucolor 240 250 Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB299.webp"
  },
  {
    "sku": "006R01220",
    "name": "Toner Xerox Docucolor 240 250 Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB300.webp"
  },
  {
    "sku": "006R01222",
    "name": "Toner Xerox Doducolor 240 250 Cyan",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB302.webp"
  },
  {
    "sku": "106R01305",
    "name": "TONER XEROX WC 5230_TD 30K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB391.webp"
  },
  {
    "sku": "006R01758",
    "name": "Tóner Xerox AltaLink C8145/C8155/C8170 59K Páginas Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB700.webp"
  },
  {
    "sku": "106R02721",
    "name": "TONER XEROX P3610/WC3615 5900 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB556.webp"
  },
  {
    "sku": "006R01319",
    "name": "TONER XEROX NEGRO 24K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB373.webp"
  },
  {
    "sku": "106R01529",
    "name": "TONER XEROX ESTANDAR 5000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB469.webp"
  },
  {
    "sku": "106R01481",
    "name": "TONER XEROX CYAN PHASER 6140N",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB426.webp"
  },
  {
    "sku": "106R01483",
    "name": "TONER XEROX AMARILLO PHASER 6140N",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB428.webp"
  },
  {
    "sku": "106R01373",
    "name": "TONER XEROX CAP ESTANDAR PHASER 3250 3.5K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB393.webp"
  },
  {
    "sku": "106R03521",
    "name": "Toner Xerox Alta Capacidad 4.8K VersaLink C400/405 Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB618.webp"
  },
  {
    "sku": "106R03522",
    "name": "Toner Xerox Alta Capacidad 4.8K VersaLink C400/405 Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB619.webp"
  },
  {
    "sku": "006R01238",
    "name": "TONER XEROX 6204 NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB338.webp"
  },
  {
    "sku": "006R01518",
    "name": "TONER XEROX WC7545/7556/7525/7530/7535 AMARILLO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB504.webp"
  },
  {
    "sku": "006R01519",
    "name": "TONER XEROX WC7545/7556/7525/7530/7535 MAGENTA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB505.webp"
  },
  {
    "sku": "006R01520",
    "name": "TONER XEROX WC7545/75567525/7530/7535 CYAN",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB506.webp"
  },
  {
    "sku": "006R01754",
    "name": "Tóner Xerox AltaLink C8130/C8135 59K Páginas Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB707.webp"
  },
  {
    "sku": "108R00794",
    "name": "TONER XEROX CAPAC ESTANDAR PHASER 3635MFP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB395.webp"
  },
  {
    "sku": "106R02312",
    "name": "TONER XEROX WC 3325 NEGRO ALTA CAPACIDAD 11",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB533.webp"
  },
  {
    "sku": "113R00719",
    "name": "TONER XEROX CYAN ESTANDAR 2K PHASER 6180",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB341.webp"
  },
  {
    "sku": "113R00720",
    "name": "TONER XEROX MAGENTA ESTANDAR 2K PHASER 6180",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB342.webp"
  },
  {
    "sku": "113R00721",
    "name": "TONER XEROX AMARILLO ESTANDAR 2K PHASER 6180",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB343.webp"
  },
  {
    "sku": "109R00847",
    "name": "UNIDAD XEROX FUSOR WC 5945/55 C/FILTRO OZONO 350K PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB052.webp"
  },
  {
    "sku": "106R01391",
    "name": "TONER XEROX NEGRO PHASER 6280 CAP ESTANDAR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB432.webp"
  },
  {
    "sku": "108R00974",
    "name": "UNIDAD IMAGEN XEROX NEGRO PHASER 6700 50000 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB028.webp"
  },
  {
    "sku": "108R00971",
    "name": "UNIDAD IMAGEN XEROX CYAN PHASER 6700 50000 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB029.webp"
  },
  {
    "sku": "108R00972",
    "name": "UNIDAD IMAGEN XEROX MAGENTA PHASER 6700 50000 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB030.webp"
  },
  {
    "sku": "006r01463",
    "name": "TONER XEROX MAGENTA WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB472.webp"
  },
  {
    "sku": "006R01464",
    "name": "TONER XEROX CYAN WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB473.webp"
  },
  {
    "sku": "006R01462",
    "name": "TONER XEROX AMARILLO WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB474.webp"
  },
  {
    "sku": "108R01022",
    "name": "TINTA XEROX COLORQUBE CYAN 8900 (6 BARRAS)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB139.webp"
  },
  {
    "sku": "108R01023",
    "name": "TINTA XEROX COLORQUBE MAGENTA 8900 (6 BARRAS)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB140.webp"
  },
  {
    "sku": "108R01024",
    "name": "TINTA XEROX COLORQUBE AMARILLA 8900 (6 BARRAS)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTINAB141.webp"
  },
  {
    "sku": "006R01271",
    "name": "TONER XEROX AMARILLO WORKCENTRE 7132W 8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB312.webp"
  },
  {
    "sku": "006R01272",
    "name": "TONER XEROX MAGENTA WORKCENTRE 7132W 8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB313.webp"
  },
  {
    "sku": "106R03765",
    "name": "Tóner Xerox Alta Capacidad 10.7K VersaLink C7000 SFP Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB645.webp"
  },
  {
    "sku": "106R03532",
    "name": "TONER XEROX NEGRO EXTRA ALTA CAPACIDAD VERSALINK C400/405 (1",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB621.webp"
  },
  {
    "sku": "106R02310",
    "name": "TONER XEROX WC 3325 NEGRO CAPACIDAD ESTANDA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB534.webp"
  },
  {
    "sku": "106R01316",
    "name": "TONER XEROX NEGRO 6400MFP ALTA CAPACIDAD",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB443.webp"
  },
  {
    "sku": "006r01552",
    "name": "TONER XEROX NEGRO 110.000 PAG  5865/5875/5890",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB554.webp"
  },
  {
    "sku": "106R01514",
    "name": "TONER XEROX 106R01514 NEGRO 7100 PAGINAS PHASER 6700",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB550.webp"
  },
  {
    "sku": "106R03623",
    "name": "TONER XEROX EXTRA ALTA CAPACIDAD P/3330/ 3335/ 3345 15K IMP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB608.webp"
  },
  {
    "sku": "106R01389",
    "name": "TONER XEROX MAGENTA PHASER 6280 CAP ESTANDAR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB430.webp"
  },
  {
    "sku": "006R01276",
    "name": "TONER XEROX WORKCENTRE 4150 20k",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB310.webp"
  },
  {
    "sku": "106R02306",
    "name": "TONER XEROX PHASER 3320 NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB532.webp"
  },
  {
    "sku": "106R01410",
    "name": "TONER XEROX WORKCENTRE 4260",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB423.webp"
  },
  {
    "sku": "006R01182",
    "name": "Toner Xerox WorkCentre 123 128 Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB227.webp"
  },
  {
    "sku": "106R02723",
    "name": "TONER XEROX NEGRO P-WC3615 PHASER 3610 ALTO RENDIMIENTO 14K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB555.webp"
  },
  {
    "sku": "106R03939",
    "name": "Tóner Xerox Extra Alta Capacidad 16.9k VersaLink C605 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB692.webp"
  },
  {
    "sku": "006R01551",
    "name": "TONER XEROX NEGRO WC 5845/5855 76000 PGS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB548.webp"
  },
  {
    "sku": "106R01163",
    "name": "TONER XEROX PHASER 7760 NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB305.webp"
  },
  {
    "sku": "106R01294",
    "name": "TONER XEROX PHASER 5550 35K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB397.webp"
  },
  {
    "sku": "006R01759",
    "name": "Tóner Xerox AltaLink C8145/C8155/C8170 28K Páginas Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB698.webp"
  },
  {
    "sku": "006R01761",
    "name": "Tóner Xerox AltaLink C8145/C8155/C8170 28K Páginas Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB699.webp"
  },
  {
    "sku": "013R00624",
    "name": "TAMBOR XEROX WC7328 7335 7345",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB005.webp"
  },
  {
    "sku": "106R02236",
    "name": "TONER XEROX PHASER WC 6605 NEGRO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB545.webp"
  },
  {
    "sku": "106R03886",
    "name": "Toner Xerox Amarillo Extra Alta Capacidad 9K para Versalink",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB655.webp"
  },
  {
    "sku": "106R01531",
    "name": "TONER XEROX ALTA CAPACIDAD 11000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB470.webp"
  },
  {
    "sku": "106R03884",
    "name": "Toner Xerox Cyan Extra Alta Capacidad 9K para Versalink C50",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB653.webp"
  },
  {
    "sku": "106R03885",
    "name": "Toner Xerox Magenta Extra Alta Capacidad 9K para Versalink C",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB654.webp"
  },
  {
    "sku": "109R00850",
    "name": "Fusor Xerox 120V CRU 8075/8090",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB059.webp"
  },
  {
    "sku": "106R01513",
    "name": "TONER XEROX 106R01513 AMARILLO 5000 PAGINAS PHASER 6700",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB551.webp"
  },
  {
    "sku": "113R00674",
    "name": "TAMBOR XEROX PHASER 245",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB010.webp"
  },
  {
    "sku": "106R02755",
    "name": "TONER XEROX WORKCENTRE 6655 ALTA CAPACIDAD NEGRO 12000 PAGIN",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB576.webp"
  },
  {
    "sku": "106R03533",
    "name": "TONER XEROX AMARILLO EXTRA ALTA CAPACIDAD VERSALINK C400/405",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB622.webp"
  },
  {
    "sku": "106R03534",
    "name": "TONER XEROX CYAN EXTRA ALTA CAPACIDAD VERSALINK C400/405 (8K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB623.webp"
  },
  {
    "sku": "106R03535",
    "name": "Tóner Xerox Extra Alta Capacidad 8K VersaLink C400/405 Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB624.webp"
  },
  {
    "sku": "106R04057",
    "name": "Toner Xerox Negro Alta Capacidad 20.9K Paginas Versalink C8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB676.webp"
  },
  {
    "sku": "006R01760",
    "name": "Tóner Xerox 28K Páginas AltaLink C8145/C8155/C8170 Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB697.webp"
  },
  {
    "sku": "106R03927",
    "name": "Tóner Xerox Extra Alta Capacidad 16.9K VersaLink C600 Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB664.webp"
  },
  {
    "sku": "013R00675",
    "name": "Tambor Xerox 200K AltaLink B80XX",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB049.webp"
  },
  {
    "sku": "115R00135",
    "name": "FUSOR XEROX 100K VERSALINK C600 SERIES",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB063.webp"
  },
  {
    "sku": "106R02741",
    "name": "Tóner Xerox Workcentre 3655 Extra Alta Capacidad 25900 Páginas Color Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB571.webp"
  },
  {
    "sku": "106R03585",
    "name": "TONER XEROX CAPACIDAD EXTRA ALTA 24.6K** PARA B400/B405",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB627.webp"
  },
  {
    "sku": "106R03943",
    "name": "Toner Xerox Alta Capacidad 25.9K para Versalink B600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB647.webp"
  },
  {
    "sku": "106R02735",
    "name": "Toner Xerox Alta Capacidad 25000 Paginas",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB578.webp"
  },
  {
    "sku": "106R02607",
    "name": "TONER XEROX MAGENTA PHASER 7100 CAP ESTANDAR 4.5K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB559.webp"
  },
  {
    "sku": "106R02608",
    "name": "TONER XEROX AMARILLO PHASER 7100 CAPACIDAD ESTANDAR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB560.webp"
  },
  {
    "sku": "006R01406",
    "name": "TONER XEROX AMARILLO 34000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB464.webp"
  },
  {
    "sku": "006R01404",
    "name": "TONER XEROX CYAN 34000 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB466.webp"
  },
  {
    "sku": "106R03936",
    "name": "Toner Xerox Extra Alta Capacidad 16.8k VersaLink C605 Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB689.webp"
  },
  {
    "sku": "106R03937",
    "name": "Toner Xerox Extra Alta Capacidad 16.8k VersaLink C605 Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB690.webp"
  },
  {
    "sku": "106R03938",
    "name": "Toner Xerox Extra Alta Capacidad 16.8k VersaLink C605 Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB691.webp"
  },
  {
    "sku": "106R04082",
    "name": "Toner Xerox Cyan Alta Capacidad 26.5K Paginas Versalink C9000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB669.webp"
  },
  {
    "sku": "106R04083",
    "name": "Toner Xerox Magenta Alta Capacidad 26.5K Versalink C9000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB670.webp"
  },
  {
    "sku": "106R04084",
    "name": "Toner Xerox Amarillo Alta Capacidad 26.5K Versalink C9000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB671.webp"
  },
  {
    "sku": "006R01755",
    "name": "Tóner Xerox AltaLink C8130/C8135 28K Páginas Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB704.webp"
  },
  {
    "sku": "006R01756",
    "name": "Tóner Xerox AltaLink C8130/C8135 28K Páginas Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB705.webp"
  },
  {
    "sku": "006R01757",
    "name": "Tóner Xerox AltaLink C8130/C8135 28K Páginas Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB706.webp"
  },
  {
    "sku": "013R00686",
    "name": "Tambor Xerox 198K Páginas para AltaLink B8145/55/70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB071.webp"
  },
  {
    "sku": "013R00657",
    "name": "TAMBOR XEROX NEGRO 67K WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB016.webp"
  },
  {
    "sku": "013R00659",
    "name": "TAMBOR XEROX MAGENTA 51K WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB015.webp"
  },
  {
    "sku": "013R00658",
    "name": "TAMBOR XEROX AMARILLO 51K XEROX WC7120",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB020.webp"
  },
  {
    "sku": "013R00660",
    "name": "TAMBOR XEROX CYAN CARTRIDGE YIELD 51K WC 7120/7220/7225",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB034.webp"
  },
  {
    "sku": "106R01415",
    "name": "TONER XEROX PHASER 3435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB405.webp"
  },
  {
    "sku": "106R03924",
    "name": "Tóner Xerox Extra Alta Capacidad 16.8K VersaLink C600 Color Cian",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB665.webp"
  },
  {
    "sku": "106R03925",
    "name": "Tóner Xerox Extra Alta Capacidad 16.8K VersaLink C600 Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB666.webp"
  },
  {
    "sku": "106R03926",
    "name": "Tóner Xerox Extra Alta Capacidad 16.8K VersaLink C600 Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB667.webp"
  },
  {
    "sku": "006R01400",
    "name": "TONER XEROX AMARILLO WC 7425/7428/7435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB451.webp"
  },
  {
    "sku": "006R01401",
    "name": "TONER XEROX MAGENTA WC 7425/7428/7435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB452.webp"
  },
  {
    "sku": "006R01402",
    "name": "TONER XEROX CYAN WC 7425/7428/7435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB453.webp"
  },
  {
    "sku": "106R02732",
    "name": "TONER XEROX P3610/WC3615 25300 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB557.webp"
  },
  {
    "sku": "115R00069",
    "name": "KIT MANTENIMIENTO XEROX 115R00069 110V PHASER 4600/4620 150.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECMOUAB030.webp"
  },
  {
    "sku": "106R02752",
    "name": "TONER XEROX WORKCENTRE 6655 ALTA CAPACIDAD CYAN 7500 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB573.webp"
  },
  {
    "sku": "106R02753",
    "name": "TONER XEROX WORKCENTRE 6655 ALTA CAPACIDAD MAGENTA 7500 PAGI",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB574.webp"
  },
  {
    "sku": "106R02754",
    "name": "TONER XEROX WORKCENTRE 6655 ALTA CAPACIDAD AMARILLO 7500 PAG",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB575.webp"
  },
  {
    "sku": "106r02233",
    "name": "TONER XEROX PHASER WC 6605 CYAN",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB542.webp"
  },
  {
    "sku": "106R02234",
    "name": "TONER XEROX PHASER WC 6605 MAGENTA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB543.webp"
  },
  {
    "sku": "106R02235",
    "name": "TONER XEROX PHASER WC 6605 AMARILLO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB544.webp"
  },
  {
    "sku": "115R00084",
    "name": "FUSOR XEROX PHASER 3610 110V 200K (PIEZA LARGA DURACION)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB051.webp"
  },
  {
    "sku": "113R00782",
    "name": "Tambor Xerox 82.2K VersaLink C7000 SFP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB057.webp"
  },
  {
    "sku": "106R03766",
    "name": "Tóner Xerox Alta Capacidad 10.1K VersaLink C7000 SFP Color Amarillo",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB638.webp"
  },
  {
    "sku": "106R03767",
    "name": "Tóner Xerox Alta Capacidad 10.1K VersaLink C7000 SFP Color Magenta",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB639.webp"
  },
  {
    "sku": "113R00762",
    "name": "TAMBOR XEROX KIT 4600/4620",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB013.webp"
  },
  {
    "sku": "113R00711",
    "name": "TONER XEROX PHASER 4510 CAPACIDAD ESTANDAR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB326.webp"
  },
  {
    "sku": "013R00591",
    "name": "Tambor Xerox negro 90K rendimiento 90000 impresiones AL",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB002.webp"
  },
  {
    "sku": "101R00602",
    "name": "TAMBOR XEROX PARA VERSALINK C8000 / C9000 PARA 190K PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB068.webp"
  },
  {
    "sku": "013R00662",
    "name": "TAMBOR XEROX WORKCENTRE WC7545/7556/7525/7530/7535 12500",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB021.webp"
  },
  {
    "sku": "106R03945",
    "name": "Toner Xerox Extra Alta Capacidad 46.7K para Versalink B600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB648.webp"
  },
  {
    "sku": "115R00139",
    "name": "FUSOR XEROX 200K PARA VERSALINK B600",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB064.webp"
  },
  {
    "sku": "106R01526",
    "name": "TONER XEROX PHASER 6700 NEGRO 18000 PAGS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB538.webp"
  },
  {
    "sku": "013R00670",
    "name": "TAMBOR XEROX WC 5019/5021 (80000)",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB033.webp"
  },
  {
    "sku": "9NA",
    "name": "Kit Inicialización Xerox 30PPM MFP",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE563.webp"
  },
  {
    "sku": "115R00076",
    "name": "FUSOR XEROX PHASER 6600 WORKCENTRE 6605 110 V",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB048.webp"
  },
  {
    "sku": "106R02609",
    "name": "TONER XEROX DUAL CYAN 9K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB561.webp"
  },
  {
    "sku": "006R01178",
    "name": "TONER XEROX WC PRO C3545 AMARILLO",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB249.webp"
  },
  {
    "sku": "115R00114",
    "name": "FUSOR XEROX VERSALINK C7020/7025/7030",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB060.webp"
  },
  {
    "sku": "106R01523",
    "name": "TONER XEROX CYAN PHASER 6700 12000 PAGS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB539.webp"
  },
  {
    "sku": "106R01524",
    "name": "TONER XEROX MAGENTA 12.000 PAGS PHASER 6700",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB540.webp"
  },
  {
    "sku": "106R01525",
    "name": "TONER XEROX AMARILLO 12000 PAGS PHASER 6700",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB541.webp"
  },
  {
    "sku": "108R01492",
    "name": "KIT MANTENIMIENTO XEROX 100K (B. TRANSF. R. TRANSF. R. AL",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAF006.webp"
  },
  {
    "sku": "106R01536",
    "name": "TONER XEROX PHASER 4600/4620 ALTO RENDIMIENTO 30K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB494.webp"
  },
  {
    "sku": "101R00435",
    "name": "TAMBOR XEROX 5230_TD ALTA CAPACIDAD 80 88K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB006.webp"
  },
  {
    "sku": "113R00724",
    "name": "TONER XEROX MAGENTA ALTA CAP 6K PHASER 6180",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB346.webp"
  },
  {
    "sku": "106R01322",
    "name": "TONER XEROX AMARILLO 6400MFP CAP ESTANDAR",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB449.webp"
  },
  {
    "sku": "106R04054",
    "name": "Toner Xerox Cyan Alta Capacidad 16.5K Paginas Versalink C8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB673.webp"
  },
  {
    "sku": "106R04055",
    "name": "Toner Xerox Magenta Alta Capacidad 16.5K Paginas Versalink C8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB674.webp"
  },
  {
    "sku": "106R04056",
    "name": "Toner Xerox Amarillo Alta Capacidad 16.5K Paginas Versalink C8000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB675.webp"
  },
  {
    "sku": "013R00664",
    "name": "Tambor Xerox Color 550/560",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB001.webp"
  },
  {
    "sku": "106R04646",
    "name": "Tóner Xerox Capacidad Estándar VersaLink C8000W 5000 Páginas Color Blanco",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB701.webp"
  },
  {
    "sku": "8NB",
    "name": "Bandeja de Papel Xerox 520 Hojas C/1 Gabinete Versalink B70XX",
    "brand": "Xerox",
    "category": "Papel",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE565.webp"
  },
  {
    "sku": "106R01573",
    "name": "TONER XEROX NEGRO ALTA CAPACIDAD PHASER 7800 24K PA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB523.webp"
  },
  {
    "sku": "106R01570",
    "name": "TONER XEROX CYAN HIGH CAPACITY PHASER 7800 17.2K PA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB520.webp"
  },
  {
    "sku": "106R01571",
    "name": "TONER XEROX MAGENTA HIGH CAPACITY PHASER 7800 17.2K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB521.webp"
  },
  {
    "sku": "106R01572",
    "name": "TONER XEROX AMARILLO ALTA CAPACIDAD PHASER 7800 17.",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB522.webp"
  },
  {
    "sku": "013R00647",
    "name": "TAMBOR XEROX WORKCENTRE 7425/7428/7435",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB022.webp"
  },
  {
    "sku": "115R00127",
    "name": "Limpiador Correo Xerox 200K VersaLink C7000 SFP",
    "brand": "Xerox",
    "category": "Impresión y Multifuncionales",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECLIMAB004.webp"
  },
  {
    "sku": "115R00086",
    "name": "KIT XEROX FUSOR MANTENIMIENTO WC 4265",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB057.webp"
  },
  {
    "sku": "113R00670",
    "name": "TAMBOR XEROX PHASER 5500",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB011.webp"
  },
  {
    "sku": "106R01446",
    "name": "TONER XEROX PHASER 7500 HIGH CAPACITY BLACK",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB419.webp"
  },
  {
    "sku": "113R00776",
    "name": "TAMBOR XEROX WC 4265 100000 PAGINAS",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB038.webp"
  },
  {
    "sku": "109R00773",
    "name": "Fusor Xerox WC5687/5665/5675",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB043.webp"
  },
  {
    "sku": "106R01218",
    "name": "TONER XEROX PHASER 6360 CYAN ALTA CAPACIDAD",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB334.webp"
  },
  {
    "sku": "106R01219",
    "name": "TONER XEROX PHASER 6360 MAGENTA ALTA CAPACIDAD",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB335.webp"
  },
  {
    "sku": "106R01220",
    "name": "TONER XEROX PHASER 6360 AMARILLO ALTA CAPACIDAD",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB336.webp"
  },
  {
    "sku": "115R00137",
    "name": "Fusor Xerox VersaLink C7000",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECFUSAB061.webp"
  },
  {
    "sku": "9NB",
    "name": "Módulo Xerox Bandejas 3TM 520 Hojas Cada Una",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECACCAE572.webp"
  },
  {
    "sku": "113R00755",
    "name": "TAMBOR XEROX WORKCENTRE 4260",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB017.webp"
  },
  {
    "sku": "106R01444",
    "name": "TONER XEROX PHASER 7500 HIGH CAPACITY MAGENTA",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTONAB421.webp"
  },
  {
    "sku": "013R00681",
    "name": "Tambor Xerox para AltaLink C8130/35/45/55/70",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB070.webp"
  },
  {
    "sku": "013R00663",
    "name": "Tambor Xerox Impresora Color 550/560 CRU Negro",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECTAMAB012.webp"
  },
  {
    "sku": "108R00645",
    "name": "UNIDAD IMAGEN XEROX PHASER 6300 6350 35K",
    "brand": "Xerox",
    "category": "Consumibles",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XECUNIAB042.webp"
  },
  {
    "sku": "1102",
    "name": "Escáner Xerox Viaje Doble Faz 1102 Resolución 600 ppp",
    "brand": "Xerox",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIESCAB053.webp"
  },
  {
    "sku": "0DXT",
    "name": "Escáner Xerox Duplex Combo 1517 ADF Resolución 600 dpi",
    "brand": "Xerox",
    "category": "Digitalización de Documentos",
    "status": "En Stock",
    "image": "https://www.cmlomas.com/productos-exel/XEIESCAB058.webp"
  }
];

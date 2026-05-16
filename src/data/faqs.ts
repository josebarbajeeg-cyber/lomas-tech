/**
 * Single source of truth for FAQ items.
 *
 * Consumed by:
 *  - `src/components/Faq.tsx` (accordion UI)
 *  - `src/components/FaqPage.tsx` (dedicated /preguntas-frecuentes route)
 *  - Stream B: `faqSchema(faqs)` for FAQPage JSON-LD on the landing page and /preguntas-frecuentes
 *
 * Authoring rules (Princeton GEO research):
 *  - Answer-first format: open the answer with the direct response.
 *  - Include at least one specific number or proper noun per answer where possible.
 *  - Confident, authoritative tone — no hedging ("podríamos", "tal vez").
 *  - 2–3 sentences max. Short paragraphs win.
 *  - Numbers that are not in the codebase (RMA window, response times) are framed
 *    as the typical case ("normalmente", "en la mayoría de los casos") rather than
 *    blanket guarantees.
 */
export type Faq = {
  /** URL-safe slug for in-page anchors and FAQPage @id values. */
  id: string;
  /** Question, written in Mexican B2B Spanish. */
  question: string;
  /** Answer, 2–3 sentences, answer-first, with at least one stat or proper noun. */
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 'venta-publico-general',
    question: '¿Lomas vende a público general o solo a distribuidores?',
    answer:
      'Lomas opera exclusivamente B2B: vendemos a distribuidores, papelerías, integradores, corporativos y dependencias de gobierno. El registro como cliente toma menos de 24 horas hábiles y solo necesitamos tu RFC, constancia de situación fiscal y un correo de contacto comercial.',
  },
  {
    id: 'monto-minimo-compra',
    question: '¿Cuál es el monto mínimo de compra?',
    answer:
      'No manejamos monto mínimo: puedes pedir desde 1 unidad sobre cualquiera de los 213 SKUs en catálogo. A diferencia de los importadores directos, que normalmente piden 50 piezas o más, en Lomas reordenas exactamente lo que necesitas reponer cada semana.',
  },
  {
    id: 'marcas-oficiales-distribuidas',
    question: '¿Qué marcas oficiales distribuyen?',
    answer:
      'Distribuimos más de 30 marcas con respaldo oficial del fabricante, entre ellas HP, Lexmark, Epson, Xerox, Brother, Canon, Kodak Alaris, Lenovo, Dell, Samsung, Kingston, TP-Link y Tripp Lite. Todos los equipos llegan con número de serie verificable y garantía registrada a nombre del distribuidor que compra.',
  },
  {
    id: 'tiempo-envio-nacional',
    question: '¿Cuánto tarda el envío a CDMX, Monterrey, Guadalajara o Tijuana?',
    answer:
      'Entregamos en 24 a 48 horas hábiles a cualquier capital del país y el mismo día dentro de la zona metropolitana de Guadalajara. Operamos con DHL, Estafeta y FedEx desde nuestro almacén en Plátano 1406, Del Fresno, lo que nos permite cubrir las 32 entidades sin depender de drop-shipping.',
  },
  {
    id: 'factura-cfdi-40',
    question: '¿Emiten factura CFDI 4.0?',
    answer:
      'Sí, emitimos CFDI 4.0 de forma automática al confirmar el pago. Solo necesitamos tu RFC, razón social, código postal del domicilio fiscal y uso de CFDI; manejamos también complementos de pago y de comercio exterior cuando aplica.',
  },
  {
    id: 'credito-30-60-90',
    question: '¿Manejan crédito a 30, 60 o 90 días?',
    answer:
      'Sí, abrimos líneas de crédito de 30, 60 y 90 días para distribuidores registrados, sujeto a evaluación financiera. El proceso normalmente toma de 3 a 5 días hábiles e incluye revisión de buró, referencias comerciales y un primer pedido de calibración.',
  },
  {
    id: 'metodos-de-pago',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos transferencia SPEI, depósito bancario, tarjeta de crédito y débito (Visa, Mastercard, American Express) y crédito B2B aprobado. Para pedidos mayores a 50,000 MXN priorizamos transferencia SPEI por la velocidad de conciliación.',
  },
  {
    id: 'toner-original-vs-compatible',
    question: '¿Manejan tóner compatible o solo originales?',
    answer:
      'Trabajamos exclusivamente consumibles originales y OEM con respaldo del fabricante: en el catálogo verás los estados "Original" y "OEM" en cada SKU. No vendemos remanufacturados ni clones genéricos porque comprometen la garantía de la impresora.',
  },
  {
    id: 'entrega-mismo-dia-guadalajara',
    question: '¿Hacen entregas el mismo día en Guadalajara?',
    answer:
      'Sí: para pedidos confirmados antes de las 14:00 hrs entregamos el mismo día dentro de la zona metropolitana de Guadalajara (Zapopan, Tlaquepaque, Tonalá y Tlajomulco). El despacho sale directo de nuestro almacén en Plátano 1406, Del Fresno, 44909 Guadalajara.',
  },
  {
    id: 'cotizacion-por-volumen',
    question: '¿Cómo solicito una cotización por volumen?',
    answer:
      'Envía la lista de SKUs y cantidades por WhatsApp al asesor B2B y respondemos con cotización formal en menos de 4 horas hábiles. Para pedidos mayores a 25 unidades del mismo SKU aplicamos escalas de descuento adicionales sobre el precio de lista de mayorista.',
  },
  {
    id: 'garantia-y-devoluciones',
    question: '¿Cuál es la política de garantía y devoluciones?',
    answer:
      'La garantía la respalda directamente el fabricante (HP, Lexmark, Epson y demás marcas oficiales) y nosotros gestionamos el RMA por ti. Aceptamos devoluciones por defecto de fábrica dentro de los 30 días naturales posteriores a la entrega, siempre que el producto conserve empaque, accesorios y número de serie.',
  },
  {
    id: 'sucursal-fisica-recoger',
    question: '¿Tienen sucursal física para recoger pedidos?',
    answer:
      'Sí, contamos con almacén propio en Plátano 1406, Del Fresno, 44909 Guadalajara, Jalisco. Atendemos recolecciones de lunes a viernes de 9:00 a 18:00 hrs y los sábados de 9:00 a 14:00 hrs; recomendamos avisar por WhatsApp para tener tu pedido listo en cuanto llegues.',
  },
];

/*
  ============================================================
  CATÁLOGO DE PRODUCTOS — Humberto Ranzuglia S.R.L.
  ============================================================

  Para agregar un producto: copiá uno de los bloques de abajo
  y completá los datos. Guardá el archivo y listo.

  Campos obligatorios: id, estado, categoria, marca, nombre
  Campos opcionales:   hp, tags, descripcion, imagen, peso, cabina, origen

  estado:    'nuevo'  → aparece en el tab "Nuevos"
             'usado'  → aparece en el tab "Usados"

  categoria: 'tractor-pauny' | 'tractor-gravo' | 'sembradora' |
             'acoplado' | 'implemento' | 'vial'

  imagen:    ruta relativa (ej: 'assets/products/mi-foto.jpg')
             o URL externa (ej: 'https://...')
             null → se muestra placeholder con el nombre de la marca
  ============================================================
*/

const CATALOG = [

  /* ======================================================
     TRACTORES PAUNY — Nuevos
     ====================================================== */
  {
    id: 'p540c',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Bravo',
    nombre: '540 C Bravo',
    hp: '220 HP',
    tags: ['220 HP', 'Articulado', '4×4'],
    descripcion: 'Tractor articulado, doble tracción permanente. Cabina presurizada con aire acondicionado. Transmisión sincronizada. Ideal para gran porte.',
    imagen: 'project/assets/products/pauny-540C-Bravo.png',
    peso: '9.8 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'p580ie',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Bravo',
    nombre: '580 ie Bravo',
    hp: '280 HP',
    tags: ['280 HP', 'Articulado', 'ie'],
    descripcion: 'Motor electrónico ie con gestión avanzada de combustible. Suspensión delantera. Cabina con clima, GPS ready.',
    imagen: 'project/assets/products/pauny-580ie-Bravo.png',
    peso: '10.5 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'p710ie',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Bravo',
    nombre: '710 ie Bravo',
    hp: '370 HP',
    tags: ['370 HP', 'Articulado', 'ie'],
    descripcion: 'Articulado de gran potencia para labores pesadas. Tomas de fuerza delantera y trasera. Listo para agricultura de precisión.',
    imagen: 'project/assets/products/pauny-710ie-Bravo.png',
    peso: '12 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'p780ie',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Bravo',
    nombre: '780 ie Bravo',
    hp: '430 HP',
    tags: ['430 HP', 'Articulado', 'Tope de gama'],
    descripcion: 'Tope de gama Pauny. Motor turbocargado con intercooler y gestión electrónica ie. Para grandes campos.',
    imagen: 'project/assets/products/pauny-780ie-Bravo.png',
    peso: '14 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'p250a',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Estándar',
    nombre: '250 A',
    hp: '170 HP',
    tags: ['170 HP', 'Estándar', '4×4'],
    descripcion: 'Tractor estándar versátil para tareas mixtas. Doble tracción, caja de cambios sincronizada.',
    imagen: 'project/assets/products/pauny-250A.png',
    peso: '6.2 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'p180a',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Estándar',
    nombre: '180 A',
    hp: '125 HP',
    tags: ['125 HP', 'Estándar'],
    descripcion: 'Ideal para producciones medianas. Confiable, económico y de bajo costo de mantenimiento.',
    imagen: 'project/assets/products/pauny-180A.png',
    peso: '4.8 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },

  /* ======================================================
     TRACTORES GRAVO — Nuevos
     ====================================================== */
  {
    id: 'g504d',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: '504D',
    hp: '50 HP',
    tags: ['50 HP', 'Motor Laidong', 'Transmisión 8+2'],
    descripcion: 'Cap. carga 850 kg · Peso 1480 kg · Bomba 35 l/pm. Neumáticos estándar.',
    imagen: null,
    peso: '1.48 T',
    cabina: 'Abierta',
    origen: 'China (importado)',
  },
  {
    id: 'g604',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWB 604',
    hp: '60 HP',
    tags: ['60 HP', 'Motor Quanchai', '12F+12R'],
    descripcion: 'Cap. carga 1500 kg · Peso 2695 kg · Bomba 55 l/pm. Neumáticos 280/70 (frente) 380/70R28 (trasero).',
    imagen: null,
    peso: '2.7 T',
    cabina: 'Abierta',
    origen: 'China (importado)',
  },
  {
    id: 'g904',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWB 904',
    hp: '90 HP',
    tags: ['90 HP', 'Motor Yuchai', 'Cabinado'],
    descripcion: 'Cap. carga 1500 kg · Peso 3345 kg · Transmisión 16F+8R · Bomba 65 l/pm.',
    imagen: null,
    peso: '3.35 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'g1004',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWY 1004',
    hp: '100 HP',
    tags: ['100 HP', 'Motor Yuchai', 'Cabinado'],
    descripcion: 'Cap. carga 2500 kg · Peso 3955 kg · Transmisión 16F+8R · Bomba 80 l/pm.',
    imagen: null,
    peso: '3.96 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'g1104',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWD 1104',
    hp: '110 HP',
    tags: ['110 HP', 'Motor Yuchai', 'Cabinado'],
    descripcion: 'Cap. carga 2700 kg · Peso 4780 kg · Transmisión 16F+8R · Bomba 80 l/pm.',
    imagen: null,
    peso: '4.78 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'g1304',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWC 1304',
    hp: '130 HP',
    tags: ['130 HP', 'Motor Yuchai', 'Cabinado'],
    descripcion: 'Cap. carga 3300 kg · Peso 7410 kg · Neumáticos 420/70R28 (frente) 480/70R38 (trasero).',
    imagen: null,
    peso: '7.41 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'g1604',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWC 1604',
    hp: '165 HP',
    tags: ['165 HP', 'Motor Shangchai', 'Cabinado'],
    descripcion: 'Cap. carga 3300 kg · Peso 7860 kg · Bomba 200 l/pm. Neumáticos 420/70R28 (frente) 480/75R38.',
    imagen: null,
    peso: '7.86 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'g1854',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: 'HWC 1854',
    hp: '185 HP',
    tags: ['185 HP', 'Shangchai', 'ISOBUS'],
    descripcion: 'Transmisión 32F+32R con inversor shuttle. Eje Carraro. Bomba 200 l/pm. Navegación ISOBUS incluida.',
    imagen: null,
    peso: '10.38 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },

  /* ======================================================
     SEMBRADORAS — Nuevas
     ====================================================== */
  {
    id: 'gh600',
    estado: 'nuevo',
    categoria: 'sembradora',
    marca: 'Gherardi',
    nombre: 'Air Drill G 600',
    hp: null,
    tags: ['Granos finos y gruesos', '41–57 líneas', '9–12,40 m'],
    descripcion: 'Siembra a chorrillo. Trenes independientes. Ancho de labor de 9 a 12,40 mts.',
    imagen: 'https://www.gherardi.com.ar/wp-content/uploads/2018/02/0.jpg',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },
  {
    id: 'gh800',
    estado: 'nuevo',
    categoria: 'sembradora',
    marca: 'Gherardi',
    nombre: 'Air Drill G 800',
    hp: null,
    tags: ['35 líneas', 'Ancho 7,35 m', 'Siembra directa'],
    descripcion: '35 líneas a 21 cm. Ancho de labor 7,35 m. Alta precisión de siembra directa.',
    imagen: 'https://www.gherardi.com.ar/wp-content/uploads/2018/01/0-9.jpg',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },
  {
    id: 'ghg100',
    estado: 'nuevo',
    categoria: 'sembradora',
    marca: 'Gherardi',
    nombre: 'G100 / G100M / G117',
    hp: null,
    tags: ['Granos finos', 'Siembra directa', 'Cuchillas turbo'],
    descripcion: 'Dosificadores de doble roldana. Cuchillas de siembra directa flotantes turbo. Caja selectora de velocidades.',
    imagen: 'https://www.gherardi.com.ar/wp-content/uploads/2018/01/1-1024x768.jpg',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },
  {
    id: 'be16mil',
    estado: 'nuevo',
    categoria: 'sembradora',
    marca: 'Bertini',
    nombre: '8 / 10 / 16 / 22 / 36 / 40 / 50 MIL',
    hp: null,
    tags: ['Sistema neumático', 'Soplado', 'Varios modelos'],
    descripcion: 'Sistema neumático por soplado. Grandes ventajas sobre sistemas de succión y placa plana. Modelos desde 8 MIL hasta 50 MIL.',
    imagen: 'https://www.bertini.com.ar/sitio/wp-content/uploads/2016/09/Modelo-16mil-1.jpg',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },

  /* ======================================================
     ACOPLADOS — Nuevos
     ====================================================== */
  {
    id: 'syl-tolva',
    estado: 'nuevo',
    categoria: 'acoplado',
    marca: 'SYL',
    nombre: 'Tolva Semillera Fertilizante',
    hp: null,
    tags: ['Con chimango', 'Divisorio', 'Hidráulico'],
    descripcion: 'Chasis chapa 1/4. Chimango hidráulico 5 mts. Doble visor y doble boquilla. Enganche trasero, paragolpe y soporte luces.',
    imagen: null,
    peso: 'Consultar',
    cabina: 'Chimango 5 mts',
    origen: 'Armstrong, Santa Fe',
  },
  {
    id: 'syl-silero',
    estado: 'nuevo',
    categoria: 'acoplado',
    marca: 'SYL',
    nombre: 'Tolva Silero',
    hp: null,
    tags: ['Sin chimango', 'Sin divisorio', 'Arcos y lona'],
    descripcion: 'Chasis chapa 1/4. Tolva en chapa 12. Arcos para lona y boquilla de descarga. Enganche trasero y paragolpe.',
    imagen: null,
    peso: 'Consultar',
    cabina: 'Sin chimango',
    origen: 'Armstrong, Santa Fe',
  },
  {
    id: 'belen-semilla',
    estado: 'nuevo',
    categoria: 'acoplado',
    marca: 'Belen',
    nombre: 'Acoplado Semilla y Fertilizante',
    hp: null,
    tags: ['8 / 10 / 14 / 22 TT', 'Full Trailer disponible'],
    descripcion: 'Línea completa en distintas capacidades. También: Full Trailer, acoplados playos, carro hidráulico y más.',
    imagen: null,
    peso: 'Consultar',
    cabina: '8–22 TT',
    origen: 'Argentina',
  },

  /* ======================================================
     IMPLEMENTOS — Nuevos
     ====================================================== */
  {
    id: 'pampero-rastra',
    estado: 'nuevo',
    categoria: 'implemento',
    marca: 'Pampero',
    nombre: 'Rastras',
    hp: null,
    tags: ['Varias líneas', 'Consultar modelos'],
    descripcion: 'Línea completa de rastras Pampero. Herramienta de labranza de alta confiabilidad. Consultá disponibilidad.',
    imagen: null,
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },

  /* ======================================================
     EJEMPLO: CÓMO AGREGAR UN USADO
     (borrá las líneas de comentario cuando lo uses)

  {
    id: 'usado-pauny-250',
    estado: 'usado',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Estándar',
    nombre: '250 A — Usado 2019',
    hp: '170 HP',
    tags: ['170 HP', 'Usado', '4500 hs'],
    descripcion: '4500 horas. Dos dueños. Muy buen estado. Cabina climatizada.',
    imagen: 'assets/fotos-usados/pauny250-usado.jpg',
    peso: '6.2 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },

     ====================================================== */

];
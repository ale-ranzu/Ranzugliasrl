import pauny540C from '../../imports/pauny-540C-Bravo.png';
import pauny580ie from '../../imports/pauny-580ie-Bravo.png';
import pauny710ie from '../../imports/pauny-710ie-Bravo.png';
import pauny780ie from '../../imports/pauny-780ie-Bravo.png';
import pauny250A from '../../imports/pauny-250A.png';
import pauny180A from '../../imports/pauny-pauny-180-A.png';

export interface Product {
  id: string;
  estado: 'nuevo' | 'usado';
  categoria: 'tractor-pauny' | 'tractor-gravo' | 'sembradora' | 'acoplado' | 'implemento' | 'vial';
  marca: string;
  nombre: string;
  hp?: string;
  tags: string[];
  descripcion: string;
  imagen?: string;
  peso?: string;
  cabina?: string;
  origen?: string;
}

export const CATALOG: Product[] = [
  {
    id: 'p540c',
    estado: 'nuevo',
    categoria: 'tractor-pauny',
    marca: 'Pauny · Bravo',
    nombre: '540 C Bravo',
    hp: '220 HP',
    tags: ['220 HP', 'Articulado', '4×4'],
    descripcion: 'Tractor articulado, doble tracción permanente. Cabina presurizada con aire acondicionado. Transmisión sincronizada. Ideal para gran porte.',
    imagen: pauny540C,
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
    imagen: pauny580ie,
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
    imagen: pauny710ie,
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
    imagen: pauny780ie,
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
    imagen: pauny250A,
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
    imagen: pauny180A,
    peso: '4.8 T',
    cabina: 'Cerrada c/ A.A.',
    origen: 'Las Varillas, Cba.',
  },
  {
    id: 'g504d',
    estado: 'nuevo',
    categoria: 'tractor-gravo',
    marca: 'Gravo',
    nombre: '504D',
    hp: '50 HP',
    tags: ['50 HP', 'Motor Laidong', 'Transmisión 8+2'],
    descripcion: 'Cap. carga 850 kg · Peso 1480 kg · Bomba 35 l/pm. Neumáticos estándar.',
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
    peso: '3.35 T',
    cabina: 'Cerrada',
    origen: 'China (importado)',
  },
  {
    id: 'gh600',
    estado: 'nuevo',
    categoria: 'sembradora',
    marca: 'Gherardi',
    nombre: 'Air Drill G 600',
    tags: ['Granos finos y gruesos', '41–57 líneas', '9–12,40 m'],
    descripcion: 'Siembra a chorrillo. Trenes independientes. Ancho de labor de 9 a 12,40 mts.',
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
    tags: ['35 líneas', 'Ancho 7,35 m', 'Siembra directa'],
    descripcion: '35 líneas a 21 cm. Ancho de labor 7,35 m. Alta precisión de siembra directa.',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },
  {
    id: 'syl-tolva',
    estado: 'nuevo',
    categoria: 'acoplado',
    marca: 'SYL',
    nombre: 'Tolva Semillera Fertilizante',
    tags: ['Con chimango', 'Divisorio', 'Hidráulico'],
    descripcion: 'Chasis chapa 1/4. Chimango hidráulico 5 mts. Doble visor y doble boquilla. Enganche trasero, paragolpe y soporte luces.',
    peso: 'Consultar',
    cabina: 'Chimango 5 mts',
    origen: 'Armstrong, Santa Fe',
  },
  {
    id: 'pampero-rastra',
    estado: 'nuevo',
    categoria: 'implemento',
    marca: 'Pampero',
    nombre: 'Rastras',
    tags: ['Varias líneas', 'Consultar modelos'],
    descripcion: 'Línea completa de rastras Pampero. Herramienta de labranza de alta confiabilidad. Consultá disponibilidad.',
    peso: 'Consultar',
    cabina: '—',
    origen: 'Argentina',
  },
];

export const CATEGORY_LABELS: Record<Product['categoria'], string> = {
  'tractor-pauny': 'Tractores Pauny',
  'tractor-gravo': 'Tractores Gravo',
  'sembradora': 'Sembradoras',
  'acoplado': 'Acoplados',
  'implemento': 'Implementos',
  'vial': 'Equipos Viales',
};

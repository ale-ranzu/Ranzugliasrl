import { motion, AnimatePresence } from 'motion/react';
import { DeleteIcon, Trash2, X } from 'lucide-react';
import { Product } from '../data/catalog';

interface CompareDrawerProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (product: Product) => void;
}

export function CompareDrawer({ products, isOpen, onClose, onRemove }: CompareDrawerProps) {
  if (!isOpen) return null;

  const specs = [
    { label: 'Modelo', key: 'nombre' },
    { label: 'Marca', key: 'marca' },
    { label: 'Potencia', key: 'hp' },
    { label: 'Peso', key: 'peso' },
    { label: 'Cabina', key: 'cabina' },
    { label: 'Origen', key: 'origen' },
    { label: 'Estado', key: 'estado' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full md:max-w-[80rem] max-h-[90vh] p-4 overflow-hidden rounded-t-2xl md:rounded-2xl border-2 border-zinc-950 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
            <h3 className="font-normal text-3xl tracking-tight text-zinc-950">
              Comparar Productos
            </h3>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-950 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(90vh-80px)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="p-4 text-left font-bold text-sm tracking-wider uppercase text-zinc-500 sticky left-0 bg-white z-10">
                    Característica
                  </th>
                  {products.map((product) => (
                    <th key={product.id} className="p-4 min-w-[250px]">
                      <div className="relative">
                        <button
                          onClick={() => onRemove(product)}
                          className="absolute top-1 right-8 text-red-500 flex items-center justify-center hover:text-red-600 transition-colors z-10 cursor-pointer"
                          aria-label="Remover"
                        >
                          <Trash2 className="w-6 h-6" />
                        </button>
                        <div className="font-black text-lg text-zinc-950 text-left">
                          {product.nombre}
                        </div>
                        <div className="text-xs text-zinc-500 text-left mt-1">
                          {product.marca}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr
                    key={spec.key}
                    className={index % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}
                  >
                    <td className="p-4 font-bold text-sm text-zinc-700 sticky left-0 bg-inherit z-10">
                      {spec.label}
                    </td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-sm text-zinc-600">
                        {spec.key === 'estado'
                          ? product.estado === 'nuevo' ? 'Nuevo' : 'Usado'
                          : product[spec.key as keyof Product] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 font-bold text-sm text-zinc-700 sticky left-0 bg-white z-10">
                    Descripción
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 text-sm text-zinc-600 align-top">
                      {product.descripcion}
                    </td>
                  ))}
                </tr>
                <tr className="bg-zinc-50">
                  <td className="p-4 font-bold text-sm text-zinc-700 sticky left-0 bg-zinc-50 z-10">
                    Características
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {product.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white text-zinc-600 text-xs font-semibold rounded border border-zinc-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

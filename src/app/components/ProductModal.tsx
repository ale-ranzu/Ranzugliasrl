import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";
import { Product } from "../data/catalog";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola, quiero consultar sobre el modelo ${product.nombre}`,
    );
    window.open(
      `https://wa.me/5492923431570?text=${msg}`,
      "_blank",
      "noopener",
    );
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contacto");
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const getBrandColor = (marca: string) => {
    return "bg-yellow-400";
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-4 pt-24 md:pt-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-auto border-2 border-zinc-950 shadow-2xl my-8 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-950 transition-colors z-10 cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-[1.2fr,1fr]">
            {/* Image */}
            <div
              className={`${getBrandColor(product.marca)} flex flex-col min-h-[250px]`}
            >
              <div className="flex-1 flex items-center justify-center p-4">
                {product.imagen ? (
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-full max-h-80 object-contain"
                  />
                ) : (
                  <span className="font-black text-5xl text-white">
                    {product.marca}
                  </span>
                )}
              </div>

              {/* Title below image */}
              <div className="px-6 pb-6">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-black/60 mb-1">
                  {product.marca}
                </div>
                <h2 className="text-2xl md:text-3xl text-zinc-950 leading-tight font-[Anton] font-normal">
                  {product.nombre}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col max-h-full overflow-y-auto">
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {product.descripcion}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-t border-b border-zinc-200">
                <div className="pt-6">
                  <div className="text-xs font-bold tracking-wider uppercase text-zinc-400 mb-1">
                    Potencia
                  </div>
                  <div className="font-bold text-sm text-zinc-950">
                    {product.hp || "—"}
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-xs font-bold tracking-wider uppercase text-zinc-400 mb-1">
                    Peso
                  </div>
                  <div className="font-bold text-sm text-zinc-950">
                    {product.peso || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-zinc-400 mb-1">
                    Cabina
                  </div>
                  <div className="font-bold text-sm text-zinc-950">
                    {product.cabina || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-zinc-400 mb-1">
                    Origen
                  </div>
                  <div className="font-bold text-sm text-zinc-950">
                    {product.origen || "—"}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-auto space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-yellow-400 text-zinc-950 py-4 font-semibold text-sm tracking-wider uppercase transition-all hover:bg-yellow-300 cursor-pointer"
                >
                  Pedir presupuesto
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] text-white py-4 font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#20ba57] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
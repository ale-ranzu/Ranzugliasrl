import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import {
  Check,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Clock,
} from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    nombre: "",
    tel: "",
    email: "",
    localidad: "",
    tipo: "",
    mensaje: "",
    financiamiento: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setIsSuccess(true);
      toast.success("¡Consulta enviada con éxito!");
    } catch {
      toast.error("No se pudo enviar. Intentá de nuevo o escribinos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSuccess(false);
      setFormState({
        nombre: "",
        tel: "",
        email: "",
        localidad: "",
        tipo: "",
        mensaje: "",
        financiamiento: false,
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp",
      value: "2923 43 1570",
      link: "https://wa.me/5492923431570",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Dirección",
      value: "Repuestos: Av. 25 de Mayo 1541 · Coronel Pringles · Buenos Aires",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horario",
      value: "Lun–Vie 8 a 12h / 15:30 a 19:30h · Sáb 8 a 12h",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "humbertoranzugliasrl@gmail.com",
      link: "mailto:humbertoranzugliasrl@gmail.com",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@humbertoranzugliasrl",
      link: "https://www.instagram.com/humbertoranzugliasrl",
    },
  ];

  return (
    <section id="contacto" className="bg-yellow-400 py-20">
      <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-zinc-950/40" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-950/50">
                Hablemos
              </span>
            </div>

            <h2 className="font-normal text-5xl md:text-6xl lg:text-7xl  text-zinc-950 mb-6 leading-none">
              Pedí tu presupuesto
            </h2>

            <p className="text-lg text-zinc-950/80 mb-10 leading-relaxed max-w-md">
             Te respondemos por WhatsApp en el día o te esperamos en nuestro local para asesorarte personalmente.
            </p>

            {/* Contact Info */}
            <div className="space-y-0">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-[100px,1fr] items-baseline gap-4 py-3 border-b border-zinc-950/10"
                >
                  <div className="flex items-center gap-2 text-sm font-black tracking-wider uppercase text-zinc-950/50">
                    {info.icon}
                    {info.label}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-semibold text-base text-zinc-950 hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-base text-zinc-950">
                      {info.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white p-8"
                >
                  <h3 className="font-normal text-2xl text-zinc-950 mb-6">
                    Cotizá tu maquinaria
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={formState.nombre}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            nombre: e.target.value,
                          })
                        }
                        placeholder="Juan Pérez"
                        required
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm bg-white text-zinc-950 placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="tel"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="tel"
                        type="tel"
                        value={formState.tel}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            tel: e.target.value,
                          })
                        }
                        placeholder="2923 43 1570"
                        required
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm bg-white text-zinc-950 placeholder:text-zinc-400"
                      />
                      <p className="text-xs text-zinc-400 mt-1">
                        Te respondemos por WhatsApp.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="tipo"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Tipo de maquinaria
                      </label>
                      <select
                        id="tipo"
                        value={formState.tipo}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            tipo: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm bg-white text-zinc-950 font-medium"
                        style={{
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition:
                            "right 12px center",
                          paddingRight: "36px",
                        }}
                      >
                        <option
                          value=""
                          className="text-zinc-400"
                        >
                          — Seleccioná una categoría —
                        </option>
                        <option
                          value="tractor-pauny"
                          className="text-zinc-950 font-medium"
                        >
                          Tractores Pauny
                        </option>
                        <option
                          value="tractor-gravo"
                          className="text-zinc-950 font-medium"
                        >
                          Tractores Gravo
                        </option>
                        <option
                          value="sembradora"
                          className="text-zinc-950 font-medium"
                        >
                          Sembradoras
                        </option>
                        <option
                          value="acoplado"
                          className="text-zinc-950 font-medium"
                        >
                          Acoplados
                        </option>
                        <option
                          value="implemento"
                          className="text-zinc-950 font-medium"
                        >
                          Implementos
                        </option>
                        <option
                          value="usado"
                          className="text-zinc-950 font-medium"
                        >
                          Maquinaria usada
                        </option>
                        <option
                          value="repuesto"
                          className="text-zinc-950 font-medium"
                        >
                          Repuestos
                        </option>
                        <option
                          value="otro"
                          className="text-zinc-950 font-medium"
                        >
                          Otro / consultar
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Email (opcional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formState.email || ""}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm bg-white text-zinc-950 placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="localidad"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Localidad (opcional)
                      </label>
                      <input
                        id="localidad"
                        type="text"
                        value={formState.localidad || ""}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            localidad: e.target.value,
                          })
                        }
                        placeholder="Ej: Coronel Pringles"
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm bg-white text-zinc-950 placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-xs font-bold tracking-wider uppercase text-zinc-950 mb-2"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        value={formState.mensaje}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            mensaje: e.target.value,
                          })
                        }
                        placeholder="Contanos el uso que le vas a dar, tamaño del campo, etc."
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-zinc-950 focus:border-zinc-950 focus:ring-4 focus:ring-yellow-400/50 outline-none transition-all text-sm resize-vertical bg-white text-zinc-950 placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formState.financiamiento}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              financiamiento: e.target.checked,
                            })
                          }
                          className="w-5 h-5 accent-zinc-950"
                        />
                        <span className="text-sm text-zinc-600">
                          Quiero información sobre
                          financiamiento
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 cursor-pointer text-zinc-950 py-4 font-semibold text-sm tracking-wider uppercase transition-all hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Enviando..."
                        : "Enviar consulta"}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl p-12 shadow-[8px_8px_0_0_rgba(10,10,10,0.5)] border-2 border-zinc-950 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2,
                    }}
                    className="w-16 h-16 rounded-full bg-yellow-400 border-2 border-zinc-950 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-8 h-8 text-zinc-950" />
                  </motion.div>
                  <h3 className="font-normal text-3xl text-zinc-950 mb-3">
                    ¡Consulta enviada!
                  </h3>
                  <p className="text-zinc-600 mb-6">
                    Te respondemos en breve por WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-transparent border-2 border-zinc-950 text-zinc-950 px-6 py-3 font-semibold text-sm hover:bg-zinc-950 hover:text-white transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
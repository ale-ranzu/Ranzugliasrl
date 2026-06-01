import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Calculator } from "lucide-react";
import logoNacion from "../../imports/bancos/Banco_Naci_n.svg?url";
import logoProvincia from "../../imports/bancos/Banco_Provincia__Bs.As.__2021_.svg?url";
import logoPampa from "../../imports/bancos/banco_pampa.svg?url";
import logoGalicia from "../../imports/bancos/Logo_Banco_Galicia.svg?url";
import logoMacro from "../../imports/bancos/Logo_Banco_Macro.svg?url";
import logoBice from "../../imports/bancos/Bice-logo.svg?url";
import logoPauny from "../../imports/pauny/pauny_logo_negativo.svg?url";

const financingOptions = [
  {
    desc: "Plan oficial de financiamiento del fabricante. Condiciones preferenciales para tractores nuevos de la línea Pauny.",
    featured: true,
    logo: logoPauny,
    href: "https://www.pauny.com.ar/ar/plan_rino/",
  },
  {
    desc: "Créditos para el agro del BNA. Tasas bonificadas para productores agropecuarios.",
    logo: logoNacion,
    href: "https://www.bna.com.ar/Empresas/AgroNegocios/Creditos",
  },
  {
    desc: "Línea de crédito para maquinaria agrícola. Financiamiento a medida del productor bonaerense.",
    logo: logoProvincia,
    href: "https://www.bancoprovincia.com.ar/agro/agro_capitaltrabajo",
  },
  {
    desc: "Créditos prendarios y líneas agro. Cuotas fijas en pesos o dólares.",
    logo: logoMacro,
    href: "https://www.macro.com.ar/agro/financiaciones/credito-al-instante",
  },
  {
    desc: "Línea de crédito para maquinaria y equipamiento agrícola.",
    logo: logoGalicia,
    href: "https://www.galicia.ar/empresas/financiaciones/compra-insumos-agro",
  },
  {
    desc: "Financiamiento regional para productores del sudoeste bonaerense. Cercanía y conocimiento del campo.",
    logo: logoPampa,
    href: "https://www.bancodelapampa.com.ar/agro",
  },
  {
    desc: "Banco de Inversión y Comercio Exterior. Líneas especiales para inversión en maquinaria.",
    logo: logoBice,
    href: "https://www.bice.com.ar/productos/inversion/creditosagro2026/",
  },
];

export function Financing() {
  const [amount, setAmount] = useState(50000000);
  const [months, setMonths] = useState(36);
  const [rate, setRate] = useState(30);

  const monthlyPayment =
    (amount * (rate / 100 / 12)) /
    (1 - Math.pow(1 + rate / 100 / 12, -months));
  const totalAmount = monthlyPayment * months;
  const totalInterest = totalAmount - amount;

  return (
    <section
      id="financiamiento"
      className="bg-zinc-900 py-20 border-y border-white/5"
    >
      <div className="w-full lg:max-w-[1024px]   xl:max-w-[1280px]  2xl:max-w-[1536px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-yellow-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-400">
              Financiamiento
            </span>
            <div className="h-0.5 w-8 bg-yellow-400" />
          </div>
          <h2 className="font-normal text-4xl md:text-5xl text-white mb-4">
            OPCIONES DE PAGO Y CRÉDITO
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Facilitamos el acceso a tu maquinaria con múltiples
            alternativas de financiamiento.
          </p>
        </div>

        {/* Financing Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {financingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`
                bg-white/5 border rounded-lg p-7 transition-all hover:bg-white/10 hover:border-yellow-400/40
                ${option.featured ? "border-yellow-400/50 bg-yellow-400/10" : "border-white/10"}
              `}
            >
              <div className="mb-4 h-8 flex items-center">
                <img
                  src={option.logo}
                  alt=""
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-white/60 leading-relaxed mb-4 text-[16px]">
                {option.desc}
              </p>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Más información →
              </a>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5 }}
            className="bg-yellow-400 text-zinc-950 rounded-lg p-7 flex flex-col justify-center items-start"
          >
            <h3 className="font-normal text-2xl mb-3">
              ¿No sabés cuál te conviene?
            </h3>
            <p className="mb-6 leading-relaxed opacity-80 text-[16px]">
              Te asesoramos sin compromiso. Analizamos tu
              situación y te recomendamos la mejor opción.
            </p>
            <a
              href="https://wa.me/5492923431570?text=Hola%2C%20quiero%20consultar%20opciones%20de%20financiamiento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 text-white px-6 py-3 font-semibold text-sm hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Hablar con un asesor
            </a>
          </motion.div>
        </div>

        {/* Calculator */}
        <div
          className="bg-zinc-950 border border-yellow-400/30 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-normal text-2xl text-white">
              Calculadora estimada de Cuotas
            </h3>
            <Calculator className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Monto a financiar
                </label>
                <input
                  type="range"
                  min="5000000"
                  max="500000000"
                  step="5000000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="text-3xl font-black text-yellow-400 mt-2">
                  ${amount.toLocaleString("es-AR")}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Plazo (meses)
                </label>
                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="text-3xl font-black text-yellow-400 mt-2">
                  {months} meses
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Tasa anual estimada (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="text-3xl font-black text-yellow-400 mt-2">
                  {rate}%
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white/5 rounded-lg p-6 flex flex-col justify-center space-y-4">
              <div className="text-center pb-4 border-b border-white/10">
                <div className="text-sm text-white/60 mb-1">
                  Cuota mensual estimada
                </div>
                <div className="text-4xl font-black text-yellow-400">
                  ${Math.round(monthlyPayment).toLocaleString("es-AR")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xs text-white/40 mb-1">
                    Total a pagar
                  </div>
                  <div className="text-xl font-bold text-white">
                    ${Math.round(totalAmount).toLocaleString("es-AR")}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">
                    Interés total
                  </div>
                  <div className="text-xl font-bold text-white">
                    ${Math.round(totalInterest).toLocaleString("es-AR")}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/60 text-center pt-4 border-t border-white/10">
                * Valores estimados. Consultá condiciones reales con un
                asesor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
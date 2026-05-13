import { motion } from "motion/react";
import paunyLogo from "../../imports/pauny.png";
import gherardiLogo from "../../imports/gherardi.png";
import bertiniLogo from "../../imports/bertini.png";
import pamperoLogo from "../../imports/pampero.png";
import belenLogo from "../../imports/belen.png";
import demsLogo from "../../imports/dems.png";
import fametLogo from "../../imports/famet.jpg";

const brands = [
  { name: "Pauny", image: paunyLogo, featured: true },
  { name: "GRAVO", text: true },
  { name: "Gherardi", image: gherardiLogo },
  { name: "Bertini", image: bertiniLogo },
  { name: "Pampero", image: pamperoLogo },
  { name: "Belen", image: belenLogo },
  { name: "Dems", image: demsLogo },
  { name: "Famet", image: fametLogo },
  { name: "SYL", text: true },
];

export function Brands() {
  return (
    <section id="marcas" className="bg-yellow-400 py-16">
      <div className="w-full lg:max-w-[1024px]   xl:max-w-[1280px]  2xl:max-w-[1536px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-zinc-700" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-700">
                Marcas que distribuimos
              </span>
            </div>
            <h2 className="font-normal text-4xl md:text-5xl text-zinc-950">
              RESPALDO DE LAS MEJORES MARCAS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className={`
                bg-white border rounded-lg h-20 flex items-center justify-center p-3
                transition-all hover:border-zinc-950 hover:-translate-y-1 hover:shadow-lg
                ${brand.featured ? "border-yellow-400 border" : "border-zinc-200"}
              `}
            >
              {brand.text ? (
                <span className="font-black text-xl text-zinc-950">
                  {brand.name}
                </span>
              ) : brand.image ? (
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="font-bold text-sm text-zinc-700">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
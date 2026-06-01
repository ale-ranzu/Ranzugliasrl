import paunyLogo from "../../imports/pauny/pauny.png";
import gherardiLogo from "../../imports/marcas/gherardi.png";
import bertiniLogo from "../../imports/marcas/bertini.png";
import pamperoLogo from "../../imports/marcas/pampero.png";
import belenLogo from "../../imports/marcas/belen.png";
import demsLogo from "../../imports/marcas/dems.png";
import fametLogo from "../../imports/marcas/famet.jpg";
import tecnocarLogo from "../../imports/marcas/tecnocar.png";
import distrimaqLogo from "../../imports/marcas/distrimaq.webp";
import ytoLogo from "../../imports/marcas/yto.png";

interface Brand {
  name: string;
  image?: string;
  text?: boolean;
  href?: string;
}

const brands: Brand[] = [
  { name: "Pauny",     image: paunyLogo,     href: "https://www.pauny.com.ar" },
  { name: "GRAVO",     text: true },
  { name: "Gherardi",  image: gherardiLogo,  href: "https://www.gherardi.com.ar" },
  { name: "Bertini",   image: bertiniLogo,   href: "https://www.bertini.com.ar" },
  { name: "Pampero",   image: pamperoLogo,   href: "https://mpampero.com.ar" },
  { name: "Belén",     image: belenLogo },
  { name: "Dems",      image: demsLogo },
  { name: "Famet",     image: fametLogo },
  { name: "SYL",       text: true },
  { name: "Tecnocar",  image: tecnocarLogo,  href: "https://tecnocar.com.ar" },
  { name: "Distrimaq", image: distrimaqLogo, href: "https://distrimaqweb.com.ar" },
  { name: "YTO",       image: ytoLogo,       href: "https://ytocorp.com" },
];

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg h-20 w-28 lg:w-36 flex items-center justify-center p-3 transition-all hover:border-zinc-950 hover:-translate-y-1 hover:shadow-lg select-none">
      {brand.text ? (
        <span className="font-black text-xl text-zinc-950">{brand.name}</span>
      ) : brand.image ? (
        <img
          src={brand.image}
          alt={brand.name}
          className="max-w-full max-h-full object-contain"
          draggable={false}
        />
      ) : (
        <span className="font-bold text-sm text-zinc-700">{brand.name}</span>
      )}
    </div>
  );
}

export function Brands() {
  return (
    <section id="marcas" className="bg-yellow-400 py-16">
      <style>{`
        @keyframes brand-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brand-marquee {
          animation: brand-marquee 40s linear infinite;
          will-change: transform;
        }
        .brand-marquee-wrapper:hover .brand-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-6 mb-10">
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

      {/* Carousel */}
      <div className="relative overflow-hidden brand-marquee-wrapper py-4">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-yellow-400 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-yellow-400 to-transparent z-10" />

        {/* Track — duplicated for seamless loop */}
        <div className="brand-marquee flex">
          {[...brands, ...brands].map((brand, i) => {
            const wrapper = "px-1.5 flex-shrink-0";
            return brand.href ? (
              <a
                key={i}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Sitio oficial de ${brand.name}`}
                className={wrapper}
                aria-hidden={i >= brands.length ? true : undefined}
              >
                <BrandCard brand={brand} />
              </a>
            ) : (
              <div
                key={i}
                className={wrapper}
                aria-hidden={i >= brands.length ? true : undefined}
              >
                <BrandCard brand={brand} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

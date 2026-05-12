import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoHR from "../../imports/logo-HR.png";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "catalogo", label: "Catálogo" },
  { id: "financiamiento", label: "Financiamiento" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.el &&
          section.el.offsetTop <= scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/5"
          : "bg-zinc-950/80 backdrop-blur-md"
      }`}
    >
      {/* Main Navigation */}
      <div className="w-full max-w-[1800px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 relative z-10 px-4 py-2 -ml-4 cursor-pointer"
          >
            <img
              src={logoHR}
              alt="Humberto Ranzuglia"
              className="h-16 w-auto"
            />
            <div className="text-left">
              <div className="font-bold text-md tracking-wider text-white text-[20px] font-[Anton]">
                HUMBERTO RANZUGLIA S.R.L.
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold tracking-wider uppercase transition-colors relative cursor-pointer ${
                  activeSection === item.id
                    ? "text-yellow-400"
                    : "text-white/70 hover:text-yellow-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-zinc-950"
          >
            <div className="w-full max-w-[1800px] mx-auto px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 text-sm font-bold tracking-wider uppercase transition-colors border-b border-white/5 cursor-pointer ${
                    activeSection === item.id
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-white/70 hover:text-yellow-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
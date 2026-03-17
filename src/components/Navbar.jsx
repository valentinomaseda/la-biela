import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú y navegar: primero cerramos, luego dejamos que el browser haga el scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    // Pequeño delay para que la animación de cierre no interrumpa el scroll
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 180);
  };

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-30 transition-all duration-500 ${
          scrolled
            ? "bg-bone/95 shadow-sm backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className={`max-w-6xl mx-auto flex items-center justify-between px-4 ${scrolled ? "py-1" : "py-2"} transition-all duration-500`}>
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => handleNavClick(e, "body")}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full transition-all duration-500 ${scrolled ? "h-9 w-9 min-w-[2.25rem] min-h-[2.25rem]" : "h-16 w-16 min-w-[4rem] min-h-[4rem]"}`}
            >
              <img
                src="/logo.jpg"
                alt="La Biela Logo"
                className={`object-contain rounded-full transition-all duration-500 ${scrolled ? "h-9 w-9" : "h-16 w-16"}`}
              />
            </span>
            <span className={`font-serif block italic text-2xl md:text-3xl tracking-tight group-hover:text-gold transition-colors duration-200 ${scrolled ? "text-oxford" : "text-bone"}`}>
              La Biela
            </span>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#menu" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Menú</a>
            <a href="#historia" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Historia</a>
            <a href="#ubicacion" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Ubicación</a>
            <button className={`ml-6 px-5 py-2 border rounded-full font-serif text-base font-medium transition bg-transparent tracking-tight ${scrolled ? "border-oxford text-oxford font-bold hover:text-gold hover:border-gold" : "border-bone text-bone hover:text-gold hover:border-gold"}`}>
              Reservar Mesa
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className={`p-1 transition-colors duration-200 ${scrolled ? "text-oxford" : "text-bone"}`}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {/* Animación hamburguesa → X */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round" strokeLinejoin="round"
                  animate={mobileOpen ? { d: "M6 6L18 18" } : { d: "M4 6h16" }}
                  transition={{ duration: 0.22 }}
                />
                <motion.path
                  strokeLinecap="round" strokeLinejoin="round"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1, d: "M4 12h16" }}
                  transition={{ duration: 0.15 }}
                />
                <motion.path
                  strokeLinecap="round" strokeLinejoin="round"
                  animate={mobileOpen ? { d: "M6 18L18 6" } : { d: "M4 18h16" }}
                  transition={{ duration: 0.22 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — fuera del <nav> para evitar z-index stacking context */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-oxford/95 backdrop-blur-sm flex flex-col items-center justify-center"
            // Cerrar al clickear el fondo
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              className="flex flex-col gap-8 text-bone text-2xl font-bold w-full items-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.28, delay: 0.05, ease: "easeOut" }}
              // Evitar que el click en los links cierre via el overlay
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo pequeño dentro del menú */}
              <div className="flex items-center gap-2 mb-4 opacity-60">
                <img src="/logo.jpg" alt="" className="h-8 w-8 rounded-full object-contain" />
                <span className="font-serif italic text-lg text-bone/70">La Biela</span>
              </div>

              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, "#menu")}
                className="hover:text-gold transition-colors duration-200 tracking-wide"
              >
                Menú
              </a>
              <a
                href="#historia"
                onClick={(e) => handleNavClick(e, "#historia")}
                className="hover:text-gold transition-colors duration-200 tracking-wide"
              >
                Historia
              </a>
              <a
                href="#ubicacion"
                onClick={(e) => handleNavClick(e, "#ubicacion")}
                className="hover:text-gold transition-colors duration-200 tracking-wide"
              >
                Ubicación
              </a>

              <button
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 border rounded-full font-serif text-lg border-gold text-gold hover:bg-gold hover:text-oxford transition-all duration-300 bg-transparent"
              >
                Reservar Mesa
              </button>

              {/* Botón cerrar explícito */}
              <button
                className="absolute top-6 right-6 text-bone/50 hover:text-gold transition-colors duration-200"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6L18 18M6 18L18 6" />
                </svg>
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
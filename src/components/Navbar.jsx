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

  // Cerrar menú mobile al navegar
  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-500 ${
        scrolled
          ? "bg-bone/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between px-4 ${scrolled ? "py-1" : "py-2"} transition-all duration-500`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <span
            className={`inline-flex items-center justify-center rounded-full transition-all duration-500 ${scrolled ? "h-9 w-9 min-w-[2.25rem] min-h-[2.25rem]" : "h-16 w-16 min-w-[4rem] min-h-[4rem]"}`}
          >
            <img
              src="/logo.jpg"
              alt="La Biela Logo"
              className={`object-contain rounded-full transition-all duration-500 ${scrolled ? "h-9 w-9" : "h-16 w-16"}`}
            />
          </span>
          <span className={`font-serif block italic text-2xl md:text-3xl tracking-tight group-hover:text-gold transition-colors duration-200 ${scrolled ? "text-oxford" : "text-bone"}`}>La Biela</span>
        </a>
        {/* Links desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#menu" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Menú</a>
          <a href="#historia" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Historia</a>
          <a href="#ubicacion" className={`transition font-sans tracking-wide ${scrolled ? "text-oxford hover:text-gold" : "text-bone hover:text-gold"}`}>Ubicación</a>
          <button className={`ml-6 px-5 py-2 border rounded-full font-serif text-base font-medium transition bg-transparent tracking-tight ${scrolled ? "border-oxford text-oxford font-bold hover:text-gold hover:border-gold" : "border-bone text-bone hover:text-gold hover:border-gold"}`}>Reservar Mesa</button>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className={scrolled ? "text-oxford" : "text-bone"}
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay con animación */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-oxford/90 backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
            onClick={handleNavClick}
          >
            <nav className="flex flex-col gap-8 text-bone text-2xl font-bold w-full items-center relative" onClick={e => e.stopPropagation()}>
              <a href="#menu" onClick={handleNavClick} className="hover:text-gold transition">Menú</a>
              <a href="#historia" onClick={handleNavClick} className="hover:text-gold transition">Historia</a>
              <a href="#ubicacion" onClick={handleNavClick} className="hover:text-gold transition">Ubicación</a>
              <button onClick={handleNavClick} className="mt-6 px-8 py-3 border rounded-full font-serif text-lg border-gold text-gold hover:bg-gold hover:text-oxford transition bg-transparent">Reservar Mesa</button>
              <button className="absolute top-6 right-6 text-bone/70 hover:text-gold text-3xl" aria-label="Cerrar menú" onClick={handleNavClick}>&times;</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

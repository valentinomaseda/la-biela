import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-30 transition-all duration-300 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-bone flex items-center justify-center bg-oxford">
            <span className="text-bone font-serif text-xl">LB</span>
          </div>
          <span className="font-serif text-lg tracking-wide text-bone">La Biela</span>
        </div>
        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#menu" className="text-bone hover:text-gold transition font-medium">Menú</a>
          <a href="#historia" className="text-bone hover:text-gold transition font-medium">Historia</a>
          <a href="#ubicacion" className="text-bone hover:text-gold transition font-medium">Ubicación</a>
          <button className="ml-6 px-5 py-2 border border-bone rounded-full text-bone hover:text-gold hover:border-gold transition font-serif text-base bg-transparent">Reservar Mesa</button>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-bone">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

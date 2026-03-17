import React from "react";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-oxford border-t border-bone/10 pt-20 pb-10 mt-20 relative overflow-hidden text-bone">
    {/* Textura de fondo (asumiendo que tienes la clase grainy-overlay en tu CSS) */}
    <div className="absolute inset-0 grainy-overlay opacity-50 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
      
      {/* Columna 1: Marca y Leyenda (Ocupa 4 de 12 columnas) */}
      <div className="flex flex-col gap-6 md:col-span-4">
        <a href="#" className="flex items-center gap-4 group" aria-label="Ir al inicio">
          <img
            src="/logo.jpg"
            alt="La Biela Logo"
            className="h-20 w-20 object-cover rounded-full border border-gold/40 shadow-lg transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-serif text-3xl tracking-tight text-bone group-hover:text-gold transition-colors duration-300">La Biela</span>
        </a>
        <p className="text-bone/70 text-sm font-light leading-relaxed max-w-sm">
          El punto de encuentro más distinguido de Arrecifes. Sabores auténticos, coctelería de autor y tradición ininterrumpida desde 1979.
        </p>
      </div>

      {/* Columna 2: Contacto y Ubicación (Ocupa 5 de 12 columnas) */}
      <div className="flex flex-col gap-5 md:col-span-5 md:pl-8 md:border-l border-bone/10 pt-8 md:pt-0">
        <h3 className="font-serif text-lg text-gold tracking-wide">Contacto & Ubicación</h3>
        <ul className="flex flex-col gap-5 text-sm font-light text-bone/80">
          <li className="flex items-start gap-4 group">
            <MapPin className="w-5 h-5 text-gold/70 mt-0.5 group-hover:text-gold transition-colors duration-300 flex-shrink-0" strokeWidth={1.5} />
            <span className="leading-relaxed">
              Ruta Nacional 8,<br />
              B2740 Arrecifes, Provincia de Buenos Aires
            </span>
          </li>
          <li className="flex items-center gap-4 group">
            <Phone className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300 flex-shrink-0" strokeWidth={1.5} />
            <span className="tracking-wider">02478 46-3585</span>
          </li>
          <li className="flex items-start gap-4 group">
            <Clock className="w-5 h-5 text-gold/70 mt-0.5 group-hover:text-gold transition-colors duration-300 flex-shrink-0" strokeWidth={1.5} />
            <span className="leading-relaxed">
              Lun a Sáb: 11:30 a 15:00 / 19:30 a 01:00<br/>
              Dom: 12:00 a 15:00
            </span>
          </li>
        </ul>
      </div>

      {/* Columna 3: Redes Sociales (Ocupa 3 de 12 columnas) */}
      <div className="flex flex-col gap-5 md:col-span-3 md:items-end pt-8 md:pt-0">
        <h3 className="font-serif text-lg text-gold tracking-wide md:text-right">Conectemos</h3>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="p-3 rounded-full border border-bone/20 text-bone/80 hover:text-oxford hover:bg-gold hover:border-gold transition-all duration-300" 
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-bone/20 text-bone/80 hover:text-oxford hover:bg-gold hover:border-gold transition-all duration-300" 
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

    </div>

    {/* Sub-footer: Copyright */}
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
      <p className="text-xs text-bone/40 tracking-[0.15em] font-light uppercase text-center md:text-left">
        © {new Date().getFullYear()} La Biela. Todos los derechos reservados.
      </p>
      <p className="text-xs text-bone/40 tracking-[0.15em] font-light uppercase text-center md:text-right">
        Diseñado en Arrecifes
      </p>
    </div>
  </footer>
);

export default Footer;
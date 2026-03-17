import React from "react";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-oxford border-t border-bone/10 pt-14 pb-8 mt-16 relative overflow-hidden text-bone">
    <div className="absolute inset-0 grainy-overlay" />
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
      {/* Logo y leyenda */}
      <div className="flex flex-col gap-3 md:col-span-1">
        <div className="flex items-center gap-2 mb-2">
          <img src="/logo.jpg" alt="La Biela Logo" className="h-8 w-auto max-w-[36px] object-contain rounded-full border border-bone" />
          <span className="font-serif text-xl tracking-tight font-bold">La Biela</span>
        </div>
        <div className="text-bone/80 text-base font-serif italic tracking-tight">Desde 1979 - Arrecifes</div>
      </div>
      {/* Información */}
      <div className="flex flex-col gap-2 text-sm md:col-span-2">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-gold" />
          <span>RN8, Arrecifes, Buenos Aires</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <Phone className="w-4 h-4 text-gold" />
          <span>02478 46-3585</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4 text-gold" />
          <span>Lunes a Sábado: 11:30 a 15:00 y 19:30 a 01:00</span>
        </div>
      </div>
      {/* Redes sociales */}
      <div className="flex flex-col gap-2 md:items-end md:col-span-1">
        <span className="font-serif text-base mb-2">Seguinos</span>
        <div className="flex gap-4">
          <a href="#" className="text-bone hover:text-gold transition" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-bone hover:text-gold transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-bone/10 mt-8 pt-4 text-center text-xs text-bone/50 relative z-10">
      © {new Date().getFullYear()} La Biela. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;

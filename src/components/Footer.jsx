import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-oxford border-t border-bone/10 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-bone flex items-center justify-center bg-oxford">
          <span className="text-bone font-serif text-lg">LB</span>
        </div>
        <span className="font-serif text-base tracking-wide text-bone">La Biela</span>
      </div>
      {/* Socials */}
      <div className="flex gap-4">
        <a href="#" className="text-bone hover:text-gold transition" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="text-bone hover:text-gold transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
      </div>
      {/* Legend */}
      <div className="text-bone/70 text-sm font-light">Desde 1979 - Arrecifes</div>
    </div>
  </footer>
);

export default Footer;

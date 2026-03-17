import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const InfoMap = () => (
  <section id="ubicacion" className="py-20 bone-radial relative overflow-hidden">
    <div className="absolute inset-0 grainy-overlay-bone" />
    <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-stretch relative z-10">

      {/* Mapa */}
      <div className="flex-1 rounded-3xl overflow-hidden border border-bone-dark/40 min-h-[320px] relative z-0">
        <iframe
          src="https://www.google.com/maps?q=-34.05976190140332,-60.09528838865676&z=15&output=embed"
          width="100%"
          height="100%"
          className="map-overlay min-h-[320px]"
          style={{ border: 0, minHeight: 320 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa La Biela"
        />
      </div>

      {/* Info Card */}
      <motion.div
        className="flex-1 bg-white floating-card border border-bone-dark/40 pill-card p-10 flex flex-col justify-center -mt-16 md:-ml-16 md:mt-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl text-oxford mb-6 tracking-tight font-bold">Horarios & Contacto</h2>

        <div className="flex items-center gap-3 mb-4 text-oxford/90 group cursor-default">
          <Clock className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" />
          <span className="font-sans tracking-wide leading-relaxed">Lunes a Sábado: 11:30 a 15:00 y 19:30 a 01:00</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-oxford/90 group cursor-default">
          <Phone className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-125 flex-shrink-0" />
          <span className="font-sans tracking-wide leading-relaxed">02478 46-3585</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-oxford/90 group cursor-default">
          <MapPin className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-0.5 flex-shrink-0" />
          <span className="font-sans tracking-wide leading-relaxed">RN8, Arrecifes, Buenos Aires</span>
        </div>

        <a
          href="https://maps.google.com/?q=La+Biela+Arrecifes+Buenos+Aires"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold rounded-full font-sans text-sm font-semibold hover:bg-gold hover:text-oxford transition-all duration-300 bg-transparent self-start tracking-wide"
        >
          <MapPin className="w-4 h-4" />
          Cómo llegar
        </a>
      </motion.div>
    </div>
  </section>
);

export default InfoMap;
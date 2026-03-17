import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const InfoMap = () => (
  <section id="ubicacion" className="py-20 bg-bone relative overflow-hidden">
    <div className="absolute inset-0 grainy-overlay" />
    <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-stretch relative z-10">
      {/* Map */}
      <div className="flex-1 rounded-3xl overflow-hidden border border-bone/30 min-h-[320px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.658253818956!2d-60.111623!3d-34.062013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb9772c9162983%3A0xc3f9829f0460336b!2sLa%20Biela!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          className="map-overlay min-h-[320px]"
          style={{ border: 0, minHeight: 320 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa La Biela"
        ></iframe>
      </div>
      {/* Info Card flotante */}
      <motion.div
        className="flex-1 bg-white floating-card border border-bone/40 pill-card p-10 flex flex-col justify-center -mt-16 md:-ml-16 md:mt-0 shadow-2xl/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl text-oxford mb-6 tracking-tight font-bold">Horarios & Contacto</h2>
        <div className="flex items-center gap-3 mb-4 text-oxford/90">
          <Clock className="w-5 h-5 text-gold" />
          <span className="font-sans tracking-wide leading-relaxed">Lunes a Sábado: 11:30 a 15:00 y 19:30 a 01:00</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-oxford/90">
          <Phone className="w-5 h-5 text-gold" />
          <span className="font-sans tracking-wide leading-relaxed">02478 46-3585</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-oxford/90">
          <MapPin className="w-5 h-5 text-gold" />
          <span className="font-sans tracking-wide leading-relaxed">RN8, Arrecifes, Buenos Aires</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InfoMap;

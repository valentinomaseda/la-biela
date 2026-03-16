import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const InfoMap = () => (
  <section id="ubicacion" className="py-20 bg-oxford">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-stretch">
      {/* Info */}
      <div className="flex-1 bg-oxford border border-bone/20 rounded-xl p-8 flex flex-col justify-center mb-6 md:mb-0">
        <h2 className="font-serif text-2xl text-bone mb-6">Horarios & Contacto</h2>
        <div className="flex items-center gap-3 mb-4 text-bone/90">
          <Clock className="w-5 h-5 text-gold" />
          <span>Lunes a Sábado: 11:30 a 15:00 y 19:30 a 01:00</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-bone/90">
          <Phone className="w-5 h-5 text-gold" />
          <span>02478 46-3585</span>
        </div>
        <div className="flex items-center gap-3 mb-4 text-bone/90">
          <MapPin className="w-5 h-5 text-gold" />
          <span>RN8, Arrecifes, Buenos Aires</span>
        </div>
      </div>
      {/* Map */}
      <div className="flex-1 rounded-xl overflow-hidden border border-bone/20 min-h-[300px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.658253818956!2d-60.111623!3d-34.062013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb9772c9162983%3A0xc3f9829f0460336b!2sLa%20Biela!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar" width="100%" height="100%" style={{border:0, minHeight:300}} allowFullScreen="" loading="lazy" title="Mapa La Biela"></iframe>
      </div>
    </div>
  </section>
);

export default InfoMap;

import React from "react";
import { motion } from "framer-motion";

const History = () => (
  <section id="historia" className="py-20 bg-bone relative overflow-hidden">
    <div className="absolute inset-0 grainy-overlay" />
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-oxford mb-10 text-center tracking-tight font-extrabold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Nuestra <span className="italic">Historia</span>
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-oxford/90 font-sans font-light leading-relaxed tracking-wide text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Fundada en 1979, La Biela nació como un pequeño refugio para los amantes de la buena mesa y la calidez de Arrecifes. Con el paso de los años, el restaurante se transformó en un punto de encuentro emblemático, donde generaciones han compartido historias, celebraciones y sabores auténticos. Nuestra pasión por la excelencia y el respeto por la tradición nos impulsan a ofrecer una experiencia única, combinando recetas clásicas con un toque contemporáneo en un ambiente inigualable.
      </motion.p>
    </div>
  </section>
);

export default History;

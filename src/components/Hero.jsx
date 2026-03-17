import React from "react";
import { motion } from "framer-motion";

const heroImg = "https://images.unsplash.com/photo-1608816042754-d69cb2271bea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-oxford to-[#14212d]">
      {/* Fondo imagen con Ken Burns */}
      <motion.div
        className="absolute inset-0 w-full h-full kenburns"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.08, opacity: 1 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-oxford/90 via-oxford/40 to-transparent z-[2]" />
      <div className="grainy-overlay" />

      {/* Contenido */}
      <motion.div
        className="relative z-[3] text-center max-w-2xl mx-auto px-4 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif text-bone text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
          <span className="block italic">La Biela</span>
          <span className="block not-italic">Tradición y <span className="italic">Excelencia</span></span>
          <span className="block text-lg md:text-2xl font-normal mt-2 tracking-wide">desde 1979</span>
        </h1>
        <p className="text-xl md:text-2xl text-bone/90 mb-8 font-light leading-relaxed tracking-wide">
          El punto de encuentro más distinguido de Arrecifes. Sabores auténticos en un ambiente inigualable.
        </p>
        <button className="px-8 py-3 border border-gold font-bold text-gold rounded-full font-serif text-lg hover:bg-gold hover:text-oxford transition bg-transparent">
          Reservar Mesa
        </button>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-1 mt-14 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.querySelector("#historia")?.scrollIntoView({ behavior: "smooth" })}
          title="Seguir leyendo"
        >
          <span className="font-serif italic text-bone/70 text-xs tracking-widest uppercase">Descubrí</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from "react";
import { motion } from "framer-motion";

const heroImg = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-oxford to-[#14212d]">
      {/* Fondo imagen con Ken Burns y overlay de textura */}
      <motion.div
        className="absolute inset-0 w-full h-full kenburns"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.08, opacity: 1 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Cinematic bottom-up gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-oxford/90 via-oxford/40 to-transparent z-[2]" />
      <div className="grainy-overlay" />
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
        <p className="text-xl md:text-2xl text-bone/90 mb-8 font-light leading-relaxed tracking-wide">El punto de encuentro más distinguido de Arrecifes. Sabores auténticos en un ambiente inigualable.</p>
        <button className="px-8 py-3 border border-gold font-bold text-gold rounded-full font-serif text-lg hover:bg-gold hover:text-oxford transition bg-transparent">Reservar Mesa</button>
      </motion.div>
    </section>
  );
};

export default Hero;

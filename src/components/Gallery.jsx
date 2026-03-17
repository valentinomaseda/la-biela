import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", className: "md:row-span-2 md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80", className: "row-span-1 col-span-1" },
  { src: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80", className: "row-span-1 col-span-1" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", className: "md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80", className: "row-span-1 col-span-1" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80", className: "row-span-1 col-span-1" },
];

const Gallery = () => (
  <section id="galeria" className="py-20 bg-oxford relative overflow-hidden">
    <div className="absolute inset-0 grainy-overlay" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-bone mb-14 text-center tracking-tight font-extrabold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        El <span className="italic">Lugar</span>
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 bento-grid">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt="La Biela ambiente"
            className={`rounded-2xl object-cover w-full h-full shadow-xl border border-bone/10 transition-transform duration-300 hover:scale-105 ${img.className}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;

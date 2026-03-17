
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80" },
  { src: "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80" },
  { src: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80" },
];

const captions = [
  "El Salón Principal",
  "Momentos Compartidos",
  "Nuestra Cocina",
  "Ambiente Íntimo",
  "La Barra",
  "Platos de Autor",
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  return (
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
          Nuestro <span className="italic">Espacio</span>
        </motion.h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setLightbox({ src: img.src, caption: captions[i] })}
            >
              <motion.img
                src={img.src}
                alt="La Biela ambiente"
                className="rounded-2xl object-cover w-full h-full shadow-xl border border-bone/10 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-oxford/0 group-hover:bg-oxford/65 transition-all duration-400 flex items-end p-4">
                <span className="text-bone font-serif italic text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {captions[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <motion.img
                src={lightbox.src}
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.p
                className="text-bone/80 font-serif italic text-xl mt-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {lightbox.caption}
              </motion.p>
              <p className="text-bone/40 text-sm mt-2">Click para cerrar</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

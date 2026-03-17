import React from "react";
import { Utensils, Leaf, Martini } from "lucide-react";
import { motion } from "framer-motion";

const dishes = [
  {
    icon: <Utensils className="w-8 h-8 text-gold mb-2" />, 
    title: "Cortes Seleccionados",
    desc: "Carnes premium, cocción perfecta y sabor inigualable.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold mb-2" />,
    title: "Opciones Vegetarianas Gourmet",
    desc: "Platos creativos y frescos para todos los gustos.",
  },
  {
    icon: <Martini className="w-8 h-8 text-gold mb-2" />,
    title: "Coctelería de Autor",
    desc: "Tragos exclusivos y clásicos con un toque de distinción.",
  },
];

const Dishes = () => (
  <section id="menu" className="py-20 bg-bone relative overflow-hidden">
    <div className="absolute inset-0 grainy-overlay" />
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-oxford mb-14 text-center tracking-tight font-extrabold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Platos <span className="italic">Destacados</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            className="group bg-white pill-card shadow-2xl/5 border border-bone/40 p-8 flex flex-col items-center text-center min-h-[220px] transition-transform hover:-translate-y-1 hover:shadow-gold/10 hover:border-gold/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.15, ease: "easeOut" }}
          >
            <span className="transition-transform duration-300 group-hover:scale-110 inline-block">{dish.icon}</span>
            <h3 className="font-serif text-xl md:text-2xl text-oxford mb-2 tracking-tight font-bold">{dish.title}</h3>
            <p className="text-oxford/80 font-sans font-light leading-relaxed tracking-wide">{dish.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Dishes;

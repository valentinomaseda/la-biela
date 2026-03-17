import React from "react";
import { Utensils, Leaf, Martini } from "lucide-react";
import { motion } from "framer-motion";

const dishes = [
  {
    icon: <Utensils className="w-8 h-8 text-gold mb-2" />, 
    title: "Cortes Seleccionados",
    desc: "Carnes premium, cocción perfecta y sabor inigualable.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold mb-2" />,
    title: "Opciones Vegetarianas Gourmet",
    desc: "Platos creativos y frescos para todos los gustos.",
    img: "https://plus.unsplash.com/premium_photo-1694977744098-470b605dc819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <Martini className="w-8 h-8 text-gold mb-2" />,
    title: "Coctelería de Autor",
    desc: "Tragos exclusivos y clásicos con un toque de distinción.",
    img: "https://plus.unsplash.com/premium_photo-1694825175387-19fd6e521e94?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        transition={{ duration: 0.7, ease: "ease" }}
      >
        Platos <span className="italic">Destacados</span>
      </motion.h2>
      <div className="flex flex-col gap-10">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden bg-white pill-card border border-bone/30 min-h-[160px] flex flex-row shadow-2xl/5 transition-all duration-400 rounded-2xl"
            style={{ willChange: 'transform, box-shadow, border-color, background' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.025,
              boxShadow: '0 8px 32px 0 rgba(212,175,55,0.15), 0 2px 8px 0 rgba(26,42,58,0.10)',
              borderColor: '#D4AF37',
              background: 'linear-gradient(90deg, #fff 80%, #f5f0e8 100%)'
            }}
            transition={{
              duration: .2,
              ease: "ease"
            }}
            viewport={{ once: true }}
          >
            {/* Decorative number - mejor contraste */}
            <span className="absolute top-3 right-5 font-serif text-8xl font-extrabold text-gold/30 drop-shadow-lg select-none pointer-events-none leading-none">
              {`0${i + 1}`}
            </span>
            {/* Image left */}
            <img
              src={dish.img}
              alt={dish.title}
              className="w-1/3 h-full object-cover rounded-l-2xl min-h-[160px] max-h-[220px]"
              loading="lazy"
              style={{ minHeight: 160, maxHeight: 220 }}
            />
            {/* Content right */}
            <div className="flex-1 flex flex-col justify-center p-6">
              <span className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 inline-block mb-1 z-10 relative">{dish.icon}</span>
              <h3 className="font-serif text-xl md:text-2xl text-oxford tracking-tight font-bold">{dish.title}</h3>
              <div className="w-8 h-px bg-gold opacity-50 my-3" />
              <p className="text-oxford/80 font-sans font-light leading-relaxed tracking-wide">{dish.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://drive.google.com/drive/folders/1Qw2Qw3Qw4Qw5Qw6Qw7Qw8Qw9Qw0QwQw?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 border border-gold text-gold rounded-full font-montserrat text-lg hover:bg-gold hover:text-oxford transition-all duration-300 bg-transparent shadow-md"
        >
          <span className="font-bold">Ver la carta completa</span>
        </a>
      </div>
    </div>
  </section>
);

export default Dishes;

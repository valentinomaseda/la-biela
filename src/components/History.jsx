import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, shouldStart]);
  return count;
}

const stats = [
  { value: 45,   suffix: "+",            label: "Años de historia" },
  { value: 1979, suffix: "",              label: "Fundación en Arrecifes" },
  { value: 3,    suffix: "", label: "generaciones de clientes fieles" },
];

const timeline = [
  { year: "1979", event: "Fundación" },
  { year: "1990", event: "Primer salón" },
  { year: "2005", event: "Renovación" },
  { year: "2024", event: "Nueva carta" },
];

const StatCounter = ({ value, suffix, label, shouldStart, delay }) => {
  const count = useCountUp(value, 1600, shouldStart);
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <span className="font-serif italic text-gold text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
        {count}{suffix}
      </span>
      <div className="w-6 h-px bg-gold opacity-40 my-2" />
      <span className="font-sans text-oxford/60 text-xs tracking-widest uppercase font-light text-center">
        {label}
      </span>
    </motion.div>
  );
};

const History = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="historia" className="py-20 bone-radial relative overflow-hidden">
      <div className="absolute inset-0 grainy-overlay-bone" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">

        <motion.h2
          className="font-serif text-4xl md:text-5xl text-oxford mb-14 text-center tracking-tight font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Nuestra <span className="italic">Historia</span>
        </motion.h2>

        {/* Contadores animados */}
        <div ref={ref} className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <StatCounter
              key={i}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              shouldStart={inView}
              delay={i * 0.12}
            />
          ))}
        </div>

        {/* Timeline horizontal — desktop */}
        <motion.div
          className="relative mb-14 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-[5px] left-0 right-0 h-px bg-gold opacity-20" />
          <div className="flex justify-between items-start relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-gold/20 ring-offset-2 ring-offset-bone" />
                <span className="font-serif italic text-gold text-lg font-bold leading-none">{item.year}</span>
                <span className="font-sans text-oxford/50 text-xs tracking-wide text-center">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline vertical — mobile */}
        <motion.div
          className="md:hidden flex flex-col gap-5 mb-12 pl-5 border-l border-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {timeline.map((item, i) => (
            <div key={i} className="flex items-center gap-3 relative">
              <div className="absolute -left-[1.4rem] w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-gold/20 ring-offset-2 ring-offset-bone" />
              <span className="font-serif italic text-gold text-base font-bold">{item.year}</span>
              <span className="text-oxford/40 text-sm">·</span>
              <span className="font-sans text-oxford/60 text-sm">{item.event}</span>
            </div>
          ))}
        </motion.div>

        {/* Párrafo */}
        <motion.p
          className="text-lg md:text-xl text-oxford/80 font-sans font-light leading-relaxed tracking-wide text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Fundada en 1979, La Biela nació como un pequeño refugio para los amantes de la buena mesa y la calidez de Arrecifes. Con el paso de los años, el restaurante se transformó en un punto de encuentro emblemático, donde generaciones han compartido historias, celebraciones y sabores auténticos. Nuestra pasión por la excelencia y el respeto por la tradición nos impulsan a ofrecer una experiencia única, combinando recetas clásicas con un toque contemporáneo en un ambiente inigualable.
        </motion.p>

      </div>
    </section>
  );
};

export default History;
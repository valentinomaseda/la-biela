import React from "react";
import { Utensils, Leaf, Martini } from "lucide-react";

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
  <section id="menu" className="py-20 bg-oxford">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-12 text-center">Platos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {dishes.map((dish, i) => (
          <div key={i} className="bg-oxford border border-bone/20 rounded-xl p-8 flex flex-col items-center text-center min-h-[220px]">
            {dish.icon}
            <h3 className="font-serif text-xl text-bone mb-2">{dish.title}</h3>
            <p className="text-bone/80 font-light">{dish.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Dishes;

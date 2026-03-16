import React from "react";

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
];

const Gallery = () => (
  <section id="galeria" className="py-20 bg-oxford">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-12 text-center">El Lugar</h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="La Biela ambiente"
            className="rounded-xl w-full object-cover mb-4 shadow-none border border-bone/10"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;

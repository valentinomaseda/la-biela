import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-oxford overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply'}}>
      <div className="absolute inset-0 bg-oxford/80" />
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone mb-6 drop-shadow-lg">La Biela - Tradición y Excelencia desde 1979</h1>
        <p className="text-lg md:text-xl text-bone/90 mb-8 font-light">El punto de encuentro más distinguido de Arrecifes. Sabores auténticos en un ambiente inigualable.</p>
        <button className="px-8 py-3 border border-gold text-gold rounded-full font-serif text-lg hover:bg-gold hover:text-oxford transition bg-transparent">Reservar Mesa</button>
      </div>
    </section>
  );
};

export default Hero;

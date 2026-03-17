import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import History from "./components/History";
import Gallery from "./components/Gallery";
import InfoMap from "./components/InfoMap";
import Footer from "./components/Footer";

// bg prop para que el color del divider coincida con la sección que lo precede
const GoldDivider = ({ bg = "bone-radial" }) => (
  <div className={`flex items-center justify-center py-2 ${bg}`}>
    <div className="h-px w-10 bg-gold opacity-40" />
    <div className="mx-3 w-1.5 h-1.5 rotate-45 bg-gold opacity-40" />
    <div className="h-px w-10 bg-gold opacity-40" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-oxford text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <GoldDivider bg="bone-radial" />
        <History />
        <GoldDivider bg="bone-radial-subtle" />
        <Dishes />
        <GoldDivider bg="bg-oxford" />
        <Gallery />
        <GoldDivider bg="bone-radial" />
        <InfoMap />
      </main>
      <Footer />
    </div>
  );
}
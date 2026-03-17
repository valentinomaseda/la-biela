import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import Gallery from "./components/Gallery";
import InfoMap from "./components/InfoMap";
import Footer from "./components/Footer";

const GoldDivider = () => (
  <div className="flex items-center justify-center py-2 bg-bone">
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
        <GoldDivider />
        <Dishes />
        <GoldDivider />
        <Gallery />
        <InfoMap />
      </main>
      <Footer />
    </div>
  );
}

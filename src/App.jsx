import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import Gallery from "./components/Gallery";
import InfoMap from "./components/InfoMap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-oxford text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Dishes />
        <Gallery />
        <InfoMap />
      </main>
      <Footer />
    </div>
  );
}

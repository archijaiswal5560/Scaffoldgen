"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlowArc from "./components/GlowArc";
import AboutCLI from "./components/AboutCLI";
import LatestSection from "./components/LatestSection";
import FeatureGrid from "./components/FeatureGrid";
import Contributor from "./components/Contributor";
import GlobalUsers from "./components/GlobalUsers";
import Organizations from "./components/Organization";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading delay
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <GlowArc />
      <AboutCLI />
      <LatestSection />
      <FeatureGrid />
      <Contributor />
      <GlobalUsers />
      <Organizations />
      <FAQ />
      <Footer />
    </main>
  );
}

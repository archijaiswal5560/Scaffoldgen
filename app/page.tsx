// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlowArc from './components/GlowArc';
import AboutCLI from './components/AboutCLI';
import LatestSection from './components/LatestSection';
import FeatureGrid from './components/FeatureGrid';
import Contributor from './components/Contributor';
import GlobalUsers from './components/GlobalUsers';
import Organizations from './components/Organization';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
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
  )
}

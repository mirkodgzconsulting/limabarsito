import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { MenuSection } from "@/components/sections/MenuSection";
import { Gallery } from "@/components/sections/Gallery";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <main id="main-content" className="page-main">
        <Hero />
        <Manifesto />
        <About />
        <MenuSection />
        <Gallery />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

import React, { useEffect } from "react";
import Lenis from "lenis";
import Hero from "../Components/Hero";
import ServicesSection from "../Components/ServicesSection";
import PortfolioSection from "../Components/PortfolioSection";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import FloatingSocials from "../Components/FloatingSocials";
import Footer from "../Components/Footer";
import MenuSection from "../Components/MenuSection";
import Navbar from "../Components/Navbar";

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <MenuSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default Home;

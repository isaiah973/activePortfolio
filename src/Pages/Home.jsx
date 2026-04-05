import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Skills from "../Components/Skills";
import PortfolioSection from "../Components/PortfolioSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="about">
        <Footer />
      </section>
    </>
  );
}

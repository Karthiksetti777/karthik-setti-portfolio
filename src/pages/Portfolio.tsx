import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EnterpriseImpact from "@/components/EnterpriseImpact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("shown");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
          <About />
        </section>

        <section id="impact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-section">
          <EnterpriseImpact />
        </section>

        <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
          <Experience />
        </section>

        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-section">
          <Projects />
        </section>

        <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
          <Services />
        </section>

        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-section">
          <Skills />
        </section>

        <section id="tech" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
          <TechStack />
        </section>

        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

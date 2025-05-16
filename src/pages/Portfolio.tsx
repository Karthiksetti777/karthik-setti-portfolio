
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  // Animation on scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-section-gradient">
          <About />
        </section>
        
        <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
          <Experience />
        </section>
        
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-section-gradient">
          <Projects />
        </section>
        
        <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
          <Services />
        </section>
        
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-section-gradient">
          <Skills />
        </section>
        
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

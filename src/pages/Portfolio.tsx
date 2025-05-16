
import { useEffect } from "react";
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
        
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-[#E5DEFF]/30 dark:bg-[#0c1a36]/50">
          <About />
        </section>
        
        <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-[#D3E4FD]/40 dark:bg-security-primary/80">
          <Experience />
        </section>
        
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#FDE1D3]/30 dark:bg-[#0c1a36]/50">
          <Projects />
        </section>
        
        <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F1F0FB]/50 dark:bg-security-primary/80">
          <Services />
        </section>
        
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-[#FFDEE2]/20 dark:bg-[#0c1a36]/50">
          <Skills />
        </section>
        
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-[#E5DEFF]/30 dark:bg-security-primary/80">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

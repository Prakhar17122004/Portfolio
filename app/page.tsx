// app/page.tsx (Home)
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/Projects";
import Experience from "../components/Experience"; 
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { Certificate } from "node:crypto";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "@/components/Footer"; 
export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>


      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="certifications">
        <Certifications />
        
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

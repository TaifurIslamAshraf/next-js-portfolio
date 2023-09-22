import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taifur | Portfolio",
  description: "Taifur portfolio home page",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="text-white-100 ">
        <div className="about-section bg-black-100" id="about">
          <About />
        </div>

        <div className="skill">
          <Skills />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact" id="contact">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import BackgroundFX from "@/components/BackgroundFX";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg-base text-text-secondary">
      <BackgroundFX />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

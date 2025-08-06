import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

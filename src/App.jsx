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
    // Set the zoom level to 110% when the component mounts
    document.body.style.zoom = "100%";
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

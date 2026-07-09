import Seo from "@/components/ui/Seo";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/siteConfig";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
    "https://www.amarnathkumar.dev"
  ],
  gender: "Male",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Brainware University",
    sameAs: "https://www.brainwareuniversity.ac.in/"
  },
  knowsAbout: [
    "Full-Stack Development",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs",
    "Software Engineering",
    "Git",
    "Zustand"
  ],
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "addressCountry": "IN"
  }
};

export default function Home() {
  return (
    <>
      <Seo
        title={`${siteConfig.name} - ${siteConfig.title}`}
        description={siteConfig.description}
        path="/"
        jsonLd={personJsonLd}
      />

      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

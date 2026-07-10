import Seo from "@/components/ui/Seo";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/siteConfig";

const homeGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: siteConfig.title,
      description: siteConfig.description,
      email: siteConfig.email,
      sameAs: [
        siteConfig.github,
        siteConfig.linkedin,
        "https://www.amarnathkumar.dev",
        "https://leetlab.amarnathkumar.dev/",
        "https://authcore.amarnathkumar.dev/",
        "https://connectify.amarnathkumar.dev/"
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
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} - Portfolio`,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Seo
        title={`${siteConfig.name} - ${siteConfig.title}`}
        description={siteConfig.description}
        path="/"
        jsonLd={homeGraphJsonLd}
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

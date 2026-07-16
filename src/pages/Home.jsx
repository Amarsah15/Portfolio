import { lazy, Suspense } from "react";
import Seo from "@/components/ui/Seo";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import { siteConfig } from "@/data/siteConfig";

const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Education = lazy(() => import("@/components/sections/Education"));
const Contact = lazy(() => import("@/components/sections/Contact"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center min-h-[15vh]" aria-hidden="true">
      <div className="h-5 w-5 rounded-full border-2 border-primary/20 border-t-transparent animate-spin" />
    </div>
  );
}

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
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </>
  );
}

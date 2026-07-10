import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/motion";
import { Container, Heading, Seo } from "@/components/ui";
import ProjectCard from "@/components/project/ProjectCard";
import FeaturedProject from "@/components/project/FeaturedProject";
import { projects, getFeaturedProject, getOtherProjects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export default function Projects() {
  const featured = getFeaturedProject();
  const others = getOtherProjects();

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/projects/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": `${siteConfig.url}/projects`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Seo
        title={`Projects - ${siteConfig.name}`}
        description="Full-stack platforms, authentication systems, and REST APIs - each project includes a detailed case study."
        path="/projects"
        jsonLd={projectsJsonLd}
      />

      <section className="py-24 md:py-32">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Heading as="h1" className="mb-4">
              Projects
            </Heading>
            <motion.p variants={slideUp} className="text-muted text-base md:text-lg max-w-2xl mb-12">
              {projects.length} projects built with care. Each one pushed me to learn something new.
            </motion.p>

            <div className="mb-12">
              <FeaturedProject project={featured} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

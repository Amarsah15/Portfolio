import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { Section, SectionHeader, Button } from "@/components/ui";
import FeaturedProject from "@/components/project/FeaturedProject";
import ProjectCard from "@/components/project/ProjectCard";
import { getFeaturedProject, getOtherProjects } from "@/data/projects";

export default function Projects() {
  const featured = getFeaturedProject();
  const others = getOtherProjects();

  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        eyebrow="Selected builds"
        description="From focused experiments to complete full-stack products, every project here taught me something different about shipping software."
      />

      <div className="mb-10">
        <FeaturedProject project={featured} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {others.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <motion.div variants={slideUp} className="text-center">
        <Button to="/projects" variant="secondary" size="lg" className="premium-border">
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </Section>
  );
}

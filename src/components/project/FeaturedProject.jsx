import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { slideUp } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import ProjectMedia from "./ProjectMedia";

export default function FeaturedProject({ project }) {
  return (
    <motion.div variants={slideUp}>
      <div className="group rounded-3xl border border-border bg-surface/50 p-6 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface/70 hover:shadow-2xl hover:shadow-primary/5 premium-border overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Details Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="primary">Featured Project</Badge>
              <Badge>{project.year}</Badge>
              <Badge variant={project.status === "Active" || project.status === "Completed" ? "primary" : "default"} size="sm">
                {project.status}
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              <Link
                to={`/projects/${project.slug}`}
                className="hover:text-primary transition-colors duration-200 outline-none"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-muted text-base leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                to={`/projects/${project.slug}`}
                variant="secondary"
                size="sm"
                className="group/btn"
                aria-label={`Read case study for ${project.title}`}
              >
                Read Case Study
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Button>

              <div className="flex items-center gap-2 sm:ml-auto">
                {project.github && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.github}
                    external
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </Button>
                )}

                {project.live && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.live}
                    external
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-5 w-full min-w-0">
            <ProjectMedia project={project} priority={true} />
          </div>

        </div>

      </div>
    </motion.div>
  );
}

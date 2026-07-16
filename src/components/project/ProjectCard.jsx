import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { slideUp } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import ProjectMedia from "./ProjectMedia";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project }) {
  return (
    <motion.article variants={slideUp}>
      <div className="group rounded-2xl border border-border bg-surface/45 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-surface/70 hover:shadow-2xl hover:shadow-primary/5 premium-border flex flex-col justify-between h-full">
        <div>
          
          {/* Card Media */}
          <div className="mb-5 w-full min-w-0">
            <ProjectMedia project={project} />
          </div>

          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-black tracking-tight text-foreground transition-colors duration-200">
                <Link
                  to={`/projects/${project.slug}`}
                  className="hover:text-primary outline-none"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-xs text-muted/80 mt-0.5">{project.category}</p>
            </div>
            <Badge variant={project.status === "Active" || project.status === "Completed" ? "primary" : "default"} size="sm">
              {project.status}
            </Badge>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
            {project.tagline}
          </p>

        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 3).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.stack.length > 3 && (
              <Tag>+{project.stack.length - 3}</Tag>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/40">
            <Button
              to={`/projects/${project.slug}`}
              variant="secondary"
              size="sm"
              className="group/btn text-xs font-semibold"
              aria-label={`Read case study for ${project.title}`}
            >
              Case Study
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Button>

            {project.github && (
              <Button
                variant="secondary"
                size="sm"
                href={project.github}
                external
                aria-label={`View ${project.title} on GitHub`}
                className="!p-2 min-h-0"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}

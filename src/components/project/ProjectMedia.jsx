import { ExternalLink, MonitorPlay, FileCode2 } from "lucide-react";
import Button from "@/components/ui/Button";

/**
 * Renders real project media when available. When a project has no captured
 * screenshots (not yet taken, or an API-only project with no UI), falls back
 * to an honest placeholder — never a simulated/fabricated UI.
 */
export default function ProjectMedia({ project, className = "", priority = false }) {
  const shot = project.screenshots?.[0];

  if (shot) {
    const content = (
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover object-top aspect-[16/9] transition-transform duration-700 hover:scale-[1.035]"
      />
    );

    if (project.live) {
      return (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`block overflow-hidden rounded-2xl border border-border/60 bg-surface/40 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${className}`}
        >
          {content}
        </a>
      );
    }

    return (
      <div className={`overflow-hidden rounded-2xl border border-border/60 bg-surface/40 ${className}`}>
        {content}
      </div>
    );
  }

  const isApiOnly = Boolean(project.liveLabel);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border/70 bg-surface/30 aspect-video text-center px-6 ${className}`}
    >
      {isApiOnly ? (
        <FileCode2 className="h-7 w-7 text-muted/60" aria-hidden="true" />
      ) : (
        <MonitorPlay className="h-7 w-7 text-muted/60" aria-hidden="true" />
      )}
      <p className="text-xs text-muted/80 max-w-[220px]">
        {isApiOnly
          ? "Headless API - explore the live Swagger docs"
          : "Preview coming soon - open the live deployment"}
      </p>
      {project.live && (
        <Button href={project.live} external size="sm" variant="secondary">
          <ExternalLink className="h-3.5 w-3.5" />
          {project.liveLabel || "Open Live Demo"}
        </Button>
      )}
    </div>
  );
}

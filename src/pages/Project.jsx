import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  Images,
  Layers,
  Zap,
  BookOpen,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { Container, Button, Badge, Tag, Seo } from "@/components/ui";
import ScreenshotGallery from "@/components/project/ScreenshotGallery";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

// Reusable card wrapper for each section
function SectionCard({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-border/60 bg-surface/20 backdrop-blur-sm p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      {Icon && <Icon className="h-5 w-5 text-primary shrink-0" />}
      <h2 className="text-xl md:text-2xl font-black text-foreground underline underline-offset-4 decoration-primary/60 decoration-2">
        {children}
      </h2>
    </div>
  );
}

function ListSection({ title, icon, items }) {
  return (
    <motion.div variants={slideUp} className="mb-8">
      <SectionCard>
        <SectionTitle icon={icon}>{title}</SectionTitle>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-start justify-center gap-3 text-base text-foreground/80 leading-relaxed text-center">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </motion.div>
  );
}

export default function Project() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/projects/${project.slug}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `${siteConfig.url}/projects/${project.slug}`
          }
        ]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${siteConfig.url}/projects/${project.slug}/#sourcecode`,
        "name": project.title,
        "description": project.tagline,
        "codeRepository": project.github,
        "programmingLanguage": project.stack,
        "author": { "@type": "Person", "name": siteConfig.name }
      }
    ]
  };

  return (
    <>
      <Seo
        title={`${project.title} - ${siteConfig.name}`}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        image={project.screenshots?.[0]?.src}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden py-16 md:py-24 developer-grid developer-radial">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 h-64 w-96 rounded-full bg-primary/10 blur-[90px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-40 h-48 w-48 rounded-full bg-cyan-400/8 blur-[70px]" />

        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Back button */}
            <motion.div variants={slideUp} className="mb-8">
              <Button to="/projects" variant="secondary" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Button>
            </motion.div>

            {/* ── Hero Card ── */}
            <motion.div variants={slideUp} className="mb-8">
              <div className="rounded-3xl border border-border bg-background/80 shadow-2xl shadow-primary/8 backdrop-blur-sm overflow-hidden premium-border">
                {/* Top gradient bar */}
                <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-cyan-400 to-primary" />

                <div className="p-8 md:p-12 flex flex-col items-center text-center">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                    <Badge variant="primary">{project.category}</Badge>
                    <Badge>{project.year}</Badge>
                    <Badge variant={project.status === "Active" || project.status === "Completed" ? "primary" : "default"} size="sm">
                      {project.status}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-4 max-w-3xl">
                    {project.title}
                  </h1>

                  {/* Tagline */}
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mb-8">
                    {project.tagline}
                  </p>

                  {/* Tech stack pills — logos auto-render via TechIcon inside Tag */}
                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {project.github && (
                      <Button variant="secondary" href={project.github} external>
                        <Github className="h-4 w-4" />
                        View Source
                      </Button>
                    )}
                    {project.live && (
                      <Button href={project.live} external>
                        <ExternalLink className="h-4 w-4" />
                        {project.liveLabel || "Live Demo"}
                      </Button>
                    )}
                  </div>

                  {/* Note */}
                  {project.note && (
                    <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3.5 text-sm text-muted max-w-xl text-left">
                      <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{project.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* ── Screenshots ── */}
            {project.screenshots?.length > 0 && (
              <motion.div variants={slideUp} className="mb-8">
                <SectionCard>
                  <SectionTitle icon={Images} centered>Screenshots</SectionTitle>
                  <ScreenshotGallery screenshots={project.screenshots} />
                </SectionCard>
              </motion.div>
            )}

            {/* ── Overview ── */}
            <motion.div variants={slideUp} className="mb-8">
              <SectionCard>
                <SectionTitle icon={BookOpen} centered>Overview</SectionTitle>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">{project.overview}</p>
              </SectionCard>
            </motion.div>

            {/* ── Problem ── */}
            <motion.div variants={slideUp} className="mb-8">
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <h2 className="text-xl md:text-2xl font-black text-foreground underline underline-offset-4 decoration-amber-400/60 decoration-2">The Problem</h2>
                </div>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">{project.problem}</p>
              </div>
            </motion.div>

            {/* ── Architecture ── */}
            <motion.div variants={slideUp} className="mb-8">
              <SectionCard>
                <SectionTitle icon={Layers}>Architecture & Technical Decisions</SectionTitle>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto text-center mb-8">{project.architecture}</p>
                {project.fullStack && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(project.fullStack).map(([layer, items]) => (
                      <div key={layer} className="rounded-xl border border-border/50 bg-background/40 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                          {layer}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </SectionCard>
            </motion.div>

            {/* ── Key Features ── */}
            <ListSection title="Key Features" icon={CheckCircle2} items={project.features} />

            {/* ── Challenges ── */}
            <motion.div variants={slideUp} className="mb-8">
              <SectionCard>
                <SectionTitle icon={Zap}>Challenges & Solutions</SectionTitle>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl border border-border/50 bg-background/40 p-5 flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-[10px] font-bold text-red-400">!</span>
                        <p className="text-sm font-semibold text-foreground leading-snug">{c.problem}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-bold text-emerald-400">✓</span>
                        <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </motion.div>

            {/* ── Bottom CTA ── */}
            <motion.div
              variants={slideUp}
              className="rounded-3xl border border-border bg-surface/50 p-10 md:p-16 text-center overflow-hidden relative"
            >
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-48 w-72 rounded-full bg-primary/10 blur-3xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 relative">
                Interested in this project?
              </h2>
              <p className="text-base text-foreground/80 mb-8 max-w-lg mx-auto relative">
                Check out the source code on GitHub or get in touch to discuss the architecture.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 relative">
                {project.github && (
                  <Button href={project.github} external>
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
                <Button to="/#contact" variant="secondary">
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </section>
    </>
  );
}

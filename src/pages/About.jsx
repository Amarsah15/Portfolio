import { motion } from "framer-motion";
import { Code2, Layers3, Rocket, Sparkles, ArrowRight } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { Container, Heading, Seo, Button } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

const highlights = [
  { icon: Code2, value: "5+", label: "Projects shipped" },
  { icon: Layers3, value: "Full-stack", label: "End-to-end thinking" },
  { icon: Rocket, value: "2026", label: "Ready for my first role" },
];

export default function About() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/about/#breadcrumb`,
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
            "name": "About",
            "item": `${siteConfig.url}/about`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Seo
        title={`About - ${siteConfig.name}`}
        description="I'm Amarnath Kumar, a Computer Science graduate specializing in MERN stack development, based in Kolkata. I build full-stack products with thoughtful interfaces."
        path="/about"
        jsonLd={aboutJsonLd}
      />

      <section className="py-20 md:py-20 relative overflow-hidden developer-radial developer-grid">
        <div className="pointer-events-none absolute right-[8%] top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl ambient-orb" />
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-16">
            <div>
              <Heading as="h1" className="mb-4">
                About Me
              </Heading>
              <motion.p variants={slideUp} className="text-muted text-base md:text-lg max-w-2xl">
                Developer by practice. Builder by instinct. I enjoy taking an idea from an empty folder to a useful, polished product.
              </motion.p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <motion.div variants={slideUp} className="relative lg:col-span-7 overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 md:p-9 premium-border">
                <Sparkles className="absolute right-7 top-7 h-7 w-7 text-primary/40" />
                <div className="space-y-5 text-muted leading-relaxed">
                  <p className="text-lg text-foreground font-medium">
                    I'm Amarnath Kumar, a Computer Science graduate specializing in MERN stack development, based in Kolkata.
                  </p>
                  <p>
                    I build full-stack products with thoughtful interfaces and dependable APIs. My work includes a coding-practice platform with live execution, secure authentication flows, social products, dashboards, and role-based REST APIs.
                  </p>
                  <p>
                    I care about readable code, accessible experiences, and understanding the system behind the screen. Right now, I'm looking for a frontend, backend, or full-stack role where I can learn fast and contribute from day one.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideUp} className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                {highlights.map(({ icon: Icon, value, label }, index) => (
                  <div key={label} className="group flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">{value}</p>
                      <p className="text-sm text-muted">{label}</p>
                    </div>
                    <span className="ml-auto text-xs font-mono text-muted/70">0{index + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={slideUp} className="flex flex-wrap gap-4 pt-4">
              <Button to="/projects" variant="primary">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button to="/contact" variant="secondary">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

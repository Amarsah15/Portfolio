import { motion } from "framer-motion";
import { 
  Code2, 
  Layers3, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Cpu, 
  ShieldCheck, 
  Activity 
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { 
  Container, 
  Heading, 
  Seo, 
  Button, 
  Card, 
  Badge, 
  TechIcon 
} from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";

const highlights = [
  { icon: Code2, value: "5+", label: "Projects shipped" },
  { icon: Layers3, value: "Full-stack", label: "End-to-end thinking" },
  { icon: Rocket, value: "Immediate", label: "Ready for full-time roles" },
];

const philosophy = [
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Building scalable backend structures and interactive frontend layers. Focused on translating conceptual logic into production-ready software."
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance First",
    description: "Architecting backend routes with rate limiting, secure HTTP-only cookie sessions, JWT authentication, and structured validation using Zod and Express."
  },
  {
    icon: Activity,
    title: "Polished & Accessible UX",
    description: "Detailing interfaces with pixel-perfect layouts, responsive mobile-first setups, micro-animations, and monaco code editors for ideal user interaction."
  }
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

      <section className="py-20 md:py-24 relative overflow-hidden developer-radial developer-grid">
        <div className="pointer-events-none absolute right-[8%] top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl ambient-orb" />
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-20">
            {/* Header & Stats Highlight */}
            <div className="space-y-8">
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
                      I build full-stack products with thoughtful interfaces and dependable APIs. My academic focus in Computer Science has taught me to combine software engineering principles with clean codebase architecture.
                    </p>
                    <p>
                      My work includes <strong>LeetLab</strong> (a coding-practice platform with sandboxed execution via Judge0 and Gemini AI integration), <strong>AuthCore</strong> (a secure email-OTP and session-based auth system), and custom REST APIs.
                    </p>
                    <p>
                      I care about readable code, accessible experiences, and understanding the systems behind the screen. I am actively looking for frontend, backend, or full-stack engineering roles where I can learn quickly and deliver impact from day one.
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
            </div>

            {/* Engineering Values / Philosophy */}
            <div className="space-y-8">
              <Heading as="h2" className="text-2xl md:text-3xl font-bold">
                My Focus & Core Values
              </Heading>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {philosophy.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} hover={true} className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Technical Toolbelt */}
            <div className="space-y-8">
              <Heading as="h2" className="text-2xl md:text-3xl font-bold">
                Technical Toolbelt
              </Heading>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat) => {
                  const CategoryIcon = cat.icon;
                  return (
                    <Card key={cat.category} className="space-y-4" hover={false}>
                      <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <CategoryIcon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">{cat.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {cat.items.map((skill) => (
                          <Badge key={skill} variant="outline" className="flex items-center gap-1.5 hover:border-primary/40 hover:bg-primary/5 transition-all py-1">
                            <TechIcon name={skill} className="h-3.5 w-3.5" />
                            <span>{skill}</span>
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-12">
              <Heading as="h2" className="text-2xl md:text-3xl font-bold">
                Education & Academic Timeline
              </Heading>
              <div className="relative border-l border-border/80 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    variants={slideUp}
                    className="relative group"
                  >
                    {/* Timeline Node Icon */}
                    <span className="absolute -left-[37px] md:-left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary/40 text-primary/70 transition-all group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary">
                      <GraduationCap className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface/80 border border-border text-muted w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80 mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span>{edu.location}</span>
                      <span>·</span>
                      <span className="text-primary font-medium">{edu.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation CTA */}
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

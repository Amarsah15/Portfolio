import { m } from "framer-motion";
import { Code2, Layers3, Rocket, Sparkles } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { Section, SectionHeader } from "@/components/ui";

const highlights = [
  { icon: Code2, value: "5+", label: "Projects shipped" },
  { icon: Layers3, value: "Full-stack", label: "End-to-end thinking" },
  { icon: Rocket, value: "Immediate", label: "Ready for full-time roles" },
];

export default function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="pointer-events-none absolute right-[8%] top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl ambient-orb" />
      <SectionHeader eyebrow="A little about me" title="Developer by practice. Builder by instinct." description="I enjoy taking an idea from an empty folder to a useful, polished product." />

      <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <m.div variants={slideUp} className="relative lg:col-span-7 overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 md:p-9 premium-border">
          <Sparkles className="absolute right-7 top-7 h-7 w-7 text-primary/40" />
          <div className="space-y-5 text-muted leading-relaxed max-w-2xl">
            <p className="text-lg text-foreground">I&apos;m Amarnath Kumar, a Computer Science graduate specialising in MERN stack development, based in Kolkata.</p>
            <p>I build full-stack products with thoughtful interfaces and dependable APIs. My work includes a coding-practice platform with live execution, secure authentication flows, social products, dashboards, and role-based REST APIs.</p>
            <p>I care about readable code, accessible experiences, and understanding the system behind the screen. Right now, I&apos;m looking for a frontend, backend, or full-stack role where I can learn fast and contribute from day one.</p>
          </div>
        </m.div>

        <m.div variants={slideUp} className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {highlights.map(({ icon: Icon, value, label }, index) => (
            <div key={label} className="group flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
              <div><p className="text-xl font-bold text-foreground">{value}</p><p className="text-sm text-muted">{label}</p></div>
              <span className="ml-auto text-xs font-mono text-muted/70">0{index + 1}</span>
            </div>
          ))}
        </m.div>
      </div>
    </Section>
  );
}

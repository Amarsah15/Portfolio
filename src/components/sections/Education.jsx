import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { Section, SectionHeader } from "@/components/ui";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="The foundation" title="Education" description="The academic path that sharpened my problem-solving and engineering fundamentals." align="center" className="mx-auto" />
      <div className="relative mx-auto max-w-6xl before:absolute before:bottom-8 before:left-[23px] before:top-8 before:w-px before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
        {education.map((item, index) => (
          <motion.article key={`${item.institution}-${item.period}`} variants={slideUp} className="relative mb-7 pl-16 md:grid md:grid-cols-[1fr_72px_1fr] md:pl-0">
            <div className="absolute left-0 top-7 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary shadow-lg shadow-primary/15 md:static md:col-start-2 md:row-start-1 md:mt-7 md:justify-self-center"><GraduationCap className="h-5 w-5" /></div>
            <div className={`rounded-2xl border border-border bg-surface/60 p-5 md:row-start-1 md:p-7 premium-border transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Milestone 0{education.length - index}</span><h3 className="mt-2 text-lg font-bold text-foreground">{item.institution}</h3><p className="mt-1 text-sm text-muted">{item.degree}</p></div>
                <div className="shrink-0 rounded-xl border border-border bg-background/60 px-4 py-3 sm:text-right"><p className="font-bold text-foreground">{item.score}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-muted sm:justify-end"><CalendarDays className="h-3.5 w-3.5" />{item.period}</p></div>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-muted"><MapPin className="h-3.5 w-3.5 text-primary" />{item.location}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

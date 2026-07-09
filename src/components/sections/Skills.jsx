import { motion } from "framer-motion";
import { Section, SectionHeader, TechIcon } from "@/components/ui";
import { slideUp } from "@/lib/motion";
import { skillCategories } from "@/data/skills";

const spans = ["md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-5"];

const docUrls = {
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  SQL: "https://www.w3schools.com/sql/sql_intro.asp",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  React: "https://react.dev/learn",
  "Tailwind CSS": "https://tailwindcss.com",
  Zustand: "https://zustand.docs.pmnd.rs/",
  "Node.js": "https://nodejs.org",
  Express: "https://expressjs.com/en/5x/starter/installing/",
  "REST APIs": "",
  JWT: "https://www.jwt.io/introduction#what-is-json-web-token",
  MongoDB: "https://www.mongodb.com/docs/",
  Git: "https://git-scm.com/docs",
  GitHub: "https://docs.github.com/en/get-started",
  Docker: "https://docs.docker.com/",
  Postman: "https://learning.postman.com/",
  "VS Code": "https://code.visualstudio.com/docs",
  Vercel: "https://vercel.com/docs",
  Render: "https://render.com/docs",
};

export default function Skills() {
  return (
    <Section id="skills" className="overflow-hidden">
      <SectionHeader eyebrow="My toolkit" title="Tools are temporary. Fundamentals stay." description="A focused stack I use to move from rough idea to dependable product." />
      <div className="grid gap-4 md:grid-cols-5">
        {skillCategories.map((group, index) => (
          <motion.article key={group.category} variants={slideUp} className={`${spans[index]} group relative min-h-48 overflow-hidden rounded-3xl border border-border bg-background/75 p-6 premium-border transition-all hover:-translate-y-1 hover:border-primary/30`}>
            <group.icon className="absolute -bottom-5 -right-4 h-32 w-32 text-primary/[.055] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
            <div className="relative z-10 mb-7 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><group.icon className="h-4 w-4"/></span><h3 className="font-black tracking-tight text-foreground">{group.category}</h3><span className="ml-auto font-mono text-xs text-muted/50">0{index + 1}</span></div>
            <div className="relative z-10 flex flex-wrap gap-2">
              {group.items.map(item => {
                const url = docUrls[item];
                const badgeClasses = "inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-2 text-xs font-semibold text-muted transition-all";

                if (!url) {
                  return (
                    <span
                      key={item}
                      className={`${badgeClasses} cursor-default`}
                    >
                      <TechIcon name={item} className="h-4 w-4" />
                      {item}
                    </span>
                  );
                }

                return (
                  <a
                    key={item}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${badgeClasses} hover:border-primary/50 hover:bg-surface hover:text-foreground hover:scale-[1.03]`}
                  >
                    <TechIcon name={item} className="h-4 w-4" />
                    {item}
                  </a>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

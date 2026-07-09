import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, FileText, Sparkles, Code2, Braces } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section id="hero" className="hero-stage relative min-h-screen overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-mesh absolute inset-0" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[.18em] text-primary backdrop-blur-xl">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"/><span className="relative h-2 w-2 rounded-full bg-emerald-400"/></span>
              Available for opportunities
            </div>
            <p className="mb-3 text-xs sm:text-sm font-bold tracking-[.2em] text-muted uppercase md:text-lg">Hello, I&apos;m Amarnath Kumar</p>
            <h1 className="max-w-4xl text-[clamp(2.4rem,8vw,7.2rem)] font-black leading-[1.08] sm:leading-[.86] tracking-[-.075em] text-foreground">
              I build for the <span className="hero-accent">web<span className="inline-block tracking-normal ml-[0.04em]">.</span></span>
            </h1>
            <div className="mt-8">
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted md:text-lg">Full-stack developer turning complex problems into fast, thoughtful, and memorable digital products.</p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button variant="primary" size="lg" className="justify-center" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Explore my work <ArrowDownRight className="h-5 w-5"/></Button>
              <div className="flex items-center gap-3">
                <Button variant="secondary" size="lg" to="/resume" className="flex-1 justify-center"><FileText className="h-5 w-5"/>Resume</Button>
                <Button variant="secondary" className="h-[46px] w-[46px] p-0 shrink-0 justify-center" href={siteConfig.github} external aria-label="GitHub"><Github className="h-5 w-5"/></Button>
                <Button variant="secondary" className="h-[46px] w-[46px] p-0 shrink-0 justify-center" href={siteConfig.linkedin} external aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, delay: .12 }} className="relative mx-auto w-full max-w-[480px]">
            <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020] p-6 text-white shadow-[0_35px_90px_rgba(0,0,0,.35)] md:p-8">
              <div className="mb-14 flex items-center justify-between"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-[#ff6b6b]"/><span className="h-3 w-3 rounded-full bg-[#ffd43b]"/><span className="h-3 w-3 rounded-full bg-[#51cf66]"/></div><span className="font-mono text-xs text-slate-500">portfolio.js</span></div>
              <Braces className="absolute right-5 top-20 h-36 w-36 text-white/[.035]"/>
              <div className="font-mono text-sm leading-8"><p><span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p><p className="pl-5"><span className="text-slate-400">focus:</span> <span className="text-amber-300">&quot;useful products&quot;</span>,</p><p className="pl-5"><span className="text-slate-400">craft:</span> <span className="text-amber-300">&quot;clean experiences&quot;</span>,</p><p className="pl-5"><span className="text-slate-400">mindset:</span> <span className="text-amber-300">&quot;always learning&quot;</span></p><p>&#125;;</p></div>
              <div className="mt-14 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center"><div><p className="text-xl font-black">5+</p><p className="text-[10px] uppercase tracking-wider text-slate-500">Projects</p></div><div><p className="text-xl font-black">9.0</p><p className="text-[10px] uppercase tracking-wider text-slate-500">CGPA</p></div><div><p className="text-xl font-black">100%</p><p className="text-[10px] uppercase tracking-wider text-slate-500">Curiosity</p></div></div>
            </div>
            <div className="absolute -left-7 top-[15%] flex items-center gap-2 rounded-2xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur-xl ambient-orb"><Code2 className="h-5 w-5 text-primary"/><span className="text-xs font-bold">Build. Learn. Repeat.</span></div>
            <div className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-white shadow-xl shadow-primary/25"><Sparkles className="h-4 w-4"/><span className="text-xs font-bold">Open to work</span><ArrowUpRight className="h-4 w-4"/></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

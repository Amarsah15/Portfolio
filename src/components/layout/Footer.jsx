import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="footer-premium relative w-full overflow-hidden border-t" role="contentinfo">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
      <Container size="full" className="relative px-2 pt-20 pb-8 md:px-20 md:pt-20 md:pb-4 lg:px-6">
        <div className="grid gap-10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="footer-kicker mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[.18em]"><Sparkles className="h-3.5 w-3.5" />Have something in mind?</div>
            <h2 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[.88] tracking-[-.065em]">Let&apos;s make it <span className="text-violet-400">real.</span></h2>
            <p className="footer-muted mt-7 max-w-xl text-base leading-relaxed md:text-lg">I&apos;m open to full-time roles, collaborations, and conversations around building thoughtful products.</p>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="footer-cta group inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl px-7 text-base font-black transition-all hover:-translate-y-1 hover:shadow-2xl">Start a conversation <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-3 md:items-center">
          <div><p className="text-xl font-black tracking-tight">Amarnath<span className="text-violet-400">.</span></p><p className="footer-muted mt-2 text-sm">Full-stack developer and curious builder.</p></div>
          <div className="footer-muted flex items-center gap-2 text-sm md:justify-center translate-y-[6px]"></div>
          <div className="flex gap-2 md:justify-end">{socialLinks.map(({ icon: Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-social flex h-11 w-11 items-center justify-center rounded-xl border transition-all hover:-translate-y-1"><Icon className="h-4 w-4" /></a>)}</div>
        </div>

        <div className="footer-border footer-subtle flex flex-col gap-2 border-t pt-6 pb-2 text-sm sm:flex-row sm:items-center sm:justify-between"><span>&copy; {new Date().getFullYear()} Amarnath Kumar. All rights reserved.</span><span>Designed with intention. Built with care.</span></div>
      </Container>
    </footer>
  );
}

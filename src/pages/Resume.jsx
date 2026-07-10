import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { Container, Button, Seo } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

export default function Resume() {
  const resumeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/resume/#breadcrumb`,
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
            "name": "Resume",
            "item": `${siteConfig.url}/resume`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Seo
        title={`Resume - ${siteConfig.name}`}
        description="View my professional resume, engineering experience, and technical skills directly on my website."
        path="/resume"
        jsonLd={resumeJsonLd}
      />

      <section className="min-h-screen py-24 md:py-28 relative overflow-hidden developer-radial developer-grid">
        {/* Decorative background ambient glows */}
        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-64 w-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-[10%] bottom-20 h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]" />

        <Container className="relative z-10 flex flex-col h-full">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-surface/40 border border-border/50 p-4 rounded-2xl backdrop-blur-md premium-border">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button to="/" variant="secondary" size="sm" className="!px-3 shrink-0">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Portfolio</span>
              </Button>
              <div className="h-4 w-px bg-border/60 hidden sm:block" />
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <h1 className="text-base sm:text-lg font-black tracking-tight text-foreground font-display truncate">
                  <span className="hidden sm:inline">{siteConfig.name} - </span>Resume
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                href={siteConfig.resume}
                external
                className="w-full sm:w-auto justify-center text-xs sm:text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open Natively
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={siteConfig.resume}
                download
                className="w-full sm:w-auto justify-center text-xs sm:text-sm"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Resume Viewer Container */}
          <div className="w-full max-w-4xl mx-auto min-h-[500px] md:min-h-0 md:aspect-[8.5/11] relative rounded-xl border border-border/80 bg-background/80 shadow-2xl p-4 md:p-6 flex flex-col premium-border">
            {/* Desktop View: Interactive Frame */}
            <div className="hidden md:block flex-1 w-full h-full">
              <iframe
                src={`${siteConfig.resume}#view=FitH&toolbar=0&navpanes=0`}
                className="w-full h-full border-none rounded-lg bg-[#080b14]"
                title={`${siteConfig.name} Resume`}
              />
            </div>

            {/* Mobile View: High-fidelity Fallback Card */}
            <div className="md:hidden flex flex-col items-center justify-center p-8 text-center h-full min-h-[500px]">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative h-16 w-16 bg-surface border border-primary/25 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>

              <h2 className="text-xl font-black text-foreground mb-2 font-display">
                Viewing on a Mobile Device?
              </h2>
              <p className="text-muted text-sm leading-relaxed max-w-sm mb-8">
                Mobile browsers typically do not support embedded PDF files. You can open it directly in your browser's native PDF reader or download it to your device.
              </p>

              <div className="flex flex-col gap-3 w-full max-w-xs">
                <Button
                  href={siteConfig.resume}
                  external
                  variant="primary"
                  className="w-full text-xs sm:text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </Button>
                <Button
                  href={siteConfig.resume}
                  download
                  variant="secondary"
                  className="w-full text-xs sm:text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

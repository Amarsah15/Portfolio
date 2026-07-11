import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ChevronDown, Clock, MessageSquare } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { Container, Heading, SocialCard, Seo, Card } from "@/components/ui";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for detailed inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: `@${siteConfig.githubHandle}`,
    href: siteConfig.github,
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: siteConfig.name,
    href: siteConfig.linkedin,
    description: "Let's connect professionally",
  },
];

const faqs = [
  {
    question: "Are you open to relocation or remote work?",
    answer: "Absolutely! I am open to relocating to major technology hubs across India (including Bangalore, Hyderabad, Pune, Noida, and Mumbai) and am fully equipped to work remotely with global teams."
  },
  {
    question: "What is your start date availability?",
    answer: "I have graduated in 2026 and am available immediately for full-time software engineering roles, as well as internships, co-ops, and freelance project collaborations."
  },
  {
    question: "What technical stack do you specialize in?",
    answer: "My primary specialization is the MERN stack (MongoDB, Express, React, Node.js) paired with Vite, Tailwind CSS, Zustand, and Zod. I also have strong academic foundations in programming languages like Python, Java, and relational databases like SQL."
  },
  {
    question: "How long does it take for you to respond?",
    answer: "I do my best to reply to all email inquiries within 24 hours. For instant or urgent messaging, connecting on LinkedIn is usually the fastest method."
  }
];

export default function Contact() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/contact/#breadcrumb`,
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
            "name": "Contact",
            "item": `${siteConfig.url}/contact`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Seo
        title={`Contact - ${siteConfig.name}`}
        description="Get in touch with Amarnath Kumar. Open to full-time roles, freelance projects, and interesting engineering conversations."
        path="/contact"
        jsonLd={contactJsonLd}
      />

      <section className="py-20 md:py-24 relative overflow-hidden developer-radial developer-grid">
        <div className="pointer-events-none absolute left-[8%] bottom-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl ambient-orb" />
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-16">
            
            {/* Header */}
            <div>
              <Heading as="h1" className="mb-4">
                Get in Touch
              </Heading>
              <motion.p variants={slideUp} className="text-muted text-base md:text-lg max-w-2xl">
                Have a project in mind, want to collaborate, or just want to say hello? I&apos;d love to hear from you.
              </motion.p>
            </div>

            {/* Form and Contacts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form block */}
              <motion.div
                variants={slideUp}
                className="lg:col-span-3 rounded-2xl border border-border bg-surface/40 p-6 md:p-8 premium-border shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
                </div>
                <ContactForm />
              </motion.div>

              {/* Info block */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {contactMethods.map((method) => (
                  <motion.div key={method.label} variants={slideUp}>
                    <SocialCard
                      icon={method.icon}
                      label={method.label}
                      value={method.value}
                      href={method.href}
                      description={method.description}
                    />
                  </motion.div>
                ))}

                {/* Location */}
                <motion.div
                  variants={slideUp}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/20 px-4 py-3.5 text-sm text-muted shadow-sm"
                >
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Kolkata, India</p>
                    <p className="text-xs text-muted/80">Available for remote & relocation roles</p>
                  </div>
                </motion.div>

                {/* Availability response */}
                <motion.div
                  variants={slideUp}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/20 px-4 py-3.5 text-sm text-muted shadow-sm"
                >
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Typical Response Time</p>
                    <p className="text-xs text-muted/80">Within 24 hours (Email & LinkedIn)</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Accordion FAQ Section */}
            <motion.div variants={slideUp} className="space-y-8 pt-8 border-t border-border/60">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <Heading as="h2" className="text-2xl font-bold">
                  Frequently Asked Questions
                </Heading>
                <p className="text-sm text-muted">
                  Quick answers to common questions about my availability, skills, and work preferences.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <Card key={idx} hover={false} className="p-0 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left font-medium text-foreground hover:bg-surface/30 transition-colors focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="p-5 pt-0 border-t border-border/40 text-sm text-muted leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/motion";
import { Container, Heading, SocialCard, Seo } from "@/components/ui";
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

export default function Contact() {
  return (
    <>
      <Seo
        title={`Contact - ${siteConfig.name}`}
        description="Get in touch with Amarnath Kumar. Open to full-time roles, freelance projects, and interesting engineering conversations."
        path="/contact"
      />

      <section className="py-24 md:py-32">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Heading as="h1" className="mb-4">
              Get in Touch
            </Heading>
            <motion.p variants={slideUp} className="text-muted text-base md:text-lg max-w-2xl mb-12">
              Have a project in mind, want to collaborate, or just want to say hello? I&apos;d love to hear from you.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              <motion.div
                variants={slideUp}
                className="lg:col-span-3 rounded-2xl border border-border bg-surface/40 p-6 md:p-8 premium-border"
              >
                <ContactForm />
              </motion.div>

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

                <motion.div
                  variants={slideUp}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/20 px-4 py-3 text-sm text-muted"
                >
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  Based in {siteConfig.location} · open to remote roles
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

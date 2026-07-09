import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { slideUp } from "@/lib/motion";
import { Section, SectionHeader, SocialCard } from "@/components/ui";
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
    <Section id="contact">
      <SectionHeader
        title="Get in Touch"
        description="Have an opening, a project in mind, or just want to say hello? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div variants={slideUp} className="lg:col-span-3 rounded-2xl border border-border bg-surface/40 p-6 md:p-8 pb-5 md:pb-6 premium-border">
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
            Open for Work in {siteConfig.location}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

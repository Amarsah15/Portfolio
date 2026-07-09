import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/motion";
import { Container, Button, Seo } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <>
      <Seo
        title={`404 - Page Not Found | ${siteConfig.name}`}
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
        noindex
      />

      <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-24">
        <Container>
          <motion.div initial="hidden" animate="visible" className="text-center max-w-lg mx-auto">
            <motion.p variants={fadeIn} className="text-8xl md:text-9xl font-bold text-border mb-4">
              404
            </motion.p>

            <motion.h1 variants={slideUp} className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Page not found
            </motion.h1>

            <motion.p variants={slideUp} className="text-muted mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/" size="lg">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

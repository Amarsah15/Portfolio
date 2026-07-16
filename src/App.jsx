import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import { lazy, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { siteConfig } from "@/data/siteConfig";

// Home is the primary entry — load eagerly. Secondary routes are code-split.
const Projects = lazy(() => import("@/pages/Projects"));
const Project = lazy(() => import("@/pages/Project"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resume = lazy(() => import("@/pages/Resume"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  useEffect(() => {
    if (siteConfig.googleAnalyticsId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", siteConfig.googleAnalyticsId);
    }
  }, []);

  return (
    <ThemeProvider>
      {/* reducedMotion="user" makes all Framer Motion respect the OS setting. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<Project />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}

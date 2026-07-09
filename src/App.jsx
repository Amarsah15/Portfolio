import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import { lazy } from "react";

// Home is the primary entry — load eagerly. Secondary routes are code-split.
const Projects = lazy(() => import("@/pages/Projects"));
const Project = lazy(() => import("@/pages/Project"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resume = lazy(() => import("@/pages/Resume"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        {/* reducedMotion="user" makes all Framer Motion respect the OS setting. */}
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<Project />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </ThemeProvider>
    </HelmetProvider>
  );
}

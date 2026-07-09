// Single-page section anchors, consumed by the scrollspy navbar and mobile menu.
// `id` matches the section element id on the Home page.
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Ordered list of section ids for the scrollspy observer.
export const sectionIds = sections.map((s) => s.id);

import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";

// Categorized skills — only technologies evidenced across real projects & v1.
// `icon` names map to <TechIcon name="..." /> brand SVGs.
export const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: [
      "React",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "Render"],
  },
];

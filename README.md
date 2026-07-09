# Amarnath Kumar - Portfolio

My personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my software development projects, technical skills, and resume. The website is fully responsive and supports both light and dark themes.

> **Live Production URL:** [https://amarnathkumar.dev](https://amarnathkumar.dev)

---

## Core Features

### User Interface & Experience
* **Automated Theme Engine:** Flash-free light and dark mode synchronization based on localStorage and browser preference.
* **Micro-Animations:** Fluid layout transitions, smooth element card hovers, page transitions, and interactive layouts powered by Framer Motion.
* **Responsive Components:** Modular components optimized for various viewport sizes, including mobile-optimized buttons and grids.
* **Educational Timeline:** An alternating dual-column timeline that folds into a single-column layout on mobile viewports.

### Case Studies & Data
* **Project Case Studies:** Dedicated routers for detailed project walkthroughs, active links, source code, and responsive media galleries.
* **Integrated Forms:** Validated client-side contact form connected to Getform API endpoint.

### Performance & Search Engine Optimization
* **Structured Data:** Person schema JSON-LD integrated for enhanced search indexing and localization.
* **Metadata Controllers:** Dynamic header tag injection using React Helmet Async.
* **Routing Indexes:** Complete XML sitemap indexes and robot crawls rules.

---

## Technical Stack

* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS 4
* **Navigation:** React Router DOM v7
* **Motion & Interactivity:** Framer Motion
* **Vector Icons:** Lucide React
* **Metadata Management:** React Helmet Async

---

## Project Structure

```
portfolio/
├── public/                # Static assets (PDF resume, icons, sitemap, robots.txt)
├── src/
│   ├── components/        # Reusable UI widgets and layout modules
│   │   ├── forms/         # Validated interactive inputs
│   │   ├── layout/        # Shell headers and footers
│   │   ├── project/       # Project cards and details media
│   │   └── ui/            # Shared primitives (buttons, badges, tags, SEO controllers)
│   ├── data/              # Static schema structures and configurations
│   ├── hooks/             # Custom hooks (scroll triggers, theme contexts)
│   ├── layouts/           # Page transition wrapper (RootLayout)
│   ├── lib/               # Utility helper libraries
│   ├── pages/             # Route views (Home, Projects, ProjectDetail, Resume, NotFound)
│   ├── styles/            # Tailwind layers and style sheets
│   ├── App.jsx            # Core router configurations
│   └── main.jsx           # Bundle entry point
├── package.json           # Scripts and dependencies manifests
├── tailwind.config.js     # Postcss configurations
├── vite.config.js         # Build settings
└── README.md              # Documentation
```

---

## Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm (v9 or higher recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Amarsah15/Portfolio.git
   cd Portfolio
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Run the development server locally:
   ```bash
   npm run dev
   ```

4. Build the production bundle:
   ```bash
   npm run build
   ```

---

## Credits

Designed and developed by [Amarnath Kumar](https://github.com/Amarsah15).

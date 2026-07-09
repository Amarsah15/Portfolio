export const projects = [
  {
    slug: "leetlab",
    title: "LeetLab",
    tagline:
      "A modern competitive-programming platform - practice problems, run code in real time, and get AI-powered help.",
    description:
      "LeetLab is a full-stack coding platform with a Monaco-based editor, real-time code execution through Judge0, submission tracking, and an AI assistant powered by Google Gemini for complexity analysis and hints.",
    featured: true,
    status: "Active",
    year: "2026",
    category: "Full-Stack Platform",
    github: "https://github.com/Amarsah15/LeetLab",
    live: "https://leetlab-rho.vercel.app/",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Express",
      "MongoDB",
      "Judge0",
      "Gemini",
    ],
    fullStack: {
      Frontend: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "DaisyUI",
        "Monaco Editor",
        "Zustand",
        "React Router",
        "React Hook Form + Zod",
        "Framer Motion",
      ],
      Backend: [
        "Express 5",
        "MongoDB / Mongoose",
        "JWT (HTTP-only cookies)",
        "Judge0 CE",
        "Google Gemini",
        "Swagger",
      ],
    },
    overview:
      "LeetLab delivers a LeetCode-style experience: an in-browser code editor, a sandboxed execution engine via Judge0, editorials, submission history, and an AI layer that explains complexity and offers hints without spoiling the solution.",
    problem:
      "Most coding-practice tools are either too heavy for focused practice or hide the details that help you actually learn. I wanted a platform that pairs real code execution with contextual, AI-driven guidance - hints and Big-O analysis - so practice turns into understanding.",
    architecture:
      "A React 19 SPA (Zustand for state, React Hook Form + Zod for forms) talks to an Express 5 REST API documented with Swagger. Auth uses JWT in HTTP-only cookies with email-OTP verification. Code runs in Judge0 CE with per-language test cases; Google Gemini powers complexity analysis and hints. MongoDB stores problems, submissions, playlists, and discussion threads. Helmet and route-level rate limiting harden the API.",
    features: [
      "Monaco editor with syntax highlighting for JavaScript, Python, Java, and C++",
      "Real-time code execution via Judge0 with per-test-case validation",
      "Submission tracking - runtime, memory usage, and status history",
      "AI assistant (Google Gemini): complexity analysis, smart hints, and code-improvement suggestions",
      "JWT auth with HTTP-only cookies, email-OTP verification, and password reset",
      "Profile dashboard with stats and streaks, plus a global leaderboard",
      "Per-problem discussion forums and custom practice playlists",
      "Admin problem CRUD with code validation and an analytics dashboard",
      "Swagger API documentation and route-level rate limiting",
    ],
    challenges: [
      {
        problem:
          "Executing untrusted user code safely while surfacing accurate verdicts, runtime, and memory.",
        solution:
          "Delegated execution to Judge0 CE with strict time/memory limits and normalized its responses into a consistent submission lifecycle (queued → running → verdict).",
      },
      {
        problem:
          "Making AI help genuinely useful without handing over the answer.",
        solution:
          "Scoped Gemini prompts to return Big-O analysis and progressive hints, and rate-limited the AI routes to control cost and abuse.",
      },
      {
        problem: "Designing a problem schema flexible enough for editorials, constraints, and multi-language test cases.",
        solution:
          "Modeled problems with embedded test cases and language-specific reference solutions, validated on the admin side before publishing.",
      },
    ],
    screenshots: [
      { src: "/projects/leetlab/Screenshot 2026-07-09 153916.png", alt: "LeetLab Welcome Portal", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 153947.png", alt: "Account Dashboard & Activity Tracker", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 005341.png", alt: "LeetLab Loading Workspace", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 153935.png", alt: "User Authentication Portal", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 153942.png", alt: "OTP Registration Verification", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 153957.png", alt: "Curated Practice Playlists", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154005.png", alt: "Global Leaderboard & Developer Streaks", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154011.png", alt: "Practice Problems Directory", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154022.png", alt: "Advanced Problem Filtering & Tags", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154043.png", alt: "Interactive Coding Workspace with Monaco Editor", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154051.png", alt: "Integrated Terminal & Multi-language Code Editor", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154101.png", alt: "Submitting Solutions & Test Cases", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154110.png", alt: "Real-time Judge0 Execution Verdicts", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154133.png", alt: "AI-powered Hint Assistant (Google Gemini)", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154147.png", alt: "AI Big-O Complexity Analysis", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154156.png", alt: "Solution Editorial & Explanation", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154205.png", alt: "Discussion Forums & Developer Threads", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154212.png", alt: "User Profile & Coding Analytics Dashboard", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154224.png", alt: "Admin Console & Problem Management", w: 1920, h: 1080 },
      { src: "/projects/leetlab/Screenshot 2026-07-09 154656.png", alt: "Admin Problem Creation & Test Case Configuration", w: 1920, h: 1080 },
    ],
  },

  {
    slug: "authcore",
    title: "AuthCore",
    tagline:
      "Security-first authentication with a polished React experience - email OTP, Google OAuth, and device session management.",
    description:
      "AuthCore is a full-stack authentication app (React + Express) covering the complete auth lifecycle: email-OTP verification, password or passwordless login, OTP-based password reset, Google OAuth, and revocable device sessions.",
    featured: false,
    status: "Active",
    year: "2026",
    category: "Full-Stack Auth System",
    github: "https://github.com/Amarsah15/AuthCore",
    live: "https://authcore-amarnath-kumar.vercel.app/",
    stack: ["React", "Vite", "Zustand", "Express", "MongoDB", "JWT", "Zod"],
    fullStack: {
      Frontend: ["React 19", "Vite", "React Router", "Zustand", "Axios", "Tailwind CSS v4"],
      Backend: [
        "Express 5",
        "MongoDB / Mongoose",
        "JWT",
        "Brevo email API",
        "Zod",
        "express-rate-limit",
        "Swagger",
      ],
    },
    overview:
      "AuthCore is a complete, security-first auth system with a clean React UI. It handles registration with email-OTP verification, flexible login (password or OTP), secure password recovery, Google OAuth, and a session dashboard where users can see and revoke active devices.",
    problem:
      "Authentication is re-implemented in almost every app, and it's easy to cut security corners. I wanted to build a production-grade reference that gets the hard parts right - OTP flows, session revocation, OAuth, and rate limiting - behind a UX that's actually pleasant to use.",
    architecture:
      "A React SPA (Zustand + Axios) consumes an Express 5 API with Zod-validated requests and Swagger docs. JWTs authenticate requests; Brevo delivers transactional OTP email. Sessions are tracked per device so they can be individually revoked, and auth routes are rate-limited to prevent abuse.",
    features: [
      "Email-OTP verification on registration",
      "Flexible login - password or passwordless OTP",
      "Secure OTP-based password reset flow",
      "Session management - view, identify, and revoke individual devices, or log out everywhere",
      "Google OAuth sign-in / sign-up",
      "Zod request validation and route-level rate limiting",
      "Interactive Swagger / OpenAPI documentation",
    ],
    challenges: [
      {
        problem: "Supporting multiple login methods (password, OTP, OAuth) without fragmenting the auth state.",
        solution:
          "Unified all entry points onto a single JWT-issuing flow so the frontend handles one consistent authenticated state regardless of how the user signed in.",
      },
      {
        problem: "Letting users trust and control their active sessions.",
        solution:
          "Persisted per-device session records with metadata and exposed endpoints to identify the current session and revoke others individually or all at once.",
      },
    ],
    screenshots: [
      { src: "/projects/authcore/Screenshot 2026-07-10 010702.png", alt: "AuthCore User Login Interface", w: 1920, h: 1080 },
      { src: "/projects/authcore/Screenshot 2026-07-10 010711.png", alt: "Email OTP Verification Flow", w: 1920, h: 1080 },
      { src: "/projects/authcore/Screenshot 2026-07-10 010723.png", alt: "Secure Password Reset Request", w: 1920, h: 1080 },
      { src: "/projects/authcore/Screenshot 2026-07-10 010852.png", alt: "User Account Settings & Sessions Overview", w: 1920, h: 1080 },
      { src: "/projects/authcore/Screenshot 2026-07-10 010934.png", alt: "Device Session Management & Security Dashboard", w: 1920, h: 1080 },
      { src: "/projects/authcore/Screenshot 2026-07-10 010952.png", alt: "Swagger API Documentation & Specifications", w: 1920, h: 1080 },
    ],
  },

  {
    slug: "connectify",
    title: "Connectify",
    tagline:
      "A MERN social app - profiles, a public post feed, and secure cookie-based auth.",
    description:
      "Connectify is a full-stack social networking app built on the MERN stack: JWT auth with HTTP-only cookies, editable profiles with auto-generated avatars, and a public post feed with validation and live character counting.",
    featured: false,
    status: "Active",
    year: "2026",
    category: "Full-Stack Social App",
    github: "https://github.com/Amarsah15/Connectify",
    live: "https://connectify-amarnath-kumar.vercel.app/",
    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Express", "MongoDB", "JWT"],
    fullStack: {
      Frontend: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "React Router",
        "Zustand",
        "React Hook Form + Zod",
        "Axios",
        "React Hot Toast",
      ],
      Backend: [
        "Express",
        "MongoDB / Mongoose",
        "JWT (HTTP-only cookies)",
        "bcryptjs",
        "express-validator",
        "express-rate-limit",
      ],
    },
    overview:
      "Connectify is a clean MERN social platform focused on the essentials done well: secure authentication, profile management, and a public feed where users create, view, and delete posts - with client-side validation and instant feedback.",
    problem:
      "I wanted to build a social app end-to-end and get the fundamentals right - secure cookie-based sessions, protected routes, a well-modeled post/profile schema, and validation on both client and server - rather than bolt on features on a shaky foundation.",
    architecture:
      "A React SPA (Zustand state, React Hook Form + Zod validation, React Hot Toast feedback) talks to an Express API. Auth uses JWT stored in HTTP-only cookies with bcrypt-hashed credentials; express-validator and rate limiting protect the endpoints. MongoDB stores users and posts, and avatars are generated automatically for new profiles.",
    features: [
      "Register / login with JWT stored in HTTP-only cookies",
      "Protected routes for authenticated users",
      "Profile management - name, email, and bio",
      "Public post feed - create (10-2500 chars), view chronologically, delete your own",
      "Live character counter and Zod-based form validation",
      "Automatic avatar generation for new profiles",
      "Toast notifications and a fully responsive layout",
    ],
    challenges: [
      {
        problem: "Keeping authentication secure in the browser without exposing tokens to JavaScript.",
        solution:
          "Stored JWTs in HTTP-only cookies with proper CORS and credentials handling, so tokens are never accessible to client-side scripts.",
      },
      {
        problem: "Preventing malformed or abusive post content.",
        solution:
          "Validated posts on both ends (Zod on the client, express-validator on the server) with length limits, and added rate limiting to the write endpoints.",
      },
    ],
    screenshots: [
      { src: "/projects/connectify/Screenshot 2026-07-10 010300.png", alt: "Connectify Social Portal Home", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010311.png", alt: "Secure Login Page", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010319.png", alt: "Account Registration and Validation Form", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010327.png", alt: "Public Activity Feed and Discussion Boards", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010335.png", alt: "Publish Post Dashboard with Live Character Count", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010342.png", alt: "User Profile View and Bio Details", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010405.png", alt: "User Settings & Profile Configuration Page", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010414.png", alt: "Edit Profile Details Panel", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010419.png", alt: "Profile Avatar Customization Panel", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010429.png", alt: "Active Sessions & Cookie Info", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010435.png", alt: "Interactive Actions and Feed Customization", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010441.png", alt: "Mobile Responsive View of the Activity Feed", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010447.png", alt: "Post Verification & Validation Prompts", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010456.png", alt: "Instant Toast Notifications for Actions", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010508.png", alt: "Security Configurations & Revocations Screen", w: 1920, h: 1080 },
      { src: "/projects/connectify/Screenshot 2026-07-10 010515.png", alt: "Integrated Developer Analytics Views", w: 1920, h: 1080 },
    ],
  },

  {
    slug: "finance-dashboard-api",
    title: "Finance Dashboard API",
    tagline:
      "A production-style REST API - role-based access control, aggregated analytics, tests, and Swagger docs.",
    description:
      "A RESTful backend for a multi-role finance dashboard, built with Node.js, Express 5, and MongoDB. It provides record management, RBAC (admin / analyst / viewer), aggregated analytics endpoints, and a tested, documented API.",
    featured: false,
    status: "Active",
    year: "2026",
    category: "Backend REST API",
    github: "https://github.com/Amarsah15/finance-dashboard-backend",
    live: "https://finance-dashboard-aj19.onrender.com/api-docs",
    liveLabel: "API Docs (Swagger)",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Zod", "Swagger", "Vitest"],
    fullStack: {
      Backend: [
        "Node.js (ESM)",
        "Express 5",
        "MongoDB / Mongoose",
        "JWT",
        "Zod v4",
        "Helmet",
        "bcryptjs",
        "express-rate-limit",
        "Swagger (jsdoc + ui-express)",
        "Vitest + Supertest",
      ],
    },
    overview:
      "A backend-focused project that serves financial data to a dashboard frontend cleanly and safely: JWT auth, role-based authorization, MongoDB aggregation for analytics, Zod-validated inputs, a database seeder, and a Vitest + Supertest suite.",
    problem:
      "I wanted to build a backend to production standards - not just CRUD, but proper role-based authorization, aggregation-driven analytics, validation middleware, error handling, seeding, and automated tests - with documentation a frontend team could actually consume.",
    architecture:
      "Express 5 with a clean controllers / middleware / models / routes structure. JWT protects routes and an authorizeRoles middleware enforces RBAC. A reusable Zod validation middleware guards inputs; a global error handler and 404 handler standardize responses. MongoDB aggregation powers the dashboard analytics. Swagger documents every endpoint, and Vitest + Supertest cover health checks and middleware.",
    features: [
      "Role-based access control - admin, analyst, and viewer roles",
      "Financial record CRUD with ownership and role checks",
      "Aggregated analytics endpoints via MongoDB aggregation pipelines",
      "Reusable Zod validation middleware and standardized error / 404 handling",
      "JWT authentication with bcrypt-hashed credentials",
      "Database seeder with test users and sample records",
      "Health-check route, Helmet, and route-level rate limiting",
      "Vitest + Supertest test suite and interactive Swagger docs",
    ],
    challenges: [
      {
        problem: "Serving dashboard analytics efficiently instead of over-fetching raw records.",
        solution:
          "Used MongoDB aggregation pipelines to compute totals and breakdowns in the database, returning ready-to-render analytics to the frontend.",
      },
      {
        problem: "Enforcing different capabilities per role without scattering checks everywhere.",
        solution:
          "Centralized authorization in an authorizeRoles middleware composed onto routes, keeping controllers focused on business logic.",
      },
    ],
    note: "Hosted on Render's free tier - the first request after inactivity may take 30-60s to spin up.",
    screenshots: [
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 010916.png", alt: "Interactive Swagger API Documentation", w: 1920, h: 1080 },
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 010929.png", alt: "Auth, Records, Dashboard, and Health endpoints", w: 1920, h: 1080 },
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 010949.png", alt: "Documented API Schema Objects Overview", w: 1920, h: 1080 },
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 011011.png", alt: "Auth Request & Response Schema Models", w: 1920, h: 1080 },
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 011036.png", alt: "Financial Record Input & Model Schemas", w: 1920, h: 1080 },
      { src: "/projects/finance-dashboard-api/Screenshot 2026-07-09 011049.png", alt: "Paginated Records & Aggregated Analytics Schemas", w: 1920, h: 1080 },
    ],
  },

  {
    slug: "she-foundation",
    title: "She Foundation Dashboard",
    tagline:
      "A full-stack intern dashboard - donations, dynamic rewards, and a live leaderboard.",
    description:
      "She Foundation is a MERN dashboard for tracking intern fundraising: referral codes, total donations raised, dynamic rewards/unlockables, and a live leaderboard - with JWT auth, protected routing, and a dark/light toggle.",
    featured: false,
    status: "Completed",
    year: "2025",
    category: "Full-Stack Dashboard",
    github: "https://github.com/Amarsah15/She-Foundation",
    live: "https://she-foundation.vercel.app/",
    stack: ["React", "Zustand", "Tailwind CSS", "Express", "MongoDB", "JWT"],
    fullStack: {
      Frontend: ["React", "Zustand", "Tailwind CSS", "DaisyUI", "React Hot Toast", "React Router"],
      Backend: ["Node.js", "Express", "MongoDB / Mongoose", "JWT", "bcryptjs", "cookie-parser"],
    },
    overview:
      "A full-stack dashboard where interns sign in to see their referral code, total donations raised, and reward tiers that unlock dynamically - plus a leaderboard ranking interns by amount raised, all backed by a live MongoDB API.",
    problem:
      "The goal was a focused, real-time dashboard that motivates through visible progress: clear personal stats, reward tiers that unlock as you raise more, and a leaderboard - behind secure, protected routing.",
    architecture:
      "A React SPA (Zustand state, DaisyUI theming, React Hot Toast) consumes an Express + MongoDB API. JWT auth is stored in cookies with bcrypt-hashed credentials; protected routing gates the dashboard, leaderboard, and profile. Rewards are computed from donation totals and the leaderboard is sorted server-side.",
    features: [
      "JWT authentication with secure cookie sessions",
      "Dashboard with intern name, referral code, and total donations raised",
      "Dynamic rewards / unlockables based on amount raised",
      "Leaderboard ranking interns by donation total",
      "Profile page with personal details, admin status, and referral count",
      "Protected routing for dashboard, leaderboard, and profile",
      "One-click dark / light theme toggle",
    ],
    challenges: [
      {
        problem: "Making rewards feel responsive to progress without hardcoding tiers into the UI.",
        solution:
          "Derived unlockable rewards from the donation total so the dashboard reflects new tiers automatically as amounts change.",
      },
    ],
    screenshots: [
      { src: "/projects/she-foundation/dashboard.png", alt: "Intern dashboard with donations and rewards", w: 1883, h: 919 },
      { src: "/projects/she-foundation/leaderboard.png", alt: "Leaderboard ranking interns by donations", w: 1886, h: 912 },
      { src: "/projects/she-foundation/profile.png", alt: "Intern profile page", w: 1867, h: 911 },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProject() {
  return projects.find((p) => p.featured) || projects[0];
}

export function getOtherProjects() {
  return projects.filter((p) => !p.featured);
}

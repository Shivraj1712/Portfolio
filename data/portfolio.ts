export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  backendUrl?: string;
  architecture?: string;
}

export interface SkillItem {
  name: string;
  code: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "Lattice – Project Sharing Site",
    description: "A project showcase platform similar to Dribbble. You can post, edit, and delete (CRUD) your own projects, check developer profiles, and view project details. For safety, users cannot edit other people's projects. It includes project searching with filters.",
    architecture: "Built with Go and Fiber. It handles session token and Goth OAuth logins, saves project details in a PostgreSQL database using GORM, and uses Redis for session memory.",
    tags: ["GO (GOLANG)", "FIBER", "GORM", "NEON POSTGRESQL", "REDIS", "SESSION TOKENS", "GOTH (OAUTH)", "CLOUDINARY", "DOCKER"],
  },
  {
    id: "02",
    title: "SpendGrid – Expense Tracker",
    description: "A simple website to track how much money you spend. It uses a fast backend API to save your expenses and shows them on a clean web page.",
    architecture: "Uses a Go web server that talks to a PostgreSQL database to store spending entries and handles secure logins.",
    tags: ["GO (GOLANG)", "FIBER V2", "GORM", "NEON POSTGRESQL", "NEXT.JS"],
    githubUrl: "https://github.com/Shivraj1712/SpendGrid",
    liveUrl: "https://spend-grid-lovat.vercel.app/",
    backendUrl: "https://spendgrid-2.onrender.com",
  },
  {
    id: "03",
    title: "NoteItDown – Notes Manager",
    description: "A high-performance notes manager application featuring secure middleware-protected routing, intelligent quick-searching, and dynamic note categorization. Utilizes a Master-Detail UI layout for seamless editing and quick viewing.",
    architecture: "Built on Next.js 15 (App Router) using Server Actions for backend logic, MongoDB (Mongoose) for database storage, Clerk for secure user management, and Zod for schema-first validation.",
    tags: ["NEXT.JS 15", "CLERK AUTH", "MONGODB", "ZOD", "SHADCN UI", "SERVER ACTIONS"],
    githubUrl: "https://github.com/Shivraj1712/NoteItDown",
    liveUrl: "https://notetdown-with-nextjs.vercel.app/",
  },
];

export const LANGUAGES_DATA: SkillItem[] = [
  { name: "GO (GOLANG)", code: "01" },
  { name: "C++ (DSA)", code: "02" },
  { name: "TYPESCRIPT", code: "03" },
  { name: "JAVASCRIPT", code: "04" },
];

export const FRAMEWORKS_DATA: SkillItem[] = [
  { name: "FIBER", code: "01" },
  { name: "NODE.JS", code: "02" },
];

export const DATABASES_DATA: SkillItem[] = [
  { name: "POSTGRESQL", code: "01" },
  { name: "REDIS", code: "02" },
  { name: "GORM", code: "03" },
];

export const CLOUD_AUTH_DATA: SkillItem[] = [
  { name: "OAUTH2 / GOTH", code: "01" },
  { name: "DOCKER", code: "02" },
  { name: "SESSION TOKENS", code: "03" },
];

export const MARQUEE_ITEMS = [
  "DECOUPLED ARCHITECTURE",
  "THREAD-SAFE DATA PIPELINES",
  "DATABASE OPTIMIZATION",
  "SECURE SESSION STATES",
  "INTERFACE-DRIVEN API DESIGN",
  "ALGORITHMIC EFFICIENCY (DSA)",
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: "Backend Focus",
    description: "Focus on building solid, easy-to-read, and secure backend systems.",
    iconCode: "BE",
  },
  {
    title: "High Performance",
    description: "Write fast queries and code that runs quickly without slowing down.",
    iconCode: "HP",
  },
  {
    title: "Security & Testability",
    description: "Keep data secure and write code that is easy to test.",
    iconCode: "ST",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Shivraj1712/",
  linkedin: "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/",
  instagram: "https://www.instagram.com/shivraj_maharaul_17/",
  x: "https://x.com/Shivraj1712",
  portfolio: "https://shivrajportfolio.vercel.app/",
  email: "Shivrajmaharaul688@gmail.com",
  phone: "+91 63555 40489",
  whatsapp: "https://wa.me/916355540489",
  location: "Gujarat, India"
};

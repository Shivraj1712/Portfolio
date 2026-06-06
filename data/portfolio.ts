export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  wip?: boolean;
  progress?: number;
}

export interface SkillItem {
  name: string;
  code: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "StockPulse Engine",
    description: "A real-time stock monitoring application that streams market updates. Built using Go WebSockets for quick message broadcasts and Redis for caching data state.",
    tags: ["GOLANG", "WEBSOCKETS", "REDIS"],
    wip: true,
    progress: 30,
  },
  {
    id: "02",
    title: "SpendGrid Ledger",
    description: "A financial tracking ledger that organizes daily expenses, validates entries, and uses PostgreSQL database integration. Deployed live on Render.",
    tags: ["GORM", "POSTGRES", "RENDER"],
    githubUrl: "https://github.com/Shivraj1712/SpendGrid",
    liveUrl: "https://spend-grid-lovat.vercel.app/",
  },
  {
    id: "03",
    title: "Noteitdown System",
    description: "A responsive markdown note-taking dashboard built using React, Next.js, and styled with Tailwind CSS. Optimized for fast rendering and hosted on Vercel.",
    tags: ["NEXTJS", "REACT", "TAILWIND"],
    githubUrl: "https://github.com/Shivraj1712/notetdown-with-nextjs",
    liveUrl: "https://notetdown-with-nextjs.vercel.app/",
  },
];

export const LANGUAGES_DATA: SkillItem[] = [
  { name: "C++", code: "01" },
  { name: "GOLANG", code: "02" },
  { name: "TYPESCRIPT", code: "03" },
  { name: "JAVASCRIPT", code: "04" },
];

export const INFRASTRUCTURE_DATA: SkillItem[] = [
  { name: "FIBER_V2", code: "01" },
  { name: "RENDER", code: "02" },
  { name: "GORM POSTGRESQL", code: "03" },
  { name: "NEXTJS", code: "04" },
  { name: "VERCEL", code: "05" },
];

export const MARQUEE_ITEMS = [
  "EFFICIENT CODE",
  "API DESIGN",
  "FULLSTACK SYSTEM",
  "DATABASE INTEGRATION",
  "CLEAN ARCHITECTURE",
  "AI FRONTEND DEVELOPMENT",
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: "Performance",
    description: "Optimize database queries, minimize payloads, and design responsive API endpoints.",
    iconCode: "PF",
  },
  {
    title: "Clarity",
    description: "Write readable, modular code with clear data structures and sensible file organization.",
    iconCode: "CL",
  },
  {
    title: "Simplicity",
    description: "Build clean, user-friendly layouts and avoid bloated third-party libraries.",
    iconCode: "SM",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Shivraj1712/",
  linkedin: "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/",
  instagram: "https://www.instagram.com/shivraj_maharaul_17/",
  x: "https://x.com/Shivraj1712",
};

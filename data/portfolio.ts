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
    description: "Real-time market data streaming engine processing multi-exchange order books. Implements advanced noise filtering and predictive caching.",
    tags: ["GOLANG", "WEBSOCKETS", "REDIS"],
    wip: true,
    progress: 85,
  },
  {
    id: "02",
    title: "SpendGrid Ledger",
    description: "Immutable financial ledger system with double-entry validation and distributed transaction management for high-volume payment processing.",
    tags: ["GORM", "POSTGRES", "RENDER"],
    githubUrl: "https://github.com/Shivraj1712/SpendGrid",
    liveUrl: "https://spend-grid-lovat.vercel.app/",
  },
  {
    id: "03",
    title: "Noteitdown System",
    description: "High-performance data log repository architecture engineered for rapid lookups and linear storage optimization operations.",
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
  "PERFORMANCE FIRST",
  "ZERO LATENCY TOLERANCE",
  "SYSTEMS THINKING",
  "IMMUTABLE STATE",
  "LINEAR SCALING",
  "CLEAN ARCHITECTURE",
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: "Zero Latency",
    description: "Account for every byte and CPU cycle. Design systems that respond at speed.",
    iconCode: "MS",
  },
  {
    title: "Zero Ambiguity",
    description: "Write readable, maintainable, self-documenting code with clear interfaces.",
    iconCode: "IF",
  },
  {
    title: "Zero Waste",
    description: "Minimize third-party bloating. Favor native efficiency and targeted patterns.",
    iconCode: "OP",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Shivraj1712/",
  linkedin: "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/",
};

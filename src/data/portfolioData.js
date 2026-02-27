export const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  // "Services", // hidden
  "Testimonials",
  "Contact",
];

export const SKILLS = {
  Frontend: [
    { name: "React",        level: 95, icon: "⚛" },
    { name: "Next.js",      level: 90, icon: "▲" },
    { name: "TypeScript",   level: 92, icon: "TS" },
    { name: "Tailwind CSS", level: 94, icon: "🌊" },
  ],
  Backend: [
    { name: "Node.js",    level: 91, icon: "⬡" },
    { name: "Express",    level: 88, icon: "🚂" },
    { name: "MongoDB",    level: 85, icon: "🍃" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
  ],
  DevOps: [
    { name: "Git",       level: 96, icon: "🔀" },
    { name: "Docker",    level: 78, icon: "🐳" },
    { name: "REST APIs", level: 95, icon: "🔌" },
    { name: "Firebase",  level: 83, icon: "🔥" },
  ],
};

export const ALL_SKILL_TAGS = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "Redis", "Docker", "Git", "GitHub Actions", "REST APIs",
  "GraphQL", "Firebase", "Tailwind", "Figma", "Jest", "Cypress",
];

export const PROJECTS = [
  {
    id: 1,
    title: "NexaCommerce",
    desc: "A blazing-fast e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout flows built for scale.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    category: "fullstack",
    color: "#00BFFF",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "DevCollab",
    desc: "Real-time collaborative coding environment with video chat, pair-programming sessions, and integrated AI code review system.",
    tags: ["Next.js", "TypeScript", "WebRTC", "Socket.io"],
    category: "frontend",
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "PulseAPI",
    desc: "Enterprise-grade REST API gateway with rate limiting, OAuth2, auto-generated docs, monitoring dashboards and webhook management.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    category: "backend",
    color: "#00BFFF",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AuraUI",
    desc: "Open-source React component library with 60+ accessible components, dark mode, Storybook docs, and Figma design tokens.",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    category: "frontend",
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "FlowAnalytics",
    desc: "Real-time data visualization platform with customizable dashboards, ML-powered insights, and multi-source data connectors.",
    tags: ["Next.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "fullstack",
    color: "#00BFFF",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 6,
    title: "NodeForge CLI",
    desc: "Developer productivity CLI tool that scaffolds full-stack projects, manages environments, and automates deployment pipelines.",
    tags: ["Node.js", "TypeScript", "CLI", "GitHub Actions"],
    category: "backend",
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    live: "#",
    github: "#",
  },
];

export const PROJECT_FILTERS = [
  { id: "all",       label: "All Projects" },
  { id: "frontend",  label: "Frontend" },
  { id: "backend",   label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

export const EXPERIENCE = [
  {
    company: "Nexus Technologies",
    role: "Senior Full Stack Developer",
    duration: "Jan 2023 – Present",
    location: "Remote",
    color: "#00BFFF",
    points: [
      "Architected microservices platform handling 2M+ daily requests",
      "Led team of 6 engineers; reduced deployment time by 65%",
      "Implemented real-time features with WebSockets & Redis pub/sub",
      "Drove 40% performance improvement via code splitting & lazy loading",
    ],
  },
  {
    company: "Pixel Craft Studio",
    role: "Full Stack Developer",
    duration: "Jun 2021 – Dec 2022",
    location: "Bangalore, IN",
    color: "#8B5CF6",
    points: [
      "Built 12+ client projects with React, Next.js & Node.js",
      "Designed RESTful APIs powering mobile + web applications",
      "Integrated payment gateways (Stripe, Razorpay) for 5+ products",
      "Mentored 3 junior developers; established code review culture",
    ],
  },
  {
    company: "CloudByte Labs",
    role: "Frontend Developer",
    duration: "Aug 2020 – May 2021",
    location: "Mumbai, IN",
    color: "#00BFFF",
    points: [
      "Developed responsive UI components used by 50K+ users",
      "Migrated legacy jQuery codebase to React — 60% faster loads",
      "Collaborated with UX designers to implement Figma designs pixel-perfectly",
    ],
  },
];

export const SERVICES = [
  {
    icon: "⚡",
    title: "Web Development",
    color: "#00BFFF",
    desc: "End-to-end web applications with React & Next.js. From architecture to deployment, built for performance and scale.",
  },
  {
    icon: "🔌",
    title: "API Development",
    color: "#8B5CF6",
    desc: "Robust REST & GraphQL APIs with Node.js. Secure, documented, and designed for seamless frontend integration.",
  },
  {
    icon: "🎨",
    title: "UI/UX Implementation",
    color: "#00BFFF",
    desc: "Pixel-perfect conversion of Figma designs into living, breathing interfaces with micro-interactions that delight.",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    color: "#8B5CF6",
    desc: "Auditing, profiling, and optimizing web apps for lightning-fast load times, Core Web Vitals, and Lighthouse scores.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, Nexus Technologies",
    text: "Ketan doesn't just write code — he thinks about systems. The API architecture he designed scaled from 10K to 2M requests flawlessly. Exceptional engineer.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Webb",
    role: "Founder, DevCollab",
    text: "Working with Ketan was a game-changer. His attention to detail, clean code standards, and ability to translate complex requirements into elegant solutions is unmatched.",
    rating: 5,
    avatar: "MW",
  },
  {
    name: "Priya Nair",
    role: "Product Lead, Pixel Craft",
    text: "Ketan consistently delivered features ahead of schedule without compromising quality. His TypeScript expertise and React patterns elevated our entire codebase.",
    rating: 5,
    avatar: "PN",
  },
  {
    name: "James Okafor",
    role: "Engineering Manager, CloudByte",
    text: "Rarely do you find a developer who combines technical depth with great communication. Ketan bridges the gap between design and engineering perfectly.",
    rating: 5,
    avatar: "JO",
  },
];

export const HERO_TYPING_WORDS = [
  "React Developer",
  "Node.js Engineer",
  "TypeScript Expert",
  "UI/UX Craftsman",
  "Full Stack Builder",
];

export const HERO_STATS = [
  { n: "5+",  l: "Years of Experience" },
  { n: "50+", l: "Projects Delivered" },
  { n: "20+", l: "Happy Clients" },
  { n: "3M+", l: "Users Reached" },
];

export const CONTACT_INFO = [
  { icon: "📍", label: "Location",      val: "Bangalore, India" },
  { icon: "✉️", label: "Email",         val: "ketan@example.com" },
  { icon: "💬", label: "Response Time", val: "Within 24 hours" },
];

export const SOCIAL_LINKS = [
  { icon: "⬡",  label: "GitHub",   href: "#" },
  { icon: "in",  label: "LinkedIn", href: "#" },
  { icon: "𝕏",  label: "Twitter",  href: "#" },
  { icon: "@",   label: "Email",    href: "mailto:ketan@example.com" },
];

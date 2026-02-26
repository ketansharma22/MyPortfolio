export const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Services",
  "Contact",
];

export const SKILLS = {
  // In SKILLS object, add React Native to Frontend:
  Frontend: [
    { name: "React", level: 95, icon: "⚛" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 92, icon: "TS" },
    { name: "Tailwind CSS", level: 94, icon: "🌊" },
    { name: "JavaScript", level: 97, icon: "JS" },  // ← add
    { name: "React Native", level: 82, icon: "📱" },  // ← add
  ],

  // Add WebSockets and WebRTC to Backend:
  Backend: [
    { name: "Node.js", level: 91, icon: "⬡" },
    { name: "Express", level: 88, icon: "🚂" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
    { name: "WebSockets", level: 88, icon: "🔄" },  // ← add
    { name: "WebRTC", level: 78, icon: "📡" },  // ← add
  ],

  // Add Jira to DevOps:
  DevOps: [
    { name: "Git", level: 96, icon: "🔀" },
    { name: "Docker", level: 78, icon: "🐳" },
    { name: "REST APIs", level: 95, icon: "🔌" },
    { name: "Firebase", level: 83, icon: "🔥" },
    { name: "Jira", level: 90, icon: "📋" },  // ← add
  ],
};

export const ALL_SKILL_TAGS = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "Redis", "Docker", "Git", "GitHub Actions", "REST APIs",
  "GraphQL", "Firebase", "Tailwind", "Figma", "Jest", "Cypress",
  "JavaScript", "React Native", "WebSockets", "WebRTC", "Jira",  // ← add this line
];

export const PROJECTS = [
  {
    id: 1,
    title: "Mingle",
    desc: "Real-Time Communication Platform leveraging WebRTC and WebSockets to establish peer-to-peer (P2P) connections, enabling smooth, real-time audio/video and text chats between users globally.",
    tags: ["WebRTC", "WebSockets", "React", "Node.js", "P2P"],
    category: "fullstack",
    color: "#00BFFF",
    img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&q=80",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Vajra",
    desc: "Pioneered a medical diagnostic mobile application for heart attack prediction, achieving a validated 94.3% accuracy rate. Features a dynamic web interface connecting users for spontaneous conversations.",
    tags: ["React Native", "Machine Learning", "Node.js", "MongoDB"],
    category: "fullstack",
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    live: "#",
    github: "#",
  },
];

export const PROJECT_FILTERS = [
  { id: "all",       label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
];

export const EXPERIENCE = [
  {
    company: "Informatica, India",
    role: "Associate Software Developer",
    duration: "Jul 2025 – Present",
    location: "Bengaluru, KA",
    color: "#00BFFF",
    points: [
      "Building enterprise-grade UI for cloud ecosystem monitoring and release management using React, Redux, and AEM CMS.",
      "Developed and maintained responsive UI components streamlining visibility into incident outages, release cycles, and maintenance workflows across AWS and Azure.",
      "Integrated UI with Adobe Experience Manager (AEM) CMS, enabling dynamic content rendering and seamless updates for end-users.",
      "Tech Stack: React, SCSS, Bootstrap, Redux.",
    ],
  },
  {
    company: "Informatica, India",
    role: "Software Developer Trainee",
    duration: "Nov 2024 – Jun 2025",
    location: "Bengaluru, KA",
    color: "#8B5CF6",
    points: [
      "Developed and deployed Lightning Web Components (LWC) frontend features, leveraging Coveo integration for enhanced search functionality.",
      "Implemented front-end enhancements and bug fixes on the React AEM platform, ensuring component stability.",
      "Applied Jira for agile task management, tracking user stories, and managing the lifecycle of production bugs.",
      "Managed code promotion and configuration migrations across Salesforce environments using the Copado deployment flow.",
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
  { n: "1.5+", l: "Years of Experience" },
  { n: "2",    l: "Major Projects" },
  { n: "94.3%", l: "ML Model Accuracy" },
  { n: "2",    l: "Companies Worked" },
];

export const CONTACT_INFO = [
  { icon: "📍", label: "Location", val: "Bangalore, India" },
  { icon: "✉️", label: "Email", val: "kanu220504@gmail.com" },
  { icon: "💬", label: "Response Time", val: "Within 12 hours" },
];

export const SOCIAL_LINKS = [
  { icon: "in", label: "LinkedIn", href: "https://github.com/ketansharma22" },
  { icon: "𝕏", label: "Twitter", href: "https://x.com/ketanshrma" },
  { icon: "@", label: "Email", href: "kanu220504@gmail.com" },
];

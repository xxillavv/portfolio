import type { Token } from '@/components/common/CodeWindow/CodeWindow'
import nexusImage from '@/public/NexusGG.png'
import telegramBotImage from '@/public/TelegramBot.png'
import taskManagerImage from '@/public/TaskManager.jpg'
import courseXImage from '@/public/CourseX.png'
import portfolioImage from '@/public/portfolio.png'

export const projects = [
  {
    id: 1,
    src: nexusImage,
    title: "NEXUS.gg",
    stack: ["Next.js", "NestJS", "Tailwind", "shadcn/ui", "Redis", "AWS", "GitHub Actions"],
    description: "Multi-game stats tracker: player profiles, match history and leaderboards in one place",
    link: "https://github.com/xxillavv/game-tracker",
    demo: "https://game-tracker-flax.vercel.app/",
  },
  {
    id: 2,
    src: telegramBotImage,
    title: "Telegram AI Assistant",
    stack: ["NestJS", "TypeScript", "Telegraf", "MongoDB", "Groq", "Whisper", "Docker"],
    description: "Bot that drafts replies in your own texting style, understands voice and images",
    link: "https://github.com/xxillavv/telegram-chatting-bot",
    demo: "https://t.me/ChattingOwnBot",
  },
  {
    id: 3,
    src: taskManagerImage,
    title: "TaskManager",
    stack: ["React", "NestJS", "TypeScript", "PostgreSQL", "JWT Auth", "SCSS"],
    description: "Task manager for creating, tracking, and organizing tasks",
    link: "https://github.com/xxillavv/fullstack-todo",
  },
  {
    id: 4,
    src: courseXImage,
    title: "CourseX",
    stack: ["React", "TypeScript", "CSS"],
    description: "Multi-page website built with React and TypeScript",
    link: "https://github.com/xxillavv/course-website",
  },
  {
    id: 5,
    src: portfolioImage,
    title: "Portfolio",
    stack: ["Next.js", "SCSS"],
    description: "You’re using it rn",
    link: "https://github.com/xxillavv/portfolio",
    demo: "https://portfolio-henna-mu-57.vercel.app/",
  }
]

export const smallProjects = [
  {
    id: 1,
    title: "Simple CRUD",
    stack: ["TypeScript", "Express.js"],
    description: "A simple backend using Express and TypeScript, demonstrating basic CRUD operations and API handling.",
    link: "https://github.com/xxillavv/backend-crud",
  },
  {
    id: 2,
    title: "Delivery Service",
    stack: ["HTML", "CSS"],
    description: "Landing page about delivery service",
    link: "https://github.com/xxillavv/delivery-landing",
  },
  {
    id: 3,
    title: "Surfing",
    stack: ["HTML", "CSS"],
    description: "Small website about surfing vibe",
    link: "https://github.com/xxillavv/surf-site",
  },
  {
    id: 4,
    title: "Iphone Presentation",
    stack: ["HTML", "CSS"],
    description: "My first website made by myself",
    link: "https://github.com/xxillavv/iphone-site",
  },
  {
    id: 5,
    title: "Simple Chat application",
    stack: ["NestJS", "Socket.io", "Next.js"],
    description: "Realtime chat using socket.io",
    link: "https://github.com/xxillavv/websocket-chat",
  }
]

export const skills = [
  {
    id: 1,
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'C++'],
  },
  {
    id: 2,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'RTK Query', 'TanStack Query', 'Zod', 'React Hook Form'],
  },
  {
    id: 3,
    title: 'Styling',
    items: ['HTML', 'SCSS', 'CSS Modules', 'Tailwind', 'shadcn/ui', 'Responsive design'],
  },
  {
    id: 4,
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'REST', 'JWT', 'DTO Validation', 'WebSockets', 'RabbitMQ'],
  },
  {
    id: 5,
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Cassandra', 'Redis', 'Prisma', 'Mongoose'],
  },
  {
    id: 6,
    title: 'AI',
    items: ['Claude Code', 'Codex', 'MCP', 'OpenAI API', 'Groq', 'Whisper', 'Prompt engineering'],
  },
  {
    id: 7,
    title: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'Neovim', 'Figma'],
  },
]

export const facts = [
  'I like winter more than summer',
  'I often bike with my friends',
  'I like pizza and pasta',
  'I was in Egypt, Poland and Turkey',
  'My favorite movie is Fear',
  'I am still in university'
]

export const paths = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/works",
    text: "works",
  },
  {
    path: "/about",
    text: "about-me",
  },
  {
    path: "/contacts",
    text: "contacts",
  },
];
export const heroCode: Token[][] = [
  [["keyword", "const "], ["variable", "vladyslav"], ["punct", " = {"]],
  [["property", "  role"], ["punct", ": "], ["string", "\"full-stack developer\""], ["punct", ","]],
  [["property", "  location"], ["punct", ": "], ["string", "\"Lviv, Ukraine\""], ["punct", ","]],
  [["property", "  stack"], ["punct", ": ["], ["string", "\"React\""], ["punct", ", "], ["string", "\"Next.js\""], ["punct", ","]],
  [["punct", "    "], ["string", "\"Nest.js\""], ["punct", ", "], ["string", "\"PostgreSQL\""], ["punct", "],"]],
  [["property", "  coffee"], ["punct", ": "], ["keyword", "true"], ["punct", ","]],
  [["punct", "};"]],
  [],
  [["comment", "// let's build something cool"]],
  [["variable", "vladyslav"], ["punct", "."], ["property", "build"], ["punct", "("], ["string", "\"your idea\""], ["punct", ");"]],
];

export const aboutCode: Token[][] = [
  [["comment", "# whoami"]],
  [["keyword", "$ "], ["plain", "cat about.txt"]],
  [["string", "self-taught developer"]],
  [["string", "front-end + back-end"]],
  [],
  [["keyword", "$ "], ["plain", "ls interests/"]],
  [["property", "web/  "], ["property", "linux/  "], ["property", "bikes/"]],
  [],
  [["keyword", "$ "], ["plain", "uptime --coding"]],
  [["variable", "1+ year"], ["plain", " and counting"]],
  [],
  [["keyword", "$ "], ["plain", "git status"]],
  [["plain", "always learning "], ["string", "✓"]],
];

export const socials = {
  email: "vladpaniv@gmail.com",
  github: "https://github.com/xxillavv",
  linkedin: "https://www.linkedin.com/in/vladyslav-paniv-041674391/",
  telegram: "https://t.me/xxillav",
  instagram: "https://www.instagram.com/xxillav/",
};

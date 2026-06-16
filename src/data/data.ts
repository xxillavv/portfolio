import projectOne from '@/public/TaskManager.jpg'
import projectTwo from '@/public/CourseX.png'
import projectThree from '@/public/portfolio.png'

export const projects = [
  {
    id: 1,
    src: projectOne,
    title: "TaskManager",
    stack: "React NestJs SCSS JWTAuth TypeScript PostgreSQL",
    description: "Task manager for creating, tracking, and organizing tasks",
    link: "https://github.com/xxillavv/fullstack-todo",
  },
  {
    id: 2,
    src: projectTwo,
    title: "CourseX",
    stack: "React CSS TypeScript",
    description: "Multi-page website built with React and TypeScript",
    link: "https://github.com/xxillavv/course-website",
  },
  {
    id: 3,
    src: projectThree,
    title: "Portfolio",
    stack: "Next.js SCSS",
    description: "You’re using it rn",
    link: "https://github.com/xxillavv/portfolio",
  }
]

export const smallProjects = [
  {
    id: 1,
    title: "Simple CRUD",
    stack: "TypeScript Express.js",
    description: "A simple backend using Express and TypeScript, demonstrating basic CRUD operations and API handling.",
    link: "https://github.com/xxillavv/backend-crud",
  },
  {
    id: 2,
    title: "Delivery Service",
    stack: "HTML CSS",
    description: "Landing page about delivery service",
    link: "https://github.com/xxillavv/delivery-landing",
  },
  {
    id: 3,
    title: "Surfing",
    stack: "HTML CSS",
    description: "Small website about surfing vibe",
    link: "https://github.com/xxillavv/surf-site",
  },
  {
    id: 4,
    title: "Iphone Presentation",
    stack: "HTML CSS",
    description: "My first website made by myself",
    link: "https://github.com/xxillavv/iphone-site",
  },
  {
    id: 5,
    title: "Simple Chat application",
    stack: "NestJs Socket.io Next.js",
    description: "Realtime chat using socket.io",
    link: "https://github.com/xxillavv/iphone-site",
  }
]

export const skills = [
  {
    id: 1,
    title: 'Languages',
    text: 'TypeScript JavaScript Python C# C++ '
  },
  {
    id: 2,
    title: 'Other',
    text: 'HTML CSS Tailwind SCSS REST'
  },
  {
    id: 3,
    title: 'Tools',
    text: 'VSCode Neovim Linux Figma Docker'
  },
  {
    id: 4,
    title: 'Databases',
    text: 'PostgreSQL MySQL SQLServer'
  },
  {
    id: 5,
    title: 'Frameworks',
    text: 'React Express.js Nest.js Next.js Django'
  }
]

export const facts = [
  'I like winter more than summer',
  'I often bike with my friends',
  'I like pizza and pasta',
  'I was in Egypt, Poland and Turkey',
  'My favorite movie is Fear',
  'I am still in unversity'
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
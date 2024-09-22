import { Project, Skill } from "./interfaces";

export const skills: Skill[] = [
  {
    id: 1,
    name: "NextJS",
    highlight: true,
  },
  {
    id: 3,
    name: "ReactJS",
    highlight: true,
  },
  {
    id: 4,
    name: "Docker",
    highlight: false,
  },
  {
    id: 2,
    name: "Web 3.0",
    highlight: true,
  },
  {
    id: 5,
    name: "Tailwind",
    highlight: false,
  },
  {
    id: 6,
    name: "HTML 5",
    highlight: false,
  },
  {
    id: 7,
    name: "CSS 3",
    highlight: false,
  },
  {
    id: 8,
    name: "SCSS",
    highlight: false,
  },
  {
    id: 9,
    name: "Python",
    highlight: true,
  },
  {
    id: 10,
    name: "JavaScript",
    highlight: true,
  },
  {
    id: 30,
    name: "Monorepo",
    highlight: false,
  },
  {
    id: 11,
    name: "TypeScript",
    highlight: true,
  },
  {
    id: 12,
    name: "Shadcn UI",
    highlight: false,
  },
  {
    id: 13,
    name: "NodeJS",
    highlight: true,
  },
  {
    id: 14,
    name: "Express",
    highlight: true,
  },
  {
    id: 15,
    name: "AWS",
    highlight: false,
  },
  {
    id: 16,
    name: "Git",
    highlight: false,
  },
  {
    id: 17,
    name: "GitHub",
    highlight: false,
  },
  {
    id: 18,
    name: "Mongo DB",
    highlight: true,
  },
  {
    id: 19,
    name: "PostgreSQL",
    highlight: true,
  },
  {
    id: 20,
    name: "MySQL",
    highlight: false,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Devflow ",
    web: "https://devflow-js.vercel.app/",
    image:
      "/assets/images/projects/devflow.png",
    description: "A Full Stack clone of the popular website Stackoverflow",
    skills: ["Next.js","Typescript" ,"Shadcn UI", "Clerk"],
    difficulty: "Hard",
  },
  {
    id: 2,
    name: "Service Company",
    web: "https://itstellars.tech",
    image: "/assets/images/projects/service.png",
    description: "Created A Website for a Service based Company and Deployed it",
    skills: ["Nextjs", "Tailwindcss", "Email Integration", "AWS", "NGINX"],
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Chat-Application",
    web: "https://ichat-teal.vercel.app",
    image: "/assets/images/projects/chat.png",
    description: "A Real-time chat application with authentication and image sending features. Create groups or do one-on-one chat.",
    skills: ["Reactjs", "Tailwindcss", "Context API", "Node JS", "socket.io", "MongoDb"],
    difficulty: "Hard",
  },
  {
    id: 4,
    name: "Urban Marketer",
    web: "https://urbanmarketer.itstellars.tech/",
    image: "/assets/images/projects/urban.png",
    description: "Created A website for a digital marketing agency.",
    skills: ["NextJs", "Tailwindcss", "Typescript", "UI/UX"],
    difficulty: "Med",
  },
];

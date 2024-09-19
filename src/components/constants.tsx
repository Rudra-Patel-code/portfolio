import { Project, Skill } from "./interfaces";

export const skills: Skill[] = [
    {
        id: 1,
        name: "NextJS",
        highlight: true,
    },
    {
        id: 2,
        name: "Django",
        highlight: true,
    },
    {
        id: 3,
        name: "ReactJS",
        highlight: true,
    },
    {
        id: 4,
        name: "React Native",
        highlight: false,
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
        name: "Portfolio Website",
        web: "",
        image: "https://th.bing.com/th?id=OIP.99KSahoHTXzrxRqA2g4KVwHaFj&w=288&h=216&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Hellom orld this is my project with owl",
        skills: ["Django", "Next.js", "Shadcn UI", "PostgreSQL", "AWS"],
        difficulty: "hard",
    },
    {
        id: 2,
        name: "Portfolio Website",
        web: "",
        image: "/assets/images/projects/bg-2.png",
        description: "Hellom orld this is my project with owl",
        skills: ["Nextjs", "Shadcn", "Redux", "AWS"],
        difficulty: "easy",
    },
    {
        id: 3,
        name: "Portfolio Website",
        web: "",
        image: "/assets/images/projects/bg-2.png",
        description: "Hellom orld this is my project with owl",
        skills: ["Nextjs", "Shadcn", "Redux", "AWS"],
        difficulty: "mid",
    },
];

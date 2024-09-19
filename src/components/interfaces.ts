export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    web: string;
    difficulty: string;
    skills: string[];
}

export interface Skill {
    id: number,
    name: string,
    highlight: boolean,
}
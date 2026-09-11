import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: "alexandria",
        name: "Alexandria",
        summary:
        "A community digital library where readers discover books, write reviews, " +
        "and run book clubs together.",
        description:
        "Search covers roughly 28 million books through the Open Library API, with about " +
        "five million records imported and normalized into our own PostgreSQL schema. " +
        "Shelves, clubs, reviews, journals, and reading progress are modeled as relational " +
        "joins over that catalog, split across around fifteen Django apps behind a Next.js " +
        "frontend. Built with two other engineers for CISC 4900 at Brooklyn College.",
        techStack: ["Next.js", "Django", "PostgreSQL", "TailwindCSS", "Clerk"],
        githubRepo: "https://github.com/Mnajm6201/Alexandria",
    },
    
];
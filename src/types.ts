export interface Project {
  name: string;
  summary: string;
  description: string;
  techStack: Array<string>;
  liveUrl?: string;
  githubRepo?: string;
  id: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  bulletPoints: Array<string>;
  id: string;
}

export interface Education {
  school: string;
  degreeType: string;
  major: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface SkillGroup {
  label: string;
  items: Array<string>;
  id: string;
}

export interface Link {
    label: string;
    url: string;
}

export interface Profile {
    name: string;
    bio: string;
    location: string;
    links: Link[];
}

export type Section =
  | { kind: "projects"; heading: string; items: Project[] }
  | { kind: "education"; heading: string; items: Education[] }
  | { kind: "skills"; heading: string; items: SkillGroup[] }
  | { kind: "experience"; heading: string; items: Experience[] };

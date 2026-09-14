export interface Project {
  name: string;
  summary: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubRepo?: string;
  images?: Image[];
  metrics?: Metric[];
  id: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
  metrics?: Metric[];
  id: string;
}

export interface Education {
  school: string;
  degreeType: string;
  major: string;
  minor?: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
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

export interface Image {
    path: string;
    description: string;
}

export interface Metric {
    value: string;
    label: string;
}

export type Section =
  | { kind: "projects"; heading: string; items: Project[] }
  | { kind: "education"; heading: string; items: Education[] }
  | { kind: "skills"; heading: string; items: SkillGroup[] }
  | { kind: "experience"; heading: string; items: Experience[] };

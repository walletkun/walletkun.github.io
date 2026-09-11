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
    jobTitle: string;
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




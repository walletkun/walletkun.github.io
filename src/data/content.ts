import type { Education, Experience, Profile, Project, SkillGroup } from "../types";
import type { Section } from "../types";


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
  {
    id: "cicero",
    name: "Cicero",
    summary:
      "An AI study tool that turns uploaded documents into context-aware chat and flashcards.",
    description:
      "Users upload PDFs into per-subject workspaces. Documents are parsed, annotated by " +
      "LLaMA 3.1, and embedded into a Pinecone vector database, which backs a RAG pipeline " +
      "over OpenAI for chat and flashcard generation. Next.js frontend, Firebase for auth and " +
      "session persistence. Built with two others for the 2024 Ingenium STEM Hackathon.",
    techStack: [
      "Next.js",
      "React",
      "Firebase",
      "Pinecone",
      "OpenAI",
      "LLaMA 3.1",
      "Tailwind",
    ],
    githubRepo: "https://github.com/walletkun/CICERO",
  },
  {
    id: "emotionfy",
    name: "Emotionfy",
    summary:
      "Facial emotion recognition that maps a detected mood to a Spotify playlist.",
    description:
      "A CNN trained on the FER dataset — roughly 36,000 labeled grayscale images across seven " +
      "emotion classes — classifies a face, and the result maps to playlists pulled through the " +
      "Spotify Web API over OAuth 2.0. Flask backend, React frontend. I led the project and " +
      "built the backend, working with two others.",
    techStack: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "React",
      "Spotify Web API",
    ],
    githubRepo: "https://github.com/walletkun/Emotionfy",
  },
  {
    id: "email-agent",
    name: "Email Triage Agent",
    summary:
      "An in-progress agent that classifies incoming mail and researches what matters, " +
      "built from raw API calls instead of a framework.",
    description:
      "Five stages with Pydantic contracts between them, so each stage is swappable and the " +
      "boundaries are typed. Control flow is deterministic Python — the model returns a " +
      "category, code decides what that means — which keeps the pipeline debuggable. Every " +
      "stage writes to a per-run log directory so any run can be replayed. Ingest and " +
      "classification are working against .eml fixtures; the agent loop, synthesis, and live " +
      "Gmail are still to come.",
    techStack: ["Python", "Pydantic", "Gemini API"],
    githubRepo: "https://github.com/walletkun/Automate_Gmail_Agents",
  },
  {
    id: "surge",
    name: "Surge",
    summary:
      "A Linux CLI that pulls live system metrics into one interface and uses an LLM to " +
      "explain what they mean.",
    description:
      "Wraps the tools you'd otherwise run separately — top, iostat, netstat, curl — behind " +
      "one declarative command surface returning CPU, memory, disk I/O, and network metrics " +
      "in tabular form. Metric output is shaped into configurable formats sized for an LLM " +
      "context window, so a full system snapshot fits in a single prompt for anomaly " +
      "explanation. Built in Python with Typer and LangChain, containerized with Docker and " +
      "Prometheus. In active development.",
    techStack: ["Python", "Typer", "LangChain", "Docker", "Prometheus"],
    githubRepo: "https://github.com/SurgeCLI/Surge",
  },
];

export const education: Education[] = [
  {
    school: "Georgia Institute of Technology",
    degreeType: "Master of Science",
    major: "Computer Science",
    startDate: "Aug. 2026",
    endDate: "May 2027",
    id: "master",
  },
  {
    school: "Brooklyn College",
    degreeType: "Bachelor of Science",
    major: "Computer Science",
    startDate: "Sept. 2022",
    endDate: "May 2026",
    id: "bachelor",
  },
];

export const skills: SkillGroup[] = [
    { label: "languages", items: ["Python", "Javascript", "Typescript", "Java", "C/C++", "C#"], id: "language"},
    { label: "databases", items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"], id: "database"},
    { label: "cloud", items: ["AWS", "Microsoft Azure"], id: "cloud"},
]

export const experiences: Experience[] = [
  {
    id: "amazon",
    position: "Software Development Engineer Intern",
    company: "Amazon",
    startDate: "Sep 2026",
    endDate: "Dec 2026",
    bulletPoints: [
      "Incoming backend engineer intern to Amazon.",
    ],
  },
  {
    id: "odoo",
    position: "Full Stack Engineer",
    company: "Odoo",
    startDate: "Mar 2026",
    endDate: "Aug 2026",
    bulletPoints: [
      "Worked client-reported defects through a ticket queue, doing root cause analysis on client PostgreSQL databases to separate data-level corruption from framework bugs underneath.",
      "Rewrote a single-transaction update over a 9M-row table as a batched pipeline committing 1,000 records at a time, eliminating the statement timeouts that had blocked the job in production.",
      "Traced regressions across the JavaScript client and the Python ORM to isolate causes, then wrote one-time server actions to repair the inconsistent records left behind.",
      "Patched recurring defects in Odoo's core framework and submitted the fixes upstream, where they were reviewed and merged by the R&D team.",
    ],
  },
  {
    id: "erbuddy",
    position: "Full Stack Developer Intern",
    company: "ERBuddy Inc.",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    bulletPoints: [
      "Built and owned 15+ features end to end for a cross-platform React Native app, from the client screens through the API endpoints behind them.",
      "Restructured many-to-many caregiver data from one oversized table into dedicated composite join tables, removing a read path that funneled every lookup through a single table.",
      "Migrated the local database to AWS RDS and replaced shared credentials with IAM role-based access, giving the team a stable shared environment to test against.",
    ],
  },
  {
    id: "mlh-meta",
    position: "Production Engineering Fellow",
    company: "MLH × Meta",
    startDate: "Jun 2025",
    endDate: "Sep 2025",
    bulletPoints: [
      "Containerized and deployed a web application to a CentOS VPS with Docker and GitHub Actions, automating image build and container restart on every push to replace manual SSH releases.",
      "Instrumented the host with Grafana dashboards for CPU, memory, and disk, and used them to size container resource limits.",
    ],
  },
];

export const profile: Profile = {
    name: "Fei Lin",
    bio:
    "I work on the parts of a system you don't see — database work, data pipelines, " +
    "and the kind of debugging that starts with a client ticket and ends in a patch " +
    "merged upstream. Heading to Georgia Tech for an M.S. in Computer Science, and " +
    "joining Amazon this fall as a SDE intern.",
    location: "New York, NY",
    links: [
        {label: "Github", url: "https://github.com/walletkun"},
        {label: "LinkedIn", url: "https://www.linkedin.com/in/fei-lincs"},
        {label: "Email", url: "mailto:feilinpersonal@gmail.com"},
    ]
};

export const sections: Section[] = [
    { kind: "experience", heading: "Experience", items: experiences},
    { kind: "projects", heading: "Projects", items: projects},
    { kind: "education", heading: "Education", items: education},
    { kind: "skills", heading: "Skills", items: skills},
]
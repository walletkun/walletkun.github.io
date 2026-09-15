import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project}){
    return (
      <article key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <p>{project.description}</p>
        {project.metrics && (
          <dl className="metrics">
            {project.metrics.map((metric) => (
              <div key={metric.value}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul className="inline-list">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.githubRepo && <a href={project.githubRepo}>Source</a>}
      </article>
    );
}
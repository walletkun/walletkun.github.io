
import { profile, sections } from "./data/content";
function App() {

  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <p>{profile.location}</p>
        <ul className="inline-list">
          {profile.links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </header>
      {sections.map((section) => (
        <section key={section.kind}>
          <h2>{section.heading}</h2>
          {section.kind === "experience" && section.items.map((experience) => (
            <article key={experience.id}>
              <h3>{experience.company}, {experience.position}</h3>
              <p>{experience.startDate} - {experience.endDate}</p>
              <ul>
                {experience.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
          {section.kind === "projects" &&
            section.items.map((project) => (
              <article key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p>{project.description}</p>
                <ul className="inline-list">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.githubRepo && <a href={project.githubRepo}>Source</a>}
              </article>
            ))}
          {section.kind === "education" &&
            section.items.map((education) => (
              <article key={education.id}>
                <h3>{education.school}</h3>
                <p>{education.degreeType} in {education.major}</p>
                <p>{education.startDate} - {education.endDate}</p>
              </article>
            ))}
          {section.kind === "skills" &&
           section.items.map((skill) => (
            <article key={skill.id}>
              <h3>{skill.label}</h3>
              <ul className="inline-list">
                {skill.items.map((item) => (
                  <li key={item}> {item}</li>
                ))}
              </ul>
            </article>
           ))}
          
        </section>
      ))}
    </main>
  );
}

export default App

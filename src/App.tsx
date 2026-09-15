
import { EducationEntry } from "./components/EducationEntry";
import { ExperienceEntry } from "./components/ExperienceEntry";
import { ProjectCard } from "./components/ProjectCard";
import { Reveal } from "./components/Reveal";
import { SkillGroupList } from "./components/SkillGroupList";
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
          <Reveal>
          {section.kind === "experience" && section.items.map((experience) => (
            <ExperienceEntry key={experience.id} experience={experience} />
          ))}
          {section.kind === "projects" &&
            section.items.map((project) => (
             <ProjectCard key={project.id} project={project} />
            ))}
          {section.kind === "education" &&
            section.items.map((education) => (
              <EducationEntry key={education.id} education={education} />
            ))}
          {section.kind === "skills" &&
           section.items.map((skill) => (
              <SkillGroupList key={skill.id} skill={skill} />
           ))}
          </Reveal>
        </section>
      ))}
    </main>
  );
}

export default App

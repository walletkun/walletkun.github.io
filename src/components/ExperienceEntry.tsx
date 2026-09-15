import type { Experience } from "../types";

export function ExperienceEntry( { experience }: { experience: Experience}){
    return (
      <article key={experience.id}>
        <h3>
          {experience.company}, {experience.position}
        </h3>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
        <ul>
          {experience.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    );
}
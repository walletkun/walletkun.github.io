import type { Education } from "../types";

export function EducationEntry( { education } : { education : Education}) {
    return (
      <article key={education.id}>
        <h3>{education.school}</h3>
        <p>
          {education.degreeType} in {education.major}{" "}
          {education.minor && ` and minor in ${education.minor}`}
        </p>
        <p>
          {education.startDate} - {education.endDate}
        </p>
      </article>
    );
}
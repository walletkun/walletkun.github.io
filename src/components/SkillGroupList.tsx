import type { SkillGroup } from "../types";

export function SkillGroupList ( { skill } : { skill: SkillGroup}){
    return (
      <article key={skill.id}>
        <h3>{skill.label}</h3>
        <ul className="inline-list">
          {skill.items.map((item) => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      </article>
    );
}
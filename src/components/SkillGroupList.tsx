import { techIcons } from "../data/icon";
import type { SkillGroup } from "../types";

export function SkillGroupList ( { skill } : { skill: SkillGroup}){
    return (
      <article>
        <h3>{skill.label}</h3>
        <ul className="inline-list">
          {skill.items.map((item) => {
            const icon = techIcons[item]
            return (
              <li key={item}>
                {icon && <img src={icon} alt="" aria-hidden="true"/> }
                {item}
              </li>
            )
          })}
        </ul>
      </article>
    );
}
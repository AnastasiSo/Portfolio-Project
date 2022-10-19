import { FunctionComponent } from "react";
interface ISkillsGroupProps {
  title: string;
  skills: string[];
}
const SkillsGroup: FunctionComponent<ISkillsGroupProps> = ({
  title,
  skills,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="skills-list">
        {skills.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsGroup;

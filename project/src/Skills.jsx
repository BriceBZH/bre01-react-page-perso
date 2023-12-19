import Skill from './Skill.jsx';

const Skills = (props) => {
    const skills = props.data;
    return (
        <>
        <h2>Compétences</h2>
        <ul>
        {skills.map((skill, i) => <li key={i}>
            <Skill key={i} skill={skill} />
          </li>)}
        </ul>
        </>
  )
}

export default Skills;
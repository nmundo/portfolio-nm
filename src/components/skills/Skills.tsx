import React from 'react';
import './skills.css';

// TODO: Add more skills
const skillsList = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "Java",
    "Spring Boot",
    "SQL",
];

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <h1 className="heading">some things i know</h1>
        </div>
        <div className="skills-list">
            {skillsList.map((skill) => (
                <div key={skill} className="skills-item">
                    {skill}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';

const skills = [
  "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL",
  "Socket.IO", "HTML5", "CSS3", "Git & GitHub", "REST APIs", "UI/UX Design Basics"
];

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;

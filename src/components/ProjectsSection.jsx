import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: "Online Examination System",
    description:
      "A web application for conducting and managing online exams. Features include admin and student authentication, dashboards for managing exams and students, auto-grading for MCQs, manual grading for subjective questions, and a responsive user interface.",
    tech: ["React", "Node.js", "Express", "MySQL", "CSS"],
    github: "https://github.com/Jatin90196/Online-Examination-System",
    flipText: "Automates exams for institutions with ease."
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat platform supporting user authentication, one-to-one chat, real-time messaging with Socket.IO, message history, and dynamic avatars.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/Jatin90196/REALTIMECHATAPPLICATION",
    flipText: "Chat instantly with real-time updates."
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card-flip" key={idx}>
            <div className="project-card-inner">
              {/* Front Side */}
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((tech, tIdx) => (
                    <span className="tech-tag" key={tIdx}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              {/* Back Side */}
              <div className="project-card-back">
                <span className="flip-text">{project.flipText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

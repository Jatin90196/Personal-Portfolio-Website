import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-paragraph">
        I am a software engineer with a strong foundation in building modern, accessible, and high-performance web applications. After graduating from NSUT Delhi with a degree in Mathematics and Computing in 2024, I began my career as a Software Engineer Intern at LivSpace, where I gained hands-on experience in real-world software development. Currently, I am working as a Software Developer at Asan Innovators, where I focus on delivering robust solutions using the MERN stack (MongoDB, Express.js, React, and Node.js). I am passionate about continuous learning, effective collaboration, and creating products that make a meaningful impact.
      </p>
      <a
        href="https://drive.google.com/file/d/1onAy91eeR7p-Xoj8IvP_2X-7rJ-AKeak/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Download Resume
      </a>
    </section>
  );
}

export default AboutMe;

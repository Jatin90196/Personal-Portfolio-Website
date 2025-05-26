import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <p>
        Interested in working together or have a question?<br />
        Feel free to reach out!
      </p>
      <a
        href="mailto:jatin.your@email.com"
        className="email-button"
      >
        Email Me
      </a>
      <div className="social-links">
        <a
          href="https://github.com/Jatin90196"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;

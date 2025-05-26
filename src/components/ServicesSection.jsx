// src/components/ServicesSection.jsx
import React from 'react';

const services = [
  { title: "UI/UX Design", description: "Modern, user-friendly interfaces.", icon: "🎨" },
  { title: "MERN Stack", description: "Full-stack web applications.", icon: "💻" },
  { title: "Real-Time Apps", description: "Live chat, notifications, and more.", icon: "⚡" }
];

function ServicesSection() {
  return (
    <section className="services-section" id="service">
      <h2>Services</h2>
      <div className="services-cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

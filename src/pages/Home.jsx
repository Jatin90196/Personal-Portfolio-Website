import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import '../Home.css';

function Home() {
  return (
    <div className="main-container">
      {/* Navbar */}
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutMe />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
export default Home;




import React from 'react';
import Navbar from './Navbar'; 
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection} id="home">
      <Navbar /> 

      <div className={styles.heroContent}>
        <span className={styles.greeting}>Hello!</span>
        <h1>
          I&apos;m <span className={styles.highlight}>Jatin</span>
        </h1>
        <h2 className={styles.heroRole}>Software engineer</h2>
        <p className={styles.heroDescription}>
          Passionate about building modern, accessible, and high-performance web applications.
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={`${styles.ctaButton} ${styles.primary}`}>Portfolio</a>
          <a href="#contact" className={`${styles.ctaButton} ${styles.secondary}`}>Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

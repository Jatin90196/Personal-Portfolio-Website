import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="custom-navbar rounded-all">
      <div className="nav-links left">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
      </div>
      {/* <div className="nav-logo"></div> */}
      <div className="nav-links right">
        <a href="#resume">Resume</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

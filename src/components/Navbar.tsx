import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#service" className="nav-link">Service</a></li>
        </ul>
        
        <div className="nav-logo">
          <span className="logo-name">Portfolio</span>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#resume" className="nav-link">Resume</a></li>
          <li><a href="#projects" className="nav-link">Project</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

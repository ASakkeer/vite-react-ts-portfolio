import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'service', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#service" 
              className={`nav-link ${activeSection === 'service' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'service')}
            >
              Service
            </a>
          </li>
        </ul>
        
        <div className="nav-logo">
          <span className="logo-name">Portfolio</span>
        </div>
        
        <ul className="nav-menu">
          <li>
            <a 
              href="#resume" 
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'resume')}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Project
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

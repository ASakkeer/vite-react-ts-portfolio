import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-greeting">
              <span className="greeting-text">HELLO, I'M</span>
            </div>
            <h1 className="about-name">Sakkeer A</h1>
            <h2 className="about-title">Senior Software Engineer | React Native & Frontend Specialist</h2>
            <p className="about-description">
              Innovative and results-driven Software Engineer with <span className="highlight">8 years of experience</span> in frontend development and <span className="highlight">5+ years in React Native</span>. Skilled at building scalable, cross-platform applications with seamless user experiences. Passionate about solving complex challenges, leveraging AI-driven workflows, and shaping ideas into impactful digital solutions.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span className="placeholder-text">Your Image Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

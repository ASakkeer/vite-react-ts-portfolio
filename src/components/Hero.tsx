import React from 'react';
import heroPic from '../assets/images/heroPic.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hello-badge">
          <span>Hello!</span>
        </div>
        <div className="hero-intro">
          <h1 className="hero-name"><span className="hero-name-highlight">I'm</span> Sakkeer<span className="hero-name-highlight">,</span></h1>
          <h2 className="hero-title">Frontend Developer</h2>
        </div>
        <div className="hero-circle">
          <div className="circle-fill">
            <img src={heroPic} alt="Sakkeer" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

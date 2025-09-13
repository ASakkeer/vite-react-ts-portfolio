import React from 'react';
import heroPic from '../assets/images/heroPic.png';
import quotesImg from '../assets/images/quotes.png';

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
        <div className="hero-testimonial">
          <div className="quote-marks">
            <img src={quotesImg} alt="Quote marks" className="quotes-image" />
          </div>
          <div className="testimonial-text">
            <span className="highlight">Sakkeer's</span> exceptional frontend development ensures our website's success. <span className="highlight">Highly Recommended</span>
          </div>
        </div>
        <div className="hero-experience">
          <div className="stars">★★★★★</div>
          <div className="years">8 years</div>
          <div className="experience-text">EXPERIENCE</div>
        </div>
    </section>
  );
};

export default Hero;

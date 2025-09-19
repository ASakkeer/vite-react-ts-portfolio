import React from 'react';
import heroPic from '../assets/images/heroPic.png';
import quotesImg from '../assets/images/quotes.png';
import linesImg from '../assets/images/lines.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Section - Testimonial */}
        <div className="hero-left">
          <div className="hero-testimonial">
            <div className="quote-marks">
              <img src={quotesImg} alt="Quote marks" className="quotes-image" />
            </div>
            <div className="testimonial-text">
              <span className="highlight">Sakkeer's</span> exceptional frontend development ensures our website's success. <span className="highlight">Highly Recommended</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Main Content */}
        <div className="hero-middle">
          <div className="hello-badge">
            <span>Hello!</span>
            <img src={linesImg} alt="Lines decoration" className="hello-lines-decoration" />
          </div>
          <div className="hero-intro">
            <h1 className="hero-name"><span className="hero-name-highlight">I'm</span> Sakkeer<span className="hero-name-highlight">,</span></h1>
            <h2 className="hero-title">
              <span className="frontend-text">Frontend</span> Developer
              <img src={linesImg} alt="Lines decoration" className="lines-decoration" />
            </h2>
          </div>
          <div className="hero-circle">
            <div className="circle-fill">
              <img src={heroPic} alt="Sakkeer" className="hero-image" />
            </div>
          </div>
          <div className="hero-hire-button">
            <button className="hire-me-btn">
              <span className="btn-text">Hire Me</span>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>

        {/* Right Section - Experience */}
        <div className="hero-right">
          <div className="hero-experience">
            <div className="stars">★★★★★</div>
            <div className="years">8 years</div>
            <div className="experience-text">EXPERIENCE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

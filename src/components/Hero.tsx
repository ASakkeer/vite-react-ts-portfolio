import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing digital experiences</p>
        <button className="cta-button">Get In Touch</button>
      </div>
    </section>
  );
};

export default Hero;

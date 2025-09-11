import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="">
        <div className="hello-badge">
          <span>Hello!</span>
        </div>
        <div className="hero-intro">
          <h1 className="hero-name"><span className="hero-name-highlight">I'm</span> Sakkeer<span className="hero-name-highlight">,</span></h1>
          <h2 className="hero-title">Frontend Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

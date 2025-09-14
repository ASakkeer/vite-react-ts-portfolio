import React from 'react';
import resumePDF from '../assets/files/SeniorSoftwareEngineer.pdf';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <p className="resume-subtitle">Professional Experience & Background</p>
          <div className="resume-actions">
            <button className="resume-btn download-btn" onClick={() => window.open(resumePDF, '_blank')}>
              <span className="btn-icon">📄</span>
              <span className="btn-text">Download Resume</span>
              <div className="btn-shimmer"></div>
            </button>
          </div>
        </div>
        
        <div className="resume-content">
          <div className="resume-main">
            {/* <div className="personal-info">
              <h1 className="name">SAKKEER A</h1>
              <h2 className="title">Senior Software Engineer</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>29C, Maniya Thottam - 1, N.H Road, Marakadai, Coimbatore - 641001</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 7904341001</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:sakkeer.nsn@gmail.com">sakkeer.nsn@gmail.com</a>
                </div>
              </div>
            </div> */}

            <div className="resume-section">
              <h3 className="section-title">Personal Profile</h3>
              <p className="section-content">
                Experienced React Native Developer with expertise in building cross-platform mobile applications. 
                Proven ability to design, develop, and deploy intuitive user interfaces while ensuring seamless user experiences. 
                Skilled in utilizing JavaScript, React Native, and modern libraries for efficient mobile development. 
                Adept at integrating APIs, managing state with Redux, and implementing complex mobile app functionalities.
              </p>
            </div>

            <div className="resume-section">
              <h3 className="section-title">Work Experience</h3>
              <div className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">Senior Software Engineer</h4>
                  <span className="job-period">Aug 2020 – Present</span>
                </div>
                <div className="company">Atom8 IT Solutions (P) Ltd</div>
                <p className="job-description">
                  Crafting seamless cross-platform mobile experiences with cutting-edge React Native solutions.
                </p>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">L1 Full Stack Developer</h4>
                  <span className="job-period">Mar 2020 – Jun 2020</span>
                </div>
                <div className="company">Hartwin Tech Pvt Ltd</div>
                <p className="job-description">
                  Building dynamic end-to-end applications with robust front-to-back integration.
                </p>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">Frontend Developer</h4>
                  <span className="job-period">Sep 2017 – Feb 2020</span>
                </div>
                <div className="company">Brigita Solutions Pvt Ltd</div>
                <p className="job-description">
                  Delivering intuitive and responsive user interfaces with modern web technologies.
                </p>
              </div>
            </div>

            {/* <div className="resume-section">
              <h3 className="section-title">Key Projects</h3>
              <div className="project-item">
                <div className="project-header">
                  <h4 className="project-name">Vertiv</h4>
                  <span className="project-role">React Native Developer</span>
                  <span className="project-period">2021 – Present</span>
                </div>
                <p className="project-description">
                  A dedicated field service app for customer engineers to access call-logged ticket details. 
                  Real-time updates sync seamlessly with the CMS for efficient workflow and data accuracy.
                </p>
              </div>
              
              <div className="project-item">
                <div className="project-header">
                  <h4 className="project-name">TMPDI</h4>
                  <span className="project-role">React Native Developer</span>
                  <span className="project-period">2021 – Present</span>
                </div>
                <p className="project-description">
                  Car diagnosis app retrieving data via an OBD device. 
                  Analyzes vehicle status and generates a comprehensive PDI report.
                </p>
              </div>
            </div> */}
          </div>

          <div className="resume-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Education</h3>
              <div className="education-item">
                <h4 className="degree">B.Sc. Computer Science</h4>
                <div className="institution">K.S.G College of Arts & Science</div>
                <div className="education-period">2014 – 2017</div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Skills</h3>
              <div className="skills-container">
                <div className="skill-categories">
                  <div className="skill-category-item">
                    <div className="skill-category-title">Programming Languages</div>
                    <div className="skill-category-title">UI Technologies</div>
                    <div className="skill-category-title">Frameworks</div>
                    <div className="skill-category-title">Tools</div>
                    <div className="skill-category-title">Others</div>
                  </div>
                  <div className="skill-values">
                    <div className="skill-value">JavaScript</div>
                    <div className="skill-value">HTML, CSS, Bootstrap</div>
                    <div className="skill-value">React, React Native, Angular</div>
                    <div className="skill-value">VS Code, Git, SourceTree</div>
                    <div className="skill-value">REST APIs, Figma, JSX</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="sidebar-section">
              <h3 className="sidebar-title">Languages</h3>
              <div className="languages-list">
                <div className="language-item">
                  <span className="language-name">Tamil</span>
                  <span className="language-level">Fluent</span>
                </div>
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Intermediate</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Malayalam</span>
                  <span className="language-level">Intermediate</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Mongrov',
      role: 'React Native Developer',
      duration: '2020 – 2023',
      category: 'Messaging Platform',
      description: 'A messaging app for business that connects people to the information that they need. By bringing people together to work as one unified team, Mongrov transforms the way that organisations communicate.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebSocket'],
      status: 'Active',
      features: ['Real-time Messaging', 'Team Collaboration', 'Information Sharing', 'Business Integration']
    },
    {
      id: 2,
      name: 'TMPDI',
      role: 'React Native Developer',
      duration: '2023 – 2024',
      category: 'Automotive Diagnostics',
      description: 'Car diagnosis app using OBD device integration. Generates comprehensive PDI reports on vehicle health with real-time data analysis and detailed vehicle status monitoring.',
      technologies: ['React Native', 'OBD Integration', 'Bluetooth', 'Data Analytics'],
      status: 'Completed',
      features: ['OBD Device Integration', 'Vehicle Health Reports', 'Real-time Diagnostics', 'Data Visualization']
    },
    {
      id: 3,
      name: 'Vertiv',
      role: 'React Native Developer',
      duration: '2021 – Present',
      category: 'Field Service Management',
      description: 'A field service app for electronics products. Users can raise issue tickets, engineers can track customer locations via GPS, and fix product issues with comprehensive attendance and time tracking.',
      technologies: ['React Native', 'GPS Tracking', 'Ticket Management', 'Time Tracking'],
      status: 'Active',
      features: ['Issue Ticket System', 'GPS Location Tracking', 'Attendance Management', 'Service Time Tracking']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">Innovative solutions that drive business success</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-badge">
                  <span className="badge-text">{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <div className="features-list">
                    {project.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-tech">
                  <h4 className="tech-title">Technologies</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
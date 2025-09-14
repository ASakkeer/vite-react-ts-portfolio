import React from 'react';
import quotesImg from '../assets/images/quotes.png';

const Service: React.FC = () => {
  const services = [
    {
      title: 'Mobile App Development (React Native)',
      description: 'Building cross-platform mobile applications for Android and iOS with seamless performance, intuitive UI, and scalable architecture.'
    },
    {
      title: 'Web Development',
      description: 'Creating responsive, high-performance web applications using React, TypeScript, and modern frontend frameworks.'
    },
    {
      title: 'API Integration & Real-Time Solutions',
      description: 'Connecting apps with REST APIs, implementing real-time data sync, and ensuring smooth communication across platforms.'
    },
    {
      title: 'UI/UX Implementation',
      description: 'Transforming designs into functional, user-friendly interfaces with Figma, HTML, CSS, and modern UI frameworks.'
    },
    {
      title: 'Performance Optimization & Deployment',
      description: 'Streamlining workflows with CI/CD pipelines, testing strategies, and performance tuning for reliable production-ready apps.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Providing ongoing updates, troubleshooting, and feature enhancements to keep applications secure, efficient, and future-ready.'
    }
  ];

  return (
    <section id="service" className="service">
      <div className="service-container">
        <div className="service-header">
          <h2 className="service-title">My Services</h2>
          <p className="service-subtitle">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={quotesImg} alt="Service icon" className="service-icon-img" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

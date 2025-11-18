import React from 'react';
import mobileImg from '../assets/images/mobile.png';
import webImg from '../assets/images/web.png';
import apiImg from '../assets/images/api.png';
import uiuxImg from '../assets/images/ui-ux.png';
import performanceImg from '../assets/images/performance.png';
import maintenanceImg from '../assets/images/maintenance.png';

const Service: React.FC = () => {
  const services = [
    {
      title: 'Mobile App Development (React Native)',
      description: 'Building cross-platform mobile applications for Android and iOS with seamless performance, intuitive UI, and scalable architecture.',
      image: mobileImg
    },
    {
      title: 'Web Development',
      description: 'Creating responsive, high-performance web applications using React, TypeScript, and modern frontend frameworks.',
      image: webImg
    },
    {
      title: 'API Integration & Real-Time Solutions',
      description: 'Connecting apps with REST APIs, implementing real-time data sync, and ensuring smooth communication across platforms.',
      image: apiImg
    },
    {
      title: 'UI/UX Implementation',
      description: 'Transforming designs into functional, user-friendly interfaces with Figma, HTML, CSS, and modern UI frameworks.',
      image: uiuxImg
    },
    {
      title: 'Performance Optimization & Deployment',
      description: 'Streamlining workflows with CI/CD pipelines, testing strategies, and performance tuning for reliable production-ready apps.',
      image: performanceImg
    },
    {
      title: 'Maintenance & Support',
      description: 'Providing ongoing updates, troubleshooting, and feature enhancements to keep applications secure, efficient, and future-ready.',
      image: maintenanceImg
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
                <img src={service.image} alt={service.title} className="service-icon-img" />
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

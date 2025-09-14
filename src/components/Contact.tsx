import React, { useState } from 'react';
import * as emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_b8zlv6l';
      const templateId = 'template_45yogmq';
      const publicKey = 'O2cXyPaOgsWpx1QAW';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_email: 'sakkeer.nsn@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success - clear form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Me',
      description: 'Send me an email anytime',
      value: 'sakkeer.nsn@gmail.com',
      action: 'mailto:sakkeer.nsn@gmail.com'
    },
    {
      icon: '📱',
      title: 'Call Me',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+91 7904341001',
      action: 'tel:+917904341001'
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Available for remote work',
      value: 'Remote / On-site',
      action: '#'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/sakkeer27' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/ASakkeer' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Build Something Amazing Together</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something extraordinary that makes a difference.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.action} 
                  className="contact-method-card"
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="method-icon">
                    <span className="icon-emoji">{method.icon}</span>
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">{method.title}</h3>
                    <p className="method-description">{method.description}</p>
                    <span className="method-value">{method.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3 className="form-title">Send Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  <span className="btn-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="btn-icon">
                    {isSubmitting ? '⏳' : '→'}
                  </span>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-message success-message">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="status-message error-message">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p className="availability-text">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
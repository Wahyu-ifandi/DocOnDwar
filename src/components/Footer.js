import React from 'react';
import './Footer.css'; // CSS file to be created next

// Placeholder icons - replace with actual SVGs or icon font later
const footerIcons = {
  findDoctor: '🩺',
  careers: '💼',
  newsletter: '📧',
  // Add more as needed
};

const Footer = () => {
  const footerLinkSections = [
    {
      title: 'Quick Actions',
      links: [
        { text: 'Find a Doctor', icon: footerIcons.findDoctor, href: '#!' },
        { text: 'Explore Careers', icon: footerIcons.careers, href: '#!' },
        { text: 'Sign up for e-newsletters', icon: footerIcons.newsletter, href: '#!' },
      ],
      isPrimaryActions: true, // Special styling for this section
    },
    {
      title: 'For Patients',
      links: [
        { text: 'Book Appointment', href: '#!' },
        { text: 'Online Bill Pay', href: '#!' },
        { text: 'Patient Portal', href: '#!' },
        { text: 'Health Library', href: '#!' },
        { text: 'Visitor Information', href: '#!' },
      ],
    },
    {
      title: 'Our Organisation',
      links: [
        { text: 'About Us', href: '#!' },
        { text: 'News & Media', href: '#!' },
        { text: 'Research & Innovation', href: '#!' },
        { text: 'Contact Us', href: '#!' },
        { text: 'Giving to Medanta', href: '#!' }, 
      ],
    },
    {
      title: 'Legal & Policies',
      links: [
        { text: 'Terms of Use', href: '#!' },
        { text: 'Privacy Policy', href: '#!' },
        { text: 'Cookie Policy', href: '#!' },
        { text: 'Accessibility', href: '#!' },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-promo-banner">
        <div className="container promo-content">
          {/* Inspired by the 'Have 2X the impact!' banner */}
          <span className="promo-icon">💖</span> {/* Placeholder Icon */}
          <h3 className="promo-title">Partner with Us for a Healthier Tomorrow!</h3>
          <p className="promo-text">
            Your contribution can make a significant difference in advancing healthcare research and patient care.
          </p>
          <button className="promo-button">Donate Today</button>
        </div>
      </div>

      <div className="footer-links-container container">
        {footerLinkSections.map((section) => (
          <div 
            key={section.title} 
            className={`footer-column ${section.isPrimaryActions ? 'primary-actions-column' : ''}`}
          >
            <h4 className="footer-column-title">{section.title}</h4>
            <ul className="footer-links-list">
              {section.links.map((link) => (
                <li key={link.text} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.icon && <span className="footer-link-icon">{link.icon}</span>}
                    {link.text}
                    {section.isPrimaryActions && <span className="action-arrow">&rsaquo;</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-content">
          <p>&copy; {new Date().getFullYear()} Medanta Inspired Healthcare. All Rights Reserved.</p>
          {/* Add social media icons or other utility links here if needed */}
          <div className="footer-social-links">
            {/* Example: <a href="#!">FB</a> <a href="#!">TW</a> */}
          </div>
        </div>
      </div>
      {/* Floating Feedback Button - can be a separate component if complex */}
      <button className="floating-feedback-button">Feedback</button>
    </footer>
  );
};

export default Footer; 
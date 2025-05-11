import React from 'react';
import './HeroSection.css'; // We will create this CSS file next

// Placeholder for hero image - ideally a background image in CSS
// Placeholder for Newsweek award image

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-image-placeholder">
          </div>
          <div className="hero-text-content">
            <div className="quote-section" style={{marginTop: '2.5rem'}}>
              <div style={{
                background: '#fff',
                borderLeft: '6px solid #e74c3c',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(231,76,60,0.08)',
                maxWidth: '600px',
                margin: '0 auto',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  left: '-2.2rem',
                  top: '-1.2rem',
                  fontSize: '3rem',
                  color: '#e74c3c',
                  fontWeight: 700,
                  opacity: 0.18
                }}>&#8220;</span>
                <p style={{
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: '#333',
                  margin: 0,
                  lineHeight: 1.7
                }}>
                  DocOnDwaar's patient-first approach allows teams of super specialist doctors to collaborate seamlessly and arrive at the best possible treatment, customised for each patient in line with our guiding philosophy <span style={{color: '#e74c3c', fontWeight: 600}}>'Har Ek Jaan Anmol'</span>, meaning <span style={{color: '#e74c3c', fontWeight: 600}}>'Every Life is Invaluable'</span>.
                </p>
                <span style={{
                  position: 'absolute',
                  right: '-2.2rem',
                  bottom: '-1.2rem',
                  fontSize: '3rem',
                  color: '#e74c3c',
                  fontWeight: 700,
                  opacity: 0.18
                }}>&#8221;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-action-buttons">
        <button className="fab">💡</button> {/* Placeholder Idea/Enquiry Icon */}
        <button className="fab">🔗</button> {/* Placeholder Share Icon */}
      </div>
    </div>
  );
};

export default HeroSection; 
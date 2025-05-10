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
            {/* This div will have a background image styled in CSS */}
            {/* You can add an <img> tag here if preferred, or a component for Dr. Trehan's image */}
            <img src="https://via.placeholder.com/400x500.png?text=Dr.+Naresh+Trehan" alt="Dr. Naresh Trehan" className="doctor-image" />
          </div>
          <div className="hero-text-content">
            <div className="search-doctors-specialities">
              <input 
                type="text" 
                placeholder="Search for Doctors and Specialities" 
                className="search-input"
              />
              <button className="search-button">&#128269;</button> {/* Search Icon */}
            </div>
            <div className="quote-section">
              <p className="quote-mark">&#8220;</p>
              <p className="quote-text">
                Medanta's patient-first approach allows teams of super specialist doctors to collaborate seamlessly and arrive at the best possible treatment, customised for each patient in line with our guiding philosophy <span className="quote-highlight">'Har Ek Jaan Anmol'</span>, meaning <span className="quote-highlight">'Every Life is Invaluable'</span>.
              </p>
              <p className="quote-mark quote-mark-right">&#8221;</p>
              <p className="quote-author">Dr. Naresh Trehan</p>
              <p className="quote-author-title">Chairman and Managing Director</p>
            </div>
          </div>
        </div>
        <div className="awards-section">
          {/* Placeholder for Newsweek award image - ideally an <img> tag */}
          <img src="https://via.placeholder.com/150x200.png?text=World's+Best+Hospitals+2025" alt="World's Best Hospitals 2025 Newsweek" className="award-image"/>
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
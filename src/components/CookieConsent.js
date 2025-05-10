import React, { useState } from 'react';
import './CookieConsent.css'; // We will create this CSS file next

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  const handleAccept = () => {
    // Here you would typically set a cookie or use localStorage
    // to remember the user's choice.
    console.log('Cookies accepted');
    setVisible(false);
  };

  const handleLearnMore = () => {
    // Link to a cookie policy page or show more info
    console.log('Learn more about cookies');
    // Example: window.location.href = '/cookie-policy';
  };

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content container">
        <p className="cookie-text">
          This website uses cookies. To accept all cookies or adjust your cookie preferences, click the links to the right.{/* Modify text as per actual image */}
          <a href="#!" onClick={handleLearnMore} className="learn-more-link">Learn more</a>
        </p>
        <button onClick={handleAccept} className="accept-button">Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent; 
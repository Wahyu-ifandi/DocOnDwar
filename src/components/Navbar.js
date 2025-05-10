import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css'; // We will create this CSS file next

// Placeholder for logo - ideally an SVG or image
const Logo = () => (
  <div className="logo">
    {/* Inspired by Medanta logo style */}
    <span className="logo-plus">+</span>
    <Link to="/" className="logo-text-link"><span className="logo-text">DocOnDwaar</span></Link>
  </div>
);

const Navbar = () => {
  const navLinks = [
    { title: 'Locations', dropdown: true },
    { title: 'Speciality', dropdown: true },
    { title: 'Health Library', dropdown: true },
    { title: 'Services', dropdown: true },
    { title: 'International Patients', dropdown: true },
    { title: 'Careers', dropdown: false },
    { title: 'Contact Us', dropdown: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Logo />
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.title} className="nav-item">
              <a href="#!" className="nav-link">
                {link.title}
                {link.dropdown && <span className="dropdown-arrow"> &#9662;</span>}
              </a>
              {/* Dropdown menu structure can be added here later */}
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link to="/auth" className="nav-button login-button">Login</Link>
          <button className="nav-button feedback-icon-button">💬</button> {/* Placeholder for feedback icon */}
          <button className="nav-button request-callback-button">Request Call Back</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
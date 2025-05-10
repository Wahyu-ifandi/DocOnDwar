import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css"; // We will create this CSS file next

// Placeholder for logo - ideally an SVG or image
const Logo = () => (
  <div className="logo">
    {/* Inspired by Medanta logo style */}
    <span className="logo-plus">+</span>
    <Link to="/" className="logo-text-link">
      <span className="logo-text">DocOnDwaar</span>
    </Link>
  </div>
);

const SpecialityDropdown = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const specialities = [
    { name: "Cardiac Care", icon: "❤️" },
    { name: "Cancer Care", icon: "🎗️" },
    { name: "Neurosciences", icon: "🧠" },
    { name: "Gastro Sciences", icon: "🔬" },
    { name: "Renal Care", icon: "💧" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSpecialityClick = (speciality) => {
    navigate(`/speciality/${speciality}`);
    onClose();
  };

  const handleViewAll = () => {
    navigate("/specialities");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="speciality-dropdown" ref={dropdownRef}>
      <div className="speciality-dropdown-content">
        {specialities.map((spec) => (
          <div
            key={spec.name}
            className="speciality-dropdown-item"
            onClick={() => handleSpecialityClick(spec.name)}
          >
            <span className="speciality-icon">{spec.icon}</span>
            <span className="speciality-name">{spec.name}</span>
            <span className="speciality-arrow">❯</span>
          </div>
        ))}
        <div className="speciality-dropdown-divider"></div>
        <div
          className="speciality-dropdown-item view-all"
          onClick={handleViewAll}
        >
          <span className="speciality-name">View All Specialities</span>
          <span className="speciality-arrow">❯</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { title: "Locations", dropdown: true },
    { title: "Speciality", dropdown: true },
    { title: "Health Library", dropdown: true },
    { title: "Services", dropdown: true },
    { title: "International Patients", dropdown: true },
    { title: "Careers", dropdown: false },
    { title: "Contact Us", dropdown: true },
  ];

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Logo />
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.title} className="nav-item">
              <a
                href="#!"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (link.dropdown) {
                    handleDropdownToggle(link.title);
                  }
                }}
              >
                {link.title}
                {link.dropdown && (
                  <span className="dropdown-arrow"> &#9662;</span>
                )}
              </a>
              {link.title === "Speciality" && (
                <SpecialityDropdown
                  isOpen={activeDropdown === "Speciality"}
                  onClose={() => setActiveDropdown(null)}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link to="/auth" className="nav-button login-button">
            Login
          </Link>
          <button className="nav-button feedback-icon-button">💬</button>{" "}
          {/* Placeholder for feedback icon */}
          <button className="nav-button request-callback-button">
            Request Call Back
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

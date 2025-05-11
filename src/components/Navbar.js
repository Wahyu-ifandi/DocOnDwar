import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import Link for navigation and useLocation
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

const Navbar = ({ user, onLogout }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation(); // Get current route
  const [loading, setLoading] = useState(false);

  const navLinks = [
    { title: "Locations", dropdown: false, external: true, href: "https://findclinic.onrender.com/" },
    { title: "Speciality", dropdown: true },
    { title: "Health Library", dropdown: false, to: "/health-library" },
    // { title: "Services", dropdown: true },
    { title: "Contact Us", dropdown: false, to: "/contact" },
  ];

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleFeedbackClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.open('https://ai-doctor-voicebot-9.onrender.com/', '_blank');
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {loading && (
        <div className="preloader-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <nav className="navbar">
        <div className="navbar-container container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{flex: '0 0 auto', display: 'flex', alignItems: 'center'}}>
            <Logo />
          </div>
          <ul className="nav-menu" style={{flex: '1 1 auto', justifyContent: 'center', display: 'flex'}}>
            {navLinks.map((link) => (
              <li key={link.title} className="nav-item">
                {link.external ? (
                  <a href={link.href} className="nav-link" target="_blank" rel="noopener noreferrer">{link.title}</a>
                ) : link.to ? (
                  <Link to={link.to} className="nav-link">
                    {link.title}
                  </Link>
                ) : (
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
                )}
                {link.title === "Speciality" && (
                  <SpecialityDropdown
                    isOpen={activeDropdown === "Speciality"}
                    onClose={() => setActiveDropdown(null)}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions" style={{flex: '0 0 auto', display: 'flex', alignItems: 'center'}}>
            {user ? (
              <div className="user-avatar-dropdown" style={{position: 'relative'}}>
                <button
                  className="user-avatar-btn"
                  style={{
                    background: '#e74c3c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 44,
                    height: 44,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title={user.name || 'Account'}
                  onClick={() => setActiveDropdown(activeDropdown === 'user' ? null : 'user')}
                >
                  {user.name
                    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)
                    : 'U'}
                </button>
                {activeDropdown === 'user' && (
                  <div className="user-dropdown-menu" style={{position: 'absolute', right: 0, top: 50, background: '#fff', border: '1px solid #eee', borderRadius: 8, boxShadow: '0 2px 8px rgba(44,62,80,0.10)', minWidth: 120, zIndex: 10}}>
                    <button style={{background: 'none', border: 'none', color: '#e74c3c', padding: '10px 18px', width: '100%', textAlign: 'left', cursor: 'pointer', fontWeight: 600}} onClick={onLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth" className="nav-button login-button">
                Login
              </Link>
            )}
            <button
              className="nav-button feedback-icon-button"
              onClick={handleFeedbackClick}
            >
              💬
            </button>
            <button
              className="nav-button request-callback-button"
              onClick={() => window.open('https://video-call-app-1-k2sq.onrender.com/', '_blank')}
            >
              Request Video Callback
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

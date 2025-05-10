import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllSpecialities.css";

const SpecialityCard = ({ speciality, icon, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/speciality/${speciality}`);
  };

  return (
    <div className="speciality-card custom-card" onClick={handleClick}>
      <div className="speciality-card-icon custom-icon">{icon}</div>
      <div className="speciality-card-title">{speciality}</div>
      <div className="speciality-card-action-row">
        <span className="know-more-text">Know More</span>
        <span className="know-more-btn">
          <span className="arrow">&#8594;</span>
        </span>
      </div>
    </div>
  );
};

const AllSpecialities = () => {
  const specialitiesData = [
    {
      speciality: "Cardiac Care",
      icon: "❤️",
    },
    {
      speciality: "Cancer Care",
      icon: "🎗️",
    },
    {
      speciality: "Neurosciences",
      icon: "🧠",
    },
    {
      speciality: "Gastro Sciences",
      icon: "🔬",
    },
    {
      speciality: "Renal Care",
      icon: "💧",
    },
    {
      speciality: "Emergency",
      icon: "🚑",
    },
    {
      speciality: "Liver Transplant",
      icon: "🫀",
    },
    {
      speciality: "Bone Marrow Transplant",
      icon: "🦴",
    },
  ];

  return (
    <div className="all-specialities-page">
      <div className="all-specialities-header">
        <h1>Our Specialities</h1>
        <p>
          Comprehensive healthcare services across various medical disciplines
        </p>
      </div>
      <div className="specialities-grid">
        {specialitiesData.map((item) => (
          <SpecialityCard key={item.speciality} {...item} />
        ))}
      </div>

      <footer className="specialities-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@docondwaar.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123 Medical Center, Healthcare City</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/doctors">Our Doctors</a>
              </li>
              <li>
                <a href="/appointments">Book Appointment</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DocOnDwaar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AllSpecialities;

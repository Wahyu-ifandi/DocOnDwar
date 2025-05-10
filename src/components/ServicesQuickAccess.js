import React from 'react';
import './ServicesQuickAccess.css';

// Mock icons - ideally, these would be SVGs or an icon font library
const iconMap = {
  "Book Appointment": "📅",
  "Second Opinion": "👨‍⚕️",
  "Get Health Checkup": "🩺",
  "Book A Virtual Consultation": "💻",
  "Homecare": "🏠",
  "Book a Test": "🧪",
};

const ServiceButton = ({ service }) => (
  <button className={`service-button ${service.primary ? 'primary' : ''}`}>
    <span className="service-icon">{iconMap[service.name] || "❓"}</span>
    <span className="service-name">{service.name}</span>
  </button>
);

const ServicesQuickAccess = () => {
  const services = [
    { name: "Book Appointment", primary: true },
    { name: "Second Opinion" },
    { name: "Get Health Checkup" },
    { name: "Book A Virtual Consultation" },
    { name: "Homecare" },
    { name: "Book a Test", primary: true }, // This is also prominent
  ];

  return (
    <div className="services-quick-access">
      <div className="services-container container">
        {services.map((service) => (
          <ServiceButton key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesQuickAccess;

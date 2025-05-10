import React from 'react';
import './SpecialitiesSection.css'; // We will create this CSS file next

// Mock icon for speciality item - ideally an SVG or an icon font
const SpecialityItem = ({ name, icon }) => (
  <div className="speciality-item">
    <span className="speciality-icon">{icon || '⚕️'}</span> {/* Placeholder icon */}
    <span className="speciality-name">{name}</span>
    <span className="speciality-arrow">❯</span>
  </div>
);

const SpecialitiesSection = () => {
  // Mock data for specialities
  const specialities = [
    { name: 'Cardiac Care', icon: '❤️' }, // Example, using emoji, replace with actual icons
    { name: 'Orthopaedics' },
    { name: 'Neurosciences' },
    { name: 'Oncology' },
    { name: 'Nephrology' },
    // Add more specialities as needed
  ];

  return (
    <div className="specialities-section container">
      <div className="specialities-header">
        <h2 className="section-title">Specialities</h2>
        <div className="search-by-filter">
          <span>Search By</span>
          {/* Placeholder for a dropdown or other filter control */}
          <select className="filter-dropdown">
            <option>All Specialities</option>
            {/* More options here */}
          </select>
        </div>
      </div>
      <div className="specialities-grid">
        {specialities.map((spec) => (
          <SpecialityItem key={spec.name} name={spec.name} icon={spec.icon} />
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesSection; 
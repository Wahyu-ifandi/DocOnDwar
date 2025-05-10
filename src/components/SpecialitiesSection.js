import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialitiesSection.css"; // We will create this CSS file next

// Mock icon for speciality item - ideally an SVG or an icon font
const SpecialityItem = ({ name, icon, onClick }) => (
  <div className="speciality-item" onClick={onClick}>
    <span className="speciality-icon">{icon || "⚕️"}</span>{" "}
    {/* Placeholder icon */}
    <span className="speciality-name">{name}</span>
    <span className="speciality-arrow">❯</span>
  </div>
);

const SpecialitiesSection = () => {
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] =
    useState("All Specialities");

  // Mock data for specialities
  const specialities = [
    { name: "Cardiac Care", icon: "❤️" }, // Example, using emoji, replace with actual icons
    { name: "Cancer Care", icon: "🎗️" },
    { name: "Neurosciences", icon: "🧠" },
    { name: "Gastro Sciences", icon: "🔬" },
    { name: "Renal Care", icon: "💧" },
    // Add more specialities as needed
  ];

  const handleSpecialityClick = (speciality) => {
    navigate(`/speciality/${speciality}`);
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setSelectedSpeciality(value);
    if (value !== "All Specialities") {
      handleSpecialityClick(value);
    }
  };

  const filteredSpecialities =
    selectedSpeciality === "All Specialities"
      ? specialities
      : specialities.filter((spec) => spec.name === selectedSpeciality);

  return (
    <div className="specialities-section container">
      <div className="specialities-header">
        <h2 className="section-title">Specialities</h2>
        <div className="search-by-filter">
          <span>Search By</span>
          <select
            className="filter-dropdown"
            value={selectedSpeciality}
            onChange={handleDropdownChange}
          >
            <option>All Specialities</option>
            {specialities.map((spec) => (
              <option key={spec.name} value={spec.name}>
                {spec.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="specialities-grid">
        {filteredSpecialities.map((spec) => (
          <SpecialityItem
            key={spec.name}
            name={spec.name}
            icon={spec.icon}
            onClick={() => handleSpecialityClick(spec.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesSection;

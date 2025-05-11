import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialitiesSection.css';

const SpecialitiesSection = ({ searchTerm = '' }) => {
  const navigate = useNavigate();

  const specialities = [
    {
      name: "Cardiac Care",
      icon: "❤️",
      description: "Comprehensive care for heart and cardiovascular conditions",
      keywords: ["heart", "cardiac", "cardiovascular", "chest pain", "hypertension"]
    },
    {
      name: "Cancer Care",
      icon: "🎗️",
      description: "Advanced treatment and care for various types of cancer",
      keywords: ["cancer", "oncology", "tumor", "chemotherapy", "radiation"]
    },
    {
      name: "Neurosciences",
      icon: "🧠",
      description: "Expert care for brain and nervous system disorders",
      keywords: ["brain", "neurology", "nervous system", "stroke", "epilepsy"]
    },
    {
      name: "Gastro Sciences",
      icon: "🔬",
      description: "Specialized care for digestive system disorders",
      keywords: ["digestive", "gastro", "stomach", "liver", "intestine"]
    },
    {
      name: "Renal Care",
      icon: "💧",
      description: "Comprehensive kidney care and treatment",
      keywords: ["kidney", "renal", "dialysis", "nephrology", "urinary"]
    },
    {
      name: "Orthopedics",
      icon: "🦴",
      description: "Expert care for bones, joints, and musculoskeletal system",
      keywords: ["bone", "joint", "orthopedic", "fracture", "arthritis"]
    },
    {
      name: "Dermatology",
      icon: "👨‍⚕️",
      description: "Specialized care for skin, hair, and nail conditions",
      keywords: ["skin", "dermatology", "rash", "acne", "hair"]
    },
    {
      name: "Pediatrics",
      icon: "👶",
      description: "Comprehensive healthcare for children and adolescents",
      keywords: ["child", "pediatric", "baby", "adolescent", "children"]
    }
  ];

  const filteredSpecialities = specialities.filter(speciality => {
    const searchLower = searchTerm.toLowerCase();
    return (
      speciality.name.toLowerCase().includes(searchLower) ||
      speciality.description.toLowerCase().includes(searchLower) ||
      speciality.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  const handleSpecialityClick = (speciality) => {
    navigate(`/speciality/${speciality.name}`);
  };

  return (
    <section className="specialities-section">
      <div className="container">
        <h2 className="section-title">Our Specialities</h2>
        <p className="section-description">
          Comprehensive healthcare services across various medical disciplines
        </p>
        <div className="specialities-grid">
          {filteredSpecialities.map((speciality) => (
            <div
              key={speciality.name}
              className="speciality-card"
              onClick={() => handleSpecialityClick(speciality)}
            >
              <div className="speciality-icon">{speciality.icon}</div>
              <h3>{speciality.name}</h3>
              <p>{speciality.description}</p>
              <div className="speciality-keywords">
                {speciality.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">{keyword}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {filteredSpecialities.length === 0 && (
          <div className="no-results">
            <p>No specialties found matching your search.</p>
            <p>Try different keywords or browse all specialties.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialitiesSection;

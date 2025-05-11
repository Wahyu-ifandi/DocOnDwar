import React, { useState } from 'react';
import './HealthLibrary.css';

const diseaseData = {
  "Common Cold": {
    description: "A viral infection of the upper respiratory tract. Symptoms include runny nose, sneezing, sore throat, and cough.",
    treatment: [
      "Rest and fluids",
      "Over-the-counter medicines (e.g., paracetamol for fever, decongestants)",
      "No antibiotics (since it's viral)"
    ],
    icon: "🤧"
  },
  "Influenza (Flu)": {
    description: "A contagious respiratory illness caused by influenza viruses. Symptoms include fever, chills, muscle aches, and fatigue.",
    treatment: [
      "Antiviral drugs (e.g., oseltamivir) if diagnosed early",
      "Rest, fluids, and symptomatic relief (like fever reducers)"
    ],
    icon: "🤒"
  },
  "Diabetes (Type 2)": {
    description: "A chronic condition where the body becomes resistant to insulin or doesn't produce enough, leading to high blood sugar levels.",
    treatment: [
      "Lifestyle changes (healthy diet, exercise)",
      "Oral medications (e.g., metformin)",
      "Insulin therapy (in some cases)"
    ],
    icon: "🩸"
  },
  "Hypertension": {
    description: "A chronic condition where the force of blood against artery walls is too high, increasing heart disease risk.",
    treatment: [
      "Lifestyle changes (low-sodium diet, regular exercise)",
      "Medications (e.g., ACE inhibitors, beta-blockers)"
    ],
    icon: "❤️"
  },
  "Asthma": {
    description: "A chronic disease that inflames and narrows the airways, causing wheezing, shortness of breath, and coughing.",
    treatment: [
      "Inhalers (bronchodilators and corticosteroids)",
      "Avoiding triggers like smoke, pollen",
      "Long-term control medications"
    ],
    icon: "🫁"
  },
  "Tuberculosis (TB)": {
    description: "A bacterial infection caused by Mycobacterium tuberculosis, usually affecting the lungs.",
    treatment: [
      "Long-term antibiotic therapy (e.g., isoniazid, rifampin) for 6–9 months",
      "Regular follow-up and monitoring"
    ],
    icon: "🦠"
  },
  "Malaria": {
    description: "A mosquito-borne disease caused by Plasmodium parasites. Symptoms include fever, chills, and sweating.",
    treatment: [
      "Antimalarial medications (e.g., artemisinin-based combination therapies)",
      "Preventive measures (mosquito nets, repellents)"
    ],
    icon: "🦟"
  },
  "COVID-19": {
    description: "A viral respiratory illness caused by the SARS-CoV-2 virus. Symptoms range from mild (fever, cough) to severe (difficulty breathing).",
    treatment: [
      "Supportive care for mild cases (fluids, rest)",
      "Antivirals (e.g., remdesivir) and oxygen therapy for severe cases",
      "Vaccination for prevention"
    ],
    icon: "😷"
  }
};

const specialties = [
  {
    name: "Cardiology",
    description: "Specializes in heart and cardiovascular system disorders",
    icon: "❤️"
  },
  {
    name: "Neurology",
    description: "Focuses on disorders of the nervous system",
    icon: "🧠"
  },
  {
    name: "Pulmonology",
    description: "Deals with respiratory system diseases",
    icon: "🫁"
  },
  {
    name: "Endocrinology",
    description: "Specializes in hormonal and metabolic disorders",
    icon: "⚖️"
  },
  {
    name: "Gastroenterology",
    description: "Focuses on digestive system disorders",
    icon: "🔬"
  },
  {
    name: "Dermatology",
    description: "Deals with skin, hair, and nail conditions",
    icon: "👨‍⚕️"
  }
];

export default function HealthLibrary() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const filteredDiseases = Object.entries(diseaseData);

  return (
    <div className="health-library-container">
      <h2 className="hl-title">Health Library</h2>
      <div className="library-content">
        <div className="diseases-section">
          <h3 className="section-title">Common Diseases</h3>
          <div className="disease-grid">
            {filteredDiseases.map(([name, data]) => (
              <div
                key={name}
                className="disease-card"
                onClick={() => setSelectedDisease(name)}
              >
                <div className="disease-icon">{data.icon}</div>
                <h4>{name}</h4>
                <p>{data.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
        <div className="specialties-section">
          <h3 className="section-title">Medical Specialties</h3>
          <div className="specialties-grid">
            {specialties.map((specialty) => (
              <div key={specialty.name} className="specialty-card">
                <div className="specialty-icon">{specialty.icon}</div>
                <h4>{specialty.name}</h4>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedDisease && (
        <div className="disease-modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setSelectedDisease(null)}>×</button>
            <div className="modal-header">
              <span className="disease-icon">{diseaseData[selectedDisease].icon}</span>
              <h3>{selectedDisease}</h3>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h4>Description</h4>
                <p>{diseaseData[selectedDisease].description}</p>
              </div>
              <div className="modal-section">
                <h4>Treatment</h4>
                <ul>
                  {diseaseData[selectedDisease].treatment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
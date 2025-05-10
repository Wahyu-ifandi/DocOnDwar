import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SpecialityDetails.css";

const DiseaseCard = ({ title, description, symptoms, icon, treatments }) => (
  <div className="disease-card">
    <div className="disease-icon">{icon}</div>
    <h3>{title}</h3>
    <p className="disease-description">{description}</p>
    <div className="symptoms-list">
      <h4>Common Symptoms:</h4>
      <ul>
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
    <div className="treatments-list">
      <h4>Available Treatments:</h4>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index}>{treatment}</li>
        ))}
      </ul>
    </div>
    <button className="learn-more-button">Learn More</button>
  </div>
);

const SpecialityDetails = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // Speciality-specific data
  const specialityData = {
    "Cardiac Care": {
      icon: "❤️",
      description:
        "Comprehensive cardiac care services for all heart-related conditions",
      expertise: [
        "Cardiac Surgery",
        "Interventional Cardiology",
        "Cardiac Imaging",
      ],
      diseases: [
        {
          title: "Coronary Artery Disease",
          description:
            "A condition where the blood vessels that supply blood to the heart become narrowed or blocked.",
          symptoms: [
            "Chest pain",
            "Shortness of breath",
            "Fatigue",
            "Irregular heartbeat",
          ],
          treatments: [
            "Angioplasty",
            "Coronary Bypass Surgery",
            "Medication Management",
          ],
          icon: "🫀",
        },
        {
          title: "Heart Failure",
          description:
            "A condition where the heart cannot pump blood effectively to meet the body's needs.",
          symptoms: [
            "Swelling in legs",
            "Difficulty breathing",
            "Persistent cough",
            "Rapid weight gain",
          ],
          treatments: [
            "Medication Therapy",
            "Lifestyle Changes",
            "Device Implantation",
          ],
          icon: "💓",
        },
        {
          title: "Arrhythmia",
          description:
            "Irregular heartbeat patterns that can affect the heart's ability to pump blood effectively.",
          symptoms: [
            "Irregular pulse",
            "Dizziness",
            "Fainting",
            "Chest discomfort",
          ],
          treatments: [
            "Ablation Therapy",
            "Pacemaker Implantation",
            "Anti-arrhythmic Drugs",
          ],
          icon: "💗",
        },
      ],
    },
    "Cancer Care": {
      icon: "🎗️",
      description: "Advanced cancer treatment and care services",
      expertise: [
        "Medical Oncology",
        "Radiation Oncology",
        "Surgical Oncology",
      ],
      diseases: [
        {
          title: "Breast Cancer",
          description:
            "A type of cancer that forms in the cells of the breasts.",
          symptoms: [
            "Lump in breast",
            "Breast pain",
            "Nipple discharge",
            "Skin changes",
          ],
          treatments: [
            "Surgery",
            "Chemotherapy",
            "Radiation Therapy",
            "Hormone Therapy",
          ],
          icon: "🎗️",
        },
        {
          title: "Lung Cancer",
          description:
            "Cancer that begins in the lungs and may spread to lymph nodes or other organs.",
          symptoms: [
            "Persistent cough",
            "Chest pain",
            "Shortness of breath",
            "Weight loss",
          ],
          treatments: [
            "Surgery",
            "Chemotherapy",
            "Radiation Therapy",
            "Targeted Therapy",
          ],
          icon: "🫁",
        },
        {
          title: "Colorectal Cancer",
          description:
            "Cancer that affects the colon or rectum, parts of the digestive system.",
          symptoms: [
            "Changes in bowel habits",
            "Blood in stool",
            "Abdominal pain",
            "Unexplained weight loss",
          ],
          treatments: [
            "Surgery",
            "Chemotherapy",
            "Radiation Therapy",
            "Immunotherapy",
          ],
          icon: "🔬",
        },
      ],
    },
    Neurosciences: {
      icon: "🧠",
      description: "Expert care for neurological conditions and disorders",
      expertise: ["Neurology", "Neurosurgery", "Neuro Rehabilitation"],
      diseases: [
        {
          title: "Alzheimer's Disease",
          description:
            "A progressive neurological disorder that affects memory and cognitive function.",
          symptoms: [
            "Memory loss",
            "Confusion",
            "Mood changes",
            "Difficulty with daily tasks",
          ],
          treatments: [
            "Medication Management",
            "Cognitive Therapy",
            "Lifestyle Modifications",
          ],
          icon: "🧠",
        },
        {
          title: "Parkinson's Disease",
          description:
            "A progressive nervous system disorder that affects movement.",
          symptoms: [
            "Tremors",
            "Stiffness",
            "Balance problems",
            "Slowed movement",
          ],
          treatments: [
            "Medication Therapy",
            "Deep Brain Stimulation",
            "Physical Therapy",
          ],
          icon: "🫀",
        },
        {
          title: "Epilepsy",
          description:
            "A neurological disorder characterized by recurrent seizures.",
          symptoms: [
            "Seizures",
            "Loss of consciousness",
            "Staring spells",
            "Unusual sensations",
          ],
          treatments: [
            "Anti-epileptic Drugs",
            "Surgery",
            "Vagus Nerve Stimulation",
          ],
          icon: "⚡",
        },
      ],
    },
    "Gastro Sciences": {
      icon: "🔬",
      description: "Comprehensive care for digestive system disorders",
      expertise: ["Gastroenterology", "Hepatology", "Endoscopy"],
      diseases: [
        {
          title: "Irritable Bowel Syndrome",
          description: "A common disorder affecting the large intestine.",
          symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation"],
          treatments: ["Dietary Changes", "Medication", "Stress Management"],
          icon: "🫀",
        },
        {
          title: "Gastroesophageal Reflux Disease",
          description:
            "A digestive disorder affecting the lower esophageal sphincter.",
          symptoms: [
            "Heartburn",
            "Regurgitation",
            "Chest pain",
            "Difficulty swallowing",
          ],
          treatments: ["Lifestyle Changes", "Medication", "Surgery"],
          icon: "🔥",
        },
        {
          title: "Inflammatory Bowel Disease",
          description: "Chronic inflammation of the digestive tract.",
          symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue"],
          treatments: ["Medication", "Dietary Management", "Surgery"],
          icon: "🫀",
        },
      ],
    },
    "Renal Care": {
      icon: "💧",
      description: "Specialized care for kidney-related conditions",
      expertise: ["Nephrology", "Dialysis", "Kidney Transplantation"],
      diseases: [
        {
          title: "Chronic Kidney Disease",
          description: "Gradual loss of kidney function over time.",
          symptoms: [
            "Fatigue",
            "Swelling",
            "Changes in urination",
            "High blood pressure",
          ],
          treatments: ["Medication", "Dialysis", "Kidney Transplant"],
          icon: "🫀",
        },
        {
          title: "Kidney Stones",
          description:
            "Hard deposits of minerals and salts that form in the kidneys.",
          symptoms: [
            "Severe pain",
            "Blood in urine",
            "Nausea",
            "Frequent urination",
          ],
          treatments: ["Medication", "Shock Wave Lithotripsy", "Surgery"],
          icon: "💎",
        },
        {
          title: "Urinary Tract Infections",
          description: "Infections in any part of the urinary system.",
          symptoms: [
            "Burning sensation",
            "Frequent urination",
            "Cloudy urine",
            "Pelvic pain",
          ],
          treatments: ["Antibiotics", "Pain Relief", "Preventive Measures"],
          icon: "🦠",
        },
      ],
    },
  };

  const handleEnquireNow = () => {
    setShowEnquiryForm(true);
  };

  const handleFindDoctor = () => {
    navigate("/find-doctor");
  };

  const handleCloseEnquiry = () => {
    setShowEnquiryForm(false);
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowEnquiryForm(false);
  };

  const data = specialityData[speciality] || {
    icon: "⚕️",
    description: "Specialized medical care services",
    expertise: [],
    diseases: [],
  };

  return (
    <div className="speciality-details-page">
      <div className="speciality-header">
        <div className="speciality-title-section">
          <span className="speciality-icon">{data.icon}</span>
          <h1>{speciality}</h1>
        </div>
        <p className="speciality-description">{data.description}</p>

        <div className="expertise-section">
          <h3>Our Expertise</h3>
          <div className="expertise-tags">
            {data.expertise.map((item, index) => (
              <span key={index} className="expertise-tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="action-button enquire-button"
            onClick={handleEnquireNow}
          >
            Enquire Now
          </button>
          <button
            className="action-button find-doctor-button"
            onClick={handleFindDoctor}
          >
            Find a Doctor
          </button>
        </div>
      </div>

      <div className="diseases-section">
        <h2>Common Conditions We Treat</h2>
        <div className="disease-cards-grid">
          {data.diseases.map((disease, index) => (
            <DiseaseCard key={index} {...disease} />
          ))}
        </div>
      </div>

      {showEnquiryForm && (
        <div className="enquiry-modal" onClick={handleCloseEnquiry}>
          <div
            className="enquiry-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={handleCloseEnquiry}>
              ×
            </button>
            <h2>Enquire About {speciality}</h2>
            <form className="enquiry-form" onSubmit={handleSubmitEnquiry}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialityDetails;

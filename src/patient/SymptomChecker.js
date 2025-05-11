import React, { useState } from 'react';
import './SymptomChecker.css';

export default function SymptomChecker({ user }) {
  const [symptomInput, setSymptomInput] = useState('');
  const [results, setResults] = useState(null);

  // Placeholder: Simulate a search
  const handleSearch = (e) => {
    e.preventDefault();
    setResults({
      diseases: [
        { name: 'Common Cold', info: 'A viral infection of your nose and throat.', whenToSee: 'If symptoms persist more than 10 days or worsen.' },
        { name: 'Flu', info: 'A viral infection that attacks your respiratory system.', whenToSee: 'If you have trouble breathing or chest pain.' }
      ],
      medicines: ['Paracetamol', 'Ibuprofen', 'Cough Syrup']
    });
  };

  return (
    <div className="symptom-checker-container">
      <h1>Find Your Illness & Cure by Symptoms</h1>
      <p className="welcome-msg">
        Welcome to our Symptom Checker tool — your first step toward understanding your health better.<br /><br />
        Whether you're feeling under the weather or just a bit off, you can use this platform to:
      </p>
      <ul className="features-list">
        <li>🔍 <b>Search by Symptom</b> – Simply enter the symptoms you're experiencing (e.g., fever, cough, headache), and our system will suggest possible diseases.</li>
        <li>💊 <b>Get Medicine Suggestions</b> – Based on your symptoms and potential condition, we'll recommend over-the-counter (OTC) or common medicines you might consider.</li>
        <li>📚 <b>Learn More</b> – View brief information about the disease, its causes, symptoms, and when you should see a doctor.</li>
      </ul>
      <form className="symptom-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter your symptoms (e.g., fever, cough)"
          value={symptomInput}
          onChange={e => setSymptomInput(e.target.value)}
          className="symptom-input"
        />
        <button type="submit" className="symptom-search-btn">Search</button>
      </form>
      {results && (
        <div className="results-section">
          <h2>Possible Diseases</h2>
          <ul className="disease-list">
            {results.diseases.map((d, idx) => (
              <li key={idx} className="disease-item">
                <b>{d.name}</b>: {d.info}<br />
                <span className="when-to-see">{d.whenToSee}</span>
              </li>
            ))}
          </ul>
          <h2>Medicine Suggestions</h2>
          <ul className="medicine-list">
            {results.medicines.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 
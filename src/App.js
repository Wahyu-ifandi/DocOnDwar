import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesQuickAccess from "./components/ServicesQuickAccess";
import SpecialitiesSection from "./components/SpecialitiesSection";
import SpecialityDetails from "./components/SpecialityDetails";
import InfoCardsSection from "./components/InfoCardsSection";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import AllSpecialities from "./components/AllSpecialities";
import Dashboard from './patient/Dashboard';
import SymptomChecker from './patient/SymptomChecker';
import ContactUs from './components/ContactUs';
import HealthLibrary from './components/HealthLibrary';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth');
    }
  }, [token, navigate]);

  return token ? children : null;
};

// HomePage component to encapsulate the main page layout
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/speciality/${searchTerm}`);
    }
  };

  return (
    <>
      <div className="main-search-container">
        <form onSubmit={handleSearch} className="main-search-form">
          <input
            type="text"
            placeholder="Search for a specialty or condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="main-search-input"
          />
          <button type="submit" className="main-search-button">
            Search
          </button>
        </form>
      </div>
      <HeroSection />
      <ServicesQuickAccess />
      <SpecialitiesSection searchTerm={searchTerm} />
      <InfoCardsSection />
      <CookieConsent />
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data
      fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      });
    }
  }, []);

  // Handle login/signup success
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    navigate('/patient-dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/speciality/:speciality" element={<SpecialityDetails />} />
          <Route path="/specialities" element={<AllSpecialities />} />

          <Route path="/auth" element={<Auth onAuthSuccess={handleAuthSuccess} />} />

          <Route path="/health-library" element={<HealthLibrary />} />

          <Route 
            path="/patient-dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/symptom-checker" 
            element={
              <ProtectedRoute>
                <SymptomChecker user={user} />
              </ProtectedRoute>
            } 
          />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


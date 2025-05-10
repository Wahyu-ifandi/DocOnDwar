<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
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
=======
import React, { useState } from 'react';
>>>>>>> 3250cc07f617c2c5e14930751b83015bf06d2357
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesQuickAccess from './components/ServicesQuickAccess';
import SpecialitiesSection from './components/SpecialitiesSection';
import InfoCardsSection from './components/InfoCardsSection';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Dashboard from './patient/Dashboard';
>>>>>>> e5b1222b10a12bf44eb753833beb52b361b321e6

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
const HomePage = () => (
  <>
    <HeroSection />
    <ServicesQuickAccess />
    <SpecialitiesSection />
    <InfoCardsSection />
    <CookieConsent />
  </>
);

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
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/auth" element={<Auth />} />
        <Route path="/speciality/:speciality" element={<SpecialityDetails />} />
        <Route path="/specialities" element={<AllSpecialities />} />
=======
        <Route path="/auth" element={<Auth onAuthSuccess={handleAuthSuccess} />} />
<<<<<<< HEAD
        <Route 
          path="/patient-dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
=======
       

>>>>>>> e5b1222b10a12bf44eb753833beb52b361b321e6
>>>>>>> 3250cc07f617c2c5e14930751b83015bf06d2357
      </Routes>
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 3250cc07f617c2c5e14930751b83015bf06d2357

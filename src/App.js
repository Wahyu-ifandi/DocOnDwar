import React, { useState } from 'react';
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

  // Handle login/signup success
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    navigate('/dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth onAuthSuccess={handleAuthSuccess} />} />
       

      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
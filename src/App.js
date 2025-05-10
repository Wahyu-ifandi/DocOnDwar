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
<<<<<<< HEAD
        <Route path="/auth" element={<Auth />} />
        <Route path="/speciality/:speciality" element={<SpecialityDetails />} />
        <Route path="/specialities" element={<AllSpecialities />} />
=======
        <Route path="/auth" element={<Auth onAuthSuccess={handleAuthSuccess} />} />
       

>>>>>>> e5b1222b10a12bf44eb753833beb52b361b321e6
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

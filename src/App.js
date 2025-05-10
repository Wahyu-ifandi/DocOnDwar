import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesQuickAccess from './components/ServicesQuickAccess';
import SpecialitiesSection from './components/SpecialitiesSection';
import InfoCardsSection from './components/InfoCardsSection';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import Auth from './components/Auth';

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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
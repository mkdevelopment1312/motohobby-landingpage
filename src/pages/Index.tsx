
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';
import { AuthProvider } from '../contexts/AuthContext';

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
        <AdminPanel />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;

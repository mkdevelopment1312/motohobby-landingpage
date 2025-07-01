
import React, { useState } from 'react';
import { Menu, X, Shield, Phone, MapPin } from 'lucide-react';
import AdminLogin from './AdminLogin';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-xl z-50 border-b border-gray-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/25">
                MH
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MOTO-HOBBY</h1>
                <p className="text-sm text-red-400 font-medium">Komis & Serwis</p>
              </div>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-3 text-gray-300 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/50">
                <Phone size={18} className="text-red-400" />
                <span className="font-medium">535 565 400</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/50">
                <MapPin size={18} className="text-red-400" />
                <span className="font-medium">ul. Bydgoska 72, WAŁCZ</span>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-red-400 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/60 backdrop-blur-sm"
              >
                Usługi
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-red-400 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/60 backdrop-blur-sm"
              >
                O nas
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-gray-300 hover:text-red-400 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/60 backdrop-blur-sm"
              >
                Opinie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-2xl transition-all duration-300 font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transform"
              >
                Kontakt
              </button>
              <button
                onClick={() => setShowAdminLogin(true)}
                className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-gray-800/60 backdrop-blur-sm"
                title="Panel Administratora"
              >
                <Shield size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-xl hover:bg-gray-800/60 backdrop-blur-sm transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-xl rounded-2xl mt-4 mb-4 p-6 space-y-6 border border-gray-700/50 shadow-2xl">
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3 bg-gray-700/60 p-3 rounded-xl backdrop-blur-sm">
                  <Phone size={16} className="text-red-400" />
                  <span>535 565 400</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-700/60 p-3 rounded-xl backdrop-blur-sm">
                  <MapPin size={16} className="text-red-400" />
                  <span>ul. Bydgoska 72, WAŁCZ</span>
                </div>
              </div>
              <div className="border-t border-gray-700/50 pt-6 space-y-3">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-gray-300 hover:text-red-400 py-3 px-4 rounded-xl hover:bg-gray-700/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Usługi
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-gray-300 hover:text-red-400 py-3 px-4 rounded-xl hover:bg-gray-700/60 transition-all duration-300 backdrop-blur-sm"
                >
                  O nas
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="block w-full text-left text-gray-300 hover:text-red-400 py-3 px-4 rounded-xl hover:bg-gray-700/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Opinie
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => {
                    setShowAdminLogin(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-red-400 py-3 px-4 rounded-xl hover:bg-gray-700/60 transition-all duration-300 backdrop-blur-sm"
                >
                  <Shield size={16} />
                  <span>Panel Admin</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <AdminLogin 
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
      />
    </>
  );
};

export default Header;

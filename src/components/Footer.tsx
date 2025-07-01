
import React from 'react';
import { Phone, MapPin, Clock, Car, Wrench, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                MH
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MOTO-HOBBY</h3>
                <p className="text-sm text-red-400">Komis & Serwis</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Profesjonalne usługi motoryzacyjne w Wałczu. Sprzedaż, skup, import aut z zagranicy oraz kompleksowy serwis mechaniczny.
            </p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <Car size={16} className="text-red-400" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <Wrench size={16} className="text-red-400" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <Globe size={16} className="text-red-400" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Nasze usługi</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Sprzedaż samochodów</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Skup i zamiana</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Import z zagranicy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Diagnostyka komputerowa</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Naprawa zawieszenia</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">System hamulcowy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Układy wydechowe</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">O nas</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Usługi</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-red-400 transition-colors">Opinie klientów</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Kontakt</a></li>
              <li><span className="text-gray-400">Regulamin</span></li>
              <li><span className="text-gray-400">Polityka prywatności</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ul. Bydgoska 72</p>
                  <p className="text-gray-300">WAŁCZ</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-400 flex-shrink-0" />
                <a href="tel:535565400" className="text-gray-300 hover:text-red-400 transition-colors">
                  535 565 400
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Pon-Pt: 8:00-17:00</p>
                  <p className="text-gray-300">Sob: 8:00-14:00</p>
                  <p className="text-gray-400">Nie: Zamknięte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} MOTO-HOBBY. Wszelkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Wykonanie:</span>
              <span className="text-red-400 font-medium">Profesjonalna strona motoryzacyjna</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs text-gray-500">
            <p>
              MOTO-HOBBY - Twój zaufany partner w motoryzacji. Profesjonalne usługi komisu samochodowego 
              i serwisu mechanicznego w Wałczu. Sprzedaż, skup, zamiana i import aut z zagranicy. 
              Diagnostyka komputerowa, naprawa zawieszenia, układów hamulcowych i wydechowych.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { ArrowRight, Car, Wrench, Globe, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-600/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-red-400 text-sm font-medium">
                <Sparkles size={16} className="animate-pulse" />
                <span className="tracking-wider uppercase">Profesjonalny Serwis Motoryzacyjny</span>
                <div className="flex-1 h-px bg-gradient-to-r from-red-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Twoje auto w</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  najlepszych rękach
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Kompleksowe usługi motoryzacyjne w Wałczu. Sprzedaż, skup, zamiana i import aut z zagranicy. 
                Profesjonalny serwis samochodowy z wieloletnim doświadczeniem.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-red-400 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-400 mt-1">Zadowolonych klientów</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-red-400 group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-sm text-gray-400 mt-1">lat doświadczenia</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-red-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-400 mt-1">Gwarancji jakości</div>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-10 py-5 rounded-3xl font-semibold text-lg transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transform backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Skontaktuj się z nami</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden border-2 border-red-500/50 text-red-400 hover:text-white px-10 py-5 rounded-3xl font-semibold text-lg transition-all duration-500 backdrop-blur-sm bg-gray-900/50 hover:bg-red-500 hover:border-red-400 hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10">Zobacz nasze usługi</span>
              </button>
            </div>
          </div>

          {/* Modern Service Cards Layout */}
          <div className="relative">
            <div className="grid gap-8">
              {/* Main Feature Card */}
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-red-500/20 rounded-2xl group-hover:bg-red-500/30 transition-colors duration-300 backdrop-blur-sm">
                      <Car size={32} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Komis samochodowy</h3>
                      <p className="text-gray-400">Sprzedaż, skup i zamiana pojazdów</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm backdrop-blur-sm">Sprawdzona historia</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm backdrop-blur-sm">Gwarancja</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm backdrop-blur-sm">Finansowanie</span>
                  </div>
                </div>
              </div>
              
              {/* Two Column Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-red-500/20 rounded-xl w-fit mb-4 group-hover:bg-red-500/30 transition-colors duration-300 backdrop-blur-sm">
                      <Wrench size={28} className="text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Serwis mechaniczny</h3>
                    <p className="text-sm text-gray-400">Kompleksowe naprawy i diagnostyka</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="p-3 bg-red-500/20 rounded-xl w-fit mb-4 group-hover:bg-red-500/30 transition-colors duration-300 backdrop-blur-sm">
                      <Globe size={28} className="text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Import z zagranicy</h3>
                    <p className="text-sm text-gray-400">Sprowadzamy auta z całej Europy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

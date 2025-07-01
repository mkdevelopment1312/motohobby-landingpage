
import React from 'react';
import { Car, Wrench, Globe, Search, RefreshCw, Shield, Settings, Truck } from 'lucide-react';

const ServicesSection = () => {
  const komisServices = [
    {
      icon: Car,
      title: "Sprzedaż samochodów",
      description: "Szeroki wybór pojazdów różnych marek i roczników w atrakcyjnych cenach",
      features: ["Sprawdzona historia pojazdu", "Gwarancja techniczna", "Możliwość finansowania"]
    },
    {
      icon: RefreshCw,
      title: "Skup i zamiana",
      description: "Kupujemy Twoje auto za gotówkę lub przyjmujemy w rozliczeniu",
      features: ["Wycena na miejscu", "Szybka transakcja", "Uczciwe ceny"]
    },
    {
      icon: Globe,
      title: "Import z zagranicy",
      description: "Sprowadzamy auta z całej Europy - znajdziemy to czego szukasz",
      features: ["Pomoc w wyborze", "Załatwienie formalności", "Transport i rejestracja"]
    },
    {
      icon: Shield,
      title: "Komis samochodowy",
      description: "Przyjmujemy auta w komis - sprzedajemy za Ciebie Twój pojazd",
      features: ["Profesjonalna prezentacja", "Marketing i reklama", "Obsługa klientów"]
    }
  ];

  const serwisServices = [
    {
      icon: Search,
      title: "Diagnostyka komputerowa",
      description: "Kompleksowa diagnostyka wszystkich systemów pojazdu",
      features: ["Nowoczesne urządzenia", "Szczegółowy raport", "Wykrywanie usterek"]
    },
    {
      icon: Settings,
      title: "Naprawa zawieszenia",
      description: "Serwis zawieszenia wszystkich typów pojazdów",
      features: ["Amortyzatory", "Sprężyny", "Wahacze i łączniki"]
    },
    {
      icon: Wrench,
      title: "System hamulcowy",
      description: "Naprawa i konserwacja układu hamulcowego",
      features: ["Wymiana klocków", "Tarcze hamulcowe", "Płyn hamulcowy"]
    },
    {
      icon: Truck,
      title: "Układy wydechowe",
      description: "Montaż i naprawa układów wydechowych",
      features: ["Tłumiki", "Katalizatory", "Rury wydechowe"]
    }
  ];

  const additionalServices = [
    "Wymiana rozrządów", "Naprawa silników", "Wymiana oleju", "Płyny eksploatacyjne",
    "Naprawy główne", "Naprawy bieżące", "Klimatyzacja", "Elektrika samochodowa"
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 text-red-400 text-sm font-medium mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <span className="tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-red-500/20">NASZE USŁUGI</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Kompleksowe</span>
            <br />
            usługi motoryzacyjne
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Oferujemy pełen zakres usług - od komisu samochodowego po profesjonalny serwis mechaniczny
          </p>
        </div>

        {/* Komis Services */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">KOMIS SAMOCHODOWY</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {komisServices.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="p-4 bg-red-500/20 rounded-2xl w-fit mb-6 group-hover:bg-red-500/30 transition-colors duration-300 group-hover:scale-110 transform backdrop-blur-sm">
                    <service.icon size={40} className="text-red-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serwis Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">SERWIS MECHANICZNY</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serwisServices.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="p-4 bg-red-500/20 rounded-2xl w-fit mb-6 group-hover:bg-red-500/30 transition-colors duration-300 group-hover:scale-110 transform backdrop-blur-sm">
                    <service.icon size={40} className="text-red-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Dodatkowe</span> usługi serwisowe
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-600/50 hover:border-red-500/50 transition-all duration-300 text-center group hover:scale-105 transform"
                >
                  <span className="text-gray-300 group-hover:text-red-400 transition-colors duration-300 font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-6 text-lg">
                Nie znalazłeś usługi której szukasz? Skontaktuj się z nami!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transform"
              >
                Zapytaj o wycenę
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

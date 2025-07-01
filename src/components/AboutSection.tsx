
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Gwarancja jakości",
      description: "Wszystkie nasze usługi objęte są gwarancją. Dbamy o najwyższą jakość wykonywanych prac."
    },
    {
      icon: Users,
      title: "Doświadczony zespół",
      description: "Nasi mechanicy mają wieloletnie doświadczenie w branży motoryzacyjnej."
    },
    {
      icon: Award,
      title: "Certyfikowane usługi",
      description: "Posiadamy wszystkie niezbędne certyfikaty i uprawnienia do świadczenia usług."
    },
    {
      icon: Clock,
      title: "Szybka realizacja",
      description: "Terminowo realizujemy wszystkie zlecenia, szanując Twój czas."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 text-red-400 text-sm font-medium mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <span className="tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-red-500/20">O NASZEJ FIRMIE</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">MOTO-HOBBY</span>
            <br />
            Twój partner w motoryzacji
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Jesteśmy firmą z wieloletnim doświadczeniem w branży motoryzacyjnej, 
            mieszczącą się w Wałczu przy ul. Bydgoskiej 72. Specializujemy się w kompleksowych 
            usługach motoryzacyjnych - od sprzedaży i skupu pojazdów po profesjonalny serwis mechaniczny.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-red-500/20 rounded-2xl w-fit mb-6 group-hover:bg-red-500/30 transition-colors duration-300 group-hover:scale-110 transform backdrop-blur-sm">
                  <feature.icon size={32} className="text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-gray-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Dlaczego warto wybrać 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"> MOTO-HOBBY</span>?
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Kompleksowa obsługa", desc: "od znalezienia wymarzonego auta po jego serwisowanie" },
                  { title: "Import z zagranicy", desc: "pomagamy sprowadzić auto z całej Europy" },
                  { title: "Uczciwe ceny", desc: "transparentna wycena bez ukrytych kosztów" },
                  { title: "Doświadczenie", desc: "ponad 8 lat w branży motoryzacyjnej" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong className="text-red-400">{item.title}</strong> - {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Nasza lokalizacja", content: ["ul. Bydgoska 72, WAŁCZ", "Dogodny dojazd z centrum miasta"] },
                { title: "Godziny otwarcia", content: ["Pon-Pt: 8:00 - 17:00", "Sobota: 8:00 - 14:00", "Niedziela: Zamknięte"] },
                { title: "Kontakt", content: ["Tel: 535 565 400", "Odpowiadamy w godzinach pracy"] }
              ].map((info, index) => (
                <div key={index} className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/50 hover:border-red-500/30 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">{info.title}</h4>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className={lineIndex === 0 ? "text-gray-300" : "text-gray-400 text-sm"}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

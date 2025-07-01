import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 text-red-400 text-sm font-medium mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <span className="tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-red-500/20">KONTAKT</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Skontaktuj się</span>
            <br />
            z nami
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Masz pytania? Potrzebujesz wyceny? Napisz lub zadzwoń - chętnie pomożemy!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Dane kontaktowe</h3>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Telefon", content: ["535 565 400"], subtitle: "Pon-Pt: 8:00-17:00, Sob: 8:00-14:00" },
                  { icon: MapPin, title: "Adres", content: ["ul. Bydgoska 72", "WAŁCZ"], subtitle: "Dogodny dojazd z centrum" },
                  { icon: Clock, title: "Godziny otwarcia", content: ["Poniedziałek - Piątek: 8:00 - 17:00", "Sobota: 8:00 - 14:00"], subtitle: "Niedziela: Zamknięte" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-4 rounded-2xl backdrop-blur-sm">
                      <item.icon size={28} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      {item.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-300">{line}</p>
                      ))}
                      <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Lokalizacja</h3>
              <div className="bg-gray-700/60 h-48 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <MapPin size={48} className="text-red-400 mx-auto mb-4" />
                  <p className="text-gray-300 font-medium">ul. Bydgoska 72, WAŁCZ</p>
                  <p className="text-sm text-gray-400 mt-2">Mapa dostępna wkrótce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Napisz do nas</h3>
            
            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle size={64} className="text-red-400 mx-auto mb-6" />
                <h4 className="text-xl font-semibold text-white mb-3">Dziękujemy!</h4>
                <p className="text-gray-300">Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all duration-300"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Temat
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="sprzedaz">Sprzedaż samochodu</option>
                    <option value="skup">Skup samochodu</option>
                    <option value="import">Import z zagranicy</option>
                    <option value="serwis">Usługi serwisowe</option>
                    <option value="wycena">Wycena naprawy</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-700/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Opisz swoją sprawę..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transform"
                >
                  <Send size={20} />
                  <span>Wyślij wiadomość</span>
                </button>

                <p className="text-sm text-gray-400 text-center">
                  * Pola wymagane
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-10 shadow-2xl shadow-red-500/25">
            <h3 className="text-3xl font-bold text-white mb-6">
              Potrzebujesz pilnej pomocy?
            </h3>
            <p className="text-lg text-red-100 mb-8">
              Zadzwoń do nas bezpośrednio - jesteśmy gotowi pomóc!
            </p>
            <a 
              href="tel:535565400"
              className="inline-flex items-center space-x-3 bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-105 transform"
            >
              <Phone size={24} />
              <span className="text-xl">535 565 400</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

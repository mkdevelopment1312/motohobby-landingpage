import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Marcin Kowalski",
      rating: 5,
      text: "Świetny serwis! Szybko i profesjonalnie naprawili moją Hondę. Uczciwe ceny i fachowa obsługa. Polecam wszystkim!",
      service: "Naprawa silnika",
      date: "2 tygodnie temu"
    },
    {
      name: "Anna Nowak",
      rating: 5,
      text: "Pomoglj mi sprowadzić auto z Niemiec. Wszystko załatwione sprawnie, bez problemów. Bardzo profesjonalne podejście!",
      service: "Import samochodu",
      date: "1 miesiąc temu"
    },
    {
      name: "Piotr Wiśniewski",
      rating: 5,
      text: "Kupiłem u nich używanego Golfa. Auto w super stanie, wszystko zgodne z opisem. Obsługa na najwyższym poziomie.",
      service: "Zakup pojazdu",
      date: "3 tygodnie temu"
    },
    {
      name: "Magdalena Lewandowska",
      rating: 5,
      text: "Diagnostyka komputerowa wykonana bardzo dokładnie. Mechanicy wytłumaczyli wszystkie problemy i podali uczciwe ceny napraw.",
      service: "Diagnostyka",
      date: "1 tydzień temu"
    },
    {
      name: "Tomasz Dąbrowski",
      rating: 5,
      text: "Sprzedałem przez nich swoje auto. Wszystko załatwione szybko i profesjonalnie. Bardzo zadowolony z współpracy!",
      service: "Sprzedaż w komisie",
      date: "2 miesiące temu"
    },
    {
      name: "Katarzyna Jankowska",
      rating: 5,
      text: "Wymiana rozrządu w mojej Toyocie. Praca wykonana solidnie, w terminie i za rozsądne pieniądze. Gorąco polecam!",
      service: "Wymiana rozrządu",
      date: "3 tygodnie temu"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={20} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-400"} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-red-400 text-sm font-medium mb-4">
            <div className="w-8 h-px bg-red-400"></div>
            <span>OPINIE KLIENTÓW</span>
            <div className="w-8 h-px bg-red-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Co mówią o nas nasi klienci
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zadowolenie naszych klientów to najlepsza rekomendacja naszej pracy
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-gray-400">Zadowolonych klientów</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">4.9</div>
            <div className="text-gray-400">Średnia ocena</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">98%</div>
            <div className="text-gray-400">Zadowolenia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">8+</div>
            <div className="text-gray-400">Lat doświadczenia</div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Quote decoration */}
            <Quote size={64} className="absolute top-6 left-6 text-red-400/20" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(reviews[currentReview].rating)}
                </div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  "{reviews[currentReview].text}"
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-1">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-red-400 text-sm mb-1">
                  {reviews[currentReview].service}
                </p>
                <p className="text-gray-500 text-sm">
                  {reviews[currentReview].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevReview}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full border border-gray-600 hover:border-red-500/50 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-gray-300" />
            </button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-red-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextReview}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full border border-gray-600 hover:border-red-500/50 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-gray-300" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Dołącz do grona zadowolonych klientów!
            </h3>
            <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
              Skorzystaj z naszych usług i przekonaj się, dlaczego nasi klienci nas polecają
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

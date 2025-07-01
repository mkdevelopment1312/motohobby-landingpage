
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Car, Upload, Save, X } from 'lucide-react';

const AdminPanel = () => {
  const { isAdminLoggedIn } = useAuth();
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    description: '',
    features: '',
    condition: 'very-good'
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedImages(prev => [...prev, ...files].slice(0, 6)); // Max 6 images
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for backend integration
    console.log('Car listing data:', carData);
    console.log('Selected images:', selectedImages);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form
    setCarData({
      brand: '',
      model: '',
      year: '',
      mileage: '',
      price: '',
      description: '',
      features: '',
      condition: 'very-good'
    });
    setSelectedImages([]);
    setIsSubmitting(false);

    alert('Ogłoszenie zostało dodane pomyślnie!');
  };

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-800/30" id="admin-panel">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car size={32} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Panel Administratora</h2>
            <p className="text-gray-400">Dodaj nowe ogłoszenie samochodu do sprzedaży</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Marka *
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={carData.brand}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="np. BMW, Volkswagen, Toyota"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={carData.model}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="np. Golf, Passat, Corolla"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rok produkcji *
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={carData.year}
                    onChange={handleInputChange}
                    required
                    min="1990"
                    max="2024"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Przebieg (km) *
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    value={carData.mileage}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="120000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cena (PLN) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={carData.price}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="45000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Stan techniczny
                  </label>
                  <select
                    name="condition"
                    value={carData.condition}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="excellent">Doskonały</option>
                    <option value="very-good">Bardzo dobry</option>
                    <option value="good">Dobry</option>
                    <option value="fair">Zadowalający</option>
                    <option value="poor">Wymaga naprawy</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Opis samochodu *
                </label>
                <textarea
                  name="description"
                  value={carData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Szczegółowy opis samochodu, historia, serwis, uszkodzenia itp..."
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wyposażenie dodatkowe
                </label>
                <textarea
                  name="features"
                  value={carData.features}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="np. Klimatyzacja, Nawigacja, Skórzana tapicerka, Felgi aluminiowe..."
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Zdjęcia samochodu (max 6)
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <Upload size={32} className="text-gray-400" />
                    <span className="text-gray-400">Kliknij aby dodać zdjęcia</span>
                    <span className="text-sm text-gray-500">JPG, PNG, max 5MB każde</span>
                  </label>
                </div>

                {selectedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border border-gray-600"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 disabled:cursor-not-allowed"
                >
                  <Save size={20} />
                  <span>{isSubmitting ? 'Dodawanie...' : 'Dodaj ogłoszenie'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

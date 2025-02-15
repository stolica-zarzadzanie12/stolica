import React, { useState, useEffect } from 'react';
import { Calculator, Share2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CalculatorInputs {
  area: number;
  contact: string;
  contactType: 'email' | 'phone';
}

const CostCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    area: 0,
    contact: '',
    contactType: 'email'
  });
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [discount, setDiscount] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    if (name === 'area') {
      setShowResult(false);
    }
  };

  const calculateCost = () => {
    const area = Number(inputs.area);
    let baseCost = area * 1; // 1 PLN za m²

    // Obliczanie rabatu
    let discountPercent = 0;
    if (area >= 15000) {
      discountPercent = 25;
    } else if (area >= 10000) {
      discountPercent = 15;
    } else if (area >= 5000) {
      discountPercent = 10;
    } else if (area >= 2000) {
      discountPercent = 5;
    }

    setDiscount(discountPercent);

    // Aplikowanie rabatu
    if (discountPercent > 0) {
      baseCost = baseCost * (1 - discountPercent / 100);
    }

    // Minimalna opłata 1500 PLN
    return Math.max(1500, baseCost);
  };

  const validateContact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9}$/;

    if (inputs.contactType === 'email' && !emailRegex.test(inputs.contact)) {
      setError('Proszę podać prawidłowy adres email');
      return false;
    }
    
    if (inputs.contactType === 'phone' && !phoneRegex.test(inputs.contact)) {
      setError('Proszę podać prawidłowy 9-cyfrowy numer telefonu');
      return false;
    }

    setError('');
    return true;
  };

  const submitToSupabase = async (cost: number) => {
    try {
      const { error } = await supabase
        .from('calculator_submissions')
        .insert([
          {
            area: inputs.area,
            contact: inputs.contact,
            contact_type: inputs.contactType,
            calculated_cost: cost,
            discount: discount
          }
        ]);

      if (error) throw error;
    } catch (err) {
      console.error('Error submitting to Supabase:', err);
      // Continue showing the result even if submission fails
    }
  };

  const handleCalculate = () => {
    if (!inputs.area) {
      setError('Proszę podać powierzchnię');
      return;
    }

    if (!inputs.contact) {
      setError('Proszę podać dane kontaktowe');
      return;
    }

    if (!validateContact()) {
      return;
    }

    setIsCalculating(true);
    setIsSubmitting(true);
    setError('');

    // Symulacja opóźnienia dla lepszego UX
    setTimeout(async () => {
      const cost = calculateCost();
      setTotalCost(Math.round(cost));
      await submitToSupabase(Math.round(cost));
      setIsCalculating(false);
      setIsSubmitting(false);
      setShowResult(true);
    }, 500);
  };

  const handleShare = async () => {
    const text = `Szacowany koszt zarządzania nieruchomością:\n
- Powierzchnia: ${inputs.area} m²
${discount > 0 ? `- Przyznany rabat: ${discount}%` : ''}
\nMiesięczny koszt: ${totalCost} PLN`;

    try {
      await navigator.clipboard.writeText(text);
      alert('Skopiowano do schowka!');
    } catch (err) {
      console.error('Nie udało się skopiować:', err);
    }
  };

  return (
    <div className="relative flex items-center justify-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        loading="lazy"
        decoding="async"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=75&fm=webp")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="bg-[#B8860B] p-6 text-white">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8" />
              <h2 className="text-2xl font-bold text-white">Kalkulator Kosztów Zarządzania</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-xl mx-auto">
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Powierzchnia (m²)
                </label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  value={inputs.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  min="0"
                  aria-label="Powierzchnia w metrach kwadratowych"
                  aria-describedby="area-description"
                />
              </div>
              
              <div className="mt-4">
                <label
                  id="contactTypeLabel"
                  htmlFor="contactType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sposób kontaktu
                </label>
                <select
                  id="contactType"
                  name="contactType"
                  value={inputs.contactType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  aria-labelledby="contactTypeLabel"
                >
                  <option value="email">Email</option>
                  <option value="phone">Telefon</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  {inputs.contactType === 'email' ? 'Adres email' : 'Numer telefonu'}
                </label>
                <input
                  type={inputs.contactType === 'email' ? 'email' : 'tel'}
                  name="contact"
                  id="contact"
                  value={inputs.contact}
                  onChange={handleInputChange}
                  placeholder={inputs.contactType === 'email' ? 'twoj@email.pl' : '123456789'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                  aria-label={inputs.contactType === 'email' ? 'Wprowadź adres email' : 'Wprowadź numer telefonu'}
                  aria-describedby={inputs.contactType === 'email' ? 'email-format' : 'phone-format'}
                />
                <span id="email-format" className="sr-only">Format: nazwa@domena.pl</span>
                <span id="phone-format" className="sr-only">Format: 9 cyfr bez spacji i myślników</span>
              </div>

              {error && (
                <div className="mt-4 text-red-600 text-sm" role="alert" aria-live="polite">
                  {error}
                </div>
              )}

              <div className="mt-4">
                <p id="area-description" className="mt-2 text-sm text-gray-500">
                  Rabaty:
                  <br />• od 2000 m² - 5%
                  <br />• od 5000 m² - 10%
                  <br />• od 10000 m² - 15%
                  <br />• ponad 15000 m² - 25%
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <span>Szacowany miesięczny koszt:</span>
                    </p>
                    {showResult ? (
                      <p className="text-3xl font-bold text-[#DAA520]">
                        {totalCost} PLN
                      </p>
                    ) : (
                      <p className="text-3xl font-bold text-gray-400">
                        --- PLN
                      </p>
                    )}
                    {discount > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        Rabat: {discount}%
                      </p>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    {showResult ? (
                      <button
                        onClick={handleShare}
                        className="flex items-center space-x-2 px-6 py-3 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        <Share2 className="h-5 w-5" />
                        <span>Udostępnij wynik</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleCalculate}
                        disabled={isCalculating || isSubmitting}
                        className="flex items-center space-x-2 px-6 py-3 bg-[#B8860B] text-white rounded-lg hover:bg-[#D4AF37] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {(isCalculating || isSubmitting) ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
                        <span>Oblicz koszt</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                Minimalny koszt miesięczny: 1500 zł
                {isSubmitting && <div className="mt-2 text-[#B8860B] font-medium">Zapisywanie wyników...</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
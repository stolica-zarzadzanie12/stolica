import React from 'react';
import { Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CostCalculator from '../components/CostCalculator';
import Meta from '../components/Meta';

const Pricing = () => {
  const discounts = [
    { threshold: 2000, discount: 5 },
    { threshold: 5000, discount: 10 },
    { threshold: 10000, discount: 15 },
    { threshold: 15000, discount: 25 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Cennik | Stolica - Zarządzanie Nieruchomościami"
        description="✓ Przejrzyste ceny zarządzania nieruchomościami ✓ Rabaty nawet do 25% ✓ Kalkulacja online ✓ Bezpłatna wycena ✓ Gwarancja najlepszej ceny w Warszawie"
      />
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cena zarządzania nieruchomościami w Warszawie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Profesjonalne zarządzanie i administrowanie nieruchomościami w Warszawie w konkurencyjnych cenach.
                Sprawdź naszą ofertę i przekonaj się, że wysoką jakość można połączyć z rozsądną ceną.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Cena administrowania nieruchomościami w Warszawie</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Jako profesjonalny zarządca nieruchomości w Warszawie, oferujemy przejrzysty system rozliczeń i konkurencyjne 
                  stawki dostosowane do wielkości i specyfiki nieruchomości. Nasze ceny zarządzania nieruchomościami rozpoczynają 
                  się już od 1 PLN/m² powierzchni użytkowej miesięcznie, co w połączeniu z gwarancją redukcji kosztów o 15-20% 
                  czyni naszą ofertę wyjątkowo atrakcyjną na rynku warszawskim.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6">Podstawowe informacje o cenniku:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Stawka podstawowa:</span>
                      <p className="text-gray-600">Od 1 PLN/m² powierzchni użytkowej miesięcznie</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Minimalna opłata miesięczna:</span>
                      <p className="text-gray-600">1500 PLN netto - gwarancja profesjonalnej obsługi niezależnie od wielkości nieruchomości</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Wycena indywidualna dla:</span>
                      <p className="text-gray-600">Obiektów komercyjnych, biurowców, centrów handlowych i dużych wspólnot mieszkaniowych</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Elastyczne warunki współpracy:</span>
                      <p className="text-gray-600">Możliwość dostosowania zakresu usług i warunków cenowych do potrzeb klienta</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Discounts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Atrakcyjne rabaty dla większych powierzchni</h2>
                <p className="text-gray-600">
                  Jako doświadczony zarządca nieruchomości w Warszawie, oferujemy atrakcyjny system rabatów uzależniony 
                  od wielkości zarządzanej powierzchni. Nasza cena zarządzania nieruchomościami maleje wraz ze wzrostem 
                  powierzchni, co pozwala na znaczące oszczędności przy większych obiektach. Dodatkowo, oferujemy indywidualne 
                  warunki cenowe dla kompleksów budynków i portfeli nieruchomości.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {discounts.map((discount, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-2xl font-bold text-[#DAA520] mb-2">{discount.discount}%</p>
                    <p className="text-gray-600">od {discount.threshold} m²</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Co zawiera cena zarządzania nieruchomością?</h2>
                <p className="text-gray-600">
                  W ramach miesięcznej opłaty zapewniamy kompleksową obsługę nieruchomości
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Obsługa administracyjna</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Prowadzenie pełnej dokumentacji</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Organizacja zebrań wspólnoty</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Obsługa korespondencji i zgłoszeń</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Reprezentacja przed urzędami</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Obsługa techniczna</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Nadzorowanie przeglądów i konserwacji, obsługa pogotowia technicznego</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Koordynacja i nadzór nad remontami</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Planowanie i realizacja przeglądów okresowych</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Całodobowe wsparcie techniczne 24/7</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Obsługa finansowa</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Prowadzenie księgowości</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Rozliczanie mediów</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Windykacja należności</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Optymalizacja kosztów</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Wsparcie prawne</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Obsługa prawna wspólnoty</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Przygotowywanie uchwał</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Opiniowanie umów</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="text-gray-600">Doradztwo prawne</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Calculator Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kalkulator ceny zarządzania nieruchomością</h2>
                <p className="text-gray-600">
                  Oblicz szacunkową cenę zarządzania i administrowania Twoją nieruchomością w Warszawie. Nasz kalkulator 
                  uwzględnia wszystkie czynniki wpływające na koszt usługi, w tym wielkość powierzchni, lokalizację i zakres 
                  obsługi. Pamiętaj, że ostateczna cena zarządzania nieruchomością może być negocjowana indywidualnie.
                </p>
              </div>
              <CostCalculator />
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Info className="h-6 w-6 text-[#DAA520] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Dodatkowe informacje o cenach</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Cena zarządzania nieruchomością uzależniona jest od zakresu usług i specyfiki obiektu</li>
                      <li>• Oferujemy konkurencyjne stawki na rynku warszawskim przy zachowaniu najwyższej jakości usług</li>
                      <li>• Podane ceny są cenami netto, należy doliczyć podatek VAT</li>
                      <li>• Minimalna opłata miesięczna wynosi 1500 PLN netto</li>
                      <li>• Rabaty naliczane są automatycznie w zależności od powierzchni</li>
                      <li>• Możliwość negocjacji cen dla dużych powierzchni</li>
                      <li>• Indywidualne wyceny dla obiektów specjalnych</li>
                      <li>• Szczegółowy zakres usług ustalany jest indywidualnie</li>
                      <li>• Gwarancja oszczędności - redukcja kosztów średnio o 15-20% w pierwszym roku</li>
                      <li>• Bezpłatna wycena i analiza potencjału optymalizacji kosztów</li>
                      <li>• Elastyczne warunki płatności i możliwość rozliczeń kwartalnych</li>
                      <li>• Pełne ubezpieczenie OC zarządcy nieruchomości</li>
                      <li>• Możliwość dostosowania zakresu usług do indywidualnych potrzeb</li>
                      <li>• Specjalne pakiety dla wspólnot mieszkaniowych i obiektów komercyjnych</li>
                      <li>• Transparentne rozliczenia i regularna sprawozdawczość</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
import React from 'react';
import { Shield, TrendingUp, Users2, Clock, FileCheck, Building2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const DeveloperBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Bezpieczeństwo i stabilność',
      description: `• Pełne ubezpieczenie OC zarządcy na sumę 5 000 000 zł
        • Stabilność finansowa i wieloletnie doświadczenie
        • Certyfikowani specjaliści w zespole
        • Zgodność z wymogami prawnymi i technicznymi
        • Regularne audyty jakości usług
        • Transparentność działań i raportowania`
    },
    {
      icon: TrendingUp,
      title: 'Optymalizacja kosztów',
      description: `• Redukcja kosztów eksploatacyjnych o 15-25%
        • Efektywne zarządzanie mediami
        • Optymalizacja umów z dostawcami
        • Programy oszczędnościowe
        • Modernizacje zwiększające efektywność
        • Profesjonalne planowanie budżetu`
    },
    {
      icon: Users2,
      title: 'Zadowolenie mieszkańców',
      description: `• Profesjonalna obsługa klienta 24/7
        • Szybka reakcja na zgłoszenia
        • Dedykowany portal mieszkańca
        • Regularna komunikacja
        • Wsparcie techniczne i administracyjne
        • Wysokie oceny satysfakcji`
    },
    {
      icon: Clock,
      title: 'Oszczędność czasu',
      description: `• Przejęcie wszystkich obowiązków zarządczych
        • Koordynacja prac i przeglądów
        • Obsługa dokumentacji
        • Raportowanie i analizy
        • Organizacja zebrań
        • Reprezentacja przed urzędami`
    },
    {
      icon: FileCheck,
      title: 'Profesjonalne wsparcie',
      description: `• Dedykowany opiekun inwestycji
        • Zespół ekspertów technicznych
        • Obsługa prawna i księgowa
        • Doradztwo w optymalizacji
        • Regularne raporty i analizy
        • Wsparcie w rozwoju inwestycji`
    },
    {
      icon: Building2,
      title: 'Wartość dodana',
      description: `• Wzrost wartości nieruchomości
        • Pozytywny wizerunek inwestycji
        • Rekomendacje i referencje
        • Długoterminowa współpraca
        • Innowacyjne rozwiązania
        • Ciągłe doskonalenie usług`
    }
  ];

  const statistics = [
    { value: '98%', label: 'Zadowolonych klientów' },
    { value: '15+', label: 'Lat doświadczenia' },
    { value: '150+', label: 'Zarządzanych nieruchomości' },
    { value: '20%', label: 'Średnia redukcja kosztów' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">
              Korzyści dla deweloperów
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Profesjonalne zarządzanie nieruchomościami to nie tylko obsługa techniczna 
              i administracyjna. To realne korzyści finansowe i wizerunkowe dla Twojej 
              inwestycji.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-[#DAA520] mb-6" />
                  <h2 className="text-2xl font-semibold mb-4">{benefit.title}</h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Liczby, które mówią same za siebie
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="text-4xl font-bold text-[#DAA520] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperBenefits;
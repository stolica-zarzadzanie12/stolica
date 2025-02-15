import React from 'react';
import { Shield, PenTool as Tool, FileCheck, Users2, Building2, BarChart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const DeveloperServices = () => {
  const services = [
    {
      icon: Shield,
      title: 'Kompleksowe zarządzanie nieruchomościami',
      description: `Oferujemy pełen zakres usług zarządzania nieruchomościami dla deweloperów, obejmujący:
        • Administrację techniczną i finansową
        • Obsługę gwarancyjną i pogwarancyjną
        • Koordynację przeglądów i konserwacji
        • Optymalizację kosztów eksploatacyjnych
        • Zarządzanie dokumentacją techniczną
        • Obsługę prawną i księgową`
    },
    {
      icon: Tool,
      title: 'Obsługa techniczna i serwisowa',
      description: `Zapewniamy kompleksową obsługę techniczną, w tym:
        • Całodobowe pogotowie techniczne
        • Regularne przeglądy instalacji
        • Konserwację urządzeń i systemów
        • Koordynację napraw gwarancyjnych
        • Modernizacje i usprawnienia
        • Monitoring stanu technicznego`
    },
    {
      icon: FileCheck,
      title: 'Organizacja wspólnot mieszkaniowych',
      description: `Wspieramy w procesie organizacji wspólnot mieszkaniowych:
        • Przygotowanie dokumentacji
        • Organizacja pierwszych zebrań
        • Wybór władz wspólnoty
        • Ustalenie zasad funkcjonowania
        • Opracowanie planów gospodarczych
        • Wdrożenie systemu zarządzania`
    },
    {
      icon: Users2,
      title: 'Obsługa mieszkańców',
      description: `Zapewniamy profesjonalną obsługę mieszkańców poprzez:
        • Dedykowany portal mieszkańca
        • Szybką reakcję na zgłoszenia
        • Sprawną komunikację
        • Rozliczanie mediów
        • Obsługę administracyjną
        • Wsparcie w sprawach bieżących`
    },
    {
      icon: Building2,
      title: 'Przekazywanie lokali',
      description: `Koordynujemy proces przekazywania lokali:
        • Przygotowanie dokumentacji
        • Organizacja odbiorów
        • Sporządzanie protokołów
        • Obsługa usterek
        • Wsparcie techniczne
        • Koordynacja z wykonawcami`
    },
    {
      icon: BarChart,
      title: 'Optymalizacja kosztów',
      description: `Wdrażamy rozwiązania optymalizujące koszty:
        • Analiza wydatków
        • Audyty energetyczne
        • Negocjacje z dostawcami
        • Modernizacje instalacji
        • Programy oszczędnościowe
        • Monitoring zużycia mediów`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">
              Usługi zarządzania dla deweloperów
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Kompleksowe rozwiązania w zakresie zarządzania nieruchomościami, 
              dostosowane do potrzeb inwestycji deweloperskich. Zapewniamy najwyższą 
              jakość usług i optymalizację kosztów.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <service.icon className="h-12 w-12 text-[#DAA520] mb-6" />
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {service.description}
                  </div>
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

export default DeveloperServices;
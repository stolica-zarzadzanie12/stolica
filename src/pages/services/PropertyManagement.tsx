import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2, BarChart, PenTool as Tool } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Meta from '../../components/Meta';

const PropertyManagement = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Kompleksowa obsługa',
      description: 'Pełne zarządzanie techniczne, administracyjne i finansowe nieruchomości'
    },
    {
      icon: Calculator,
      title: 'Optymalizacja kosztów',
      description: 'Redukcja kosztów utrzymania nieruchomości średnio o 15-20% w pierwszym roku'
    },
    {
      icon: Clock,
      title: 'Szybka reakcja',
      description: 'Gwarantowany czas reakcji na zgłoszenia - maksymalnie 2 godziny'
    }
  ];

  const services = [
    {
      title: 'Zarządzanie administracyjne',
      description: 'Kompleksowa obsługa administracyjna nieruchomości',
      icon: Building2,
      features: [
        'Prowadzenie dokumentacji',
        'Obsługa korespondencji',
        'Reprezentacja przed urzędami',
        'Koordynacja usług'
      ]
    },
    {
      title: 'Zarządzanie techniczne',
      description: 'Pełna obsługa techniczna i konserwacja',
      icon: Tool,
      features: [
        'Przeglądy techniczne',
        'Konserwacja instalacji',
        'Pogotowie techniczne 24/7',
        'Nadzór nad remontami'
      ]
    },
    {
      title: 'Zarządzanie finansowe',
      description: 'Profesjonalne zarządzanie finansami',
      icon: BarChart,
      features: [
        'Planowanie budżetu',
        'Kontrola kosztów',
        'Rozliczenia i raporty',
        'Optymalizacja wydatków'
      ]
    },
    {
      title: 'Obsługa prawna',
      description: 'Kompleksowa obsługa prawna',
      icon: Shield,
      features: [
        'Przygotowywanie umów',
        'Obsługa prawna',
        'Windykacja należności',
        'Doradztwo prawne'
      ]
    },
    {
      title: 'Obsługa użytkowników',
      description: 'Profesjonalna obsługa mieszkańców i najemców',
      icon: Users2,
      features: [
        'Portal dla użytkowników',
        'Obsługa zgłoszeń',
        'Komunikacja bieżąca',
        'Wsparcie techniczne'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Analiza potrzeb',
      description: 'Szczegółowa analiza stanu technicznego i potrzeb nieruchomości'
    },
    {
      title: 'Plan zarządzania',
      description: 'Opracowanie strategii i planu zarządzania nieruchomością'
    },
    {
      title: 'Wdrożenie',
      description: 'Implementacja procesów i systemów zarządzania'
    },
    {
      title: 'Optymalizacja',
      description: 'Ciągłe doskonalenie i optymalizacja procesów'
    }
  ];

  const stats = [
    { value: '150', label: 'Zarządzanych Nieruchomości' },
    { value: '1000', label: 'Zadowolonych Klientów' },
    { value: '15+', label: 'Lat doświadczenia' },
    { value: '99%', label: 'Skuteczność (%)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Zarządzanie Nieruchomościami Warszawa | Profesjonalny Zarządca | Stolica"
        description="✓ Profesjonalne zarządzanie nieruchomościami w Warszawie ✓ 15 lat doświadczenia ✓ Redukcja kosztów do 20% ✓ Certyfikowani zarządcy z OC 5 mln zł ✓ Wsparcie 24/7 ✓ Darmowa wycena ➤"
        keywords="zarządzanie nieruchomościami warszawa, zarządca nieruchomości, administracja nieruchomości, zarządzanie wspólnotą mieszkaniową"
        type="website"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Profesjonalne zarządzanie nieruchomościami w Warszawie | Certyfikowany zarządca nieruchomości
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Jako doświadczony <a href="https://www.pfszn.pl/zarzadcy-nieruchomosci.html" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowany zarządca nieruchomości</a> w Warszawie, oferujemy kompleksowe usługi zarządzania i administracji nieruchomościami. Nasz zespół ekspertów, posiadający uprawnienia nadane przez <a href="https://www.mi.gov.pl/2-482414e6fc3dd/zarzadca-nieruchomosci.html" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwo Rozwoju i Technologii</a>, zapewnia najwyższą jakość obsługi i realne oszczędności.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Dzięki 15-letniemu doświadczeniu w branży i współpracy z ponad 150 obiektami o łącznej powierzchni przekraczającej 500 000 m², gwarantujemy profesjonalne zarządzanie nieruchomościami zgodne z najwyższymi standardami i <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19980210112" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">wymogami prawa</a>. Zapewniamy redukcję kosztów zarządzania średnio o 15-20% w pierwszym roku współpracy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#DAA520] hover:bg-[#FFD700] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Skontaktuj się z nami
              </a>
              <a
                href="#services"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Zobacz ofertę
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Profesjonalne zarządzanie nieruchomościami"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Zarządzanie nieruchomościami Warszawa - dlaczego warto wybrać naszą firmę?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Jako profesjonalny zarządca nieruchomości w Warszawie, oferujemy kompleksowe rozwiązania w zakresie zarządzania nieruchomościami, oparte na wieloletnim doświadczeniu i najlepszych praktykach branżowych. Nasz zespół <a href="https://www.piib.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowanych inżynierów</a> i specjalistów zapewnia najwyższy standard obsługi technicznej i administracyjnej. Sprawdź nasze <a href="/uslugi/administrowanie-budynkami" className="text-[#DAA520] hover:underline">usługi administrowania budynkami</a> oraz <a href="/uslugi/obsluga-wspolnot-mieszkaniowych" className="text-[#DAA520] hover:underline">obsługę wspólnot mieszkaniowych</a>.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Współpracujemy z renomowanymi instytucjami, takimi jak <a href="https://www.nfosigw.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej</a>, pomagając naszym klientom w pozyskiwaniu dofinansowania na modernizacje i termomodernizacje budynków. Oferujemy również profesjonalne <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">doradztwo i optymalizację kosztów</a> oraz kompleksowe <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądy budowlane</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <benefit.icon className="h-12 w-12 text-[#DAA520] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">
                  <a href="/uslugi/zarzadzanie-nieruchomosciami" className="text-[#DAA520] hover:underline">
                    {benefit.description}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Profesjonalne zarządzanie nieruchomościami - kompleksowy zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe zarządzanie nieruchomościami w Warszawie, zgodne z wymogami <a href="https://www.gunb.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Głównego Urzędu Nadzoru Budowlanego</a> i standardami branżowymi. Nasz zespół zapewnia profesjonalną obsługę techniczną, administracyjną i prawną. Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">konkurencyjne ceny</a> lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a> po indywidualną wycenę.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Jako certyfikowany zarządca nieruchomości, zapewniamy pełną zgodność z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ustawą o własności lokali</a> oraz <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Prawem budowlanym</a>. Oferujemy również specjalistyczne usługi dla <a href="/oferta/wspolnoty-mieszkaniowe" className="text-[#DAA520] hover:underline">wspólnot mieszkaniowych</a>, <a href="/oferta/deweloperzy" className="text-[#DAA520] hover:underline">deweloperów</a> i <a href="/oferta/dla-biznesu" className="text-[#DAA520] hover:underline">klientów biznesowych</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="h-10 w-10 text-[#DAA520] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Zarządca nieruchomości Warszawa - proces współpracy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jako profesjonalny zarządca nieruchomości w Warszawie, zapewniamy przejrzysty i efektywny proces współpracy. Nasze działania są zgodne z wytycznymi <a href="https://www.gov.pl/web/rozwoj-technologia/zarzadzanie-nieruchomosciami" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a> oraz standardami <a href="https://pfsrm.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polskiej Federacji Stowarzyszeń Rzeczoznawców Majątkowych</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Oferujemy kompleksowe wsparcie na każdym etapie zarządzania, od <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądów technicznych</a> po <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">optymalizację kosztów</a>. Sprawdź również nasze usługi <a href="/uslugi/zarzadzanie-najmem" className="text-[#DAA520] hover:underline">zarządzania najmem</a> i <a href="/uslugi/przeglady-piecioletnie" className="text-[#DAA520] hover:underline">przeglądy pięcioletnie</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-xl h-full">
                  <div className="text-[#DAA520] text-4xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-[#DAA520]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certyfikowany zarządca nieruchomości Warszawa - nasze doświadczenie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Jako doświadczony zarządca nieruchomości w Warszawie, posiadamy wszystkie wymagane certyfikaty i uprawnienia nadane przez <a href="https://www.mi.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwo Infrastruktury</a>. Nasz zespół regularnie uczestniczy w szkoleniach organizowanych przez <a href="https://www.pfrn.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polską Federację Rynku Nieruchomości</a>, zapewniając najwyższy poziom usług.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dowiedz się więcej o naszym <a href="/about" className="text-[#DAA520] hover:underline">doświadczeniu i certyfikatach</a> lub sprawdź <a href="/blog" className="text-[#DAA520] hover:underline">nasz blog ekspercki</a> z artykułami o zarządzaniu nieruchomościami. Zapoznaj się również z <a href="/faq" className="text-[#DAA520] hover:underline">najczęściej zadawanymi pytaniami</a>.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md"
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

      {/* Contact Section */}
      <Contact />
      <Footer />
    </div>
  );
};

export default PropertyManagement;
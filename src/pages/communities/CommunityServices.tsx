import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const CommunityServices = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Kompleksowa obsługa',
      description: 'Pełne zarządzanie administracyjne, techniczne i prawne wspólnoty mieszkaniowej'
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
      title: 'Administracja',
      description: 'Kompleksowa obsługa administracyjna wspólnoty mieszkaniowej',
      icon: Building2,
      features: [
        'Prowadzenie dokumentacji',
        'Organizacja zebrań',
        'Obsługa korespondencji',
        'Reprezentacja przed urzędami'
      ]
    },
    {
      title: 'Obsługa techniczna',
      description: 'Pełna obsługa techniczna i konserwacja nieruchomości',
      icon: FileCheck,
      features: [
        'Przeglądy techniczne',
        'Konserwacja instalacji',
        'Pogotowie techniczne 24/7',
        'Nadzór nad remontami'
      ]
    },
    {
      title: 'Obsługa finansowa',
      description: 'Profesjonalne zarządzanie finansami wspólnoty',
      icon: Calculator,
      features: [
        'Prowadzenie księgowości',
        'Rozliczanie mediów',
        'Windykacja należności',
        'Optymalizacja kosztów'
      ]
    },
    {
      title: 'Wsparcie prawne',
      description: 'Kompleksowa obsługa prawna wspólnoty mieszkaniowej',
      icon: Shield,
      features: [
        'Przygotowywanie uchwał',
        'Opiniowanie umów',
        'Obsługa prawna',
        'Doradztwo'
      ]
    },
    {
      title: 'Obsługa członków wspólnoty',
      description: 'Profesjonalna komunikacja i wsparcie dla mieszkańców',
      icon: Users2,
      features: [
        'Portal dla mieszkańców',
        'Obsługa zgłoszeń',
        'Komunikacja bieżąca',
        'Dyżury zarządcy'
      ]
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <strong>Profesjonalne zarządzanie wspólnotami mieszkaniowymi w Warszawie</strong> | <strong>Certyfikowany zarządca wspólnot</strong>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Jako <a href="https://www.pfszn.pl/zarzadcy-nieruchomosci.html" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowany zarządca wspólnot mieszkaniowych</a> w Warszawie, oferujemy kompleksową obsługę opartą na 15-letnim doświadczeniu. Nasz zespół ekspertów, działający zgodnie z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ustawą o własności lokali</a>, zapewnia profesjonalne wsparcie w każdym aspekcie funkcjonowania wspólnoty.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Współpracujemy z ponad 150 wspólnotami mieszkaniowymi w Warszawie, pomagając w efektywnym zarządzaniu zgodnie z wytycznymi <a href="https://www.gov.pl/web/rozwoj-technologia/zarzadzanie-nieruchomosciami" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a>. Zapewniamy redukcję kosztów zarządzania średnio o 15-20% w pierwszym roku współpracy.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Zarządzanie wspólnotą mieszkaniową Warszawa - korzyści współpracy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jako <strong>profesjonalny zarządca wspólnot mieszkaniowych w Warszawie</strong>, oferujemy kompleksowe rozwiązania oparte na wieloletnim doświadczeniu i najlepszych praktykach branżowych. Nasz zespół <a href="https://www.piib.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowanych inżynierów</a> i specjalistów zapewnia najwyższy standard obsługi technicznej i administracyjnej. Sprawdź nasze <a href="/uslugi/administrowanie-budynkami" className="text-[#DAA520] hover:underline">usługi administrowania budynkami</a> oraz <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądy budowlane</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Współpracujemy z renomowanymi instytucjami, takimi jak <a href="https://www.nfosigw.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej</a>, pomagając wspólnotom w pozyskiwaniu dofinansowania na modernizacje i termomodernizacje budynków. Oferujemy również profesjonalne <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">doradztwo i optymalizację kosztów</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <benefit.icon className="h-12 w-12 text-[#DAA520] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Obsługa wspólnot mieszkaniowych Warszawa - zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy <strong>kompleksową obsługę wspólnot mieszkaniowych w Warszawie</strong>, zgodną z wymogami <a href="https://www.gunb.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Głównego Urzędu Nadzoru Budowlanego</a> i standardami branżowymi. Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">konkurencyjne ceny</a> lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a> po indywidualną wycenę.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Jako <strong>certyfikowany zarządca wspólnot mieszkaniowych</strong>, zapewniamy pełną zgodność z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ustawą o własności lokali</a> oraz <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Prawem budowlanym</a>. Oferujemy również specjalistyczne usługi <a href="/uslugi/przeglady-piecioletnie" className="text-[#DAA520] hover:underline">przeglądów pięcioletnich</a> i <a href="/uslugi/zarzadzanie-najmem" className="text-[#DAA520] hover:underline">zarządzania najmem</a>.
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Contact Section */}
      <Contact />
      <Footer />
    </div>
  );
};

export default CommunityServices;
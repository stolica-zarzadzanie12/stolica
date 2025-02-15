import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2, PenTool as Tool, BarChart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Meta from '../../components/Meta';

const BuildingAdministration = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Profesjonalna obsługa',
      description: 'Kompleksowa administracja i utrzymanie nieruchomości na najwyższym poziomie'
    },
    {
      icon: Calculator,
      title: 'Optymalizacja kosztów',
      description: 'Redukcja kosztów administracyjnych średnio o 15-20% w pierwszym roku'
    },
    {
      icon: Clock,
      title: 'Dostępność 24/7',
      description: 'Całodobowa obsługa administracyjna i wsparcie techniczne'
    }
  ];

  const services = [
    {
      title: 'Administracja codzienna',
      description: 'Kompleksowa obsługa administracyjna budynku',
      icon: Building2,
      features: [
        'Nadzór nad porządkiem',
        'Koordynacja dostaw',
        'Obsługa recepcji',
        'Zarządzanie dostępem'
      ]
    },
    {
      title: 'Obsługa techniczna',
      description: 'Pełna obsługa techniczna budynku',
      icon: Tool,
      features: [
        'Konserwacja instalacji',
        'Przeglądy techniczne',
        'Naprawy bieżące',
        'Modernizacje'
      ]
    },
    {
      title: 'Zarządzanie mediami',
      description: 'Profesjonalne zarządzanie mediami',
      icon: BarChart,
      features: [
        'Monitoring zużycia',
        'Optymalizacja kosztów',
        'Rozliczenia mediów',
        'Audyty energetyczne'
      ]
    },
    {
      title: 'Bezpieczeństwo',
      description: 'Kompleksowa ochrona i bezpieczeństwo',
      icon: Shield,
      features: [
        'Monitoring obiektu',
        'Kontrola dostępu',
        'Ochrona fizyczna',
        'Systemy ppoż'
      ]
    },
    {
      title: 'Obsługa użytkowników',
      description: 'Profesjonalna obsługa mieszkańców',
      icon: Users2,
      features: [
        'Obsługa zgłoszeń',
        'Komunikacja bieżąca',
        'Wsparcie techniczne',
        'Rozwiązywanie problemów'
      ]
    },
    {
      title: 'Dokumentacja',
      description: 'Kompleksowe zarządzanie dokumentacją',
      icon: FileCheck,
      features: [
        'Książka obiektu',
        'Dokumentacja techniczna',
        'Protokoły przeglądów',
        'Raporty i analizy'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Audyt początkowy',
      description: 'Szczegółowa analiza stanu technicznego i potrzeb budynku'
    },
    {
      title: 'Plan administrowania',
      description: 'Opracowanie strategii i harmonogramu działań'
    },
    {
      title: 'Wdrożenie',
      description: 'Implementacja procesów i procedur administracyjnych'
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
        title="Administrowanie budynkami | Stolica - Profesjonalna obsługa"
        description="✓ Profesjonalne administrowanie budynkami w Warszawie ✓ Kompleksowa obsługa techniczna i administracyjna ✓ Optymalizacja kosztów do 20% ✓ Certyfikowani administratorzy nieruchomości ✓ Całodobowe wsparcie 24/7 ✓ 15 lat doświadczenia"
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
              Profesjonalne administrowanie budynkami w Warszawie | Certyfikowani administratorzy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Jako <a href="https://www.pfszn.pl/zarzadcy-nieruchomosci.html" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowany administrator nieruchomości</a> w Warszawie, oferujemy kompleksowe usługi administrowania budynkami zgodne z wymogami <a href="https://www.gunb.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Głównego Urzędu Nadzoru Budowlanego</a>. Nasz zespół doświadczonych administratorów gwarantuje sprawne funkcjonowanie każdego obiektu.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Dzięki 15-letniemu doświadczeniu w branży i współpracy z ponad 150 obiektami o łącznej powierzchni przekraczającej 500 000 m², gwarantujemy profesjonalne administrowanie budynkami zgodne z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Prawem budowlanym</a> i najwyższymi standardami branżowymi.
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
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Profesjonalne administrowanie budynkami"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Administrowanie budynkami Warszawa - dlaczego warto wybrać naszą firmę?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Oferujemy kompleksowe rozwiązania w zakresie administrowania budynkami, oparte na wieloletnim doświadczeniu i najlepszych praktykach branżowych. Nasz zespół <a href="https://www.piib.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowanych inżynierów</a> zapewnia najwyższy standard obsługi technicznej. Sprawdź nasze usługi <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądów budowlanych</a> i <a href="/uslugi/przeglady-piecioletnie" className="text-[#DAA520] hover:underline">przeglądów pięcioletnich</a>.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Współpracujemy z renomowanymi instytucjami, takimi jak <a href="https://www.nfosigw.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej</a>, pomagając w pozyskiwaniu dofinansowania na modernizacje. Oferujemy również profesjonalne <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">doradztwo i optymalizację kosztów</a>.
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
            <h2 className="text-4xl font-bold mb-4">Administrowanie budynkami - kompleksowy zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe administrowanie budynkami w Warszawie, zgodne z wytycznymi <a href="https://www.gov.pl/web/rozwoj-technologia/zarzadzanie-nieruchomosciami" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a>. Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">konkurencyjne ceny</a> lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Oferujemy specjalistyczne usługi dla <a href="/oferta/wspolnoty-mieszkaniowe" className="text-[#DAA520] hover:underline">wspólnot mieszkaniowych</a>, <a href="/oferta/deweloperzy" className="text-[#DAA520] hover:underline">deweloperów</a> i <a href="/oferta/dla-biznesu" className="text-[#DAA520] hover:underline">klientów biznesowych</a>.
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
            <h2 className="text-4xl font-bold mb-4">Profesjonalne administrowanie budynkami - proces wdrożenia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Wdrażamy kompleksowy system administrowania budynkami, który gwarantuje sprawne 
              przejęcie obiektu i optymalizację wszystkich procesów zarządczych. Nasz 
              sprawdzony proces wdrożenia zapewnia płynne przejście i natychmiastową 
              poprawę efektywności zarządzania.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Każde wdrożenie poprzedzone jest szczegółową analizą potrzeb i stanu technicznego 
              obiektu. Na tej podstawie opracowujemy indywidualną strategię zarządzania, która 
              uwzględnia specyfikę budynku, oczekiwania właścicieli i potrzeby użytkowników. 
              Proces wdrożenia jest prowadzony etapowo, co pozwala na płynne przejęcie obowiązków 
              i minimalizację ewentualnych zakłóceń.
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
            <h2 className="text-4xl font-bold mb-4">Administrator budynków Warszawa - nasze doświadczenie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Jako doświadczony administrator budynków w Warszawie, posiadamy wszystkie wymagane certyfikaty i uprawnienia nadane przez <a href="https://www.mi.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwo Infrastruktury</a>. Nasz zespół regularnie uczestniczy w szkoleniach organizowanych przez <a href="https://www.pfrn.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polską Federację Rynku Nieruchomości</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dowiedz się więcej o naszym <a href="/about" className="text-[#DAA520] hover:underline">doświadczeniu i certyfikatach</a> lub sprawdź <a href="/blog" className="text-[#DAA520] hover:underline">nasz blog ekspercki</a>. Zapoznaj się również z <a href="/faq" className="text-[#DAA520] hover:underline">najczęściej zadawanymi pytaniami</a>.
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

export default BuildingAdministration;
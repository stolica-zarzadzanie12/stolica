import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2, BarChart, PenTool as Tool } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Meta from '../../components/Meta';

const RentalManagement = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Bezpieczeństwo',
      description: 'Gwarantowany przychód z najmu i pełne bezpieczeństwo prawne'
    },
    {
      icon: Calculator,
      title: 'Optymalizacja przychodów',
      description: 'Maksymalizacja zysków z najmu poprzez optymalizację stawek i kosztów'
    },
    {
      icon: Clock,
      title: 'Oszczędność czasu',
      description: 'Przejmujemy wszystkie obowiązki związane z zarządzaniem najmem'
    }
  ];

  const services = [
    {
      title: 'Pozyskiwanie najemców',
      description: 'Profesjonalne pozyskiwanie i weryfikacja najemców',
      icon: Users2,
      features: [
        'Marketing nieruchomości',
        'Weryfikacja najemców',
        'Negocjacje warunków',
        'Przygotowanie umów'
      ]
    },
    {
      title: 'Obsługa najmu',
      description: 'Kompleksowa obsługa procesu najmu',
      icon: Building2,
      features: [
        'Przekazanie lokalu',
        'Rozliczanie mediów',
        'Obsługa płatności',
        'Windykacja należności'
      ]
    },
    {
      title: 'Obsługa techniczna',
      description: 'Pełna obsługa techniczna nieruchomości',
      icon: Tool,
      features: [
        'Przeglądy okresowe',
        'Naprawy i konserwacje',
        'Serwis awaryjny 24/7',
        'Remonty i modernizacje'
      ]
    },
    {
      title: 'Wsparcie prawne',
      description: 'Profesjonalna obsługa prawna najmu',
      icon: Shield,
      features: [
        'Bezpieczne umowy',
        'Ochrona interesów',
        'Obsługa prawna',
        'Doradztwo podatkowe'
      ]
    },
    {
      title: 'Raportowanie',
      description: 'Szczegółowe raporty i analizy',
      icon: BarChart,
      features: [
        'Raporty finansowe',
        'Analiza rentowności',
        'Statystyki najmu',
        'Rekomendacje działań'
      ]
    },
    {
      title: 'Dokumentacja',
      description: 'Kompleksowe zarządzanie dokumentacją',
      icon: FileCheck,
      features: [
        'Dokumentacja najmu',
        'Protokoły zdawczo-odbiorcze',
        'Rozliczenia i faktury',
        'Archiwizacja dokumentów'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Analiza nieruchomości',
      description: 'Ocena potencjału i przygotowanie strategii najmu'
    },
    {
      title: 'Pozyskanie najemcy',
      description: 'Marketing, weryfikacja i podpisanie umowy'
    },
    {
      title: 'Obsługa bieżąca',
      description: 'Zarządzanie najmem i obsługa techniczna'
    },
    {
      title: 'Optymalizacja',
      description: 'Ciągłe doskonalenie i maksymalizacja zysków'
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
        title="Zarządzanie najmem | Stolica - Profesjonalna obsługa"
        description="✓ Profesjonalne zarządzanie najmem w Warszawie ✓ Gwarantowany przychód z najmu ✓ Kompleksowa weryfikacja najemców ✓ Wsparcie techniczne 24/7 ✓ Pełne bezpieczeństwo prawne ✓ 15 lat doświadczenia"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <strong>Zarządzanie najmem Warszawa</strong> | <strong>Profesjonalna obsługa</strong> z gwarancją przychodu | 15 lat doświadczenia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Oferujemy <strong>profesjonalne zarządzanie najmem w Warszawie</strong>, zapewniając kompleksową 
              obsługę i gwarantowany przychód z najmu. Nasz zespół ekspertów przejmuje wszystkie 
              obowiązki związane z zarządzaniem najmem, zapewniając właścicielom spokój i bezpieczeństwo.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Dzięki 15-letniemu doświadczeniu w zarządzaniu najmem, skutecznie optymalizujemy 
              przychody i minimalizujemy ryzyko. Zapewniamy pełną obsługę prawną, techniczną 
              i administracyjną, pozwalając właścicielom skupić się na tym, co dla nich najważniejsze.
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
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Profesjonalne zarządzanie najmem"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Zarządzanie najmem Warszawa - dlaczego warto wybrać naszą firmę?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Jako <strong>doświadczony zarządca najmu w Warszawie</strong>, oferujemy kompleksowe rozwiązania 
                  zapewniające maksymalizację zysków i pełne bezpieczeństwo właścicielom nieruchomości. 
                  Nasza usługa obejmuje wszystkie aspekty zarządzania najmem, od pozyskania najemców 
                  po obsługę techniczną i rozliczenia.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Dzięki profesjonalnemu podejściu i wypracowanym procedurom, skutecznie optymalizujemy 
                  przychody z najmu i minimalizujemy ryzyko przestojów. Nasz zespół ekspertów dba o 
                  każdy aspekt zarządzania, zapewniając właścicielom spokój i stabilne przychody.
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
                  <a href="/uslugi/zarzadzanie-najmem" className="text-[#DAA520] hover:underline">
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
            <h2 className="text-4xl font-bold mb-4">Kompleksowe zarządzanie najmem w Warszawie - zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Kompleksowe zarządzanie najmem</strong> obejmuje szeroki zakres usług. 
              Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">ceny zarządzania najmem</a> 
              lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a> po więcej informacji.
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
            <h2 className="text-4xl font-bold mb-4">Profesjonalne zarządzanie najmem - etapy współpracy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Poznaj etapy wdrożenia profesjonalnego zarządzania najmem
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
            <h2 className="text-4xl font-bold mb-4">Zarządzanie najmem Warszawa - 15 lat doświadczenia w branży</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Wieloletnie doświadczenie i setki zadowolonych klientów
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

export default RentalManagement;
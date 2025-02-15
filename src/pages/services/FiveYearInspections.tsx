import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2, BarChart, PenTool as Tool } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Meta from '../../components/Meta';

const FiveYearInspections = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Kompleksowa ocena',
      description: 'Szczegółowa analiza stanu technicznego wszystkich elementów budynku'
    },
    {
      icon: FileCheck,
      title: 'Pełna dokumentacja',
      description: 'Profesjonalna dokumentacja techniczna zgodna z wymogami prawa'
    },
    {
      icon: Clock,
      title: 'Terminowa realizacja',
      description: 'Gwarancja dotrzymania ustawowych terminów przeglądów'
    }
  ];

  const services = [
    {
      title: 'Przegląd konstrukcji',
      description: 'Kompleksowa ocena elementów konstrukcyjnych',
      icon: Building2,
      features: [
        'Ocena stanu fundamentów',
        'Kontrola ścian konstrukcyjnych',
        'Przegląd stropów i dachu',
        'Analiza elementów nośnych'
      ]
    },
    {
      title: 'Przegląd instalacji',
      description: 'Kontrola wszystkich instalacji',
      icon: Tool,
      features: [
        'Instalacje elektryczne',
        'Instalacje odgromowe',
        'Instalacje gazowe',
        'Instalacje wodno-kanalizacyjne'
      ]
    },
    {
      title: 'Ocena efektywności',
      description: 'Analiza efektywności energetycznej',
      icon: BarChart,
      features: [
        'Ocena izolacji termicznej',
        'Analiza zużycia energii',
        'Badanie szczelności',
        'Rekomendacje optymalizacji'
      ]
    },
    {
      title: 'Przegląd elewacji',
      description: 'Kontrola stanu elewacji',
      icon: Shield,
      features: [
        'Ocena stanu tynków',
        'Kontrola izolacji',
        'Przegląd okładzin',
        'Analiza uszkodzeń'
      ]
    },
    {
      title: 'Dokumentacja',
      description: 'Kompleksowa dokumentacja',
      icon: FileCheck,
      features: [
        'Protokoły kontroli',
        'Dokumentacja fotograficzna',
        'Zalecenia naprawcze',
        'Plan modernizacji'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Przygotowanie',
      description: 'Analiza dokumentacji i planowanie przeglądu'
    },
    {
      title: 'Kontrola',
      description: 'Szczegółowy przegląd wszystkich elementów'
    },
    {
      title: 'Dokumentacja',
      description: 'Przygotowanie kompleksowej dokumentacji'
    },
    {
      title: 'Rekomendacje',
      description: 'Plan działań naprawczych i modernizacyjnych'
    }
  ];

  const requirements = [
    {
      title: 'Elementy konstrukcyjne',
      items: [
        'Stan fundamentów i ścian konstrukcyjnych',
        'Kondycja stropów i więźby dachowej',
        'Ocena elementów nośnych',
        'Analiza spękań i odkształceń'
      ]
    },
    {
      title: 'Instalacje i systemy',
      items: [
        'Instalacja elektryczna i odgromowa',
        'Instalacja gazowa i wentylacyjna',
        'System przeciwpożarowy',
        'Instalacje wodno-kanalizacyjne'
      ]
    },
    {
      title: 'Elementy zewnętrzne',
      items: [
        'Stan elewacji i tynków',
        'Izolacja przeciwwilgociowa',
        'Pokrycie dachowe',
        'Stolarka okienna i drzwiowa'
      ]
    },
    {
      title: 'Efektywność energetyczna',
      items: [
        'Izolacja termiczna budynku',
        'Szczelność przegród',
        'Efektywność systemów grzewczych',
        'Zużycie energii'
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
      <Meta
        title="Przeglądy pięcioletnie | Stolica - Profesjonalne kontrole"
        description="✓ Profesjonalne przeglądy pięcioletnie budynków w Warszawie ✓ Certyfikowani inspektorzy budowlani ✓ Kompleksowa dokumentacja techniczna ✓ Pełna zgodność z prawem budowlanym ✓ Gwarancja terminowej realizacji ✓ 15 lat doświadczenia"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Przeglądy pięcioletnie budynków w Warszawie | Certyfikowani inspektorzy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Jako <a href="https://www.piib.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowani inspektorzy budowlani</a>, przeprowadzamy kompleksowe przeglądy pięcioletnie zgodnie z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940890414" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Prawem budowlanym</a> i wytycznymi <a href="https://www.gunb.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Głównego Urzędu Nadzoru Budowlanego</a>.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Nasz zespół przeprowadza szczegółowe kontrole zgodnie ze standardami <a href="https://www.piib.org.pl/standardy-budowlane" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polskiej Izby Inżynierów Budownictwa</a>. Oferujemy również regularne <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądy budowlane</a> i kompleksowe <a href="/uslugi/administrowanie-budynkami" className="text-[#DAA520] hover:underline">administrowanie budynkami</a>.
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Przeglądy pięcioletnie"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Przeglądy pięcioletnie budynków - korzyści współpracy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                  Oferujemy profesjonalne przeglądy pięcioletnie wykonywane zgodnie z wymogami <a href="https://www.gov.pl/web/rozwoj-technologia/kontrole-okresowe-obiektow-budowlanych" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a>. Sprawdź również nasze usługi <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">doradztwa i optymalizacji</a>.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                  Współpracujemy z <a href="https://www.pzitb.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polskim Związkiem Inżynierów i Techników Budownictwa</a>, zapewniając najwyższe standardy kontroli. Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">konkurencyjne ceny</a> lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a>.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Zapewniamy pełną dokumentację techniczną i wsparcie w realizacji zaleceń
                  pokontrolnych. Nasz zespół służy profesjonalnym doradztwem w zakresie
                  planowania i przeprowadzania niezbędnych prac modernizacyjnych.
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

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Profesjonalne przeglądy pięcioletnie - zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Kompleksowe przeglądy techniczne i wsparcie w utrzymaniu nieruchomości
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Przegląd pięcioletni to kompleksowa kontrola stanu technicznego i przydatności
              do użytkowania obiektu budowlanego. Obejmuje szczegółową ocenę wszystkich
              elementów budynku, instalacji i urządzeń służących ochronie środowiska.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nasi inspektorzy posiadają wszystkie wymagane uprawnienia i wieloletnie
              doświadczenie w przeprowadzaniu kontroli technicznych. Gwarantujemy
              profesjonalne podejście i dokładność wykonywanych przeglądów.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#DAA520]">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nasze usługi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kompleksowe przeglądy techniczne i wsparcie w utrzymaniu nieruchomości
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proces przeglądu pięcioletniego budynku</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Poznaj etapy realizacji profesjonalnego przeglądu pięcioletniego
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Każdy przegląd pięcioletni realizowany jest według sprawdzonej metodologii,
              która gwarantuje dokładność kontroli i kompletność dokumentacji. Nasz
              systematyczny sposób działania pozwala na skuteczną identyfikację wszystkich
              aspektów wymagających uwagi.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proces przeglądu jest w pełni transparentny, a klient otrzymuje szczegółowe
              informacje na każdym etapie realizacji. Wszystkie zalecenia są dokładnie
              omawiane i uzasadniane, co pozwala na świadome planowanie dalszych działań.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl h-full shadow-md">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certyfikowani inspektorzy - doświadczenie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Nasz zespół to doświadczeni inspektorzy budowlani certyfikowani przez <a href="https://www.mi.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwo Infrastruktury</a>. Dowiedz się więcej o naszym <a href="/about" className="text-[#DAA520] hover:underline">doświadczeniu i certyfikatach</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sprawdź nasz <a href="/blog" className="text-[#DAA520] hover:underline">blog ekspercki</a> z artykułami o przeglądach budowlanych lub zapoznaj się z <a href="/faq" className="text-[#DAA520] hover:underline">najczęściej zadawanymi pytaniami</a>. Oferujemy specjalistyczne usługi dla <a href="/oferta/wspolnoty-mieszkaniowe" className="text-[#DAA520] hover:underline">wspólnot mieszkaniowych</a>, <a href="/oferta/deweloperzy" className="text-[#DAA520] hover:underline">deweloperów</a> i <a href="/oferta/dla-biznesu" className="text-[#DAA520] hover:underline">klientów biznesowych</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-md"
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

export default FiveYearInspections;
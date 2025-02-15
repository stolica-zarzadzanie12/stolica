import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const PrivateServices = () => {
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
      title: 'Kompleksowe zarządzanie najmem',
      description: 'Pełna obsługa procesu najmu od A do Z',
      icon: Building2,
      features: [
        'Pozyskiwanie najemców',
        'Przygotowanie umów',
        'Przekazanie lokalu',
        'Rozliczenia i raporty'
      ]
    },
    {
      title: 'Obsługa techniczna',
      description: 'Profesjonalna obsługa techniczna nieruchomości',
      icon: FileCheck,
      features: [
        'Przeglądy okresowe',
        'Naprawy i konserwacje',
        'Serwis awaryjny 24/7',
        'Remonty i modernizacje'
      ]
    },
    {
      title: 'Obsługa finansowa',
      description: 'Profesjonalne zarządzanie finansami',
      icon: Calculator,
      features: [
        'Rozliczanie najmu',
        'Obsługa płatności',
        'Windykacja należności',
        'Raporty finansowe'
      ]
    },
    {
      title: 'Wsparcie prawne',
      description: 'Kompleksowa obsługa prawna najmu',
      icon: Shield,
      features: [
        'Bezpieczne umowy',
        'Ochrona interesów',
        'Obsługa prawna',
        'Doradztwo podatkowe'
      ]
    },
    {
      title: 'Obsługa najemców',
      description: 'Profesjonalna komunikacja i wsparcie',
      icon: Users2,
      features: [
        'Weryfikacja najemców',
        'Obsługa zgłoszeń',
        'Komunikacja bieżąca',
        'Rozwiązywanie problemów'
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
              <strong>Zarządzanie najmem Warszawa</strong> | <strong>Profesjonalna obsługa właścicieli prywatnych</strong>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Jako <a href="https://www.pfszn.pl/zarzadcy-nieruchomosci.html" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">certyfikowany zarządca nieruchomości</a>, oferujemy profesjonalne zarządzanie najmem zgodne z wymogami <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940850388" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ustawy o ochronie praw lokatorów</a>. Zapewniamy gwarantowany przychód i pełne bezpieczeństwo prawne.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Współpracujemy z renomowanymi kancelariami prawnymi i <a href="https://www.pfrn.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polską Federacją Rynku Nieruchomości</a>. Oferujemy również profesjonalne <a href="/uslugi/administrowanie-budynkami" className="text-[#DAA520] hover:underline">administrowanie budynkami</a> i <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądy budowlane</a>.
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
            <h2 className="text-4xl font-bold mb-4">Zarządzanie najmem Warszawa - korzyści dla właścicieli prywatnych</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jako <strong>profesjonalny zarządca najmu w Warszawie</strong>, oferujemy kompleksowe rozwiązania zgodne z wytycznymi <a href="https://www.gov.pl/web/rozwoj-technologia/zarzadzanie-nieruchomosciami" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a>. Nasz zespół ekspertów zapewnia najwyższy standard obsługi i realne oszczędności.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Współpracujemy z <a href="https://www.nfosigw.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Narodowym Funduszem Ochrony Środowiska i Gospodarki Wodnej</a>, pomagając w pozyskiwaniu dofinansowania na modernizacje. Oferujemy również profesjonalne <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">doradztwo i optymalizację kosztów</a>.
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
            <h2 className="text-4xl font-bold mb-4">Profesjonalne zarządzanie najmem w Warszawie - kompleksowa obsługa właścicieli</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy <strong>kompleksowe zarządzanie najmem w Warszawie</strong>, zgodne z wymogami prawnymi i standardami branżowymi. Sprawdź nasze <a href="/cennik" className="text-[#DAA520] hover:underline">konkurencyjne ceny</a> lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się z nami</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Jako <strong>certyfikowany zarządca nieruchomości</strong>, zapewniamy pełną zgodność z <a href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940890414" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Prawem budowlanym</a>. Oferujemy również usługi dla <a href="/oferta/wspolnoty-mieszkaniowe" className="text-[#DAA520] hover:underline">wspólnot mieszkaniowych</a> i <a href="/oferta/dla-biznesu" className="text-[#DAA520] hover:underline">klientów biznesowych</a>.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certyfikowany zarządca najmu Warszawa - doświadczenie i referencje</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Jako doświadczony zarządca najmu w Warszawie, posiadamy wszystkie wymagane certyfikaty i uprawnienia nadane przez <a href="https://www.mi.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwo Infrastruktury</a>. Nasz zespół regularnie uczestniczy w szkoleniach organizowanych przez <a href="https://www.pfrn.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polską Federację Rynku Nieruchomości</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dowiedz się więcej o naszym <a href="/about" className="text-[#DAA520] hover:underline">doświadczeniu i certyfikatach</a> lub sprawdź <a href="/blog" className="text-[#DAA520] hover:underline">nasz blog ekspercki</a>. Zapoznaj się również z <a href="/faq" className="text-[#DAA520] hover:underline">najczęściej zadawanymi pytaniami</a>.
            </p>
          </div>

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

export default PrivateServices;
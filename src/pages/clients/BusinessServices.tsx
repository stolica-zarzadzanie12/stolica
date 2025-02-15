import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const BusinessServices = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Kompleksowa obsługa',
      description: 'Pełne zarządzanie portfelem nieruchomości i optymalizacja procesów'
    },
    {
      icon: Calculator,
      title: 'Optymalizacja kosztów',
      description: 'Redukcja kosztów operacyjnych średnio o 15-20% w pierwszym roku'
    },
    {
      icon: Clock,
      title: 'Oszczędność czasu',
      description: 'Dedykowany zespół ekspertów i całodobowe wsparcie'
    }
  ];

  const services = [
    {
      title: 'Zarządzanie portfelem',
      description: 'Kompleksowe zarządzanie portfelem nieruchomości',
      icon: Building2,
      features: [
        'Strategia zarządzania',
        'Optymalizacja portfela',
        'Analiza efektywności',
        'Planowanie rozwoju'
      ]
    },
    {
      title: 'Optymalizacja kosztów',
      description: 'Profesjonalna optymalizacja kosztów',
      icon: Calculator,
      features: [
        'Audyty i analizy',
        'Centralizacja zakupów',
        'Efektywność energetyczna',
        'Kontrola budżetu'
      ]
    },
    {
      title: 'Obsługa techniczna',
      description: 'Kompleksowa obsługa techniczna',
      icon: FileCheck,
      features: [
        'Zarządzanie techniczne',
        'Przeglądy i konserwacje',
        'Modernizacje i remonty',
        'Serwis 24/7'
      ]
    },
    {
      title: 'Wsparcie prawne',
      description: 'Profesjonalne wsparcie prawne',
      icon: Shield,
      features: [
        'Obsługa prawna',
        'Audyty zgodności',
        'Negocjacje umów',
        'Doradztwo podatkowe'
      ]
    },
    {
      title: 'Raportowanie',
      description: 'Kompleksowe raportowanie i analizy',
      icon: Users2,
      features: [
        'Raporty operacyjne',
        'Analizy finansowe',
        'KPI i benchmarking',
        'Rekomendacje działań'
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
              Profesjonalne zarządzanie nieruchomościami dla biznesu
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kompleksowa obsługa portfeli nieruchomości, optymalizacja kosztów
              i profesjonalne wsparcie dla firm.
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
            <h2 className="text-4xl font-bold mb-4">Zarządzanie portfelem nieruchomości Warszawa - korzyści dla firm</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania w zakresie zarządzania nieruchomościami dla firm,
              zapewniając optymalizację kosztów i profesjonalne wsparcie
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
            <h2 className="text-4xl font-bold mb-4">Kompleksowe zarządzanie nieruchomościami dla biznesu - zakres usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kompleksowe wsparcie w zarządzaniu portfelem nieruchomości
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

export default BusinessServices;
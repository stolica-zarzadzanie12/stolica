import React from 'react';
import { Shield, Building2, Calculator, Clock, FileCheck, Users2, BarChart, PenTool as Tool } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Meta from '../../components/Meta';

const ConsultingOptimization = () => {
  const benefits = [
    {
      icon: Calculator,
      title: 'Redukcja kosztów',
      description: 'Średnia optymalizacja kosztów na poziomie 15-25% w pierwszym roku'
    },
    {
      icon: Shield,
      title: 'Profesjonalne wsparcie',
      description: 'Dedykowany zespół ekspertów z wieloletnim doświadczeniem'
    },
    {
      icon: BarChart,
      title: 'Mierzalne efekty',
      description: 'Regularne raporty i analiza efektywności wdrożonych rozwiązań'
    }
  ];

  const services = [
    {
      title: 'Audyty i analizy',
      description: 'Kompleksowe audyty nieruchomości',
      icon: Calculator,
      features: [
        'Audyty kosztów operacyjnych',
        'Analizy efektywności energetycznej',
        'Ocena procesów zarządzania',
        'Identyfikacja potencjału oszczędności'
      ]
    },
    {
      title: 'Optymalizacja kosztów',
      description: 'Profesjonalna optymalizacja wydatków',
      icon: BarChart,
      features: [
        'Redukcja kosztów mediów',
        'Optymalizacja umów z dostawcami',
        'Efektywność energetyczna',
        'Kontrola budżetu'
      ]
    },
    {
      title: 'Doradztwo techniczne',
      description: 'Wsparcie w kwestiach technicznych',
      icon: Tool,
      features: [
        'Ocena stanu technicznego',
        'Planowanie modernizacji',
        'Doradztwo remontowe',
        'Optymalizacja instalacji'
      ]
    },
    {
      title: 'Doradztwo prawne',
      description: 'Profesjonalne wsparcie prawne',
      icon: Shield,
      features: [
        'Analiza umów',
        'Optymalizacja procedur',
        'Zgodność z przepisami',
        'Doradztwo podatkowe'
      ]
    },
    {
      title: 'Optymalizacja procesów',
      description: 'Usprawnienie zarządzania',
      icon: FileCheck,
      features: [
        'Analiza procesów',
        'Wdrażanie usprawnień',
        'Automatyzacja działań',
        'Monitoring efektów'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Audyt początkowy',
      description: 'Szczegółowa analiza obecnej sytuacji i potencjału optymalizacji'
    },
    {
      title: 'Plan działania',
      description: 'Opracowanie strategii i harmonogramu wdrożenia zmian'
    },
    {
      title: 'Implementacja',
      description: 'Wdrożenie rekomendowanych rozwiązań i usprawnień'
    },
    {
      title: 'Monitoring',
      description: 'Ciągła analiza efektów i dalsze doskonalenie'
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
        title="Doradztwo i optymalizacje | Stolica - Profesjonalne wsparcie"
        description="✓ Profesjonalne doradztwo w zarządzaniu nieruchomościami Warszawa ✓ Audyty i optymalizacja kosztów do 25% ✓ Certyfikowani eksperci ✓ Kompleksowe analizy i raporty ✓ Wsparcie prawne i techniczne ✓ 15 lat doświadczenia"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white hero-text-shadow tracking-tight">
              <strong>Doradztwo nieruchomości Warszawa</strong> | <strong>Optymalizacja kosztów zarządzania</strong> do 25% | Certyfikowani eksperci
            </h1>
            <p className="text-xl text-white mb-8 hero-text-shadow">
              Oferujemy <strong>profesjonalne doradztwo w zarządzaniu nieruchomościami</strong> i <strong>optymalizację kosztów</strong> 
              nieruchomościami w Warszawie. Nasz zespół ekspertów pomaga zidentyfikować obszary 
              nieefektywności i wdrożyć rozwiązania przynoszące realne oszczędności.
            </p>
            <p className="text-xl text-white mb-8 hero-text-shadow">
              Dzięki 15-letniemu doświadczeniu w branży, skutecznie redukujemy koszty zarządzania 
              średnio o 15-25% w pierwszym roku współpracy. Zapewniamy kompleksowe wsparcie w 
              optymalizacji procesów i wdrażaniu efektywnych rozwiązań.
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
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Doradztwo i optymalizacja"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Doradztwo nieruchomości Warszawa - dlaczego warto z nami współpracować?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Jako <strong>eksperci w optymalizacji kosztów</strong> zarządzania nieruchomościami, oferujemy 
                  kompleksowe wsparcie doradcze oparte na wieloletnim doświadczeniu i sprawdzonych 
                  metodach. Nasze działania zawsze koncentrują się na osiąganiu wymiernych rezultatów 
                  i realnych oszczędności.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Współpracujemy z renomowanymi instytucjami, takimi jak <a href="https://www.pfszn.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polska Federacja Stowarzyszeń Zarządców Nieruchomości</a> 
                  i <a href="https://www.piib.org.pl/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Polska Izba Inżynierów Budownictwa</a>, 
                  co gwarantuje najwyższy poziom świadczonych usług doradczych.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Każdy projekt optymalizacyjny poprzedzamy szczegółową analizą obecnej sytuacji 
                  i potencjału oszczędności. Nasze rekomendacje zawsze uwzględniają specyfikę 
                  obiektu i możliwości techniczne, zapewniając realność proponowanych rozwiązań.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Dowiedz się więcej o naszych usługach <a href="/uslugi/zarzadzanie-nieruchomosciami" className="text-[#DAA520] hover:underline">zarządzania nieruchomościami</a> 
                  i <a href="/uslugi/administrowanie-budynkami" className="text-[#DAA520] hover:underline">administrowania budynkami</a>. 
                  Sprawdź też nasze <a href="/uslugi/przeglady-budowlane" className="text-[#DAA520] hover:underline">przeglądy budowlane</a> 
                  i <a href="/uslugi/przeglady-piecioletnie" className="text-[#DAA520] hover:underline">przeglądy pięcioletnie</a>.
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
                  <a href="/uslugi/doradztwo-i-optymalizacje" className="text-[#DAA520] hover:underline">
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
            <h2 className="text-4xl font-bold mb-4">Optymalizacja kosztów zarządzania nieruchomościami Warszawa - kompleksowe usługi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Kompleksowe doradztwo i optymalizacja</strong> obejmuje szeroki zakres usług. 
              Zapoznaj się z naszym <a href="/cennik" className="text-[#DAA520] hover:underline">cennikiem</a> 
              lub <a href="/contact" className="text-[#DAA520] hover:underline">skontaktuj się</a> po szczegółową ofertę.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Nasze usługi doradcze są zgodne z wytycznymi <a href="https://www.gov.pl/web/rozwoj-technologia/zarzadzanie-nieruchomosciami" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Ministerstwa Rozwoju i Technologii</a> 
              oraz standardami <a href="https://www.nfosigw.gov.pl/oferta-finansowania/efektywnosc-energetyczna/" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej</a>.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Oferujemy również specjalistyczne doradztwo dla <a href="/oferta/wspolnoty-mieszkaniowe" className="text-[#DAA520] hover:underline">wspólnot mieszkaniowych</a>, 
              <a href="/oferta/deweloperzy" className="text-[#DAA520] hover:underline">deweloperów</a> 
              i <a href="/oferta/dla-biznesu" className="text-[#DAA520] hover:underline">klientów biznesowych</a>.
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
            <h2 className="text-4xl font-bold mb-4">Profesjonalne doradztwo nieruchomości Warszawa - proces optymalizacji kosztów</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Poznaj etapy wdrożenia optymalizacji w Twojej nieruchomości
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Nasze doradztwo obejmuje kompleksową analizę wszystkich aspektów zarządzania nieruchomością:
            </p>
            <ul className="text-left max-w-2xl mx-auto mt-4 space-y-2">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2"></span>
                <p className="text-gray-600">Audyt efektywności energetycznej i rekomendacje modernizacji</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2"></span>
                <p className="text-gray-600">Analiza umów z dostawcami i możliwości optymalizacji</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2"></span>
                <p className="text-gray-600">Ocena procesów zarządzania i propozycje usprawnień</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2"></span>
                <p className="text-gray-600">Doradztwo w zakresie pozyskiwania finansowania i dotacji</p>
              </li>
            </ul>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Więcej informacji o naszych usługach znajdziesz w sekcji <a href="/faq" className="text-[#DAA520] hover:underline">najczęściej zadawanych pytań</a> 
              lub na naszym <a href="/blog" className="text-[#DAA520] hover:underline">blogu eksperckim</a>.
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
            <h2 className="text-4xl font-bold mb-4">Eksperci w optymalizacji kosztów zarządzania nieruchomościami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Nasze wieloletnie doświadczenie i certyfikowani specjaliści gwarantują najwyższą jakość usług doradczych
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Współpracujemy z czołowymi instytucjami branżowymi i regularnie podnosimy kwalifikacje naszego zespołu.
              Dowiedz się więcej o naszym <a href="/about" className="text-[#DAA520] hover:underline">doświadczeniu i certyfikatach</a>.
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

export default ConsultingOptimization
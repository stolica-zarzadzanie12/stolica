import React, { useEffect, useRef, useState } from 'react';
import {
  Building2, Users2, Award, TrendingUp, Shield, Banknote,
  Clock, FileCheck, HeartHandshake, Scale, Briefcase, BadgeCheck
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useIntersectionObserver({
    threshold: 0.2,
    onIntersect: () => setIsVisible(true),
  });

  const stats = [
    {
      icon: Building2,
      value: 150,
      label: 'Zarządzanych Nieruchomości',
    },
    {
      icon: Users2,
      value: 1000,
      label: 'Zadowolonych Klientów',
    },
    {
      icon: Award,
      value: 15,
      label: 'Lat Doświadczenia',
    },
    {
      icon: TrendingUp,
      value: 99,
      label: 'Skuteczność (%)',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Pełne Ubezpieczenie OC',
      description: 'Jako profesjonalny zarządca nieruchomości w Warszawie posiadamy ubezpieczenie OC na sumę 5 000 000 zł. Dzięki temu gwarantujemy pełne bezpieczeństwo finansowe naszym klientom oraz spokój w zarządzaniu nieruchomością. Wszystkie nasze działania są objęte kompleksową ochroną ubezpieczeniową.'
    },
    {
      icon: Banknote,
      title: 'Optymalizacja Kosztów',
      description: 'Nasze wieloletnie doświadczenie w zarządzaniu nieruchomościami pozwala nam skutecznie optymalizować koszty w każdym obszarze. Dzięki profesjonalnemu podejściu i znajomości rynku, osiągamy średnią redukcję kosztów utrzymania nieruchomości o 15-20% już w pierwszym roku współpracy. Regularnie analizujemy wydatki i wdrażamy rozwiązania zwiększające efektywność.'
    },
    {
      icon: Clock,
      title: 'Szybkość Reakcji',
      description: 'Zapewniamy błyskawiczną reakcję na wszelkie zgłoszenia, gwarantując czas odpowiedzi do 2 godzin w sytuacjach awaryjnych. Nasz zespół techniczny jest dostępny przez całą dobę, 7 dni w tygodniu, 365 dni w roku. Dzięki rozbudowanej sieci sprawdzonych podwykonawców możemy szybko reagować na każde zgłoszenie w Warszawie i okolicach.'
    },
    {
      icon: FileCheck,
      title: 'Transparentna Dokumentacja',
      description: 'Stawiamy na pełną przejrzystość w zarządzaniu nieruchomościami. Nasi klienci mają całodobowy dostęp online do kompletnej dokumentacji, szczegółowych raportów i bieżących rozliczeń poprzez dedykowany portal internetowy. Wszystkie dokumenty są prowadzone zgodnie z najwyższymi standardami i aktualnymi wymogami prawnymi.'
    },
    {
      icon: HeartHandshake,
      title: 'Dedykowany Opiekun',
      description: 'Każdej zarządzanej nieruchomości przydzielamy dedykowanego opiekuna, który doskonale zna specyfikę obiektu i potrzeby klientów. Opiekun jest dostępny pod bezpośrednim numerem telefonu i stanowi główny punkt kontaktu we wszystkich sprawach związanych z nieruchomością. Zapewniamy indywidualne podejście i stałą opiekę na najwyższym poziomie.'
    },
    {
      icon: Scale,
      title: 'Zgodność Prawna',
      description: 'Nasz zespół prawny na bieżąco śledzi wszystkie zmiany w przepisach dotyczących zarządzania nieruchomościami. Gwarantujemy pełną zgodność działań z aktualnymi regulacjami prawnymi i normami branżowymi. Dbamy o bezpieczeństwo prawne naszych klientów i zapewniamy profesjonalne doradztwo w kwestiach prawnych.'
    },
    {
      icon: Briefcase,
      title: 'Kompleksowa Obsługa',
      description: 'Oferujemy pełen zakres usług zarządzania nieruchomościami w Warszawie, obejmujący administrację, księgowość, obsługę techniczną i prawną. Wszystkie usługi świadczymy w ramach jednej, przejrzystej umowy. Nasi klienci nie muszą martwić się o koordynację różnych dostawców - zapewniamy kompleksową obsługę na najwyższym poziomie.'
    },
    {
      icon: BadgeCheck,
      title: 'Certyfikowani Specjaliści',
      description: 'W naszym zespole pracują wyłącznie licencjonowani zarządcy nieruchomości z wieloletnim doświadczeniem w branży. Regularnie uczestniczymy w szkoleniach i zdobywamy nowe certyfikaty branżowe. Ciągłe podnoszenie kwalifikacji pozwala nam świadczyć usługi na najwyższym poziomie i wdrażać najnowsze rozwiązania w zarządzaniu nieruchomościami.'
    }
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">Dlaczego Warto Wybrać Naszą Firmę</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jako doświadczony zarządca nieruchomości w Warszawie, oferujemy kompleksowe usługi
            zarządzania i administracji. Nasze wieloletnie doświadczenie i profesjonalne podejście
            gwarantują najwyższą jakość obsługi oraz realne oszczędności dla naszych klientów.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal stagger">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <stat.icon
                className={`h-12 w-12 mx-auto mb-4 text-[#DAA520] ${
                  isVisible ? 'animate-pulse' : ''
                }`}
              />
              <div
                className={`text-4xl font-bold mb-2 ${
                  isVisible ? 'animate-count-up' : ''
                }`}
              >
                {isVisible ? stat.value : 0}
                {stat.label === 'Skuteczność (%)' ? '%' : ''}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal stagger">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden min-h-[200px]"
            >
              <div className="flex flex-col items-center text-center">
                <benefit.icon className="h-12 w-12 text-[#DAA520] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <div className="absolute inset-0 bg-[#DAA520] p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-y-auto">
                  <div className="text-sm text-white">
                    {benefit.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal reveal-fade-up">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300"
          >
            Zamów bezpłatną wycenę zarządzania
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
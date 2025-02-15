import React, { useRef } from 'react';
import { Shield, Users, Trophy } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">O nas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Od ponad 15 lat świadczymy najwyższej jakości usługi w zakresie zarządzania nieruchomościami w Warszawie i okolicach.
            Jako lider na rynku zarządzania nieruchomościami, obsługujemy ponad 150 obiektów o łącznej powierzchni przekraczającej 500 000 m². 
            Nasz zespół tworzą certyfikowani zarządcy nieruchomości, inżynierowie budownictwa, prawnicy i eksperci finansowi, którzy
            zapewniają kompleksową obsługę wspólnot mieszkaniowych, nieruchomości komercyjnych oraz prywatnych zgodnie z obowiązującymi standardami.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Dzięki wieloletniemu doświadczeniu i innowacyjnemu podejściu, pomagamy naszym klientom zredukować koszty zarządzania 
            średnio o 15-20% w pierwszym roku współpracy. Zapewniamy pełne bezpieczeństwo dzięki ubezpieczeniu OC na kwotę 1 000 000 zł 
            oraz gwarantujemy wsparcie techniczne 24/7.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Specjalizujemy się w kompleksowym zarządzaniu różnorodnymi typami nieruchomości: od kameralnych wspólnot mieszkaniowych,
            przez wielkopowierzchniowe obiekty handlowe, aż po nowoczesne biurowce klasy A. Naszym klientom oferujemy indywidualne
            podejście i rozwiązania dostosowane do specyfiki każdej nieruchomości. Stawiamy na efektywność energetyczną i automatyzację
            procesów, co przekłada się na wyższą jakość obsługi i realne oszczędności.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Nasza firma wyróżnia się kompleksowym podejściem do zarządzania nieruchomościami. Każdy obiekt otrzymuje dedykowanego
            zarządcę, który jest wspierany przez zespół specjalistów z różnych dziedzin. Dzięki temu możemy szybko reagować na
            potrzeby naszych klientów i efektywnie rozwiązywać nawet najbardziej złożone problemy. Nasi zarządcy regularnie
            podnoszą swoje kwalifikacje poprzez udział w szkoleniach i konferencjach branżowych.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            W ramach naszych usług zapewniamy pełną digitalizację procesów zarządzania. Nasi klienci mają dostęp do
            nowoczesnej platformy online, która umożliwia śledzenie wszystkich aspektów związanych z nieruchomością:
            od zgłoszeń technicznych, przez rozliczenia finansowe, aż po dokumentację techniczną. Stawiamy na transparentność
            i efektywną komunikację, co przekłada się na wysoką satysfakcję naszych klientów.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 reveal stagger">
          {[
            {
              icon: Shield,
              title: 'Bezpieczeństwo',
              description:
                'Gwarantujemy pełne bezpieczeństwo i transparentność w zarządzaniu Twoją nieruchomością. Posiadamy ubezpieczenie OC na 1 mln zł i wszystkie wymagane certyfikaty. Zapewniamy pełną zgodność z przepisami i regularne audyty.',
            },
            {
              icon: Users,
              title: 'Doświadczenie',
              description:
                'Nasz zespół to wykwalifikowani specjaliści z uprawnieniami i wieloletnim doświadczeniem w branży. Regularnie podnosimy kwalifikacje i śledzimy najnowsze trendy w zarządzaniu nieruchomościami.',
            },
            {
              icon: Trophy,
              title: 'Jakość',
              description:
                'Świadczymy usługi na najwyższym poziomie, dbając o każdy szczegół. Nasze standardy potwierdza 99% zadowolonych klientów i średnia ocena 4.9/5 w niezależnych rankingach.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <item.icon className="h-12 w-12 text-[#DAA520] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg reveal">
          <h3 className="text-3xl font-bold mb-6 text-center">Kompleksowa obsługa nieruchomości w Warszawie</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Kompleksowa obsługa nieruchomości</span>
                  <p className="text-sm text-gray-600 mt-1">Zapewniamy pełen zakres usług: od administracji, przez obsługę techniczną, 
                  po wsparcie prawne i księgowe. Działamy zgodnie z <a href="https://www.biznes.gov.pl/pl/opisy-procedur/-/proc/1610" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">wymogami prawnymi dla zarządców nieruchomości</a>. Nasz zespół ekspertów zapewnia kompleksową obsługę na każdym etapie zarządzania.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Dedykowany opiekun 24/7</span>
                  <p className="text-sm text-gray-600 mt-1">Każda nieruchomość ma swojego opiekuna dostępnego całodobowo.
                  Gwarantujemy szybką reakcję i profesjonalne wsparcie w każdej sytuacji. Nasz zespół techniczny jest w stanie
                  dotrzeć na miejsce w ciągu maksymalnie 2 godzin od zgłoszenia awarii.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Błyskawiczna reakcja</span>
                  <p className="text-sm text-gray-600 mt-1">Gwarantowany czas reakcji do 2 godzin w sytuacjach awaryjnych.
                  Własne ekipy techniczne i sprawdzeni podwykonawcy zapewniają szybkie rozwiązywanie problemów. Dysponujemy
                  rozbudowaną siecią specjalistów gotowych do natychmiastowej interwencji.</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Realne oszczędności</span>
                  <p className="text-sm text-gray-600 mt-1">Optymalizacja kosztów zarządzania i redukcja wydatków średnio o 15-20%
                  w pierwszym roku. Regularne audyty i monitoring kosztów zapewniają długoterminowe oszczędności. Wprowadzamy
                  innowacyjne rozwiązania energooszczędne i optymalizujemy procesy zarządzania.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Nowoczesne technologie</span>
                  <p className="text-sm text-gray-600 mt-1">System zgłoszeń online, portal dla mieszkańców, elektroniczny obieg
                  dokumentów i aplikacja mobilna zapewniają wygodę i szybki dostęp do informacji. Więcej o <a href="https://www.gov.pl/web/cyfryzacja/e-budownictwo" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:underline">cyfryzacji w budownictwie</a>.
                  Nasze rozwiązania technologiczne są stale rozwijane, aby zapewnić najwyższy komfort użytkowania.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium">Pełna transparentność</span>
                  <p className="text-sm text-gray-600 mt-1">Szczegółowe raporty finansowe i techniczne, regularne spotkania
                  informacyjne oraz stały dostęp do dokumentacji online zapewniają pełną kontrolę nad nieruchomością. Nasi
                  klienci otrzymują comiesięczne raporty z działań i rekomendacje optymalizacyjne.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-3xl font-bold mb-6 text-center">Doświadczony zarządca nieruchomości - fakty i liczby</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520]">150+</div>
                <div className="text-sm text-gray-600">Zarządzanych nieruchomości</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520]">500k m²</div>
                <div className="text-sm text-gray-600">Łączna powierzchnia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520]">15+</div>
                <div className="text-sm text-gray-600">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520]">99%</div>
                <div className="text-sm text-gray-600">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm reveal">
          <h3 className="text-3xl font-bold mb-6 text-center">Certyfikowany zarządca nieruchomości w Warszawie</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Uprawnienia i certyfikaty</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Licencjonowani zarządcy nieruchomości z wieloletnim doświadczeniem</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Ubezpieczenie OC na kwotę 1 000 000 zł</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Certyfikaty branżowe i regularne szkolenia</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Obszar działania</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Warszawa i okolice w promieniu 40 km</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Wszystkie dzielnice Warszawy</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Szybki czas reakcji do 2 godzin w całym obszarze</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#DAA520] to-[#B8860B] p-12 rounded-lg shadow-lg text-white reveal">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Rozpocznij współpracę z profesjonalnym zarządcą nieruchomości</h3>
            <p className="text-xl mb-8">
              Skorzystaj z bezpłatnej konsultacji i dowiedz się, jak możemy pomóc w zarządzaniu Twoją nieruchomością.
              Gwarantujemy redukcję kosztów i profesjonalną obsługę.
              <br />
              <span className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <a
                  href="tel:+48798696119"
                  className="inline-flex items-center text-white hover:text-white/90 transition-colors duration-300"
                >
                  <span className="bg-white/20 p-2 rounded-lg mr-2">📞</span>
                  +48 798 696 119
                </a>
                <a
                  href="mailto:kontakt@stolica-zarzadzanienieruchomosciami.pl"
                  className="inline-flex items-center text-white hover:text-white/90 transition-colors duration-300"
                >
                  <span className="bg-white/20 p-2 rounded-lg mr-2">✉️</span>
                  kontakt@stolica-zarzadzanienieruchomosciami.pl
                </a>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#DAA520] rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Zamów bezpłatną wycenę
              </a>
              <a
                href="/cennik"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#DAA520] transition-colors duration-300 font-semibold text-lg"
              >
                Sprawdź cennik
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Dołącz do grona 1000+ zadowolonych klientów i zacznij oszczędzać już dziś! Zadzwoń lub napisz do nas.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
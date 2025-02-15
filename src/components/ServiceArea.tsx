import React, { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, Clock, Shield, Car } from 'lucide-react';

const MAPS_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35522750266!2d20.92111271553548!3d52.233238644742586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1645523456789!5m2!1spl!2spl&circle=52.233238644742586,20.92111271553548,40000';

const ServiceArea = () => {
  const sectionRef = useIntersectionObserver();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Clock,
      title: 'Szybki czas reakcji',
      description: 'Gwarantujemy przyjazd w ciągu 2 godzin w sytuacjach awaryjnych na terenie Warszawy'
    },
    {
      icon: Shield,
      title: 'Pełne zabezpieczenie',
      description: 'Posiadamy rozbudowaną sieć sprawdzonych podwykonawców w każdej lokalizacji'
    },
    {
      icon: Car,
      title: 'Mobilne zespoły',
      description: 'Nasze zespoły są zawsze w ruchu, co zapewnia szybką reakcję w całym obszarze działania'
    }
  ];

  return (
    <section id="service-area" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full">
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">Obszar Działania</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Świadczymy profesjonalne usługi zarządzania nieruchomościami na terenie Warszawy 
            i okolicznych miejscowości w promieniu 40 kilometrów, zapewniając najwyższą 
            jakość obsługi i szybką reakcję na zgłoszenia
          </p>
        </div>

        {/* Mapa na całą szerokość */}
        <div 
          ref={mapRef}
          className="w-full h-[400px] md:h-[500px] mb-12 reveal reveal-fade-up bg-gray-100 relative"
        >
          {isMapVisible ? (
            <iframe
              src={MAPS_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa obszaru działania"
              className="w-full h-full absolute inset-0"
              onLoad={(e) => {
                const iframe = e.currentTarget;
                iframe.style.opacity = '1';
                iframe.style.transform = 'translateY(0)';
              }}
              css={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400">
                <MapPin className="h-12 w-12 mx-auto mb-4 animate-bounce" />
                <p>Ładowanie mapy...</p>
              </div>
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          {/* Lista lokalizacji */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 reveal stagger">
            {/* Dzielnice Warszawy */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-[#DAA520]" />
                <h3 className="text-xl font-semibold">Dzielnice Warszawy</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-1">
                  {['Bemowo', 'Białołęka', 'Bielany', 'Mokotów', 'Ochota', 
                    'Praga-Południe', 'Praga-Północ', 'Rembertów', 'Śródmieście'
                  ].map(district => (
                    <li key={district} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {district}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {['Targówek', 'Ursus', 'Ursynów', 'Wawer', 'Wesoła',
                    'Wilanów', 'Włochy', 'Wola', 'Żoliborz'
                  ].map(district => (
                    <li key={district} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {district}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Okoliczne miejscowości */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-[#DAA520]" />
                <h3 className="text-xl font-semibold">Okoliczne miejscowości</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-1">
                  {['Piaseczno', 'Pruszków', 'Legionowo', 'Otwock', 'Wołomin',
                    'Grodzisk Mazowiecki', 'Marki', 'Ząbki', 'Zielonka',
                    'Konstancin-Jeziorna', 'Józefów', 'Brwinów'
                  ].map(city => (
                    <li key={city} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {city}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {['Piastów', 'Łomianki', 'Milanówek', 'Sulejówek', 'Karczew',
                    'Kobyłka', 'Nadarzyn', 'Halinów', 'Izabelin', 'Raszyn',
                    'Jabłonna', 'Lesznowola'
                  ].map(city => (
                    <li key={city} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mr-2" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Dodatkowe informacje */}
          <div className="grid md:grid-cols-3 gap-6 reveal stagger">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <feature.icon className="h-6 w-6 text-[#DAA520]" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
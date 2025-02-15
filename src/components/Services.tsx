import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import {
  Building2,
  Users2,
  Building,
  Banknote,
  FileCheck,
  Shield,
  Settings
} from 'lucide-react';

const Services = () => {
  const sectionRef = useIntersectionObserver();

  const firstRowServices = [
    {
      icon: Building2,
      title: 'Profesjonalne zarządzanie nieruchomościami',
      description: 'Kompleksowa obsługa i zarządzanie nieruchomościami w Warszawie. Certyfikowani zarządcy z ubezpieczeniem OC.',
      href: '/uslugi/zarzadzanie-nieruchomosciami'
    },
    {
      icon: Users2,
      title: 'Zarządzanie wspólnotami mieszkaniowymi',
      description: 'Kompleksowa obsługa wspólnot mieszkaniowych w Warszawie. Optymalizacja kosztów i profesjonalne wsparcie 24/7.',
      href: '/uslugi/obsluga-wspolnot-mieszkaniowych'
    },
    {
      icon: Building,
      title: 'Administracja nieruchomości Warszawa',
      description: 'Profesjonalna administracja i zarządzanie budynkami. Pełna obsługa techniczna i administracyjna.',
      href: '/uslugi/administrowanie-budynkami'
    }
  ];

  const secondRowServices = [
    {
      icon: Banknote,
      title: 'Zarządzanie najmem Warszawa',
      description: 'Kompleksowe zarządzanie najmem. Gwarantowany przychód i profesjonalna obsługa najemców.',
      href: '/uslugi/zarzadzanie-najmem'
    },
    {
      icon: Settings,
      title: 'Optymalizacja kosztów zarządzania',
      description: 'Profesjonalne doradztwo i optymalizacja kosztów zarządzania nieruchomościami. Oszczędności do 20%.',
      href: '/uslugi/doradztwo-i-optymalizacje'
    },
    {
      icon: FileCheck,
      title: 'Przeglądy techniczne budynków',
      description: 'Profesjonalne przeglądy budowlane i kontrole techniczne. Certyfikowani inspektorzy.',
      href: '/uslugi/przeglady-budowlane'
    },
    {
      icon: Shield,
      title: 'Przeglądy pięcioletnie budynków',
      description: 'Kompleksowe przeglądy pięcioletnie zgodne z prawem budowlanym. Pełna dokumentacja techniczna.',
      href: '/uslugi/przeglady-piecioletnie'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal reveal-fade-up">
          <h2 className="text-4xl font-bold mb-4">Kompleksowe usługi zarządzania nieruchomościami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesjonalne zarządzanie i administracja nieruchomościami w Warszawie. 
            Kompleksowa obsługa wspólnot mieszkaniowych, nieruchomości komercyjnych 
            i prywatnych. 15 lat doświadczenia i certyfikowani zarządcy.
          </p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 reveal stagger">
          {firstRowServices.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="h-16 w-16 text-[#DAA520] mb-6 transform group-hover:scale-110 transition-transform duration-300 reveal reveal-rotate" />
                <h3 className="text-xl font-semibold mb-4 min-h-[3rem] hover:text-[#DAA520] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Second row - 4 cards */}
        <div className="grid md:grid-cols-4 gap-8 reveal stagger">
          {secondRowServices.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="h-16 w-16 text-[#DAA520] mb-6 transform group-hover:scale-110 transition-transform duration-300 reveal reveal-rotate" />
                <h3 className="text-xl font-semibold mb-4 min-h-[3rem] hover:text-[#DAA520] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Jako profesjonalny zarządca nieruchomości w Warszawie, oferujemy kompleksowe 
            usługi zarządzania i administracji nieruchomościami. Nasz zespół certyfikowanych 
            specjalistów zapewnia najwyższą jakość obsługi, optymalizację kosztów i pełne 
            wsparcie techniczne 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
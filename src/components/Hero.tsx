import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=75&fm=webp&auto=compress")',
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
      <div className="relative container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-3xl animate-slide-in-left pt-48">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white space-x-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Zarządzanie Nieruchomościami Warszawa</span>
              <span className="block text-[#DAA520]">Profesjonalny Zarządca</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">
            <span className="block mb-2">✓ 15 lat doświadczenia w zarządzaniu nieruchomościami w Warszawie</span>
            <span className="block mb-2">✓ Obsługa ponad 150 nieruchomości o powierzchni 500 000 m²</span>
            <span className="block mb-2">✓ Certyfikowani zarządcy z ubezpieczeniem OC na 5 mln zł</span>
            <span className="block mb-2">✓ Redukcja kosztów zarządzania o 15-20% w pierwszym roku</span>
            <span className="block">✓ Całodobowe wsparcie techniczne z gwarancją reakcji do 2h</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-[#DAA520] hover:bg-[#FFD700] text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300 text-center"
              rel="noopener"
            >
              Poznaj nasze usługi
            </a>
            <a
              href="#about"
              className="bg-[#DAA520] hover:bg-[#FFD700] text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300 text-center"
              rel="noopener"
            >
              Dowiedz się więcej
            </a>
            <a
              href="#why-us"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 backdrop-blur-sm text-center"
              rel="noopener"
            >
              Zobacz korzyści
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="text-white hover:text-[#DAA520] transition-colors duration-300"
              title="Zamów bezpłatną wycenę zarządzania nieruchomością"
            >
              Darmowa wycena
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/cennik"
              className="text-white hover:text-[#DAA520] transition-colors duration-300"
              title="Sprawdź ceny zarządzania nieruchomościami"
            >
              Sprawdź ceny
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/blog"
              className="text-white hover:text-[#DAA520] transition-colors duration-300"
              title="Artykuły eksperckie o zarządzaniu nieruchomościami"
            >
              Artykuły eksperckie
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/faq"
              className="text-white hover:text-[#DAA520] transition-colors duration-300"
              title="FAQ - Najczęściej zadawane pytania o zarządzaniu nieruchomościami"
            >
              Najczęstsze pytania
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
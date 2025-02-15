import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isAdminPage = window.location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isAdminPage) return null;

  const navigation = {
    main: [
      { name: 'Strona główna', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Kontakt', href: '/contact' }
    ],
    services: {
      name: 'Usługi',
      items: [
        { name: 'Zarządzanie nieruchomościami', href: '/uslugi/zarzadzanie-nieruchomosciami' },
        { name: 'Obsługa wspólnot mieszkaniowych', href: '/uslugi/obsluga-wspolnot-mieszkaniowych' },
        { name: 'Administrowanie budynkami', href: '/uslugi/administrowanie-budynkami' },
        { name: 'Zarządzanie najmem', href: '/uslugi/zarzadzanie-najmem' },
        { name: 'Doradztwo i optymalizacje', href: '/uslugi/doradztwo-i-optymalizacje' },
        { name: 'Przeglądy budowlane', href: '/uslugi/przeglady-budowlane' },
        { name: 'Przeglądy pięcioletnie', href: '/uslugi/przeglady-piecioletnie' }
      ]
    },
    offer: {
      name: 'Oferta',
      items: [
        { name: 'Dla wspólnot mieszkaniowych', href: '/oferta/wspolnoty-mieszkaniowe' },
        { name: 'Dla deweloperów', href: '/oferta/deweloperzy' },
        { name: 'Dla osób prywatnych', href: '/oferta/dla-osob-prywatnych' },
        { name: 'Dla komercji', href: '/oferta/dla-komercji' },
        { name: 'Dla biznesu', href: '/oferta/dla-biznesu' }
      ]
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto bg-gradient-to-b from-black/50 to-transparent">
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between px-8 h-24">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center space-x-3"
              aria-label="Strona główna Stolica - Zarządzanie Nieruchomościami"
            >
              <Building2 className={`h-10 w-10 transition-colors duration-300 ${
                isScrolled ? 'text-[#DAA520]' : 'text-white'
              }`} />
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Stolica
              </span>
            </Link>

            {/* Main Navigation */}
            <nav className="flex items-center space-x-8" ref={dropdownRef}>
              {/* Regular Menu Items */}
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#DAA520]' : 'text-white hover:text-[#DAA520]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-base font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#DAA520]' : 'text-white hover:text-[#DAA520]'
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                >
                  <span>{navigation.services.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl py-4 mt-1">
                    {navigation.services.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#DAA520] transition-colors duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Offer Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-base font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#DAA520]' : 'text-white hover:text-[#DAA520]'
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === 'offer' ? null : 'offer')}
                >
                  <span>{navigation.offer.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === 'offer' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'offer' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl py-4 mt-1">
                    {navigation.offer.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#DAA520] transition-colors duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Contact Button */}
            <a
              href="tel:+48798696119"
              className="flex items-center space-x-2 px-6 py-3 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+48 798 696 119</span>
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2"
            aria-label="Strona główna Stolica - Zarządzanie Nieruchomościami"
          >
            <Building2 className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-[#DAA520]' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Stolica
            </span>
          </Link>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+48798696119"
              className="flex items-center justify-center w-12 h-12 bg-[#DAA520] text-white rounded-lg shadow-lg"
              aria-label="Zadzwoń do nas"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="h-full overflow-y-auto pb-20">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                  aria-label="Zamknij menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="px-4 py-2">
                {/* Main Navigation */}
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Section */}
                <div className="py-2">
                  <button
                    onClick={() => setActiveMobileDropdown(
                      activeMobileDropdown === 'services' ? null : 'services'
                    )}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                  >
                    <span>{navigation.services.name}</span>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      activeMobileDropdown === 'services' ? 'rotate-90' : ''
                    }`} />
                  </button>
                  {activeMobileDropdown === 'services' && (
                    <div className="pl-4 space-y-1 mt-1">
                      {navigation.services.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-[#DAA520] hover:bg-gray-50 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Offer Section */}
                <div className="py-2">
                  <button
                    onClick={() => setActiveMobileDropdown(
                      activeMobileDropdown === 'offer' ? null : 'offer'
                    )}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                  >
                    <span>{navigation.offer.name}</span>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      activeMobileDropdown === 'offer' ? 'rotate-90' : ''
                    }`} />
                  </button>
                  {activeMobileDropdown === 'offer' && (
                    <div className="pl-4 space-y-1 mt-1">
                      {navigation.offer.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-[#DAA520] hover:bg-gray-50 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Building2, Lock, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Footer = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };
    checkAdmin();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-[#DAA520]" />
              <span className="text-2xl font-semibold" aria-label="Stolica - Zarządzanie Nieruchomościami">Stolica</span>
            </div>
            <p className="text-gray-400">
              Profesjonalne zarządzanie nieruchomościami w Warszawie i okolicach
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 id="footer-services" className="text-lg font-semibold mb-4 scroll-mt-32">Usługi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/uslugi/zarzadzanie-nieruchomosciami" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Zarządzanie nieruchomościami
                </Link>
              </li>
              <li>
                <Link to="/uslugi/obsluga-wspolnot-mieszkaniowych" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Obsługa wspólnot mieszkaniowych
                </Link>
              </li>
              <li>
                <Link to="/uslugi/administrowanie-budynkami" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Administrowanie budynkami
                </Link>
              </li>
              <li>
                <Link to="/uslugi/zarzadzanie-najmem" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Zarządzanie najmem
                </Link>
              </li>
              <li>
                <Link to="/uslugi/doradztwo-i-optymalizacje" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Doradztwo i optymalizacje
                </Link>
              </li>
              <li>
                <Link to="/uslugi/przeglady-budowlane" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Przeglądy budowlane
                </Link>
              </li>
              <li>
                <Link to="/uslugi/przeglady-piecioletnie" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Przeglądy pięcioletnie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Oferta</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/oferta/wspolnoty-mieszkaniowe" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Dla wspólnot mieszkaniowych
                </Link>
              </li>
              <li>
                <Link to="/oferta/deweloperzy" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Dla deweloperów
                </Link>
              </li>
              <li>
                <Link to="/oferta/dla-osob-prywatnych" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Dla osób prywatnych
                </Link>
              </li>
              <li>
                <Link to="/oferta/dla-komercji" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Dla komercji
                </Link>
              </li>
              <li>
                <Link to="/oferta/dla-biznesu" className="text-gray-400 hover:text-[#DAA520] transition-colors duration-300">
                  Dla biznesu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Aleje Jerozolimskie 30</li>
              <li>Warszawa</li>
              <li>
                <a href="tel:+48798696119" className="hover:text-[#DAA520] transition-colors duration-300">
                  +48 798 696 119
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@stolica-zarzadzanienieruchomosciami.pl"
                  className="hover:text-[#DAA520] transition-colors duration-300 mb-4 inline-block"
                >
                  kontakt@stolica-zarzadzanienieruchomosciami.pl
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="https://www.youtube.com/@StolicaZarzadzanie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
                  aria-label="Nasz kanał na YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/stolica.zarzadzanie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
                  aria-label="Nasz profil na Instagramie"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-4">
            <p>
              © {new Date().getFullYear()} Stolica - Zarządzanie Nieruchomościami.
              Wszelkie prawa zastrzeżone.
            </p>
            {isAdmin ? (
              <Link
                to="/admin/blog"
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-300"
                aria-label="Przejdź do panelu administracyjnego"
              >
                <Lock className="h-4 w-4" />
                <span>Panel administracyjny</span>
              </Link>
            ) : (
              <Link
                to="/admin/login"
                className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-[#DAA520] transition-colors duration-300"
                aria-label="Zaloguj się do panelu administracyjnego"
              >
                <Lock className="h-4 w-4" />
              </Link>
            )}
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <Link to="/regulamin" className="hover:text-[#DAA520] transition-colors duration-300">
              Regulamin
            </Link>
            <span className="mx-2">|</span>
            <Link to="/polityka-prywatnosci" className="hover:text-[#DAA520] transition-colors duration-300">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
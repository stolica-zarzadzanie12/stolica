import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Meta from '../components/Meta';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Strona nie znaleziona | Stolica - Zarządzanie Nieruchomościami"
        description="Przepraszamy, ale strona której szukasz nie istnieje. Wróć do strony głównej i znajdź interesujące Cię informacje."
      />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Building2 className="h-24 w-24 text-[#DAA520] mx-auto mb-8" />
            <h1 className="text-6xl font-bold text-[#DAA520] mb-6">404</h1>
            <p className="text-2xl text-gray-800 mb-4">
              Strona nie została znaleziona
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Przepraszamy, ale strona której szukasz nie istnieje. Być może adres URL został zmieniony lub strona została usunięta.
            </p>
            
            <div className="mb-12">
              <Link
                to="/"
                className="inline-block px-8 py-4 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300 text-lg font-semibold"
              >
                Wróć do strony głównej
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <h2 className="text-xl font-semibold mb-4">Popularne strony</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/uslugi/zarzadzanie-nieruchomosciami" className="text-[#DAA520] hover:underline">
                      Zarządzanie nieruchomościami
                    </Link>
                  </li>
                  <li>
                    <Link to="/uslugi/obsluga-wspolnot-mieszkaniowych" className="text-[#DAA520] hover:underline">
                      Obsługa wspólnot mieszkaniowych
                    </Link>
                  </li>
                  <li>
                    <Link to="/cennik" className="text-[#DAA520] hover:underline">
                      Cennik usług
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-[#DAA520] hover:underline">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Potrzebujesz pomocy?</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/faq" className="text-[#DAA520] hover:underline">
                      Najczęściej zadawane pytania
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-[#DAA520] hover:underline">
                      Blog i artykuły
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+48798696119" className="text-[#DAA520] hover:underline">
                      Zadzwoń: +48 798 696 119
                    </a>
                  </li>
                  <li>
                    <a href="mailto:kontakt@stolica-zarzadzanienieruchomosciami.pl" className="text-[#DAA520] hover:underline">
                      Wyślij email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
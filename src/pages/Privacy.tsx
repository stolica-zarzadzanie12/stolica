import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Polityka Prywatności | Stolica - Zarządzanie Nieruchomościami"
        description="Polityka prywatności firmy Stolica. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa w związku z ich przetwarzaniem."
      />
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8">Polityka prywatności - Stolica Zarządzanie Nieruchomościami</h1>

            <section className="mb-8">
              <div className="space-y-4">
                <p>W ramach świadczenia usług zarządzania nieruchomościami zbieramy następujące dane osobowe:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Dane identyfikacyjne (imię, nazwisko, PESEL)</li>
                  <li>Dane kontaktowe (adres, telefon, email)</li>
                  <li>Dane dotyczące nieruchomości</li>
                  <li>Dane finansowe związane z rozliczeniami</li>
                  <li>Dane zawarte w dokumentacji technicznej</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Cele przetwarzania danych</h2>
              <div className="space-y-4">
                <p>Dane osobowe przetwarzamy w następujących celach:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Świadczenie usług zarządzania nieruchomościami</li>
                  <li>Realizacja obowiązków prawnych</li>
                  <li>Obsługa reklamacji i zgłoszeń</li>
                  <li>Kontakt w sprawach związanych z zarządzaniem</li>
                  <li>Marketing usług własnych (za zgodą)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Podstawy prawne przetwarzania</h2>
              <div className="space-y-4">
                <p>Przetwarzanie danych osobowych odbywa się na podstawie:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Art. 6 ust. 1 lit. b RODO - wykonanie umowy</li>
                  <li>Art. 6 ust. 1 lit. c RODO - obowiązek prawny</li>
                  <li>Art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes</li>
                  <li>Art. 6 ust. 1 lit. a RODO - zgoda (w przypadku marketingu)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Okres przechowywania danych</h2>
              <div className="space-y-4">
                <p>Dane osobowe przechowujemy przez następujące okresy:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Przez okres trwania umowy</li>
                  <li>Do czasu przedawnienia roszczeń</li>
                  <li>Zgodnie z okresami wymaganymi przez przepisy prawa</li>
                  <li>Do czasu wycofania zgody (w przypadku marketingu)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Prawa użytkowników</h2>
              <div className="space-y-4">
                <p>Osobom, których dane dotyczą, przysługują następujące prawa:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Prawo dostępu do danych</li>
                  <li>Prawo do sprostowania danych</li>
                  <li>Prawo do usunięcia danych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                  <li>Prawo do sprzeciwu</li>
                  <li>Prawo do wycofania zgody</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Informacje o plikach cookies</h2>
              <div className="space-y-4">
                <p>1. Serwis wykorzystuje pliki cookies w następujących celach:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Zapewnienie prawidłowego działania serwisu</li>
                  <li>Zapamiętywanie preferencji użytkownika</li>
                  <li>Analiza ruchu na stronie</li>
                  <li>Dostosowanie treści do użytkownika</li>
                </ul>
                <p>2. Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Udostępnianie danych podmiotom trzecim</h2>
              <div className="space-y-4">
                <p>Dane osobowe mogą być udostępniane:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Podmiotom świadczącym usługi techniczne</li>
                  <li>Podwykonawcom</li>
                  <li>Dostawcom usług prawnych i księgowych</li>
                  <li>Organom państwowym na podstawie przepisów prawa</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Środki bezpieczeństwa danych</h2>
              <div className="space-y-4">
                <p>Stosujemy następujące środki bezpieczeństwa:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Szyfrowanie danych</li>
                  <li>Kontrola dostępu</li>
                  <li>Regularne kopie zapasowe</li>
                  <li>Zabezpieczenia fizyczne i organizacyjne</li>
                  <li>Szkolenia pracowników</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Informacje o profilowaniu</h2>
              <div className="space-y-4">
                <p>Nie prowadzimy zautomatyzowanego podejmowania decyzji ani profilowania w rozumieniu RODO.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Dane kontaktowe Inspektora Ochrony Danych</h2>
              <div className="space-y-4">
                <p>W sprawach dotyczących ochrony danych osobowych można kontaktować się z Inspektorem Ochrony Danych:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Email: iod@stolica-zarzadzanienieruchomosciami.pl</li>
                  <li>Adres: Aleje Jerozolimskie 30, Warszawa</li>
                  <li>Telefon: +48 798 696 119</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
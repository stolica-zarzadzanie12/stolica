import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Regulamin | Stolica - Zarządzanie Nieruchomościami"
        description="Regulamin świadczenia usług zarządzania nieruchomościami. Poznaj zasady współpracy, prawa i obowiązki stron oraz warunki świadczenia usług."
      />
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8">Regulamin świadczenia usług zarządzania nieruchomościami</h1>

            <section className="mb-8">
              <div className="space-y-4">
                <p>Użyte w Regulaminie pojęcia oznaczają:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li><strong>Usługodawca</strong> - firma Stolica - Zarządzanie Nieruchomościami z siedzibą w Warszawie, przy Alejach Jerozolimskich 30.</li>
                  <li><strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z usług Usługodawcy.</li>
                  <li><strong>Usługi</strong> - usługi zarządzania i administrowania nieruchomościami świadczone przez Usługodawcę.</li>
                  <li><strong>Nieruchomość</strong> - nieruchomość objęta usługami zarządzania lub administrowania.</li>
                  <li><strong>Umowa</strong> - umowa o świadczenie usług zarządzania lub administrowania nieruchomością zawarta między Usługodawcą a Klientem.</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§2. Zasady korzystania z usług</h2>
              <div className="space-y-4">
                <p>1. Usługodawca świadczy usługi zarządzania i administrowania nieruchomościami na podstawie zawartej Umowy.</p>
                <p>2. Zakres świadczonych usług obejmuje w szczególności:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Zarządzanie techniczne nieruchomością</li>
                  <li>Obsługę administracyjną</li>
                  <li>Zarządzanie finansami nieruchomości</li>
                  <li>Obsługę prawną</li>
                  <li>Organizację i nadzór nad pracami konserwacyjnymi</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§3. Prawa i obowiązki Klienta</h2>
              <div className="space-y-4">
                <p>1. Klient zobowiązuje się do:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Przekazania wszelkiej niezbędnej dokumentacji dotyczącej nieruchomości</li>
                  <li>Terminowego regulowania należności</li>
                  <li>Informowania o wszelkich zmianach mających wpływ na zarządzanie nieruchomością</li>
                  <li>Współdziałania z Usługodawcą w zakresie niezbędnym do prawidłowego wykonywania usług</li>
                </ul>
                <p>2. Klient ma prawo do:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Otrzymywania regularnych raportów z zarządzania nieruchomością</li>
                  <li>Zgłaszania uwag i reklamacji dotyczących świadczonych usług</li>
                  <li>Dostępu do dokumentacji związanej z zarządzaną nieruchomością</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§4. Prawa i obowiązki Usługodawcy</h2>
              <div className="space-y-4">
                <p>1. Usługodawca zobowiązuje się do:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Profesjonalnego świadczenia usług zgodnie z obowiązującymi przepisami</li>
                  <li>Zachowania należytej staranności przy wykonywaniu usług</li>
                  <li>Ochrony interesów Klienta</li>
                  <li>Regularnego raportowania o stanie zarządzanej nieruchomości</li>
                </ul>
                <p>2. Usługodawca ma prawo do:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Otrzymywania wynagrodzenia za świadczone usługi</li>
                  <li>Dostępu do nieruchomości w zakresie niezbędnym do wykonywania usług</li>
                  <li>Zlecania części usług podwykonawcom</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§5. Warunki zawierania i rozwiązywania umów</h2>
              <div className="space-y-4">
                <p>1. Umowa zawierana jest w formie pisemnej na czas określony lub nieokreślony.</p>
                <p>2. Umowa może zostać rozwiązana:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Za porozumieniem stron</li>
                  <li>Z zachowaniem 3-miesięcznego okresu wypowiedzenia</li>
                  <li>Ze skutkiem natychmiastowym w przypadku rażącego naruszenia warunków umowy</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§6. Procedura reklamacyjna</h2>
              <div className="space-y-4">
                <p>1. Klient ma prawo do składania reklamacji dotyczących świadczonych usług.</p>
                <p>2. Reklamacje należy składać:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Pisemnie na adres siedziby firmy</li>
                  <li>Drogą elektroniczną na adres: biuro@stolica-zarzadzanienieruchomosciami.pl</li>
                </ul>
                <p>3. Reklamacja zostanie rozpatrzona w terminie 14 dni od daty jej otrzymania.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§7. Zasady płatności i rozliczeń</h2>
              <div className="space-y-4">
                <p>1. Wynagrodzenie za świadczone usługi ustalane jest indywidualnie w Umowie.</p>
                <p>2. Płatności dokonywane są miesięcznie, na podstawie wystawionych faktur VAT.</p>
                <p>3. Termin płatności wynosi 14 dni od daty wystawienia faktury.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§8. Odpowiedzialność stron</h2>
              <div className="space-y-4">
                <p>1. Usługodawca ponosi odpowiedzialność za:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Szkody wyrządzone Klientowi z winy umyślnej</li>
                  <li>Szkody wynikające z nienależytego wykonania usług</li>
                </ul>
                <p>2. Odpowiedzialność Usługodawcy jest ograniczona do wysokości polisy ubezpieczeniowej OC.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§9. Prawa własności intelektualnej</h2>
              <div className="space-y-4">
                <p>1. Wszelkie prawa własności intelektualnej do materiałów i dokumentów stworzonych przez Usługodawcę pozostają jego własnością.</p>
                <p>2. Klient ma prawo do korzystania z materiałów wyłącznie w zakresie niezbędnym do realizacji Umowy.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">§10. Postanowienia końcowe</h2>
              <div className="space-y-4">
                <p>1. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.</p>
                <p>2. Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</p>
                <p>3. Regulamin wchodzi w życie z dniem 10.02.2024 r.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
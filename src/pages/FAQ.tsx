import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    'all',
    'zarządzanie',
    'obsługa-wspólnot',
    'administrowanie',
    'zarządzanie-najmem',
    'doradztwo',
    'przeglądy',
    'dla-deweloperów',
    'dla-wspólnot',
    'dla-prywatnych',
    'dla-komercji',
    'dla-biznesu',
    'wspólnoty',
    'finanse',
    'techniczne',
    'prawne',
    'administracja',
    'remonty',
    'bezpieczeństwo',
    'media',
    'dokumentacja',
    'inwestycje'
  ];

  const faqItems: FAQItem[] = [
    // Bezpieczeństwo
    {
      category: 'bezpieczeństwo',
      question: 'Jakie są wymagania przeciwpożarowe dla budynków wielorodzinnych?',
      answer: 'Budynki wielorodzinne muszą być wyposażone w system sygnalizacji pożaru, gaśnice, hydranty wewnętrzne, oznakowanie dróg ewakuacyjnych. Wymagane są regularne przeglądy i konserwacja tych systemów oraz szkolenia dla mieszkańców.',
    },
    {
      category: 'bezpieczeństwo',
      question: 'Jak często należy przeprowadzać kontrole systemów bezpieczeństwa?',
      answer: 'Systemy bezpieczeństwa wymagają regularnych kontroli: system ppoż. - co 12 miesięcy, system oddymiania - co 6 miesięcy, monitoring - co 3 miesiące, kontrola dostępu - co 6 miesięcy.',
    },
    {
      category: 'bezpieczeństwo',
      question: 'Jakie są zasady montażu i konserwacji monitoringu?',
      answer: 'Monitoring musi spełniać wymogi RODO, być odpowiednio oznakowany, a nagrania przechowywane w bezpieczny sposób. Kamery nie mogą naruszać prywatności mieszkańców. Wymagana jest regularna konserwacja i przeglądy techniczne.',
    },
    // Media
    {
      category: 'media',
      question: 'Jak optymalizować zużycie mediów w budynku?',
      answer: 'Optymalizacja obejmuje: montaż czujników ruchu, wymianę oświetlenia na LED, modernizację systemów grzewczych, regularne przeglądy instalacji, edukację mieszkańców w zakresie oszczędzania energii.',
    },
    {
      category: 'media',
      question: 'Jakie są zasady rozliczania wody w budynku wielorodzinnym?',
      answer: 'Rozliczenie może odbywać się na podstawie indywidualnych liczników lub ryczałtowo. Należy uwzględnić różnicę między sumą wskazań liczników indywidualnych a licznikiem głównym. Rozliczenia dokonuje się zazwyczaj co 6 lub 12 miesięcy.',
    },
    {
      category: 'media',
      question: 'Jak zarządzać umowami z dostawcami mediów?',
      answer: 'Zarządzanie obejmuje: negocjowanie warunków umów, monitoring zużycia, weryfikację faktur, optymalizację taryf, reagowanie na awarie, planowanie modernizacji instalacji.',
    },
    // Dokumentacja
    {
      category: 'dokumentacja',
      question: 'Jakie dokumenty techniczne musi posiadać wspólnota?',
      answer: 'Wymagane dokumenty to: książka obiektu budowlanego, dokumentacja techniczna budynku, protokoły przeglądów, świadectwo charakterystyki energetycznej, dokumentacja instalacji, projekty modernizacji.',
    },
    {
      category: 'dokumentacja',
      question: 'Jak długo należy przechowywać dokumentację wspólnoty?',
      answer: 'Dokumentacja techniczna - przez cały okres istnienia budynku, dokumentacja finansowa - 5 lat, protokoły zebrań - bezterminowo, umowy - 3 lata po wygaśnięciu, dokumentacja pracownicza - 50 lat.',
    },
    {
      category: 'dokumentacja',
      question: 'Jakie dokumenty są potrzebne do przeprowadzenia remontu?',
      answer: 'Wymagane są: projekt budowlany (jeśli potrzebny), pozwolenie na budowę lub zgłoszenie, umowy z wykonawcami, kosztorysy, dokumentacja powykonawcza, gwarancje, protokoły odbioru.',
    },
    // Inwestycje
    {
      category: 'inwestycje',
      question: 'Jak planować inwestycje w budynku wielorodzinnym?',
      answer: 'Planowanie obejmuje: analizę potrzeb, ocenę stanu technicznego, kalkulację kosztów, określenie źródeł finansowania, harmonogram prac, wybór wykonawców, nadzór nad realizacją.',
    },
    {
      category: 'inwestycje',
      question: 'Jakie są możliwości finansowania inwestycji?',
      answer: 'Dostępne źródła to: fundusz remontowy, kredyty bankowe, dotacje unijne, programy rządowe (np. termomodernizacja), pożyczki z WFOŚiGW, składki celowe właścicieli.',
    },
    {
      category: 'inwestycje',
      question: 'Jak ocenić opłacalność planowanej inwestycji?',
      answer: 'Należy przeanalizować: koszty realizacji, przewidywane oszczędności, okres zwrotu inwestycji, dostępne dofinansowania, wpływ na wartość nieruchomości, koszty eksploatacji.',
    },
    // Zarządzanie
    {
      category: 'zarządzanie',
      question: 'Co obejmuje kompleksowe zarządzanie nieruchomością?',
      answer: 'Kompleksowe zarządzanie nieruchomością obejmuje: administrowanie budynkiem, obsługę techniczną, księgową i prawną, nadzór nad pracami konserwacyjnymi, organizację zebrań wspólnoty, reprezentowanie wspólnoty przed urzędami, zarządzanie finansami oraz zapewnienie bezpieczeństwa mieszkańców.',
    },
    {
      category: 'zarządzanie',
      question: 'Jakie są główne obowiązki zarządcy nieruchomości?',
      answer: 'Główne obowiązki zarządcy to: dbanie o stan techniczny budynku, prowadzenie dokumentacji, organizacja przeglądów technicznych, rozliczanie mediów, windykacja należności, zlecanie i nadzorowanie napraw, utrzymanie czystości, obsługa mieszkańców.',
    },
    {
      category: 'zarządzanie',
      question: 'Jak często zarządca powinien przeprowadzać przeglądy nieruchomości?',
      answer: 'Przeglądy podstawowe przeprowadzane są raz w roku, natomiast przeglądy kompleksowe (tzw. pięcioletnie) co 5 lat. Dodatkowo, zarządca powinien regularnie monitorować stan budynku i reagować na bieżące potrzeby.',
    },
    // Wspólnoty
    {
      category: 'wspólnoty',
      question: 'Jak wygląda proces podejmowania decyzji we wspólnocie mieszkaniowej?',
      answer: 'Decyzje we wspólnocie podejmowane są poprzez uchwały podczas zebrań właścicieli. Większość uchwał wymaga zwykłej większości głosów, liczonej według udziałów w nieruchomości wspólnej. Niektóre decyzje wymagają większości kwalifikowanej.',
    },
    {
      category: 'wspólnoty',
      question: 'Czym jest fundusz remontowy i jak jest naliczany?',
      answer: 'Fundusz remontowy to środki gromadzone przez wspólnotę na przyszłe remonty i modernizacje. Wysokość składki ustalana jest uchwałą i najczęściej naliczana od metra kwadratowego powierzchni lokalu.',
    },
    {
      category: 'wspólnoty',
      question: 'Jak często powinny odbywać się zebrania wspólnoty?',
      answer: 'Zebranie roczne wspólnoty musi odbyć się przynajmniej raz w roku, do końca pierwszego kwartału. Dodatkowo mogą być zwoływane zebrania nadzwyczajne w razie potrzeby podjęcia pilnych decyzji.',
    },
    // Finanse
    {
      category: 'finanse',
      question: 'Jak naliczane są opłaty za zarządzanie?',
      answer: 'Opłaty za zarządzanie najczęściej naliczane są od metra kwadratowego powierzchni użytkowej. Stawka może być zróżnicowana w zależności od zakresu usług i wielkości nieruchomości. Minimalna opłata w naszej firmie wynosi 1500 zł miesięcznie.',
    },
    {
      category: 'finanse',
      question: 'Co wchodzi w skład opłat eksploatacyjnych?',
      answer: 'Opłaty eksploatacyjne obejmują: koszty mediów (woda, prąd, ogrzewanie), wywóz śmieci, sprzątanie, konserwację, drobne naprawy, ubezpieczenie budynku, wynagrodzenie zarządcy oraz inne koszty związane z bieżącym utrzymaniem nieruchomości.',
    },
    {
      category: 'finanse',
      question: 'Jak wygląda proces windykacji należności?',
      answer: 'Proces windykacji rozpoczyna się od monitów i wezwań do zapłaty. W przypadku braku reakcji, sprawa kierowana jest na drogę sądową. Po uzyskaniu nakazu zapłaty możliwa jest egzekucja komornicza.',
    },
    // Techniczne
    {
      category: 'techniczne',
      question: 'Jakie przeglądy techniczne są obowiązkowe?',
      answer: 'Obowiązkowe przeglądy to: roczny przegląd budowlany, przegląd kominiarski (co najmniej raz w roku), przegląd instalacji gazowej (raz w roku), przegląd instalacji elektrycznej (co 5 lat), przegląd przeciwpożarowy oraz przegląd ogólnobudowlany pięcioletni.',
    },
    {
      category: 'techniczne',
      question: 'Jak często należy przeprowadzać konserwację wind?',
      answer: 'Konserwacja wind powinna być przeprowadzana co miesiąc przez uprawnionego konserwatora. Dodatkowo, raz w roku UDT przeprowadza obowiązkowy przegląd techniczny.',
    },
    {
      category: 'techniczne',
      question: 'Co obejmuje przegląd pięcioletni budynku?',
      answer: 'Przegląd pięcioletni obejmuje sprawdzenie stanu technicznego i przydatności do użytkowania budynku, estetyki oraz otoczenia. Kontroli podlegają wszystkie elementy budynku, instalacje i urządzenia służące ochronie środowiska oraz instalacje gazowe i przewody kominowe.',
    },
    // Prawne
    {
      category: 'prawne',
      question: 'Jakie są prawa i obowiązki członków wspólnoty mieszkaniowej?',
      answer: 'Członkowie wspólnoty mają prawo do współdecydowania o nieruchomości, udziału w zebraniach, wglądu w dokumentację. Obowiązki obejmują: ponoszenie kosztów utrzymania nieruchomości, przestrzeganie regulaminu, udostępnianie lokalu do przeglądów i napraw.',
    },
    {
      category: 'prawne',
      question: 'Jak wygląda procedura zmiany zarządcy?',
      answer: 'Zmiana zarządcy wymaga podjęcia uchwały przez wspólnotę mieszkaniową. Następnie należy wypowiedzieć umowę obecnemu zarządcy zgodnie z zapisami umowy, wybrać nowego zarządcę i podpisać z nim umowę. Konieczne jest też protokolarne przekazanie dokumentacji.',
    },
    {
      category: 'prawne',
      question: 'Jakie ubezpieczenia są obowiązkowe dla wspólnoty?',
      answer: 'Obowiązkowe jest ubezpieczenie odpowiedzialności cywilnej wspólnoty mieszkaniowej. Zalecane jest również ubezpieczenie mienia od ognia i innych zdarzeń losowych oraz ubezpieczenie odpowiedzialności cywilnej członków zarządu.',
    },
    // Administracja
    {
      category: 'administracja',
      question: 'Jak wygląda proces rozliczania mediów?',
      answer: 'Rozliczanie mediów obejmuje zbieranie odczytów liczników, analizę faktur od dostawców, obliczanie kosztów przypadających na poszczególne lokale według przyjętych zasad rozliczeń, przygotowanie i dostarczenie rozliczeń mieszkańcom.',
    },
    {
      category: 'administracja',
      question: 'Jakie dokumenty powinna posiadać wspólnota?',
      answer: 'Wspólnota powinna posiadać: uchwały, protokoły z zebrań, dokumentację techniczną budynku, książkę obiektu budowlanego, dokumentację finansowo-księgową, regulaminy, umowy z dostawcami mediów i usług, dokumentację przeglądów i remontów.',
    },
    {
      category: 'administracja',
      question: 'Jak często należy aktualizować regulamin porządku domowego?',
      answer: 'Regulamin porządku domowego powinien być aktualizowany w miarę potrzeb, szczególnie gdy pojawiają się nowe kwestie wymagające uregulowania lub gdy obecne zapisy nie sprawdzają się w praktyce. Każda zmiana wymaga przyjęcia uchwałą wspólnoty.',
    },
    // Remonty
    {
      category: 'remonty',
      question: 'Jak planować remonty w budynku wielorodzinnym?',
      answer: 'Planowanie remontów powinno opierać się na: przeglądach technicznych, analizie potrzeb mieszkańców, możliwościach finansowych wspólnoty. Należy stworzyć wieloletni plan remontów, ustalić priorytety i kolejność prac oraz sposób ich finansowania.',
    },
    {
      category: 'remonty',
      question: 'Jak wybierać wykonawców remontów?',
      answer: 'Wybór wykonawców powinien odbywać się poprzez: zebranie ofert od kilku firm, sprawdzenie ich referencji i doświadczenia, analizę cen i zakresu prac, weryfikację gwarancji. Warto też sprawdzić czy firma jest ubezpieczona i ma odpowiednie uprawnienia.',
    },
    {
      category: 'remonty',
      question: 'Jak rozliczać remonty finansowane z funduszu remontowego?',
      answer: 'Remonty z funduszu remontowego rozliczane są na podstawie faktur od wykonawców. Koszty pokrywane są ze zgromadzonych środków. Zarządca powinien prowadzić szczegółową ewidencję wpływów i wydatków funduszu remontowego.',
    },
  ];

  // Dodanie nowych pytań dla usług
  const serviceQuestions: FAQItem[] = [
    // Obsługa wspólnot mieszkaniowych
    {
      category: 'obsługa-wspólnot',
      question: 'Jakie usługi obejmuje kompleksowa obsługa wspólnoty mieszkaniowej?',
      answer: 'Kompleksowa obsługa wspólnoty obejmuje: prowadzenie dokumentacji, organizację zebrań, przygotowywanie uchwał, rozliczanie mediów, nadzór nad konserwacją, obsługę prawną i księgową, reprezentację przed urzędami.',
    },
    {
      category: 'obsługa-wspólnot',
      question: 'Jak wygląda proces przejęcia wspólnoty w zarządzanie?',
      answer: 'Proces obejmuje: spotkanie z zarządem, analizę dokumentacji, przegląd techniczny nieruchomości, przygotowanie oferty, podpisanie umowy, protokolarne przejęcie dokumentów i kluczy, powiadomienie mieszkańców i dostawców usług.',
    },
    {
      category: 'obsługa-wspólnot',
      question: 'Jak często odbywają się spotkania z zarządem wspólnoty?',
      answer: 'Regularne spotkania odbywają się co kwartał, dodatkowo w razie pilnych spraw. Omawiamy bieżące sprawy, planujemy remonty, analizujemy finanse i podejmujemy decyzje o kolejnych działaniach.',
    },
    {
      category: 'obsługa-wspólnot',
      question: 'Jak wygląda obsługa księgowa wspólnoty?',
      answer: 'Obsługa księgowa obejmuje: prowadzenie ewidencji przychodów i kosztów, rozliczanie mediów, przygotowywanie sprawozdań finansowych, prowadzenie windykacji, obsługę kont bankowych, rozliczenia z dostawcami.',
    },
    {
      category: 'obsługa-wspólnot',
      question: 'Jakie są zasady komunikacji z mieszkańcami?',
      answer: 'Komunikacja odbywa się poprzez: tablice ogłoszeń, newslettery, dedykowaną platformę internetową, dyżury zarządcy, telefon alarmowy 24/7, regularne zebrania informacyjne.',
    },
    // Administrowanie budynkami
    {
      category: 'administrowanie',
      question: 'Co wchodzi w zakres administrowania budynkiem?',
      answer: 'Zakres obejmuje: utrzymanie czystości, konserwację, obsługę techniczną, nadzór nad firmami sprzątającymi, kontrolę bezpieczeństwa, prowadzenie książki obiektu, organizację przeglądów.',
    },
    {
      category: 'administrowanie',
      question: 'Jak często przeprowadzane są kontrole stanu budynku?',
      answer: 'Kontrole przeprowadzane są: codziennie (obchód budynku), tygodniowo (przegląd instalacji), miesięcznie (kontrola urządzeń), rocznie (przeglądy techniczne) oraz doraźnie w razie zgłoszeń.',
    },
    {
      category: 'administrowanie',
      question: 'Jak wygląda proces zgłaszania i usuwania usterek?',
      answer: 'Usterki można zgłaszać 24/7 przez platformę online, telefonicznie lub osobiście. Każde zgłoszenie jest rejestrowane, kategoryzowane według pilności i przekazywane do odpowiednich służb technicznych.',
    },
    {
      category: 'administrowanie',
      question: 'Jakie są standardy utrzymania czystości?',
      answer: 'Określamy szczegółowe harmonogramy sprzątania dla różnych stref budynku, standardy jakości, używane środki czystości. Prowadzimy regularne kontrole jakości i ankiety zadowolenia mieszkańców.',
    },
    {
      category: 'administrowanie',
      question: 'Jak zarządzacie dokumentacją techniczną budynku?',
      answer: 'Prowadzimy elektroniczny i papierowy system archiwizacji, obejmujący: dokumentację techniczną, protokoły przeglądów, karty gwarancyjne, instrukcje obsługi, pozwolenia i certyfikaty.',
    },
    // Zarządzanie najmem
    {
      category: 'zarządzanie-najmem',
      question: 'Jakie usługi obejmuje zarządzanie najmem?',
      answer: 'Usługa obejmuje: poszukiwanie najemców, przygotowanie umów, przekazanie lokalu, rozliczanie mediów i czynszu, obsługę najemców, kontrole stanu lokalu, reprezentację właściciela.',
    },
    {
      category: 'zarządzanie-najmem',
      question: 'Jak wygląda proces weryfikacji potencjalnych najemców?',
      answer: 'Weryfikujemy: zdolność finansową, historię kredytową, referencje od poprzednich wynajmujących, dokumenty tożsamości, zatrudnienie. Przeprowadzamy wywiad i sprawdzamy rejestry dłużników.',
    },
    {
      category: 'zarządzanie-najmem',
      question: 'Jakie zabezpieczenia stosujecie w umowach najmu?',
      answer: 'Stosujemy: kaucję zabezpieczającą, notarialne oświadczenie o poddaniu się egzekucji, szczegółowy protokół zdawczo-odbiorczy, ubezpieczenie OC najemcy, zapisy o karach umownych.',
    },
    {
      category: 'zarządzanie-najmem',
      question: 'Jak często przeprowadzane są kontrole wynajmowanych lokali?',
      answer: 'Standardowo kontrole przeprowadzamy co kwartał, dodatkowo przy każdej zmianie najemcy. W razie potrzeby wykonujemy kontrole doraźne po zgłoszeniu problemów.',
    },
    {
      category: 'zarządzanie-najmem',
      question: 'Jak wygląda proces rozliczania najmu?',
      answer: 'Miesięcznie przygotowujemy: rozliczenie czynszu i opłat, raport o stanie lokalu, zestawienie kosztów, faktury dla najemcy. Właściciel otrzymuje szczegółowe raporty finansowe.',
    },
    // Doradztwo i optymalizacje
    {
      category: 'doradztwo',
      question: 'W jakich obszarach świadczycie usługi doradcze?',
      answer: 'Doradzamy w zakresie: optymalizacji kosztów, efektywności energetycznej, modernizacji budynków, planowania inwestycji, pozyskiwania finansowania, zarządzania projektami, kwestii prawnych.',
    },
    {
      category: 'doradztwo',
      question: 'Jak wygląda proces optymalizacji kosztów?',
      answer: 'Proces obejmuje: audyt obecnych kosztów, analizę umów z dostawcami, identyfikację obszarów oszczędności, propozycje zmian, wdrożenie rozwiązań, monitoring efektów, regularne raporty.',
    },
    {
      category: 'doradztwo',
      question: 'Jakie są najczęstsze obszary optymalizacji?',
      answer: 'Główne obszary to: zużycie mediów, koszty sprzątania i konserwacji, ubezpieczenia, usługi telekomunikacyjne, modernizacje zwiększające efektywność energetyczną.',
    },
    {
      category: 'doradztwo',
      question: 'Jak pomagacie w pozyskiwaniu finansowania?',
      answer: 'Pomagamy w: identyfikacji źródeł finansowania, przygotowaniu wniosków o dotacje, negocjacjach z bankami, opracowaniu biznesplanów, montażu finansowym inwestycji.',
    },
    {
      category: 'doradztwo',
      question: 'Jakie są korzyści z audytu zarządzania nieruchomością?',
      answer: 'Audyt pozwala: zidentyfikować obszary nieefektywności, obniżyć koszty, poprawić jakość usług, zoptymalizować procesy, zwiększyć wartość nieruchomości, poprawić bezpieczeństwo.',
    },
    // Przeglądy budowlane i pięcioletnie
    {
      category: 'przeglądy',
      question: 'Jakie elementy sprawdzane są podczas przeglądu rocznego?',
      answer: 'Sprawdzamy: stan techniczny budynku, instalacje, elementy konstrukcyjne, stolarkę, elewację, dach, instalacje przeciwpożarowe, drogi ewakuacyjne, tereny zewnętrzne.',
    },
    {
      category: 'przeglądy',
      question: 'Co obejmuje przegląd instalacji elektrycznej?',
      answer: 'Przegląd obejmuje: pomiary ochronne, sprawdzenie rozdzielnic, kontrolę instalacji odgromowej, test oświetlenia awaryjnego, weryfikację dokumentacji, oznakowanie obwodów.',
    },
    {
      category: 'przeglądy',
      question: 'Jak przygotować budynek do przeglądu?',
      answer: 'Należy: zgromadzić dokumentację techniczną, powiadomić mieszkańców, zapewnić dostęp do wszystkich pomieszczeń technicznych, przygotować książkę obiektu, udostępnić protokoły poprzednich kontroli.',
    },
    {
      category: 'przeglądy',
      question: 'Jakie są konsekwencje negatywnego wyniku przeglądu?',
      answer: 'W przypadku wykrycia nieprawidłowości: wydawane są zalecenia pokontrolne, określane są terminy usunięcia usterek, w poważnych przypadkach powiadamiany jest nadzór budowlany.',
    },
    {
      category: 'przeglądy',
      question: 'Jak często należy wykonywać poszczególne rodzaje przeglądów?',
      answer: 'Przeglądy okresowe: budowlany - raz w roku, kominiarski - dwa razy w roku, gazowy - raz w roku, elektryczny - co 5 lat, przeciwpożarowy - raz w roku, wind - co miesiąc.',
    },
    // Dla deweloperów
    {
      category: 'dla-deweloperów',
      question: 'Jakie usługi oferujecie dla deweloperów?',
      answer: 'Oferujemy: zarządzanie w okresie gwarancyjnym, obsługę przekazania lokali, organizację wspólnot, doradztwo projektowe, optymalizację kosztów eksploatacji, obsługę gwarancyjną.',
    },
    {
      category: 'dla-deweloperów',
      question: 'Jak wygląda proces przejęcia nowej inwestycji?',
      answer: 'Proces obejmuje: przegląd dokumentacji, odbiory techniczne, utworzenie wspólnoty, przygotowanie regulaminów, organizację pierwszych zebrań, przejęcie dokumentacji technicznej.',
    },
    {
      category: 'dla-deweloperów',
      question: 'Jak zarządzacie zgłoszeniami gwarancyjnymi?',
      answer: 'Prowadzimy: rejestr zgłoszeń, weryfikację zasadności, kontakt z wykonawcami, nadzór nad naprawami, dokumentację napraw, raporty dla dewelopera, obsługę mieszkańców.',
    },
    {
      category: 'dla-deweloperów',
      question: 'Jakie wsparcie oferujecie przy przekazywaniu mieszkań?',
      answer: 'Zapewniamy: przygotowanie protokołów, obecność przy odbiorach, dokumentację fotograficzną, rejestr usterek, koordynację napraw, instrukcje dla mieszkańców, obsługę reklamacji.',
    },
    {
      category: 'dla-deweloperów',
      question: 'Jak pomagacie w optymalizacji projektów?',
      answer: 'Doradzamy w zakresie: rozwiązań technicznych, doboru materiałów, efektywności energetycznej, funkcjonalności przestrzeni wspólnych, rozwiązań smart home, systemów bezpieczeństwa.',
    },
    // Dla wspólnot mieszkaniowych
    {
      category: 'dla-wspólnot',
      question: 'Jakie pakiety zarządzania oferujecie wspólnotom?',
      answer: 'Oferujemy pakiety: podstawowy (administracja), rozszerzony (z obsługą techniczną), premium (kompleksowe zarządzanie) oraz indywidualnie dostosowane rozwiązania.',
    },
    {
      category: 'dla-wspólnot',
      question: 'Jak pomagacie w planowaniu remontów?',
      answer: 'Przygotowujemy: przeglądy techniczne, plany remontowe, kosztorysy, harmonogramy prac, dokumentację przetargową, nadzór nad wykonawcami, rozliczenia finansowe.',
    },
    {
      category: 'dla-wspólnot',
      question: 'Jakie narzędzia komunikacji zapewniacie?',
      answer: 'Udostępniamy: platformę online dla mieszkańców, aplikację mobilną, newsletter, tablice informacyjne, dyżury zarządcy, całodobową linię awaryjną, regularne spotkania informacyjne.',
    },
    {
      category: 'dla-wspólnot',
      question: 'Jak wspieracie w pozyskiwaniu finansowania?',
      answer: 'Pomagamy w: analizie możliwości finansowych, wyborze źródeł finansowania, przygotowaniu wniosków kredytowych, pozyskiwaniu dotacji, optymalizacji funduszu remontowego.',
    },
    {
      category: 'dla-wspólnot',
      question: 'Jakie działania podejmujecie w sytuacjach awaryjnych?',
      answer: 'Zapewniamy: całodobowy telefon alarmowy, szybką reakcję służb technicznych, koordynację napraw, zabezpieczenie miejsca awarii, komunikację z mieszkańcami, dokumentację zdarzeń.',
    },
    // Dla osób prywatnych
    {
      category: 'dla-prywatnych',
      question: 'Jakie usługi świadczycie dla właścicieli pojedynczych mieszkań?',
      answer: 'Oferujemy: zarządzanie najmem, obsługę techniczną, rozliczanie mediów, reprezentację we wspólnocie, doradztwo inwestycyjne, pomoc w modernizacji lokalu.',
    },
    {
      category: 'dla-prywatnych',
      question: 'Jak wygląda kompleksowa obsługa najmu?',
      answer: 'Obejmuje: znalezienie najemcy, przygotowanie umowy, przekazanie lokalu, rozliczenia, obsługę napraw, kontrole stanu mieszkania, reprezentację właściciela.',
    },
    {
      category: 'dla-prywatnych',
      question: 'Jakie wsparcie oferujecie przy zakupie mieszkania?',
      answer: 'Zapewniamy: analizę stanu technicznego, weryfikację dokumentów, ocenę potencjału inwestycyjnego, doradztwo przy negocjacjach, wsparcie przy odbiorze technicznym.',
    },
    {
      category: 'dla-prywatnych',
      question: 'Jak pomagacie w modernizacji mieszkań?',
      answer: 'Doradzamy w: planowaniu remontu, wyborze wykonawców, nadzorze nad pracami, odbiorach technicznych, uzyskaniu pozwoleń, optymalizacji kosztów.',
    },
    {
      category: 'dla-prywatnych',
      question: 'Jakie są korzyści z profesjonalnego zarządzania mieszkaniem?',
      answer: 'Korzyści to: wyższy standard najmu, stabilne przychody, profesjonalna obsługa najemców, minimalizacja ryzyka, oszczędność czasu, optymalizacja kosztów.',
    },
    // Dla komercji
    {
      category: 'dla-komercji',
      question: 'Jakie usługi oferujecie dla obiektów handlowych?',
      answer: 'Oferujemy: zarządzanie techniczne, obsługę najemców, marketing obiektu, optymalizację kosztów, zarządzanie bezpieczeństwem, raportowanie wyników.',
    },
    {
      category: 'dla-komercji',
      question: 'Jak zarządzacie relacjami z najemcami komercyjnymi?',
      answer: 'Zapewniamy: regularne spotkania, szybką reakcję na zgłoszenia, wsparcie przy adaptacjach, rozliczenia eksploatacyjne, koordynację działań marketingowych.',
    },
    {
      category: 'dla-komercji',
      question: 'Jakie działania marketingowe prowadzicie?',
      answer: 'Realizujemy: strategię promocji, wydarzenia specjalne, kampanie reklamowe, komunikację w mediach społecznościowych, badania satysfakcji klientów.',
    },
    {
      category: 'dla-komercji',
      question: 'Jak optymalizujecie koszty w obiektach handlowych?',
      answer: 'Analizujemy: zużycie mediów, koszty sprzątania, ochrony, konserwacji, ubezpieczeń. Wprowadzamy rozwiązania energooszczędne i automatyzację procesów.',
    },
    {
      category: 'dla-komercji',
      question: 'Jakie raporty otrzymuje właściciel obiektu?',
      answer: 'Przygotowujemy: raporty finansowe, analizy odwiedzalności, zestawienia kosztów, raporty techniczne, analizy najemców, prognozy rozwoju.',
    },
    // Dla biznesu
    {
      category: 'dla-biznesu',
      question: 'Jakie usługi świadczycie dla budynków biurowych?',
      answer: 'Oferujemy: zarządzanie techniczne, obsługę najemców, planowanie przestrzeni, optymalizację kosztów, zarządzanie bezpieczeństwem, modernizacje.',
    },
    {
      category: 'dla-biznesu',
      question: 'Jak zapewniacie komfort pracy w biurowcu?',
      answer: 'Dbamy o: jakość powietrza, temperaturę, oświetlenie, akustykę, czystość, sprawność systemów, bezpieczeństwo, udogodnienia dla pracowników.',
    },
    {
      category: 'dla-biznesu',
      question: 'Jakie systemy bezpieczeństwa wdrażacie?',
      answer: 'Implementujemy: kontrolę dostępu, monitoring, ochronę fizyczną, systemy przeciwpożarowe, procedury ewakuacyjne, zabezpieczenia IT.',
    },
    {
      category: 'dla-biznesu',
      question: 'Jak wspieracie planowanie przestrzeni biurowej?',
      answer: 'Doradzamy w: aranżacji przestrzeni, ergonomii stanowisk, organizacji stref wspólnych, adaptacji pomieszczeń, planowaniu instalacji.',
    },
    {
      category: 'dla-biznesu',
      question: 'Jakie rozwiązania proekologiczne wprowadzacie?',
      answer: 'Wdrażamy: systemy oszczędzania energii, segregację odpadów, zielone technologie, certyfikację ekologiczną, programy edukacyjne dla użytkowników.',
    }
  ];

  // Łączenie wszystkich pytań
  const allFaqItems = [...faqItems, ...serviceQuestions];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const filteredItems = faqItems.filter((item) => {
    const matchesSearch = item.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).concat(
    serviceQuestions.filter((item) => {
      const matchesSearch = item.question
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="FAQ | Stolica - Zarządzanie Nieruchomościami"
        description="✓ Odpowiedzi na najczęstsze pytania o zarządzanie nieruchomościami ✓ Koszty i zakres usług ✓ Procesy zarządzania ✓ Aspekty prawne ✓ Standardy obsługi klienta"
      />
      <Header />
      <div className="pt-20">
        <div className="bg-[#DAA520] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">
              FAQ - Najczęściej zadawane pytania o zarządzanie nieruchomościami
            </h1>
            <p className="text-center max-w-2xl mx-auto">
              Znajdź odpowiedzi na pytania dotyczące zarządzania nieruchomościami,
              wspólnot mieszkaniowych i kwestii technicznych
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Wyszukiwarka */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Szukaj w FAQ..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DAA520] focus:border-transparent transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filtry kategorii */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#DAA520] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Lista FAQ */}
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-medium text-gray-900">
                      {item.question}
                    </span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  Nie znaleziono pytań pasujących do podanych kryteriów.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
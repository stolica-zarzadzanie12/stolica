/*
  # Add service section content

  1. New Content
    - Adds content for 4 main service sections
    - Includes SEO metadata
    - Properly structured HTML content

  2. Categories
    - Housing communities
    - Private owners
    - Commercial properties
    - Business clients
*/

-- Insert new categories
INSERT INTO categories (name, slug, description) VALUES
('Wspólnoty mieszkaniowe', 'wspolnoty-mieszkaniowe', 'Usługi dla wspólnot mieszkaniowych'),
('Właściciele prywatni', 'wlasciciele-prywatni', 'Usługi dla właścicieli prywatnych'),
('Nieruchomości komercyjne', 'nieruchomosci-komercyjne', 'Usługi dla właścicieli nieruchomości komercyjnych'),
('Biznes', 'biznes', 'Usługi dla przedsiębiorców i firm');

-- Insert new tags
INSERT INTO tags (name, slug) VALUES
('wspólnoty mieszkaniowe', 'wspolnoty-mieszkaniowe'),
('zarządzanie najmem', 'zarzadzanie-najmem'),
('nieruchomości komercyjne', 'nieruchomosci-komercyjne'),
('dla firm', 'dla-firm');

-- Insert content for housing communities
INSERT INTO posts (
  title,
  slug,
  content,
  excerpt,
  meta_title,
  meta_description,
  status,
  author_id,
  published_at
) VALUES (
  'Profesjonalne zarządzanie wspólnotami mieszkaniowymi',
  'zarzadzanie-wspolnotami-mieszkaniowymi',
  '<h1>Profesjonalne zarządzanie wspólnotami mieszkaniowymi</h1>

<p class="lead">Zapewniamy kompleksową obsługę wspólnot mieszkaniowych, łącząc 15-letnie doświadczenie z innowacyjnym podejściem do zarządzania. Nasi eksperci dbają o każdy aspekt funkcjonowania Państwa nieruchomości, zapewniając spokój i bezpieczeństwo mieszkańcom.</p>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Redukcja kosztów o 15-25%</strong> w pierwszym roku współpracy dzięki optymalizacji umów i wprowadzeniu energooszczędnych rozwiązań</li>
  <li><strong>Szybka reakcja na zgłoszenia</strong> - gwarantowany czas reakcji do 2 godzin w sytuacjach awaryjnych</li>
  <li><strong>Transparentne zarządzanie</strong> - dostęp online do dokumentacji i rozliczeń 24/7</li>
  <li><strong>Profesjonalna obsługa prawna</strong> - własny dział prawny specjalizujący się w prawie nieruchomości</li>
  <li><strong>Dedykowany opiekun</strong> - jeden kontakt dla wszystkich spraw związanych z nieruchomością</li>
</ul>

<h2>Nasze usługi</h2>

<h3>Administracja i zarządzanie</h3>
<p>Kompleksowa obsługa administracyjna wspólnoty, obejmująca prowadzenie dokumentacji, organizację zebrań, przygotowywanie uchwał i reprezentację przed urzędami. Zapewniamy profesjonalne wsparcie w podejmowaniu kluczowych decyzji.</p>

<h3>Obsługa techniczna</h3>
<p>Całodobowe pogotowie techniczne, regularne przeglądy, konserwacja instalacji i urządzeń. Nasz zespół techniczny jest dostępny 24/7, gotowy do natychmiastowej reakcji w sytuacjach awaryjnych.</p>

<h3>Obsługa finansowo-księgowa</h3>
<p>Profesjonalne prowadzenie księgowości, rozliczanie mediów, windykacja należności i optymalizacja kosztów. Zapewniamy przejrzyste raporty i stały dostęp do dokumentacji finansowej online.</p>

<h3>Planowanie remontów</h3>
<p>Kompleksowe wsparcie w planowaniu i realizacji remontów, od przygotowania dokumentacji po nadzór nad wykonawcami. Pomagamy w pozyskiwaniu finansowania i dotacji na modernizacje.</p>

<h3>Obsługa prawna</h3>
<p>Pełna obsługa prawna wspólnoty, wsparcie w sporach sądowych, przygotowywanie i opiniowanie umów. Nasz dział prawny specjalizuje się w prawie nieruchomości i wspólnot mieszkaniowych.</p>

<h2>Rozwiązujemy problemy</h2>

<h3>Jak obniżyć koszty utrzymania nieruchomości?</h3>
<p>Przeprowadzamy szczegółowy audyt kosztów, negocjujemy umowy z dostawcami, wdrażamy rozwiązania energooszczędne i optymalizujemy harmonogramy prac. Średnia redukcja kosztów w pierwszym roku to 15-25%.</p>

<h3>Jak przyspieszyć reakcję na awarie?</h3>
<p>Zapewniamy całodobowe pogotowie techniczne z gwarantowanym czasem reakcji do 2 godzin. Nasz system zgłoszeń online pozwala na błyskawiczne przekazywanie informacji i śledzenie statusu napraw.</p>

<h3>Jak usprawnić komunikację z mieszkańcami?</h3>
<p>Udostępniamy nowoczesną platformę komunikacyjną, gdzie mieszkańcy mają dostęp do dokumentów, rozliczeń i mogą zgłaszać usterki. Organizujemy regularne spotkania informacyjne i zapewniamy szybką odpowiedź na zapytania.</p>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy, uwzględniającą specyfikę Państwa nieruchomości.</p>

<div class="cta">
  <p class="cta-text">Umów bezpłatną konsultację i poznaj możliwości optymalizacji kosztów w Twojej wspólnocie</p>
  <p class="cta-benefits">✓ Profesjonalna analiza potrzeb<br>✓ Indywidualna oferta<br>✓ Konkretne propozycje oszczędności</p>
</div>',
  'Profesjonalne zarządzanie wspólnotami mieszkaniowymi. Optymalizacja kosztów, kompleksowa obsługa techniczna i administracyjna, wsparcie prawne. Sprawdź, jak możemy pomóc Twojej wspólnocie.',
  'Zarządzanie wspólnotami mieszkaniowymi | Profesjonalna obsługa',
  'Kompleksowe zarządzanie wspólnotami mieszkaniowymi. Redukcja kosztów do 25%, wsparcie prawne i techniczne 24/7. Sprawdź naszą ofertę!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
);

-- Insert content for private owners
INSERT INTO posts (
  title,
  slug,
  content,
  excerpt,
  meta_title,
  meta_description,
  status,
  author_id,
  published_at
) VALUES (
  'Zarządzanie najmem dla właścicieli prywatnych',
  'zarzadzanie-najmem-dla-wlascicieli',
  '<h1>Zarządzanie najmem dla właścicieli prywatnych</h1>

<p class="lead">Przejmujemy pełną odpowiedzialność za zarządzanie Twoją nieruchomością, zapewniając stabilny przychód i profesjonalną obsługę najemców. Dzięki nam zyskujesz spokój i pewność, że Twoja inwestycja jest w dobrych rękach.</p>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Gwarantowany przychód</strong> - zapewniamy stabilne wpływy z najmu, niezależnie od sytuacji na rynku</li>
  <li><strong>Profesjonalna weryfikacja najemców</strong> - szczegółowe sprawdzenie historii kredytowej i zatrudnienia</li>
  <li><strong>Kompleksowa obsługa techniczna</strong> - szybka reakcja na awarie i regularne przeglądy</li>
  <li><strong>Bezpieczeństwo prawne</strong> - profesjonalne umowy i ochrona interesów właściciela</li>
  <li><strong>Oszczędność czasu</strong> - przejmujemy wszystkie obowiązki związane z zarządzaniem najmem</li>
</ul>

<h2>Nasze usługi</h2>

<h3>Kompleksowe zarządzanie najmem</h3>
<p>Pełna obsługa procesu najmu od znalezienia najemcy po rozliczenie końcowe. Zajmujemy się marketingiem, pokazami mieszkania, weryfikacją najemców i przygotowaniem umów.</p>

<h3>Obsługa najemców</h3>
<p>Profesjonalna komunikacja z najemcami, rozwiązywanie bieżących problemów, przyjmowanie i realizacja zgłoszeń. Dbamy o dobre relacje i wysoką satysfakcję najemców.</p>

<h3>Rozliczenia i raporty</h3>
<p>Regularne rozliczenia czynszów i mediów, windykacja należności, szczegółowe raporty finansowe. Zapewniamy pełną transparentność i dostęp do dokumentacji online.</p>

<h3>Obsługa techniczna</h3>
<p>Regularne przeglądy, konserwacja, naprawy i modernizacje. Współpracujemy ze sprawdzonymi wykonawcami i negocjujemy korzystne stawki za usługi.</p>

<h3>Doradztwo inwestycyjne</h3>
<p>Wsparcie w optymalizacji przychodów z najmu, doradztwo w zakresie modernizacji i wyposażenia, analiza rynku i rekomendacje cenowe.</p>

<h2>Rozwiązujemy problemy</h2>

<h3>Co w przypadku problemów z płatnościami?</h3>
<p>Posiadamy skuteczne procedury windykacyjne i zabezpieczenia prawne. W razie problemów z płatnościami podejmujemy natychmiastowe działania, chroniąc interesy właściciela.</p>

<h3>Jak zapewnić ciągłość najmu?</h3>
<p>Aktywnie poszukujemy najemców jeszcze przed zakończeniem obecnej umowy. Nasza baza potencjalnych najemców i skuteczny marketing pozwalają minimalizować okresy pustostanu.</p>

<h3>Kto odpowiada za naprawy i awarie?</h3>
<p>Zapewniamy całodobową obsługę techniczną i szybką reakcję na awarie. Koordynujemy wszystkie naprawy, dbając o jakość wykonania i optymalne koszty.</p>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy dostosowaną do Twoich potrzeb.</p>

<div class="cta">
  <p class="cta-text">Umów bezpłatną konsultację i dowiedz się, jak zwiększyć przychody z najmu</p>
  <p class="cta-benefits">✓ Analiza potencjału nieruchomości<br>✓ Wycena rynkowa<br>✓ Propozycja optymalizacji przychodów</p>
</div>',
  'Profesjonalne zarządzanie najmem dla właścicieli prywatnych. Gwarantujemy stabilne przychody, kompleksową obsługę najemców i bezpieczeństwo prawne. Sprawdź naszą ofertę.',
  'Zarządzanie najmem | Usługi dla właścicieli prywatnych',
  'Kompleksowe zarządzanie najmem dla właścicieli prywatnych. Gwarantowane przychody, profesjonalna obsługa najemców, wsparcie prawne i techniczne 24/7.',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
);

-- Insert content for commercial property owners
INSERT INTO posts (
  title,
  slug,
  content,
  excerpt,
  meta_title,
  meta_description,
  status,
  author_id,
  published_at
) VALUES (
  'Zarządzanie nieruchomościami komercyjnymi',
  'zarzadzanie-nieruchomosciami-komercyjnymi',
  '<h1>Zarządzanie nieruchomościami komercyjnymi</h1>

<p class="lead">Oferujemy kompleksowe zarządzanie obiektami komercyjnymi, zapewniając optymalizację kosztów operacyjnych i maksymalizację wartości nieruchomości. Nasze doświadczenie to gwarancja profesjonalnej obsługi i efektywnego zarządzania.</p>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Redukcja kosztów operacyjnych</strong> - średnio o 20% w pierwszym roku współpracy</li>
  <li><strong>Optymalizacja procesów</strong> - wdrażanie efektywnych procedur i systemów zarządzania</li>
  <li><strong>Maksymalizacja przychodów</strong> - aktywne zarządzanie najmem i optymalizacja stawek</li>
  <li><strong>Wzrost wartości nieruchomości</strong> - strategiczne planowanie modernizacji i ulepszeń</li>
  <li><strong>Profesjonalne raportowanie</strong> - szczegółowe analizy i rekomendacje działań</li>
</ul>

<h2>Nasze usługi</h2>

<h3>Zarządzanie operacyjne</h3>
<p>Kompleksowa obsługa techniczna i administracyjna obiektu, zarządzanie dostawcami usług, optymalizacja procesów operacyjnych. Zapewniamy efektywne funkcjonowanie nieruchomości 24/7.</p>

<h3>Zarządzanie najmem</h3>
<p>Aktywne pozyskiwanie i obsługa najemców, negocjacje umów, rozliczenia i windykacja. Dbamy o optymalne wykorzystanie powierzchni i maksymalizację przychodów.</p>

<h3>Zarządzanie techniczne</h3>
<p>Kompleksowa obsługa techniczna, przeglądy i konserwacje, modernizacje i remonty. Zapewniamy sprawne funkcjonowanie wszystkich systemów i instalacji.</p>

<h3>Optymalizacja kosztów</h3>
<p>Audyty i optymalizacja kosztów operacyjnych, negocjacje z dostawcami, wdrażanie rozwiązań energooszczędnych. Średnia redukcja kosztów to 20% w pierwszym roku.</p>

<h3>Raportowanie i analizy</h3>
<p>Szczegółowe raporty operacyjne i finansowe, analizy efektywności, rekomendacje działań optymalizacyjnych. Zapewniamy pełną transparentność zarządzania.</p>

<h2>Rozwiązujemy problemy</h2>

<h3>Jak zoptymalizować koszty operacyjne?</h3>
<p>Przeprowadzamy szczegółowe audyty, identyfikujemy obszary nieefektywności i wdrażamy rozwiązania optymalizacyjne. Nasze działania przynoszą wymierne oszczędności już w pierwszych miesiącach współpracy.</p>

<h3>Jak zwiększyć przychody z najmu?</h3>
<p>Aktywnie zarządzamy powierzchniami, optymalizujemy mix najemców i stawki najmu. Nasze działania marketingowe i profesjonalna obsługa najemców przekładają się na wzrost przychodów.</p>

<h3>Jak podnieść wartość nieruchomości?</h3>
<p>Tworzymy i realizujemy strategiczne plany modernizacji i ulepszeń. Nasze rekomendacje uwzględniają trendy rynkowe i potrzeby najemców, przekładając się na wzrost wartości nieruchomości.</p>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy, uwzględniającą specyfikę Państwa nieruchomości.</p>

<div class="cta">
  <p class="cta-text">Umów bezpłatny audyt i poznaj potencjał optymalizacji w Twojej nieruchomości</p>
  <p class="cta-benefits">✓ Analiza kosztów operacyjnych<br>✓ Identyfikacja obszarów optymalizacji<br>✓ Konkretne propozycje usprawnień</p>
</div>',
  'Profesjonalne zarządzanie nieruchomościami komercyjnymi. Optymalizacja kosztów, maksymalizacja przychodów, kompleksowa obsługa techniczna i administracyjna.',
  'Zarządzanie nieruchomościami komercyjnymi | Profesjonalna obsługa',
  'Kompleksowe zarządzanie nieruchomościami komercyjnymi. Redukcja kosztów do 20%, optymalizacja procesów, maksymalizacja wartości. Sprawdź!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
);

-- Insert content for business clients
INSERT INTO posts (
  title,
  slug,
  content,
  excerpt,
  meta_title,
  meta_description,
  status,
  author_id,
  published_at
) VALUES (
  'Zarządzanie nieruchomościami dla firm i przedsiębiorców',
  'zarzadzanie-nieruchomosciami-dla-firm',
  '<h1>Zarządzanie nieruchomościami dla firm i przedsiębiorców</h1>

<p class="lead">Oferujemy kompleksowe rozwiązania w zakresie zarządzania nieruchomościami dla firm, pozwalające skupić się na rozwoju głównej działalności. Przejmujemy pełną odpowiedzialność za obsługę nieruchomości, zapewniając optymalizację kosztów i profesjonalne wsparcie.</p>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Oszczędność czasu i zasobów</strong> - przejmujemy wszystkie obowiązki związane z zarządzaniem</li>
  <li><strong>Redukcja kosztów</strong> - średnio 15-20% oszczędności w pierwszym roku</li>
  <li><strong>Profesjonalne wsparcie</strong> - dedykowany opiekun i zespół ekspertów</li>
  <li><strong>Optymalizacja procesów</strong> - wdrażanie efektywnych procedur i systemów</li>
  <li><strong>Bezpieczeństwo prawne</strong> - pełna zgodność z przepisami i regulacjami</li>
</ul>

<h2>Nasze usługi</h2>

<h3>Kompleksowe zarządzanie</h3>
<p>Pełna obsługa administracyjna i techniczna nieruchomości, zarządzanie dostawcami usług, optymalizacja procesów. Zapewniamy sprawne funkcjonowanie obiektu i profesjonalną obsługę użytkowników.</p>

<h3>Optymalizacja kosztów</h3>
<p>Audyty i optymalizacja kosztów operacyjnych, negocjacje z dostawcami, wdrażanie rozwiązań energooszczędnych. Nasze działania przekładają się na wymierne oszczędności.</p>

<h3>Obsługa techniczna</h3>
<p>Kompleksowa obsługa techniczna, przeglądy i konserwacje, modernizacje i remonty. Zapewniamy sprawne funkcjonowanie wszystkich systemów i instalacji 24/7.</p>

<h3>Zarządzanie powierzchnią</h3>
<p>Optymalizacja wykorzystania powierzchni, planowanie przestrzeni, koordynacja przeprowadzek i adaptacji. Pomagamy efektywnie wykorzystać dostępną przestrzeń.</p>

<h3>Wsparcie prawne</h3>
<p>Kompleksowa obsługa prawna, przygotowywanie i opiniowanie umów, reprezentacja przed urzędami. Zapewniamy bezpieczeństwo prawne i zgodność z przepisami.</p>

<h2>Rozwiązujemy problemy</h2>

<h3>Jak zoptymalizować koszty utrzymania?</h3>
<p>Przeprowadzamy szczegółowe audyty, identyfikujemy obszary nieefektywności i wdrażamy rozwiązania optymalizacyjne. Nasze działania przynoszą wymierne oszczędności już w pierwszych miesiącach współpracy.</p>

<h3>Jak usprawnić procesy zarządzania?</h3>
<p>Wdrażamy efektywne procedury i systemy zarządzania, automatyzujemy procesy, zapewniamy profesjonalne wsparcie. Nasze rozwiązania pozwalają zaoszczędzić czas i zasoby.</p>

<h3>Jak zapewnić bezpieczeństwo i zgodność z przepisami?</h3>
<p>Zapewniamy pełną zgodność z przepisami i regulacjami, regularne przeglądy i aktualizacje dokumentacji. Nasz zespół prawny dba o bezpieczeństwo prawne nieruchomości.</p>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy dostosowaną do potrzeb Państwa firmy.</p>

<div class="cta">
  <p class="cta-text">Umów bezpłatną konsultację i poznaj możliwości optymalizacji w Twojej firmie</p>
  <p class="cta-benefits">✓ Analiza obecnych procesów<br>✓ Identyfikacja potencjału optymalizacji<br>✓ Konkretne propozycje usprawnień</p>
</div>',
  'Profesjonalne zarządzanie nieruchomościami dla firm i przedsiębiorców. Optymalizacja kosztów, kompleksowa obsługa techniczna i administracyjna, wsparcie prawne.',
  'Zarządzanie nieruchomościami dla firm | Profesjonalna obsługa',
  'Kompleksowe zarządzanie nieruchomościami dla firm. Redukcja kosztów do 20%, optymalizacja procesów, profesjonalne wsparcie. Sprawdź!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
);

-- Link categories and tags
INSERT INTO post_categories (post_id, category_id)
SELECT p.id, c.id
FROM posts p
CROSS JOIN categories c
WHERE 
  (p.slug = 'zarzadzanie-wspolnotami-mieszkaniowymi' AND c.slug = 'wspolnoty-mieszkaniowe') OR
  (p.slug = 'zarzadzanie-najmem-dla-wlascicieli' AND c.slug = 'wlasciciele-prywatni') OR
  (p.slug = 'zarzadzanie-nieruchomosciami-komercyjnymi' AND c.slug = 'nieruchomosci-komercyjne') OR
  (p.slug = 'zarzadzanie-nieruchomosciami-dla-firm' AND c.slug = 'biznes');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p
CROSS JOIN tags t
WHERE 
  (p.slug = 'zarzadzanie-wspolnotami-mieszkaniowymi' AND t.slug = 'wspolnoty-mieszkaniowe') OR
  (p.slug = 'zarzadzanie-najmem-dla-wlascicieli' AND t.slug = 'zarzadzanie-najmem') OR
  (p.slug = 'zarzadzanie-nieruchomosciami-komercyjnymi' AND t.slug = 'nieruchomosci-komercyjne') OR
  (p.slug = 'zarzadzanie-nieruchomosciami-dla-firm' AND t.slug = 'dla-firm');
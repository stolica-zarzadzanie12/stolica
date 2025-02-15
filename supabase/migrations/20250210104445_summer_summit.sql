/*
  # Add offer pages content

  1. New Content
    - Adds content for four main offer pages
    - Includes SEO metadata and proper formatting
    - Targets specific customer segments

  2. Data Structure
    - Posts with SEO metadata
    - Properly formatted HTML content
    - Categorized and tagged content
*/

-- Insert new categories if not exist
INSERT INTO categories (name, slug, description)
VALUES 
('Oferta', 'oferta', 'Główne strony ofertowe')
ON CONFLICT (slug) DO NOTHING;

-- Insert new tags if not exist
INSERT INTO tags (name, slug)
VALUES 
('oferta', 'oferta'),
('zarządzanie', 'zarzadzanie')
ON CONFLICT (slug) DO NOTHING;

-- Insert content for each offer page
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
  'Zarządzanie wspólnotami mieszkaniowymi - kompleksowa obsługa',
  'oferta-wspolnoty-mieszkaniowe',
  '<h1>Zarządzanie wspólnotami mieszkaniowymi</h1>

<p class="lead">Oferujemy kompleksową obsługę wspólnot mieszkaniowych, łącząc wieloletnie doświadczenie z innowacyjnym podejściem do zarządzania. Nasz zespół ekspertów zapewnia profesjonalne wsparcie w każdym aspekcie funkcjonowania wspólnoty.</p>

<h2>Dlaczego warto nam zaufać?</h2>
<ul>
  <li>15 lat doświadczenia w zarządzaniu nieruchomościami</li>
  <li>Ponad 150 zadowolonych wspólnot mieszkaniowych</li>
  <li>Certyfikowani zarządcy nieruchomości</li>
  <li>Ubezpieczenie OC na 5 000 000 zł</li>
  <li>Dostępność 24/7 w sytuacjach awaryjnych</li>
</ul>

<h2>Nasze usługi</h2>
<div class="services-grid">
  <div class="service">
    <h3>Administracja</h3>
    <ul>
      <li>Prowadzenie pełnej dokumentacji</li>
      <li>Organizacja zebrań wspólnoty</li>
      <li>Obsługa korespondencji</li>
      <li>Reprezentacja przed urzędami</li>
    </ul>
  </div>

  <div class="service">
    <h3>Finanse</h3>
    <ul>
      <li>Prowadzenie księgowości</li>
      <li>Rozliczanie mediów</li>
      <li>Windykacja należności</li>
      <li>Optymalizacja kosztów</li>
    </ul>
  </div>

  <div class="service">
    <h3>Obsługa techniczna</h3>
    <ul>
      <li>Przeglądy techniczne</li>
      <li>Konserwacja instalacji</li>
      <li>Pogotowie techniczne 24/7</li>
      <li>Nadzór nad remontami</li>
    </ul>
  </div>

  <div class="service">
    <h3>Wsparcie prawne</h3>
    <ul>
      <li>Obsługa prawna wspólnoty</li>
      <li>Przygotowywanie uchwał</li>
      <li>Opiniowanie umów</li>
      <li>Doradztwo prawne</li>
    </ul>
  </div>
</div>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Redukcja kosztów</strong> - średnio 15-20% oszczędności w pierwszym roku</li>
  <li><strong>Profesjonalna obsługa</strong> - dedykowany opiekun wspólnoty</li>
  <li><strong>Transparentność</strong> - dostęp online do dokumentacji 24/7</li>
  <li><strong>Bezpieczeństwo</strong> - pełne ubezpieczenie OC</li>
  <li><strong>Szybka reakcja</strong> - gwarantowany czas reakcji na zgłoszenia</li>
</ul>

<div class="cta-section">
  <h2>Skontaktuj się z nami</h2>
  <p>Umów bezpłatną konsultację i poznaj możliwości optymalizacji kosztów w Twojej wspólnocie</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>',
  'Profesjonalne zarządzanie wspólnotami mieszkaniowymi. Kompleksowa obsługa administracyjna, techniczna i prawna. Optymalizacja kosztów i pełne bezpieczeństwo.',
  'Zarządzanie wspólnotami mieszkaniowymi | Profesjonalna obsługa',
  'Kompleksowe zarządzanie wspólnotami mieszkaniowymi. 15 lat doświadczenia, redukcja kosztów do 20%, wsparcie 24/7. Sprawdź naszą ofertę!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
),
(
  'Zarządzanie najmem mieszkań i domów - usługi dla właścicieli',
  'oferta-dla-osob-prywatnych',
  '<h1>Zarządzanie najmem mieszkań i domów</h1>

<p class="lead">Przejmujemy pełną odpowiedzialność za zarządzanie Twoją nieruchomością, zapewniając stabilny przychód i profesjonalną obsługę najemców. Skup się na tym, co ważne, a my zadbamy o Twoją inwestycję.</p>

<h2>Dlaczego warto nam zaufać?</h2>
<ul>
  <li>Gwarantowany przychód z najmu</li>
  <li>Profesjonalna weryfikacja najemców</li>
  <li>Kompleksowa obsługa techniczna</li>
  <li>Pełne bezpieczeństwo prawne</li>
  <li>Regularne raporty i rozliczenia</li>
</ul>

<h2>Nasze usługi</h2>
<div class="services-grid">
  <div class="service">
    <h3>Pozyskiwanie najemców</h3>
    <ul>
      <li>Marketing nieruchomości</li>
      <li>Profesjonalne zdjęcia</li>
      <li>Weryfikacja najemców</li>
      <li>Negocjacje warunków</li>
    </ul>
  </div>

  <div class="service">
    <h3>Obsługa najmu</h3>
    <ul>
      <li>Przygotowanie umów</li>
      <li>Przekazanie lokalu</li>
      <li>Rozliczanie mediów</li>
      <li>Windykacja należności</li>
    </ul>
  </div>

  <div class="service">
    <h3>Obsługa techniczna</h3>
    <ul>
      <li>Przeglądy okresowe</li>
      <li>Naprawy i konserwacje</li>
      <li>Serwis awaryjny 24/7</li>
      <li>Remonty i modernizacje</li>
    </ul>
  </div>

  <div class="service">
    <h3>Wsparcie prawne</h3>
    <ul>
      <li>Bezpieczne umowy</li>
      <li>Ochrona interesów</li>
      <li>Obsługa prawna</li>
      <li>Doradztwo podatkowe</li>
    </ul>
  </div>
</div>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Oszczędność czasu</strong> - przejmujemy wszystkie obowiązki</li>
  <li><strong>Stabilny przychód</strong> - gwarantowane wpływy z najmu</li>
  <li><strong>Bezpieczeństwo</strong> - sprawdzeni najemcy i profesjonalne umowy</li>
  <li><strong>Spokój</strong> - całodobowa obsługa techniczna</li>
  <li><strong>Transparentność</strong> - regularne raporty i rozliczenia</li>
</ul>

<div class="cta-section">
  <h2>Skontaktuj się z nami</h2>
  <p>Umów bezpłatną konsultację i dowiedz się, jak zwiększyć przychody z najmu</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>',
  'Profesjonalne zarządzanie najmem mieszkań i domów. Gwarantowany przychód, kompleksowa obsługa najemców, wsparcie techniczne i prawne. Sprawdź naszą ofertę.',
  'Zarządzanie najmem mieszkań i domów | Usługi dla właścicieli',
  'Kompleksowe zarządzanie najmem. Gwarantowany przychód, profesjonalna obsługa najemców, wsparcie techniczne 24/7. Sprawdź!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
),
(
  'Zarządzanie obiektami komercyjnymi - usługi dla właścicieli',
  'oferta-dla-komercji',
  '<h1>Zarządzanie obiektami komercyjnymi</h1>

<p class="lead">Oferujemy kompleksowe zarządzanie obiektami komercyjnymi, zapewniając optymalizację kosztów operacyjnych i maksymalizację wartości nieruchomości. Nasze doświadczenie to gwarancja profesjonalnej obsługi i efektywnego zarządzania.</p>

<h2>Dlaczego warto nam zaufać?</h2>
<ul>
  <li>Redukcja kosztów operacyjnych do 20%</li>
  <li>Optymalizacja procesów zarządzania</li>
  <li>Maksymalizacja przychodów z najmu</li>
  <li>Profesjonalne wsparcie techniczne</li>
  <li>Kompleksowa obsługa prawna</li>
</ul>

<h2>Nasze usługi</h2>
<div class="services-grid">
  <div class="service">
    <h3>Zarządzanie operacyjne</h3>
    <ul>
      <li>Administracja obiektem</li>
      <li>Obsługa najemców</li>
      <li>Optymalizacja procesów</li>
      <li>Raportowanie wyników</li>
    </ul>
  </div>

  <div class="service">
    <h3>Zarządzanie techniczne</h3>
    <ul>
      <li>Obsługa techniczna 24/7</li>
      <li>Przeglądy i konserwacje</li>
      <li>Modernizacje i remonty</li>
      <li>Audyty techniczne</li>
    </ul>
  </div>

  <div class="service">
    <h3>Zarządzanie najmem</h3>
    <ul>
      <li>Pozyskiwanie najemców</li>
      <li>Negocjacje umów</li>
      <li>Obsługa rozliczeń</li>
      <li>Optymalizacja stawek</li>
    </ul>
  </div>

  <div class="service">
    <h3>Optymalizacja kosztów</h3>
    <ul>
      <li>Audyty i analizy</li>
      <li>Negocjacje z dostawcami</li>
      <li>Efektywność energetyczna</li>
      <li>Kontrola budżetu</li>
    </ul>
  </div>
</div>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Efektywność</strong> - optymalizacja kosztów i procesów</li>
  <li><strong>Profesjonalizm</strong> - dedykowany zespół ekspertów</li>
  <li><strong>Bezpieczeństwo</strong> - pełne ubezpieczenie OC</li>
  <li><strong>Transparentność</strong> - regularne raporty i analizy</li>
  <li><strong>Rozwój</strong> - stały wzrost wartości nieruchomości</li>
</ul>

<div class="cta-section">
  <h2>Skontaktuj się z nami</h2>
  <p>Umów bezpłatny audyt i poznaj potencjał optymalizacji w Twojej nieruchomości</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>',
  'Profesjonalne zarządzanie obiektami komercyjnymi. Optymalizacja kosztów, maksymalizacja przychodów, kompleksowa obsługa techniczna i administracyjna.',
  'Zarządzanie obiektami komercyjnymi | Profesjonalna obsługa',
  'Kompleksowe zarządzanie obiektami komercyjnymi. Redukcja kosztów do 20%, optymalizacja procesów, maksymalizacja wartości. Sprawdź!',
  'published',
  (SELECT id FROM auth.users LIMIT 1),
  NOW()
),
(
  'Zarządzanie portfelem nieruchomości - usługi dla firm',
  'oferta-dla-biznesu',
  '<h1>Zarządzanie portfelem nieruchomości dla biznesu</h1>

<p class="lead">Oferujemy kompleksowe rozwiązania w zakresie zarządzania portfelami nieruchomości dla firm, pozwalające skupić się na rozwoju głównej działalności. Przejmujemy pełną odpowiedzialność za obsługę nieruchomości, zapewniając optymalizację kosztów i profesjonalne wsparcie.</p>

<h2>Dlaczego warto nam zaufać?</h2>
<ul>
  <li>Kompleksowa obsługa portfela nieruchomości</li>
  <li>Optymalizacja kosztów operacyjnych</li>
  <li>Profesjonalne wsparcie prawne</li>
  <li>Dedykowany zespół ekspertów</li>
  <li>Raportowanie i analizy</li>
</ul>

<h2>Nasze usługi</h2>
<div class="services-grid">
  <div class="service">
    <h3>Zarządzanie portfelem</h3>
    <ul>
      <li>Strategia zarządzania</li>
      <li>Optymalizacja portfela</li>
      <li>Analiza efektywności</li>
      <li>Planowanie rozwoju</li>
    </ul>
  </div>

  <div class="service">
    <h3>Optymalizacja kosztów</h3>
    <ul>
      <li>Audyty i analizy</li>
      <li>Centralizacja zakupów</li>
      <li>Efektywność energetyczna</li>
      <li>Kontrola budżetu</li>
    </ul>
  </div>

  <div class="service">
    <h3>Obsługa techniczna</h3>
    <ul>
      <li>Zarządzanie techniczne</li>
      <li>Przeglądy i konserwacje</li>
      <li>Modernizacje i remonty</li>
      <li>Serwis 24/7</li>
    </ul>
  </div>

  <div class="service">
    <h3>Wsparcie prawne</h3>
    <ul>
      <li>Obsługa prawna</li>
      <li>Audyty zgodności</li>
      <li>Negocjacje umów</li>
      <li>Doradztwo podatkowe</li>
    </ul>
  </div>
</div>

<h2>Korzyści współpracy</h2>
<ul>
  <li><strong>Efektywność</strong> - optymalizacja kosztów i procesów</li>
  <li><strong>Profesjonalizm</strong> - dedykowany zespół ekspertów</li>
  <li><strong>Bezpieczeństwo</strong> - pełne ubezpieczenie OC</li>
  <li><strong>Transparentność</strong> - regularne raporty i analizy</li>
  <li><strong>Rozwój</strong> - stały wzrost wartości portfela</li>
</ul>

<div class="cta-section">
  <h2>Skontaktuj się z nami</h2>
  <p>Umów bezpłatną konsultację i poznaj możliwości optymalizacji w Twojej firmie</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>',
  'Profesjonalne zarządzanie portfelem nieruchomości dla firm. Optymalizacja kosztów, kompleksowa obsługa techniczna i administracyjna, wsparcie prawne.',
  'Zarządzanie portfelem nieruchomości | Usługi dla firm',
  'Kompleksowe zarządzanie portfelem nieruchomości dla firm. Optymalizacja kosztów, profesjonalne wsparcie, dedykowany zespół. Sprawdź!',
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
  c.slug = 'oferta' AND
  p.slug IN (
    'oferta-wspolnoty-mieszkaniowe',
    'oferta-dla-osob-prywatnych',
    'oferta-dla-komercji',
    'oferta-dla-biznesu'
  );

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p
CROSS JOIN tags t
WHERE 
  t.slug IN ('oferta', 'zarzadzanie') AND
  p.slug IN (
    'oferta-wspolnoty-mieszkaniowe',
    'oferta-dla-osob-prywatnych',
    'oferta-dla-komercji',
    'oferta-dla-biznesu'
  );
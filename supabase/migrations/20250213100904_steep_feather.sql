/*
  # SEO optimization for service pages

  1. New Tables
    - `service_pages` - Stores SEO-optimized content for service pages
    - `service_sections` - Stores structured content sections
    - `service_meta` - Stores meta information for service pages

  2. Content
    - Optimized content for each service page
    - Structured headings and sections
    - SEO metadata
*/

-- Create service_pages table
CREATE TABLE service_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  keywords text[] NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE service_pages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to view service pages" ON service_pages
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage service pages" ON service_pages
  FOR ALL
  TO authenticated
  USING (true);

-- Insert optimized content for service pages
INSERT INTO service_pages (slug, title, meta_title, meta_description, keywords, content) VALUES
-- Zarządzanie nieruchomościami
('zarzadzanie-nieruchomosciami', 
'Profesjonalne zarządzanie nieruchomościami w Warszawie', 
'Zarządzanie Nieruchomościami Warszawa | Profesjonalny Zarządca | Stolica',
'Kompleksowe zarządzanie nieruchomościami w Warszawie. 15 lat doświadczenia, redukcja kosztów do 20%. Certyfikowani zarządcy, wsparcie 24/7. Sprawdź naszą ofertę ➤',
ARRAY['zarządzanie nieruchomościami warszawa', 'zarządca nieruchomości', 'administracja nieruchomości', 'zarządzanie wspólnotą mieszkaniową'],
'<h1>Profesjonalne zarządzanie nieruchomościami w Warszawie</h1>

<p>Oferujemy kompleksowe usługi zarządzania nieruchomościami w Warszawie, łącząc 15-letnie doświadczenie z innowacyjnym podejściem. Nasz zespół certyfikowanych zarządców zapewnia najwyższą jakość obsługi i realne oszczędności dla każdej nieruchomości.</p>

<h2>Kompleksowa obsługa nieruchomości</h2>
<p>Zapewniamy pełen zakres usług zarządzania, obejmujący:</p>
<ul>
  <li>Administrację techniczną i finansową</li>
  <li>Obsługę prawną i księgową</li>
  <li>Optymalizację kosztów eksploatacyjnych</li>
  <li>Całodobowe wsparcie techniczne</li>
  <li>Nadzór nad pracami konserwacyjnymi</li>
</ul>

<h2>Dlaczego warto wybrać nasze usługi?</h2>
<ul>
  <li>15 lat doświadczenia w branży</li>
  <li>Certyfikowani zarządcy nieruchomości</li>
  <li>Ubezpieczenie OC na 5 000 000 zł</li>
  <li>Redukcja kosztów o 15-20% w pierwszym roku</li>
  <li>Wsparcie techniczne 24/7</li>
</ul>

<h2>Zakres usług zarządzania</h2>
<h3>Obsługa administracyjna</h3>
<p>Zapewniamy kompleksową obsługę administracyjną, w tym:</p>
<ul>
  <li>Prowadzenie dokumentacji</li>
  <li>Obsługę korespondencji</li>
  <li>Reprezentację przed urzędami</li>
  <li>Organizację zebrań</li>
</ul>

<h3>Zarządzanie techniczne</h3>
<p>Gwarantujemy profesjonalną obsługę techniczną:</p>
<ul>
  <li>Regularne przeglądy i konserwacje</li>
  <li>Szybką reakcję na awarie</li>
  <li>Nadzór nad remontami</li>
  <li>Modernizacje i ulepszenia</li>
</ul>

<h3>Optymalizacja kosztów</h3>
<p>Wdrażamy skuteczne rozwiązania oszczędnościowe:</p>
<ul>
  <li>Audyty i analizy kosztów</li>
  <li>Negocjacje z dostawcami</li>
  <li>Programy efektywności energetycznej</li>
  <li>Optymalizację umów i usług</li>
</ul>

<h2>Profesjonalne wsparcie 24/7</h2>
<p>Zapewniamy całodobowe wsparcie i szybką reakcję na zgłoszenia:</p>
<ul>
  <li>Gwarantowany czas reakcji do 2 godzin</li>
  <li>Dedykowany opiekun nieruchomości</li>
  <li>Zespół doświadczonych specjalistów</li>
  <li>Sprawdzona sieć podwykonawców</li>
</ul>

<h2>Nowoczesne rozwiązania</h2>
<p>Wykorzystujemy zaawansowane technologie w zarządzaniu:</p>
<ul>
  <li>System zgłoszeń online</li>
  <li>Portal dla mieszkańców</li>
  <li>Elektroniczny obieg dokumentów</li>
  <li>Aplikacja mobilna</li>
</ul>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy, uwzględniającą specyfikę Twojej nieruchomości.</p>'),

-- Obsługa wspólnot mieszkaniowych
('obsluga-wspolnot-mieszkaniowych',
'Profesjonalna obsługa wspólnot mieszkaniowych w Warszawie',
'Obsługa Wspólnot Mieszkaniowych Warszawa | Kompleksowe Zarządzanie | Stolica',
'Kompleksowa obsługa wspólnot mieszkaniowych w Warszawie. Redukcja kosztów do 20%, wsparcie prawne i techniczne 24/7. Certyfikowani zarządcy. Sprawdź naszą ofertę ➤',
ARRAY['obsługa wspólnot mieszkaniowych', 'zarządzanie wspólnotą', 'administrator wspólnoty', 'wspólnota mieszkaniowa warszawa'],
'<h1>Profesjonalna obsługa wspólnot mieszkaniowych w Warszawie</h1>

<p>Oferujemy kompleksową obsługę wspólnot mieszkaniowych w Warszawie, zapewniając profesjonalne zarządzanie, optymalizację kosztów i pełne wsparcie prawno-techniczne. Nasz zespół ekspertów gwarantuje najwyższą jakość usług i realne oszczędności.</p>

<h2>Kompleksowa obsługa wspólnot</h2>
<p>Zapewniamy pełen zakres usług dla wspólnot mieszkaniowych:</p>
<ul>
  <li>Administrację i zarządzanie</li>
  <li>Obsługę prawną i księgową</li>
  <li>Wsparcie techniczne 24/7</li>
  <li>Organizację zebrań wspólnoty</li>
  <li>Reprezentację przed urzędami</li>
</ul>

<h2>Korzyści współpracy</h2>
<ul>
  <li>Redukcja kosztów o 15-20% w pierwszym roku</li>
  <li>Certyfikowani zarządcy nieruchomości</li>
  <li>Ubezpieczenie OC na 5 000 000 zł</li>
  <li>Gwarancja czasu reakcji do 2 godzin</li>
  <li>Dedykowany opiekun wspólnoty</li>
</ul>

<h2>Zakres usług dla wspólnot</h2>
<h3>Obsługa administracyjna</h3>
<p>Zapewniamy profesjonalną obsługę administracyjną:</p>
<ul>
  <li>Prowadzenie dokumentacji</li>
  <li>Organizację zebrań</li>
  <li>Przygotowywanie uchwał</li>
  <li>Obsługę korespondencji</li>
</ul>

<h3>Zarządzanie finansami</h3>
<p>Gwarantujemy skuteczne zarządzanie finansami:</p>
<ul>
  <li>Prowadzenie księgowości</li>
  <li>Rozliczanie mediów</li>
  <li>Windykację należności</li>
  <li>Optymalizację kosztów</li>
</ul>

<h3>Obsługa techniczna</h3>
<p>Zapewniamy kompleksową obsługę techniczną:</p>
<ul>
  <li>Przeglądy i konserwacje</li>
  <li>Usuwanie awarii 24/7</li>
  <li>Nadzór nad remontami</li>
  <li>Modernizacje i ulepszenia</li>
</ul>

<h2>Nowoczesne rozwiązania</h2>
<p>Wykorzystujemy zaawansowane technologie:</p>
<ul>
  <li>Portal dla mieszkańców</li>
  <li>System zgłoszeń online</li>
  <li>Elektroniczny obieg dokumentów</li>
  <li>Aplikacja mobilna</li>
</ul>

<h2>Wsparcie prawne</h2>
<p>Zapewniamy kompleksową obsługę prawną:</p>
<ul>
  <li>Przygotowywanie uchwał</li>
  <li>Opiniowanie umów</li>
  <li>Reprezentację przed sądami</li>
  <li>Doradztwo prawne</li>
</ul>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy dostosowaną do potrzeb Twojej wspólnoty mieszkaniowej.</p>'),

-- Administrowanie budynkami
('administrowanie-budynkami',
'Profesjonalne administrowanie budynkami w Warszawie',
'Administrowanie Budynkami Warszawa | Kompleksowa Obsługa | Stolica',
'Kompleksowe administrowanie budynkami w Warszawie. Profesjonalna obsługa techniczna i administracyjna, wsparcie 24/7. Certyfikowani administratorzy. Sprawdź ➤',
ARRAY['administrowanie budynkami', 'administrator budynku', 'obsługa techniczna budynków', 'administracja nieruchomości warszawa'],
'<h1>Profesjonalne administrowanie budynkami w Warszawie</h1>

<p>Oferujemy kompleksowe usługi administrowania budynkami w Warszawie, zapewniając profesjonalną obsługę techniczną i administracyjną. Nasz zespół doświadczonych administratorów gwarantuje sprawne funkcjonowanie każdego obiektu.</p>

<h2>Kompleksowa obsługa budynków</h2>
<p>Zapewniamy pełen zakres usług administracyjnych:</p>
<ul>
  <li>Obsługę techniczną i konserwację</li>
  <li>Administrację i zarządzanie</li>
  <li>Wsparcie techniczne 24/7</li>
  <li>Optymalizację kosztów</li>
  <li>Nadzór nad pracami</li>
</ul>

<h2>Korzyści współpracy</h2>
<ul>
  <li>15 lat doświadczenia w branży</li>
  <li>Certyfikowani administratorzy</li>
  <li>Ubezpieczenie OC na 5 000 000 zł</li>
  <li>Gwarancja czasu reakcji do 2 godzin</li>
  <li>Dedykowany opiekun obiektu</li>
</ul>

<h2>Zakres usług</h2>
<h3>Obsługa techniczna</h3>
<p>Zapewniamy kompleksową obsługę techniczną:</p>
<ul>
  <li>Regularne przeglądy</li>
  <li>Konserwację instalacji</li>
  <li>Usuwanie awarii 24/7</li>
  <li>Nadzór nad remontami</li>
</ul>

<h3>Administracja</h3>
<p>Gwarantujemy profesjonalną administrację:</p>
<ul>
  <li>Prowadzenie dokumentacji</li>
  <li>Obsługę najemców</li>
  <li>Rozliczanie mediów</li>
  <li>Optymalizację kosztów</li>
</ul>

<h3>Utrzymanie czystości</h3>
<p>Dbamy o czystość i porządek:</p>
<ul>
  <li>Sprzątanie części wspólnych</li>
  <li>Utrzymanie terenów zewnętrznych</li>
  <li>Odśnieżanie i pielęgnację zieleni</li>
  <li>Wywóz odpadów</li>
</ul>

<h2>Nowoczesne rozwiązania</h2>
<p>Wykorzystujemy zaawansowane technologie:</p>
<ul>
  <li>System zgłoszeń online</li>
  <li>Monitoring zużycia mediów</li>
  <li>Elektroniczny obieg dokumentów</li>
  <li>Aplikacja dla użytkowników</li>
</ul>

<h2>Bezpieczeństwo</h2>
<p>Zapewniamy kompleksowe bezpieczeństwo:</p>
<ul>
  <li>Monitoring obiektu</li>
  <li>Kontrolę dostępu</li>
  <li>Ochronę fizyczną</li>
  <li>Systemy przeciwpożarowe</li>
</ul>

<h2>Skontaktuj się z nami</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy dostosowaną do specyfiki Twojego budynku.</p>'),

[continued in next message due
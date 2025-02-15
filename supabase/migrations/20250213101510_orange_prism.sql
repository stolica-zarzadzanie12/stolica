/*
  # Create service pages table and add initial content

  1. Changes
    - Create service_pages table
    - Add RLS policies
    - Add initial content for property management page

  2. Security
    - Enable RLS
    - Public read access
    - Authenticated users can manage content
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

-- Insert initial content
INSERT INTO service_pages (
  slug,
  title,
  meta_title,
  meta_description,
  keywords,
  content
) VALUES (
  'zarzadzanie-nieruchomosciami',
  'Profesjonalne zarządzanie nieruchomościami w Warszawie',
  'Zarządzanie Nieruchomościami Warszawa | Profesjonalny Zarządca | Stolica',
  'Profesjonalne zarządzanie nieruchomościami w Warszawie. 15 lat doświadczenia, redukcja kosztów do 20%. Certyfikowani zarządcy, wsparcie 24/7. Sprawdź naszą ofertę ➤',
  ARRAY[
    'zarządzanie nieruchomościami warszawa',
    'zarządca nieruchomości warszawa',
    'administracja nieruchomości',
    'zarządzanie wspólnotą mieszkaniową',
    'firma zarządzająca nieruchomościami',
    'profesjonalny zarządca nieruchomości'
  ],
  '<h1>Profesjonalne zarządzanie nieruchomościami w Warszawie</h1>

<p>Jako doświadczony zarządca nieruchomości w Warszawie, oferujemy kompleksowe usługi zarządzania i administracji, łącząc 15-letnie doświadczenie z innowacyjnym podejściem. Nasz zespół certyfikowanych specjalistów zapewnia najwyższą jakość obsługi i realne oszczędności dla każdej nieruchomości.</p>

<h2>Kompleksowe usługi zarządzania nieruchomościami</h2>
<p>Zapewniamy pełen zakres profesjonalnych usług zarządzania:</p>
<ul>
  <li>Kompleksowa administracja techniczna i finansowa</li>
  <li>Profesjonalna obsługa prawna i księgowa</li>
  <li>Optymalizacja kosztów eksploatacyjnych</li>
  <li>Całodobowe wsparcie techniczne 24/7</li>
  <li>Nadzór nad pracami konserwacyjnymi i remontami</li>
</ul>

<h2>Dlaczego warto wybrać profesjonalnego zarządcę?</h2>
<ul>
  <li>15 lat doświadczenia w zarządzaniu nieruchomościami</li>
  <li>Certyfikowani zarządcy z pełnymi uprawnieniami</li>
  <li>Ubezpieczenie OC na kwotę 5 000 000 zł</li>
  <li>Redukcja kosztów zarządzania o 15-20% w pierwszym roku</li>
  <li>Gwarantowany czas reakcji do 2 godzin</li>
  <li>Dedykowany opiekun dla każdej nieruchomości</li>
</ul>

<h2>Zakres usług zarządzania nieruchomościami</h2>

<h3>Profesjonalna obsługa administracyjna</h3>
<p>Zapewniamy kompleksową obsługę administracyjną:</p>
<ul>
  <li>Prowadzenie pełnej dokumentacji nieruchomości</li>
  <li>Profesjonalna obsługa korespondencji</li>
  <li>Reprezentacja przed urzędami i instytucjami</li>
  <li>Organizacja zebrań i spotkań</li>
  <li>Koordynacja prac i usług</li>
</ul>

<h3>Zarządzanie techniczne nieruchomości</h3>
<p>Gwarantujemy profesjonalną obsługę techniczną:</p>
<ul>
  <li>Regularne przeglądy i konserwacje instalacji</li>
  <li>Natychmiastowa reakcja na awarie (do 2h)</li>
  <li>Profesjonalny nadzór nad remontami</li>
  <li>Modernizacje i ulepszenia techniczne</li>
  <li>Okresowe kontrole stanu technicznego</li>
</ul>

<h3>Optymalizacja kosztów zarządzania</h3>
<p>Wdrażamy skuteczne rozwiązania oszczędnościowe:</p>
<ul>
  <li>Szczegółowe audyty i analizy kosztów</li>
  <li>Profesjonalne negocjacje z dostawcami</li>
  <li>Programy efektywności energetycznej</li>
  <li>Optymalizacja umów i usług</li>
  <li>Monitoring i kontrola wydatków</li>
</ul>

<h2>Nowoczesne rozwiązania w zarządzaniu</h2>
<p>Wykorzystujemy zaawansowane technologie:</p>
<ul>
  <li>Elektroniczny system zgłoszeń online</li>
  <li>Dedykowany portal dla mieszkańców</li>
  <li>Cyfrowy obieg dokumentów</li>
  <li>Aplikacja mobilna dla użytkowników</li>
  <li>Monitoring zużycia mediów online</li>
</ul>

<h2>Profesjonalne wsparcie techniczne 24/7</h2>
<p>Zapewniamy całodobową obsługę i szybką reakcję:</p>
<ul>
  <li>Gwarantowany czas reakcji do 2 godzin</li>
  <li>Dedykowany opiekun nieruchomości</li>
  <li>Doświadczony zespół techniczny</li>
  <li>Sprawdzona sieć podwykonawców</li>
  <li>Koordynacja prac serwisowych</li>
</ul>

<h2>Skontaktuj się z profesjonalnym zarządcą</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy, uwzględniającą specyfikę Twojej nieruchomości. Gwarantujemy:</p>
<ul>
  <li>Bezpłatną wycenę usług</li>
  <li>Profesjonalną analizę potrzeb</li>
  <li>Konkretne propozycje optymalizacji</li>
  <li>Przejrzystą ofertę współpracy</li>
</ul>

<div class="cta-section">
  <p class="cta-text">Skontaktuj się z nami i dowiedz się, jak możemy pomóc w profesjonalnym zarządzaniu Twoją nieruchomością</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>'
);

-- Add comment
COMMENT ON TABLE service_pages IS 'Service pages content with SEO optimization';
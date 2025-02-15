/*
  # Add homepage support
  
  1. Changes
    - Add homepage content support to service_pages table
    - Insert initial homepage content
    - Update policies to allow homepage management
  
  2. Security
    - Maintain existing RLS policies
    - Ensure proper access control
*/

-- Insert homepage content
INSERT INTO service_pages (
  slug,
  title,
  meta_title,
  meta_description,
  keywords,
  content
) VALUES (
  'home',
  'Strona główna',
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
  <li>Nadzór nad pracami konserwacyjnymi</li>
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

<h2>Skontaktuj się z profesjonalnym zarządcą</h2>
<p>Zapraszamy do kontaktu i poznania szczegółów naszej oferty. Przygotujemy indywidualną propozycję współpracy, uwzględniającą specyfikę Twojej nieruchomości.</p>

<div class="cta-section">
  <p class="cta-text">Skontaktuj się z nami i dowiedz się, jak możemy pomóc w profesjonalnym zarządzaniu Twoją nieruchomością</p>
  <a href="/contact" class="cta-button">Zamów bezpłatną wycenę</a>
</div>'
)
ON CONFLICT (slug) 
DO UPDATE SET 
  title = EXCLUDED.title,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  content = EXCLUDED.content,
  updated_at = now();

-- Add comment
COMMENT ON TABLE service_pages IS 'Service pages content including homepage';
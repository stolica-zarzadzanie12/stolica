-- Add remaining service pages
INSERT INTO service_pages (slug, title, meta_title, meta_description, keywords, content)
VALUES
-- Obsługa wspólnot mieszkaniowych
('obsluga-wspolnot-mieszkaniowych',
'Profesjonalna obsługa wspólnot mieszkaniowych w Warszawie',
'Obsługa Wspólnot Mieszkaniowych Warszawa | Kompleksowe Zarządzanie',
'Kompleksowa obsługa wspólnot mieszkaniowych w Warszawie. Redukcja kosztów do 20%, wsparcie prawne i techniczne 24/7. Sprawdź naszą ofertę ➤',
ARRAY['obsługa wspólnot mieszkaniowych', 'zarządzanie wspólnotą', 'administrator wspólnoty', 'wspólnota mieszkaniowa warszawa'],
'[Tutaj treść strony]'),

-- Administrowanie budynkami
('administrowanie-budynkami',
'Profesjonalne administrowanie budynkami w Warszawie',
'Administrowanie Budynkami Warszawa | Kompleksowa Obsługa',
'Kompleksowe administrowanie budynkami w Warszawie. Profesjonalna obsługa techniczna i administracyjna, wsparcie 24/7. Sprawdź ➤',
ARRAY['administrowanie budynkami', 'administrator budynku', 'obsługa techniczna budynków', 'administracja nieruchomości warszawa'],
'[Tutaj treść strony]'),

-- Zarządzanie najmem
('zarzadzanie-najmem',
'Profesjonalne zarządzanie najmem w Warszawie',
'Zarządzanie Najmem Warszawa | Kompleksowa Obsługa',
'Kompleksowe zarządzanie najmem w Warszawie. Gwarantowany przychód, profesjonalna obsługa najemców, wsparcie 24/7. Sprawdź ➤',
ARRAY['zarządzanie najmem', 'obsługa najmu', 'wynajem mieszkań', 'zarządzanie wynajmem warszawa'],
'[Tutaj treść strony]'),

-- Doradztwo i optymalizacje
('doradztwo-i-optymalizacje',
'Doradztwo i optymalizacja kosztów zarządzania nieruchomościami',
'Doradztwo i Optymalizacja Kosztów | Zarządzanie Nieruchomościami',
'Profesjonalne doradztwo i optymalizacja kosztów zarządzania nieruchomościami. Redukcja wydatków do 20%. Sprawdź naszą ofertę ➤',
ARRAY['doradztwo nieruchomości', 'optymalizacja kosztów', 'audyt nieruchomości', 'konsulting nieruchomości'],
'[Tutaj treść strony]'),

-- Przeglądy budowlane
('przeglady-budowlane',
'Profesjonalne przeglądy budowlane w Warszawie',
'Przeglądy Budowlane Warszawa | Kompleksowe Kontrole',
'Profesjonalne przeglądy budowlane w Warszawie. Certyfikowani inspektorzy, pełna dokumentacja techniczna. Sprawdź naszą ofertę ➤',
ARRAY['przeglądy budowlane', 'kontrola budynku', 'inspekcja budowlana', 'przegląd techniczny budynku'],
'[Tutaj treść strony]'),

-- Przeglądy pięcioletnie
('przeglady-piecioletnie',
'Przeglądy pięcioletnie budynków w Warszawie',
'Przeglądy Pięcioletnie Warszawa | Kompleksowe Kontrole',
'Profesjonalne przeglądy pięcioletnie budynków w Warszawie. Certyfikowani inspektorzy, pełna dokumentacja. Sprawdź naszą ofertę ➤',
ARRAY['przegląd pięcioletni', 'kontrola pięcioletnia', 'przegląd budynku', 'kontrola techniczna'],
'[Tutaj treść strony]')

ON CONFLICT (slug) 
DO UPDATE SET 
  title = EXCLUDED.title,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  updated_at = now();
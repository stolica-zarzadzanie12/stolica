import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const savedSettings = JSON.parse(consent);
      setSettings(savedSettings);
    }
  }, []);

  const handleAcceptAll = () => {
    const newSettings = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveSettings(newSettings);
  };

  const handleAcceptSelected = () => {
    saveSettings(settings);
  };

  const handleRejectAll = () => {
    const newSettings = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveSettings(newSettings);
  };

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    setIsVisible(false);

    // Włącz lub wyłącz Facebook Pixel w zależności od zgody na marketing
    if (newSettings.marketing) {
      // Włącz Facebook Pixel
      window.fbq?.('consent', 'grant');
    } else {
      // Wyłącz Facebook Pixel
      window.fbq?.('consent', 'revoke');
      // Usuń ciasteczka Facebook
      document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    
    // Apply cookie settings
    if (!newSettings.analytics) {
      // Disable analytics cookies
      document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    
    if (!newSettings.marketing) {
      // Disable marketing cookies
      document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  };

  const toggleSettings = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Cookie className="h-6 w-6 text-[#DAA520]" />
            <p className="text-sm text-gray-600">
              Ta strona używa niezbędnych plików cookies do prawidłowego działania. 
              {!showDetails && (
                <button
                  onClick={toggleSettings}
                  className="text-[#DAA520] hover:underline ml-1"
                >
                  Więcej informacji
                </button>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Odrzuć
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-[#B8860B] text-white rounded hover:bg-[#D4AF37] transition-colors duration-300"
            >
              Akceptuj
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="relative mt-4 border-t pt-4">
            <button
              onClick={toggleSettings}
              className="absolute right-0 top-4 p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-lg font-semibold mb-4">Szczegóły cookies</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5 mt-1">
                  <input
                    type="checkbox"
                    checked={settings.necessary}
                    disabled
                    className="rounded border-gray-300 text-[#DAA520] focus:ring-[#DAA520]"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Niezbędne</label>
                  <p className="text-sm text-gray-500">
                    Te pliki cookies są konieczne do działania strony internetowej i nie mogą być wyłączone.
                    Zazwyczaj są one ustawiane tylko w odpowiedzi na działania podejmowane przez Ciebie.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5 mt-1">
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({...settings, analytics: e.target.checked})}
                    className="rounded border-gray-300 text-[#DAA520] focus:ring-[#DAA520]"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Analityczne</label>
                  <p className="text-sm text-gray-500">
                    Te pliki cookies pozwalają nam mierzyć ruch na stronie i analizować w jaki sposób 
                    użytkownicy korzystają z naszej witryny, co pomaga nam ją ulepszać.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5 mt-1">
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={(e) => setSettings({...settings, marketing: e.target.checked})}
                    className="rounded border-gray-300 text-[#DAA520] focus:ring-[#DAA520]"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Marketingowe</label>
                  <p className="text-sm text-gray-500">
                    Te pliki cookies, w tym Facebook Pixel, są wykorzystywane do wyświetlania 
                    spersonalizowanych reklam na podstawie Twoich zainteresowań i zachowań w sieci.
                    Pozwalają nam również mierzyć skuteczność kampanii reklamowych.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Odrzuć wszystkie
              </button>
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 bg-[#B8860B] text-white rounded hover:bg-[#D4AF37] transition-colors duration-300"
              >
                Zapisz wybrane
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
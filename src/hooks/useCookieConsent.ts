import { useState, useEffect } from 'react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const useCookieConsent = () => {
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setCookieSettings(JSON.parse(savedConsent));
    }
  }, []);

  const isConsentGiven = (type: keyof CookieSettings): boolean => {
    if (type === 'necessary') return true;
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) return false;
    const settings = JSON.parse(savedConsent);
    return settings[type] || false;
  };

  return {
    cookieSettings,
    isConsentGiven
  };
};
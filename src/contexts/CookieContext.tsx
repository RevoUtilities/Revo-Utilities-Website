import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const STORAGE_KEY = 'revo-cookie-preferences';
const CONSENT_DATE_KEY = 'revo-cookie-consent-date';

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
};

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const consentDate = localStorage.getItem(CONSENT_DATE_KEY);
    
    if (stored && consentDate) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences({ ...parsed, essential: true }); // Ensure essential is always true
        setHasConsented(true);
      } catch (error) {
        console.error('Failed to parse cookie preferences:', error);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const prefsToSave = { ...prefs, essential: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefsToSave));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
    setPreferences(prefsToSave);
    setHasConsented(true);
    
    // Dispatch custom event for script loaders
    window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { detail: prefsToSave }));
  };

  const updatePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPreferences = { ...preferences, ...prefs, essential: true };
    savePreferences(newPreferences);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CONSENT_DATE_KEY);
    setPreferences(defaultPreferences);
    setHasConsented(false);
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        hasConsented,
        updatePreferences,
        acceptAll,
        rejectAll,
        resetConsent,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};

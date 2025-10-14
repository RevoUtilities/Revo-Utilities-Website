import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieContext';
import Button from './ui/Button';
import Switch from './ui/Switch';

const CookieConsent = () => {
  const { hasConsented, acceptAll, rejectAll, updatePreferences, preferences } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [localPreferences, setLocalPreferences] = useState(preferences);
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let host = document.getElementById('cookie-consent-root') as HTMLElement | null;

    if (!host) {
      host = document.createElement('div');
      host.id = 'cookie-consent-root';
      host.style.position = 'fixed';
      host.style.inset = '0';
      host.style.pointerEvents = 'none';
      host.style.zIndex = '2147483647';
      host.style.margin = '0';
      host.style.padding = '0';
      host.style.width = '100vw';
      host.style.height = '100vh';
      host.style.background = 'transparent';
      document.body.appendChild(host);
    }

    let styleEl = document.getElementById('cookie-consent-root-styles') as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'cookie-consent-root-styles';
      styleEl.textContent = `
        #cookie-consent-root, #cookie-consent-root * {
          transform: none !important;
          perspective: none !important;
          backface-visibility: visible !important;
          filter: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        #cookie-consent-root {
          position: fixed !important;
          inset: 0 !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

    setPortalHost(host);

    return () => {
      // Keep host and styles for subsequent mounts
    };
  }, []);

  useEffect(() => {
    // Show banner after a short delay if user hasn't consented
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasConsented]);

  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    updatePreferences(localPreferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isVisible]);

  if (!isVisible || hasConsented) {
    return null;
  }

  if (!portalHost) {
    return null;
  }

  const banner = (
    <div
      id="cookie-consent-banner"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        pointerEvents: 'auto',
        maxWidth: '360px',
        transform: 'none'
      }}
      className="animate-in slide-in-from-left-5 fade-in duration-300"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Cookie className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">We use cookies</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          We use essential cookies to run our site. Optional analytics and marketing cookies help us improve your experience. See our{' '}
          <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline font-medium">cookie policy</a> for more detail.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Essential only
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
            >
              Accept all
            </button>
          </div>
          <button
            onClick={handleManagePreferences}
            className="w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-1"
          >
            <Settings size={14} />
            Manage preferences
          </button>
        </div>
      </div>
    </div>
  );

  const modal = (
    <div
      id="cookie-consent-modal"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        background: 'rgba(0,0,0,0.5)',
        padding: '1rem'
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Cookie className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Manage cookie preferences</h2>
          </div>
          <button
            onClick={() => setShowPreferences(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <p className="text-gray-600">
            Tailor which optional cookies we may use. Essential cookies remain enabled to keep the site secure and functional.
          </p>

          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential cookies</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Required for core functionality such as authentication, security, and remembering your consent choices.
                </p>
                <p className="text-xs text-gray-500">Always active</p>
              </div>
              <div className="ml-4">
                <Switch checked={true} disabled={true} className="opacity-50 cursor-not-allowed" />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 hover:border-primary-300 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics cookies</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Help us understand how visitors interact with the site so we can improve performance and content.
                </p>
                <p className="text-xs text-gray-500">Examples: Google Analytics, performance tracking</p>
              </div>
              <div className="ml-4">
                <Switch
                  checked={localPreferences.analytics}
                  onChange={(e) =>
                    setLocalPreferences({ ...localPreferences, analytics: e.target.checked })
                  }
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 hover:border-primary-300 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Allow us to deliver personalised advertising and measure campaign effectiveness.
                </p>
                <p className="text-xs text-gray-500">Examples: Facebook Pixel, remarketing networks</p>
              </div>
              <div className="ml-4">
                <Switch
                  checked={localPreferences.marketing}
                  onChange={(e) =>
                    setLocalPreferences({ ...localPreferences, marketing: e.target.checked })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
          <Button
            onClick={handleRejectAll}
            variant="secondary"
            size="md"
            fullWidth={true}
            className="sm:flex-1"
          >
            Reject optional cookies
          </Button>
          <Button
            onClick={handleSavePreferences}
            variant="primary"
            size="md"
            fullWidth={true}
            className="sm:flex-1"
          >
            Save preferences
          </Button>
          <Button
            onClick={handleAcceptAll}
            variant="primary"
            size="md"
            fullWidth={true}
            className="sm:flex-1"
          >
            Accept all cookies
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(showPreferences ? modal : banner, portalHost);
}
;

export default CookieConsent;

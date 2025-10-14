import { useState, useEffect } from 'react';
import { Cookie, Check, Shield, BarChart3, Megaphone } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieContext';
import Button from './ui/Button';
import Switch from './ui/Switch';
import SEOHead from './SEOHead';

const CookiePreferences = () => {
  const { preferences, updatePreferences, acceptAll, rejectAll } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState(preferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleSave = () => {
    updatePreferences(localPreferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptAll = () => {
    acceptAll();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRejectAll = () => {
    rejectAll();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        title="Cookie Preferences - Revo Utilities"
        description="Manage your cookie preferences and control how we use cookies on our website."
        url="https://www.revo-utilities.com/cookie-preferences"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          {saved && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex-shrink-0">
                <div className="p-2 bg-green-100 rounded-full">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-green-800 font-medium">
                Your cookie preferences have been saved successfully!
              </p>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-12 text-center">
              <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <Cookie className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Cookie Preferences</h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Control how we use cookies on our website. You can change your preferences at any time.
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-8">
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience and allow us to improve our services. 
                  Below, you can manage your cookie preferences for different categories.
                </p>
              </div>

              {/* Essential Cookies */}
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Essential Cookies</h2>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500">Always Active</span>
                        <Switch
                          checked={true}
                          disabled={true}
                          className="opacity-50 cursor-not-allowed"
                        />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility. You cannot opt-out of these cookies.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">What we use them for:</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Authentication and account access</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Site functionality and performance</li>
                        <li>• Remembering your cookie preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className={`border-2 rounded-xl p-6 transition-all ${
                localPreferences.analytics 
                  ? 'border-primary-300 bg-primary-50/30' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-lg ${
                      localPreferences.analytics 
                        ? 'bg-primary-100' 
                        : 'bg-gray-100'
                    }`}>
                      <BarChart3 className={`w-6 h-6 ${
                        localPreferences.analytics 
                          ? 'text-primary-600' 
                          : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Analytics Cookies</h2>
                      <Switch
                        checked={localPreferences.analytics}
                        onChange={(e) =>
                          setLocalPreferences({ ...localPreferences, analytics: e.target.checked })
                        }
                      />
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and 
                      reporting information anonymously. This helps us improve our website and services.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">What we use them for:</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Understanding website traffic and usage patterns</li>
                        <li>• Measuring page performance</li>
                        <li>• Identifying popular content and features</li>
                        <li>• Google Analytics tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className={`border-2 rounded-xl p-6 transition-all ${
                localPreferences.marketing 
                  ? 'border-primary-300 bg-primary-50/30' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-lg ${
                      localPreferences.marketing 
                        ? 'bg-primary-100' 
                        : 'bg-gray-100'
                    }`}>
                      <Megaphone className={`w-6 h-6 ${
                        localPreferences.marketing 
                          ? 'text-primary-600' 
                          : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Marketing Cookies</h2>
                      <Switch
                        checked={localPreferences.marketing}
                        onChange={(e) =>
                          setLocalPreferences({ ...localPreferences, marketing: e.target.checked })
                        }
                      />
                    </div>
                    <p className="text-gray-600 mb-3">
                      These cookies track your browsing habits to enable us to show advertising which is more likely 
                      to be of interest to you. They may also be used to limit the number of times you see an advertisement.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">What we use them for:</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Displaying relevant advertisements</li>
                        <li>• Measuring advertising campaign effectiveness</li>
                        <li>• Social media integration (Facebook Pixel)</li>
                        <li>• Retargeting and remarketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Need more information?</h3>
                <p className="text-gray-600 mb-3">
                  For more detailed information about how we collect, use, and protect your data, 
                  please read our full{' '}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline font-medium">
                    Privacy Policy
                  </a>.
                </p>
                <p className="text-sm text-gray-500">
                  If you have any questions or concerns about our use of cookies, please contact us at{' '}
                  <a 
                    href="mailto:reducemybills@revo-utilities.com" 
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    reducemybills@revo-utilities.com
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="bg-gray-50 border-t border-gray-200 px-8 py-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRejectAll}
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Accept All
                  </Button>
                </div>
                <Button
                  onClick={handleSave}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Save My Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePreferences;

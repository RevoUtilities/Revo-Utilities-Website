import { useEffect } from 'react';
import { useCookieConsent } from '../contexts/CookieContext';

interface ScriptConfig {
  id: string;
  src?: string;
  innerHTML?: string;
  async?: boolean;
  defer?: boolean;
  category: 'analytics' | 'marketing';
}

interface ConditionalScriptLoaderProps {
  scripts: ScriptConfig[];
}

/**
 * ConditionalScriptLoader - Loads scripts based on user cookie consent
 * 
 * Usage:
 * <ConditionalScriptLoader
 *   scripts={[
 *     {
 *       id: 'google-analytics',
 *       innerHTML: `(function(w,d,s,l,i){...})`,
 *       category: 'analytics'
 *     },
 *     {
 *       id: 'facebook-pixel',
 *       src: 'https://connect.facebook.net/en_US/fbevents.js',
 *       category: 'marketing'
 *     }
 *   ]}
 * />
 */
const ConditionalScriptLoader = ({ scripts }: ConditionalScriptLoaderProps) => {
  const { preferences, hasConsented } = useCookieConsent();

  useEffect(() => {
    if (!hasConsented) return;

    const loadedScripts: string[] = [];

    scripts.forEach((scriptConfig) => {
      const { id, src, innerHTML, async = true, defer = false, category } = scriptConfig;

      // Check if user has consented to this category
      const hasPermission = preferences[category];
      
      if (!hasPermission) {
        // Remove script if it was previously loaded but consent was revoked
        const existingScript = document.getElementById(id);
        if (existingScript) {
          existingScript.remove();
        }
        return;
      }

      // Check if script already exists
      const existingScript = document.getElementById(id);
      if (existingScript) {
        return;
      }

      // Create and inject the script
      const script = document.createElement('script');
      script.id = id;
      script.type = 'text/javascript';
      
      if (src) {
        script.src = src;
      }
      
      if (innerHTML) {
        script.innerHTML = innerHTML;
      }
      
      if (async) {
        script.async = true;
      }
      
      if (defer) {
        script.defer = true;
      }

      document.head.appendChild(script);
      loadedScripts.push(id);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      loadedScripts.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [preferences, hasConsented, scripts]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = () => {
      // Reload the page to apply new consent preferences
      // This ensures scripts are properly loaded/unloaded
      window.location.reload();
    };

    window.addEventListener('cookiePreferencesChanged', handleConsentChange);
    
    return () => {
      window.removeEventListener('cookiePreferencesChanged', handleConsentChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ConditionalScriptLoader;

/**
 * Example usage in App.tsx:
 * 
 * import ConditionalScriptLoader from './components/ConditionalScriptLoader';
 * 
 * // In your component:
 * <ConditionalScriptLoader
 *   scripts={[
 *     {
 *       id: 'google-analytics',
 *       innerHTML: `
 *         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 *         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 *         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 *         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 *         ga('create', 'UA-XXXXX-Y', 'auto');
 *         ga('send', 'pageview');
 *       `,
 *       category: 'analytics'
 *     },
 *     {
 *       id: 'facebook-pixel',
 *       innerHTML: `
 *         !function(f,b,e,v,n,t,s)
 *         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 *         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 *         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 *         n.queue=[];t=b.createElement(e);t.async=!0;
 *         t.src=v;s=b.getElementsByTagName(e)[0];
 *         s.parentNode.insertBefore(t,s)}(window, document,'script',
 *         'https://connect.facebook.net/en_US/fbevents.js');
 *         fbq('init', 'YOUR_PIXEL_ID');
 *         fbq('track', 'PageView');
 *       `,
 *       category: 'marketing'
 *     }
 *   ]}
 * />
 */

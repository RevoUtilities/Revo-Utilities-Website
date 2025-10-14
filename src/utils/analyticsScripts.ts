/**
 * Analytics and Marketing Scripts Configuration
 * 
 * This file contains the configuration for all third-party tracking scripts.
 * Uncomment and configure the scripts you want to use.
 * 
 * Import this in App.tsx and pass to ConditionalScriptLoader component.
 */

export const analyticsScripts = [
  // Google Analytics 4 (GA4)
  // Uncomment and replace G-XXXXXXXXXX with your Measurement ID
  /*
  {
    id: 'google-analytics-4',
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    `,
    category: 'analytics' as const
  },
  {
    id: 'ga4-script',
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
    async: true,
    category: 'analytics' as const
  },
  */

  // Google Tag Manager
  // Uncomment and replace GTM-XXXXXX with your GTM ID
  /*
  {
    id: 'google-tag-manager',
    innerHTML: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');
    `,
    category: 'analytics' as const
  },
  */

  // Hotjar - Heatmaps and User Recordings
  // Uncomment and replace YOUR_HJID with your Hotjar ID
  /*
  {
    id: 'hotjar',
    innerHTML: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HJID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
    category: 'analytics' as const
  },
  */

  // Microsoft Clarity
  // Uncomment and replace with your Clarity Project ID
  /*
  {
    id: 'microsoft-clarity',
    innerHTML: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
    `,
    category: 'analytics' as const
  },
  */
];

export const marketingScripts = [
  // Facebook Pixel
  // Uncomment and replace YOUR_PIXEL_ID with your Facebook Pixel ID
  /*
  {
    id: 'facebook-pixel',
    innerHTML: `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
      (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `,
    category: 'marketing' as const
  },
  */

  // LinkedIn Insight Tag
  // Uncomment and replace YOUR_PARTNER_ID with your LinkedIn Partner ID
  /*
  {
    id: 'linkedin-insight',
    innerHTML: `
      _linkedin_partner_id = "YOUR_PARTNER_ID";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `,
    category: 'marketing' as const
  },
  {
    id: 'linkedin-insight-script',
    src: 'https://snap.licdn.com/li.lms-analytics/insight.min.js',
    category: 'marketing' as const
  },
  */

  // Twitter (X) Pixel
  // Uncomment and replace YOUR_PIXEL_ID with your Twitter Pixel ID
  /*
  {
    id: 'twitter-pixel',
    innerHTML: `
      !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):
      s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
      u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],
      a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','YOUR_PIXEL_ID');
    `,
    category: 'marketing' as const
  },
  */

  // Google Ads Conversion Tracking
  // Uncomment and replace AW-XXXXXXXXX with your Google Ads Conversion ID
  /*
  {
    id: 'google-ads-conversion',
    src: 'https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX',
    async: true,
    category: 'marketing' as const
  },
  {
    id: 'google-ads-config',
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXX');
    `,
    category: 'marketing' as const
  },
  */
];

// Combine all scripts
export const allTrackingScripts = [...analyticsScripts, ...marketingScripts];

/**
 * Usage in App.tsx:
 * 
 * import ConditionalScriptLoader from './components/ConditionalScriptLoader';
 * import { allTrackingScripts } from './utils/analyticsScripts';
 * 
 * function App() {
 *   return (
 *     <CookieProvider>
 *       <ConditionalScriptLoader scripts={allTrackingScripts} />
 *       <CookieConsent />
 *       {/* Rest of your app *\/}
 *     </CookieProvider>
 *   );
 * }
 */

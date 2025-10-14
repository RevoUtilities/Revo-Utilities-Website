# Cookie Consent System - Implementation Guide

## Overview

A comprehensive, UK GDPR-compliant cookie consent system has been implemented for the Revo Utilities website. This system provides granular control over cookie categories and ensures no tracking scripts load until user consent is obtained.

## ✅ Features

- **UK GDPR Compliant** - Meets all UK legal requirements
- **Granular Control** - Users can choose specific cookie categories
- **Persistent Preferences** - Saved in localStorage
- **Mobile Responsive** - Works perfectly on all devices
- **Accessible** - Keyboard navigation, screen reader friendly
- **Professional Design** - Matches your brand aesthetic
- **No External Dependencies** - Uses existing UI components
- **Performance** - No scripts load until consent is given

## 📁 Files Created

### Components
- `src/contexts/CookieContext.tsx` - Global state management for cookie preferences
- `src/components/CookieConsent.tsx` - Banner and modal for cookie consent
- `src/components/CookiePreferences.tsx` - Full-page cookie preferences manager
- `src/components/ConditionalScriptLoader.tsx` - Helper to conditionally load scripts
- `src/pages/CookiePreferencesPage.tsx` - Page wrapper for cookie preferences

### Modified Files
- `src/App.tsx` - Added CookieProvider and CookieConsent banner
- `src/components/Footer.tsx` - Added "Cookie Preferences" link
- `src/pages/Privacy.tsx` - Added reference to cookie consent system

## 🍪 Cookie Categories

### 1. Essential Cookies (Always Active)
- **Cannot be disabled**
- Used for: Authentication, security, site functionality
- Examples: Session tokens, CSRF protection

### 2. Analytics Cookies (Optional)
- **User can opt-in/opt-out**
- Used for: Google Analytics, performance tracking
- Examples: `_ga`, `_gid`, `_gat`

### 3. Marketing Cookies (Optional)
- **User can opt-in/opt-out**
- Used for: Facebook Pixel, advertising networks
- Examples: `_fbp`, `fr`

## 🚀 How to Add Analytics/Marketing Scripts

### Option 1: Using ConditionalScriptLoader (Recommended)

Add the ConditionalScriptLoader to your `App.tsx` or any page:

```tsx
import ConditionalScriptLoader from './components/ConditionalScriptLoader';

function App() {
  return (
    <CookieProvider>
      {/* Your app content */}
      
      <ConditionalScriptLoader
        scripts={[
          // Google Analytics
          {
            id: 'google-analytics',
            innerHTML: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXX-Y', 'auto');
              ga('send', 'pageview');
            `,
            category: 'analytics'
          },
          
          // Facebook Pixel
          {
            id: 'facebook-pixel',
            innerHTML: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
            category: 'marketing'
          }
        ]}
      />
      
      <CookieConsent />
    </CookieProvider>
  );
}
```

### Option 2: Using the Hook in Components

You can also check consent programmatically in any component:

```tsx
import { useCookieConsent } from '../contexts/CookieContext';

function MyComponent() {
  const { preferences, hasConsented } = useCookieConsent();
  
  useEffect(() => {
    if (hasConsented && preferences.analytics) {
      // Initialize Google Analytics
      window.gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, [hasConsented, preferences.analytics]);
  
  return <div>My Component</div>;
}
```

## 🎨 User Experience Flow

### First Visit
1. User lands on website
2. After 1 second, cookie banner appears at bottom of screen
3. User has three options:
   - **Accept All** - Enables all cookie categories
   - **Reject All** - Only essential cookies enabled
   - **Manage Preferences** - Opens detailed modal

### Managing Preferences
1. User clicks "Manage Preferences" button
2. Modal opens with three sections:
   - Essential (always on, cannot be toggled)
   - Analytics (toggle on/off)
   - Marketing (toggle on/off)
3. User can:
   - Toggle individual categories
   - Click "Reject All" (disables optional cookies)
   - Click "Accept All" (enables all cookies)
   - Click "Save Preferences" (saves current selections)

### Changing Preferences Later
1. User can visit `/cookie-preferences` page anytime
2. Or click "Cookie Preferences" link in footer
3. Same granular controls available
4. Green success message shows when preferences are saved

## 🔗 Routes

- `/cookie-preferences` - Full-page cookie preferences manager

## 📱 Responsive Design

- **Mobile**: Stacked buttons, full-width layout
- **Tablet**: Optimized spacing, readable text
- **Desktop**: Horizontal layout, side-by-side buttons

## ♿ Accessibility

- ✅ Keyboard navigation support
- ✅ ARIA labels and roles
- ✅ Screen reader friendly
- ✅ Focus indicators
- ✅ Proper heading hierarchy

## 🔒 Data Storage

Preferences are stored in **localStorage** (not cookies):
- Key: `revo-cookie-preferences`
- Value: JSON object with consent status
- Additional key: `revo-cookie-consent-date` - Timestamp of consent

Example stored data:
```json
{
  "essential": true,
  "analytics": true,
  "marketing": false
}
```

## 🧪 Testing Checklist

- [ ] Banner appears on first visit
- [ ] Banner doesn't appear on subsequent visits after consent
- [ ] "Accept All" enables all cookies
- [ ] "Reject All" disables optional cookies
- [ ] "Manage Preferences" opens modal
- [ ] Individual toggles work correctly
- [ ] Preferences persist after page reload
- [ ] Footer link navigates to preferences page
- [ ] Privacy policy link works
- [ ] Mobile responsive design works
- [ ] Keyboard navigation works
- [ ] Scripts only load when consent is given

## 🛠️ Customization

### Changing Cookie Categories

Edit `src/contexts/CookieContext.tsx`:

```tsx
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  // Add new category:
  personalization: boolean;
}
```

### Styling

The components use TailwindCSS and your existing design tokens:
- Primary color: `var(--primary-color)`
- Uses existing Button and Switch components
- Follows your brand aesthetic

### Text Content

All text content is in the component files and can be easily customized:
- Banner text in `CookieConsent.tsx`
- Detailed descriptions in `CookiePreferences.tsx`

## 🔄 Reset Consent (For Testing)

To reset consent and see the banner again:

```javascript
// In browser console
localStorage.removeItem('revo-cookie-preferences');
localStorage.removeItem('revo-cookie-consent-date');
location.reload();
```

Or use the context method:

```tsx
const { resetConsent } = useCookieConsent();
resetConsent();
```

## 📊 Analytics Integration Examples

### Google Analytics 4

```tsx
{
  id: 'google-analytics-4',
  innerHTML: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `,
  category: 'analytics'
},
{
  id: 'ga4-script',
  src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
  async: true,
  category: 'analytics'
}
```

### Facebook Pixel

```tsx
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
  category: 'marketing'
}
```

### Hotjar

```tsx
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
  category: 'analytics'
}
```

## 🚨 Important Notes

1. **Scripts won't load until consent is given** - Test with consent accepted
2. **Page reload on preference change** - ConditionalScriptLoader reloads page to properly load/unload scripts
3. **Essential cookies always active** - Cannot be disabled by design
4. **localStorage requirement** - Preferences stored in localStorage, won't work if disabled

## 📞 Support

If you need to modify the cookie consent system:
1. Check this README first
2. Review component comments in the code
3. Test thoroughly after changes
4. Ensure GDPR compliance is maintained

## ⚖️ Legal Compliance

This implementation follows UK GDPR requirements:
- ✅ Clear information about cookie usage
- ✅ Granular consent options
- ✅ Ability to withdraw consent
- ✅ No tracking without consent
- ✅ Easy access to manage preferences
- ✅ Privacy policy integration

**Note:** This is a technical implementation. Please consult with legal counsel to ensure full compliance with UK GDPR and ePrivacy regulations.

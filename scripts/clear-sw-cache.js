#!/usr/bin/env node

/**
 * Script to clear service worker cache
 * Run this when you're having issues with cached assets
 */

console.log('Clearing service worker cache...');

// This script can be run in the browser console to clear SW cache
const clearSWCache = async () => {
  if ('serviceWorker' in navigator) {
    try {
      // Unregister existing service worker
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.unregister();
        console.log('Service worker unregistered');
      }
      
      // Clear all caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('All caches cleared');
      
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
};

// If running in Node.js environment, provide instructions
if (typeof window === 'undefined') {
  console.log(`
To clear service worker cache:
1. Open your browser's developer tools
2. Go to the Console tab
3. Copy and paste this code:
${clearSWCache.toString()}
4. Press Enter to run it
5. The page will reload automatically
`);
} else {
  // If running in browser, execute immediately
  clearSWCache();
} 
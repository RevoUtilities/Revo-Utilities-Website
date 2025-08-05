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
      console.log('Starting cache cleanup...');
      
      // Unregister existing service worker
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.unregister();
        console.log('✅ Service worker unregistered');
      } else {
        console.log('ℹ️ No service worker found to unregister');
      }
      
      // Clear all caches
      const cacheNames = await caches.keys();
      console.log(`Found ${cacheNames.length} caches to clear:`, cacheNames);
      
      await Promise.all(
        cacheNames.map(async (cacheName) => {
          const deleted = await caches.delete(cacheName);
          console.log(`Cache "${cacheName}": ${deleted ? '✅ deleted' : '❌ failed to delete'}`);
          return deleted;
        })
      );
      
      console.log('✅ All caches cleared');
      
      // Clear browser cache for this site
      if ('caches' in window) {
        console.log('Clearing browser cache...');
        // This is a more aggressive approach
        await caches.keys().then(names => {
          names.forEach(name => caches.delete(name));
        });
      }
      
      console.log('🔄 Reloading page in 2 seconds...');
      setTimeout(() => {
        window.location.reload(true); // Force reload from server
      }, 2000);
      
    } catch (error) {
      console.error('❌ Error clearing cache:', error);
      console.log('🔄 Reloading page anyway...');
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    }
  } else {
    console.log('ℹ️ Service workers not supported in this browser');
    console.log('🔄 Reloading page...');
    window.location.reload(true);
  }
};

// If running in Node.js environment, provide instructions
if (typeof window === 'undefined') {
  console.log(`
To clear service worker cache and fix white page issues:

METHOD 1 - Browser Console:
1. Open your browser's developer tools (F12)
2. Go to the Console tab
3. Copy and paste this code:
${clearSWCache.toString()}
4. Press Enter to run it
5. The page will reload automatically

METHOD 2 - Manual Steps:
1. Open Developer Tools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Find "Service Workers" section
4. Click "Unregister" for any existing service workers
5. Go to "Storage" section
6. Click "Clear site data" or "Clear storage"
7. Reload the page

METHOD 3 - Hard Refresh:
1. Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Or hold Shift and click the reload button

This should resolve the white page issue caused by outdated cached assets.
`);
} else {
  // If running in browser, execute immediately
  clearSWCache();
} 
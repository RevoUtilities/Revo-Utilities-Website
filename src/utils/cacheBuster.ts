/**
 * Cache busting utilities to resolve asset loading issues
 */

export const clearServiceWorkerCache = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      // Unregister existing service worker
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.unregister();
        console.log('✅ Service worker unregistered');
      }
      
      // Clear all caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      
      console.log('✅ All caches cleared');
    } catch (error) {
      console.error('❌ Error clearing cache:', error);
    }
  }
};

export const forceReload = (): void => {
  // Force reload from server, bypassing cache
  window.location.reload();
};

export const checkForAssetErrors = (): boolean => {
  // Check if there are any failed asset requests in the console
  const consoleErrors = performance.getEntriesByType('resource')
    .filter((entry: any) => entry.initiatorType === 'script' || entry.initiatorType === 'link')
    .filter((entry: any) => entry.responseStatus >= 400);
  
  return consoleErrors.length > 0;
};

export const addCacheBustingHeaders = (): void => {
  // Add cache control meta tags to prevent caching issues
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Cache-Control';
  meta.content = 'no-cache, no-store, must-revalidate';
  document.head.appendChild(meta);
  
  const pragma = document.createElement('meta');
  pragma.httpEquiv = 'Pragma';
  pragma.content = 'no-cache';
  document.head.appendChild(pragma);
  
  const expires = document.createElement('meta');
  expires.httpEquiv = 'Expires';
  expires.content = '0';
  document.head.appendChild(expires);
}; 
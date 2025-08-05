import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './utils/performance' // Initialize performance monitoring
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Add Google Fonts link to document head
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=SF+Pro+Text:wght@400;500;600&display=swap';
document.head.appendChild(fontLink);

// Register service worker for better caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      // Check if there's already a service worker
      const existingRegistration = await navigator.serviceWorker.getRegistration();
      
      if (existingRegistration) {
        // Check if we need to update the service worker
        const shouldUpdate = existingRegistration.waiting || 
                           existingRegistration.installing ||
                           !existingRegistration.active;
        
        if (shouldUpdate) {
          // Force update by unregistering and re-registering
          await existingRegistration.unregister();
          console.log('SW unregistered for update');
          
          // Clear old caches
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
          console.log('Old caches cleared');
        }
      }
      
      // Register new service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        updateViaCache: 'none' // Always check for updates
      });
      
      console.log('SW registered: ', registration);
      
      // Listen for service worker updates
      registration.addEventListener('updatefound', () => {
        console.log('SW update found');
      });
      
      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('SW controller changed');
        // Reload the page to use the new service worker
        window.location.reload();
      });
      
    } catch (registrationError) {
      console.error('SW registration failed: ', registrationError);
      // Don't let service worker errors break the app
    }
  });
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)

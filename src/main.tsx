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
        // Update existing service worker
        await existingRegistration.update();
        console.log('SW updated: ', existingRegistration);
      } else {
        // Register new service worker
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      }
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

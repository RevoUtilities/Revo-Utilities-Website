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

// Service worker registration removed to simplify caching and fix related issues.
// Vercel's caching headers will now be the single source of truth.

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

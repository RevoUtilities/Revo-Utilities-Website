import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { disableHoverAnimations } from './utils/disableHoverAnimations'
import './index.css'

// Add Google Fonts link to document head
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=SF+Pro+Text:wght@400;500;600&display=swap';
document.head.appendChild(fontLink);

// Disable hover animations for improved performance and user preference
// This makes the site feel less busy and improves performance, especially in Safari
disableHoverAnimations(true); // Force disable hover animations as per user preference

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

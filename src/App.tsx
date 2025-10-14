import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { CookieProvider } from './contexts/CookieContext';
import { addCacheBustingHeaders, checkForAssetErrors } from './utils/cacheBuster';
import './index.css';
import './styles/navbarStyles.css';

// Import route components
import Home from './pages/Home';
import Services from './pages/Services';
import Comparison from './pages/Comparison';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import Team from './pages/Team';
import Partnerships from './pages/Partnerships';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookiePreferencesPage from './pages/CookiePreferencesPage';
import NotFound from './pages/NotFound';



function App() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Add cache busting headers
    addCacheBustingHeaders();

    // Title and meta are handled per-page via SEO utilities/components

    // Check for asset loading errors and log them
    setTimeout(() => {
      if (checkForAssetErrors()) {
        console.warn('Asset loading errors detected. Consider clearing browser cache.');
      }
    }, 2000);

    // Scroll to top on page navigation
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - viewportHeight;
      const threshold = viewportHeight * 0.5;

      if (docHeight <= viewportHeight) {
        setShowBackToTop(false);
        return;
      }

      setShowBackToTop(scrollTop > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      // Allow smooth scroll to finish before moving focus
      setTimeout(() => {
        mainEl.focus({ preventScroll: true });
      }, 300);
    }
  };

  return (
    <CookieProvider>
      <div className="relative">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[10000] bg-[var(--primary-color)] px-4 py-2 text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Skip to main content
        </a>
      </div>
      <div className="flex flex-col min-h-screen pt-0 mt-0">
        <Navbar />

        <main id="main-content" tabIndex={-1} className="flex-grow pt-0 mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/insights" element={<Blog />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/blog-admin" element={<BlogAdmin />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-preferences" element={<CookiePreferencesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <button
        type="button"
        onClick={handleBackToTop}
        className={`fixed bottom-6 right-6 z-[9000] rounded-full bg-[var(--primary-color)] text-black shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-light)] hover:bg-[var(--primary-dark)] ${showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="M6 11l6-6 6 6" />
        </svg>
      </button>

      {/* Cookie Consent - Outside main container for proper fixed positioning */}
      <CookieConsent />
    </CookieProvider>
  );
}

export default App;
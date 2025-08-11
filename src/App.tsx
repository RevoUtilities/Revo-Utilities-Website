import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';



function App() {
  const location = useLocation();

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

  return (
    <div className="flex flex-col min-h-screen pt-0 mt-0">
      <Navbar />

      <main className="flex-grow pt-0 mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
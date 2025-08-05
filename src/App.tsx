import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
    // Set page title
    document.title = "Revo Utilities - Save on Energy, Water and Telecoms in the UK";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Save money on your water and energy bills in the UK with Revo Utilities. We find the most competitive rates in commercial gas, electricity, water and telecoms.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Save money on your water and energy bills in the UK with Revo Utilities. We find the most competitive rates in commercial gas, electricity, water and telecoms.';
      document.head.appendChild(newMeta);
    }

    // Scroll to top on page navigation
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen pt-0 mt-0">
      <Navbar />

      <main className="flex-grow pt-0 mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-test" element={<Services />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
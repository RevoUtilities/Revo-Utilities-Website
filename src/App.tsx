import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Comparison from './pages/Comparison';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import Team from './pages/Team';
import './index.css';
import './styles/navbarStyles.css';

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog-admin" element={<BlogAdmin />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
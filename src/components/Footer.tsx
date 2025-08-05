import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)]/90 backdrop-blur-md text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* Brand Logo */}
            <img
              src="/logos/Revo/Revo logo.png"
              alt="Revo Utilities Logo"
              className="h-10 w-auto object-contain mb-3 drop-shadow-md"
              style={{ maxWidth: '120px' }}
            />

            <p className="text-gray-400 mb-4">Helping UK businesses save money on energy, water and telecoms bills.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/revoutilities" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary-color)]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/RevoUtilities/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary-color)]" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/revoutilities/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary-color)]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/revo-utilities/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--primary-color)]" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[var(--primary-color)]">Home</Link></li>
              <li><Link to="/comparison" className="text-gray-400 hover:text-[var(--primary-color)]">Comparison Specialists</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-[var(--primary-color)]">Insights</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-[var(--primary-color)]">Meet the Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/our-services" className="text-gray-400 hover:text-[var(--primary-color)]">Gas & Electricity</Link></li>
              <li><Link to="/our-services#water" className="text-gray-400 hover:text-[var(--primary-color)]">Water & Waste</Link></li>
              <li><Link to="/our-services#telecoms" className="text-gray-400 hover:text-[var(--primary-color)]">Telecoms</Link></li>
              <li><a href="https://www.revo-it.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color)]">IT Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-[var(--primary-color)] mr-3 mt-1" />
                <span className="text-gray-400">Scotland</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[var(--primary-color)] mr-3" />
                <span className="text-gray-400">0141 280 9986</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[var(--primary-color)] mr-3" />
                <span className="text-gray-400">reducemybills@revo-utilities.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-300" />
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Revo Utilities. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[var(--primary-color)] text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[var(--primary-color)] text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

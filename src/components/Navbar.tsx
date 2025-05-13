import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  hasDropdown?: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

// Performance-optimized NavLink component
const NavLink = ({ to, label, isActive, hasDropdown, onClick, mobile }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-[var(--primary-color)] font-semibold'
        : mobile
          ? 'text-gray-900 hover:text-[var(--primary-color)]'
          : 'text-white hover:text-[var(--primary-color)] hover:text-opacity-90'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className="flex items-center">
      {label}
      {hasDropdown && <ChevronDown size={16} className="ml-1" />}
    </span>
    {isActive && (
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-color)] rounded-full transform" />
    )}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Path to logo in public directory
  const logoSrc = '/logos/Revo/Revo logo.png';

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle clicks outside of navbar to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Smooth scroll-based isScrolled toggling with hysteresis
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Enter scrolled state past 10px, exit below 8px to avoid jitter
          if (y > 10 && !isScrolled) {
            setIsScrolled(true);
          } else if (y < 8 && isScrolled) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/team', label: 'Our Team' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      ref={navRef}
      className={`sticky top-0 left-0 right-0 w-full z-50 py-4 bg-[var(--secondary-color)] backdrop-blur-sm transition-all duration-500 ease-in-out ${'navbar'}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(33, 33, 33, 0.5)' : 'rgba(33, 33, 33, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: isScrolled ? '0.5rem 0' : '1rem 0',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
      }}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link to="/" aria-label="Home" className="flex items-center mr-2 md:mr-4">
            <img
              src={logoSrc}
              alt="Revo Utilities Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
              style={{ maxWidth: '120px' }}
            />
          </Link>

          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  isActive={location.pathname === link.to}
                  isScrolled={isScrolled}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800 hover:text-black hover:bg-gray-100' : 'text-white hover:text-white hover:bg-gray-800'}`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 bg-white/95 shadow-md border-t border-gray-200' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              isActive={location.pathname === link.to}
              isScrolled={isScrolled}
              onClick={() => setIsOpen(false)}
              mobile={true}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

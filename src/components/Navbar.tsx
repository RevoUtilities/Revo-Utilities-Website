import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
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
    className={`relative px-4 py-2.5 rounded-md text-base font-medium transition-all duration-200 ${
      isActive
        ? 'text-[var(--primary-color)] font-semibold'
        : mobile
          ? 'text-gray-900 hover:text-[var(--primary-color)]'
          : 'text-gray-900 hover:text-[var(--primary-color)] hover:text-opacity-90'
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

  // Memoize the click handler
  const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Handle clicks outside of navbar to close mobile menu
  useEffect(() => {
    // Use passive event listener for better performance
    document.addEventListener('mousedown', handleClickOutside as EventListener, { passive: true });
    document.addEventListener('touchstart', handleClickOutside as EventListener, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [handleClickOutside]);

  // Always use the scrolled state for a consistent look
  useEffect(() => {
    setIsScrolled(true);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/team', label: 'Our Team' },

  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-5xl z-[9999] transition-all duration-300 ease-out shadow-2xl rounded-2xl border border-white/30 bg-white/60 backdrop-blur-lg navbar`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
        border: '2px solid rgba(180,180,180,0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.22), 0 2px 8px 0 rgba(0,0,0,0.10)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        padding: '0.75rem 0',
        zIndex: 9999, // Fallback in case Tailwind is overridden
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
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] ${
                isScrolled 
                  ? 'text-gray-800 hover:text-black hover:bg-gray-100' 
                  : 'text-white hover:text-white hover:bg-gray-800'
              }`}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls="mobile-menu"
              id="mobile-menu-button"
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

      {/* Mobile menu - Lazy loaded for better performance */}
      <Suspense fallback={null}>
        {isOpen && (
          <div
            className="md:hidden absolute left-0 right-0 mx-auto mt-2 w-[95vw] max-w-5xl rounded-2xl bg-white/80 border border-white/30 shadow-2xl backdrop-blur-lg z-40"
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              border: '2px solid rgba(180,180,180,0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.22), 0 2px 8px 0 rgba(0,0,0,0.10)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
            id="mobile-menu"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
            tabIndex={-1}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  isActive={location.pathname === link.to}
                  isScrolled={isScrolled}
                  onClick={() => {
                    setIsOpen(false);
                    // Return focus to the menu button when closing
                    document.getElementById('mobile-menu-button')?.focus();
                  }}
                  mobile={true}
                />
              ))}
            </div>
          </div>
        )}
      </Suspense>
    </nav>
  );
};

export default Navbar;

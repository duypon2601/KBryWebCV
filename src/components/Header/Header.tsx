import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, type JSX } from "react";
import "./Header.css";

const Header = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-row">
        <Link to="/" className="logo">
          K'Brỳ Organizer
        </Link>
        
        <div className={`menu-container ${isMobileMenuOpen ? 'mobile-visible' : ''}`}>
          <div className="menu-items">
            <Link to="/" className={`menu-item ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about-me" className={`menu-item ${isActive('/about-me') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/portfolio" className={`menu-item ${isActive('/portfolio') ? 'active' : ''}`}>
              Portfolio
            </Link>
            <Link to="/journey" className={`menu-item ${isActive('/journey') ? 'active' : ''}`}>
              Journey
            </Link>
            <Link to="/connect" className={`menu-item ${isActive('/connect') ? 'active' : ''}`}>
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mobile-menu-col">
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

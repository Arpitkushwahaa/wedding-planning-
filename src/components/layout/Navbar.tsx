import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <Heart 
              size={28} 
              className={`transition-colors duration-300 ${isScrolled ? 'text-rose-400' : 'text-rose-400'}`} 
              fill="currentColor" 
            />
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              Eternal
            </span>
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-rose-400' : 'text-rose-400'}`}>
              Weddings
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium hover:text-rose-400 transition-colors relative
                  ${location.pathname === item.path ? 'text-rose-400' : isScrolled ? 'text-gray-800' : 'text-gray-800'}
                `}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>
          
          <Link 
            to="/contact" 
            className={`hidden lg:block px-6 py-3 rounded-md font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-rose-400 text-white hover:bg-rose-500' 
                : 'bg-rose-400 text-white hover:bg-rose-500'
            }`}
          >
            Book Consultation
          </Link>
          
          <button 
            className="lg:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center gap-2 text-2xl font-semibold">
              <Heart size={28} className="text-rose-400" fill="currentColor" />
              <span className="text-gray-800">Eternal</span>
              <span className="text-rose-400">Weddings</span>
            </Link>
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-gray-800"
            >
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-lg mb-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium hover:text-rose-400 transition-colors ${
                  location.pathname === item.path ? 'text-rose-400' : 'text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <Link 
            to="/contact" 
            className="mt-auto px-6 py-3 bg-rose-400 text-white rounded-md font-medium hover:bg-rose-500 transition-all duration-300 text-center"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
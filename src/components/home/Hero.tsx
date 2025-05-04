import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { threshold: 0.1, once: true });
  
  // Preload the background image
  useEffect(() => {
    // Set loaded from localStorage if available
    const savedLoaded = localStorage.getItem('heroImageLoaded');
    if (savedLoaded === 'true') {
      setIsLoaded(true);
      setIsVisible(true);
    }
    
    const img = new Image();
    img.src = 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    img.onload = () => {
      setIsLoaded(true);
      // Save to localStorage
      localStorage.setItem('heroImageLoaded', 'true');
      // Only start animations after image is loaded
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };
    
    // Fallback in case image loading takes too long
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
        setIsVisible(true);
        localStorage.setItem('heroImageLoaded', 'true');
      }
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  // Force visibility when user scrolls - ensures content doesn't disappear
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  
  // Always ensure visibility to prevent content from disappearing
  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);
  
  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center">
      {/* Background with opacity transition */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center transition-opacity duration-700 ${isLoaded ? 'opacity-20' : 'opacity-0'}`}
          style={{ willChange: 'opacity' }}
        ></div>
      </div>
      
      {/* Content container with fixed height to prevent layout shifts */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Reserve space for content even when not visible */}
          <div className="min-h-[200px] flex flex-col justify-center items-center">
            <h1 
              className={`text-5xl md:text-7xl font-semibold mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ willChange: 'transform, opacity' }}
            >
              Creating <span className="text-rose-400">Unforgettable</span> Wedding Moments
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-gray-600 mb-12 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ willChange: 'transform, opacity' }}
            >
              We transform your dream wedding into a beautifully crafted reality, with every detail meticulously planned to perfection.
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#services" className="p-2 rounded-full bg-white/80 shadow-md animate-bounce">
          <ArrowRight size={24} className="rotate-90 text-rose-400" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
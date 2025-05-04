import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, persistOnceVisible: true });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-5xl md:text-7xl font-semibold mb-6 transition-all duration-700 ease-out ${isVisible || isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            Creating <span className="text-rose-400">Unforgettable</span> Wedding Moments
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-12 transition-all duration-700 delay-200 ease-out ${isVisible || isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          >
            We transform your dream wedding into a beautifully crafted reality, with every detail meticulously planned to perfection.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ease-out ${isVisible || isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="p-2 rounded-full bg-white/80 shadow-md">
          <ArrowRight size={24} className="rotate-90 text-rose-400" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
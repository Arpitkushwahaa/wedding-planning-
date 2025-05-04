import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Heart size={28} className="text-rose-400" fill="currentColor" />
              <span className="text-white">Eternal</span>
              <span className="text-rose-400">Weddings</span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting unforgettable wedding experiences with passion, creativity, and meticulous attention to detail.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQ', path: '/faq' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Full Planning',
                'Partial Planning',
                'Day-of Coordination',
                'Vendor Management',
                'Photography Packages',
                'Entertainment Services',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Wedding Avenue, Suite 101<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-rose-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-rose-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-rose-400 flex-shrink-0" />
                <a href="mailto:hello@weddingplanner.com" className="text-gray-400 hover:text-rose-400 transition-colors">
                  hello@weddingplanner.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Eternal Weddings. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-rose-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
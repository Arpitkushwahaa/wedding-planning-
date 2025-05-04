import React, { useRef, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { Calendar, Heart as Hearts, Users, UtensilsCrossed, Camera, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Full Planning',
    description: 'From venue selection to day-of coordination, we handle every detail of your wedding day.',
    icon: <Calendar size={32} className="text-rose-400" />,
    price: 'From $4,500'
  },
  {
    id: 2,
    title: 'Partial Planning',
    description: 'Already started planning? We\'ll step in and help with the remaining details.',
    icon: <Hearts size={32} className="text-rose-400" />,
    price: 'From $2,800'
  },
  {
    id: 3,
    title: 'Day-of Coordination',
    description: 'We ensure your wedding day runs smoothly so you can enjoy every moment.',
    icon: <Users size={32} className="text-rose-400" />,
    price: 'From $1,500'
  },
  {
    id: 4,
    title: 'Vendor Management',
    description: 'We\'ll help you select and coordinate with the perfect vendors for your celebration.',
    icon: <UtensilsCrossed size={32} className="text-rose-400" />,
    price: 'From $1,200'
  },
  {
    id: 5,
    title: 'Photography Package',
    description: 'Capture your special moments with our curated photography packages.',
    icon: <Camera size={32} className="text-rose-400" />,
    price: 'From $2,500'
  },
  {
    id: 6,
    title: 'Entertainment',
    description: 'From DJs to live bands, we\'ll ensure your reception is unforgettable.',
    icon: <Music size={32} className="text-rose-400" />,
    price: 'From $1,800'
  }
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, persistOnceVisible: true });
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle" ref={ref}>Our Services</h2>
          <h3 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Making Your Wedding Dreams Come True
          </h3>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            We offer a range of services to help you create the wedding of your dreams. From full-service planning to day-of coordination, we\'re here to make your vision a reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-medium">{service.price}</span>
                <Link to="/services" className="text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isInView ? 'fade-in stagger-delay-3' : 'opacity-0'}`}>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
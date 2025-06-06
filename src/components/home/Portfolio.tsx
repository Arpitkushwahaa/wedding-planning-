import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Sarah & James',
    location: 'Lakeside Manor',
    image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Elegant'
  },
  {
    id: 2,
    title: 'Emily & Michael',
    location: 'Sunset Beach Resort',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Beach'
  },
  {
    id: 3,
    title: 'Jessica & David',
    location: 'Mountain View Vineyard',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Rustic'
  },
  {
    id: 4,
    title: 'Anna & Robert',
    location: 'Grand Ballroom',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Luxury'
  },
  {
    id: 5,
    title: 'Olivia & William',
    location: 'Garden Pavilion',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Garden'
  },
  {
    id: 6,
    title: 'Sophie & Thomas',
    location: 'Historic Castle',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Historic'
  }
];

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, persistOnceVisible: true });
  
  return (
    <section id="portfolio" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle" ref={ref}>Our Portfolio</h2>
          <h3 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Beautiful Weddings We've Created
          </h3>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Explore our gallery of stunning weddings we've had the pleasure of planning and coordinating for our wonderful couples.
          </p>
        </div>
        
        <div className="gallery-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-lg transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.image} 
                alt={`${item.title} wedding`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-rose-300 text-sm font-medium mb-1">{item.category}</span>
                <h4 className="text-white text-xl font-semibold">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isInView ? 'fade-in stagger-delay-3' : 'opacity-0'}`}>
          <Link to="/portfolio" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
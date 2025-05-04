import React, { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Camera, Users, Calendar, MapPin, Heart } from 'lucide-react';

const Portfolio = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isGalleryInView = useInView(galleryRef, { threshold: 0.1, once: true });
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState<WeddingType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWedding, setSelectedWedding] = useState<WeddingType | null>(null);
  
  type WeddingType = {
    id: number;
    title: string;
    location: string;
    date: string;
    category: string;
    description: string;
    couple: string;
    features: string[];
    mainImage: string;
    gallery: string[];
  };
  
  const weddings: WeddingType[] = [
    {
      id: 1,
      title: 'Sarah & James',
      location: 'Lakeside Manor, New York',
      date: 'June 15, 2023',
      category: 'Elegant',
      description: 'An elegant lakeside wedding with a soft color palette of blush and ivory. The ceremony took place at sunset overlooking the water, followed by a tented reception with crystal chandeliers and lush floral arrangements.',
      couple: 'Sarah and James met in college and dated for five years before getting engaged during a surprise trip to Paris.',
      features: ['Outdoor ceremony', 'Tented reception', 'Live band', 'Five-tier wedding cake', 'Fireworks display'],
      mainImage: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 2,
      title: 'Emily & Michael',
      location: 'Sunset Beach Resort, Malibu',
      date: 'July 22, 2023',
      category: 'Beach',
      description: 'A barefoot beach wedding with a laid-back bohemian vibe. The ceremony was held directly on the sand as waves crashed in the background. The reception featured long wooden tables, hanging installations of tropical flowers, and fire pits for the evening chill.',
      couple: 'Emily and Michael are both surfers who met at a local beach competition. Their shared love of the ocean made a beach wedding the perfect choice.',
      features: ['Barefoot ceremony', 'Surfboard decor', 'Steel drum band', 'Fresh seafood menu', 'Bonfire afterparty'],
      mainImage: 'https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 3,
      title: 'Jessica & David',
      location: 'Mountain View Vineyard, Napa',
      date: 'September 8, 2023',
      category: 'Rustic',
      description: 'A charming rustic wedding set among rolling vineyard hills. The ceremony took place under an oak tree decorated with hanging mason jars, followed by a barn reception featuring farm tables, wine barrel decor, and a family-style dinner service.',
      couple: 'Jessica and David bonded over their love of wine on their first date. After getting engaged, they knew a vineyard wedding would perfectly represent their relationship journey.',
      features: ['Vineyard ceremony', 'Barn reception', 'Wine tasting hour', 'Farm-to-table menu', 'Acoustic trio'],
      mainImage: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 4,
      title: 'Anna & Robert',
      location: 'Grand Ballroom, Chicago',
      date: 'October 14, 2023',
      category: 'Luxury',
      description: 'A glamorous black-tie wedding in a historic downtown ballroom. Crystal chandeliers, mirrored tables, and thousands of white roses created a luxurious atmosphere. The evening featured a ten-piece orchestra, five-course meal, and a champagne tower.',
      couple: 'Anna and Robert met through mutual friends at a charity gala. Their shared appreciation for classic elegance influenced their opulent wedding style.',
      features: ['Historic venue', 'Orchestra & jazz band', 'Custom cocktail bar', 'Cigar lounge', 'Late night food stations'],
      mainImage: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 5,
      title: 'Olivia & William',
      location: 'Botanical Gardens, Seattle',
      date: 'May 20, 2023',
      category: 'Garden',
      description: 'A verdant garden wedding surrounded by blooming spring flowers. The ceremony took place in a rose garden followed by a greenhouse reception festooned with hanging greenery, botanical centerpieces, and garden-inspired cuisine.',
      couple: 'Olivia and William connected through their shared love of gardening. William proposed in the same botanical garden where they later held their wedding.',
      features: ['Rose garden ceremony', 'Greenhouse reception', 'Living centerpieces', 'Edible flower cuisine', 'String quartet'],
      mainImage: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 6,
      title: 'Sophie & Thomas',
      location: 'Historic Castle, Edinburgh',
      date: 'April 5, 2023',
      category: 'Historic',
      description: 'A fairy-tale wedding in a 16th-century Scottish castle. The ceremony was held in the ancient chapel followed by a reception in the grand hall featuring medieval-inspired details, tartan accents, and traditional Scottish entertainment.',
      couple: 'Sophie and Thomas were drawn to the castle\'s rich history and romantic ambiance, which beautifully complemented Thomas\'s Scottish heritage.',
      features: ['Castle ceremony', 'Bagpiper procession', 'Whisky tasting', 'Traditional Scottish menu', 'Ceilidh dancing'],
      mainImage: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/1677468/pexels-photo-1677468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1589822/pexels-photo-1589822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 7,
      title: 'Maria & John',
      location: 'Desert Oasis Resort, Arizona',
      date: 'November 3, 2023',
      category: 'Destination',
      description: 'A breathtaking desert wedding combining natural beauty with bohemian elegance. The ceremony took place against a backdrop of red rock formations at sunset, followed by a starlit reception with southwestern-inspired details.',
      couple: 'Maria and John love hiking and outdoor adventures. Their first trip together was to the Arizona desert, making it the perfect location for their destination wedding.',
      features: ['Sunset ceremony', 'Teepee lounge area', 'Cactus decor accents', 'Southwest-inspired menu', 'Stargazing experience'],
      mainImage: 'https://images.pexels.com/photos/1589822/pexels-photo-1589822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 8,
      title: 'Jennifer & Alex',
      location: 'Mountain Lodge, Aspen',
      date: 'January 12, 2023',
      category: 'Winter',
      description: 'A magical winter wedding in a snow-covered mountain lodge. The ceremony took place in a glass-enclosed pavilion overlooking snow-capped peaks, followed by a cozy reception with fireplaces, fur accents, and warm winter cocktails.',
      couple: 'Jennifer and Alex are avid skiers who met on the slopes of Aspen. They chose a winter wedding that reflected their love of the mountains and the season.',
      features: ['Snow-covered venue', 'Sleigh arrival', 'Hot chocolate bar', 'Fur shawls for guests', 'Ice sculpture displays'],
      mainImage: 'https://images.pexels.com/photos/1677468/pexels-photo-1677468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  ];
  
  const categories = ['All', 'Elegant', 'Beach', 'Rustic', 'Luxury', 'Garden', 'Historic', 'Destination', 'Winter'];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredItems(weddings);
    } else {
      setFilteredItems(weddings.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);
  
  // Force visibility on scroll to prevent content from disappearing
  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls, make all content visible
      document.querySelectorAll('.opacity-0').forEach(element => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openModal = (wedding: WeddingType) => {
    setSelectedWedding(wedding);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-4">Our Wedding Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of beautifully designed and executed weddings that we\'ve had the honor of planning.
          </p>
        </div>
        
        <div ref={galleryRef} className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-rose-400 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid mb-16">
            {filteredItems.map((wedding, index) => (
              <div 
                key={wedding.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                  isGalleryInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(wedding)}
              >
                <img 
                  src={wedding.mainImage} 
                  alt={`${wedding.title} wedding`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-rose-300 text-sm font-medium mb-1">{wedding.category}</span>
                  <h4 className="text-white text-xl font-semibold">{wedding.title}</h4>
                  <p className="text-white/80 text-sm">{wedding.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center p-12 bg-rose-50 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Ready to Create Your Own Wedding Story?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Let us help you design a wedding that\'s uniquely yours. Contact us today to begin planning your special day.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Wedding Detail Modal */}
      {showModal && selectedWedding && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold mb-2">{selectedWedding.title}</h2>
              <p className="text-rose-400 mb-6">{selectedWedding.category} Wedding</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src={selectedWedding.mainImage} 
                    alt={selectedWedding.title} 
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} className="text-rose-400" />
                      <span>{selectedWedding.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className="text-rose-400" />
                      <span>{selectedWedding.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">About the Couple</h3>
                    <p className="text-gray-600">{selectedWedding.couple}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Wedding Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedWedding.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Heart size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Wedding Story</h3>
                    <p className="text-gray-600">{selectedWedding.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Photo Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedWedding.gallery.map((image, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${selectedWedding.title} wedding image ${idx + 1}`} 
                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="/contact" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Plan Your Similar Wedding <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Calendar, Heart, Users, UtensilsCrossed, Camera, Music, 
  MapPin, ShoppingBag, Send, Check, Sparkles, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const isMainInView = useInView(mainRef, { threshold: 0.1, once: true });
  const isFaqInView = useInView(faqRef, { threshold: 0.1, once: true });
  
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
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
  
  const services = [
    {
      id: 1,
      title: 'Full Planning',
      description: 'Our signature service provides comprehensive planning from engagement to "I do." We handle every detail so you can enjoy the journey.',
      icon: <Calendar size={32} className="text-rose-400" />,
      price: 'From $4,500',
      features: [
        'Unlimited consultations with your dedicated planner',
        'Venue selection and contract negotiation',
        'Budget management and tracking',
        'Vendor recommendations, booking, and coordination',
        'Design concept development and implementation',
        'Custom timeline and floor plan creation',
        'Invitation management and RSVP tracking',
        'Guest accommodation coordination',
        'Rehearsal direction',
        'Full day-of coordination (up to 12 hours)',
        'Post-wedding wrap-up services'
      ],
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Partial Planning',
      description: 'Perfect for couples who\'ve started planning but need expert guidance to bring their vision together and manage the remaining details.',
      icon: <Heart size={32} className="text-rose-400" />,
      price: 'From $2,800',
      features: [
        'Up to 8 consultations with your planner',
        'Assistance with remaining vendor selections',
        'Design advice and recommendations',
        'Budget review and management',
        'Timeline creation and management',
        'Coordination of wedding day logistics',
        'Vendor contract review',
        'Rehearsal direction',
        'Full day-of coordination (up to 10 hours)'
      ],
      image: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Day-of Coordination',
      description: 'For couples who have planned their wedding but need a professional to execute their vision and manage all logistics on the big day.',
      icon: <Users size={32} className="text-rose-400" />,
      price: 'From $1,500',
      features: [
        'Three pre-wedding consultations',
        'Vendor confirmation and coordination',
        'Detailed timeline creation',
        'Rehearsal direction',
        'Setup supervision',
        'Guest management and direction',
        'Coordination of ceremony and reception',
        'Vendor management throughout the day',
        'Personal attendant for the couple',
        'Up to 10 hours of coverage on wedding day',
        'Emergency kit on hand'
      ],
      image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Vendor Management',
      description: 'Let us handle the coordination of your vendors, ensuring a cohesive team of professionals working together to create your perfect day.',
      icon: <UtensilsCrossed size={32} className="text-rose-400" />,
      price: 'From $1,200',
      features: [
        'Vendor recommendations based on style and budget',
        'Contract review and negotiation assistance',
        'Coordination of vendor logistics and timing',
        'Creation of vendor contact list and timeline',
        'Confirmation of all vendor details prior to wedding',
        'Point of contact for questions and concerns',
        'Management of vendor setup and breakdown',
        'Coordination of vendor meals and breaks'
      ],
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'Photography Package',
      description: 'Capture your special moments with our curated photography packages, tailored to your unique style and coverage needs.',
      icon: <Camera size={32} className="text-rose-400" />,
      price: 'From $2,500',
      features: [
        'Engagement session (2 hours)',
        'Pre-wedding consultation to discuss shot list',
        '8 hours of wedding day coverage',
        'Second shooter for additional angles and coverage',
        'Online gallery of high-resolution images',
        'All edited digital images with print release',
        'Customized wedding album (10x10, 20 pages)',
        'Complimentary engagement signing book'
      ],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'Entertainment Services',
      description: 'From DJs to live bands, we\'ll ensure your reception is unforgettable with perfectly curated music and entertainment.',
      icon: <Music size={32} className="text-rose-400" />,
      price: 'From $1,800',
      features: [
        'Professional DJ services (up to 6 hours)',
        'State-of-the-art sound equipment',
        'Custom playlist creation',
        'Emcee services for introductions and announcements',
        'Lighting package options',
        'Dance floor effects',
        'Consultation to discuss music preferences',
        'Backup equipment for peace of mind'
      ],
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const faqs = [
    {
      question: 'How far in advance should we book your wedding planning services?',
      answer: 'We recommend booking our services 9-12 months before your wedding date for full planning, 6-9 months for partial planning, and at least 3 months for day-of coordination. However, we occasionally have availability for shorter timelines, so please inquire regardless of your timeline.'
    },
    {
      question: 'What is your payment structure for wedding planning services?',
      answer: 'Our standard payment structure includes a 25% non-refundable deposit at booking to secure your date, followed by two additional payments: 50% due halfway through the planning process and the remaining 25% due one month before your wedding.'
    },
    {
      question: 'Do you travel for destination weddings?',
      answer: 'Yes! We love planning destination weddings. Travel fees apply and are quoted on a case-by-case basis depending on the location, duration, and complexity of the event.'
    },
    {
      question: 'Can we customize these packages to fit our specific needs?',
      answer: 'Absolutely! Our packages are starting points, and we\'re happy to create a custom proposal based on your unique requirements. We can add or remove services to ensure you\'re getting exactly what you need.'
    },
    {
      question: 'How many weddings do you take on each year?',
      answer: 'To ensure we provide the highest level of service, each of our planners takes on a limited number of full and partial planning clients per year. This allows us to give each couple the attention and care they deserve.'
    }
  ];
  
  const additionalServices = [
    {
      title: 'Venue Selection',
      icon: <MapPin size={24} className="text-rose-400" />
    },
    {
      title: 'Floral Design',
      icon: <Sparkles size={24} className="text-rose-400" />
    },
    {
      title: 'Wedding Favors',
      icon: <ShoppingBag size={24} className="text-rose-400" />
    },
    {
      title: 'Invitation Design',
      icon: <Send size={24} className="text-rose-400" />
    },
    {
      title: 'Rehearsal Planning',
      icon: <Clock size={24} className="text-rose-400" />
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-4">Our Wedding Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From full-service planning to day-of coordination, we offer a variety of services to meet your wedding planning needs.
          </p>
        </div>
        
        <div ref={mainRef} className="max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-16 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`transition-all duration-700 ${
                  isMainInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-semibold mb-3">{service.title}</h2>
                    <p className="text-rose-500 font-medium mb-4">{service.price}</p>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check size={18} className="text-rose-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="btn-primary inline-flex"
                    >
                      Book a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="bg-rose-50 p-10 rounded-lg mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Additional Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer these supplementary services to enhance your wedding experience. Ask about adding these to any package.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white px-6 py-4 rounded-full shadow-sm flex items-center gap-3"
                >
                  {service.icon}
                  <span className="font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div ref={faqRef} className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our wedding planning services.
              </p>
            </div>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                    isFaqInView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left font-medium"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      activeAccordion === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-rose-100 to-rose-50 p-10 rounded-lg text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Begin Your Wedding Journey?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today to schedule a consultation. We\'ll discuss your vision, answer your questions, and create a custom proposal tailored to your needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
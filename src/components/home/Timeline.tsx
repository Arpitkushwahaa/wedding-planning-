import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Calendar, Users, Star, Camera, UtensilsCrossed, Heart } from 'lucide-react';

const timelineSteps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Meet with our team to discuss your vision, budget, and timeline for your dream wedding.',
    icon: <Users size={24} className="text-rose-400" />
  },
  {
    id: 2,
    title: 'Venue Selection',
    description: 'We\'ll help you find and secure the perfect venue that aligns with your vision and budget.',
    icon: <Star size={24} className="text-rose-400" />
  },
  {
    id: 3,
    title: 'Vendor Coordination',
    description: 'From photographers to caterers, we\'ll connect you with trusted professionals for your big day.',
    icon: <Camera size={24} className="text-rose-400" />
  },
  {
    id: 4,
    title: 'Design & Decor',
    description: 'We\'ll create a cohesive design concept that reflects your style and personality.',
    icon: <UtensilsCrossed size={24} className="text-rose-400" />
  },
  {
    id: 5,
    title: 'Final Preparations',
    description: 'Two months before your wedding, we\'ll finalize all details and create a comprehensive timeline.',
    icon: <Calendar size={24} className="text-rose-400" />
  },
  {
    id: 6,
    title: 'Wedding Day',
    description: 'Relax and enjoy your special day while we handle all the coordination and logistics.',
    icon: <Heart size={24} className="text-rose-400" />
  }
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, persistOnceVisible: true });
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle" ref={ref}>Our Process</h2>
          <h3 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            The Journey to Your Perfect Day
          </h3>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            From the initial consultation to the big day, we're with you every step of the way. Here's how our planning process works.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-100"></div>
            
            {/* Timeline Steps */}
            {timelineSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative z-10 flex items-center mb-12 transition-all duration-700 ${
                  isInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline Content - Left or Right based on index */}
                <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Box */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shadow-md z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Empty Space for Alignment */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
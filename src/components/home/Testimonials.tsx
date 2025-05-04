import React, { useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    quote: 'Working with this team was the best decision we made for our wedding. Every detail was perfectly executed, and we didn\'t have to worry about a thing on our big day.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael & Emma',
    role: 'Newlyweds',
    quote: 'We were absolutely blown away by the level of service and attention to detail. Our wedding day was even more magical than we could have imagined.',
    image: 'https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Jessica Williams',
    role: 'Bride',
    quote: 'The team went above and beyond to make our wedding day perfect. They took care of every detail, allowing us to fully enjoy our celebration.',
    image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, persistOnceVisible: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };
  
  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % testimonials.length;
    scrollToSlide(nextSlide);
  };
  
  const handlePrev = () => {
    const prevSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    scrollToSlide(prevSlide);
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle" ref={ref}>Testimonials</h2>
          <h3 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            What Our Couples Say
          </h3>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Hear from couples who trusted us with their special day and created memories that will last a lifetime.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={sliderRef}
            className="testimonial-slider flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="testimonial-slide min-w-full flex flex-col lg:flex-row items-center gap-8 p-4"
              >
                <div className="w-full lg:w-1/3 aspect-square overflow-hidden rounded-full max-w-[300px]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/3">
                  <Quote size={48} className="text-rose-200 mb-4" />
                  <p className="text-xl lg:text-2xl text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-rose-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md hover:bg-rose-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-rose-400" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-rose-400 w-8' : 'bg-rose-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md hover:bg-rose-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-rose-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
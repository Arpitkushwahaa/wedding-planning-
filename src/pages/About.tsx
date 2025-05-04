import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, Award, Users, Star } from 'lucide-react';

const About = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const couplesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  const storyInView = useInView(storyRef, { threshold: 0.1, once: true });
  const couplesInView = useInView(couplesRef, { threshold: 0.1, once: true });
  const teamInView = useInView(teamRef, { threshold: 0.1, once: true });
  const valuesInView = useInView(valuesRef, { threshold: 0.1, once: true });
  
  // Force visibility on scroll to prevent content from disappearing
  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls, we'll force all content to be visible
      document.querySelectorAll('.opacity-0').forEach(element => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      });
      
      // Remove any translate-y transforms that might be hiding content
      document.querySelectorAll('[class*="translate-y-"]').forEach(element => {
        element.classList.remove('translate-y-8');
        element.classList.add('translate-y-0');
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Emma Richardson',
      role: 'Founder & Lead Planner',
      image: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years of experience in luxury event planning, Emma brings creativity and flawless execution to every wedding.'
    },
    {
      id: 2,
      name: 'James Anderson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'James transforms concepts into stunning visual experiences with his background in design and keen eye for aesthetic details.'
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      role: 'Client Experience Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sophia ensures that every couple feels supported throughout their planning journey with her warm, attentive approach.'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Logistics Coordinator',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael\'s meticulous attention to detail ensures that every wedding day unfolds seamlessly from start to finish.'
    }
  ];
  
  const values = [
    {
      id: 1,
      title: 'Personalized Approach',
      description: 'We believe that every wedding should be as unique as the couple themselves. We take the time to understand your vision, preferences, and story to create a celebration that truly reflects who you are.',
      icon: <Heart size={32} className="text-rose-400" />
    },
    {
      id: 2,
      title: 'Attention to Detail',
      description: 'From the grandest gestures to the smallest touches, we know that details matter. Our meticulous planning ensures that every element of your wedding is thoughtfully executed.',
      icon: <Star size={32} className="text-rose-400" />
    },
    {
      id: 3,
      title: 'Service Excellence',
      description: 'We are committed to providing an exceptional planning experience. Our responsive communication, professional guidance, and dedicated support make the journey to your wedding day enjoyable and stress-free.',
      icon: <Award size={32} className="text-rose-400" />
    },
    {
      id: 4,
      title: 'Collaborative Spirit',
      description: 'We value collaboration with both our clients and our network of trusted vendors. By fostering strong relationships, we create a team approach that brings your wedding vision to life.',
      icon: <Users size={32} className="text-rose-400" />
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-4">About Eternal Weddings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our passionate team and our approach to creating magical wedding experiences.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div ref={storyRef} className="max-w-6xl mx-auto mb-20">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${storyInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1573007/pexels-photo-1573007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Eternal Weddings Planning Session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-subtitle">Our Story</h2>
              <h3 className="section-title mb-6">Crafting Beautiful Wedding Stories Since 2010</h3>
              <p className="text-gray-600 mb-6">
                Eternal Weddings was born from a passion for creating meaningful celebrations that honor love stories. What began as a small team dedicated to crafting intimate weddings has grown into a full-service wedding planning company known for creating unforgettable experiences.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Emma Richardson, started her career in luxury event planning before focusing exclusively on weddings. After planning her sister's wedding and seeing the joy it brought to everyone involved, she realized her calling was to help couples create their perfect day.
              </p>
              <p className="text-gray-600">
                Over the years, we've had the privilege of planning hundreds of weddings, each as unique as the couples we work with. From intimate garden gatherings to grand ballroom celebrations, we approach each wedding with the same level of dedication, creativity, and care.
              </p>
            </div>
          </div>
        </div>
        
        {/* Happy Couples Section */}
        <div ref={couplesRef} className="max-w-6xl mx-auto mb-20 bg-rose-50 rounded-lg overflow-hidden">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center transition-all duration-700 ${couplesInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="h-full relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy couple on their wedding day" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ maxHeight: '600px' }}
              />
            </div>
            <div className="p-12 lg:p-16">
              <h2 className="section-subtitle">Happy Couples</h2>
              <h3 className="section-title mb-6">Creating Memorable Wedding Experiences</h3>
              <p className="text-gray-600 mb-6">
                Every couple deserves a wedding day that reflects their unique love story. We've had the privilege of helping hundreds of couples create unforgettable celebrations that perfectly capture their vision and personality.
              </p>
              <p className="text-gray-600 mb-6">
                From intimate gatherings to grand celebrations, our team approaches each wedding with the same dedication, attention to detail, and passion for creating beautiful moments.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-rose-400 mr-4"></div>
                <p className="italic text-gray-700">"Our wedding day was absolute perfection thanks to the incredible team at Eternal Weddings."</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team Section */}
        <div ref={teamRef} className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Our Team</h2>
            <h3 className="section-title mb-4">Meet the Experts Behind Your Perfect Day</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our talented team brings together diverse expertise, creative vision, and meticulous attention to detail to make your wedding dreams come true.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-700 ${
                  teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-rose-400 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Values Section */}
        <div ref={valuesRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Our Values</h2>
            <h3 className="section-title mb-4">What Guides Us</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles define our approach to wedding planning and guide every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.id} 
                className={`bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-700 ${
                  valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className={`mt-16 p-8 bg-rose-50 rounded-lg transition-all duration-700 ${valuesInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold mb-4">Begin Your Wedding Journey</h3>
              <p className="text-gray-600 mb-8">
                We'd love to learn about your wedding dreams and how we can help bring them to life. Contact us today to schedule a consultation.
              </p>
              <a href="/contact" className="btn-primary inline-flex">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
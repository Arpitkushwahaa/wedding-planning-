import React, { useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { Calendar, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    service: 'Full Planning'
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
        service: 'Full Planning'
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-subtitle" ref={ref}>Get In Touch</h2>
          <h3 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Begin Your Wedding Journey
          </h3>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Ready to plan your perfect Indian wedding? Contact us today for a free consultation and let's create a beautiful celebration that honors your traditions and personal style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-rose-400 mt-1" />
                  <div>
                    <h5 className="font-medium text-lg">Phone</h5>
                    <p className="text-gray-600">+91 8045 678 900</p>
                    <p className="text-gray-500 text-sm">Available Mon-Sat, 10am-7pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-rose-400 mt-1" />
                  <div>
                    <h5 className="font-medium text-lg">Email</h5>
                    <p className="text-gray-600">hello@eternalweddings.in</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-rose-400 mt-1" />
                  <div>
                    <h5 className="font-medium text-lg">Office</h5>
                    <p className="text-gray-600">42 Rajmahal Avenue, Jubilee Hills</p>
                    <p className="text-gray-600">Hyderabad, Telangana 500033, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-rose-400 mt-1" />
                  <div>
                    <h5 className="font-medium text-lg">Hours</h5>
                    <p className="text-gray-600">Monday - Saturday: 10am - 7pm</p>
                    <p className="text-gray-600">Sunday: 11am - 3pm (by appointment)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-rose-400 mt-1" />
                  <div>
                    <h5 className="font-medium text-lg">Consultations</h5>
                    <p className="text-gray-600">Available in-person or virtually</p>
                    <p className="text-gray-500 text-sm">Home visits available in select areas</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-rose-50 rounded-lg border border-rose-100">
                <p className="text-sm text-gray-600 italic">
                  We specialize in blending traditional Indian ceremonies with modern elements. 
                  From intimate South Indian weddings to grand Punjabi celebrations, we create 
                  personalized experiences that honor your cultural heritage.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h4 className="text-2xl font-semibold mb-6">Send Us a Message</h4>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                      placeholder="John & Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Wedding Date (if known)</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                  >
                    <option value="Full Planning">Full Planning</option>
                    <option value="Partial Planning">Partial Planning</option>
                    <option value="Day-of Coordination">Day-of Coordination</option>
                    <option value="Traditional Indian Wedding">Traditional Indian Wedding</option>
                    <option value="Destination Wedding in India">Destination Wedding in India</option>
                    <option value="Pre-Wedding Ceremonies">Pre-Wedding Ceremonies</option>
                    <option value="Mehndi & Sangeet Planning">Mehndi & Sangeet Planning</option>
                    <option value="Vendor Management">Vendor Management</option>
                    <option value="Photography Package">Photography Package</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-colors"
                    placeholder="Tell us about your dream wedding... Any specific traditions, venues, or themes you have in mind?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-rose-400 text-white rounded-md hover:bg-rose-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import ContactForm from '../components/home/Contact';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin planning your dream wedding? Get in touch with our team today.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Timeline from '../components/home/Timeline';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Timeline />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
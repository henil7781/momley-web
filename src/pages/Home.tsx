import React from 'react';
import HeroCarousel from '../components/sections/HeroCarousel';
import ProductSection from '../components/sections/ProductSection';
import ScienceSection from '../components/sections/ScienceSection';
import FocusSection from '../components/sections/FocusSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import CorporateSection from '../components/sections/CorporateSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ProductSection />
      <ScienceSection />
      <FocusSection />
      <BlogSection />
      <TestimonialSection />
      <CorporateSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;

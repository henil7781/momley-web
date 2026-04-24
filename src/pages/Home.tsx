import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ProductSection from '../components/ProductSection';
import ScienceSection from '../components/ScienceSection';
import FocusSection from '../components/FocusSection';
import BlogSection from '../components/BlogSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import CorporateSection from '../components/CorporateSection';
const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ProductSection/>
      <ScienceSection/>
      <FocusSection/>
      <BlogSection/>
      <TestimonialSection/>
      <CorporateSection/>
      <FAQSection/>

      {/* Additional sections for Home */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Innovative Solutions for Life
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            At Momley AGS Life Science, we combine cutting-edge biotechnology with a deep understanding of human health to create products that make a difference.
          </p>
          <div className="mt-12 flex justify-center gap-6">
             <div className="h-1 w-20 bg-brand-pink rounded-full" />
          </div>
        </div>
        
        {/* Subtle background element */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-pink/5 blur-[120px] rounded-full" />
      </section>
    </>
  );
};

export default Home;

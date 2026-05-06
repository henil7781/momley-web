import React from 'react';
import GyncHero from '../components/sections/GyncHero';
import GynaeSafetySection from '../components/sections/GynaeSafetySection';
import GyncProductSection from '../components/sections/GyncProductSection';
import GyncBlogSection from '../components/sections/GyncBlogSection';
import GyncFAQSection from '../components/sections/GyncFAQSection';

const Gync: React.FC = () => {
  return (
    <div className="bg-white">
      <GyncHero />
      <GynaeSafetySection />
      <GyncProductSection />
      <GyncBlogSection />
      <GyncFAQSection />
    </div>
  );
};

export default Gync;

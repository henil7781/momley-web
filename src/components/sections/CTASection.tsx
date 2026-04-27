import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import BrandButton from '../ui/BrandButton';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          <SectionHeader 
            icon={Sparkles}
            sublabel="The Future of Care"
            title="Innovative Solutions for Life."
            description="At Momley AGS Life Science, we combine cutting-edge biotechnology with a deep understanding of human health."
            align="center"
          />

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
            <BrandButton variant="dark" icon={ArrowRight}>
               Our Global Story
            </BrandButton>
            <BrandButton variant="secondary">
               Contact Representative
            </BrandButton>
          </div>
          
          <div className="mt-16 flex justify-center gap-6">
             <div className="h-1 w-16 sm:w-20 bg-brand-pink/20 rounded-full" />
          </div>
        </div>
        
        {/* Subtle background element */}
        <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-brand-pink/5 blur-[80px] sm:blur-[120px] rounded-full" />
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 blur-[80px] sm:blur-[120px] rounded-full shadow-inner" />
    </section>
  );
};

export default CTASection;

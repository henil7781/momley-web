import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  icon: React.ElementType;
  sublabel: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  accentColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  sublabel, 
  title, 
  description, 
  align = 'left',
  accentColor = 'text-brand-pink'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col lg:flex-row ${isCenter ? 'lg:flex-col lg:items-center text-center' : 'lg:items-end'} justify-between gap-10 mb-16 sm:mb-20 lg:mb-24`}>
      <div className={`space-y-6 ${isCenter ? 'flex flex-col items-center' : ''}`}>
        <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <div className={`p-2 rounded-lg bg-slate-50 flex items-center justify-center`}>
            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${accentColor}`} />
          </div>
          <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            {sublabel}
          </h4>
        </div>
        
        <h2 className={`text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] ${isCenter ? 'max-w-4xl' : ''}`}>
          {title}
        </h2>
      </div>

      {description && (
        <div className={`${isCenter ? 'max-w-2xl' : 'lg:max-w-md'}`}>
          <p className={`text-slate-500 font-medium border-l-4 border-brand-pink pl-8 py-2 text-sm sm:text-lg leading-relaxed italic ${isCenter ? 'border-l-0 border-t-4 pt-6 mt-4 lg:mt-0' : ''}`}>
            "{description}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

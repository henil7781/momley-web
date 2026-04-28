import React from 'react';
import { motion } from 'framer-motion';

interface SciencePillarProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  accent: string;
  index: number;
}

const SciencePillar: React.FC<SciencePillarProps> = ({ 
  id, 
  icon, 
  title, 
  description, 
  color, 
  accent, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white border border-slate-100 p-8 sm:p-10 md:p-12 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
    >
      <div className={`mb-6 sm:mb-10 p-4 sm:p-5 rounded-2xl sm:rounded-3xl self-start ${color} ${accent} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
      </div>

      <div className="space-y-3 sm:space-y-4 flex-1">
        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-brand-pink transition-colors">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <span className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8 text-7xl sm:text-9xl font-black text-slate-100/60 select-none pointer-events-none">
        {id}
      </span>
    </motion.div>
  );
};

export default SciencePillar;

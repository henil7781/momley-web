import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ md: { x: 10 } }} // Disable hover movement on mobile to prevent layout flicker
      className="group bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-6 border border-slate-100 flex items-center gap-4 sm:gap-5 transition-all hover:shadow-xl hover:shadow-slate-100"
    >
      <div className="relative shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md" 
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-brand-pink rounded-full border-2 border-white flex items-center justify-center">
          <Award className="w-2.5 h-2.5 sm:w-3 h-3 text-white" />
        </div>
      </div>
      <div className="space-y-1 min-w-0">
        <h5 className="font-black text-slate-900 leading-none tracking-tighter text-base sm:text-lg truncate">
          {name}
        </h5>
        <span className="inline-block px-2 sm:px-3 py-1 bg-slate-50 text-brand-pink text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-full border border-slate-100 truncate max-w-full">
          {role}
        </span>
      </div>
    </motion.div>
  );
};

export default LeaderCard;

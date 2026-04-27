import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  isFeatured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  image, 
  date, 
  readTime, 
  category, 
  isFeatured = false 
}) => {
  if (isFeatured) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex-1 lg:flex-[1.5] group cursor-pointer overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-white border border-slate-100 shadow-sm"
      >
        <motion.img 
          src={image} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-16 w-full space-y-4 sm:space-y-6 z-10">
          <div className="flex items-center gap-4 text-white/90 text-[10px] sm:text-xs font-black uppercase tracking-widest">
            <span className="bg-brand-pink text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">{category}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-pink" /> {date}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter italic">
            {title}
          </h2>
          <p className="text-white/70 text-xs sm:text-md max-w-xl font-light leading-relaxed line-clamp-2">
            {description}
          </p>
          <button className="flex items-center gap-2 sm:gap-3 bg-white text-slate-900 px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-sm hover:bg-brand-pink hover:text-white transition-all transform active:scale-95 group">
            Read Full Journal
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex-1 group cursor-pointer overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-white border border-slate-100 shadow-sm"
    >
      <motion.img 
        src={image} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        alt={title}
      />
      <div className="absolute inset-0 bg-slate-900/70 transition-opacity duration-500 group-hover:bg-slate-900/80" />
      
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12 space-y-3 sm:space-y-4 z-10">
        <div className="flex items-center gap-3 text-white/80 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
          <span className="text-brand-pink">{category}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter leading-none group-hover:text-brand-pink transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm max-w-sm font-medium line-clamp-1 group-hover:line-clamp-none transition-all duration-500">
          {description}
        </p>
        <button className="flex items-center gap-2 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] border-b-2 border-brand-pink/50 pb-1 w-fit group-hover:border-brand-pink group-hover:translate-x-2 transition-all">
          Explore <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;

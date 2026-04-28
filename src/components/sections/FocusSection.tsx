import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const FOCUS_AREAS = [
  {
    id: 'pediatric',
    title: 'Pediatric Excellence',
    subtitle: 'Nurturing the Future',
    description: 'Specialized solutions for neonatal and infant care, focusing on vitamin supplementation, growth markers, and immunity boosters with 100% safety standards.',
    image: 'https://images.unsplash.com/photo-1632053003385-245d2569568a?q=80&w=869&auto=format&fit=crop',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    tags: ['Neonatal Safety', 'Growth Formula', 'Immune Support'],
    position: 'object-center' 
  },
  {
    id: 'gynecology',
    title: 'Maternal Wellness',
    subtitle: 'Gynecology & Beyond',
    description: 'Empowering women through every stage of motherhood. Our formulations support prenatal health, lactation, and postnatal recovery for comprehensive maternal well-being.',
    image: 'https://t3.ftcdn.net/jpg/15/94/24/06/240_F_1594240684_mLDbQPMAauomZaHKVDgdzLTnVdQctp7n.jpg', 
    color: 'bg-pink-50',
    accent: 'text-brand-pink',
    tags: ['Prenatal Care', 'Lactation Support', 'Postnatal Health'],
    position: 'object-top' 
  }
];

const FocusSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center py-16 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ── BACKGROUND DECOR ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-400/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-pink/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <SectionHeader 
          icon={Activity}
          sublabel="Core Specialties"
          title={<>Our Primary <br /> <span className="text-slate-400">Focus.</span></>}
          align="center"
          accentColor="text-brand-pink"
        />
      </div>

      {/* ── DUAL FOCUS BENTO GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl">
        {FOCUS_AREAS.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-[500px] sm:h-[650px] md:h-[750px] lg:h-[780px] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-white border border-slate-100 flex flex-col hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-[55%] sm:h-[65%] w-full overflow-hidden p-3 sm:p-6 pb-0">
              {/* Internal Image Frame */}
              <motion.div className="w-full h-full overflow-hidden rounded-[2rem] sm:rounded-[2.8rem] shadow-sm relative bg-slate-50">
                <motion.img 
                  src={area.image}
                  alt={area.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`w-full h-full object-cover ${area.position}`}
                />
              </motion.div>
            </div>

            {/* Content Bottom */}
            <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between relative z-10 bg-white">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] mb-1 sm:mb-2 ${area.accent}`}>
                    {area.subtitle}
                  </p>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-brand-pink transition-colors duration-300">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-base text-slate-500 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {area.description}
                </p>
              </div>

              {/* Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-8 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {area.tags.slice(0, 2).map(tag => ( // Show only 2 tags on mobile to avoid row break
                    <span key={tag} className="text-[8px] sm:text-[10px] font-bold bg-slate-50 text-slate-400 border border-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                  <span className="hidden sm:inline-block text-[10px] font-bold bg-slate-50 text-slate-400 border border-slate-100 px-4 py-2 rounded-full uppercase tracking-tighter">
                    {area.tags[2]}
                  </span>
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-black ${area.accent} uppercase tracking-widest active:scale-95 transition-all`}
                >
                  Explore <ChevronRight className="w-3 h-3 sm:w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FocusSection;
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, FlaskConical, Atom, Microscope } from 'lucide-react';

// Data defining the core pillars of Momley's scientific approach
const SCIENCE_PILLARS = [
  {
    id: 1,
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'Neonatal Safety First',
    description: 'Every drop is formulated for zero compromise on delicate infant systems.',
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    id: 2,
    icon: <Atom className="w-8 h-8" />,
    title: 'Precision Dosage Tech',
    description: 'Advanced delivery systems ensure exact therapeutic levels, every time.',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    id: 3,
    icon: <Leaf className="w-8 h-8" />,
    title: 'Purest Sourcing',
    description: 'WHO-GMP certified active ingredients, free from contaminants and heavy metals.',
    color: 'bg-orange-50',
    accent: 'text-orange-600',
  },
];

const ScienceSection = () => {
  // Parallax effect: The large laboratory background shifts slightly as you scroll
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="relative min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center py-28 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ── BACKGROUND VISUALS ── */}
      {/* Animated deep blue glow to counter the pink grid glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Large Parallax Image (Background focus) */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-15"
      >
        <img 
          src="/science_lab_bokeh.jpg" // Use a blurry, high-end laboratory photo here
          alt="Science Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-slate-50" />
      </motion.div>

      {/* ── HEADER SECTION ── */}
      <div className="relative z-10 w-full max-w-7xl mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 text-center lg:text-left"
        >
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Microscope className="w-5 h-5 text-brand-pink" />
              <h2 className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase">Our Research Core</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              The Science <br /> Behind <span className="text-slate-400">Purity.</span>
            </h3>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-slate-500 font-medium leading-relaxed italic border-l-2 border-brand-pink pl-6 py-2">
              "We don't just formulate; we innovate to safeguard the most vulnerable. From maternal care to neonatal wellness, our science is driven by compassion."
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── SCIENCE PILLARS (BENTO LAYOUT) ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {SCIENCE_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[3rem] overflow-hidden bg-white border border-slate-100 p-12 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
          >
            {/* The Pillar Icon - prominent */}
            <div className={`mb-10 p-5 rounded-3xl self-start ${pillar.color} ${pillar.accent} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
              {pillar.icon}
            </div>

            {/* Content with premium typography */}
            <div className="space-y-4 flex-1">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-brand-pink transition-colors">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {pillar.description}
              </p>
            </div>

            {/* Subtle background number/symbol (like in bento UI) */}
            <span className="absolute bottom-6 right-8 text-9xl font-black text-slate-100/60 select-none">
              {pillar.id}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScienceSection;
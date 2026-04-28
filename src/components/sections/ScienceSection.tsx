import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, FlaskConical, Atom, Microscope } from 'lucide-react';
import SciencePillar from '../ui/SciencePillar';
import SectionHeader from '../ui/SectionHeader';

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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="relative min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* BACKGROUND VISUALS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-15">
        <img 
          src="/science_lab_bokeh.jpg" 
          alt="Science Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-slate-50" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl">
        <SectionHeader 
          icon={Microscope}
          sublabel="Our Research Core"
          title={<>The Science <br /> Behind <span className="text-slate-400">Purity.</span></>}
          description="We don't just formulate; we innovate to safeguard the most vulnerable. From maternal care to neonatal wellness, our science is driven by compassion."
          accentColor="text-brand-pink"
        />
      </div>

      {/* SCIENCE PILLARS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {SCIENCE_PILLARS.map((pillar, index) => (
          <SciencePillar key={pillar.id} {...pillar} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ScienceSection;
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Droplets, Ban, ShieldAlert, FlaskConical, Leaf, Plus } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface ExclusionCardProps {
  item: {
    icon: any;
    label: string;
    sub: string;
    desc: string;
  };
  index: number;
}

const ExclusionCard: React.FC<ExclusionCardProps> = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 cursor-default overflow-hidden"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Floating Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/[0.04] blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-pink/[0.1] transition-all" />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-8 relative inline-block">
          {/* Animated Glow behind icon */}
          <div className="absolute inset-0 bg-brand-pink/20 blur-2xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative w-20 h-20 bg-slate-50 rounded-[1.7rem] flex items-center justify-center shadow-inner border border-slate-100 group-hover:border-brand-pink/30 group-hover:bg-white transition-all duration-500 overflow-hidden">
            <item.icon className="w-9 h-9 text-slate-400 group-hover:text-brand-pink transition-all duration-500 transform group-hover:scale-110" />
            
            {/* Absolute Ban Icon Overlay */}
            <div className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm border border-slate-50">
                <Ban className="w-3.5 h-3.5 text-brand-pink" />
            </div>

            {/* Subtle light sweep */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/40 group-hover:bg-brand-pink transition-colors" />
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-pink transition-colors">
              {item.sub}
            </h3>
          </div>
          
          <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            {item.label}
          </p>
          
          <div className="pt-2 overflow-hidden">
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
      
      {/* Aesthetic Plus Decor */}
      <Plus className="absolute bottom-6 right-6 w-5 h-5 text-slate-100 group-hover:text-brand-pink/20 transition-colors" />
    </motion.div>
  );
};

const PediaCleanLabel: React.FC = () => {
  const exclusions = [
    {
      icon: Droplets,
      label: "No Ethanol",
      sub: "Zero Alcohol Base",
      desc: "Protects delicate hepatic pathways and maintains hydration."
    },
    {
      icon: FlaskConical,
      label: "No Parabens",
      sub: "Preservative Free",
      desc: "Eliminates risk of endocrine disruption in newborns."
    },
    {
      icon: ShieldAlert,
      label: "No Artificial Colors",
      sub: "Pure Formulation",
      desc: "Prevents allergen-induced sensitivity and hyperactivity."
    },
    {
      icon: Leaf,
      label: "Gluten Free",
      sub: "Allergen Safe",
      desc: "Safe for sensitive infants with Celiac predisposition."
    }
  ];

  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionHeader 
          icon={ShieldAlert}
          sublabel="Purity Standard"
          title={<>The <span className="text-slate-400">Clean Label</span> <br /> Pledge.</>}
          description="In pediatric medicine, what we exclude is just as vital as what we include. We define safety by the total absence of compromise."
          accentColor="text-brand-pink"
        />

        {/* Exclusion Icon Grid with Mouse Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-[1000px]">
          {exclusions.map((item, i) => (
            <ExclusionCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* High-End Technical Footer */}
        <div className="mt-20 flex justify-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
            >
                <div className="absolute inset-0 bg-brand-pink/20 blur-xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
                <div className="relative inline-flex items-center gap-5 px-10 py-5 bg-slate-900 rounded-full border border-white/10 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                        <div className="w-1 h-3 bg-white/20 rounded-full" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                        100% Medical Grade Compliance <span className="text-white/40 font-black px-2 mb-0.5">•</span> Neonatal Metabolic Protocols 
                    </span>
                    
                    {/* Interior Shimmer */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PediaCleanLabel;

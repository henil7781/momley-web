import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Heart, Activity, ShieldCheck, Zap, ArrowRight, Star, Globe } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import BrandButton from '../ui/BrandButton';

const MILESTONES = [
  {
    age: "01",
    label: "0-28 Days",
    phase: "Neonatal Phase",
    title: "Metabolic Gatekeeper.",
    desc: "Crucial intervention for prevention of Vitamin K Deficiency Bleeding and establishing early skeletal health.",
    products: ["Kidk1 Vitamin K1", "MVIT D3 Sachet"],
    gradient: "from-blue-400 to-blue-600",
    accent: "bg-blue-50"
  },
  {
    age: "02",
    label: "1-6 Months",
    phase: "Infancy Phase",
    title: "Digestive Balance.",
    desc: "Supporting the delicate microbiome and ensuring emergency management during critical early-stage vulnerabilities.",
    products: ["Dual Flora Suspension", "Kidk10 Vitamin K1"],
    gradient: "from-brand-pink to-rose-500",
    accent: "bg-pink-50"
  },
  {
    age: "03",
    label: "6-12 Months",
    phase: "Developing Phase",
    title: "Systemic Immunity.",
    desc: "Providing high-bioavailability liposomal iron to build red blood cells and holistic support for GI disorders.",
    products: ["LipoFez Suspension", "MomXaa Syrup"],
    gradient: "from-emerald-400 to-emerald-600",
    accent: "bg-emerald-50"
  },
  {
    age: "04",
    label: "1-3 Years",
    phase: "Toddler Phase",
    title: "Allergy Defense.",
    desc: "Clinical-grade relief for recurrent allergies, asthma symptoms, and seasonal rhinitis with mouth-dissolving ease.",
    products: ["Kidzine Syrup", "Kid LC Tablet"],
    gradient: "from-orange-400 to-amber-600",
    accent: "bg-orange-50"
  }
];

const MilestoneCard = ({ step, index }: { step: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-32 last:mb-0`}>

      {/* Node Decor */}
      <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`w-12 h-12 rounded-full bg-white border-[6px] border-slate-50 flex items-center justify-center shadow-xl`}
        >
          <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${step.gradient} animate-pulse`} />
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-32 lg:text-right' : 'lg:pl-32 lg:text-left'} text-center lg:text-inherit`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 justify-center lg:justify-start lg:flex-row-reverse">
            <span className={`text-6xl font-black opacity-10 bg-clip-text text-transparent bg-gradient-to-b ${step.gradient} leading-none`}>
              {step.age}
            </span>
            <div className={`h-px w-12 bg-gradient-to-r ${isEven ? 'from-transparent to-slate-200' : 'from-slate-200 to-transparent'}`} />
          </div>

          <div className="space-y-2">
            <h5 className="text-[10px] font-black uppercase text-brand-pink tracking-[0.3em]">{step.phase}</h5>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">
              {step.title}
            </h3>
          </div>

          <p className={`text-slate-500 font-medium text-lg leading-relaxed max-w-md ${isEven ? 'lg:ml-auto' : ''}`}>
            {step.desc}
          </p>

          <div className={`flex items-center gap-3 justify-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
            <div className={`px-4 py-2 rounded-full ${step.accent} border border-slate-100 flex items-center gap-2`}>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-tr ${step.gradient}`} />
              <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">{step.label}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Visualization Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full lg:w-1/2 flex justify-center ${isEven ? 'lg:pl-32' : 'lg:pr-32'} mt-12 lg:mt-0`}
      >
        <div className="relative w-full max-w-sm group">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-2xl rounded-[4rem] border border-white/40 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-pink-500/10" />


          <div className="relative p-12 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Therapeutic Focus</span>
            </div>

            <div className="space-y-4">
              {step.products.map((product: string, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-transparent hover:border-slate-100 transition-all cursor-default"
                >
                  <span className="text-xl font-black text-slate-900 tracking-tight">{product}</span>
                  <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-brand-pink transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(j => (
                  <div key={j} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                ))}
              </div>
              <span className="text-[9px] font-black uppercase text-slate-400">Trusted by specialists</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PediaMilestoneSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-pink/[0.04] blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[140px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionHeader 
            icon={Globe}
            sublabel="Clinical Continuity"
            title={<>Mapping The First <br /><span className="text-slate-400 underline decoration-brand-pink/20">1,000 Days.</span></>}
            description="A clinical blueprint engineered for every developmental phase."
            accentColor="text-brand-pink"
        />

        {/* Timeline Container */}
        <div className="relative">

          {/* Progress Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-slate-100/50 -translate-x-1/2 hidden lg:block rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-brand-pink via-blue-500 to-emerald-500"
            />
          </div>

          {/* Render Cards */}
          <div className="space-y-0">
            {MILESTONES.map((step, i) => (
              <MilestoneCard key={i} step={step} index={i} />
            ))}
          </div>

        </div>

        {/* Global Success Banner */}
        <div className="mt-48 flex justify-center">
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-slate-900 px-12 py-8 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-10 border border-white/10"
          >
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-black text-4xl tracking-tighter">98.4%</span>
              <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Neonatal Success Rate</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <p className="text-white/80 text-center md:text-left font-medium max-w-sm leading-relaxed">
              Momley formulations are trusted across 40+ countries by leading pediatricians and hospitals.
            </p>
            <BrandButton 
              variant="secondary"
              className="whitespace-nowrap"
              onClick={() => {}}
            >
              Institutional Reach
            </BrandButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PediaMilestoneSection;

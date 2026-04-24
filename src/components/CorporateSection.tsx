import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Heart, Award, ChevronRight, Target } from 'lucide-react';

interface Leader {
  name: string;
  role: string;
  image: string;
}

const LEADERS: Leader[] = [
  { 
    name: 'Mr. Sandeep Shah', 
    role: 'Director of Company', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' 
  },
  { 
    name: 'Mr. Akhilesh Singh', 
    role: 'Regional Director', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' 
  },
  { 
    name: 'Mr. Gopal Madiyar', 
    role: 'Regional Director', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' 
  },
];

const CorporateSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ── HEADER ── */}
      <div className="relative z-10 w-full max-w-7xl mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-pink" />
            <h2 className="text-brand-pink font-bold tracking-[0.3em] text-[10px] uppercase">Corporate Identity</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Ethics Behind <br /> <span className="text-slate-400 italic">The Science.</span>
          </h3>
        </motion.div>
      </div>

      {/* ── MAIN CORPORATE GRID ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
        
        {/* 1. MISSION & VISION (Large Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:col-span-8 bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden"
        >
          <Target className="absolute top-[-20px] right-[-20px] w-64 h-64 text-white/5 rotate-12" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h4 className="text-brand-pink font-black uppercase tracking-widest text-sm flex items-center gap-2">
                <Globe className="w-4 h-4" /> Our 2030 Vision
              </h4>
              <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1]">
                To become the global gold standard in <span className="text-brand-pink">neonatal safety</span> and maternal nutritional recovery.
              </p>
            </div>
            <p className="text-white/60 text-lg font-medium max-w-2xl leading-relaxed">
              Our mission is to bridge the gap between technical pharmaceutical excellence and compassionate healthcare, ensuring every child starts life with clinical-grade support.
            </p>
          </div>

          <div className="relative z-10 pt-12 flex flex-wrap gap-10 border-t border-white/10 mt-12">
            <div className="space-y-1">
              <p className="text-brand-pink text-4xl font-black italic">12+</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Countries Reached</p>
            </div>
            <div className="space-y-1">
              <p className="text-brand-pink text-4xl font-black italic">100%</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Safety Compliance</p>
            </div>
          </div>
        </motion.div>

        {/* 2. LEADERSHIP PREVIEW (Tailored for exactly 3 people) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          {/* Section Label Card */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-brand-pink" />
              <h4 className="text-slate-900 font-black uppercase tracking-tighter text-xl italic leading-none">The Minds</h4>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </div>

          {/* Leaders Stack */}
          <div className="flex-1 flex flex-col gap-4">
            {LEADERS.map((leader, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 flex items-center gap-5 transition-all hover:shadow-xl hover:shadow-slate-100"
              >
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-20 h-20 rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-pink rounded-full border-2 border-white flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-black text-slate-900 leading-none tracking-tighter text-lg">
                    {leader.name}
                  </h5>
                  <span className="inline-block px-3 py-1 bg-slate-50 text-brand-pink text-[9px] font-black uppercase tracking-widest rounded-full border border-slate-100">
                    {leader.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. CSR / COMPASSIONATE CARE (Bottom Row) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-12 group relative rounded-[3.5rem] overflow-hidden bg-white border border-slate-100 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-700"
        >
          <div className="relative w-full md:w-1/3 h-72 rounded-[3rem] overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               alt="CSR Initiative"
             />
             <div className="absolute inset-0 bg-brand-pink/10 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-50 rounded-2xl">
                <Heart className="w-6 h-6 text-brand-pink animate-pulse" />
              </div>
              <h4 className="text-4xl font-black text-slate-900 tracking-tighter">Momley <span className="italic text-slate-400">Foundation.</span></h4>
            </div>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-3xl">
              Medicine is a human right. Through our **"Safe Start"** initiative, we organize monthly health camps in rural Ahmedabad, providing free pediatric nutrition guides and supplements to under-served communities.
            </p>
            <div className="flex gap-3 pt-2">
               <span className="text-[10px] font-bold bg-slate-50 px-5 py-2.5 rounded-full uppercase tracking-widest text-slate-500 border border-slate-100">Nutrition Camps</span>
               <span className="text-[10px] font-bold bg-slate-50 px-5 py-2.5 rounded-full uppercase tracking-widest text-slate-500 border border-slate-100">Rural Support</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CorporateSection;
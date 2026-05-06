import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ShieldCheck, Smile, Zap, Microscope, Droplets } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const PediaAbout: React.FC = () => {
  const values = [
    {
      icon: Droplets,
      title: "Zero-Alcohol Base",
      desc: "100% Ethanol-free formulations to protect developing hepatic functions.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Zap,
      title: "Peak Bioavailability",
      desc: "Engineered for rapid absorption to match infant metabolic rates.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Smile,
      title: "Palatability Focus",
      desc: "Doctor-approved flavors to ensure zero medicine refusal.",
      color: "text-brand-pink",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="relative py-24 lg:py-0 min-h-screen flex items-center px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
      {/* Background Glows (Matching Home Design) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-8 lg:py-12">

        <SectionHeader
          icon={Microscope}
          sublabel="The First 1,000 Days"
          title={<>Pediatric  <span className="text-slate-400">Engineering.</span></>}
          accentColor="text-brand-pink"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT: High-End Clinical Visual (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group min-h-[400px] lg:h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
          >
            <img
              src="assets/pedia/pedia_about.png"
              alt="High-precision laboratory"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                <Microscope className="text-white w-6 h-6" />
              </div>
              <p className="text-white font-bold text-sm leading-snug">
                Advanced Lab Protocols <br /> <span className="font-normal opacity-70">Ahmedabad R&D Wing</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Intelligence & Core Values (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Core Narrative Card (Full Width in Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 lg:p-10 bg-slate-50 border border-slate-100 rounded-[3rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 lg:p-10 opacity-[0.03] rotate-12">
                <Beaker className="w-56 h-56" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter mb-4">Precision over Protocol</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-brand-pink pl-8">
                An infant's metabolism is not just smaller—it's different. We engineer every dose to ensure it matches the fragile metabolic pathway of a newborn, ensuring zero compromise on safety.
              </p>
            </motion.div>

            {/* Value Cards */}
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 lg:p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className={`${val.bg} ${val.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <val.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-slate-900 tracking-tight mb-3">{val.title}</h4>
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}

            {/* Trust Stamp Bento */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 lg:p-8 bg-brand-pink rounded-[2.5rem] flex flex-col justify-center items-center text-center space-y-4 shadow-xl shadow-pink-500/10"
            >
              <ShieldCheck className="text-white w-12 h-12" />
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-white/60 tracking-widest leading-none">Compliance</p>
                <p className="text-xl font-black text-white uppercase tracking-tighter">WHO-GMP Certified</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PediaAbout;

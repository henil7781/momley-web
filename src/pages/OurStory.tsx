import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, Users, Activity, Target, Eye, Calendar } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const OurStory: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const coreValues = [
    { icon: Sparkles, title: "Quality & Innovation", desc: "Pushing boundaries in pharmaceutical excellence." },
    { icon: ShieldCheck, title: "Ethical Promotion", desc: "Built on a foundation of integrity and transparency." },
    { icon: Heart, title: "Customer Commitment", desc: "Trust earned from doctors, pharmacists, and patients." },
    { icon: Users, title: "Teamwork & Growth", desc: "A dedicated field force committed to excellence." },
    { icon: Activity, title: "Patient-Centric Approach", desc: "Improving everyday lives through focused care." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Products/story_hero.png"
            alt="Innovation Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-pink/10 border border-brand-pink/20">
              <Calendar className="w-4 h-4 text-brand-pink" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink">Established February 2019</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Our <span className="text-brand-pink">Story.</span>
            </h1>
            <p className="max-w-2xl text-slate-500 font-medium text-lg md:text-xl leading-relaxed">
              With a vision to make healthcare more accessible, effective, and trusted, our journey began with a strong commitment towards quality and patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              From the very beginning, we have focused on delivering innovative and affordable healthcare solutions that improve everyday lives.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Over the years, we have built our presence through ethical business practices, strong doctor relationships, and a dedicated field force committed to excellence. Our portfolio is designed to meet the evolving needs of healthcare professionals and patients across multiple therapeutic segments.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We believe that success in healthcare is not only measured by products, but by the trust we earn from doctors, distributors, pharmacists, and patients. This trust motivates us to continuously upgrade our standards, embrace innovation, and expand our reach.
            </p>
            <div className="pt-6">
              <p className="text-brand-pink font-black text-2xl tracking-tight italic">
                "Contributing towards a healthier and better tomorrow."
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-brand-pink/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
            <img
              src="/Products/story_narrative.png"
              alt="Care Visualization"
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border border-white/20"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision - Pedia & Gync Focus */}
      <section className="py-24 bg-slate-50 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission - Pedia Focus */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex p-4 rounded-3xl bg-blue-50 text-blue-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                To provide high-quality, affordable, and innovative pharmaceutical products that enhance patient wellbeing and support healthcare professionals in delivering better treatment outcomes, with a special focus on <span className="text-blue-500">Pediatric excellence.</span>
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl h-64 md:h-full">
              <img
                src="/Products/story_pedia.png"
                alt="Pediatric Mission"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Vision - Gync Focus */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex p-4 rounded-3xl bg-brand-pink/5 text-brand-pink">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                To become a trusted and fast-growing pharmaceutical company recognized for quality, integrity, and healthcare excellence in <span className="text-brand-pink">Gynecology and Maternal wellness.</span>
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl h-64 md:h-full">
              <img
                src="/Products/story_gync.png"
                alt="Maternal Vision"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        <SectionHeader
          icon={Activity}
          sublabel="The Momley DNA"
          title={<>Our Core <span className="text-slate-400">Values.</span></>}
          description="The principles that guide every decision we make since our establishment in 2019."
          accentColor="text-brand-pink"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-brand-pink/5 transition-all text-center flex flex-col items-center gap-4"
            >
              <div className="p-4 rounded-2xl bg-brand-pink/5 text-brand-pink">
                <value.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight">{value.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurStory;

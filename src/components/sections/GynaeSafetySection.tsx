import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Dna, Target, Sparkles, FlaskConical, Heart, Droplets, Activity } from 'lucide-react';

const SafetyPillars = [
    { title: "Bio-Compatible Ingredients", icon: Dna, desc: "High-purity, bio-available compounds that align with natural maternal metabolic pathways, reducing systemic stress." },
    { title: "Teratogenic Safety", icon: ShieldCheck, desc: "Rigorous screening protocols ensuring absolute zero risk of developmental interference during pregnancy." },
    { title: "Clinical Validation", icon: FlaskConical, desc: "Our products are validated through multi-phase trials and real-world evidence in maternal health outcomes." },
    { title: "Targeted Delivery", icon: Target, desc: "Advanced life-science technology that delivers nutrients exactly where they are needed, minimizing side effects." },
];

const Ingredients = [
    { name: "Folate (Methylated)", reason: "Prevents neural tube defects. We use the active form for 99% absorption.", icon: Activity },
    { name: "DHA (Algal Source)", reason: "Critical for fetal brain development, filtered for zero heavy metals.", icon: Droplets },
    { name: "Iron (Gentle Chelate)", reason: "Supports maternal blood volume without the gastric distress of standard iron.", icon: ShieldCheck },
];

const GynaeSafetySection: React.FC = () => {
    return (
        <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FDFDFD]">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* ── HEADER ── */}
                <div className="text-center space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">Uncompromising Safety, Proven Efficacy</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter max-w-2xl mx-auto">
                        Because the health of two depends on the precision of one.
                    </h2>
                </div>

                {/* ── BENTO GRID ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SafetyPillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-pink/20 hover:shadow-xl hover:shadow-brand-pink/5 transition-all"
                        >
                            <pillar.icon className="w-8 h-8 text-brand-pink mb-6" />
                            <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{pillar.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── SCIENCE MEETS EMPATHY BLOCK ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-12 lg:p-20 bg-slate-900 rounded-[3.5rem] overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <Heart className="text-brand-pink w-12 h-12" />
                        <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl leading-relaxed italic">
                            "At Momley AGS Life Science, we understand that pregnancy isn't just a medical condition; it’s a life-defining journey. We don't just follow standards—we set them."
                        </p>
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                            <Sparkles className="w-4 h-4" /> Molecular Biology Meets Maternal Empathy
                        </div>
                    </div>
                </motion.div>

                {/* ── INGREDIENT TRANSPARENCY (Interactive) ── */}
                <div className="space-y-10">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter text-center md:text-left">Transparency Lab: Why we choose our ingredients</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Ingredients.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white border border-slate-200 p-8 rounded-[2.5rem] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background glow effect on hover */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:bg-brand-pink/20 transition-colors duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-pink group-hover:scale-110 transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-brand-pink">
                                            <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-sm font-black text-slate-200 group-hover:text-brand-pink transition-colors">0{i + 1}</span>
                                    </div>

                                    <h4 className="text-xl font-black text-slate-900 group-hover:text-brand-pink transition-colors duration-500">
                                        {item.name}
                                    </h4>
                                    
                                    {/* Animated Divider */}
                                    <div className="w-8 h-1 bg-slate-200 my-5 group-hover:w-full group-hover:bg-brand-pink/30 transition-all duration-700 ease-in-out" />

                                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                                        {item.reason}
                                    </p>
                                </div>

                                {/* Verified Stamp */}
                                <div className="absolute bottom-8 right-8 flex items-center gap-2 text-brand-pink text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <span className="w-4 h-[2px] bg-brand-pink"></span>
                                    PURE
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── TRUST BADGES ── */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-t border-slate-100 pt-16 grayscale opacity-60">
                    {['GMP Certified', 'Clinically Proven', 'Non-GMO', 'Physician Recommended'].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-slate-900" />
                            <span className="text-xs font-black uppercase tracking-widest text-slate-900">{badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GynaeSafetySection;

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Activity, ShieldCheck, ArrowRight, Heart, Star, Sparkles } from 'lucide-react';
import BrandButton from '../ui/BrandButton';

const PediaHero: React.FC = () => {


    return (
        <section className="relative min-h-screen lg:min-h-[95vh] w-full bg-[#FDFDFD] flex items-center pt-16 lg:pt-16 overflow-hidden">

            {/* ── BACKGROUND AMBIANCE ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/[0.04] blur-[100px] md:blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-pink/[0.04] blur-[100px] md:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 items-center z-10">

                {/* ── LEFT SIDE: RELATABLE PEDIATRIC TEXT ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-6 space-y-8 text-center lg:text-left pt-10"
                >
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">The First 1,000 Days</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 border border-pink-100 rounded-full">
                            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink">Neonatal Engineering</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                        Gentle Care. <br />
                        <span className="text-slate-400">Defined by Science.</span>
                    </h1>

                    <p className="text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed italic border-l-0 lg:border-l-4 border-brand-pink/20 lg:pl-6">
                        Protecting the fragile metabolisms of newborns with zero-alcohol, paraben-free formulations. We bridge clinical precision with a mother’s touch to support every growing milestone.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                        <BrandButton variant="dark" icon={ArrowRight} onClick={() => { }}>
                            View Pediatric Range
                        </BrandButton>
                        <BrandButton variant="secondary" onClick={() => { }}>
                            Clinical Trust
                        </BrandButton>
                    </div>
                </motion.div>

                {/* ── RIGHT SIDE: HUMAN ELEMENT ── */}
                <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] sm:h-[600px] lg:h-[700px] w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full h-[80%] lg:h-[90%] rounded-[4rem] sm:rounded-[6rem] lg:rounded-[10rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-slate-200"
                    >
                        <img
                            src="assets/pedia/pedia_hero.png"
                            alt="Pediatrician with healthy child"
                            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PediaHero;
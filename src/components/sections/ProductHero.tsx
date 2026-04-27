import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { Heart, Activity, ArrowRight } from 'lucide-react';

interface ProductHeroProps {
    isSearching: boolean;
}

const ProductHero: React.FC<ProductHeroProps> = ({ isSearching }) => {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, -150]);

    const backgroundCapsules = [
        { id: 1, top: '10%', left: '15%', size: 'w-12', delay: 0, opacity: 'opacity-80', speed: 0.2 },
        { id: 2, top: '25%', left: '5%', size: 'w-8', delay: 1.5, opacity: 'opacity-80', speed: 0.1 },
        { id: 3, top: '15%', right: '15%', size: 'w-16', delay: 1, opacity: 'opacity-80', speed: 0.3 },
        { id: 4, top: '5%', right: '35%', size: 'w-10', delay: 0.5, opacity: 'opacity-80', speed: 0.15 },
        { id: 5, bottom: '20%', left: '20%', size: 'w-14', delay: 2, opacity: 'opacity-30', speed: 0.25 },
        { id: 6, bottom: '10%', left: '35%', size: 'w-10', delay: 1.2, opacity: 'opacity-20', speed: 0.1 },
        { id: 7, bottom: '15%', right: '10%', size: 'w-20', delay: 0.5, opacity: 'opacity-30', speed: 0.4 },
        { id: 8, bottom: '30%', right: '25%', size: 'w-12', delay: 1.8, opacity: 'opacity-20', speed: 0.2 },
    ];

    // Magnetic Button Logic
    const btnRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

        if (dist < 100) {
            x.set((e.clientX - centerX) * 0.4);
            y.set((e.clientY - centerY) * 0.4);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative min-h-screen w-full bg-[#F8FAFC] flex items-center pt-24 lg:pt-18 overflow-hidden">

            {/* ── BACKGROUND AMBIANCE ── */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-400/10 blur-[80px] lg:blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-pink/10 blur-[80px] lg:blur-[120px] rounded-full" />
            </div>

            {backgroundCapsules.map((cap) => (
                <motion.img
                    key={cap.id}
                    src="/assets/smiley-capsule.png"
                    className={`absolute ${cap.size} h-auto ${cap.opacity} pointer-events-none z-0`}
                    style={{
                        top: cap.top,
                        left: cap.left,
                        right: cap.right,
                        bottom: cap.bottom,
                        y: yParallax
                    }}
                    animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: cap.delay, ease: "easeInOut" }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-40 items-center z-10">

                {/* ── LEFT SIDE CONTENT ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8 lg:space-y-8 text-center lg:text-left"
                >
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-100 shadow-sm">
                            <Activity className="w-3.5 h-3.5 text-blue-500" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Maternal</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-100 shadow-sm">
                            <Heart className="w-3.5 h-3.5 text-brand-pink" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Neonatal</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[0.9] lg:leading-[0.85] tracking-tighter">
                        Clinical <br className="hidden lg:block" />
                        <span className="text-brand-pink">Intelligence.</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                        Explore our research-backed pharmaceutical catalog covering <span className="text-slate-900 font-bold underline decoration-blue-500/30">Neonatal Safety</span> and <span className="text-slate-900 font-bold underline decoration-brand-pink/30">Maternal Wellness</span>.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <motion.button
                            ref={btnRef}
                            style={{ x: mouseX, y: mouseY }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
                            className="group relative overflow-hidden flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 active:scale-95 transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-4">
                                <span>Explore Formulations</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Shimmer Overlay */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.8,
                                    repeatDelay: 4.2,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0"
                            />
                        </motion.button>
                    </div>
                </motion.div>

                {/* ── RIGHT SIDE: MASCOT ── */}
                <div className="relative flex justify-center items-center h-[200px] sm:h-[300px] lg:h-[500px] w-full lg:translate-x-12">
                    <div className="absolute w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-500/5 blur-[100px] lg:blur-[150px] rounded-full translate-x-5 lg:translate-x-10" />
                    <div className="absolute w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-pink/10 blur-[100px] lg:blur-[150px] rounded-full -translate-x-5 lg:-translate-x-10" />

                    <motion.div
                        className="relative z-20"
                        animate={isSearching ? {
                            y: [0, -30, 0],
                            rotate: [0, 5, -5, 0],
                            scale: 1.1
                        } : {
                            y: [0, -20, 0],
                            rotate: [0, 3, -3, 0]
                        }}
                        transition={isSearching ? {
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        } : {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ rotate: [0, -3, 3, -3, 3, 0], scale: 1.05 }}
                    >
                        <img
                            src="/assets/smiley-capsule.png"
                            alt="Happy Momley Capsule"
                            className="w-[240px] sm:w-[320px] lg:w-[400px] h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.1)]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
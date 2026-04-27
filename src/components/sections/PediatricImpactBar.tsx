import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ShieldCheck, Zap, Plus } from 'lucide-react';

const PediatricImpactBar: React.FC = () => {
    const metrics = [
        { 
            icon: Beaker, 
            value: '15+', 
            label: 'Pediatric Formulations', 
            color: 'text-blue-500' 
        },
        { 
            icon: ShieldCheck, 
            value: 'Certified', 
            label: 'WHO-GMP Facilities', 
            color: 'text-emerald-500' 
        },
        { 
            icon: Zap, 
            value: 'Optimized', 
            label: 'Infant Metabolism Safety', 
            color: 'text-brand-pink' 
        },
    ];

    return (
        <section className="relative w-full bg-white py-12 px-6 sm:px-12 lg:px-24 z-20 border-b border-slate-100">
            <div className="max-w-7xl mx-auto bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2rem] shadow-inner relative overflow-hidden">
                
                {/* Background Decor cross */}
                <div className="absolute top-0 right-0 w-32 h-32 text-slate-100 rotate-12 -mt-16 -mr-16">
                    <Plus className="w-full h-full" strokeWidth={0.5} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {metrics.map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`flex items-start gap-5 ${i !== metrics.length - 1 ? 'md:border-r md:border-slate-100 md:pr-10' : ''}`}
                            >
                                <div className={`${metric.color} bg-white p-3 rounded-xl border border-slate-100 shadow-inner`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h5 className="text-4xl font-black text-slate-900 leading-none tracking-tighter truncate">
                                        {metric.value}
                                    </h5>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mt-2 leading-tight">
                                        {metric.label}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PediatricImpactBar;

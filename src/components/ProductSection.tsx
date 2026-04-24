import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'kidlc',
    name: 'Kid-LC',
    image: '/home/product_section/KidLc.png',
    category: 'Pediatric Care',
    description: 'Specialized formulation for pediatric wellness and metabolic support.',
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
    tag: 'Essential'
  },
  {
    id: 'kidzine',
    name: 'Kidzine AF',
    image: '/home/product_section/Kidzine.png',
    category: 'Relief Syrup',
    description: 'Phenylephrine HCl & Chlorpheniramine Maleate Syrup for targeted pediatric relief.',
    color: 'bg-orange-50',
    accent: 'text-orange-600',
    tag: 'Best Seller'
  },
  {
    id: 'momleylact',
    name: 'Momley-Lact',
    image: '/home/product_section/Momleylact.png',
    category: 'Maternal Health',
    description: 'Nutritional support designed specifically for lactation and maternal wellness.',
    color: 'bg-pink-50',
    accent: 'text-brand-pink',
    tag: 'Maternal Care'
  },
  {
    id: 'rableydsr',
    name: 'Rabley-DSR',
    image: '/home/product_section/RableyDSR.png',
    category: 'Advanced Pharma',
    description: 'Effective gastro-intestinal support with precision-release technology.',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    tag: 'Advanced'
  }
];

const ProductSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center py-24 px-6 sm:px-12 lg:px-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-brand-pink/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-500/[0.04] blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-7xl mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-[2px] bg-brand-pink" />
              <h2 className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase">Certified Formulations</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Precision Medicine <br /> for <span className="text-slate-400">Generations.</span>
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 font-medium leading-relaxed italic border-l-2 border-brand-pink pl-6 py-2">
            "Bridging technical excellence with compassionate care across the globe."
          </p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -15 }}
            className="group relative h-[500px] lg:h-[650px] rounded-[3rem] overflow-hidden bg-white border border-slate-100 p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
          >
            {/* Product Image Section */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              {/* Animated Glow */}
              <div className={`absolute w-32 h-20 rounded-full ${product.color} blur-[60px] opacity-40 group-hover:scale-150 transition-all duration-700`} />
              
              {/* Small Tag on Image
              <div className="absolute top-0 right-0 z-20">
                <span className="bg-slate-900/5 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border border-slate-900/5">
                  {product.tag}
                </span>
              </div> */}

              <motion.img
                src={product.image}
                alt={product.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Bottom */}
            <div className="space-y-4 relative z-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{product.category}</p>
                <h4 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-brand-pink transition-colors">
                  {product.name}
                </h4>
              </div>
              
              <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">
                {product.description}
              </p>
              
              <button className="w-full flex items-center justify-between group/btn pt-4 border-t border-slate-50">
                <span className="text-sm font-bold text-slate-900 group-hover/btn:translate-x-1 transition-transform">Detailed Specs</span>
                <div className="p-2.5 rounded-full bg-slate-900 group-hover/btn:bg-brand-pink transition-all text-white active:scale-90">
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
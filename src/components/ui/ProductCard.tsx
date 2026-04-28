import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Beaker, Star } from 'lucide-react';
import type { Product } from '../../constants/products';

interface ProductCardProps extends Product {
  index: number;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  category,
  description,
  composition,
  index,
  type,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic color mapping for UI consistency
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Pediatrics': return 'bg-emerald-400 text-white shadow-emerald-500/20';
      case 'Maternal': return 'bg-brand-pink text-white shadow-pink-500/20';
      case 'Gastro': return 'bg-blue-500 text-white shadow-blue-500/20';
      case 'Neonatal': return 'bg-orange-400 text-white shadow-orange-500/20';
      default: return 'bg-slate-400 text-white';
    }
  };

  const badgeStyle = getCategoryStyles(category);
  const accentColor = badgeStyle.split(' ')[0].replace('bg-', 'bg-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ perspective: 1000 }}
      className="group relative h-full min-h-[520px] rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.15)] hover:border-brand-pink/10 cursor-pointer"
    >
      {/* Dynamic Glow Badge - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg ${badgeStyle} flex items-center gap-2`}>
          <div className="w-1 h-1 bg-white rounded-full animate-ping" />
          {category}
        </div>
      </div>

      {/* Product Image Section with 3D Pop */}
      <div className="relative flex-1 flex items-center justify-center mb-8">
        <div className={`absolute w-36 h-36 rounded-full ${accentColor}/10 blur-[60px] group-hover:scale-150 transition-all duration-1000`} />

        <motion.div
          animate={isHovered ? {
            rotateX: -10,
            rotateY: 10,
            z: 50,
            scale: 1.1
          } : {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            scale: 1
          }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-[240px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/400x600/f8fafc/64748b?text=Momley+AGS';
            }}
          />
        </motion.div>
      </div>

      {/* Content Bottom */}
      <div className="space-y-5 relative z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-brand-pink transition-colors">
              {name}
            </h4>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
               <Star className="w-3 h-3 text-brand-pink fill-brand-pink" />
               <span className="text-[10px] font-black text-slate-900">4.9</span>
            </div>
          </div>

          {/* Molecule-First Capsule Branding */}
          <div className="inline-flex items-center gap-2 self-start">
            <div className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-2 group/mol hover:bg-white hover:border-brand-pink/20 transition-all">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tight">
                {composition}
              </span>
              <div className="relative">
                <Beaker className="w-3.5 h-3.5 text-slate-300 group-hover/mol:text-brand-pink transition-colors" />

                {/* Quick Science Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-[9px] font-medium rounded-xl opacity-0 translate-y-2 group-hover/mol:opacity-100 group-hover/mol:translate-y-0 pointer-events-none transition-all shadow-xl z-30">
                  <span className="text-brand-pink block font-black mb-1 uppercase tracking-widest">Mechanism of Action</span>
                  Precision targeted pharmacological synthesis optimized for {category.toLowerCase()} safety profiles.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[13px] text-slate-500/80 leading-relaxed font-medium line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50 group-hover:border-slate-100 transition-colors">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Formulation</span>
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{type}</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="p-3 rounded-2xl bg-slate-50 group-hover:bg-brand-pink group-hover:text-white transition-all text-slate-400 shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

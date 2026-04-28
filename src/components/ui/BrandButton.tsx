import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface BrandButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ElementType;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  className?: string;
  isMagnetic?: boolean;
}

const BrandButton: React.FC<BrandButtonProps> = ({ 
  children, 
  onClick, 
  icon: Icon, 
  variant = 'primary', 
  className = '',
  isMagnetic = true 
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMagnetic || !btnRef.current) return;
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

  const variants = {
    primary: 'bg-brand-pink text-white shadow-brand-pink/20 hover:bg-slate-900',
    dark: 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-brand-pink',
    secondary: 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:border-brand-pink/20',
    outline: 'bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white'
  };

  return (
    <motion.button
      ref={btnRef}
      style={isMagnetic ? { x: mouseX, y: mouseY } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative overflow-hidden px-10 py-5 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl active:scale-95 flex items-center gap-4 ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
      
      {/* Shimmer Overlay */}
      <motion.div 
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
      />
    </motion.button>
  );
};

export default BrandButton;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, X } from 'lucide-react';
import { PRODUCTS } from '../../constants/products';
import type { Product } from '../../constants/products';

interface RecentlyViewedProps {
  onProductClick: (product: Product) => void;
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ onProductClick }) => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadRecent = () => {
      const savedIds = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      const products = savedIds
        .map((id: string) => PRODUCTS.find(p => p.id === id))
        .filter(Boolean) as Product[];
      setRecentProducts(products.slice(0, 4)); // Show last 4
    };

    loadRecent();
    // Listen for storage changes in same tab (custom event)
    window.addEventListener('recentlyViewedUpdated', loadRecent);
    return () => window.removeEventListener('recentlyViewedUpdated', loadRecent);
  }, []);

  const clearRecent = () => {
    localStorage.removeItem('recentlyViewed');
    setRecentProducts([]);
  };

  if (recentProducts.length === 0) return null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-32 pt-20 border-t border-slate-100"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-brand-pink/5 rounded-2xl">
            <History className="w-6 h-6 text-brand-pink" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Recently Explored</h3>
            <p className="text-sm text-slate-400 font-medium">Continue where you left off with your medical research.</p>
          </div>
        </div>
        <button 
          onClick={clearRecent}
          className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-brand-pink transition-colors"
        >
          Clear History
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <AnimatePresence>
          {recentProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-square bg-white border border-slate-100 rounded-3xl p-6 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1 transition-all duration-500">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm truncate">{product.name}</h4>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{product.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default RecentlyViewed;

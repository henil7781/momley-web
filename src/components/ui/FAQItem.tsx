import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`group border-b border-slate-100 last:border-0 transition-all duration-500 ${isOpen ? 'bg-slate-50/50' : 'bg-transparent'}`}>
      <button
        onClick={toggle}
        className="w-full py-6 sm:py-8 px-5 sm:px-6 md:px-10 flex items-center justify-between text-left group gap-4"
      >
        <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-pink' : 'text-slate-900 group-hover:text-slate-600'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full shrink-0 transition-all duration-500 ${isOpen ? 'bg-brand-pink text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {isOpen ? <Minus className="w-4 h-4 sm:w-5 h-5" /> : <Plus className="w-4 h-4 sm:w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-10 pb-6 sm:pb-8 pt-0">
              <p className="text-slate-500 text-sm sm:text-lg leading-relaxed max-w-4xl font-medium border-l-2 border-brand-pink/20 pl-4 sm:pl-6">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;

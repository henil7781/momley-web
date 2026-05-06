import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Parents' | 'Doctors' | 'General';
}

const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: "Are Momley products safe for newborns?",
    answer: "Absolutely. Every formulation under the Momley umbrella is manufactured in WHO-GMP certified facilities and undergoes rigorous stability testing specifically for neonatal and pediatric safety standards."
  },
  {
    category: 'Doctors',
    question: "Are your formulations sugar-free or dye-free?",
    answer: "Most of our pediatric range, including Kidzine AF and M-Vit D3, are formulated to be sugar-free and use medical-grade, hypoallergenic coloring agents to prevent any adverse reactions in sensitive infants."
  },
  {
    category: 'Parents',
    question: "Where can I find specific dosage instructions?",
    answer: "Dosage instructions are clearly printed on the outer carton and the bottle label. However, as Momley products are medical-grade, we strictly recommend following the dosage prescribed by your pediatrician."
  },
  {
    category: 'Doctors',
    question: "How can healthcare professionals request clinical samples?",
    answer: "Doctors can request clinical samples and detailed medical literature by visiting our 'Professional Portal' or contacting our regional medical representative directly through the 'Contact Us' section."
  },
  {
    category: 'General',
    question: "What makes Momley different from other pharmaceutical brands?",
    answer: "Our focus is hyper-specialized on Pediatrics and Gynecology. We bridge the gap between technical excellence and palatability, ensuring high compliance and better outcomes for mother and child."
  },
  {
    category: 'Parents',
    question: "Do your products require refrigeration?",
    answer: "Most Momley oral solutions and drops are stable at room temperature (below 30°C). We recommend storing them in a cool, dry place away from direct sunlight unless specifically mentioned on the packaging."
  }
];

const FAQSection: React.FC = () => {
  // Set the first item (index 0) as open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    // If the clicked index is already open, close it (none open). 
    // Otherwise, open the clicked one and close the rest.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-slate-50 flex items-center py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* ── LEFT: STICKY HEADER ── */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-pink" />
              <h2 className="text-brand-pink font-bold tracking-[0.3em] text-[10px] uppercase">Intelligence Base</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Common <br /> <span className="text-slate-400 italic">Inquiries.</span>
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm pt-4 border-l-2 border-brand-pink pl-6">
              Expert answers for parents and healthcare professionals regarding our pharmaceutical standards.
            </p>
          </motion.div>

          {/* Trust Badge */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm w-fit">
            <ShieldCheck className="w-10 h-10 text-emerald-500" />
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Safety Standard</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">WHO-GMP Certified</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: ACCORDION ── */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen ? 'bg-white border-brand-pink shadow-xl shadow-pink-500/5' : 'bg-white/50 border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-8 text-left outline-none"
                >
                  <div className="flex flex-col gap-2">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${isOpen ? 'text-brand-pink' : 'text-slate-400'}`}>
                      {faq.category}
                    </span>
                    <span className={`text-lg md:text-xl font-black tracking-tight transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-500 ${isOpen ? 'bg-brand-pink text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-slate-500 text-base leading-relaxed font-medium max-w-2xl border-t border-slate-50 pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What sets Momley apart in pediatric care?",
    answer: "Momley is dedicated to precision medicine. Unlike generic formulations, our products are engineered with a deep understanding of neonatal metabolic needs, ensuring maximum safety and efficacy for the most delicate lives."
  },
  {
    question: "Are your products globally certified?",
    answer: "Yes, every Momley product is manufactured in WHO-GMP certified facilities. We adhere to stringent international standards, with each batch undergoing rigorous quality control tests before reaching healthcare providers."
  },
  {
    question: "How do I access technical specifications?",
    answer: "Detailed technical data sheets and clinical profiles are available for healthcare professionals. You can request these through our portal or contact our medical affairs department for specialized documentation."
  },
  {
    question: "Do you offer support for maternal health?",
    answer: "Absolutely. We believe that maternal wellness is the foundation of infant health. Our 'Momley-Lact' series provides targeted nutritional and physiological support for mothers during the prenatal and postnatal phases."
  },
  {
    question: "Where can I find Momley products?",
    answer: "Our products are distributed via a network of certified pharmaceutical partners globally. For specific regional availability or partnership inquiries, please visit our 'Global Reach' section or contact our sales team."
  }
];

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className={`group border-b border-slate-100 last:border-0 transition-all duration-500 ${isOpen ? 'bg-slate-50/50' : 'bg-transparent'}`}>
      <button
        onClick={toggle}
        className="w-full py-8 px-6 md:px-10 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-pink' : 'text-slate-900 group-hover:text-slate-600'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-brand-pink text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
            <div className="px-6 md:px-10 pb-8 pt-0">
              <p className="text-slate-500 text-lg leading-relaxed max-w-4xl font-medium border-l-2 border-brand-pink/20 pl-6">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 md:py-32 md:px-20 bg-white overflow-hidden" id="faq">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-pink/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-brand-pink" />
              <h2 className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase italic underline underline-offset-8">Information Portal</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Curated <span className="text-slate-300">Insights.</span>
            </h3>
          </div>
          <p className="max-w-xs text-slate-400 font-medium leading-relaxed">
            Finding answers to your most pressing medical and partnership questions.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)]">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 font-medium">
                Still have questions? <button className="text-brand-pink font-bold hover:underline">Contact our Support Team</button>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

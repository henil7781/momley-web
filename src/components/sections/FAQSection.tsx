import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import FAQItem from '../ui/FAQItem';
import SectionHeader from '../ui/SectionHeader';

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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 md:py-32 md:px-20 bg-white overflow-hidden" id="faq">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-pink/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          icon={HelpCircle}
          sublabel="Information Portal"
          title={<>Curated <span className="text-slate-400">Insights.</span></>}
          description="Finding answers to your most pressing medical and partnership questions."
          accentColor="text-brand-pink"
        />

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

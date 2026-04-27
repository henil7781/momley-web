import React, { useState } from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import FAQItem from '../ui/FAQItem';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import BrandButton from '../ui/BrandButton';

const PEDIA_FAQS = [
    {
        question: "Why are Momley's pediatric formulations strictly ethanol-free?",
        answer: "Newborns and infants have developing hepatic (liver) functions that cannot process even trace amounts of ethanol safely. We use 100% alcohol-free bases to ensure zero metabolic stress during administration."
    },
    {
        question: "How does Momley ensure dosing precision for infants?",
        answer: "Our Pediatric Range comes equipped with precision-calibrated droppers and syringes that allow for accurate measurement down to 0.1ml, reducing the risk of sub-therapeutic or excessive dosing."
    },
    {
        question: "Are your syrups and drops safe for long-term use?",
        answer: "Yes, our formulations exclude harmful parabens and artificial stabilizers. We use clinical-grade natural alternatives to ensure that chronic management of conditions doesn't lead to preservative accumulation."
    },
    {
        question: "How should Momley pediatric products be stored after opening?",
        answer: "While most of our products are bio-stable at room temperature (below 25°C), we recommend keeping them in a cool, dark place and away from direct sunlight to maintain the potency of the active ingredients."
    },
    {
        question: "Do your products contain common allergens like gluten or dairy?",
        answer: "Most of our pediatric range is gluten-free and dairy-free. We explicitly label all our 'Clean Label' products to ensure safety for infants with specific dietary sensitivities or Celiac predispositions."
    }
];

const PediaFAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-pink/[0.04] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/[0.04] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader 
                    icon={HelpCircle}
                    sublabel="Clinical Support"
                    title={<>Common <span className="text-slate-400">Queries.</span></>}
                    description="Providing transparency and clinical guidance for healthcare providers and parents."
                    accentColor="text-brand-pink"
                />

                {/* FAQ List */}
                <div className="bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
                    {PEDIA_FAQS.map((faq, index) => (
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
                <div className="mt-20 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                        Still have questions?
                    </div>
                    <BrandButton 
                        variant="dark"
                        icon={MessageSquare}
                        onClick={() => {}}
                    >
                        Consult a Medical Representative
                    </BrandButton>
                </div>
            </div>
        </section>
    );
};

export default PediaFAQSection;

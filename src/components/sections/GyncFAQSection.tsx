import React, { useState } from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import FAQItem from '../ui/FAQItem';
import SectionHeader from '../ui/SectionHeader';
import BrandButton from '../ui/BrandButton';

const GYNC_FAQS = [
    {
        question: "Why do you use Methylated Folate instead of standard synthetic folic acid?",
        answer: "Standard folic acid requires conversion by the MTHFR enzyme, which many women have a genetic mutation for. We use the active form (L-5-Methyltetrahydrofolate) to ensure 99% absorption and immediate availability for preventing neural tube defects."
    },
    {
        question: "Will Momley-Iron cause the typical gastric distress associated with iron supplements?",
        answer: "No. We utilize advanced Gentle Chelate technology (like Ferrous Ascorbate) which is highly bioavailable but drastically reduces the gastric irritation, nausea, and constipation typically experienced with standard iron therapies during pregnancy."
    },
    {
        question: "Are your DHA and Omega products safe from ocean contaminants?",
        answer: "Absolutely. We strictly use high-purity, often algal-sourced DHA that undergoes multi-stage molecular distillation. This guarantees zero exposure to heavy metals like mercury or lead, ensuring complete safety for fetal brain development."
    },
    {
        question: "Are your maternal supplements safe for all three trimesters?",
        answer: "Yes, our prenatal and maternal range is clinically formulated to be safe and efficacious throughout preconception, all three trimesters, and into the postpartum lactation period. However, always consult your prescribing physician."
    },
    {
        question: "Do Momley maternal products contain artificial dyes or preservatives?",
        answer: "No. We adhere to a strict 'Clean Label' philosophy. Our formulations are free from unnecessary synthetic dyes, parabens, and allergens to ensure they are as gentle as possible on the maternal system."
    }
];

const GyncFAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-rose-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-brand-pink/[0.04] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader 
                    icon={HelpCircle}
                    sublabel="Clinical Support"
                    title={<>Common <span className="text-slate-400">Queries.</span></>}
                    description="Providing transparency and clinical guidance regarding our maternal and gynecological formulations."
                    accentColor="text-brand-pink"
                />

                {/* FAQ List */}
                <div className="bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
                    {GYNC_FAQS.map((faq, index) => (
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

export default GyncFAQSection;

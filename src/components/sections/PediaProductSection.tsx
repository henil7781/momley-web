import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { PRODUCTS } from '../../constants/products';
import { Pill } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import BrandButton from '../ui/BrandButton';

const PediaProductSection: React.FC = () => {
    // Specifically requested products for Pediatric page showcase
    const pediaIds = ['kidk1', 'lipofez', 'dualflora-suspension', 'momleylact'];
    const pediaProducts = PRODUCTS.filter(p => pediaIds.includes(p.id));

    return (
        <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/[0.04] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader 
                    icon={Pill}
                    sublabel="Therapeutic Portfolio"
                    title={<>Clinical <span className="text-slate-400">Range.</span></>}
                    description="Precision formulations designed specifically for the fragile metabolic pathways of newborns and growing children."
                    accentColor="text-brand-pink"
                />

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pediaProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 flex justify-center">
                    <BrandButton 
                        variant="dark"
                        onClick={() => {}}
                    >
                        View Full Pediatric Catalog
                    </BrandButton>
                </div>
            </div>
        </section>
    );
};

export default PediaProductSection;

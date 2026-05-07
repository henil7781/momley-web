import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { PRODUCTS } from '../../constants/products';
import SectionHeader from '../ui/SectionHeader';
import { Pill } from 'lucide-react';

const ProductSection = () => {
  // Specifically requested flagship products for home page
  const flagshipIds = ['lipofez', 'dualflora-suspension', 'momxaa-syrup', 'kidzine-syrup'];
  const flagshipProducts = PRODUCTS.filter(p => flagshipIds.includes(p.id));

  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center py-20 sm:py-24 px-6 sm:px-12 lg:px-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-brand-pink/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-500/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <SectionHeader 
          icon={Pill}
          sublabel="Certified Formulations"
          title={<>Precision Medicine <br /> for <span className="text-slate-400">Generations.</span></>}
          description="Bridging technical excellence with compassionate care across the globe."
          accentColor="text-brand-pink"
        />
      </div>

      {/* Product Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
        {flagshipProducts.map((product, index) => (
          <ProductCard key={product.id} {...product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
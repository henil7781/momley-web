import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Beaker, Thermometer, ShieldCheck, AlertCircle } from 'lucide-react';
// Go up twice: out of 'product', then out of 'components'
import { supabase } from '../../conections/supabaseClient';
import ProductCard from '../ui/ProductCard';
import DialogDropdown from '../ui/DialogDropdown';
import ProductCardSkeleton from '../ui/ProductCardSkeleton';
import RecentlyViewed from './RecentlyViewed';

// Define the shape of your Pharma Product based on your Supabase Table
interface Product {
    id: string;
    name: string;
    composition: string;
    category: string;
    type: string;
    image: string;
    storage: string;
    indications: string;
}

interface ProductCatalogProps {
    searchTerm: string;
    setSearchTerm: (val: string) => void;
}

const CATEGORIES = [
    { label: 'Pediatrics', value: 'Pediatrics', icon: '👶' },
    { label: 'Maternal', value: 'Maternal', icon: '🤰' },
    { label: 'Gastro', value: 'Gastro', icon: '🔬' },
    { label: 'Neonatal', value: 'Neonatal', icon: '🍼' }
];

const TYPES = ['Syrup', 'Drops', 'Tablets', 'Sachet', 'Granules', 'Capsule'];

const ProductCatalog: React.FC<ProductCatalogProps> = ({ searchTerm, setSearchTerm }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | number>('All');
    const [activeType, setActiveType] = useState<string | number>('All');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // ── DATA FETCHING ──
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const { data, error: supabaseError } = await supabase
                    .from('products')
                    .select('*')
                    .order('name', { ascending: true });

                if (supabaseError) throw supabaseError;
                setProducts(data || []);
            } catch (err: any) {
                setError(err.message);
                console.error('Supabase fetch error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // ── FILTER LOGIC ──
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesSearch = 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.composition.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCat = activeCategory === 'All' || p.category === activeCategory;
            const matchesType = activeType === 'All' || p.type === activeType;
            return matchesSearch && matchesCat && matchesType;
        });
    }, [searchTerm, activeCategory, activeType, products]);

    // ── RECENTLY VIEWED LOGIC ──
    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
        
        const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const updated = [product.id, ...recent.filter((id: string) => id !== product.id)].slice(0, 10);
        localStorage.setItem('recentlyViewed', JSON.stringify(updated));
        
        window.dispatchEvent(new Event('recentlyViewedUpdated'));
    };

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
                <AlertCircle className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold">Failed to load Momley Products</h3>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-[#FDFDFD] min-h-screen pt-24 pb-24 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* ── SEARCH & FILTER BAR ── */}
                <div className="bg-white/40 backdrop-blur-3xl border border-white/20 rounded-3xl p-5 shadow-2xl shadow-pink-500/5 flex flex-col lg:flex-row items-center gap-5 sticky top-28 z-[50]">
                    <div className="relative flex-1 w-full group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-pink transition-colors" />
                        <input
                            type="text"
                            placeholder="Search medical products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white/50 border border-slate-100/50 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-brand-pink/5 transition-all text-sm font-semibold"
                        />
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full lg:w-auto">
                        <div className="w-full lg:w-56">
                            <DialogDropdown
                                value={activeCategory}
                                onChange={(val) => setActiveCategory(val)}
                                options={[{ label: 'All Categories', value: 'All' }, ...CATEGORIES]}
                            />
                        </div>
                        <div className="w-full lg:w-48">
                            <DialogDropdown
                                value={activeType}
                                onChange={(val) => setActiveType(val)}
                                options={['All Types', ...TYPES]}
                            />
                        </div>

                        {(activeCategory !== 'All' || activeType !== 'All' || searchTerm !== '') && (
                            <button
                                onClick={() => { setActiveCategory('All'); setActiveType('All'); setSearchTerm(''); }}
                                className="px-4 py-3 text-slate-400 hover:text-brand-pink transition-colors text-xs font-black uppercase tracking-widest"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>

                {/* ── MAIN GRID ── */}
                <main className="w-full">
                    <AnimatePresence mode="popLayout">
                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {[...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)}
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            >
                                {filteredProducts.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                        index={index}
                                        onClick={() => handleProductSelect(product)}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-40 text-center space-y-4">
                                <Search className="w-10 h-10 text-slate-200" />
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter">No medical products match</h3>
                            </div>
                        )}
                    </AnimatePresence>
                </main>

                <RecentlyViewed onProductClick={handleProductSelect} />
            </div>

            {/* ── PRODUCT DETAIL DRAWER ── */}
            <AnimatePresence>
                {selectedProduct && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150]"
                        />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-screen w-full max-w-lg bg-white z-[160] shadow-2xl p-12 overflow-y-auto"
                        >
                            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full">
                                <X className="w-6 h-6 text-slate-400" />
                            </button>

                            <div className="space-y-12">
                                <div className="pt-8">
                                    <span className="text-brand-pink font-black text-[10px] uppercase tracking-[0.3em]">{selectedProduct.category}</span>
                                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter mt-2">{selectedProduct.name}</h2>
                                </div>

                                <div className="aspect-square bg-slate-50 rounded-[3rem] p-12">
                                    <img src={selectedProduct.image} className="w-full h-full object-contain" alt={selectedProduct.name} />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-50 rounded-2xl space-y-2">
                                        <Beaker className="w-5 h-5 text-brand-pink" />
                                        <p className="text-[10px] font-black uppercase text-slate-400">Composition</p>
                                        <p className="text-sm font-bold text-slate-900">{selectedProduct.composition}</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl space-y-2">
                                        <Thermometer className="w-5 h-5 text-blue-500" />
                                        <p className="text-[10px] font-black uppercase text-slate-400">Storage</p>
                                        <p className="text-sm font-bold text-slate-900">{selectedProduct.storage}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Indications
                                    </h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">{selectedProduct.indications}</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductCatalog;
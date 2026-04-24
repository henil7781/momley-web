import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

const BLOGS = [
  {
    id: 1,
    title: 'Precision in Pediatric Care: The Science of Neonatal Nutrition',
    description: 'Exploring how clinical research is reshaping the first 1000 days of a child’s life through pharmaceutical innovation and safety.',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop',
    date: 'Apr 20, 2026',
    readTime: '8 min read',
    category: 'Research'
  },
  {
    id: 2,
    title: 'Maternal Wellness: Postnatal Recovery',
    description: 'Expert insights on balancing nutrition and physical recovery for new mothers.',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2000&auto=format&fit=crop',
    date: 'Apr 18, 2026',
    readTime: '5 min read',
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'Immunity & Toddler Growth',
    description: 'How specialized Vitamin D3 formulations bridge the modern nutritional gap.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2000&auto=format&fit=crop',
    date: 'Apr 15, 2026',
    readTime: '6 min read',
    category: 'Pediatrics'
  }
];

const BlogSection = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div className="space-y-4">
            <h2 className="text-brand-pink font-bold tracking-[0.25em] text-xs uppercase">Latest Insights</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Momley <span className="text-slate-400 italic">Journal.</span>
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 font-medium leading-relaxed italic border-l-2 border-brand-pink pl-4">
            "Sharing medical excellence for a healthier tomorrow."
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="flex flex-col lg:flex-row gap-6 h-[1200px] lg:h-[800px]">
          
          {/* ── LEFT: LARGE FEATURED CARD (60% Width) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex-1 lg:flex-[1.5] group cursor-pointer overflow-hidden rounded-[3.5rem] bg-white border border-slate-100 shadow-sm"
          >
            <motion.img 
              src={BLOGS[0].image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={BLOGS[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full space-y-6 z-10">
              <div className="flex items-center gap-4 text-white/90 text-xs font-black uppercase tracking-widest">
                <span className="bg-brand-pink text-white px-4 py-1.5 rounded-full">{BLOGS[0].category}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-pink" /> {BLOGS[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter italic">
                {BLOGS[0].title}
              </h2>
              <p className="text-white/70 text-md max-w-xl font-light leading-relaxed line-clamp-2">
                {BLOGS[0].description}
              </p>
              <button className="flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-sm hover:bg-brand-pink hover:text-white transition-all transform active:scale-95 group">
                Read Full Journal
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT: TWO STACKED CARDS (40% Width) ── */}
          <div className="flex-1 flex flex-col gap-6">
            {BLOGS.slice(1).map((blog, index) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex-1 group cursor-pointer overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-sm"
              >
                <motion.img 
                  src={blog.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={blog.title}
                />
                <div className="absolute inset-0 bg-slate-900/70 transition-opacity duration-500 group-hover:bg-slate-900/80" />
                
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 space-y-4 z-10">
                  <div className="flex items-center gap-3 text-white/80 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-brand-pink">{blog.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none group-hover:text-brand-pink transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-white/60 text-sm max-w-sm font-medium line-clamp-1 group-hover:line-clamp-none transition-all duration-500">
                    {blog.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-brand-pink/50 pb-1 w-fit group-hover:border-brand-pink group-hover:translate-x-2 transition-all">
                    Explore <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
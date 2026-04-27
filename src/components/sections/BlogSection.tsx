import React from 'react';
import BlogCard from '../ui/BlogCard';
import SectionHeader from '../ui/SectionHeader';
import { BookOpen } from 'lucide-react';

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
    <section className="w-full min-h-screen bg-slate-50 py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-8">
        
        <SectionHeader 
          icon={BookOpen}
          sublabel="Latest Insights"
          title={<>Momley <span className="text-slate-400">Journal.</span></>}
          description="Sharing medical excellence for a healthier tomorrow."
          accentColor="text-brand-pink"
        />

        {/* Bento Grid Container */}
        <div className="flex flex-col lg:flex-row gap-6 h-[1000px] sm:h-[1200px] lg:h-[800px]">
          
          {/* Featured Card */}
          <BlogCard {...BLOGS[0]} isFeatured />

          {/* Standard Cards Stack */}
          <div className="flex-1 flex flex-col gap-6">
            {BLOGS.slice(1).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
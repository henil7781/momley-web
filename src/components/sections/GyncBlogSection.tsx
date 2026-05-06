import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../ui/BlogCard';
import { BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const GYNC_BLOGS = [
  {
    id: 1,
    title: 'The Essential Role of Folic Acid in First-Trimester Development',
    description: 'A deep dive into why methylated folate offers superior absorption for neural tube defect prevention compared to standard synthetic folic acid.',
    image: '/assets/gync/3a8466c3-d115-4de4-9314-579bc584f291.jpg',
    date: 'May 02, 2026',
    readTime: '8 min read',
    category: 'Maternal Nutrition'
  },
  {
    id: 2,
    title: 'Managing Iron Deficiency Anemia During Pregnancy',
    description: 'Understanding the benefits of gentle chelated iron formulations that prevent gastric distress while effectively supporting maternal blood volume.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2000',
    date: 'Apr 28, 2026',
    readTime: '6 min read',
    category: 'Clinical'
  },
  {
    id: 3,
    title: 'Omega-3 DHA and Fetal Brain Growth: The Science',
    description: 'How high-purity algal DHA contributes directly to cognitive development and visual acuity in the third trimester without heavy metal risks.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    category: 'Development'
  }
];

const GyncBlogSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-24 sm:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-12 relative z-10">

        <SectionHeader 
          icon={BookOpen}
          sublabel="Research & Insights"
          title={<>Women's Health <span className="text-slate-400">Journal.</span></>}
          description="Sharing medical excellence and the latest research in maternal and neonatal wellness."
          accentColor="text-brand-pink"
        />

        {/* Bento Grid Container */}
        <div className="flex flex-col lg:flex-row gap-8 h-[1100px] sm:h-[1300px] lg:h-[850px] perspective-[2000px]">

          {/* Featured Card */}
          <BlogCard {...GYNC_BLOGS[0]} isFeatured />

          {/* Standard Cards Stack */}
          <div className="flex-1 flex flex-col gap-8">
            {GYNC_BLOGS.slice(1).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GyncBlogSection;

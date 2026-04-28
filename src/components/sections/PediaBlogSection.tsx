import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../ui/BlogCard';
import { BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const PEDIA_BLOGS = [
  {
    id: 1,
    title: 'Gut-Brain Axis in Neonates: Managing Infantile Colic',
    description: 'Understanding the role of probiotics and gentle enzymatic support in reducing neonatal distress and improving infant sleep patterns.',
    image: '/assets/pedia/pedia_colic.png',
    date: 'Apr 26, 2026',
    readTime: '9 min read',
    category: 'Neonatal'
  },
  {
    id: 2,
    title: 'Combatting Pediatric Anemia: The Absorption Challenge',
    description: 'Why ferrous formulations must be optimized for infant digestion to maintain high efficacy without causing gastric irritation.',
    image: '/assets/pedia/pedia_anemia.png',
    date: 'Apr 24, 2026',
    readTime: '6 min read',
    category: 'Clinical'
  },
  {
    id: 3,
    title: 'Sterile Protocols: Saline in Neonatal Respiratory Care',
    description: 'How drug-free saline support provides a safe alternative for maintaining infant airway hygiene in challenging urban environments.',
    image: '/assets/pedia/pedia_respiration.png',
    date: 'Apr 22, 2026',
    readTime: '5 min read',
    category: 'Safety'
  }
];

const PediaBlogSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-24 sm:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-12">

        <SectionHeader 
          icon={BookOpen}
          sublabel="Research & Insights"
          title={<>Pediatric <span className="text-slate-400">Journal.</span></>}
          description="Sharing medical excellence to safeguard the first 1,000 days of a child's life."
          accentColor="text-brand-pink"
        />

        {/* Bento Grid Container */}
        <div className="flex flex-col lg:flex-row gap-8 h-[1100px] sm:h-[1300px] lg:h-[850px] perspective-[2000px]">

          {/* Featured Card */}
          <BlogCard {...PEDIA_BLOGS[0]} isFeatured />

          {/* Standard Cards Stack */}
          <div className="flex-1 flex flex-col gap-8">
            {PEDIA_BLOGS.slice(1).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

        </div>

        {/* View All Insights Link */}
      </div>
    </section>
  );
};

export default PediaBlogSection;

import React from 'react';

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 px-6 md:px-20 bg-white flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter uppercase">{title}</h1>
    <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
      We are currently perfecting the {title} experience. Stay tuned for advanced pediatric and life science breakthroughs.
    </p>
    <div className="mt-12 h-1 w-32 bg-brand-pink rounded-full animate-pulse" />
  </div>
);

export const Pedia = () => <PagePlaceholder title="Pedia" />;
export const Gync = () => <PagePlaceholder title="Gync" />;
export const OurStory = () => <PagePlaceholder title="Our Story" />;
export const Contact = () => <PagePlaceholder title="Contact Us" />;

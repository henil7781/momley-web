import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] pt-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
          Momley <span className="text-brand-pink">Our Story</span>
        </h1>
        <p className="mt-4 text-slate-500 font-medium max-w-md mx-auto">
          The foundation of Momley AGS Life Science.
        </p>
      </div>
    </div>
  );
};

export default OurStory;

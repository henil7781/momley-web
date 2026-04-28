import React from 'react';
import { Quote, Star, BadgeCheck } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  type: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text, rating, avatar, type }) => {
  return (
    <div className="group h-full bg-slate-50 hover:bg-white rounded-[2.5rem] border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col justify-between gap-6">
      {/* Text Area */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Quote className="w-6 h-6 text-brand-pink/20 group-hover:text-brand-pink transition-colors" />
          <div className="flex gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-brand-pink text-brand-pink" />
            ))}
          </div>
        </div>
        <p className="text-base text-slate-600 font-medium leading-relaxed italic line-clamp-4">
          "{text}"
        </p>
      </div>

      {/* Profile Section - Compact */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200/30">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-black text-slate-900 uppercase truncate tracking-tighter">{name}</h4>
            {type === 'doctor' && <BadgeCheck className="w-3 h-3 text-blue-500" />}
          </div>
          <p className="text-[9px] font-bold text-brand-pink uppercase tracking-widest truncate">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

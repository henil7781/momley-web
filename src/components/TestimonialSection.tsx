import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck, MessageCircle } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  { id: 1, type: 'doctor', name: 'Dr. Arvin Shah', role: 'Pediatrician', hospital: 'City Children’s', text: "Momley’s formulations, especially Kidzine AF, have shown remarkable acceptance among infants.", rating: 5, avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop' },
  { id: 2, type: 'mother', name: 'Priya Sharma', role: 'New Mother', text: "Momley-Lact was a game changer. I felt more energetic and supported within just a week.", rating: 5, avatar: 'https://images.unsplash.com/photo-1594161825220-410a62372413?q=80&w=200&auto=format&fit=crop' },
  { id: 3, type: 'doctor', name: 'Dr. Meera Iyer', role: 'OB-GYN', hospital: 'Wellness Centre', text: "The clinical precision in Momley’s Gynecology range is impressive and consistent.", rating: 5, avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop' },
  { id: 4, type: 'mother', name: 'Anjali Gupta', role: 'Mother of twins', text: "Safe, effective, and actually tastes good for the kids. Makes my mornings so much easier.", rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
  { id: 5, type: 'doctor', name: 'Dr. R. Malhotra', role: 'Neonatologist', hospital: 'LifeCare Lab', text: "The purity standards at Momley set a high bar for the pharmaceutical industry.", rating: 5, avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop' }
];

const TestimonialSection = () => {
  return (
    <section className="relative w-full bg-white py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* Header - More compact */}
      <div className="relative z-10 w-full max-w-7xl mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="bg-brand-pink p-3 rounded-2xl">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-brand-pink font-bold tracking-[0.2em] text-[10px] uppercase italic">Social Proof</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Trusted by <span className="text-slate-400">Experts & Mothers.</span></h3>
          </div>
        </motion.div>
      </div>

      {/* Swiper Container - Optimized for 5 small cards */}
      <div className="relative z-10 w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2} // Shows a peek of the next card
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          className="testimonial-swiper !pb-14"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group h-full bg-slate-50 hover:bg-white rounded-[2.5rem] border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col justify-between gap-6">
                
                {/* Text Area */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Quote className="w-6 h-6 text-brand-pink/20 group-hover:text-brand-pink transition-colors" />
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-brand-pink text-brand-pink" />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-slate-600 font-medium leading-relaxed italic line-clamp-4">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile Section - Compact */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/30">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-black text-slate-900 uppercase truncate tracking-tighter">{item.name}</h4>
                      {item.type === 'doctor' && <BadgeCheck className="w-3 h-3 text-blue-500" />}
                    </div>
                    <p className="text-[9px] font-bold text-brand-pink uppercase tracking-widest truncate">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #db2777 !important;
          width: 18px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
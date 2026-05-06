import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Activity, ShieldCheck, Heart } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581998392741-67879e0ef04a?auto=format&fit=crop&q=80&w=2000',
    tag: 'ADVANCED CARE',
    title: 'Precision in Pediatric Care',
    description: 'Providing world-class medical innovation for the next generation of healthy lives.',
    icon: <Activity className="w-5 h-5" />
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=2000',
    tag: 'GLOBAL REACH',
    title: 'Healthier Futures for Every Child',
    description: 'Bridging technical excellence with compassionate care across the globe.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?auto=format&fit=crop&q=80&w=2000',
    tag: 'LIFE SCIENCE',
    title: 'Innovating Newborn Wellness',
    description: 'Pioneering research and science dedicated to neonatal development and safety.',
    icon: <Activity className="w-5 h-5" />
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=2000',
    tag: 'MOTHER & CHILD',
    title: 'Nurturing the Bond of Life',
    description: 'Comprehensive support systems designed for both maternal health and infant growth.',
    icon: <Heart className="w-5 h-5" />
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1596252732610-fce5ac542f8e?auto=format&fit=crop&q=80&w=2000',
    tag: 'PROFESSIONAL TEAM',
    title: 'Expertise You Can Trust',
    description: "Our dedicated team of scientists and doctors are here to safeguard your family's future.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col lg:flex-row bg-slate-950">
      
      {/* ── IMAGE SECTION (Background on Mobile, Right Side on Desktop) ── */}
      <div
        ref={emblaRef}
        className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:order-2 lg:w-1/2 lg:h-full overflow-hidden"
      >
        <div className="flex h-full w-full">
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] h-full w-full min-w-0">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={selectedIndex === index ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              {/* Mobile Scrim: Stronger at bottom for text contrast */}
              <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Desktop Scrim: Soft left fade to blend with white panel */}
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows: Pinned bottom-right of the image area */}
        <div className="absolute bottom-6 right-6 z-30 flex gap-2">
          <button onClick={scrollPrev} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-pink transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-pink transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── CONTENT SECTION (Overlay on Mobile, Left Side on Desktop) ── */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center lg:bg-white lg:order-1 lg:w-1/2 h-full">
        {/* Desktop Aesthetic Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/[0.04] blur-[100px] rounded-full pointer-events-none hidden lg:block" />

        <div className="w-full px-6 pb-20 py-20 sm:px-12 sm:pb-24 lg:py-20 lg:px-20 xl:px-28">
          <AnimatePresence mode="wait">
            {SLIDES.map((slide, index) =>
              selectedIndex === index ? (
                <motion.div
                  key={slide.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col max-w-2xl gap-4 lg:gap-8 py-8"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-brand-pink uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="space-y-3 lg:space-y-5">
                    <h1 className="text-white lg:text-slate-900 font-black leading-[0.9] tracking-tighter text-4xl sm:text-6xl xl:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="text-white/70 lg:text-slate-500 font-medium text-sm sm:text-lg lg:text-xl max-w-md leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button className="bg-brand-pink text-white px-6 py-3 lg:px-10 lg:py-5 rounded-2xl font-bold text-sm lg:text-lg shadow-xl shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-3 lg:px-10 lg:py-5 rounded-2xl font-bold text-sm lg:text-lg text-white lg:text-slate-900 border border-white/30 lg:border-slate-200 hover:bg-white/10 lg:hover:bg-slate-50 transition-all">
                      Learn More
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2.5 pt-4">
                    {SLIDES.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => emblaApi?.scrollTo(dotIndex)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                          selectedIndex === dotIndex 
                          ? 'w-10 bg-brand-pink' 
                          : 'w-2 bg-white/20 lg:bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
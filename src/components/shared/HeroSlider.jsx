import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Sparkles, Pause, Play } from 'lucide-react';
import { HERO_SLIDES } from '../../data/fbfData';

export default function HeroSlider({ onNavigate, onOpenDonate, theme = 'warm' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div 
      className="relative rounded-2xl overflow-hidden border border-[#E8DFC8] bg-stone-900 shadow-md group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Image Background with Subtle Zoom */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[480px] w-full overflow-hidden bg-stone-950">
        <img
          src={slide.image}
          alt={slide.headline}
          key={slide.id}
          className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-103"
          onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
        />
        {/* Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-end text-white max-w-4xl space-y-4">
        
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#D48B28] text-stone-950 font-bold text-[11px] uppercase tracking-wider">
            {slide.tag}
          </span>
          <span className="text-xs text-stone-300 font-mono">
            {currentSlide + 1} / {HERO_SLIDES.length}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-quando font-normal text-white leading-[1.2] tracking-tight max-w-3xl">
          {slide.headline}
        </h2>

        <p className="text-xs sm:text-base text-stone-200 max-w-2xl font-dm leading-relaxed">
          {slide.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate(slide.actionPage)}
            className="px-6 py-2.5 rounded-lg bg-white hover:bg-stone-100 text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <span>{slide.actionText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenDonate}
            className="px-6 py-2.5 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Donate Now</span>
          </button>
        </div>

      </div>

      {/* Prev / Next Slider Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 inset-x-3 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="pointer-events-auto p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-sm border border-white/20 transition-all opacity-80 hover:opacity-100 shadow-md"
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="pointer-events-auto p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-sm border border-white/20 transition-all opacity-80 hover:opacity-100 shadow-md"
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Thumbnail / Dot Indicators */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2 z-10">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide
                ? 'w-8 bg-[#D48B28]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            title={`Slide ${idx + 1}: ${s.tag}`}
          />
        ))}

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-2 text-stone-300 hover:text-white p-1"
          title={isPaused ? "Play slider" : "Pause slider"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Sparkles, Pause, Play, ShieldCheck, Award } from 'lucide-react';
import { HERO_SLIDES, ORG_DATA } from '../../data/fbfData';

export default function HeroSlider({ onNavigate, onOpenDonate, theme = 'warm' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  const themeStyles = {
    warm: {
      border: 'border-[#E8DFC8]',
      badge: 'bg-[#D48B28] text-stone-950',
      primaryBtn: 'bg-white hover:bg-stone-100 text-[#1B2828]',
      accentBtn: 'bg-[#D48B28] hover:bg-[#b8761d] text-white',
      thumbActive: 'border-[#D48B28] ring-2 ring-[#D48B28]/50 scale-105',
      thumbInactive: 'border-white/30 opacity-70 hover:opacity-100'
    },
    rose: {
      border: 'border-rose-200',
      badge: 'bg-[#FDF289] text-slate-950',
      primaryBtn: 'bg-white hover:bg-rose-50 text-slate-950',
      accentBtn: 'bg-[#E11D48] hover:bg-[#be185d] text-white',
      thumbActive: 'border-[#E11D48] ring-2 ring-[#E11D48]/50 scale-105',
      thumbInactive: 'border-white/30 opacity-70 hover:opacity-100'
    },
    burgundy: {
      border: 'border-[#EAD5D5]',
      badge: 'bg-[#FDF289] text-slate-950',
      primaryBtn: 'bg-white hover:bg-stone-100 text-slate-950',
      accentBtn: 'bg-[#873F50] hover:bg-[#6e3140] text-white',
      thumbActive: 'border-[#FDF289] ring-2 ring-[#FDF289]/50 scale-105',
      thumbInactive: 'border-white/30 opacity-70 hover:opacity-100'
    }
  };

  const style = themeStyles[theme] || themeStyles.warm;

  return (
    <div 
      className={`relative rounded-[2.5rem] overflow-hidden border ${style.border} bg-stone-950 shadow-2xl group text-left`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Main High-Resolution Hero Photo Container */}
      <div className="relative aspect-[16/10] sm:aspect-[21/9] max-h-[560px] w-full overflow-hidden bg-stone-950">
        <img
          src={slide.image}
          alt={slide.headline}
          key={slide.id}
          className="w-full h-full object-cover object-center transition-all duration-1000 scale-100 group-hover:scale-103"
          onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      {/* 2. Floating Live Badges on Photo */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className={`pointer-events-auto px-3.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md backdrop-blur-md ${style.badge}`}>
            {slide.tag}
          </span>
          <span className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono font-semibold border border-white/10 hidden sm:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CRA #{ORG_DATA.charityNumber}</span>
          </span>
        </div>

        {/* Play/Pause Control */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
          title={isPaused ? "Play slider" : "Pause slider"}
        >
          {isPaused ? <Play className="w-4 h-4 text-[#FDF289]" /> : <Pause className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* 3. Hero Story & Action Content */}
      <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end text-white max-w-4xl space-y-4 z-10">
        
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-quando font-normal text-white leading-[1.14] tracking-tight max-w-3xl drop-shadow-md">
          {slide.headline}
        </h2>

        <p className="text-xs sm:text-base text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-sm">
          {slide.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate(slide.actionPage)}
            className={`px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer ${style.primaryBtn}`}
          >
            <span>{slide.actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDonate}
            className={`px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-lg active:scale-95 cursor-pointer ${style.accentBtn}`}
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Support FBF</span>
          </button>
        </div>

        {/* 4. Interactive Photo Thumbnail Strip (Image-Based Carousel Controls) */}
        <div className="pt-4 flex items-center gap-3 overflow-x-auto pb-1 max-w-full">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`relative rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? style.thumbActive : style.thumbInactive
              }`}
              title={s.headline}
            >
              <div className="w-14 h-10 sm:w-20 sm:h-12 bg-slate-900 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.tag}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Prev / Next Slider Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex items-center justify-between pointer-events-none z-10">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="pointer-events-auto p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 shadow-xl cursor-pointer"
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="pointer-events-auto p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 shadow-xl cursor-pointer"
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

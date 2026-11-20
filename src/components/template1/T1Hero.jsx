import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { LIVE_HERO, ORG_DATA } from '../../data/fbfData';

export default function T1Hero({ onOpenDonate, onNavigate }) {
  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-r from-[#5B60E6] via-[#8558CE] to-[#E91E63] text-white font-dm overflow-hidden border-b border-indigo-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Live Headline & Pill Buttons */}
          <div className="lg:col-span-7 space-y-8">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-white leading-[1.18] tracking-tight max-w-2xl">
              Privileging Black girls and women across Canada and globally.
            </h1>

            <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Where Black women increase access to social, political, and economic opportunities for Black female youth (ages 16–22).
            </p>

            {/* Exact Live Site Pill Buttons: White & Butter Yellow */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                LEARN MORE
              </button>

              <button
                onClick={onOpenDonate}
                className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-[#1B2828]" />
                <span>DONATE NOW</span>
              </button>
            </div>

            {/* Quick Charity Metadata Badge */}
            <div className="pt-4 flex items-center gap-3 text-xs text-white/80 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FDF289] animate-pulse" />
              <span>Canadian Registered Charity #{ORG_DATA.charityNumber} • St. Catharines, ON</span>
            </div>

          </div>

          {/* Right Column: Exact Live Site White-Framed Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="p-3 bg-white rounded-[32px] shadow-2xl border border-white/40 aspect-[4/5] overflow-hidden group">
                <img 
                  src="/images/live_site/hero_darina.jpg" 
                  alt="Three young Black women smiling together empowering each other" 
                  className="w-full h-full object-cover rounded-[24px] group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

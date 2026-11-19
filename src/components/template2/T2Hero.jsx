import React from 'react';
import { ArrowRight, Heart, Sparkles, Shield, Users, BookOpen } from 'lucide-react';
import { LIVE_HERO, ORG_DATA } from '../../data/fbfData';

export default function T2Hero({ onOpenDonate, onNavigate }) {
  return (
    <section
      id="t2-hero"
      className="relative text-white font-sans overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #BE185D 0%, #E11D48 35%, #DB2777 70%, #9D174D 100%)'
      }}
    >
      {/* Subtle organic warmth overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(253, 242, 137, 0.4) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Human Storytelling, Authentic Typography, High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            
            {/* Charity & Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs text-rose-100 font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FDF289] animate-pulse" />
              <span>Canadian Registered Charity CRA #{ORG_DATA.charityNumber}</span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="hidden sm:inline text-[#FDF289] font-bold">St. Catharines HQ</span>
            </div>

            {/* Headline in human Quando serif */}
            <h1 className="font-quando text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.16] tracking-tight text-white max-w-2xl drop-shadow-xs">
              Privileging Black girls and women across Canada and globally.
            </h1>

            {/* Subtitle with authentic non-profit mission */}
            <p className="text-rose-100 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              We open doors to culturally responsive mental health care, university transition scholarships, and executive workforce equity for Black female youth (ages 16–22).
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('programs')}
                className="px-8 py-4 rounded-full bg-white text-rose-950 hover:bg-rose-50 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDonate}
                className="px-8 py-4 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>DONATE NOW</span>
              </button>
            </div>

            {/* Social Proof & Trust Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-white/20 max-w-lg">
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-white font-normal">12+</div>
                <div className="text-[11px] uppercase tracking-wider text-rose-200 font-semibold mt-0.5">Active Programs</div>
              </div>
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-[#FDF289] font-normal">$500</div>
                <div className="text-[11px] uppercase tracking-wider text-rose-200 font-semibold mt-0.5">Brock U Award</div>
              </div>
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-white font-normal">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-rose-200 font-semibold mt-0.5">Black-Feminist Led</div>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Layered Editorial Visual Composition (Non-Generic) */}
          <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Main Photo Card in Crisp White Border with Soft Shadow */}
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl relative z-10 transition-transform duration-500 hover:scale-[1.01]">
                <div className="rounded-[2.2rem] overflow-hidden bg-rose-100 aspect-[4/4.3]">
                  <img
                    src={LIVE_HERO.image}
                    alt="Three young Black women smiling together with joy, sisterhood, and empowerment"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                  />
                </div>
              </div>

              {/* Floating Top Accent Badge */}
              <div className="absolute -top-5 -left-5 z-20 bg-white/95 backdrop-blur-md text-slate-900 py-2.5 px-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-fade-in hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Future Black Female</div>
                  <div className="text-[11px] text-rose-600 font-semibold">Empowering Youth Ages 16–22</div>
                </div>
              </div>

              {/* Floating Bottom Scholarship Pill Badge */}
              <div className="absolute -bottom-6 -right-4 z-20 bg-[#1E1122]/95 backdrop-blur-md text-white py-3 px-5 rounded-2xl shadow-2xl border border-[#FDF289]/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDF289] text-slate-950 flex items-center justify-center font-quando font-bold text-base">
                  ★
                </div>
                <div>
                  <div className="text-xs font-quando text-[#FDF289]">Future Black Trailblazers</div>
                  <div className="text-[11px] text-rose-200">Annual Brock University Grant</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Horizontal Quick Ribbon: 3 Signature Program Pillars */}
      <div className="relative border-t border-white/20 bg-black/15 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-rose-100">
            <span className="font-bold text-[#FDF289] uppercase tracking-wider">Our Core Pillars:</span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-300" />
                <span>Pro-Black Mental Health Services</span>
              </button>
              <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FDF289]" />
                <span>Financial Literacy & Wellbeing</span>
              </button>
              <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Career & Education Strategies</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

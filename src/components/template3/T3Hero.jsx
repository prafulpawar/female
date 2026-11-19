import React from 'react';
import { ArrowUpRight, ArrowRight, Heart, Sparkles, BookOpen, Star, Award, ShieldCheck } from 'lucide-react';
import { ORG_DATA, LIVE_HERO, TRAILBLAZERS_ANNOUNCEMENT } from '../../data/fbfData';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function T3Hero({ onOpenDonate, onNavigate }) {
  return (
    <section 
      id="t3-hero" 
      className="bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8] relative overflow-hidden"
    >
      {/* 1. EDITORIAL MASTHEAD RUNNING BAR */}
      <div className="bg-[#F7E8E8]/70 border-b border-[#EAD5D5] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-[#873F50]">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
            <span>FBF JOURNAL • VOLUME 04 • NIAGARA REGION & CANADA</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-[#34252A]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CRA Registered Charity #{ORG_DATA.charityNumber}</span>
            </span>
            <span className="hidden sm:inline text-[#D68D82]">•</span>
            <span className="hidden sm:inline">St. Catharines HQ</span>
          </div>
        </div>
      </div>

      {/* 2. ASYMMETRICAL EDITORIAL COVER SPREAD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Human Readable Typography & Mission */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Sisterhood & Belonging Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7E8E8] border border-[#D68D82]/40 text-[#873F50] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
              <span>RADICAL BELONGING • BLACK FEMINIST PRAXIS</span>
            </div>

            {/* Main Headline in Quando Serif */}
            <h1 className="font-quando text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#34252A] leading-[1.14]">
              A future where every Black girl{' '}
              <span className="italic font-normal text-[#873F50] underline decoration-[#D68D82] underline-offset-8">
                can thrive.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-[#34252A]/85 font-light leading-relaxed max-w-xl">
              Future Black Female (FBF) creates access to culturally safe mental health care, university scholarships, and executive workforce equity for Black female youth (ages 16–22) across Ontario and Canada.
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('whatwedo')}
                className="px-8 py-4 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D9B879]" />
              </button>

              <button
                onClick={onOpenDonate}
                className="px-8 py-4 rounded-full bg-[#F7E8E8] hover:bg-[#ebd3d3] text-[#873F50] border border-[#D68D82]/50 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-2xs active:scale-95"
              >
                <Heart className="w-4 h-4 fill-[#873F50]" />
                <span>SUPPORT CAMPAIGN</span>
              </button>
            </div>

            {/* Social Proof & Trust Stamps */}
            <div className="pt-6 border-t border-[#EAD5D5] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-[#873F50] font-normal">
                  <AnimatedCounter value={1750} suffix="+" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#34252A]/70 font-semibold mt-0.5">
                  Therapy Subsidies
                </div>
              </div>
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-[#D68D82] font-normal">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#34252A]/70 font-semibold mt-0.5">
                  Youth Empowered
                </div>
              </div>
              <div>
                <div className="font-quando text-2xl sm:text-3xl text-[#873F50] font-normal">
                  100%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#34252A]/70 font-semibold mt-0.5">
                  Afrocentric Led
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Multi-Layered Editorial Cover Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Main Photo in Warm Linen Border */}
              <div className="bg-white p-3.5 rounded-[2.5rem] shadow-2xl border border-[#EAD5D5] relative z-10 transition-transform duration-500 hover:scale-[1.01]">
                <div className="rounded-[2.2rem] overflow-hidden bg-[#F7E8E8] aspect-[4/4.5]">
                  <img
                    src={LIVE_HERO.image}
                    alt="Three young Black women smiling together with joy, sisterhood, and community"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                  />
                </div>
              </div>

              {/* Floating Top Stamp: Brock U Trailblazers Award */}
              <div className="absolute -top-5 -left-5 z-20 bg-white/95 backdrop-blur-md text-[#34252A] py-3 px-4 rounded-2xl shadow-xl border border-[#EAD5D5] flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#F7E8E8] text-[#873F50] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#873F50]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#34252A]">Future Black Trailblazers</div>
                  <div className="text-[11px] text-[#873F50] font-semibold">$500 Annual Brock U Award</div>
                </div>
              </div>

              {/* Floating Bottom Quote: Dr. Tapo Chimbganda */}
              <div className="absolute -bottom-6 -right-4 z-20 bg-[#34252A]/95 backdrop-blur-md text-white py-3 px-5 rounded-2xl shadow-2xl border border-[#D9B879]/40 max-w-xs">
                <p className="font-serif italic text-xs text-[#FFF9F2] leading-snug">
                  "When you empower a Black young woman, you transform an entire generation."
                </p>
                <div className="text-[10px] text-[#D9B879] font-bold uppercase tracking-wider mt-1">
                  — Dr. Tapo Chimbganda, Founder
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

import React from 'react';
import { ArrowUpRight, ArrowRight, Heart, Sparkles, BookOpen, Star, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ORG_DATA, LIVE_HERO, TRAILBLAZERS_ANNOUNCEMENT } from '../../data/fbfData';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function T3Hero({ onOpenDonate, onNavigate }) {
  return (
    <section
      id="t3-hero"
      className="relative overflow-hidden font-sans border-b border-[#EAD5D5]"
    >
      {/* 1. TOP ANNOUNCEMENT MASTHEAD */}
      <div className="bg-[#4A2672] text-[#FDF289] py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-[#FDF289] font-bold">Future Black Female</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">Registered Canadian Charity #{ORG_DATA.charityNumber}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-white/90">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>St. Catharines & Niagara Region HQ</span>
            </span>
            <span className="hidden sm:inline text-[#FDF289]">•</span>
            <span className="hidden sm:inline">Operating Across Ontario & Canada</span>
          </div>
        </div>
      </div>

      {/* 2. AUTHENTIC HERO GRADIENT SPREAD (Matching Electric Indigo Gradient) */}
      <div className="bg-gradient-to-r from-[#5B60E6] via-[#8F2E82] to-[#D81B60] text-white py-16 sm:py-24 lg:py-28 relative">

        {/* Soft background glow circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column (7 cols): Official Headline, Subtitle, and Dual CTA Buttons */}
            <div className="lg:col-span-7 space-y-8 text-left">

              {/* Exact Live Site Headline in Quando Serif */}
              <h1 className="font-quando text-3xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-white leading-[1.12]">
                Privileging Black girls and women across Canada and globally.
              </h1>

              {/* Mission Narrative */}
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl">
                Through strong networks, skills advancement programs, and rights-based advocacy, Future Black Female creates access to social, political, and economic opportunities for Black girls and young women (16–22 years).
              </p>

              {/* Exact Live Site Dual Action Buttons (LEARN MORE + DONATE NOW in Butter Yellow) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('whatwedo')}
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-700" />
                </button>

                <button
                  onClick={onOpenDonate}
                  className="px-8 py-4 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>DONATE NOW</span>
                </button>
              </div>

              {/* Real Metrics Ticker */}
              <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-quando text-2xl sm:text-3xl text-[#FDF289] font-normal">
                    <AnimatedCounter value={1750} suffix="+" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                    Therapy Sessions
                  </div>
                </div>
                <div>
                  <div className="font-quando text-2xl sm:text-3xl text-white font-normal">
                    <AnimatedCounter value={500} suffix="+" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                    Youth Empowered
                  </div>
                </div>
                <div>
                  <div className="font-quando text-2xl sm:text-3xl text-[#FDF289] font-normal">
                    $500
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                    Brock U Bursaries
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Photo of Black Women Hugging (Matching Screenshot 1) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">

                {/* Main White Border Photo Frame from Screenshot 1 */}
                <div className="bg-white p-3 sm:p-4 rounded-[2.8rem] shadow-2xl relative z-10 group transition-transform duration-500 hover:scale-[1.01]">
                  <div className="rounded-[2.4rem] overflow-hidden bg-white aspect-[4/4.6]">
                    <img
                      src="/images/live_site/hero_darina.jpg"
                      alt="Three smiling Black women hugging together with warmth, sisterhood, and community"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Floating Top Badge: 1,750+ Therapy Subsidies */}
                <div className="absolute -top-4 -left-4 z-20 bg-white text-slate-900 py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#D81B60] flex items-center justify-center font-bold">
                    <Heart className="w-4 h-4 fill-[#D81B60]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">1,750+ Subsidies</div>
                    <div className="text-[10px] text-slate-500 font-medium">Free Pro-Black Mental Health</div>
                  </div>
                </div>

                {/* Floating Bottom Badge: Brock U Trailblazers Award */}
                <div className="absolute -bottom-5 -right-3 z-20 bg-slate-950/95 backdrop-blur-md text-white py-3 px-5 rounded-2xl shadow-2xl border border-white/10 max-w-xs text-left">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FDF289]" />
                    <span className="text-xs font-bold text-white">Future Black Trailblazers</span>
                  </div>
                  <div className="text-[11px] text-[#FDF289] font-medium mt-0.5">
                    $500 Annual Award for Brock University Students
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

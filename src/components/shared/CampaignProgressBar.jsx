import React, { useState } from 'react';
import { ShieldCheck, Heart, Clock, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import { CAMPAIGN_DATA, ORG_DATA } from '../../data/fbfData';

export default function CampaignProgressBar({ 
  goal = CAMPAIGN_DATA.goal, 
  raised = CAMPAIGN_DATA.raised, 
  donors = CAMPAIGN_DATA.donorsCount,
  daysLeft = CAMPAIGN_DATA.daysLeft,
  onOpenDonate,
  theme = 'warm' // 'warm' | 'burgundy' | 'rose' | 'slate'
}) {
  const [selectedPreset, setSelectedPreset] = useState(50);
  
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const remaining = Math.max(goal - raised, 0);

  // SVG Circular Gauge parameters
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const themes = {
    warm: {
      cardBg: 'bg-gradient-to-br from-white via-[#FAF8F5] to-amber-50/30',
      cardBorder: 'border-[#E8DFC8]',
      badge: 'bg-indigo-50 text-[#5B60E6] border-indigo-200/70',
      accentText: 'text-[#5B60E6]',
      progressTrack: 'bg-stone-100',
      progressFill: 'bg-gradient-to-r from-[#5B60E6] via-[#7B7FEF] to-[#FDF289]',
      ringTrack: 'text-stone-200',
      ringFill: 'text-[#5B60E6]',
      pillActive: 'bg-[#5B60E6] text-white border-[#5B60E6] shadow-sm',
      pillInactive: 'bg-white text-stone-700 border-[#E8DFC8] hover:border-[#5B60E6]',
      ctaBtn: 'bg-[#5B60E6] hover:bg-[#4b50d0] text-white shadow-md shadow-indigo-950/15',
      trackCardBg: 'bg-white/95 border-[#E8DFC8] hover:border-[#5B60E6]/50 hover:shadow-sm',
      trackIconColor: 'text-[#5B60E6] bg-indigo-50',
      consoleBg: 'bg-white border-[#E8DFC8] shadow-xl',
      highlightBadge: 'bg-[#FDF289] text-slate-950',
      boxShadow: 'shadow-xl shadow-stone-900/5'
    },
    burgundy: {
      cardBg: 'bg-gradient-to-br from-white via-[#FFF9F2] to-[#F7E8E8]/50',
      cardBorder: 'border-[#EAD5D5]',
      badge: 'bg-[#F7E8E8] text-[#873F50] border-[#D68D82]/40',
      accentText: 'text-[#873F50]',
      progressTrack: 'bg-[#F7E8E8]',
      progressFill: 'bg-gradient-to-r from-[#6e3140] via-[#873F50] to-[#E5989B]',
      ringTrack: 'text-[#F7E8E8]',
      ringFill: 'text-[#873F50]',
      pillActive: 'bg-[#873F50] text-[#FFF9F2] border-[#873F50] shadow-sm',
      pillInactive: 'bg-white text-[#34252A] border-[#EAD5D5] hover:border-[#873F50]',
      ctaBtn: 'bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] shadow-md shadow-[#873F50]/20',
      trackCardBg: 'bg-white/90 border-[#EAD5D5] hover:border-[#873F50]/50 hover:shadow-md',
      trackIconColor: 'text-[#873F50] bg-[#F7E8E8]',
      consoleBg: 'bg-white border-[#EAD5D5] shadow-xl',
      highlightBadge: 'bg-[#FDF289] text-[#34252A]',
      boxShadow: 'shadow-xl shadow-stone-900/5'
    },
    rose: {
      cardBg: 'bg-gradient-to-br from-white via-[#FFF1F2]/60 to-[#FDF2F8]/80',
      cardBorder: 'border-rose-200/80',
      badge: 'bg-rose-100 text-[#E11D48] border-rose-200',
      accentText: 'text-[#E11D48]',
      progressTrack: 'bg-rose-100/70',
      progressFill: 'bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#FDF289]',
      ringTrack: 'text-rose-100',
      ringFill: 'text-[#E11D48]',
      pillActive: 'bg-[#E11D48] text-white border-[#E11D48] shadow-sm',
      pillInactive: 'bg-white text-slate-700 border-rose-200 hover:border-[#E11D48]',
      ctaBtn: 'bg-[#E11D48] hover:bg-[#BE185D] text-white shadow-rose-900/20',
      trackCardBg: 'bg-white/90 border-rose-100 hover:border-rose-300 hover:shadow-md',
      trackIconColor: 'text-[#E11D48] bg-rose-50',
      consoleBg: 'bg-white border-rose-100 shadow-xl',
      highlightBadge: 'bg-[#FDF289] text-slate-900',
      boxShadow: 'shadow-xl shadow-rose-950/5'
    },
    slate: {
      cardBg: 'bg-gradient-to-br from-white via-slate-50 to-slate-100/50',
      cardBorder: 'border-slate-200',
      badge: 'bg-slate-100 text-slate-800 border-slate-300',
      accentText: 'text-slate-900',
      progressTrack: 'bg-slate-200',
      progressFill: 'bg-gradient-to-r from-slate-700 via-slate-900 to-amber-400',
      ringTrack: 'text-slate-200',
      ringFill: 'text-slate-900',
      pillActive: 'bg-slate-900 text-white border-slate-900 shadow-sm',
      pillInactive: 'bg-white text-slate-700 border-slate-200 hover:border-slate-900',
      ctaBtn: 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20',
      trackCardBg: 'bg-white/90 border-slate-200 hover:border-slate-400 hover:shadow-md',
      trackIconColor: 'text-slate-900 bg-slate-100',
      consoleBg: 'bg-white border-slate-200 shadow-xl',
      highlightBadge: 'bg-amber-300 text-slate-950',
      boxShadow: 'shadow-xl shadow-slate-900/5'
    }
  };

  const style = themes[theme] || themes.warm;
  const presets = [25, 50, 100, 250];

  return (
    <section className="relative font-sans my-8 sm:my-12">
      
      {/* Main Campaign Elevation Container */}
      <div className={`relative rounded-[2.5rem] border ${style.cardBorder} ${style.cardBg} ${style.boxShadow} p-6 sm:p-10 lg:p-12 overflow-hidden`}>
        
        {/* Ambient background blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        {/* 1. TOP STATUS STRIP (Clean & Authentic - No generic view switchers) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs ${style.badge}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Community Campaign</span>
            </span>
            <span className="text-xs font-semibold text-stone-500">
              CRA Registered Charity: <strong className="text-stone-900 font-bold">#{ORG_DATA.charityNumber}</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-stone-200 text-xs font-bold text-stone-700 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#5B60E6]" />
              <span><strong className="text-stone-950">{daysLeft} days</strong> left</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Tax Deductible (CAD)</span>
            </div>
          </div>

        </div>

        {/* 2. UNIFIED BESPOKE 3-COLUMN STORY & GIVING INTERFACE */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-8">
          
          {/* LEFT COLUMN: Photo Story Anchor (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-md h-full min-h-[360px] group">
              <img
                src="/images/live_site/intern_nappy.jpg"
                alt="Future Black Female Scholar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-between p-6">
                
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-stone-900 text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Brock U Scholar</span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.highlightBadge}`}>
                    {percentage}% Funded
                  </span>
                </div>

                <div className="space-y-2 text-white text-left">
                  <p className="text-xs sm:text-sm font-light italic leading-snug text-white/95">
                    "This scholarship and therapy bursary gave me the freedom to focus on academic excellence without constant financial panic."
                  </p>
                  <div className="text-[11px] text-amber-200 font-semibold">
                    — Nia Campbell, 2024 Trailblazer Recipient
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Purpose & 3 Impact Tracks (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-between">
            
            <div className="space-y-3">
              <span className={`text-xs uppercase font-bold tracking-widest block font-mono ${style.accentText}`}>
                COMMUNITY IMPACT INITIATIVE
              </span>
              <h2 className="font-quando text-2xl sm:text-3xl font-normal text-stone-900 leading-tight">
                2024–2025 Future Black Trailblazers Fund
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                Direct scholarships, therapy bursaries, and career accelerators for Black female youth.
              </p>
            </div>

            {/* 3 Impact Tracks */}
            <div className="space-y-3">
              
              <div className={`p-4 rounded-2xl border ${style.trackCardBg} transition-all space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${style.trackIconColor}`}>
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Scholarships</h4>
                </div>
                <p className="text-xs text-stone-600 font-light pl-9 leading-relaxed">
                  $500 annual grants for Brock University students.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${style.trackCardBg} transition-all space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${style.trackIconColor}`}>
                    <Heart className="w-4 h-4" />
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Therapy Bursaries</h4>
                </div>
                <p className="text-xs text-stone-600 font-light pl-9 leading-relaxed">
                  Free 1-on-1 mental health with Afrocentric clinicians.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${style.trackCardBg} transition-all space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${style.trackIconColor}`}>
                    <Zap className="w-4 h-4" />
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Career Pathways</h4>
                </div>
                <p className="text-xs text-stone-600 font-light pl-9 leading-relaxed">
                  Paid internships and executive sponsorship clinics.
                </p>
              </div>

            </div>

            {/* Community Proof */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-600 border-t border-black/5">
              <div className="flex items-center -space-x-2 shrink-0">
                <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white shadow-2xs">
                  AD
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white shadow-2xs">
                  MK
                </div>
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white shadow-2xs">
                  TN
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-[#FDF289] flex items-center justify-center font-bold text-[9px] border-2 border-white shadow-2xs">
                  +425
                </div>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-stone-900 block">{donors} community donors</span>
                <span className="text-[11px] text-stone-500 font-medium">• 100% Tax Deductible (CAD)</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Giving Console (4 cols) */}
          <div className="lg:col-span-4">
            <div className={`rounded-3xl p-6 sm:p-7 ${style.consoleBg} space-y-6 text-left flex flex-col justify-between h-full`}>
              
              <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block font-mono">
                    Total Raised to Date
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-quando text-3xl sm:text-4xl text-stone-950 font-normal">
                      ${raised.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-stone-500 uppercase">
                      CAD
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium block mt-1">
                    of <strong className="text-stone-800 font-bold">${goal.toLocaleString()} CAD</strong> goal
                  </span>
                </div>

                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r={radius} stroke="currentColor" strokeWidth="5" fill="transparent" className={style.ringTrack} />
                    <circle cx="32" cy="32" r={radius} stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className={`transition-all duration-1000 ${style.ringFill}`} />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-xs font-quando font-normal text-stone-900 block leading-none">{percentage}%</span>
                    <span className={`text-[8px] ${style.accentText} font-bold uppercase tracking-wider`}>Funded</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className={`h-3.5 w-full ${style.progressTrack} rounded-full overflow-hidden p-0.5 border border-black/5`}>
                  <div className={`h-full rounded-full transition-all duration-1000 ${style.progressFill}`} style={{ width: `${percentage}%` }} />
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500">
                  <span className={`${style.accentText} font-bold`}>${remaining.toLocaleString()} CAD needed</span>
                  <span>Goal: ${goal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                  Select Contribution Tier
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSelectedPreset(val)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedPreset === val ? style.pillActive : style.pillInactive
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDonate}
                  className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group cursor-pointer ${style.ctaBtn}`}
                >
                  <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                  <span>Support Campaign (${selectedPreset} CAD)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-medium text-center border-t border-stone-100 pt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant CRA Tax Receipt Issued via Email</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

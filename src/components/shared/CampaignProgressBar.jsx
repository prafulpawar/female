import React, { useState } from 'react';
import { ShieldCheck, Heart, Sparkles, Clock, Users, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';
import { CAMPAIGN_DATA, ORG_DATA } from '../../data/fbfData';

export default function CampaignProgressBar({ 
  goal = CAMPAIGN_DATA.goal, 
  raised = CAMPAIGN_DATA.raised, 
  donors = CAMPAIGN_DATA.donorsCount,
  daysLeft = CAMPAIGN_DATA.daysLeft,
  onOpenDonate,
  theme = 'rose' // 'rose' | 'warm' | 'slate' | 'burgundy'
}) {
  const [selectedPreset, setSelectedPreset] = useState(50);
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const remaining = Math.max(goal - raised, 0);

  // SVG Circular Gauge
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const themes = {
    rose: {
      cardBg: 'bg-gradient-to-br from-white via-[#FFF1F2]/60 to-[#FDF2F8]/80',
      cardBorder: 'border-rose-200/80',
      badge: 'bg-rose-100 text-[#E11D48] border-rose-200',
      accentText: 'text-[#E11D48]',
      progressTrack: 'bg-rose-100/70',
      progressFill: 'bg-gradient-to-r from-[#BE185D] via-[#E11D48] to-[#FDF289]',
      ringTrack: 'text-rose-100',
      ringFill: 'text-[#E11D48]',
      pillActive: 'bg-[#E11D48] text-white border-[#E11D48]',
      pillInactive: 'bg-white text-slate-700 border-rose-200 hover:border-[#E11D48]',
      ctaBtn: 'bg-[#E11D48] hover:bg-[#BE185D] text-white shadow-rose-900/20',
      milestoneBg: 'bg-white/80 border-rose-100 text-slate-700',
      boxShadow: 'shadow-xl shadow-rose-950/5'
    },
    warm: {
      cardBg: 'bg-gradient-to-br from-white via-amber-50/40 to-stone-50',
      cardBorder: 'border-amber-200/70',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      accentText: 'text-[#D48B28]',
      progressTrack: 'bg-amber-100/60',
      progressFill: 'bg-gradient-to-r from-[#B45309] via-[#D48B28] to-[#FDE047]',
      ringTrack: 'text-amber-100',
      ringFill: 'text-[#D48B28]',
      pillActive: 'bg-[#D48B28] text-white border-[#D48B28]',
      pillInactive: 'bg-white text-stone-700 border-amber-200 hover:border-[#D48B28]',
      ctaBtn: 'bg-[#D48B28] hover:bg-[#b8761d] text-white shadow-amber-900/20',
      milestoneBg: 'bg-white/80 border-amber-100 text-stone-700',
      boxShadow: 'shadow-xl shadow-stone-900/5'
    },
    burgundy: {
      cardBg: 'bg-gradient-to-br from-white via-[#F7E8E8]/50 to-stone-50',
      cardBorder: 'border-[#D68D82]/40',
      badge: 'bg-[#F7E8E8] text-[#873F50] border-[#D68D82]/50',
      accentText: 'text-[#873F50]',
      progressTrack: 'bg-[#F7E8E8]',
      progressFill: 'bg-gradient-to-r from-[#6e3140] via-[#873F50] to-[#E5989B]',
      ringTrack: 'text-[#F7E8E8]',
      ringFill: 'text-[#873F50]',
      pillActive: 'bg-[#873F50] text-white border-[#873F50]',
      pillInactive: 'bg-white text-stone-700 border-stone-200 hover:border-[#873F50]',
      ctaBtn: 'bg-[#873F50] hover:bg-[#6e3140] text-white shadow-rose-950/20',
      milestoneBg: 'bg-white/80 border-[#D68D82]/30 text-stone-700',
      boxShadow: 'shadow-xl shadow-stone-900/5'
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
      pillActive: 'bg-slate-900 text-white border-slate-900',
      pillInactive: 'bg-white text-slate-700 border-slate-200 hover:border-slate-900',
      ctaBtn: 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20',
      milestoneBg: 'bg-white/80 border-slate-200 text-slate-700',
      boxShadow: 'shadow-xl shadow-slate-900/5'
    }
  };

  const style = themes[theme] || themes.rose;

  const presets = [25, 50, 100, 250];

  return (
    <section className="relative font-sans my-6 sm:my-10">
      
      {/* Main Campaign Elevation Container */}
      <div className={`relative rounded-[2.5rem] border ${style.cardBorder} ${style.cardBg} ${style.boxShadow} p-6 sm:p-10 lg:p-12 overflow-hidden`}>
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        {/* 1. TOP STATUS STRIP: Live Beacon & Countdown */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs ${style.badge}`}>
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
              <span>Active Community Campaign</span>
            </span>
            <span className="text-xs font-semibold text-slate-500">
              CRA Registered Charity: <strong className="text-slate-800 font-bold">#{ORG_DATA.charityNumber}</strong>
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
            <span><strong className="text-slate-950">{daysLeft} days</strong> remaining in this funding cycle</span>
          </div>
        </div>

        {/* 2. MAIN 2-COLUMN ASYMMETRIC GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
          
          {/* Left Column: Purpose, Title & Funding Allocations (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-3">
              <span className={`text-xs uppercase font-bold tracking-widest block ${style.accentText}`}>
                COMMUNITY IMPACT INITIATIVE
              </span>
              <h2 className="font-quando text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 leading-[1.25]">
                {CAMPAIGN_DATA.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                {CAMPAIGN_DATA.subtitle}
              </p>
            </div>

            {/* 3 Impact Allocation Pills (Where the Money Goes) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className={`p-3.5 rounded-2xl border ${style.milestoneBg} space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Award className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Scholarships</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug font-light">
                  $500 annual grants for Brock University students.
                </p>
              </div>

              <div className={`p-3.5 rounded-2xl border ${style.milestoneBg} space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Heart className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Therapy Bursaries</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug font-light">
                  Free 1-on-1 mental health with Afrocentric clinicians.
                </p>
              </div>

              <div className={`p-3.5 rounded-2xl border ${style.milestoneBg} space-y-1 shadow-2xs`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Zap className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Career Pathways</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug font-light">
                  Paid internships and executive sponsorship clinics.
                </p>
              </div>
            </div>

            {/* Community Social Proof Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">
                  AD
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">
                  MK
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">
                  TN
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 text-[#FDF289] flex items-center justify-center font-bold text-[10px] border-2 border-white">
                  +425
                </div>
              </div>

              <div className="flex items-center gap-2">
                <strong className="text-slate-900 font-bold">{donors} community donors</strong>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">100% Tax Deductible (CAD)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Gauge, Progress & Quick Action Console (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-lg space-y-6 text-left">
              
              {/* Header Raised vs Percentage Gauge */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Total Raised to Date
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-quando text-3xl sm:text-4xl text-slate-950 font-normal">
                      ${raised.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      CAD
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    of <strong className="text-slate-800 font-bold">${goal.toLocaleString()} CAD</strong> community goal
                  </span>
                </div>

                {/* Circular Percentage Ring */}
                <div className="relative w-18 h-18 flex items-center justify-center shrink-0">
                  <svg className="w-18 h-18 -rotate-90 transform" viewBox="0 0 70 70">
                    <circle
                      cx="35"
                      cy="35"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="transparent"
                      className={style.ringTrack}
                    />
                    <circle
                      cx="35"
                      cy="35"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className={`transition-all duration-1000 ${style.ringFill}`}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-sm font-quando font-normal text-slate-900 block leading-none">
                      {percentage}%
                    </span>
                    <span className="text-[9px] text-[#E11D48] font-bold uppercase tracking-wider">
                      Funded
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar with Gradient & Milestone Labels */}
              <div className="space-y-2">
                <div className={`h-4 w-full ${style.progressTrack} rounded-full overflow-hidden p-0.5 border border-black/5`}>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${style.progressFill}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="text-[#E11D48] font-bold">
                    ${remaining.toLocaleString()} CAD needed to reach goal
                  </span>
                  <span>Goal: ${goal.toLocaleString()}</span>
                </div>
              </div>

              {/* Preset Giving Chips */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select Contribution Tier
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSelectedPreset(val)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedPreset === val ? style.pillActive : style.pillInactive
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Action Button */}
              <div className="pt-1">
                <button
                  onClick={onOpenDonate}
                  className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group ${style.ctaBtn}`}
                >
                  <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                  <span>Support Campaign (${selectedPreset} CAD)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Security & Receipt Notice */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium text-center">
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

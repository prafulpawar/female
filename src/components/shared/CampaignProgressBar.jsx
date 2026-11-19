import React, { useState } from 'react';
import { ShieldCheck, Heart, Sparkles, Clock, Users, ArrowRight, Award, Zap, CheckCircle2, GraduationCap, LayoutGrid, Layers, BarChart3 } from 'lucide-react';
import { CAMPAIGN_DATA, ORG_DATA } from '../../data/fbfData';

export default function CampaignProgressBar({ 
  goal = CAMPAIGN_DATA.goal, 
  raised = CAMPAIGN_DATA.raised, 
  donors = CAMPAIGN_DATA.donorsCount,
  daysLeft = CAMPAIGN_DATA.daysLeft,
  onOpenDonate,
  theme = 'burgundy' // 'burgundy' | 'rose' | 'warm' | 'slate'
}) {
  const [selectedPreset, setSelectedPreset] = useState(50);
  const [viewMode, setViewMode] = useState('story'); // 'story' | 'matrix' | 'compact'
  
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const remaining = Math.max(goal - raised, 0);

  // SVG Circular Gauge
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const themes = {
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
      boxShadow: 'shadow-xl shadow-stone-900/5',
      switcherBg: 'bg-white border-[#EAD5D5]',
      switcherActive: 'bg-[#873F50] text-white',
      switcherInactive: 'text-[#34252A]/70 hover:text-[#873F50]'
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
      boxShadow: 'shadow-xl shadow-rose-950/5',
      switcherBg: 'bg-white border-rose-200',
      switcherActive: 'bg-[#E11D48] text-white',
      switcherInactive: 'text-slate-600 hover:text-[#E11D48]'
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
      pillActive: 'bg-[#D48B28] text-white border-[#D48B28] shadow-sm',
      pillInactive: 'bg-white text-stone-700 border-amber-200 hover:border-[#D48B28]',
      ctaBtn: 'bg-[#D48B28] hover:bg-[#b8761d] text-white shadow-amber-900/20',
      trackCardBg: 'bg-white/90 border-amber-100 hover:border-amber-300 hover:shadow-md',
      trackIconColor: 'text-[#D48B28] bg-amber-50',
      consoleBg: 'bg-white border-amber-100 shadow-xl',
      highlightBadge: 'bg-amber-200 text-amber-950',
      boxShadow: 'shadow-xl shadow-stone-900/5',
      switcherBg: 'bg-white border-amber-200',
      switcherActive: 'bg-[#D48B28] text-white',
      switcherInactive: 'text-stone-600 hover:text-[#D48B28]'
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
      boxShadow: 'shadow-xl shadow-slate-900/5',
      switcherBg: 'bg-white border-slate-200',
      switcherActive: 'bg-slate-900 text-white',
      switcherInactive: 'text-slate-600 hover:text-slate-900'
    }
  };

  const style = themes[theme] || themes.burgundy;
  const presets = [25, 50, 100, 250];

  return (
    <section className="relative font-sans my-8 sm:my-12">
      
      {/* Main Campaign Elevation Container */}
      <div className={`relative rounded-[2.5rem] border ${style.cardBorder} ${style.cardBg} ${style.boxShadow} p-6 sm:p-10 lg:p-12 overflow-hidden`}>
        
        {/* Ambient background blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        {/* 1. TOP STATUS STRIP & VIEW SWITCHER PILL */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs ${style.badge}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Community Campaign</span>
            </span>
            <span className="text-xs font-semibold text-slate-500">
              CRA Registered Charity: <strong className="text-slate-800 font-bold">#{ORG_DATA.charityNumber}</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            
            {/* INTERACTIVE COMPONENT VIEW SWITCHER */}
            <div className={`inline-flex items-center gap-1 p-1 rounded-full border text-xs shadow-2xs ${style.switcherBg}`}>
              <span className="text-[10px] font-mono font-bold uppercase px-2 text-slate-400">Campaign View:</span>
              <button
                onClick={() => setViewMode('story')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'story' ? style.switcherActive : style.switcherInactive
                }`}
              >
                3-Column Story
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'matrix' ? style.switcherActive : style.switcherInactive
                }`}
              >
                Impact Matrix
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'compact' ? style.switcherActive : style.switcherInactive
                }`}
              >
                Compact Gauge
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-xs font-bold text-slate-700 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#873F50]" />
              <span><strong className="text-slate-950">{daysLeft} days</strong> left</span>
            </div>
          </div>

        </div>

        {/* 2. VIEW VARIANT A: 3-COLUMN ASYMMETRIC PHOTO STORY */}
        {viewMode === 'story' && (
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-8 animate-fade-in">
            
            {/* LEFT COLUMN: Photo Story Anchor (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="relative rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-md h-full min-h-[360px] group">
                <img
                  src="/images/live_site/intern_nappy.jpg"
                  alt="Future Black Female Scholar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-6">
                  
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-500" />
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
                <h2 className="font-quando text-2xl sm:text-3xl font-normal text-slate-900 leading-tight">
                  2024–2025 Future Black Trailblazers Fund
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
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
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Scholarships</h4>
                  </div>
                  <p className="text-xs text-slate-600 font-light pl-9 leading-relaxed">
                    $500 annual grants for Brock University students.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${style.trackCardBg} transition-all space-y-1 shadow-2xs`}>
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${style.trackIconColor}`}>
                      <Heart className="w-4 h-4" />
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Therapy Bursaries</h4>
                  </div>
                  <p className="text-xs text-slate-600 font-light pl-9 leading-relaxed">
                    Free 1-on-1 mental health with Afrocentric clinicians.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${style.trackCardBg} transition-all space-y-1 shadow-2xs`}>
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${style.trackIconColor}`}>
                      <Zap className="w-4 h-4" />
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Career Pathways</h4>
                  </div>
                  <p className="text-xs text-slate-600 font-light pl-9 leading-relaxed">
                    Paid internships and executive sponsorship clinics.
                  </p>
                </div>

              </div>

              {/* Community Proof */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-600 border-t border-black/5">
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
                  <span className="font-bold text-slate-900 block">{donors} community donors</span>
                  <span className="text-[11px] text-slate-500 font-medium">• 100% Tax Deductible (CAD)</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Giving Console (4 cols) */}
            <div className="lg:col-span-4">
              <div className={`rounded-3xl p-6 sm:p-7 ${style.consoleBg} space-y-6 text-left flex flex-col justify-between h-full`}>
                
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                      Total Raised to Date
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="font-quando text-3xl sm:text-4xl text-slate-950 font-normal">
                        ${raised.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        CAD
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      of <strong className="text-slate-800 font-bold">${goal.toLocaleString()} CAD</strong> goal
                    </span>
                  </div>

                  <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                    <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r={radius} stroke="currentColor" strokeWidth="5" fill="transparent" className={style.ringTrack} />
                      <circle cx="32" cy="32" r={radius} stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className={`transition-all duration-1000 ${style.ringFill}`} />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-xs font-quando font-normal text-slate-900 block leading-none">{percentage}%</span>
                      <span className="text-[8px] text-[#873F50] font-bold uppercase tracking-wider">Funded</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className={`h-3.5 w-full ${style.progressTrack} rounded-full overflow-hidden p-0.5 border border-black/5`}>
                    <div className={`h-full rounded-full transition-all duration-1000 ${style.progressFill}`} style={{ width: `${percentage}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="text-[#873F50] font-bold">${remaining.toLocaleString()} CAD needed</span>
                    <span>Goal: ${goal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
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

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium text-center border-t border-slate-100 pt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Instant CRA Tax Receipt Issued via Email</span>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* 3. VIEW VARIANT B: IMPACT MATRIX CARDS */}
        {viewMode === 'matrix' && (
          <div className="relative z-10 pt-8 space-y-8 animate-fade-in text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className={`p-6 rounded-3xl border ${style.consoleBg} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900">
                    Scholarships
                  </span>
                  <GraduationCap className="w-5 h-5 text-purple-700" />
                </div>
                <h3 className="font-quando text-xl text-slate-900 font-normal">
                  Brock University Grants
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  $500 annual grants for incoming Black students, helping offset tuition, books, and campus living costs.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Target: 30 Scholars</span>
                  <span className="text-purple-700 font-semibold">$15,000 Allocated</span>
                </div>
              </div>

              <div className={`p-6 rounded-3xl border ${style.consoleBg} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900">
                    Therapy Bursaries
                  </span>
                  <Heart className="w-5 h-5 text-rose-700" />
                </div>
                <h3 className="font-quando text-xl text-slate-900 font-normal">
                  Culturally Grounded Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Free 1-on-1 mental health sessions with Afrocentric licensed clinicians through the Udada project.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">1,750+ Sessions</span>
                  <span className="text-rose-700 font-semibold">$20,000 Allocated</span>
                </div>
              </div>

              <div className={`p-6 rounded-3xl border ${style.consoleBg} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                    Career Pathways
                  </span>
                  <Zap className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-quando text-xl text-slate-900 font-normal">
                  Executive Acceleration
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Paid internships, executive sponsorship clinics, and direct job placement for Black female youth.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Paid Placements</span>
                  <span className="text-emerald-700 font-semibold">$15,000 Allocated</span>
                </div>
              </div>

            </div>

            {/* Quick Giving Bar */}
            <div className={`p-6 rounded-3xl ${style.consoleBg} flex flex-col sm:flex-row items-center justify-between gap-6`}>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 font-mono block">Community Progress</span>
                <div className="font-quando text-2xl text-slate-900 font-normal mt-0.5">${raised.toLocaleString()} CAD raised of ${goal.toLocaleString()} CAD goal ({percentage}% Funded)</div>
              </div>
              <button
                onClick={onOpenDonate}
                className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer ${style.ctaBtn}`}
              >
                <span>Support Future Black Trailblazers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* 4. VIEW VARIANT C: COMPACT GAUGE CONSOLE */}
        {viewMode === 'compact' && (
          <div className="relative z-10 pt-8 animate-fade-in text-left">
            <div className={`rounded-3xl p-8 ${style.consoleBg} space-y-6`}>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-quando text-3xl sm:text-4xl text-slate-900 font-normal">${raised.toLocaleString()} CAD</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FDF289] text-slate-950">{percentage}% Funded</span>
                    <span className="text-xs text-slate-500">Goal: ${goal.toLocaleString()} CAD</span>
                  </div>

                  <div className={`h-4 w-full ${style.progressTrack} rounded-full overflow-hidden p-0.5 border border-black/5`}>
                    <div className={`h-full rounded-full transition-all duration-1000 ${style.progressFill}`} style={{ width: `${percentage}%` }} />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-bold text-[#873F50]">${remaining.toLocaleString()} CAD needed to reach goal</span>
                    <span>{donors} community donors • 100% Tax Deductible (CAD)</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-center space-y-3">
                  <button
                    onClick={onOpenDonate}
                    className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${style.ctaBtn}`}
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>Support Campaign (${selectedPreset} CAD)</span>
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant CRA Tax Receipt Issued via Email</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
}

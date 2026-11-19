import React, { useState } from 'react';
import { PROGRAMS } from '../../data/fbfData';
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Heart, Users, Award, ExternalLink, Calendar, Search } from 'lucide-react';

export default function T2ProgramsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Mental Health',
    'Economic & Career',
    'Youth Empowerment',
    'Arts-Based'
  ];

  // Lucrative value mapping for each program
  const programHighlights = {
    'gbv-ipv': {
      valueBadge: '100% Free Confidential Care',
      gradient: 'from-[#1E3A8A] via-[#0284C7] to-[#0D9488]',
      tagBg: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30',
      icon: '🌸',
      metric: 'Over 1,750+ Subsidized Sessions'
    },
    'gbv-training': {
      valueBadge: 'Certified Facilitator Curriculum',
      gradient: 'from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]',
      tagBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      icon: '📚',
      metric: 'Instructional Accreditation'
    },
    'empower-youth': {
      valueBadge: 'Building Safer Communities Grant',
      gradient: 'from-[#831843] via-[#BE185D] to-[#E11D48]',
      tagBg: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
      icon: '✨',
      metric: 'Conflict Mediation Retreats'
    },
    'diverse-voices': {
      valueBadge: 'Indigenous & Black Youth Alliance',
      gradient: 'from-[#701A75] via-[#A21CAF] to-[#C026D3]',
      tagBg: 'bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/30',
      icon: '🤝',
      metric: '200+ Youth Engaged in Niagara'
    },
    'campus-dropin': {
      valueBadge: 'Free Secondary & Post-Secondary Hub',
      gradient: 'from-[#064E3B] via-[#047857] to-[#10B981]',
      tagBg: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
      icon: '🏫',
      metric: 'On-Campus Clinical Check-ins'
    },
    'soul-canvas': {
      valueBadge: 'Suitcase in Point Arts Partnership',
      gradient: 'from-[#9A3412] via-[#EA580C] to-[#F59E0B]',
      tagBg: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
      icon: '🎨',
      metric: 'Public Exhibition & Healing'
    },
    'financial-literacy': {
      valueBadge: 'Sovereign Wealth & Tax Clinics',
      gradient: 'from-[#1E3A8A] via-[#2563EB] to-[#38BDF8]',
      tagBg: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
      icon: '💰',
      metric: 'Credit Building & Tax Filing'
    },
    'entrepreneurship-accelerator': {
      valueBadge: 'RBC & Brock LINC Incubator',
      gradient: 'from-[#4A044E] via-[#701A75] to-[#D946EF]',
      tagBg: 'bg-pink-500/20 text-pink-200 border-pink-400/30',
      icon: '🚀',
      metric: '46+ Black Women Founders'
    },
    'udada-project': {
      valueBadge: 'National Movement in Swahili',
      gradient: 'from-[#581C87] via-[#7E22CE] to-[#A855F7]',
      tagBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      icon: '💜',
      metric: 'Sisterhood Across Canada'
    },
    'bwes-project': {
      valueBadge: 'WAGE Canada Sponsored',
      gradient: 'from-[#14532D] via-[#15803D] to-[#22C55E]',
      tagBg: 'bg-green-500/20 text-green-200 border-green-400/30',
      icon: '🏛️',
      metric: 'Paid Labor Readiness Pipelines'
    },
    'mental-health-symposium': {
      valueBadge: 'Annual National Conference',
      gradient: 'from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
      tagBg: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/30',
      icon: '🎤',
      metric: 'Keynotes & Policy Frameworks'
    },
    'future-black-trailblazers': {
      valueBadge: '$500 Annual Brock University Award',
      gradient: 'from-[#881337] via-[#BE123C] to-[#FB7185]',
      tagBg: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
      icon: '🎓',
      metric: 'Incoming Scholar Grants'
    }
  };

  const filteredPrograms = PROGRAMS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Mental Health' && (p.category.toLowerCase().includes('mental') || p.title.toLowerCase().includes('mental') || p.title.toLowerCase().includes('violence'))) ||
      (selectedCategory === 'Economic & Career' && (p.category.toLowerCase().includes('financial') || p.category.toLowerCase().includes('economic') || p.category.toLowerCase().includes('entrepreneurship'))) ||
      (selectedCategory === 'Youth Empowerment' && (p.category.toLowerCase().includes('youth') || p.category.toLowerCase().includes('community') || p.audience.toLowerCase().includes('all black youth'))) ||
      (selectedCategory === 'Arts-Based' && (p.category.toLowerCase().includes('arts') || p.title.toLowerCase().includes('canvas') || p.title.toLowerCase().includes('culture')));

    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="t2-programs" className="bg-[#FAF8F5] text-slate-900 font-sans pb-28">
      
      {/* 1. TOP HEADER BANNER (Vibrant Civic Rose Gradient) */}
      <div 
        className="text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4A1D96 0%, #7C3AED 35%, #C026D3 75%, #E11D48 100%)'
        }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FDF289]" />
            <span>12 CO-DESIGNED INITIATIVES • 100% SUBSIDIZED ACCESS</span>
          </div>

          <h1 className="font-quando text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-white leading-tight">
            Our Programs & Initiatives
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            FBF develops and delivers targeted, culturally responsive, and feminist-informed community projects for Black girls and women between 16 and 22 years. The projects promote mental health and wellbeing, advance educational attainment and career advancement, and foster economic security and leadership development.
          </p>

          {/* Quick Metrics Strip */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-center border-t border-white/20">
            <div>
              <span className="font-quando text-2xl text-[#FDF289] font-normal">1,750+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/80 block mt-0.5">Therapy Sessions</span>
            </div>
            <div>
              <span className="font-quando text-2xl text-white font-normal">500+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/80 block mt-0.5">Youth Empowered</span>
            </div>
            <div>
              <span className="font-quando text-2xl text-[#FDF289] font-normal">$500</span>
              <span className="text-[11px] uppercase tracking-wider text-white/80 block mt-0.5">Brock U Grants</span>
            </div>
            <div>
              <span className="font-quando text-2xl text-white font-normal">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-white/80 block mt-0.5">Free for Youth</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY FILTER & SEARCH BAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#7C3AED] text-white shadow-md'
                    : 'bg-white border border-slate-300 text-slate-700 hover:border-[#7C3AED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#7C3AED] transition-colors"
            />
          </div>

        </div>
      </div>

      {/* 3. LUCRATIVE IMAGE-RICH PROGRAM CARDS SPREAD */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-6">
        {filteredPrograms.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 font-light text-sm">No programs found matching your search.</p>
          </div>
        ) : (
          filteredPrograms.map((program) => {
            const highlight = programHighlights[program.id] || {
              valueBadge: 'Zero-Cost Community Initiative',
              gradient: 'from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]',
              tagBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
              icon: '✨',
              metric: 'Ages 16–22 Target Cohort'
            };

            return (
              <div key={program.id} className="space-y-3 group">
                
                {/* Top Value Strip & Status Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 bg-white border border-slate-300 shadow-2xs">
                      <span>{highlight.icon}</span>
                      <span>{program.category}</span>
                    </span>
                    <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                      • {program.audience}
                    </span>
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FDF289] text-slate-950 shadow-2xs">
                    {highlight.valueBadge}
                  </span>
                </div>

                {/* Main Asymmetrical Split Card with High-Impact Gradient & Photo */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 rounded-[2.5rem] overflow-hidden shadow-xl bg-gradient-to-r ${highlight.gradient} text-white border border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                  
                  {/* Left Narrative Panel (7 cols) */}
                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 text-left relative z-10">
                    
                    <div className="space-y-4">
                      
                      {/* Metric Pill */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FDF289]" />
                        <span>{highlight.metric}</span>
                      </div>

                      {/* Title in Quando Serif and Butter Yellow */}
                      <h3 className="font-quando text-2xl sm:text-3xl lg:text-[34px] text-[#FDF289] font-normal leading-snug">
                        {program.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-white text-sm sm:text-base leading-relaxed font-light">
                        {program.summary}
                      </p>

                      {/* Deep Details */}
                      <div className="p-4 rounded-2xl bg-black/15 backdrop-blur-sm border border-white/10 space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#FDF289] block font-mono">
                          CURRICULUM & CLINICAL FOCUS:
                        </span>
                        <p className="text-xs text-white/90 leading-relaxed font-light">
                          {program.details}
                        </p>
                      </div>

                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/15">
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                      >
                        <span>LEARN MORE &gt;</span>
                      </a>

                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                      >
                        <span>ENROLL IN COHORT</span>
                        <ArrowUpRight className="w-4 h-4 text-[#FDF289]" />
                      </a>
                    </div>

                  </div>

                  {/* Right High-Resolution Photo Container (5 cols) */}
                  <div className="lg:col-span-5 relative bg-slate-950 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                    />
                    
                    {/* Visual Overlay Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="px-3 py-1 rounded-full bg-white/90 text-slate-950 text-[11px] font-bold shadow-md">
                          Ages 16–22
                        </span>
                        <span className="text-[#FDF289] text-[11px] font-bold">
                          Ontario & Canada
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })
        )}
      </div>

    </section>
  );
}

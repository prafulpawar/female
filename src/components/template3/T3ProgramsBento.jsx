import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Users, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../../data/fbfData';

export default function T3ProgramsBento() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Mental Health',
    'Financial Wellbeing',
    'Economic Security',
    'Youth Empowerment',
    'Arts & Culture'
  ];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.audience.toLowerCase().includes(selectedCategory.toLowerCase()));

  const featuredLead = PROGRAMS[0]; // Udada Sisterhood as flagship
  const supportingPrograms = filteredPrograms.filter(p => p.id !== featuredLead.id);

  return (
    <section id="t3-programs" className="bg-[#FFF9F2] text-[#34252A] font-sans pb-24">
      
      {/* 1. EDITORIAL HEADER WITH ISSUE TAG */}
      <div className="bg-[#873F50] text-[#FFF9F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#D9B879] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B879]" />
            <span>FBF PROGRAMMATIC CATALOGUE • 12 INITIATIVES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FFF9F2] max-w-3xl leading-tight">
            Holistic Care & Sisterhood Initiatives.
          </h1>

          <p className="text-[#FFF9F2]/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Culturally affirming mental health sanctuaries, economic mobility accelerators, and academic bursaries specifically designed for Black girls and young women (ages 16–22) across Canada.
          </p>
        </div>
      </div>

      {/* 2. CATEGORY PILL FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#873F50] text-[#FFF9F2] shadow-sm'
                  : 'bg-white border border-[#EAD5D5] text-[#34252A] hover:border-[#873F50]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAGAZINE FEATURE STORY: FLAGSHIP PROGRAM SPREAD */}
      {selectedCategory === 'All' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="rounded-3xl bg-white border border-[#EAD5D5] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Cover on Left */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full bg-stone-900">
              <img
                src={featuredLead.image}
                alt={featuredLead.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/95 text-[#873F50] shadow-xs">
                FEATURED FLAGSHIP INITIATIVE
              </span>
            </div>

            {/* Editorial Panel on Right */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4 text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D68D82] block">
                  {featuredLead.category} • {featuredLead.audience}
                </span>

                <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A] leading-tight">
                  {featuredLead.title}
                </h2>

                <p className="text-sm sm:text-base text-[#34252A]/80 leading-relaxed font-light">
                  {featuredLead.summary}
                </p>

                <p className="text-xs text-[#34252A]/70 leading-relaxed pt-2 border-t border-[#F7E8E8]">
                  {featuredLead.details}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={featuredLead.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xs group"
                >
                  <span>Join This Sisterhood Cohort</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. ASYMMETRICAL EDITORIAL BENTO GRID SPREAD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === 'All' ? supportingPrograms : filteredPrograms).map((prog, idx) => (
            <div
              key={prog.id}
              className={`rounded-3xl p-7 flex flex-col justify-between space-y-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-left ${
                idx % 3 === 0 
                  ? 'bg-white border-[#EAD5D5]' 
                  : idx % 3 === 1 
                  ? 'bg-[#F7E8E8]/70 border-[#EAD5D5]' 
                  : 'bg-white border-[#EAD5D5]'
              }`}
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="h-44 rounded-2xl overflow-hidden bg-stone-100 relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#873F50]">
                    {prog.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-quando font-normal text-xl text-[#34252A] leading-snug">
                    {prog.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#873F50] block font-semibold">
                    {prog.audience}
                  </span>
                  <p className="text-xs text-[#34252A]/80 leading-relaxed font-light">
                    {prog.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD5D5]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#34252A]/60">Ages 16–22</span>
                <a
                  href={prog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#873F50] hover:text-[#6e3140] inline-flex items-center gap-1 group"
                >
                  <span>Explore Cohort</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

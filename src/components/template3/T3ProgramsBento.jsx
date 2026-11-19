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

      {/* 4. ASYMMETRICAL EDITORIAL BENTO GRID SPREAD (Full Warm Blush Background) */}
      <div className="py-16 sm:py-20 bg-[#F7E8E8] border-y border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              HOLISTIC CONTINUUM OF CARE
            </span>
            <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A]">
              All Specialized Youth Cohorts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' ? supportingPrograms : filteredPrograms).map((prog, idx) => (
              <div
                key={prog.id}
                className="rounded-3xl p-7 flex flex-col justify-between space-y-6 border border-[#EAD5D5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left group"
              >
                <div className="space-y-4">
                  {/* Visual Thumbnail */}
                  <div className="h-48 rounded-2xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                    />
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#873F50] shadow-xs">
                      {prog.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-quando font-normal text-xl text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
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
      </div>

      {/* 5. TANGIBLE OUTCOMES & LIVING WAGE STRIP (Full Royal Purple Background) */}
      <section className="py-20 sm:py-24 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
              PROGRAMMATIC ACCOUNTABILITY
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF289] tracking-tight">
              Direct Value for Every Youth
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-light">
              We eliminate financial barriers so Black female youth can participate freely without economic strain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF289] text-slate-950 font-bold flex items-center justify-center text-xl">
                🎓
              </div>
              <h3 className="font-quando text-2xl text-white font-normal">
                $500 Brock Award
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                Direct academic scholarships awarded annually to incoming Brock University Black female scholars.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF289] text-slate-950 font-bold flex items-center justify-center text-xl">
                🌸
              </div>
              <h3 className="font-quando text-2xl text-white font-normal">
                $0 Therapy Cost
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                Valued at $220/session, 100% subsidized with licensed Afrocentric clinical psychologists.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF289] text-slate-950 font-bold flex items-center justify-center text-xl">
                💼
              </div>
              <h3 className="font-quando text-2xl text-white font-normal">
                $17.50+/hr CSJ Wage
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                Paid professional youth internships funded through Canada Summer Jobs and private endowments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOOK CLUB BANNER: MELANIN & MANUSCRIPTS (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-950 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest">
                LITERARY SANCTUARY • AGES 16–22
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 leading-tight">
                Melanin & Manuscripts Book Club
              </h2>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-light">
                A sanctuary for Black women to connect, reflect, and find community through books, creative writing, and culturally affirming discussions. Cohorts meet monthly in Niagara and virtually across Canada.
              </p>
              <div className="pt-2">
                <a
                  href="https://futureblackfemale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#FDF289]" />
                  <span>Join Reading Circle</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/downloaded/programs_75.jpg"
                  alt="Melanin & Manuscripts Book Club"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}

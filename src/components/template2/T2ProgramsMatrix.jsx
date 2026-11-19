import React, { useState } from 'react';
import { PROGRAMS } from '../../data/fbfData';

export default function T2ProgramsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'All Genders Programs',
    'Mental Health',
    'Economic & Career',
    'Arts-Based'
  ];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => {
        if (selectedCategory === 'All Genders Programs') {
          return p.audience.toLowerCase().includes('all genders') || p.category.toLowerCase().includes('youth') || p.category.toLowerCase().includes('brotherhood');
        }
        if (selectedCategory === 'Mental Health') {
          return p.category.toLowerCase().includes('mental') || p.title.toLowerCase().includes('mental') || p.title.toLowerCase().includes('therapy');
        }
        if (selectedCategory === 'Economic & Career') {
          return p.category.toLowerCase().includes('financial') || p.category.toLowerCase().includes('economic') || p.category.toLowerCase().includes('career');
        }
        if (selectedCategory === 'Arts-Based') {
          return p.category.toLowerCase().includes('arts') || p.category.toLowerCase().includes('culture');
        }
        return true;
      });

  return (
    <section id="t2-programs" className="bg-slate-50 text-slate-900 font-sans pb-24">
      
      {/* 1. TOP HEADER BANNER (Exact Screenshot 13) */}
      <div 
        className="text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background: 'linear-gradient(135deg, #7A5AF8 0%, #8B5CF6 30%, #C026D3 75%, #EC4899 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-quando text-3xl sm:text-5xl lg:text-[52px] font-normal tracking-tight text-white">
            Our Programs
          </h1>
          <p className="text-white text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            FBF develops and delivers targeted, culturally responsive, and feminist-informed community projects for Black girls and women between 16 and 22 years. The projects promote mental health and wellbeing, advance educational attainment and career advancement, and foster economic security and leadership development. Many projects are delivered through multiple cohorts over time.
          </p>
        </div>
      </div>

      {/* 2. CATEGORY FILTER PILLS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'bg-white border border-slate-300 text-slate-700 hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. HORIZONTAL SPLIT PROGRAM CARDS (Exact Screenshots 5, 10, 15) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-6">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="space-y-2">
            
            {/* Pill Tag Above Card */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 bg-white border border-slate-300 shadow-2xs">
                {program.category.includes('All Genders') ? 'All Genders Programs' : `${program.category} • Ages 16–22`}
              </span>
            </div>

            {/* Split Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl bg-[#7C3AED]">
              
              {/* Left Colored Text Panel */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <h3 className="font-quando text-2xl sm:text-3xl lg:text-[32px] text-[#FDF289] font-normal leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed font-light">
                    {program.summary}
                  </p>
                  <p className="text-xs text-purple-100 leading-relaxed font-normal">
                    {program.details}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-7 py-3 rounded-full bg-[#FDF289] hover:bg-[#FBE850] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    LEARN MORE &gt;
                  </a>
                </div>
              </div>

              {/* Right Photo */}
              <div className="lg:col-span-5 bg-slate-900 aspect-[4/3] lg:aspect-auto">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                />
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

import React from 'react';
import { 
  HeartHandshake, TrendingUp, Briefcase, Award, ShieldCheck, 
  FileText, Users, ArrowRight 
} from 'lucide-react';
import { 
  ORG_DATA, CORE_PILLARS, IMPACT_METRICS, 
  PROGRAMS, RESEARCH_REPORTS 
} from '../../data/fbfData';

export default function ContentOverview({ onSelectTemplate }) {
  return (
    <section className="py-16 bg-white text-stone-900 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Organization Verification Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Content & Business Verification
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-900">
              Future Black Female Profile
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Founded in 2019 by <strong className="text-stone-900 font-semibold">Dr. Tapo Chimbganda</strong> and headquartered in St. Catharines, Niagara Region, FBF provides holistic, culturally responsive support systems for Black girls and young women (ages 16–22) across Canada.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#FAF8F5] border border-stone-200 text-xs space-y-1 shrink-0">
            <div className="text-stone-500 font-semibold">Registered Canadian Charity:</div>
            <div className="text-[#D48B28] font-mono font-bold text-sm">#{ORG_DATA.charityNumber}</div>
            <div className="text-stone-600">Head Office: {ORG_DATA.headOffice.address}, {ORG_DATA.headOffice.city}, ON</div>
          </div>
        </div>

        {/* 3 Strategic Pillars Overview */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Three Strategic Pillars
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              Core Wellbeing Development Strategy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div 
                key={pillar.id}
                className="p-6 rounded-lg bg-[#FAF8F5] border border-stone-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-black text-[#D48B28]">{pillar.metric}</span>
                  <span className="text-[11px] text-stone-500 uppercase font-semibold">{pillar.metricLabel}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900">{pillar.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Impact Metrics */}
        <div className="p-8 rounded-lg bg-[#FAF8F5] border border-stone-200 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-stone-900">Empirical Community Impact</h3>
            <p className="text-xs text-stone-600 mt-1">Measurable outcomes delivered across Canadian youth cohorts</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {IMPACT_METRICS.map((m, i) => (
              <div key={i} className="p-3 bg-white rounded border border-stone-200 shadow-2xs">
                <div className="text-2xl font-serif font-black text-[#D48B28]">{m.value}</div>
                <div className="text-xs font-semibold text-stone-800 mt-0.5">{m.label}</div>
                <div className="text-[11px] text-stone-500 mt-0.5">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Programs Snapshot */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                Holistic Service Catalog
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                12 Verified Community Programs
              </h3>
            </div>
            <span className="text-xs text-stone-500">Shared identically across all three design concepts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="p-4 rounded-lg bg-[#FAF8F5] border border-stone-200 text-xs space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D48B28]">
                    {prog.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-stone-900 mt-0.5">
                    {prog.title}
                  </h4>
                  <p className="text-stone-600 line-clamp-2 mt-1">
                    {prog.summary}
                  </p>
                </div>
                <span className="text-[11px] text-stone-500 pt-2 block border-t border-stone-200 font-medium">
                  {prog.audience}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';

export default function T2ResearchVault() {
  return (
    <section id="t2-research" className="py-16 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
            Policy & Empirical Data
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
            Research Hub & Policy Archive
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Data that centres Black youth — disaggregated, intersectional, and ready for action. Translating lived experiences into actionable clinical standards and federal policy briefs.
          </p>
        </div>

        {/* 3 Research Reports */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_REPORTS.map((rpt) => (
            <div
              key={rpt.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-colors shadow-2xs"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] block">
                  Report {rpt.number} • {rpt.tag}
                </span>
                <h3 className="font-quando font-normal text-lg text-slate-900 leading-snug">
                  {rpt.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {rpt.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {rpt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href={rpt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#7C3AED] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Download Whitepaper (PDF)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              National & Regional Coverage
            </span>
            <h3 className="text-xl font-quando font-normal text-slate-900 mt-1">
              Press Features & Media
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#7C3AED] transition-colors"
              >
                <span className="text-xs font-bold text-[#7C3AED] block">
                  {feat.outlet}
                </span>
                <h4 className="font-quando font-normal text-sm text-slate-900">
                  {feat.headline}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {feat.excerpt}
                </p>
                <a
                  href={feat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#7C3AED] pt-2"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3 text-[#7C3AED]" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

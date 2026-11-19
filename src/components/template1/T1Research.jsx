import React from 'react';
import { Download, ExternalLink, Newspaper, BookOpen } from 'lucide-react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';

export default function T1Research() {
  return (
    <section id="research" className="py-16 lg:py-20 bg-white text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
            Evidence & Policy Lab
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828] leading-tight">
            Research Hub
          </h2>
          <p className="text-stone-700 text-base leading-relaxed">
            Data that centres Black youth — disaggregated, intersectional, and ready for action. FBF conducts rigorous clinical and socio-economic research to inform federal, provincial, and community policies.
          </p>
        </div>

        {/* 3 Downloadable Research Reports */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_REPORTS.map((rpt) => (
            <div
              key={rpt.id}
              className="bg-[#FAF8F5] border-2 border-[#1B2828]/10 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#D48B28] transition-all shadow-xs"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D48B28] block">
                  Report {rpt.number} • {rpt.tag}
                </span>
                <h3 className="font-quando font-normal text-lg text-[#1B2828] leading-snug">
                  {rpt.title}
                </h3>
                <p className="text-xs text-[#D48B28] font-bold">
                  {rpt.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {rpt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8DFC8]">
                <a
                  href={rpt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2828] hover:text-[#D48B28] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Whitepaper (PDF)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Press & Media Coverage Strip */}
        <div className="pt-8 border-t border-[#E8DFC8] space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Broadcast & News
            </span>
            <h3 className="text-xl font-quando font-normal text-[#1B2828] mt-1">
              Media Features & Press
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] space-y-2 shadow-2xs"
              >
                <span className="text-xs font-bold text-[#D48B28] block">
                  {feat.outlet}
                </span>
                <h4 className="font-quando font-normal text-sm text-[#1B2828]">
                  {feat.headline}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.excerpt}
                </p>
                <a
                  href={feat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1B2828] hover:text-[#D48B28] pt-2 transition-colors"
                >
                  <span>Read Coverage</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

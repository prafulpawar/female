import React from 'react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';
import { Download, ExternalLink, FileText, Sparkles } from 'lucide-react';

export default function T3Research() {
  return (
    <section id="t3-research" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
            <Sparkles className="w-3 h-3 text-[#D68D82]" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
            Research Hub
          </h2>
          <p className="text-base sm:text-lg text-[#873F50] font-serif italic">
            "Data that centres Black youth — disaggregated, intersectional, and ready for action."
          </p>
          <p className="text-[#34252A]/80 text-sm sm:text-base leading-relaxed font-light">
            Welcome to Future Black Female’s Research Hub, a growing archive of empirical data and insights on the lives of Black youth in Canada. With race and gender-based data often missing from public sources, this hub helps fill that critical gap.
          </p>
        </div>

        {/* 3 Reports Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_REPORTS.map((report) => (
            <div
              key={report.id}
              className="p-8 rounded-3xl bg-white border border-[#F7E8E8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#F7E8E8] text-[#873F50] font-serif font-bold text-base flex items-center justify-center border border-[#EAD5D5]">
                    {report.number}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                    {report.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                    {report.title}
                  </h3>
                  <p className="text-xs font-bold text-[#D68D82] mt-1">
                    {report.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#34252A]/70 leading-relaxed font-light">
                  {report.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7E8E8]">
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F7E8E8]/70 hover:bg-[#873F50] text-[#873F50] hover:text-white border border-[#EAD5D5] hover:border-[#873F50] text-xs font-bold transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Report</span>
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FBF In The Media Bento Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7E8E8]/70 border border-[#EAD5D5] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAD5D5]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#873F50]">NATIONAL PRESS</span>
              <h3 className="text-2xl font-serif font-bold text-[#34252A] mt-0.5">FBF in the Media</h3>
            </div>
            <span className="text-xs text-[#34252A]/60">Amplifying youth realities across Canada</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_FEATURES.map((media, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#EAD5D5] shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#873F50] uppercase tracking-wider">
                      {media.outlet}
                    </span>
                    <span className="text-[10px] text-[#34252A]/60 font-medium bg-[#F7E8E8] px-2 py-0.5 rounded">
                      {media.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#34252A] leading-snug">
                    {media.headline}
                  </h4>
                  <p className="text-xs text-[#34252A]/70 leading-relaxed font-light">
                    {media.excerpt}
                  </p>
                </div>

                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#873F50] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Read Article</span>
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

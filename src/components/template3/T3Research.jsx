import React from 'react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';
import { Download, ExternalLink, FileText, Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function T3Research() {
  const reportImages = [
    '/images/downloaded/research_137.jpg',
    '/images/downloaded/research_141.jpg',
    '/images/downloaded/research_147.jpg'
  ];

  return (
    <div id="t3-research" className="text-[#34252A] font-sans">
      
      {/* 1. CLINICAL GUIDELINES & MONOGRAPHS (Full Warm Cream Background) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-mono font-bold uppercase tracking-widest border border-[#D68D82]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
              <span>EMPIRICAL EVIDENCE & CLINICAL DOSSIERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
              Research Hub & Policy Archive
            </h2>
            <p className="text-base sm:text-lg text-[#873F50] font-serif italic">
              "Data that centres Black youth — disaggregated, intersectional, and ready for action."
            </p>
            <p className="text-[#34252A]/80 text-sm sm:text-base leading-relaxed font-light">
              Translating lived experiences into actionable clinical standards and federal policy briefs. Addressing the systemic gap in Canadian healthcare and institutional decision-making.
            </p>
          </div>

          {/* 3 Reports Bento Cards with Document Covers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_REPORTS.map((report, idx) => (
              <div
                key={report.id}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group text-left"
              >
                <div className="space-y-4">
                  {/* Report Cover Thumbnail */}
                  <div className="h-44 rounded-2xl overflow-hidden bg-stone-900 relative shadow-inner">
                    <img
                      src={reportImages[idx % reportImages.length]}
                      alt={report.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      onError={(e) => { e.target.src = '/images/downloaded/about_32.jpg'; }}
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white text-[#873F50] font-serif font-bold text-xs flex items-center justify-center shadow-md">
                        {report.number}
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#873F50] shadow-xs">
                      {report.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                      {report.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D68D82] mt-1 font-mono">
                      {report.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#34252A]/70 leading-relaxed font-light">
                    {report.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-[#F7E8E8] hover:bg-[#873F50] text-[#873F50] hover:text-white border border-[#EAD5D5] hover:border-[#873F50] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between group/btn shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Monograph (PDF)</span>
                    </span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. NATIONAL MEDIA & PRESS COVERAGE (Full Royal Purple Background) */}
      <section className="py-20 sm:py-28 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-6 text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FDF289] block">
                PRESS & NATIONAL RECOGNITION
              </span>
              <h3 className="font-quando text-3xl sm:text-4xl text-white font-normal mt-1">
                FBF in the Media
              </h3>
            </div>
            <span className="text-xs text-white/80 font-mono">
              Amplifying youth realities across Canada
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {MEDIA_FEATURES.map((media, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col justify-between space-y-5 group hover:border-[#FDF289]/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FDF289] uppercase tracking-wider font-mono">
                      {media.outlet}
                    </span>
                    <span className="text-[10px] text-slate-950 font-bold bg-[#FDF289] px-2.5 py-0.5 rounded-full">
                      {media.badge}
                    </span>
                  </div>
                  <h4 className="font-quando text-lg text-white leading-snug group-hover:text-[#FDF289] transition-colors">
                    {media.headline}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {media.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#FDF289] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5"
                  >
                    <span>Read Press Coverage</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISAGGREGATED DATA & METHODOLOGY (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-950 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest">
                EVIDENCE-BASED ADVOCACY
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 leading-tight">
                Empirical Rigor Rooted in Sisterhood
              </h2>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-light">
                Our policy monographs examine systemic care gaps affecting immigrant, racialized, and Francophone Black women in Ontario and across Canada. We provide open data that informs school board policy, provincial health directives, and federal funding allocations.
              </p>
              <div className="pt-2">
                <a
                  href="https://futureblackfemale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Request Custom Dataset Access</span>
                  <ArrowRight className="w-4 h-4 text-[#FDF289]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/downloaded/about_32.jpg"
                  alt="Data research cohort in computer laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';
import { Download, ExternalLink, FileText, ArrowUpRight, BarChart3, BookOpen, Layers } from 'lucide-react';

export default function T3Research() {
  const reportImages = [
    '/images/downloaded/research_137.jpg',
    '/images/downloaded/research_141.jpg',
    '/images/downloaded/research_147.jpg'
  ];

  return (
    <div id="t3-research" className="text-[#34252A] font-sans">

      {/* 1. HERO (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-4 text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-[#FDF289] inline-block">
              EMPIRICAL EVIDENCE & POLICY DOSSIERS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
              Research Hub & Policy Archive
            </h2>
            <p className="text-lg sm:text-xl text-[#FDF289] font-serif italic">
              "Data that centres Black youth — disaggregated, intersectional, and ready for action."
            </p>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
              Translating lived experiences into actionable clinical standards and federal policy briefs. Addressing the systemic gap in Canadian healthcare, education, and institutional decision-making.
            </p>
          </div>

          {/* Research Metric Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left">
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">428+</span>
              <span className="text-xs text-white/80 font-mono mt-1 block">Canadian Youth Surveyed</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left">
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">3</span>
              <span className="text-xs text-white/80 font-mono mt-1 block">National Monographs</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left">
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">100%</span>
              <span className="text-xs text-white/80 font-mono mt-1 block">Open Access Whitepapers</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left">
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">15+</span>
              <span className="text-xs text-white/80 font-mono mt-1 block">School Boards Reached</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CLINICAL GUIDELINES & MONOGRAPHS (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-left space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
              EVIDENCE-BASED STANDARDS
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
              National Policy Monographs
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-light">
              Peer-reviewed clinical toolkits, surveys, and conference proceedings driving systemic reform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_REPORTS.map((report, idx) => (
              <div
                key={report.id}
                className="p-8 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group text-left"
              >
                <div className="space-y-4">
                  {/* Report Cover Thumbnail */}
                  <div className="h-48 rounded-2xl overflow-hidden bg-stone-900 relative shadow-inner">
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
                    <h4 className="text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                      {report.title}
                    </h4>
                    <p className="text-xs font-bold text-[#873F50] mt-1 font-mono">
                      {report.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#34252A]/75 leading-relaxed font-light">
                    {report.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between group/btn shadow-xs cursor-pointer"
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

      {/* 3. NATIONAL MEDIA & PRESS COVERAGE (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold block">
              NATIONAL RECOGNITION
            </span>
            <h3 className="font-quando text-3xl sm:text-5xl text-[#34252A] font-normal">
              FBF in the Media
            </h3>
            <p className="text-[#34252A]/75 text-sm sm:text-base font-light">
              Amplifying Black youth realities across Canadian television, print, and digital broadcasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {MEDIA_FEATURES.map((media, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs flex flex-col justify-between space-y-5 group hover:border-[#873F50]/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#873F50] font-mono">
                      {media.outlet}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {media.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                    {media.title}
                  </h4>

                  <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                    "{media.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#873F50] font-bold">
                  <span>{media.type}</span>
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <span>Read Feature</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EMPIRICAL RESEARCH PROCESS (Full Warm Cream Background) */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold">
              OUR METHODOLOGY
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#34252A]">
              From Lived Experience to Policy
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              How Future Black Female translates community surveys into Canadian parliamentary whitepapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                1
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Disaggregated Youth Surveys</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Collecting quantitative and qualitative data directly from Black female youth across schools, community drop-ins, and university campuses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Intersectional Analysis</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Analyzing compounding barriers across race, newcomer status, linguistic access, and mental health clinical standards.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Federal Whitepapers & Action</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Delivering actionable blueprints to federal policy makers, regional health authorities, and school board directors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POLICY LAB PARTNERSHIP (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FDF289] font-bold">
            ACADEMIC COLLABORATION
          </span>
          <h3 className="font-quando text-3xl sm:text-5xl text-white font-normal">
            Partner With the FBF Policy Lab
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We partner with university research faculties, think tanks, and philanthropic foundations to conduct intersectional studies.
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@futureblackfemale.com?subject=Research Partnership Inquiry"
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>INQUIRE ABOUT RESEARCH PARTNERSHIP</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

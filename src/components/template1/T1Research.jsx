import React from 'react';
import { Download, ExternalLink, Newspaper, BookOpen, ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { RESEARCH_REPORTS, MEDIA_FEATURES, ORG_DATA } from '../../data/fbfData';

export default function T1Research() {
  return (
    <div id="research-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. HERO HEADER */}
      {/* 1. HERO HEADER (Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
            Empirical Evidence & Policy Archive
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#FDF289] max-w-4xl leading-tight">
            Research Hub & Policy Archive
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            "Data that centres Black youth — disaggregated, intersectional, and ready for action." Translating lived experiences into actionable clinical standards and federal policy briefs.
          </p>

          {/* Research Metric Ticker */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">
                1,750+
              </span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-semibold mt-1 block">
                Therapy Sessions Analyzed
              </span>
            </div>
            <div>
              <span className="font-quando text-3xl sm:text-4xl text-white block">
                200+
              </span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-semibold mt-1 block">
                Youth Survey Respondents
              </span>
            </div>
            <div>
              <span className="font-quando text-3xl sm:text-4xl text-[#FDF289] block">
                3
              </span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-semibold mt-1 block">
                National Policy Monographs
              </span>
            </div>
            <div>
              <span className="font-quando text-3xl sm:text-4xl text-white block">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-semibold mt-1 block">
                Disaggregated & Intersectional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE NATIONAL POLICY MONOGRAPHS & CLINICAL GUIDELINES (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
              PUBLISHED CLINICAL STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
              National Policy Monographs
            </h2>
            <p className="text-slate-800 text-sm sm:text-base max-w-2xl font-light">
              Addressing systemic gaps in Canadian healthcare, education policy, and intimate partner violence prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {RESEARCH_REPORTS.map((rpt, idx) => {
              const coverPhotos = [
                '/images/downloaded/programs_75.jpg',
                '/images/downloaded/programs_77.jpg',
                '/images/downloaded/programs_78.jpg'
              ];
              const cover = coverPhotos[idx % coverPhotos.length];

              return (
                <div
                  key={rpt.id}
                  className="bg-white border border-amber-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Monograph Visual Cover Preview */}
                    <div className="aspect-[16/10] bg-stone-900 overflow-hidden relative">
                      <img
                        src={cover}
                        alt={rpt.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 text-[#FDF289] text-[10px] font-bold uppercase tracking-wider">
                        Report {rpt.number}
                      </span>
                    </div>

                    <div className="p-8 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5B60E6] block">
                        {rpt.tag}
                      </span>

                      <h3 className="font-quando font-normal text-xl sm:text-2xl text-[#1B2828] leading-snug group-hover:text-[#5B60E6] transition-colors">
                        {rpt.title}
                      </h3>

                      <p className="text-xs font-bold text-[#1B2828]/80">
                        {rpt.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                        {rpt.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-0 border-t border-amber-100">
                    <a
                      href={rpt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-[#5B60E6] hover:bg-[#4b50d0] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Download className="w-4 h-4 text-[#FDF289]" />
                      <span>Download Whitepaper (PDF)</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. NATIONAL MEDIA & PRESS COVERAGE */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                In The News
              </span>
              <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                Media Features & Thought Leadership
              </h2>
              <p className="text-stone-600 text-sm max-w-xl font-light">
                Spotlighting FBF's national survey on Gender-Based Violence and community advocacy across Canada.
              </p>
            </div>

            <span className="text-xs text-stone-500 font-semibold shrink-0">
              National & Regional Coverage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {MEDIA_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border-2 border-[#1B2828]/10 shadow-xs hover:border-[#D48B28] hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100/70 text-[#B45309] font-bold text-xs">
                      {feat.outlet}
                    </span>
                    <Newspaper className="w-4 h-4 text-stone-400 group-hover:text-[#D48B28] transition-colors" />
                  </div>

                  <h3 className="font-quando font-normal text-xl text-[#1B2828] group-hover:text-[#D48B28] transition-colors leading-snug">
                    {feat.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {feat.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <a
                    href={feat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1B2828] hover:text-[#D48B28] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
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

      {/* 4. DISAGGREGATED METHODOLOGY CALLOUT */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FDF289] block">
                Evidence-Based Advocacy
              </span>
              <h3 className="font-quando text-2xl sm:text-4xl text-white font-normal leading-tight">
                Partner with our Research & Policy Lab
              </h3>
              <p className="text-white/85 text-sm leading-relaxed font-light">
                Are you an academic institution, healthcare network, or provincial policy administrator looking for disaggregated data centering Black female youth? Connect with our research team for customized reports and policy presentations.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`mailto:${ORG_DATA.contact.generalEmail}?subject=Research%20Collaboration%20Inquiry`}
                className="px-8 py-4 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request Policy Brief</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

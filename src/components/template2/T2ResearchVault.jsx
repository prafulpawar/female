import React, { useState } from 'react';
import { Download, ExternalLink, FileText, Newspaper, BookOpen, Sparkles } from 'lucide-react';
import { RESEARCH_REPORTS, MEDIA_FEATURES } from '../../data/fbfData';

export default function T2ResearchVault() {
  const [viewMode, setViewMode] = useState('vault'); // 'vault' | 'whitepapers' | 'media'

  return (
    <section id="t2-research" className="py-16 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Policy Lab & Research Dossier
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Research Hub & Policy Archive
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Data that centres Black youth — disaggregated, intersectional, and ready for action. Translating lived experiences into actionable clinical standards and federal policy briefs.
            </p>
          </div>

          {/* Interactive Research View Switcher */}
          <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-full text-xs shadow-2xs shrink-0">
            <span className="text-[10px] font-mono font-bold uppercase px-2 text-slate-400">Research View:</span>
            <button
              onClick={() => setViewMode('vault')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'vault' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              Policy Dossier Vault
            </button>
            <button
              onClick={() => setViewMode('whitepapers')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'whitepapers' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              Clinical Whitepapers
            </button>
            <button
              onClick={() => setViewMode('media')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'media' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              Media & Press
            </button>
          </div>
        </div>

        {/* VIEW 1: POLICY DOSSIER VAULT */}
        {viewMode === 'vault' && (
          <div className="space-y-12 animate-fade-in text-left">
            
            {/* Featured Monograph */}
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden relative shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-wider border border-purple-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDF289]" />
                    <span>FEATURED NATIONAL POLICY MONOGRAPH</span>
                  </div>
                  <h3 className="font-quando text-2xl sm:text-4xl text-white font-normal leading-tight">
                    Guidelines for Culturally Relevant Therapy: A Clinical Blueprint
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                    Created in response to direct feedback from Black girls and women navigating healthcare in Canada. Highlights anti-racist, trauma-informed clinical methodologies and a comprehensive glossary of terms.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="https://www.futureblackfemale.com/_files/ugd/02b504_5c2ed1fc9c7549328c0728471b4cd6cd.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Monograph (PDF)</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-48 h-64 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between shadow-2xl">
                    <FileText className="w-10 h-10 text-[#FDF289]" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-slate-300">Clinical Standard</span>
                      <div className="font-quando text-sm text-white font-bold leading-tight">FBF Research Lab 2024–2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Research Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESEARCH_REPORTS.slice(1).map((rpt) => (
                <div
                  key={rpt.id}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between space-y-5 hover:border-[#7C3AED] hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block font-mono">
                      Report {rpt.number} • {rpt.tag}
                    </span>
                    <h4 className="font-quando font-normal text-2xl text-slate-900 leading-snug">
                      {rpt.title}
                    </h4>
                    <p className="text-xs font-semibold text-purple-700">
                      {rpt.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {rpt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <a
                      href={rpt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Whitepaper (PDF)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* VIEW 2: CLINICAL WHITEPAPERS GRID */}
        {viewMode === 'whitepapers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in text-left">
            {RESEARCH_REPORTS.map((rpt) => (
              <div
                key={rpt.id}
                className="bg-white border border-slate-200 rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:border-[#7C3AED] shadow-sm hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-purple-100 text-[#7C3AED] font-quando font-bold text-base flex items-center justify-center">
                      {rpt.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {rpt.tag}
                    </span>
                  </div>

                  <h3 className="font-quando font-normal text-xl text-slate-900 leading-snug">
                    {rpt.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-700">
                    {rpt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {rpt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={rpt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-slate-900 hover:bg-[#7C3AED] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Whitepaper (PDF)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: MEDIA & PRESS FEED */}
        {viewMode === 'media' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in text-left">
            {MEDIA_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#7C3AED] hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-50 text-[#7C3AED] font-bold text-xs uppercase tracking-wider">
                      {feat.outlet}
                    </span>
                    <Newspaper className="w-4 h-4 text-slate-400" />
                  </div>

                  <h4 className="font-quando font-normal text-lg text-slate-900 leading-snug">
                    {feat.headline}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {feat.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={feat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:underline"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

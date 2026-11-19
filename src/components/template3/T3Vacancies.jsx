import React from 'react';
import { VACANCIES } from '../../data/fbfData';
import { Briefcase, UploadCloud, Sparkles, Shield, ArrowUpRight } from 'lucide-react';

export default function T3Vacancies({ onApply }) {
  return (
    <section id="t3-vacancies" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
            <Sparkles className="w-3 h-3 text-[#D68D82]" />
            <span>CAREERS & VOLUNTEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#34252A] leading-tight">
            Join Our Team
          </h2>
          <p className="text-[#34252A]/80 text-sm sm:text-base leading-relaxed font-light">
            At Future Black Female, our mission is to open doors and create opportunities that empower Black female youth worldwide—socially, politically, and economically. If you share our passion for change, we want you on our team.
          </p>
        </div>

        {/* JEDI Statement Ribbon */}
        <div className="p-8 rounded-3xl bg-[#F7E8E8]/70 border border-[#EAD5D5] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#873F50]">
            <Shield className="w-4 h-4 text-[#873F50]" />
            <span>Justice, Equity, Diversity, and Inclusion (JEDI) Statement</span>
          </div>
          <p className="text-xs sm:text-sm text-[#34252A]/80 leading-relaxed font-light">
            We celebrate and welcome all backgrounds, ages, gender identities, races, religions, and sexual orientations. If you need any accommodations in the application process, let us know—we are here to ensure a supportive experience.
          </p>
        </div>

        {/* Vacancies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VACANCIES.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl bg-white border border-[#F7E8E8] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                    {job.department}
                  </span>
                  <span className="text-xs text-[#34252A]/60 font-medium">{job.type}</span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#34252A] group-hover:text-[#873F50] transition-colors">
                    {job.title}
                  </h3>
                  <span className="text-xs text-[#34252A]/60 block mt-1">Location: {job.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#34252A]/75 leading-relaxed font-light">
                  {job.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#F7E8E8]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#873F50] block">
                    Core Qualifications:
                  </span>
                  {job.requirements.slice(0, 3).map((r, ri) => (
                    <div key={ri} className="flex items-start gap-2 text-xs text-[#34252A]/70 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D68D82] mt-1.5 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F7E8E8] flex items-center justify-between">
                <span className="text-[11px] text-[#34252A]/50">File upload supported (Max 15MB)</span>
                <button
                  onClick={() => onApply(job)}
                  className="px-5 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

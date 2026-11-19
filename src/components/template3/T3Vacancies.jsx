import React from 'react';
import { VACANCIES } from '../../data/fbfData';
import { Briefcase, UploadCloud, Sparkles, Shield, ArrowUpRight, ArrowRight, HeartHandshake } from 'lucide-react';

export default function T3Vacancies({ onApply }) {
  return (
    <div id="t3-vacancies" className="text-[#34252A] font-sans">
      
      {/* 1. JEDI STATEMENT & CULTURE (Full Royal Purple Background) */}
      <section className="py-20 sm:py-24 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FDF289]" />
                <span>CAREERS & SISTERHOOD FELLOWSHIPS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
                Work Where Purpose Thrives
              </h2>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light">
                At Future Black Female, our mission is to open doors and create opportunities that empower Black female youth worldwide—socially, politically, and economically. If you share our passion for systemic change, we want you on our team.
              </p>

              {/* JEDI Statement Ribbon inside Purple Header */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FDF289]">
                  <Shield className="w-4 h-4 text-[#FDF289]" />
                  <span>JEDI Statement (Justice, Equity, Diversity, and Inclusion)</span>
                </div>
                <p className="text-xs text-white/85 leading-relaxed font-light">
                  We celebrate and welcome all backgrounds, ages, gender identities, races, religions, and sexual orientations. If you need any accommodations in the application process, let us know—we are here to ensure a supportive experience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/downloaded/about_33.jpg"
                  alt="Team collaboration and sisterhood"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ACTIVE OPENINGS BENTO GRID (Full Warm Cream Background) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              OPPORTUNITIES FOR LEADERSHIP
            </span>
            <h3 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Open Vacancies & Fellowships
            </h3>
            <p className="text-[#34252A]/70 text-sm max-w-2xl font-light">
              We offer paid internships, research fellowships, and volunteer governance roles supporting Canadian youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {VACANCIES.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#34252A]/60 font-mono font-semibold">{job.type}</span>
                  </div>

                  <div>
                    <h4 className="text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors">
                      {job.title}
                    </h4>
                    <span className="text-xs text-[#34252A]/60 block mt-1 font-mono">Location: {job.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#34252A]/75 leading-relaxed font-light">
                    {job.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#873F50] block">
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

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#34252A]/50">File upload supported (Max 15MB)</span>
                  <button
                    onClick={() => onApply(job)}
                    className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
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

      {/* 3. FELLOWSHIP CULTURE & LIFE AT FBF (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              WHY WORK WITH US
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Life at Future Black Female
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/70 font-light">
              Collaborative, supportive, and grounded in collective care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-xs group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/intern_nappy.jpg"
                  alt="Brock U Academic Advisement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-[#34252A]">Mentorship & Growth</h4>
                <p className="text-xs text-[#34252A]/70 font-light leading-relaxed">
                  Direct pairing with executive mentors and seasoned academic researchers to elevate your professional trajectory.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-xs group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/intern_bestbe.jpg"
                  alt="CSJ Youth Outreach"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-[#34252A]">Living-Wage Compensation</h4>
                <p className="text-xs text-[#34252A]/70 font-light leading-relaxed">
                  We believe equitable work deserves fair compensation. All internship positions are funded at or above Ontario living wages.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-xs group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/downloaded/about_32.jpg"
                  alt="STEM and Research Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-[#34252A]">Flexible & Hybrid Flow</h4>
                <p className="text-xs text-[#34252A]/70 font-light leading-relaxed">
                  Remote-friendly workflows balancing student academic commitments with hands-on community projects.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SPONTANEOUS PITCH (Full Butter Yellow Background) */}
      <section className="py-16 sm:py-20 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-slate-950 text-[#FDF289] flex items-center justify-center mx-auto shadow-md">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="font-quando text-3xl sm:text-4xl text-slate-950 font-normal">
              Don't See the Exact Role for You?
            </h3>
            <p className="text-slate-800 text-sm max-w-xl mx-auto font-light leading-relaxed">
              We are always eager to connect with clinicians, workshop facilitators, event planners, and creative writers who want to uplift Black girls.
            </p>
          </div>
          <div>
            <a
              href="mailto:careers@futureblackfemale.com"
              className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
            >
              <span>Email Spontaneous Application</span>
              <ArrowRight className="w-4 h-4 text-[#FDF289]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { VACANCIES } from '../../data/fbfData';
import { Briefcase, UploadCloud, Shield, ArrowUpRight, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

export default function T3Vacancies({ onApply }) {
  return (
    <div id="t3-vacancies" className="text-[#34252A] font-sans">
      
      {/* 1. JEDI STATEMENT & HERO (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-[#FDF289] inline-block">
                CAREERS & FELLOWSHIPS
              </span>

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

      {/* 2. CULTURE & LIVING WAGE COMMITMENT (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
              OUR WORKPLACE CULTURE
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
              The Living Wage & Wellness Pledge
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-light">
              We reject unpaid student exploitation. We invest directly in our practitioners and student researchers with dignified compensation and clinical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Pillar 1 */}
            <div className="p-7 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-lg flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Living Wage Guarantee</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                All internships and student research roles start at $17.50+/hr, above Ontario minimum wage standards.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-lg flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Clinical Supervision</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Free 1-on-1 mental health therapy bursaries with registered Afrocentric clinicians for all staff.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-lg flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Flexible Sanctuary</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Hybrid & remote-friendly workflow tailored to post-secondary academic exam schedules and family balance.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-lg flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Career Acceleration</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Direct co-authorship on published policy monographs and executive mentorship pairings across Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE OPENINGS (Full Warm Cream Background) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold block">
              OPPORTUNITIES FOR LEADERSHIP
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-[#34252A]">
              Open Vacancies & Fellowships
            </h3>
            <p className="text-[#34252A]/70 text-sm sm:text-base max-w-2xl font-light">
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
                  <span className="text-[11px] text-[#34252A]/50 font-mono">File upload supported (Max 15MB)</span>
                  <button
                    onClick={() => onApply(job)}
                    className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 active:scale-95 cursor-pointer"
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

      {/* 4. 3-STEP RECRUITMENT JOURNEY (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold">
              TRANSPARENT PROCESS
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#34252A]">
              How We Welcome You In
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              No endless automated barriers. A transparent, human-first hiring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative text-center">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                1
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Submit CV & Reflections</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Submit your CV and brief cover note. Every single submission is reviewed by our leadership team within 5 business days.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Lived-Experience Chat</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                A warm 30-minute conversation to explore mutual alignment, feminist values, and the real-world skills you want to build.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Sisterhood Onboarding</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Receive living-wage offer, clinician mental health benefits, and pairing with an executive sponsor and project team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GENERAL CV DROP (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FDF289] font-bold">
            FUTURE TALENT POOL
          </span>
          <h3 className="font-quando text-3xl sm:text-5xl text-white font-normal">
            Don't See Your Exact Role?
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We are constantly expanding our research cohorts and community initiatives. Send your CV and portfolio to our talent network.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onApply({ title: "General Fellowship / Talent Pool", department: "Talent Network", type: "Paid / Flexible" })}
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <UploadCloud className="w-4 h-4 text-slate-950" />
              <span>SUBMIT OPEN APPLICATION</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

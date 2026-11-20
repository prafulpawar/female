import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { VACANCIES, ORG_DATA } from '../../data/fbfData';

export default function T1Vacancies({ onApply }) {
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Research', 'Community', 'Administration', 'Governance'];

  const filteredJobs = selectedDept === 'All'
    ? VACANCIES
    : VACANCIES.filter(j => j.department.toLowerCase().includes(selectedDept.toLowerCase()));

  return (
    <div id="vacancies-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. HERO HEADER (Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
            Careers & Sisterhood Fellowships
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#FDF289] max-w-4xl leading-tight">
            Work Where Purpose Thrives
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            At Future Black Female, our mission is to open doors and create opportunities that empower Black girls and young women worldwide—socially, politically, and economically. Join our team across Ontario and Canada.
          </p>

          {/* JEDI Commitment Ribbon inside Hero */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 max-w-4xl space-y-2.5 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FDF289]">
              <ShieldCheck className="w-4 h-4 text-[#FDF289]" />
              <span>Justice, Equity, Diversity, and Inclusion (JEDI) Commitment</span>
            </div>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              We celebrate and welcome all backgrounds, ages, gender identities, races, religions, and sexual orientations. If you need any accommodations in the application process, let us know—we are here to ensure a supportive experience.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY BUILD WITH FUTURE BLACK FEMALE (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-left space-y-3 max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
              ORGANIZATIONAL CULTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
              The Living Wage & Wellness Pledge
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-light">
              We reject unpaid student exploitation. We invest directly in our practitioners and student researchers with dignified compensation, clinical supervision, and psychological safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">

            <div className="p-7 rounded-3xl bg-white text-[#1B2828] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#B45309] font-bold flex items-center justify-center text-lg">
                💵
              </div>
              <h3 className="font-quando text-lg text-[#1B2828] font-normal">Living Wages</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                All intern fellows and research placements are funded at living wage rates ($17.50+/hr).
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white text-[#1B2828] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-lg">
                🧠
              </div>
              <h3 className="font-quando text-lg text-[#1B2828] font-normal">Clinical Supervision</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Direct mentorship and supervision from licensed psychologists and academic researchers.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white text-[#1B2828] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 font-bold flex items-center justify-center text-lg">
                ✊🏿
              </div>
              <h3 className="font-quando text-lg text-[#1B2828] font-normal">Feminist Sanctuary</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                A workplace intentionally co-designed around Black feminist care, dignity, and psychological safety.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white text-[#1B2828] border border-amber-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-lg">
                🎓
              </div>
              <h3 className="font-quando text-lg text-[#1B2828] font-normal">Career Acceleration</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Publish whitepapers, lead national roundtables, and gain references for grad school and leadership.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ACTIVE OPENINGS LISTING */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                Opportunities For Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                Open Vacancies & Fellowships
              </h2>
              <p className="text-stone-600 text-sm max-w-xl font-light">
                We offer paid internships, research fellowships, and volunteer governance roles supporting Canadian youth.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-[#E8DFC8] rounded-xl shrink-0">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#5B60E6] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#5B60E6]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6 text-left">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border-2 border-[#1B2828]/10 rounded-3xl p-8 hover:border-[#D48B28] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs hover:shadow-xl group"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#D48B28]/15 text-[#B45309] font-bold">
                      {job.department}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="flex items-center gap-1 text-stone-600 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#D48B28]" />
                      <span>{job.type}</span>
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="flex items-center gap-1 text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  <h3 className="font-quando font-normal text-2xl text-[#1B2828] group-hover:text-[#D48B28] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => onApply(job)}
                    className="px-7 py-3.5 rounded-full bg-[#5B60E6] hover:bg-[#4b50d0] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Apply For Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* General Expression of Interest Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#5B60E6] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-quando text-2xl sm:text-3xl text-[#FDF289] font-normal">
                Don't See Your Exact Role?
              </h3>
              <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed">
                We regularly open ad-hoc research cohorts, workshop facilitation roles, and campus ambassador fellowships. Send us your CV and statement of interest.
              </p>
            </div>

            <button
              onClick={() => onApply({ title: "General Expression of Interest", department: "Community / Research", type: "Fellowship / Intern" })}
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
            >
              Submit General CV
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

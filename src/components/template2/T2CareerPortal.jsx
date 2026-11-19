import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { VACANCIES, ORG_DATA } from '../../data/fbfData';

export default function T2CareerPortal({ onApply }) {
  return (
    <section id="t2-vacancies" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
            Civic Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
            Vacancies & Careers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-light">
            At Future Black Female, our mission is to open doors and create opportunities that empower Black girls and young women. Join our team of dedicated researchers, program leads, and board stewards.
          </p>
        </div>

        {/* JEDI Statement */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#7C3AED]" />
            <h3 className="font-quando font-normal text-base text-slate-900">
              Commitment to Justice, Equity, Diversity & Inclusion (JEDI)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            FBF is an intersectional feminist employer. We strongly encourage applications from Black youth, women, 2SLGBTQIA+ community members, and newcomer candidates. Accommodations are provided at every stage of the hiring process.
          </p>
        </div>

        {/* Job Postings */}
        <div className="space-y-4">
          {VACANCIES.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#7C3AED] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs hover:shadow-md"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] font-bold">
                    {job.department}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>{job.type}</span>
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <h4 className="font-quando font-normal text-xl text-slate-900">
                  {job.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => onApply(job)}
                  className="px-6 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-95"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { VACANCIES, ORG_DATA } from '../../data/fbfData';

export default function T1Vacancies({ onApply }) {
  return (
    <section id="vacancies" className="py-16 lg:py-20 bg-[#FAF8F5] text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
            Work With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
            Vacancies & Careers
          </h2>
          <p className="text-stone-700 text-base leading-relaxed">
            At Future Black Female, our mission is to open doors and create opportunities that empower Black girls and young women. Join our passionate, community-driven team across Ontario and Canada.
          </p>
        </div>

        {/* JEDI Commitment Card */}
        <div className="p-6 rounded-xl bg-white border border-[#E8DFC8] space-y-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D48B28]" />
            <h3 className="font-quando font-normal text-base text-[#1B2828]">
              Our Commitment to Justice, Equity, Diversity & Inclusion (JEDI)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            FBF is an equal opportunity, intersectional feminist organization. We warmly invite applications from Black girls, women, gender non-conforming individuals, Black youth with disabilities, and newcomer racialized candidates. We provide accommodation during all phases of recruitment.
          </p>
        </div>

        {/* Role Postings List */}
        <div className="space-y-4">
          {VACANCIES.map((job) => (
            <div
              key={job.id}
              className="bg-white border-2 border-[#1B2828]/10 rounded-xl p-6 hover:border-[#D48B28] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F8F495]/70 text-[#1B2828] font-bold border border-[#D48B28]/20">
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

                <h4 className="font-quando font-normal text-xl text-[#1B2828]">
                  {job.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => onApply(job)}
                  className="px-5 py-2.5 rounded-lg bg-[#1B2828] hover:bg-[#2b3e3e] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <span>Apply Now</span>
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

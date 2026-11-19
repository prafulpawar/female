import React, { useState } from 'react';
import { TEAM_MEMBERS, INTERNS, ORG_DATA } from '../../data/fbfData';

export default function T2TeamDirectory() {
  const [roleFilter, setRoleFilter] = useState('All');

  const filteredTeam = roleFilter === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.type === roleFilter);

  return (
    <section id="t2-team" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Staff & Practitioners
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Leadership & Team
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl font-light">
              Experienced clinicians, socio-economic researchers, and youth advocates dedicated to equity.
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {['All', 'Leadership', 'Staff'].map((r) => (
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  roleFilter === r
                    ? 'bg-[#7C3AED] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-all shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="h-48 w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                  />
                </div>
                <div>
                  <h3 className="font-quando font-normal text-base text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#7C3AED] font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Intern Fellows */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Research Cohort
            </span>
            <h3 className="text-xl font-quando font-normal text-slate-900 mt-1">
              Graduate & Youth Research Fellows
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNS.map((intern, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:border-[#7C3AED] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-200 shrink-0">
                    <img
                      src={intern.image}
                      alt={intern.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{intern.name}</h4>
                    <p className="text-xs text-[#7C3AED] font-medium">{intern.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic font-light">
                  "{intern.quote}"
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {intern.university}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

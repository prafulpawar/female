import React, { useState } from 'react';
import { TEAM_MEMBERS, INTERNS, ORG_DATA } from '../../data/fbfData';
import { Sparkles, Quote, ArrowUpRight, Mail, Users, Award, BookOpen } from 'lucide-react';

export default function T2TeamDirectory() {
  const [roleFilter, setRoleFilter] = useState('All');
  const [viewMode, setViewMode] = useState('bento'); // 'bento' | 'roster' | 'fellows'

  const filteredTeam = roleFilter === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.type === roleFilter);

  return (
    <section id="t2-team" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Staff & Practitioners
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Leadership & Team Directory
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl font-light">
              Experienced clinicians, socio-economic researchers, and youth advocates dedicated to equity across Canada.
            </p>
          </div>

          {/* Role Filter & Component View Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-full">
              {['All', 'Leadership', 'Staff'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRoleFilter(r)}
                  className={`px-4 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    roleFilter === r
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Interactive Team View Switcher */}
            <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-full text-xs shadow-2xs">
              <span className="text-[10px] font-mono font-bold uppercase px-2 text-slate-400">Team View:</span>
              <button
                onClick={() => setViewMode('bento')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'bento' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Executive Bento
              </button>
              <button
                onClick={() => setViewMode('roster')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'roster' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Faculty Roster
              </button>
              <button
                onClick={() => setViewMode('fellows')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'fellows' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Fellows Photo Grid
              </button>
            </div>

          </div>
        </div>

        {/* VIEW 1: EXECUTIVE BENTO DIRECTORY */}
        {viewMode === 'bento' && (
          <div className="space-y-12 animate-fade-in text-left">
            
            {/* Founder Spotlight Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-purple-100 shadow-xl bg-slate-900">
                  <img
                    src={ORG_DATA.founder.image}
                    alt={ORG_DATA.founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-[#7C3AED] inline-block">
                  Founder & Executive Director
                </span>
                <h3 className="font-quando text-3xl sm:text-4xl text-slate-900 font-normal">
                  {ORG_DATA.founder.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {ORG_DATA.founder.bio}
                </p>
                <blockquote className="text-xs sm:text-sm font-serif italic text-purple-900 pl-4 border-l-2 border-[#7C3AED]">
                  "{ORG_DATA.founder.quote}"
                </blockquote>
              </div>
            </div>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-all shadow-xs hover:shadow-xl group"
                >
                  <div className="space-y-3">
                    <div className="h-52 w-full rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Cohort */}
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
                    className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xs hover:border-[#7C3AED] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-purple-200 shrink-0">
                        <img
                          src={intern.image}
                          alt={intern.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                        />
                      </div>
                      <div>
                        <h4 className="font-quando font-normal text-base text-slate-900">{intern.name}</h4>
                        <p className="text-xs text-[#7C3AED] font-medium">{intern.role}</p>
                      </div>
                    </div>
                    {intern.quote && (
                      <p className="text-xs text-slate-600 font-light italic leading-relaxed pt-2 border-t border-slate-100">
                        "{intern.quote}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: FACULTY ROSTER CARDS */}
        {viewMode === 'roster' && (
          <div className="space-y-4 animate-fade-in text-left">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#7C3AED] transition-all shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                    />
                  </div>
                  <div>
                    <h3 className="font-quando font-normal text-lg text-slate-900">{member.name}</h3>
                    <p className="text-xs text-[#7C3AED] font-semibold">{member.role}</p>
                    <p className="text-xs text-slate-500 font-light mt-1 max-w-xl">{member.bio}</p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold">
                    {member.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: FELLOWS PHOTO GRID */}
        {viewMode === 'fellows' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in text-left">
            {INTERNS.map((intern, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                    <img
                      src={intern.image}
                      alt={intern.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#7C3AED] font-bold text-[11px]">
                      Research Fellow
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-quando font-normal text-xl text-slate-900">{intern.name}</h3>
                    <p className="text-xs font-bold text-[#7C3AED]">{intern.role}</p>
                    <blockquote className="text-xs sm:text-sm text-slate-600 font-light italic leading-relaxed pt-2 border-t border-slate-100">
                      "{intern.quote}"
                    </blockquote>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <span className="text-[11px] text-slate-400 font-medium">Brock University & Niagara Cohort</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { TEAM_MEMBERS, INTERNS, ORG_DATA, INTERN_TESTIMONIALS } from '../../data/fbfData';
import { Sparkles, Heart, Quote, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import RatingStars from '../shared/RatingStars';

export default function T1Team({ onNavigate }) {
  const [filterRole, setFilterRole] = useState('All');

  const filteredTeam = filterRole === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.type === filterRole);

  return (
    <div id="team-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">
      
      {/* 1. HERO HEADER */}
      <section className="py-16 lg:py-24 bg-[#1B2828] text-white border-b border-[#2C3F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-xs font-bold uppercase tracking-widest text-[#F8F495]">
            <Sparkles className="w-3.5 h-3.5 text-[#D48B28]" />
            <span>Passionate Leadership & Researchers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-white max-w-4xl leading-tight">
            The Women Fostering Systemic Change Across Canada.
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            From clinical advocates and social policy researchers to community organizers, meet the human foundation advancing wellbeing, rights, and prosperity for Black female youth.
          </p>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP SPOTLIGHT (Dr. Tapo) */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-3xl border-2 border-[#1B2828]/15 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-2.5 bg-[#D48B28]/30 rounded-3xl transform rotate-2" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border-2 border-[#1B2828] shadow-md">
                  <img
                    src={ORG_DATA.founder.image}
                    alt={ORG_DATA.founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-block">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28] border-b-2 border-[#D48B28] pb-0.5">
                  Executive Direction
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                {ORG_DATA.founder.name}
              </h2>

              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D48B28]">
                {ORG_DATA.founder.title} • St. Catharines, Ontario
              </p>

              <blockquote className="font-quando italic text-base sm:text-lg text-stone-800 leading-relaxed pl-4 border-l-3 border-[#D48B28] py-1">
                "{ORG_DATA.founder.quote}"
              </blockquote>

              <p className="text-stone-700 text-sm leading-relaxed">
                {ORG_DATA.founder.bio}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-bold text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Executive Director & Fiduciary Leader • Registered Canadian Charity #{ORG_DATA.charityNumber}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STAFF & RESEARCH TEAM DIRECTORY */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                Core Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                Program Leads & Social Researchers
              </h2>
              <p className="text-stone-600 text-sm max-w-xl">
                Dedicated professionals driving clinical partnerships, communications, and qualitative social inquiries.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DFC8] rounded-xl shrink-0">
              {['All', 'Leadership', 'Staff'].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRole(r)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    filterRole === r
                      ? 'bg-[#1B2828] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#1B2828]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#1B2828]/10 rounded-2xl overflow-hidden shadow-xs hover:border-[#D48B28] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 w-full overflow-hidden bg-stone-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                    />
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-[#1B2828]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      {member.type}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="font-quando font-normal text-lg text-[#1B2828] group-hover:text-[#D48B28] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#D48B28] font-bold">
                      {member.role}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <span className="text-[11px] font-semibold text-stone-500 block pt-2">
                    FBF Research & Advocacy
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTERN FELLOWS & VOICES (Human Testimonial Strip) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Next-Generation Scholars
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
              Intern Fellows & Reflections
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              FBF invests directly in paid experiential internships, nurturing future Black scholars, clinicians, and community leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INTERN_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border-2 border-[#1B2828]/10 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-[#D48B28] transition-all hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <RatingStars rating={5} />
                    <Quote className="w-6 h-6 text-[#D48B28]/40" />
                  </div>

                  <p className="font-quando italic text-xs sm:text-sm text-stone-800 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D48B28] shrink-0 bg-stone-900">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                    />
                  </div>
                  <div>
                    <h4 className="font-quando font-normal text-sm text-[#1B2828]">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

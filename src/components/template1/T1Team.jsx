import React, { useState } from 'react';
import { TEAM_MEMBERS, INTERNS, ORG_DATA, INTERN_TESTIMONIALS } from '../../data/fbfData';
import { Heart, Quote, ArrowRight, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import RatingStars from '../shared/RatingStars';

export default function T1Team({ onNavigate }) {
  const [filterRole, setFilterRole] = useState('All');

  const filteredTeam = filterRole === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.type === filterRole);

  const cohortInterns = [
    {
      name: "Kudakwashe Shoriwa",
      role: "Social Issues Researcher - Intern",
      image: "/images/live_site/intern_kuda.jpg",
      quote: "Working alongside brilliant Black women has been a profound thrill and life-changing foundation for my career."
    },
    {
      name: "Hatim Osman",
      role: "Youth Worker - Intern",
      image: "/images/live_site/intern_hatim.jpg",
      quote: "Building spaces where youth feel safe, validated, and equipped to speak truth to power is truly unforgettable."
    },
    {
      name: "Uchenna Agu",
      role: "Event & Social Media Specialist - Intern",
      image: "/images/live_site/hero_uche.jpg",
      quote: "The drive from this community to impact young lives reassures me that an extraordinary future lies ahead."
    },
    {
      name: "Daniel Buwah",
      role: "Social Issues Researcher - Intern",
      image: "/images/live_site/intern_daniel.jpg",
      quote: "Engaging directly with data that centers Black youth is rewriting how policy is shaped in Ontario."
    },
    {
      name: "Judy Osman",
      role: "Admin Assistant Intern",
      image: "/images/downloaded/about_33.jpg",
      quote: "FBF has given me real-world operational tools and unshakeable confidence in my leadership capability."
    },
    {
      name: "Josemyrne Ashley Faure",
      role: "Social Issues Researcher",
      image: "/images/downloaded/team_43.jpg",
      quote: "Conducting research that directly supports young Black girls in Canada gives every data point deep meaning."
    }
  ];

  return (
    <div id="team-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. FOUNDER SPOTLIGHT (Full Royal Electric Indigo Background - Matching Screenshot 3) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-3 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
              Meet the Sisterhood
            </h1>
            <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed">
              The FBF team is a passionate collective dedicated to advocacy, systemic change, building community partnerships, and serving all Black communities across Canada.
            </p>
          </div>

          {/* Founder Spotlight Bento Box */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl bg-stone-900 group">
                <img 
                  src={ORG_DATA.founder.image} 
                  alt={ORG_DATA.founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDF289] block">Founder & Executive Director</span>
                  <span className="font-quando font-normal text-base text-white">{ORG_DATA.founder.name}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF289] text-slate-950 shadow-xs">
                  FOUNDER’S REFLECTION
                </span>
                <span className="text-xs text-[#FDF289] font-mono font-medium">Est. 2019 • CRA Charity</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-quando font-normal text-white">
                {ORG_DATA.founder.name}
              </h2>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FDF289]">
                FOUNDING EXECUTIVE DIRECTOR
              </p>

              <blockquote className="text-white/90 text-sm sm:text-base italic leading-relaxed pl-4 border-l-2 border-[#FDF289] space-y-3 font-light">
                <p>"{ORG_DATA.founder.quote}"</p>
                <p className="text-xs font-sans text-white/75 not-italic font-light">
                  "We craft our own solutions to the problems put upon us. As a community and support system, Future Black Female aims to increase and maintain the capacity for happiness in each girl and woman we encounter."
                </p>
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('vacancies')}
                  className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>JOIN OUR TEAM</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#FDF289]" />
                  <span>CRA Reg #{ORG_DATA.charityNumber}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STAFF PRACTITIONERS & RESEARCHERS (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-950/20 pb-6 text-left">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
                CORE PRACTITIONERS & SCIENTISTS
              </span>
              <h3 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
                Staff Researchers & Project Leads
              </h3>
              <p className="text-slate-800 text-sm sm:text-base max-w-2xl font-light">
                Experienced clinicians, socio-economic researchers, and youth advocates dedicated to equity.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-white/70 border border-slate-950/20 rounded-xl shrink-0">
              {['All', 'Leadership', 'Staff'].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRole(r)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterRole === r
                      ? 'bg-slate-950 text-[#FDF289] shadow-xs'
                      : 'text-slate-800 hover:text-slate-950'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white text-[#1B2828] border border-amber-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="h-56 w-full rounded-2xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                    />
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/90 text-[#FDF289] text-[10px] font-bold uppercase tracking-wider">
                      {member.type}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-quando font-normal text-lg text-[#1B2828] group-hover:text-[#5B60E6] transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-xs font-bold text-[#5B60E6] block mt-0.5">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-light line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-100 mt-2">
                  <span className="text-[11px] font-semibold text-stone-400 block">
                    FBF Research & Advocacy
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. GRADUATE & YOUTH RESEARCH FELLOWS (Full Warm Blush Rose Background - Matching Screenshot 4) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#1B2828] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#5B60E6] font-bold block">
              NEXT GENERATION ADVOCATES
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-[#1B2828]">
              Research Cohort & Youth Interns
            </h3>
            <p className="text-stone-700 text-sm sm:text-base max-w-2xl font-light">
              Paid living-wage placements providing real-world operational tools, research publications, and leadership advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {cohortInterns.map((intern, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-900 shrink-0 border border-[#F7E8E8] shadow-2xs">
                      <img
                        src={intern.image}
                        alt={intern.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        onError={(e) => { e.target.src = '/images/live_site/intern_kuda.jpg'; }}
                      />
                    </div>
                    <div>
                      <h4 className="font-quando font-normal text-base text-[#1B2828] group-hover:text-[#5B60E6] transition-colors">
                        {intern.name}
                      </h4>
                      <p className="text-xs text-[#5B60E6] font-medium mt-0.5">
                        {intern.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 italic leading-relaxed pl-3 border-l-2 border-[#5B60E6] font-light">
                    "{intern.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERN FELLOWS & REFLECTIONS TESTIMONIALS */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6]">
              Lived Impact & Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
              From Our Interns & Fellows
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              FBF invests directly in paid experiential internships, nurturing future Black scholars, clinicians, and community leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {INTERN_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#1B2828]/10 rounded-3xl p-8 flex flex-col justify-between space-y-6 hover:border-[#5B60E6] transition-all hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <RatingStars rating={5} />
                    <Quote className="w-6 h-6 text-[#5B60E6]/40" />
                  </div>

                  <p className="font-quando italic text-xs sm:text-sm text-stone-800 leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#5B60E6] shrink-0 bg-stone-900">
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

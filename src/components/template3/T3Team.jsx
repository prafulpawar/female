import React from 'react';
import { ORG_DATA, TEAM_MEMBERS, INTERNS, TESTIMONIALS } from '../../data/fbfData';
import { Quote, Sparkles, Heart, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function T3Team({ onNavigate }) {
  return (
    <div id="t3-team" className="text-[#34252A] font-sans">
      
      {/* 1. FOUNDER SPOTLIGHT (Full Royal Purple Background) */}
      <section className="py-20 sm:py-24 bg-[#5B3396] text-white border-b border-purple-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#FDF289]" />
              <span>LEADERSHIP & FELLOWS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
              Meet the Sisterhood
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed">
              The FBF team is a passionate collective dedicated to advocacy, systemic change, building community partnerships, and serving all Black communities across Canada.
            </p>
          </div>

          {/* Founder Spotlight Bento Box */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-60 h-76 sm:w-68 sm:h-84 rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl bg-stone-900 group">
                <img 
                  src={ORG_DATA.founder.image} 
                  alt={ORG_DATA.founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDF289] block">Founder & Executive Director</span>
                  <span className="font-quando font-normal text-base text-white">{ORG_DATA.founder.name}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF289] text-slate-950 shadow-xs">
                  Founder’s Reflection
                </span>
                <span className="text-xs text-[#FDF289] font-mono">Est. 2019 • CRA Charity</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-quando font-normal text-white">
                Dr. Tapo Chimbganda
              </h3>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FDF289]">
                {ORG_DATA.founder.title}
              </p>

              <blockquote className="text-white/90 text-sm sm:text-base italic leading-relaxed pl-4 border-l-2 border-[#FDF289] space-y-2">
                <p>"{ORG_DATA.founder.quote}"</p>
                <p className="text-xs font-sans text-white/75 not-italic font-light">
                  "We craft our own solutions to the problems put upon us. As a community and support system, Future Black Female aims to increase and maintain the capacity for happiness in each girl and woman we encounter."
                </p>
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('vacancies')}
                  className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Join Our Team</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STAFF DIRECTORY (Full Warm Cream Background) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              CORE PRACTITIONERS & SCIENTISTS
            </span>
            <h3 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Staff Researchers & Project Leads
            </h3>
            <p className="text-[#34252A]/70 text-sm max-w-2xl font-light">
              Experienced clinicians, socio-economic researchers, and youth advocates dedicated to equity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.filter(m => m.type !== 'Leadership').map((member, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group text-left"
              >
                <div className="space-y-3">
                  <div className="h-52 w-full rounded-2xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/downloaded/team_43.jpg'; }}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors">{member.name}</h4>
                    <span className="text-xs font-bold text-[#873F50] block mt-0.5">{member.role}</span>
                  </div>

                  <p className="text-xs text-[#34252A]/70 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GRADUATE & YOUTH RESEARCH FELLOWS (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-28 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              NEXT GENERATION ADVOCATES
            </span>
            <h3 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Research Cohort & Youth Interns
            </h3>
            <p className="text-[#34252A]/70 text-sm max-w-2xl font-light">
              Paid living-wage placements providing real-world operational tools, research publications, and leadership advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNS.map((intern, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all space-y-4 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-100 border-2 border-[#D68D82]/50 shrink-0">
                    <img
                      src={intern.image}
                      alt={intern.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/live_site/intern_nappy.jpg'; }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-quando font-normal text-base text-[#34252A] truncate group-hover:text-[#873F50] transition-colors">{intern.name}</h4>
                    <span className="text-xs text-[#873F50] font-semibold block truncate">{intern.role}</span>
                  </div>
                </div>

                {intern.quote && (
                  <p className="text-xs text-[#34252A]/75 italic leading-relaxed border-t border-slate-100 pt-3">
                    "{intern.quote}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERN VOICES & TESTIMONIALS (Full Night Plum Background) */}
      <section className="py-20 sm:py-28 bg-[#28151D] text-[#FFF9F2] border-b border-[#3d1d2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#D9B879] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
              LIVED IMPACT & GROWTH
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFF9F2] tracking-tight">
              From Our Interns & Fellows
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light">
              Hear directly how working alongside inspiring Black women leaders transformed these young scholars' trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl space-y-4">
                <Quote className="w-8 h-8 text-[#D9B879]" />
                <p className="text-sm sm:text-base font-serif italic text-white/95 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-white/20 text-xs">
                  <strong className="text-[#D9B879] block text-sm font-quando font-normal">{t.author}</strong>
                  <span className="text-white/70 font-light">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

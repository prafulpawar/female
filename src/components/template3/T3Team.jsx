import React from 'react';
import { ORG_DATA, TEAM_MEMBERS, INTERNS, TESTIMONIALS } from '../../data/fbfData';
import { Quote, Sparkles, Heart, ArrowUpRight } from 'lucide-react';

export default function T3Team({ onNavigate }) {
  return (
    <section id="t3-team" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
            <Sparkles className="w-3 h-3 text-[#D68D82]" />
            <span>LEADERSHIP & FELLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
            Meet the Team
          </h2>
          <p className="text-[#34252A]/80 text-sm sm:text-base font-light leading-relaxed">
            The FBF team is a passionate collective dedicated to advocacy, systemic change, building community partnerships, and serving all Black communities across Canada.
          </p>
        </div>

        {/* Founder Spotlight Bento Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F7E8E8]/90 border border-[#EAD5D5] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-stone-900">
              <img 
                src={ORG_DATA.founder.image} 
                alt={ORG_DATA.founder.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34252A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9B879] block">Founder</span>
                <span className="font-serif font-bold text-sm text-[#FFF9F2]">{ORG_DATA.founder.name}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#873F50] shadow-xs">
                Founder’s Reflection
              </span>
              <span className="text-xs text-[#873F50] font-serif italic">Est. 2019</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-quando font-normal text-[#34252A]">
              Dr. Tapo Chimbganda
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#873F50]">
              {ORG_DATA.founder.title}
            </p>

            <blockquote className="text-[#34252A]/85 text-sm sm:text-base font-serif italic leading-relaxed pl-4 border-l-2 border-[#873F50] space-y-2">
              <p>"{ORG_DATA.founder.quote}"</p>
              <p className="text-xs font-sans text-[#34252A]/70 not-italic">
                "We craft our own solutions to the problems put upon us. As a community and support system, Future Black Female aims to increase and maintain the capacity for happiness in each girl and woman we encounter."
              </p>
            </blockquote>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('t3-vacancies')}
                className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Join Our Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Staff Directory */}
        <div className="space-y-6">
          <h3 className="text-xl font-quando font-normal text-[#34252A]">
            Staff Researchers & Project Leads
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.filter(m => m.type !== 'Leadership').map((member, i) => (
              <div 
                key={i}
                className="p-5 rounded-3xl bg-white border border-[#F7E8E8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-3">
                  <div className="h-44 w-full rounded-2xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-serif font-bold text-[#34252A]">{member.name}</h4>
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

        {/* Intern Testimonials Bento Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7E8E8]/70 border border-[#EAD5D5] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#873F50] block mb-1">
              PAID YOUTH COHORT (4+ MONTHS)
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#34252A]">
              From Our Interns
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/70 mt-1 font-light">
              Providing living-wage professional internships that empower the next generation of researchers, coordinators, and advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EAD5D5] shadow-xs space-y-3">
                <Quote className="w-5 h-5 text-[#873F50]" />
                <p className="text-sm font-serif italic text-[#34252A] leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-[#F7E8E8] text-xs">
                  <strong className="text-[#873F50] block">{t.author}</strong>
                  <span className="text-[#34252A]/60">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#873F50] block mb-3">
              ACTIVE INTERN RESEARCHERS:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {INTERNS.map((intern, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-[#EAD5D5] text-xs">
                  <span className="font-bold text-[#34252A] block truncate">{intern.name}</span>
                  <span className="text-[#873F50] text-[11px] block truncate">{intern.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

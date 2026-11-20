import React from 'react';
import { ORG_DATA, TEAM_MEMBERS, INTERNS } from '../../data/fbfData';
import { Quote, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function T3Team({ onNavigate }) {
  const cohortInterns = [
    {
      name: "Kudakwashe Shoriwa",
      role: "Social Issues Researcher - Intern",
      image: "/images/downloaded/team_54.jpg",
      quote: "Working alongside brilliant Black women has been a profound thrill and life-changing foundation for my career."
    },
    {
      name: "Hatim Osman",
      role: "Youth Worker - Intern",
      image: "/images/downloaded/team_56.jpg",
      quote: "Building spaces where youth feel safe, validated, and equipped to speak truth to power is truly unforgettable."
    },
    {
      name: "Uchenna Agu",
      role: "Event & Social Media Specialist - Intern",
      image: "/images/downloaded/home_08.jpg",
      quote: "The drive from this community to impact young lives reassures me that an extraordinary future lies ahead."
    },
    {
      name: "Daniel Buwah",
      role: "Social Issues Researcher - Intern",
      image: "/images/downloaded/home_10.jpg",
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

  const staffMembers = TEAM_MEMBERS.filter(m => m.type !== 'Leadership');

  return (
    <div id="t3-team" className="text-[#34252A] font-sans">
      
      {/* 1. FOUNDER SPOTLIGHT (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-3 text-left">
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

              <h3 className="text-2xl sm:text-4xl font-quando font-normal text-white">
                Dr. Tapo Chimbganda
              </h3>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FDF289]">
                FOUNDING EXECUTIVE DIRECTOR
              </p>

              <blockquote className="text-white/90 text-sm sm:text-base italic leading-relaxed pl-4 border-l-2 border-[#FDF289] space-y-3 font-light">
                <p>"{ORG_DATA.founder.quote}"</p>
                <p className="text-xs font-sans text-white/75 not-italic font-light">
                  "We craft our own solutions to the problems put upon us. As a community and support system, Future Black Female aims to increase and maintain the capacity for happiness in each girl and woman we encounter."
                </p>
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('vacancies')}
                  className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>JOIN OUR TEAM</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STAFF PRACTITIONERS & RESEARCHERS (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {staffMembers.map((member, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="h-56 w-full rounded-2xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/downloaded/team_43.jpg'; }}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-xs font-bold text-[#873F50] block mt-0.5">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GRADUATE & YOUTH RESEARCH FELLOWS (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold block">
              NEXT GENERATION ADVOCATES
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-[#34252A]">
              Research Cohort & Youth Interns
            </h3>
            <p className="text-[#34252A]/70 text-sm sm:text-base max-w-2xl font-light">
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
                      <h4 className="font-quando font-normal text-base text-[#34252A] group-hover:text-[#873F50] transition-colors">
                        {intern.name}
                      </h4>
                      <p className="text-xs text-[#873F50] font-medium mt-0.5">
                        {intern.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#34252A]/80 italic leading-relaxed pl-3 border-l-2 border-[#D68D82] font-light">
                    "{intern.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 3 PILLARS OF ENGAGEMENT & FUNDERS (Full Warm Cream Background) */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-quando text-3xl sm:text-5xl text-[#34252A] font-normal leading-tight">
              The well-being of Black female youth is our motivation.
            </h3>
            <p className="text-sm sm:text-base text-[#34252A]/75 font-light leading-relaxed">
              To achieve our vision of a community-empowered Black female population, FBF relies on three pillars of community engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-2xl flex items-center justify-center shadow-md">
                1
              </div>
              <p className="text-sm font-semibold text-[#34252A] leading-relaxed">
                Developing and initiating solution-focused strategies.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-2xl flex items-center justify-center shadow-md">
                2
              </div>
              <p className="text-sm font-semibold text-[#34252A] leading-relaxed">
                Establishing a network for action.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5B60E6] text-[#FDF289] font-quando text-2xl flex items-center justify-center shadow-md">
                3
              </div>
              <p className="text-sm font-semibold text-[#34252A] leading-relaxed">
                Ongoing support of established efforts within the community.
              </p>
            </div>
          </div>

          {/* Funders Row */}
          <div className="pt-8 border-t border-[#EAD5D5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="font-quando text-xl text-[#34252A] shrink-0">
              Our Funders
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-90">
              <img 
                src="/images/live_site/funder_cwf.png" 
                alt="Canadian Women's Foundation" 
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <img 
                src="/images/live_site/funder_ncf.png" 
                alt="Niagara Community Foundation" 
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <img 
                src="/images/live_site/funder_wage.png" 
                alt="Women and Gender Equality Canada" 
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FDF289] font-bold">
            LEAD WITH US
          </span>
          <h3 className="font-quando text-3xl sm:text-5xl text-white font-normal">
            Join the Future Black Female Sisterhood
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Whether as an intern, volunteer research fellow, or board steward, your expertise can rewrite outcomes for Black girls across Canada.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('vacancies')}
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW OPEN ROLES</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>CONNECT WITH LEADERSHIP</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

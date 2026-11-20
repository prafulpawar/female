import React from 'react';
import { 
  ORG_DATA, BOARD_MEMBERS, TRAILBLAZERS_ANNOUNCEMENT 
} from '../../data/fbfData';
import { Sparkles, Heart, ArrowUpRight, ArrowRight, Quote } from 'lucide-react';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function T3About({ onNavigate, onApplyBoard }) {
  const valuesPillars = [
    { name: "Opportunity", category: "AGENCY" },
    { name: "Dignity", category: "SOVEREIGNTY" },
    { name: "Respect", category: "MUTUALITY" },
    { name: "Equality", category: "JUSTICE" },
    { name: "Tenacity", category: "RESILIENCE" },
    { name: "Education", category: "SCHOLARSHIP" },
    { name: "Advocacy", category: "SOLIDARITY" },
    { name: "Celebration", category: "JOY" },
    { name: "Authenticity", category: "TRUTH" },
    { name: "Action", category: "IMPACT" },
    { name: "Unity", category: "COMMUNITY" }
  ];

  return (
    <div id="t3-about-page" className="bg-[#FFF9F2] text-[#34252A] font-sans">
      
      {/* 1. LITERARY MONOGRAPH HEADER */}
      <section className="bg-[#873F50] text-[#FFF9F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
        <div className="max-w-7xl mx-auto space-y-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#D9B879] font-semibold">
            Our Story & Sisterhood
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FFF9F2] max-w-4xl leading-tight">
            A community rooted in dignity, radical kinship, and collective power.
          </h1>

          <p className="text-[#FFF9F2]/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Feminist-informed Future Black Female (FBF) is a registered Canadian charity established in 2019 to ensure Black girls and young women walk with unconstrained agency, vibrant mental wellness, and sovereign economic leadership.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
            <div>
              <span className="text-2xl sm:text-3xl font-quando font-normal text-[#D9B879] block">
                <AnimatedCounter value={2019} />
              </span>
              <span className="text-xs uppercase font-mono text-[#FFF9F2]/70">Year Founded</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-quando font-normal text-white block">
                <AnimatedCounter value={1750} suffix="+" />
              </span>
              <span className="text-xs uppercase font-mono text-[#FFF9F2]/70">Therapy Sessions</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-quando font-normal text-white block">
                <AnimatedCounter value={400} suffix="+" />
              </span>
              <span className="text-xs uppercase font-mono text-[#FFF9F2]/70">Youth Empowered</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-quando font-normal text-[#D9B879] block">
                12 Initiatives
              </span>
              <span className="text-xs uppercase font-mono text-[#FFF9F2]/70">National Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SISTERHOOD FELLOWSHIP: FUTURE BLACK TRAILBLAZERS AWARD (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <p className="text-xs uppercase tracking-wider text-[#FDF289] font-semibold">
                  Brock University Annual Scholarship
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quando font-normal text-[#FDF289] leading-tight">
                  Future Black Trailblazers Award
                </h2>

                <p className="text-base sm:text-lg font-semibold text-white/95">
                  $500 Scholarship for Black Students attending Brock University this academic year.
                </p>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-light">
                  Recognizing the resilience, brilliance, and community leadership of incoming Black scholars. Created in partnership with Brock LINC to open academic doors and honor young trailblazers.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={TRAILBLAZERS_ANNOUNCEMENT.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg group active:scale-95"
                  >
                    <span>Apply for Award (Wow Us!)</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-xs text-white/80 font-mono">
                    Award cycle: Fall 2026 Cohort
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl aspect-[4/3] bg-stone-900 group">
                  <img
                    src="/images/downloaded/about_32.jpg"
                    alt="Young Black woman scholar coding at Brock University"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = '/images/live_site/pillar_career.jpg'; }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR BELIEFS & SISTERHOOD VALUES TAPESTRY */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/5] bg-stone-100">
                <img
                  src="/images/downloaded/about_29.jpg"
                  alt="Two young Black women smiling together in community"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/live_site/about_two_women.jpg'; }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#873F50] block">
                WHY WE EXIST
              </span>

              <h2 className="text-3xl sm:text-5xl font-quando font-normal text-[#34252A] leading-tight">
                Our Beliefs
              </h2>

              <div className="space-y-2 p-6 rounded-2xl bg-[#F7E8E8]/70 border border-[#EAD5D5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#873F50] block">
                  VISION
                </span>
                <p className="font-quando font-normal text-lg sm:text-xl text-[#34252A]">
                  Community-Empowered Black Female Youth
                </p>
              </div>

              <div className="space-y-2 p-6 rounded-2xl bg-white border border-[#EAD5D5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#873F50] block">
                  MISSION
                </span>
                <p className="text-xs sm:text-sm text-[#34252A]/85 leading-relaxed font-light">
                  To increase access to opportunities that result in Black female youth across the globe becoming more socially, politically, and economically empowered through strong networks, skills advancement, and rights-based advocacy.
                </p>
              </div>
            </div>

          </div>

          {/* 11 Values Tapestry Cluster */}
          <div className="space-y-6 pt-4 text-left">
            <div className="border-b border-[#EAD5D5] pb-3">
              <p className="text-xs uppercase tracking-wider text-[#873F50] font-semibold">
                Guiding Convictions
              </p>
              <h3 className="font-quando font-normal text-2xl text-[#34252A] mt-1">
                The 11 Sisterhood Values
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {valuesPillars.map((v) => (
                <div
                  key={v.name}
                  className="px-4 py-2.5 rounded-full bg-white border border-[#EAD5D5] text-[#34252A] shadow-2xs hover:bg-[#F7E8E8] hover:border-[#D68D82] transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D68D82]" />
                  <span className="font-bold text-sm">{v.name}</span>
                  <span className="text-[10px] uppercase font-mono text-[#873F50] opacity-70">({v.category})</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. OPERATING PRINCIPLES: FEMALE EMPOWERMENT & ESSAY MONOGRAPH (Full Night Plum Background) */}
      <section className="py-20 sm:py-28 bg-[#28151D] text-[#FFF9F2] border-b border-[#3d1d2b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-xs uppercase tracking-wider text-[#D9B879] font-semibold">
                Foundational Principles
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quando font-normal text-[#FFF9F2] leading-tight">
                Female Empowerment & Black Feminist Thought
              </h2>

              <p className="text-[#FFF9F2]/90 text-sm sm:text-base leading-relaxed font-light">
                We privilege <strong>Black Feminist Thought</strong>, which contributed to society's understanding of intersectionality and epistemic privilege.
              </p>

              <p className="text-[#FFF9F2]/90 text-sm sm:text-base leading-relaxed font-light">
                Further, we advance the centering of Black feminists in the understanding of what it is to be a girl or woman by creating and claiming space in the world and as a vital part of the global feminist movement.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D9B879] text-xs font-mono font-bold uppercase tracking-wider">
                  Epistemic Agency
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
                  Radical Solidarity
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-stone-900 aspect-[4/3] group">
                <img
                  src="/images/downloaded/about_33.jpg"
                  alt="Four Black women smiling together in solidarity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/live_site/hero_darina.jpg'; }}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FOUNDER PROFILE & SISTERHOOD DIRECTORY (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-28 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Founder Feature Spread */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAD5D5] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#873F50] mx-auto shadow-xl bg-stone-100 group">
                  <img
                    src={ORG_DATA.founder.image}
                    alt={ORG_DATA.founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-left">
                <p className="text-xs uppercase tracking-wider text-[#873F50] font-semibold">
                  Founder & Executive Director
                </p>
                <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#34252A]">
                  {ORG_DATA.founder.name}
                </h3>
                <p className="text-[#34252A]/80 text-sm leading-relaxed font-light">
                  {ORG_DATA.founder.bio}
                </p>
                <blockquote className="font-quando italic text-sm text-[#873F50] border-l-2 border-[#873F50] pl-4 py-1">
                  "{ORG_DATA.founder.quote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Board of Directors Grid with Photos */}
          <div className="space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAD5D5] pb-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#873F50] font-semibold">
                  Sisterhood Advisory
                </p>
                <h3 className="font-quando font-normal text-2xl text-[#34252A]">
                  Board of Directors
                </h3>
              </div>
              <button
                onClick={onApplyBoard}
                className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                Volunteer for Board
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BOARD_MEMBERS.map((bm, idx) => {
                const avatarPhotos = [
                  '/images/downloaded/team_46.jpg',
                  '/images/downloaded/team_47.jpg',
                  '/images/downloaded/team_48.jpg',
                  '/images/downloaded/team_50.jpg',
                  '/images/downloaded/team_51.jpg',
                  '/images/downloaded/team_52.jpg',
                  '/images/downloaded/team_54.jpg',
                  '/images/downloaded/team_55.jpg',
                  '/images/downloaded/team_56.jpg',
                  '/images/downloaded/team_64.jpg'
                ];
                const photo = avatarPhotos[idx % avatarPhotos.length];

                return (
                  <div key={bm.name} className="p-6 rounded-2xl bg-white border border-[#EAD5D5] shadow-2xs space-y-3 text-left group hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-100 border-2 border-[#D68D82]/50 shadow-2xs">
                      <img
                        src={photo}
                        alt={bm.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/images/live_site/about_two_women.jpg'; }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#34252A]">{bm.name}</h4>
                      <p className="text-xs text-[#873F50] font-semibold">{bm.role}</p>
                      <p className="text-xs text-[#34252A]/70 font-light mt-1">{bm.background}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SISTERHOOD MOMENTS PHOTO MOSAIC (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-wider text-slate-800 font-semibold">
              Sisterhood in Every Space
            </p>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight">
              Sisterhood in Every Space
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-light">
              From university campuses to wellness retreats, see how our sisterhood claims space and supports one another across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
              <img
                src="/images/live_site/hero_darina.jpg"
                alt="Sisterhood gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
              <img
                src="/images/live_site/intern_nappy.jpg"
                alt="Brock University scholars"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
              <img
                src="/images/live_site/intern_bestbe.jpg"
                alt="Youth fellowship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
              <img
                src="/images/downloaded/about_40.jpg"
                alt="Community event"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('programs')}
              className="px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
            >
              <span>EXPLORE ALL SISTERHOOD PROGRAMS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#D9B879] text-xs font-bold uppercase tracking-widest border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B879]" />
            <span>OUR STORY & SISTERHOOD CHARTER</span>
          </div>

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

      {/* 2. THE SISTERHOOD FELLOWSHIP: FUTURE BLACK TRAILBLAZERS AWARD */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFFDF9] border border-[#EAD5D5] p-8 sm:p-12 lg:p-14 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
                  <span>ANNUAL SCHOLARSHIP</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A] leading-tight">
                  Future Black Trailblazers Award
                </h2>

                <p className="text-sm sm:text-base font-semibold text-[#873F50]">
                  $500 Scholarship for Black Students going to Brock University this fall.
                </p>

                <p className="text-[#34252A]/80 text-xs sm:text-sm leading-relaxed font-light">
                  Recognizing the resilience, brilliance, and community leadership of incoming Black scholars. Created in partnership with Brock LINC to open academic doors and honor young trailblazers.
                </p>

                <div className="pt-2">
                  <a
                    href={TRAILBLAZERS_ANNOUNCEMENT.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xs group"
                  >
                    <span>Apply for Award (Wow Us!)</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D9B879]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-white shadow-xl aspect-[4/3] bg-stone-100">
                  <img
                    src="/images/live_site/about_32.jpg"
                    alt="Young Black woman scholar coding"
                    className="w-full h-full object-cover"
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
                  src="/images/live_site/about_29.jpg"
                  alt="Two young Black women smiling together in community"
                  className="w-full h-full object-cover"
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
                GUIDING CONVICTIONS
              </span>
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

      {/* 4. OPERATING PRINCIPLES: FEMALE EMPOWERMENT & ESSAY MONOGRAPH */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D9B879] block">
                WHAT WE DO • OUR PRINCIPLES
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quando font-normal text-[#FFF9F2] leading-tight">
                Female Empowerment & Black Feminist Thought
              </h2>

              <p className="text-[#FFF9F2]/90 text-sm sm:text-base leading-relaxed font-light">
                We privilege <strong>Black Feminist Thought</strong>, which contributed to society's understanding of intersectionality and epistemic privilege.
              </p>

              <p className="text-[#FFF9F2]/90 text-sm sm:text-base leading-relaxed font-light">
                Further, we advance the centering of Black feminists in the understanding of what it is to be a girl or woman by creating and claiming space in the world and as a vital part of the global feminist movement.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-stone-900">
                <img
                  src="/images/live_site/about_33.jpg"
                  alt="Four Black women smiling together in solidarity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FOUNDER PROFILE & SISTERHOOD DIRECTORY */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] border-t border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Founder Feature Spread */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#873F50] mx-auto shadow-md bg-stone-100">
                  <img
                    src={ORG_DATA.founder.image}
                    alt={ORG_DATA.founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50] block">
                  FOUNDER & EXECUTIVE DIRECTOR
                </span>
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

          {/* Board of Directors Grid */}
          <div className="space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAD5D5] pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
                  SISTERHOOD ADVISORY
                </span>
                <h3 className="font-quando font-normal text-2xl text-[#34252A]">
                  Board of Directors
                </h3>
              </div>
              <button
                onClick={onApplyBoard}
                className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Volunteer for Board
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BOARD_MEMBERS.map((bm) => (
                <div key={bm.name} className="p-6 rounded-2xl bg-white border border-[#EAD5D5] shadow-2xs space-y-2">
                  <h4 className="font-bold text-base text-[#34252A]">{bm.name}</h4>
                  <p className="text-xs text-[#873F50] font-semibold">{bm.role}</p>
                  <p className="text-xs text-[#34252A]/70 font-light">{bm.background}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

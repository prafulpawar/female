import React from 'react';
import { 
  ORG_DATA, BOARD_MEMBERS, TRAILBLAZERS_ANNOUNCEMENT 
} from '../../data/fbfData';

export default function T2About({ onNavigate, onApplyBoard }) {
  return (
    <div id="t2-about-page" className="bg-white text-slate-900 font-sans">
      
      {/* 1. TOP BANNER: TRAILBLAZERS AWARD (Exact Screenshot 12) */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="relative h-[380px] sm:h-[460px] w-full">
          <img
            src="/images/downloaded/about_32.jpg"
            alt="Young Black woman studying in computer lab"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = '/images/live_site/pillar_career.jpg'; }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Floating Award Box Over Image (Exact Screenshot 12) */}
          <div className="absolute top-1/2 left-6 sm:left-12 lg:left-20 -translate-y-1/2 max-w-md bg-[#7C3AED]/95 border border-[#FDF289] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 text-left">
            <h2 className="font-quando text-2xl sm:text-3xl text-white font-normal leading-tight">
              Future Black Trailblazers Award
            </h2>
            <p className="text-[#FDF289] text-xs sm:text-sm font-semibold">
              $500 Scholarship for Black Students going to Brock U this fall.
            </p>
            <div className="pt-2">
              <a
                href={TRAILBLAZERS_ANNOUNCEMENT.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-2.5 rounded-full bg-[#FDF289] hover:bg-[#FBE850] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Wow Us!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US HEADER BANNER (Exact Screenshot 12) */}
      <section 
        className="text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #7A5AF8 0%, #8B5CF6 30%, #C026D3 75%, #EC4899 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-5 text-left">
          <h1 className="font-quando text-3xl sm:text-5xl font-normal text-white">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base leading-relaxed font-light">
            Feminist-informed Future Black Female (FBF) is a non-profit organization that works to empower Black girls and women between the ages of 16 and 22 to take charge of their education and career paths as well as their social, political, and civic engagement.
          </p>
          <p className="text-white text-sm sm:text-base leading-relaxed font-light">
            We offer access to strong networks, skills development and advancement, and rights-based advocacy. Since 2019, FBF has successfully initiated and implemented numerous initiatives in collaboration with community partners and other organizations.
          </p>
        </div>
      </section>

      {/* 3. WHY WE EXIST & OUR BELIEFS (Exact Screenshot 10) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-2 mb-10 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              WHY WE EXIST
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl text-slate-900 font-normal">
              Our Beliefs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo: Two Women against graffiti wall (Exact Screenshot 10) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-slate-100 max-w-sm mx-auto lg:max-w-none group">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Two young Black women smiling together against colorful wall"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FDF289]" />
                    <span>Civic Empowerment • Niagara Region</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text: Vision, Values, Mission (Exact Screenshot 10) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
                  VISION
                </h3>
                <p className="font-quando text-xl sm:text-2xl text-slate-900">
                  Community-Empowered Black Female Youth
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
                  VALUES
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Opportunity • Dignity • Respect • Equality • Tenacity • Education • Advocacy • Celebration • Authenticity • Action • Unity
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#7C3AED]">
                  MISSION
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  To increase access to opportunities that result in Black female youth across the globe becoming more socially, politically, and economically empowered through strong networks, skills advancement, and rights-based advocacy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT WE DO & OUR PRINCIPLES (Exact Screenshot 9) */}
      <section className="py-20 sm:py-24 bg-[#7C3AED] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDF289]">
              WHAT WE DO
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl text-[#FDF289] font-normal">
              Our Principles
            </h2>
          </div>

          {/* Wide Rounded Photo Card of 4 Women */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/9] sm:aspect-[2.2/1] bg-slate-900 border border-purple-400/30">
            <img
              src="/images/downloaded/about_33.jpg"
              alt="Four Black women smiling together in solidarity"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/images/live_site/hero_darina.jpg'; }}
            />
          </div>

          {/* Manifesto: FEMALE EMPOWERMENT */}
          <div className="space-y-4 max-w-3xl pt-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#FDF289]">
              FEMALE EMPOWERMENT
            </h3>
            <p className="text-white text-sm sm:text-base leading-relaxed font-light">
              We privilege Black Feminist Thought, which contributed to society's understanding of intersectionality and epistemic privilege. Further, we advance the centering of Black feminists in the understanding of what it is to be a girl or woman by creating and claiming space in the world and as a vital part of the global feminist movement.
            </p>
          </div>

        </div>
      </section>

      {/* 5. FOUNDER SPOTLIGHT & BOARD DIRECTORY */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Founder Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl mx-auto border-4 border-white bg-slate-800">
                <img
                  src={ORG_DATA.founder.image}
                  alt={ORG_DATA.founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
                FOUNDER & EXECUTIVE DIRECTOR
              </span>
              <h3 className="font-quando text-2xl sm:text-3xl text-slate-900">
                {ORG_DATA.founder.name}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {ORG_DATA.founder.bio}
              </p>
              <blockquote className="font-quando italic text-sm text-slate-700 border-l-2 border-[#7C3AED] pl-4">
                "{ORG_DATA.founder.quote}"
              </blockquote>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="space-y-8 pt-8 border-t border-slate-200 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
                  FIDUCIARY GOVERNANCE
                </span>
                <h3 className="font-quando text-2xl text-slate-900">
                  Board of Directors
                </h3>
              </div>
              <button
                onClick={onApplyBoard}
                className="px-6 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Join Our Board
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BOARD_MEMBERS.map((bm) => (
                <div key={bm.name} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <h4 className="font-bold text-sm text-slate-900">{bm.name}</h4>
                  <p className="text-xs text-[#7C3AED] font-semibold">{bm.role}</p>
                  <p className="text-xs text-slate-500">{bm.background}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. PARTNERS STRIP (Exact Screenshot 14) */}
      <section className="py-16 sm:py-20 bg-white text-center border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-quando text-2xl sm:text-3xl text-slate-900 font-normal">
            Thank you for our founder and partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center justify-items-center max-w-4xl mx-auto py-4">
            {/* 1. Ontario Trillium Foundation */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center text-center space-y-2 w-full max-w-[260px] h-36 shadow-xs">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-600 font-bold text-sm">
                ☘
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-tight leading-tight">
                Ontario Trillium Foundation
              </div>
              <div className="text-[10px] text-slate-500 italic leading-none">
                Fondation Trillium de l'Ontario
              </div>
            </div>

            {/* 2. Brock LINC */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-[#CC0000] text-white flex flex-col items-center justify-center text-center space-y-0.5 w-full max-w-[220px] h-36 shadow-sm">
              <span className="font-bold text-xl sm:text-2xl tracking-tighter uppercase font-sans">
                Brock
              </span>
              <span className="font-bold text-xl sm:text-2xl tracking-tighter uppercase font-sans text-white/95">
                LINC
              </span>
            </div>

            {/* 3. Downtown St. Catharines */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center text-center space-y-1 w-full max-w-[260px] h-36 shadow-xs">
              <div className="font-bold text-lg text-[#00838F] tracking-wider uppercase border-b-2 border-[#00838F] pb-1 w-full">
                DOWNTOWN
              </div>
              <div className="text-[11px] font-bold text-slate-700 tracking-widest uppercase">
                ST. CATHARINES
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              BECOME A SPONSOR
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

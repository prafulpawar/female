import React, { useState } from 'react';
import { 
  Award, FileText, Download, CheckCircle, ExternalLink, ShieldCheck, 
  ChevronRight, Heart, Sparkles, Users, BookOpen, Quote, ArrowRight, Shield
} from 'lucide-react';
import { 
  ORG_DATA, ABOUT_VALUES, ABOUT_PRINCIPLES, 
  GOVERNANCE_REPORTS, BOARD_MEMBERS, TRAILBLAZERS_ANNOUNCEMENT 
} from '../../data/fbfData';

export default function T1About({ onNavigate, onApplyBoard }) {
  const [activePrincipleTab, setActivePrincipleTab] = useState('female-empowerment');

  return (
    <div id="about-page" className="bg-white text-[#1B2828] font-dm">

      {/* 1. EXACT SCREENSHOT 7: Top Trailblazers $500 Scholarship Banner */}
      <section className="relative w-full bg-stone-900 overflow-hidden border-b border-stone-200">
        <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center">
          
          {/* Full-bleed background image: Young Black woman coding */}
          <img 
            src="/images/downloaded/about_32.jpg" 
            alt="Young Black woman studying - Future Black Trailblazers Award"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
            onError={(e) => { e.target.src = '/images/branded/about-banner.jpg'; }}
          />

          {/* Floating Magenta/Pink Scholarship Box */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="bg-[#E91E63] text-white p-6 sm:p-8 rounded-2xl max-w-md shadow-2xl space-y-4">
              <h2 className="font-quando font-normal text-2xl sm:text-3xl text-white leading-tight">
                Future Black Trailblazers Award
              </h2>
              
              <p className="text-white/95 text-sm sm:text-base font-medium">
                $500 Scholarship for Black Students going to Brock U this fall.
              </p>

              <div>
                <a
                  href="https://forms.gle/2iyumhptCAm8ghfm6?_iipp=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-2.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
                >
                  <span>Wow Us!</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. EXACT SCREENSHOT 7 (Bottom): About Us Electric Indigo Banner */}
      <section className="py-14 sm:py-20 bg-[#5B60E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-quando font-normal text-white">
            About Us
          </h1>
          <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-4xl font-light">
            Feminist-informed Future Black Female (FBF) is a non-profit organization that works to empower Black girls and women between the ages of 16 and 22 to take charge of their education and career paths as well as their social, political, and civic engagement. We offer access to strong networks, skills development and advancement, and rights-based advocacy. Since 2019, FBF has successfully initiated and implemented numerous initiatives in collaboration with community partners and other organizations.
          </p>
        </div>
      </section>

      {/* 3. EXACT SCREENSHOT 8: Why We Exist / Our Beliefs (Vision, Values, Mission) */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-left space-y-2 max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6] block">
              WHY WE EXIST
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#1B2828] leading-tight">
              Our Beliefs
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Anchored in Black feminist principles, intersectional community care, and generational empowerment across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Photo of Two Black Women Against Graffiti Wall (Fixed aspect ratio & frame) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-stone-100 group">
                <img
                  src="/images/downloaded/about_29.jpg"
                  alt="Two Black Women smiling against street graffiti wall - Future Black Female"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/live_site/about_two_women.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FDF289]" />
                    <span>Sisterhood in Action • St. Catharines HQ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vision, Mission, and Values */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* VISION CARD */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-[#E8DFC8] space-y-2 shadow-xs hover:border-[#5B60E6]/50 transition-colors">
                <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6] block">
                  VISION
                </span>
                <p className="font-quando font-normal text-2xl sm:text-3xl text-[#1B2828] leading-snug">
                  Community-Empowered Black Female Youth
                </p>
              </div>

              {/* MISSION CARD */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DFC8] space-y-2 shadow-xs hover:border-[#5B60E6]/50 transition-colors">
                <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6] block">
                  MISSION
                </span>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                  To increase access to opportunities that result in Black female youth across the globe becoming more socially, politically, and economically empowered through strong networks, skills advancement, and rights-based advocacy.
                </p>
              </div>

              {/* CORE VALUES */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6] block">
                  VALUES
                </span>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_VALUES.map((val) => (
                    <span
                      key={val}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF8F5] border border-[#E8DFC8] text-[#1B2828] hover:border-[#5B60E6] transition-colors"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              {/* Canadian Registration Verification Pill */}
              <div className="pt-2 flex items-center gap-2 text-xs text-stone-600 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Canadian Registered Charity #{ORG_DATA.charityNumber} • St. Catharines HQ</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. EXACT SCREENSHOT 9: What We Do / Our Principles on Royal Purple (#5B60E6) */}
      <section className="py-20 lg:py-24 bg-[#5B60E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDF289] block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-[#FDF289]">
              Our Principles
            </h2>
          </div>

          {/* Large Wide Rounded Photo Card: 4 Black Women */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[16/7] max-h-[460px] bg-stone-900">
            <img 
              src="/images/downloaded/about_33.jpg" 
              alt="Four Black women smiling together with diverse hairstyles" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/images/live_site/pillar_mental_health.jpg'; }}
            />
          </div>

          {/* Below Photo: Female Empowerment Manifesto */}
          <div className="space-y-3 max-w-4xl pt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-white block">
              FEMALE EMPOWERMENT
            </span>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed font-light">
              We privilege Black Feminist Thought, which contributed to society's understanding of intersectionality and epistemic privilege. Further, we advance the centering of Black feminists in the understanding of what it is to be a girl or woman by creating and claiming space in the world and as a vital part of the global feminist movement.
            </p>
          </div>

        </div>
      </section>

      {/* 5. FOUNDER REFLECTION SPOTLIGHT (Dr. Tapo Chimbganda) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border-2 border-stone-200 shadow-md">
                <img 
                  src={ORG_DATA.founder.image} 
                  alt={ORG_DATA.founder.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6]">
                FOUNDER & EXECUTIVE DIRECTOR
              </span>

              <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#1B2828]">
                {ORG_DATA.founder.name}
              </h3>

              <blockquote className="font-quando italic text-base sm:text-lg text-stone-800 leading-relaxed pl-4 border-l-3 border-[#5B60E6] py-1">
                "{ORG_DATA.founder.quote}"
              </blockquote>

              <p className="text-stone-700 text-sm leading-relaxed">
                {ORG_DATA.founder.bio}
              </p>

              <div className="pt-2 text-xs font-semibold text-stone-600">
                Founded FBF in 2019 • St. Catharines, Niagara Region, Ontario
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FIDUCIARY STEWARDSHIP & BOARD OF DIRECTORS */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#5B60E6]">
                FIDUCIARY GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                Board of Directors
              </h2>
              <p className="text-stone-600 text-sm max-w-xl">
                Independent trustees ensuring fiduciary transparency, legal accountability, and community leadership.
              </p>
            </div>

            <button
              onClick={() => onApplyBoard?.({ title: "Board Member", department: "Governance", type: "Volunteer" })}
              className="px-6 py-3 rounded-full bg-[#5B60E6] hover:bg-[#4b50d0] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 shrink-0"
            >
              Apply to Board
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD_MEMBERS.map((bm, idx) => {
              const isVacant = bm.status.includes('Vacant');
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    isVacant
                      ? 'bg-purple-50/50 border-dashed border-[#8558CE]'
                      : 'bg-white border-stone-200 shadow-xs hover:border-[#8558CE]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                        isVacant ? 'bg-purple-100 text-[#8558CE]' : 'bg-[#8558CE] text-white'
                      }`}>
                        {isVacant ? '?' : bm.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isVacant ? 'bg-[#8558CE] text-white' : 'bg-stone-100 text-stone-700'
                      }`}>
                        {bm.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-quando font-normal text-lg text-[#1B2828]">{bm.name}</h4>
                      <p className="text-xs font-bold text-[#8558CE] mt-0.5">{bm.role}</p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {isVacant
                        ? "Nominations are currently open for Black women and non-binary professionals committed to governance stewardship."
                        : "Active fiduciary trustee on the FBF Governance Board ensuring audit excellence and community accountability."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4">
                    {isVacant ? (
                      <button
                        onClick={() => onApplyBoard?.(bm)}
                        className="w-full py-2 rounded-lg bg-[#8558CE] hover:bg-[#7245b7] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Apply / Nominate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Fiduciary Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. EXACT SCREENSHOT 6 & 10: Thank You For Our Founder and Partners + Become a Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#1B2828]">
            Thank you for our founder and partners
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 pt-4">
            
            {/* Ontario Trillium Foundation */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl max-w-[200px] shadow-2xs flex items-center justify-center">
              <img
                src="/images/downloaded/about_36.png"
                alt="Ontario Trillium Foundation"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.target.outerHTML = '<span class="font-bold text-xs text-stone-800">Ontario Trillium Foundation</span>';
                }}
              />
            </div>

            {/* Brock LINC */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl max-w-[160px] shadow-2xs flex items-center justify-center">
              <div className="bg-[#CC0000] text-white p-3 rounded text-center">
                <span className="font-black text-sm block leading-tight tracking-tight">Brock</span>
                <span className="font-black text-lg block leading-none tracking-tight">LINC</span>
              </div>
            </div>

            {/* Downtown St. Catharines */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl max-w-[220px] shadow-2xs flex items-center justify-center">
              <div className="text-center font-bold text-xs">
                <span className="text-[#328CC1] text-base block font-black tracking-widest border-b-2 border-[#328CC1] pb-0.5">DOWNTOWN</span>
                <span className="text-stone-700 block text-[10px] tracking-wider mt-0.5">ST. CATHARINES</span>
              </div>
            </div>

          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('donate')}
              className="px-10 py-3.5 rounded-full bg-[#8558CE] hover:bg-[#7245b7] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              BECOME A SPONSOR
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

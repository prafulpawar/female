import React from 'react';
import { ArrowRight, Heart, Sparkles, CheckCircle2, Star, Quote } from 'lucide-react';
import { LIVE_PILLARS, ENGAGEMENT_PILLARS, FUNDERS_DATA, INTERN_TESTIMONIALS, ORG_DATA } from '../../data/fbfData';

export default function T2BentoPillars({ onNavigate }) {
  return (
    <div id="t2-pillars" className="space-y-0 text-slate-900 font-sans">

      {/* 1. ASYMMETRIC EDITORIAL INTRO SECTION (Non-Generic) */}
      <section className="py-20 sm:py-28 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Composition with Quote Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/4.8] bg-rose-50 border-4 border-rose-100/60 max-w-md mx-auto lg:max-w-none relative group">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Two smiling Black women sharing joy, friendship, and sisterhood"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Embedded Quote Card at Bottom of Photo */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-xl border border-rose-100 space-y-1">
                  <p className="text-xs font-serif italic text-slate-800 leading-snug">
                    "When Black female youth thrive, our entire society advances."
                  </p>
                  <p className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                    — Dr. Tapo Chimbganda, Founder & ED
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Card with Pink & Warm Accents */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold uppercase tracking-widest text-[#E11D48]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR PURPOSE & MISSION</span>
              </div>

              <h2 className="font-quando text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] text-slate-900">
                Where Black women increase access to opportunities for Black female youth.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                Through strong networks, skills advancement programs, and rights-based advocacy, Future Black Female (FBF) creates access across Canada and the globe to social, political and economic opportunities for Black girls and young women (16–22 years).
              </p>

              {/* 3 Authentic Feature Checkpoints */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Pro-Black Mental Health Care:</strong> Safe, culturally grounded counseling destigmatizing wellness for Black youth.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Financial Wellbeing & Mastery:</strong> Student budgeting, micro-grants, and practical wealth-building tools.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Workforce & Education Strategies:</strong> Paid federal internships, university grants, and executive sponsorship.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#BE185D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <span>LEARN ABOUT OUR WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3.5 rounded-full bg-rose-50 hover:bg-rose-100 text-[#E11D48] border border-rose-200 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
                >
                  GET IN TOUCH
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS OF TRANSFORMATION (Rich Non-Generic Cards) */}
      <section className="py-20 sm:py-28 bg-[#FFF1F2]/50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48] block">
              SYSTEMIC IMPACT
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
              Future Black Female Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Our holistic non-profit model integrates clinical mental health, economic independence, and educational advancement into interconnected community support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Pillar 1: Pro-Black Mental Health Services */}
            <div
              onClick={() => onNavigate('programs')}
              className="group cursor-pointer rounded-[2.2rem] overflow-hidden bg-white border border-rose-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3.5] overflow-hidden bg-rose-100 relative">
                  <img
                    src="/images/live_site/pillar_mental_health.jpg"
                    alt="Pro-Black Mental Health Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-sky-700 shadow-xs">
                      Clinical Care
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <h3 className="font-quando text-xl sm:text-2xl text-slate-900 font-normal leading-snug group-hover:text-[#E11D48] transition-colors">
                    Pro-Black Mental Health Services
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    Afrocentric, trauma-informed psychological counseling destigmatizing emotional wellness for Black girls, offering both individual therapy and supportive peer cohorts.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Udada Support Circle</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Ujamaa Brotherhood</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Free Therapy</span>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <div className="w-full py-3 rounded-full bg-rose-50 text-[#E11D48] font-bold text-xs uppercase tracking-wider text-center group-hover:bg-[#E11D48] group-hover:text-white transition-all shadow-xs flex items-center justify-center gap-1.5">
                  <span>Explore Mental Health</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Pillar 2: Financial Wellbeing */}
            <div
              onClick={() => onNavigate('programs')}
              className="group cursor-pointer rounded-[2.2rem] overflow-hidden bg-white border border-rose-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3.5] overflow-hidden bg-rose-100 relative">
                  <img
                    src="/images/live_site/pillar_financial_wellbeing.jpg"
                    alt="Financial Wellbeing & Literacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#E11D48] shadow-xs">
                      Economic Agency
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <h3 className="font-quando text-xl sm:text-2xl text-slate-900 font-normal leading-snug group-hover:text-[#E11D48] transition-colors">
                    Financial Wellbeing & Literacy
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    Practical wealth-building, student budgeting, tax filing clinics, and financial resilience training designed to foster generational prosperity for Black female youth.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Budgeting Clinics</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Tax Preparation</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Credit Mastery</span>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <div className="w-full py-3 rounded-full bg-rose-50 text-[#E11D48] font-bold text-xs uppercase tracking-wider text-center group-hover:bg-[#E11D48] group-hover:text-white transition-all shadow-xs flex items-center justify-center gap-1.5">
                  <span>Explore Financial Programs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Pillar 3: Career & Education Strategies */}
            <div
              onClick={() => onNavigate('programs')}
              className="group cursor-pointer rounded-[2.2rem] overflow-hidden bg-white border border-rose-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3.5] overflow-hidden bg-rose-100 relative">
                  <img
                    src="/images/live_site/pillar_career_education.jpg"
                    alt="Career & Education Strategies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-purple-700 shadow-xs">
                      Workforce Equity
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <h3 className="font-quando text-xl sm:text-2xl text-slate-900 font-normal leading-snug group-hover:text-[#E11D48] transition-colors">
                    Career & Education Strategies
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    Equipping youth with resume clinics, university transition support, executive corporate mentorship, and our annual $500 scholarship for incoming Brock University students.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">Trailblazers Grant</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">CSJ Paid Internships</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100">STEM Pathways</span>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <div className="w-full py-3 rounded-full bg-rose-50 text-[#E11D48] font-bold text-xs uppercase tracking-wider text-center group-hover:bg-[#E11D48] group-hover:text-white transition-all shadow-xs flex items-center justify-center gap-1.5">
                  <span>Explore Career Programs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MOTIVATION SECTION & 3-STEP PROCESS (Deep Berry & Pink Theme) */}
      <section className="py-20 sm:py-28 bg-[#1E1122] text-white text-center relative overflow-hidden">
        
        {/* Subtle pink atmospheric warmth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.4) 0%, transparent 60%)'
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDF289] block font-mono">
              THEORY OF CHANGE
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#FDF289] leading-tight">
              The well-being of Black female youth is our motivation.
            </h2>
            <p className="text-rose-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              To achieve our vision of a community-empowered Black female population, FBF relies on three interconnected pillars of community engagement:
            </p>
          </div>

          {/* 3 Process Cards with Rose & Gold Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 text-left">
            {ENGAGEMENT_PILLARS.map((ep) => (
              <div 
                key={ep.number} 
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#E11D48]/50 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#FDF289] bg-[#E11D48]/30 flex items-center justify-center text-xl font-quando text-[#FDF289]">
                    {ep.number}
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug">
                    {ep.number === '1' && 'Solution-Focused Action'}
                    {ep.number === '2' && 'Network for Equity'}
                    {ep.number === '3' && 'Community Sustainability'}
                  </h3>
                  <p className="text-sm text-rose-100/90 leading-relaxed font-light">
                    {ep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR FUNDERS STRIP (High Credibility) */}
      <section className="py-14 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="shrink-0 text-center md:text-left space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48] block">
                INSTITUTIONAL BACKING
              </span>
              <h3 className="font-quando text-2xl sm:text-3xl text-slate-900">
                Our Funders & Partners
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-10 sm:gap-14">
              <img
                src="/images/live_site/funder_cwf.png"
                alt="Canadian Women's Foundation"
                className="h-12 sm:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/images/live_site/funder_ncf.png"
                alt="Niagara Community Foundation"
                className="h-12 sm:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/images/live_site/funder_wage.png"
                alt="Women and Gender Equality Canada"
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTHENTIC INTERN VOICES & COMMUNITY TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FFF1F2] to-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-rose-200 pb-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48] block">
                FROM OUR INTERNS & FELLOWS
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
                Testimonials & Lived Impact
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md font-light">
              Reflections from young Black women who led research, coordinated community programs, and built lifelong leadership networks through FBF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INTERN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-[2.2rem] p-8 flex flex-col justify-between space-y-6 border border-rose-100 shadow-md hover:shadow-xl transition-all text-left group"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-rose-200 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-rose-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-200 shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#E11D48] font-semibold">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {t.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALLOUT BANNER: RESPONSIVE & CULTURALLY RELEVANT */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-white p-10 sm:p-16 rounded-[2.5rem] shadow-2xl text-center space-y-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #BE185D 0%, #E11D48 40%, #DB2777 80%, #9D174D 100%)'
            }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#FDF289]">
              OUR COMMITMENT TO COMMUNITY
            </span>

            <p className="font-quando text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-relaxed max-w-4xl mx-auto">
              "We ensure any work we do, any programs we run, and any resources and time spent are culturally relevant and responsive to the Black girls and young women we serve."
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                GET IN TOUCH
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs uppercase tracking-wider transition-all"
              >
                READ OUR BELIEFS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THANK YOU TO OUR FOUNDER & PARTNERS */}
      <section className="py-16 sm:py-20 bg-slate-50 text-center border-t border-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <h2 className="font-quando text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Thank you for our founder and partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-items-center pt-2">
            <div className="p-4 flex items-center justify-center">
              <img
                src="/images/live_site/funder_otf.png"
                alt="Ontario Trillium Foundation"
                className="max-h-20 sm:max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="p-4 flex items-center justify-center">
              <img
                src="/images/live_site/funder_brock_linc.png"
                alt="Brock LINC"
                className="max-h-14 sm:max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="p-4 flex items-center justify-center">
              <img
                src="/images/live_site/funder_downtown_stc.png"
                alt="Downtown St. Catharines"
                className="max-h-14 sm:max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#BE185D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              BECOME A SPONSOR
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

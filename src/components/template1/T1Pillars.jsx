import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { LIVE_PILLARS, ENGAGEMENT_PILLARS, FUNDERS_DATA, INTERN_TESTIMONIALS } from '../../data/fbfData';
import RatingStars from '../shared/RatingStars';

export default function T1Pillars({ onNavigate }) {
  const stepIcons = [
    '/images/live_site/step_1.png',
    '/images/live_site/step_2.png',
    '/images/live_site/step_3.png'
  ];

  return (
    <div id="pillars" className="space-y-0 text-[#1B2828] font-dm bg-white">

      {/* 1. EXACT SCREENSHOT 2: Overlapping Intro Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-0">
            
            {/* Left Photo: Two Black Women Smiling */}
            <div className="lg:col-span-5 z-10">
              <div className="overflow-hidden shadow-2xl rounded-2xl sm:rounded-3xl border-4 border-white aspect-[4/5] bg-stone-100 max-w-md mx-auto lg:max-w-none">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Two Black Women Smiling - Where Black women increase access to opportunities"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/branded/about-banner.jpg'; }}
                />
              </div>
            </div>

            {/* Right Overlapping Purple Card (bg-[#5B60E6]) */}
            <div className="lg:col-span-7 lg:-ml-8 mt-6 lg:mt-0 z-20">
              <div className="bg-[#5B60E6] text-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl lg:rounded-r-3xl shadow-xl space-y-6">
                
                <span className="text-[#FDF289] font-bold text-xs uppercase tracking-widest block">
                  FUTURE BLACK FEMALE
                </span>

                <h2 className="font-quando font-normal text-2xl sm:text-3xl lg:text-4xl text-[#FDF289] leading-snug">
                  Where Black women increase access to opportunities for Black female youth.
                </h2>

                <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                  Through strong networks, skills advancement programs, and rights-based advocacy, Future Black Female (FBF) creates access across Canada and the globe to social, political and economic opportunities for Black girls and young women (16–22 years).
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="px-8 py-3 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Learn More About FBF</span>
                    <ArrowRight className="w-4 h-4 text-[#1B2828]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXACT SCREENSHOT 3: Future Black Female Pillars (Blue, Purple, Magenta) */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quando font-normal text-[#1B2828] text-center">
            Future Black Female Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Pro-Black Mental Health Services (Blue Bar: #2E86AB) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="h-80 overflow-hidden bg-stone-100">
                <img
                  src="/images/live_site/pillar_mental_health.jpg"
                  alt="Pro-Black Mental Health Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                />
              </div>
              <div className="bg-[#2E86AB] p-5 text-center">
                <span className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider block">
                  PRO-BLACK MENTAL HEALTH SERVICES
                </span>
              </div>
            </div>

            {/* Pillar 2: Financial Wellbeing (Purple Bar: #8558CE) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="h-80 overflow-hidden bg-stone-100">
                <img
                  src="/images/live_site/pillar_financial.jpg"
                  alt="Financial Wellbeing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                />
              </div>
              <div className="bg-[#5B60E6] p-5 text-center">
                <span className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider block">
                  FINANCIAL WELLBEING
                </span>
              </div>
            </div>

            {/* Pillar 3: Career & Education Strategies (Magenta Bar: #C2185B) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="h-80 overflow-hidden bg-stone-100">
                <img
                  src="/images/live_site/pillar_career.jpg"
                  alt="Career & Education Strategies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                />
              </div>
              <div className="bg-[#C2185B] p-5 text-center">
                <span className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider block">
                  CAREER & EDUCATION STRATEGIES
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EXACT SCREENSHOT 4: Motivation & 3 Numbered Circles on Royal Purple */}
      <section className="py-20 lg:py-24 bg-[#5B60E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quando font-normal text-[#FDF289] leading-tight">
              The well-being of Black female youth is our motivation.
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed">
              To achieve our vision of a community-empowered Black female population, FBF relies on three pillars of community engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {ENGAGEMENT_PILLARS.map((p, idx) => (
              <div 
                key={idx}
                className="text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                {/* Yellow Numbered Circle */}
                <div className="w-16 h-16 rounded-full border-2 border-[#FDF289] text-[#FDF289] text-2xl font-quando font-normal flex items-center justify-center mx-auto shadow-md">
                  {idx + 1}
                </div>

                <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed max-w-xs mx-auto">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EXACT SCREENSHOT 4 (Bottom): Our Funders Strip on White */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <h3 className="text-2xl font-quando font-normal text-[#1B2828] shrink-0">
              Our Funders
            </h3>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-14">
              <img
                src="/images/live_site/funder_cwf.png"
                alt="Canadian Women's Foundation - Fondation Canadienne des Femmes"
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
              <img
                src="/images/live_site/funder_ncf.png"
                alt="Niagara Community Foundation"
                className="h-9 sm:h-11 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
              <img
                src="/images/live_site/funder_wage.png"
                alt="Women and Gender Equality Canada - Femmes et Égalité des genres Canada"
                className="h-8 sm:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXACT SCREENSHOT 5: Floating Purple Callout */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#8558CE] text-white p-8 sm:p-14 rounded-3xl shadow-2xl text-center space-y-8">
            <h3 className="font-quando font-normal text-xl sm:text-3xl text-[#FDF289] leading-relaxed max-w-3xl mx-auto">
              We ensure any work we do, any programs we run, and any resources and time spent are culturally relevant and responsive to the Black girls and young women we serve.
            </h3>

            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 inline-block"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. EXACT SCREENSHOT 5 & 6: Intern Testimonials on Vibrant Magenta (#D81B60) */}
      <section className="py-20 lg:py-24 bg-[#D81B60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-white/80 block">
              FROM OUR INTERNS
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-[#FDF289]">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTERN_TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white/10 border border-white/20 backdrop-blur-xs p-8 rounded-3xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#FDF289]/80" />
                  <p className="font-quando italic text-base sm:text-lg text-white leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FDF289] shrink-0 bg-stone-900">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/images/branded/founder-tapo.jpg'; }}
                    />
                  </div>
                  <div>
                    <h4 className="font-quando font-normal text-base text-[#FDF289]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-white/80">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. EXACT SCREENSHOT 6 & 10: Thank You For Our Founder and Partners + Become a Sponsor */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-quando font-normal text-[#1B2828]">
            Thank you for our founder and partners
          </h2>

          {/* Partner Logos: Ontario Trillium, Brock LINC, Downtown St. Catharines */}
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 pt-4">
            
            {/* Ontario Trillium Foundation */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl max-w-[200px] shadow-2xs flex items-center justify-center">
              <img
                src="/images/downloaded/about_36.png"
                alt="Ontario Trillium Foundation - Fondation Trillium de l'Ontario"
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

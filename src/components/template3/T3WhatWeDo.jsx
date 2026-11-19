import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Heart, BookOpen, Quote, Star, Award, ShieldCheck, CheckCircle2, Users, Newspaper, ExternalLink } from 'lucide-react';
import { FUNDERS_DATA, INTERN_TESTIMONIALS, ORG_DATA, MEDIA_FEATURES } from '../../data/fbfData';

export default function T3WhatWeDo({ onNavigate }) {
  // 8-Card Trust & Credibility Grid Data (Inspired by Share Samadhan screenshot)
  const credibilityStats = [
    {
      number: '1,750+',
      label: 'Free Therapy Sessions',
      subtext: 'Delivered at zero cost by Black clinicians',
      icon: '🌸',
      bgColor: 'bg-rose-100/70',
      textColor: 'text-[#873F50]'
    },
    {
      number: '500+',
      label: 'Black Female Youth',
      subtext: 'Directly supported across Ontario',
      icon: '👥',
      bgColor: 'bg-amber-100/70',
      textColor: 'text-[#B45309]'
    },
    {
      number: '$500',
      label: 'Brock U Scholarships',
      subtext: 'Annual Future Black Trailblazers Grant',
      icon: '🎓',
      bgColor: 'bg-purple-100/70',
      textColor: 'text-purple-800'
    },
    {
      number: '12',
      label: 'Active Holistic Programs',
      subtext: 'Udada, Ujamaa, Book Club, and Career',
      icon: '💼',
      bgColor: 'bg-emerald-100/70',
      textColor: 'text-emerald-800'
    },
    {
      number: '428+',
      label: 'Community Donors',
      subtext: 'Allies funding sustainable youth bursaries',
      icon: '🤝',
      bgColor: 'bg-sky-100/70',
      textColor: 'text-sky-800'
    },
    {
      number: '#79425',
      label: 'CRA Registered Charity',
      subtext: '100% Tax Deductible across Canada',
      icon: '🏛️',
      bgColor: 'bg-orange-100/70',
      textColor: 'text-orange-800'
    },
    {
      number: '100%',
      label: 'Black-Feminist Co-Designed',
      subtext: 'Rooted in lived experience & care',
      icon: '✨',
      bgColor: 'bg-pink-100/70',
      textColor: 'text-pink-800'
    },
    {
      number: '16–22',
      label: 'Target Age Cohort',
      subtext: 'Navigating education & career launch',
      icon: '🍁',
      bgColor: 'bg-stone-200/60',
      textColor: 'text-stone-800'
    }
  ];

  // 3-Step Connected Process Flow (Inspired by Share Samadhan Process Flow screenshot)
  const processSteps = [
    {
      step: '01',
      action: 'LISTEN & STRATEGIZE',
      title: 'Developing Solution-Focused Strategies',
      description: 'Developing and initiating targeted, culturally relevant, and rights-based programs co-designed with Black girls and young women.',
      badge: 'Step 1 • Co-Design',
      color: 'bg-[#5B3396]',
      image: '/images/live_site/about_two_women.jpg'
    },
    {
      step: '02',
      action: 'CONNECT & EQUIP',
      title: 'Establishing a Network for Action',
      description: 'Connecting youth with licensed Black therapists, academic tutors, university deans, and senior corporate executives.',
      badge: 'Step 2 • Action Network',
      color: 'bg-[#D81B60]',
      image: '/images/live_site/pillar_financial.jpg'
    },
    {
      step: '03',
      action: 'SUSTAIN & ADVANCE',
      title: 'Ongoing Support of Established Efforts',
      description: 'Providing sustainable institutional backing, emergency micro-grants, and career acceleration to break systemic barriers.',
      badge: 'Step 3 • Long-term Support',
      color: 'bg-[#B45309]',
      image: '/images/live_site/pillar_career.jpg'
    }
  ];

  return (
    <div id="t3-whatwedo" className="space-y-0 text-[#34252A] font-sans">
      
      {/* 1. AUTHENTIC FBF SECOND SECTION: PHOTO ON LEFT + PURPLE CARD ON RIGHT (Matching Screenshot 2) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Photo of Two Smiling Black Women (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3.8] group">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Two smiling Black women sharing joy and sisterhood"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Authentic Purple Rounded Container (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-[#7046B3] text-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] shadow-xl space-y-6 text-left relative overflow-hidden">
                
                {/* Subtle soft backdrop glow */}
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FDF289] block">
                    FUTURE BLACK FEMALE
                  </span>
                  
                  {/* Headline in Quando Serif and Butter Yellow */}
                  <h2 className="font-quando text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FDF289] leading-[1.2]">
                    Where Black women increase access to opportunities for Black female youth.
                  </h2>
                </div>

                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light relative z-10">
                  Through strong networks, skills advancement programs, and rights-based advocacy, Future Black Female (FBF) creates access across Canada and the globe to social, political and economic opportunities for Black girls and young women (16–22 years).
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 relative z-10">
                  <button
                    onClick={() => onNavigate('programs')}
                    className="px-6 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
                  >
                    <span>EXPLORE PROGRAMS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('about')}
                    className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>OUR FOUNDER & STORY</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FUTURE BLACK FEMALE PILLARS: 3 ARCHED PHOTO CARDS (Matching Screenshot 3) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight">
              Future Black Female Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              FBF’s Wellbeing Development Strategy addresses systemic disparities through three deeply interconnected focus areas.
            </p>
          </div>

          {/* 3 Authentic Photo Arched Cards with Teal, Purple, and Magenta Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Pillar 1: Mental Health (Teal Banner) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="bg-white rounded-[2.2rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="aspect-[4/3.2] overflow-hidden bg-slate-100">
                  <img
                    src="/images/live_site/pillar_mental_health.jpg"
                    alt="Pro-Black Mental Health Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Authentic Teal Banner from Screenshot 3 */}
                <div className="bg-[#00838F] text-white px-6 py-4 font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-between">
                  <span>PRO-BLACK MENTAL HEALTH SERVICES</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-quando font-normal text-xl text-slate-900 leading-snug">
                    Culturally Safe Psychological Care & Wellness
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    Direct access to licensed Black clinical therapists and group healing circles through our Udada sisterhood initiative. Over 1,750 therapy sessions subsidized at zero cost.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#00838F] font-bold">
                <span>Free 1-on-1 Sessions</span>
                <span className="underline">View Program Details →</span>
              </div>
            </div>

            {/* Pillar 2: Financial Wellbeing (Purple Banner) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="bg-white rounded-[2.2rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="aspect-[4/3.2] overflow-hidden bg-slate-100">
                  <img
                    src="/images/live_site/pillar_financial.jpg"
                    alt="Financial Wellbeing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Authentic Purple Banner from Screenshot 3 */}
                <div className="bg-[#7B1FA2] text-white px-6 py-4 font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-between">
                  <span>FINANCIAL WELLBEING</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-quando font-normal text-xl text-slate-900 leading-snug">
                    Sovereign Capital & Economic Mobility
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    Closing generational wealth gaps through direct financial coaching, youth savings matching, budgeting courses, free tax filing clinics, and emergency student micro-grants.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#7B1FA2] font-bold">
                <span>Wealth Literacy & Micro-grants</span>
                <span className="underline">View Program Details →</span>
              </div>
            </div>

            {/* Pillar 3: Career & Education Strategies (Magenta Banner) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="bg-white rounded-[2.2rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="aspect-[4/3.2] overflow-hidden bg-slate-100">
                  <img
                    src="/images/live_site/pillar_career.jpg"
                    alt="Career and Education Strategies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Authentic Magenta Banner from Screenshot 3 */}
                <div className="bg-[#C2185B] text-white px-6 py-4 font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-between">
                  <span>CAREER & EDUCATION STRATEGIES</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-quando font-normal text-xl text-slate-900 leading-snug">
                    Academic Bursaries & Executive Sponsorship
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    One-on-one mentorship with Black women corporate executives, Canada Summer Jobs paid internships, and university partnerships including the annual $500 Brock U Trailblazers Award.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#C2185B] font-bold">
                <span>$500 Brock Award & Mentorship</span>
                <span className="underline">View Program Details →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MOTIVATION SECTION: PURPLE BACKGROUND + THREE YELLOW NUMBERED CIRCLES (Matching Screenshot 5 & 10) */}
      <section className="py-20 sm:py-28 bg-[#63399E] text-white relative overflow-hidden">
        
        {/* Soft background ambient blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Exact Live Site Yellow Headline in Quando Serif */}
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF289] leading-[1.2]">
              The well-being of Black female youth is our motivation.
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed">
              To achieve our vision of a community-empowered Black female population, FBF relies on three pillars of community engagement:
            </p>
          </div>

          {/* Three Yellow Outlined Circles (1), (2), (3) from Screenshot 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Pillar 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 space-y-5 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#FDF289] text-[#FDF289] flex items-center justify-center font-quando text-2xl font-normal">
                1
              </div>
              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed">
                Developing and initiating solution-focused strategies.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 space-y-5 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#FDF289] text-[#FDF289] flex items-center justify-center font-quando text-2xl font-normal">
                2
              </div>
              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed">
                Establishing a network for action.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 space-y-5 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#FDF289] text-[#FDF289] flex items-center justify-center font-quando text-2xl font-normal">
                3
              </div>
              <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed">
                Ongoing support of established efforts within the community.
              </p>
            </div>

          </div>

          {/* "Our Funders" White Strip from Screenshot 5 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="shrink-0 text-left">
              <h3 className="font-quando text-2xl sm:text-3xl text-slate-950 font-normal">
                Our Funders
              </h3>
              <p className="text-xs text-slate-500 font-light mt-1">
                National and federal institutional partners
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 w-full">
              <a
                href="https://canadianwomen.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/live_site/funder_cwf.png"
                  alt="Canadian Women's Foundation"
                  className="max-h-12 w-auto object-contain"
                />
              </a>

              <a
                href="https://niagaracommunityfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/live_site/funder_ncf.png"
                  alt="Niagara Community Foundation"
                  className="max-h-12 w-auto object-contain"
                />
              </a>

              <a
                href="https://women-gender-equality.canada.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/live_site/funder_wage.png"
                  alt="Women and Gender Equality Canada"
                  className="max-h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONNECTED 3-STAGE PROCESS FLOW (Inspired by Share Samadhan Screenshot 8) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
              THEORY OF CHANGE IN ACTION
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
              How We Walk Alongside Every Youth
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Our 3-stage continuum from immediate emotional safety to sovereign economic leadership.
            </p>
          </div>

          {/* Connected Process Flow with Dashed Lines and Numbered Step Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs relative flex flex-col justify-between space-y-6 text-left group hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {/* Step Marker Badge & Status */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-9 h-9 rounded-full ${step.color} text-white flex items-center justify-center font-quando font-bold text-sm shadow-xs`}>
                      {step.step}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                      {step.action}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                    {step.badge}
                  </span>
                </div>

                {/* Step Visual Preview Thumbnail */}
                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-quando font-normal text-xl text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-xs font-bold text-[#873F50] hover:text-[#6e3140] uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Step Strategy</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. "WHY FUTURE BLACK FEMALE?" — 8-CARD CREDIBILITY GRID (Matching Screenshot 7) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
              PROVEN COMMUNITY TRACK RECORD
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight">
              Why Future Black Female?
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              We translate grassroots feminist philosophy into measurable, lasting outcomes for Black girls and young women navigating systemic disparities in Canada.
            </p>
          </div>

          {/* 8-Card Grid with Soft Pastel Icon Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credibilityStats.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left space-y-4 group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className={`font-quando text-3xl sm:text-4xl font-normal ${item.textColor} block leading-tight`}>
                      {item.number}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-1">
                      {item.label}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-3">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SISTERHOOD IN ACTION: PHOTO GALLERY MOSAIC */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
              LIFE AT FUTURE BLACK FEMALE
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight">
              Sisterhood in Action: Real Moments
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Authentic snapshots of our clinical retreats, university award ceremonies, financial literacy cohorts, and sisterhood circles across Ontario and Canada.
            </p>
          </div>

          {/* 6-Photo Masonry Grid with Floating Location Badges & Captions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Photo 1: Healing Circles */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Udada Healing Circles & Mental Wellness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold">
                  Niagara Falls & St. Catharines
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  Udada Sisterhood Retreats
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Culturally safe emotional wellness retreats where Black young women connect, heal, and build lifelong sisterhood bonds.
                </p>
              </div>
            </div>

            {/* Photo 2: Brock U Trailblazers Award */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/live_site/intern_nappy.jpg"
                  alt="Brock University Trailblazers Award"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5B3396] text-[#FDF289] text-[11px] font-bold">
                  Brock University Campus
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  Future Black Trailblazers Award
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Direct $500 academic scholarships and executive mentorship pairings awarded annually to incoming Black scholars.
                </p>
              </div>
            </div>

            {/* Photo 3: Financial Wealth Workshops */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/live_site/pillar_financial.jpg"
                  alt="Ujamaa Wealth Building Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold">
                  Downtown St. Catharines
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  Sovereign Capital & Wealth Clinics
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Hands-on credit building, student budgeting, free tax preparation clinics, and emergency youth micro-grants.
                </p>
              </div>
            </div>

            {/* Photo 4: Youth Programs & Leadership */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/live_site/intern_bestbe.jpg"
                  alt="Canada Summer Jobs Leadership Placement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold">
                  Paid CSJ Placements
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  Youth Fellows & Leadership Tracks
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Real workforce integration through paid community outreach, public speaking masterclasses, and executive sponsorship.
                </p>
              </div>
            </div>

            {/* Photo 5: Technology & STEM Innovation */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/downloaded/about_32.jpg"
                  alt="STEM & Digital Technology Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-700 text-white text-[11px] font-bold">
                  Research & STEM Hub
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  STEM Excellence & Coding Labs
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Empowering young Black women to lead in technology, data science, and feminist policy research across Canada.
                </p>
              </div>
            </div>

            {/* Photo 6: Radical Belonging Fellowship */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#EAD5D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/live_site/hero_darina.jpg"
                  alt="National Black Youth Wellness Conference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold">
                  National Reach
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-quando text-lg text-slate-900 font-normal">
                  Radical Belonging & Sisterhood
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Connecting over 500+ youth across secondary schools and universities through collective care and joy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. GOOGLE REVIEWS SECTION (Matching Screenshot 9) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header with Official Google Reviews Brand Styling */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#EAD5D5] pb-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-bold text-3xl sm:text-4xl tracking-tight text-slate-900 font-sans">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-2xl sm:text-3xl font-light text-slate-700">Reviews</span>
                <div className="flex text-amber-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-light">
                Verified testimonials from Brock University fellows, interns, and community participants
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://futureblackfemale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#873F50] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <span>View all Google reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3 Review Cards Side-by-Side (Matching Google Reviews Screenshot 9) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Review 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Samantha Adeleke</h4>
                    <p className="text-xs text-slate-400 font-medium">4 months ago</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  "Future Black Female provided me with a culturally safe space where I didn't have to explain my background. Through the Brock University partnership and the Udada sessions, I received mentorship that directly propelled my career launch."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D68D82] shrink-0">
                  <img
                    src="/images/live_site/intern_nappy.jpg"
                    alt="Samantha Adeleke"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Brock University Intern</span>
                  <span className="text-[11px] text-slate-500 font-light">Community Outreach Fellow</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Nia Campbell</h4>
                    <p className="text-xs text-slate-400 font-medium">4 months ago</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  "Having the opportunity to work alongside bright and inspiring Black women has been a major thrill for me. This is an internship and mentorship community I will forever be grateful for. The mental health support alone changed my student life."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D68D82] shrink-0">
                  <img
                    src="/images/live_site/intern_bestbe.jpg"
                    alt="Nia Campbell"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Youth Programs Fellow</span>
                  <span className="text-[11px] text-slate-500 font-light">Canada Summer Jobs Recipient</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Amara Diallo</h4>
                    <p className="text-xs text-slate-400 font-medium">5 months ago</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  "The inspiration and drive from Dr. Tapo and these women to impact the lives of other Black women and girls has served as reassurance that indeed a bright future lies ahead for all of us. The book club and therapy bursary gave me my voice back."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D68D82] shrink-0">
                  <img
                    src="/images/live_site/about_two_women.jpg"
                    alt="Amara Diallo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Book Club Member</span>
                  <span className="text-[11px] text-slate-500 font-light">Niagara College Participant</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pull-Quote Callout */}
          <div className="bg-[#5B3396] text-white p-8 sm:p-14 rounded-3xl shadow-xl text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
            <Quote className="w-12 h-12 text-[#FDF289]/30 mx-auto" />
            <blockquote className="font-quando font-normal text-xl sm:text-2xl lg:text-[28px] text-[#FDF289] leading-relaxed max-w-2xl mx-auto">
              "We ensure any work we do, any programs we run, and any resources and time spent are culturally relevant and responsive to the Black girls and young women we serve."
            </blockquote>
            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. THE ICONIC BOOK CLUB FEATURE BANNER: MELANIN & MANUSCRIPTS (Matching Screenshot 13) */}
      <section className="py-16 sm:py-20 bg-[#FDF289] border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#FDF289] border border-amber-400 shadow-md flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-4 max-w-2xl text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-950 text-[#FDF289] text-xs font-bold uppercase tracking-widest font-mono">
                LITERARY SANCTUARY • AGES 16–22
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-[44px] font-normal text-slate-950 leading-tight">
                Book Club: Melanin & Manuscripts
              </h2>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-light">
                A sanctuary for Black women to connect, reflect, and find community through books, creative writing, and culturally affirming discussions. High school & post-secondary cohorts running year-round.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onNavigate('programs')}
                className="px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#FDF289]" />
                <span>READ WITH US</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. MEDIA COVERAGE & THOUGHT LEADERSHIP (Matching Screenshot 12) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAD5D5] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
                PRESS & NATIONAL RECOGNITION
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight">
                Media Coverage & Thought Leadership
              </h2>
            </div>
            <button
              onClick={() => onNavigate('research')}
              className="text-xs font-bold text-[#873F50] hover:underline uppercase tracking-wider inline-flex items-center gap-1 shrink-0"
            >
              <span>View All Media Dossiers</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Media Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {MEDIA_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] font-bold text-xs uppercase tracking-wider">
                      {feat.outlet}
                    </span>
                    <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-[#873F50] transition-colors" />
                  </div>

                  <h3 className="font-quando font-normal text-lg sm:text-xl text-slate-900 group-hover:text-[#873F50] transition-colors leading-snug">
                    {feat.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {feat.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={feat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#873F50] hover:text-[#6e3140] uppercase tracking-wider inline-flex items-center gap-1.5"
                  >
                    <span>Read Press Coverage</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. "THANK YOU FOR OUR FOUNDER AND PARTNERS" (Matching Screenshot 4 & 6) */}
      <section className="py-20 sm:py-24 bg-white text-center border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Exact Live Site Title from Screenshot 4 */}
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-quando text-3xl sm:text-4xl text-slate-950 font-normal">
              Thank you for our founder and partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              Grateful for the foundational support of institutional benefactors empowering Niagara Region youth
            </p>
          </div>

          {/* Three Partner Logos from Screenshot 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center justify-items-center max-w-4xl mx-auto py-4">
            
            {/* 1. Ontario Trillium Foundation */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center text-center space-y-2 w-full max-w-[260px] h-36">
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
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center text-center space-y-1 w-full max-w-[260px] h-36">
              <div className="font-bold text-lg text-[#00838F] tracking-wider uppercase border-b-2 border-[#00838F] pb-1 w-full">
                DOWNTOWN
              </div>
              <div className="text-[11px] font-bold text-slate-700 tracking-widest uppercase">
                ST. CATHARINES
              </div>
            </div>

          </div>

          {/* Exact Live Site Purple Button from Screenshot 4 */}
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 rounded-full bg-[#7046B3] hover:bg-[#5e379b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              BECOME A SPONSOR
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

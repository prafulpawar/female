import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Heart, BookOpen, Quote, Star, Award, ShieldCheck, CheckCircle2, Users, Newspaper, ExternalLink } from 'lucide-react';
import { LIVE_PILLARS, ENGAGEMENT_PILLARS, FUNDERS_DATA, INTERN_TESTIMONIALS, ORG_DATA, MEDIA_FEATURES } from '../../data/fbfData';

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
      title: 'Solution-Focused Strategies',
      description: 'Developing and initiating targeted, culturally relevant, and rights-based programs co-designed with Black girls and young women.',
      badge: 'Community Research',
      color: 'bg-[#873F50]',
      lightBg: 'bg-[#F7E8E8]'
    },
    {
      step: '02',
      action: 'CONNECT & EQUIP',
      title: 'Establishing a Network for Action',
      description: 'Connecting youth with licensed Black therapists, academic tutors, university deans, and senior corporate executives.',
      badge: 'Sisterhood Circles',
      color: 'bg-[#D68D82]',
      lightBg: 'bg-[#FDF0ED]'
    },
    {
      step: '03',
      action: 'SUSTAIN & ADVANCE',
      title: 'Ongoing Community Support',
      description: 'Providing sustainable institutional backing, emergency micro-grants, and career acceleration to break systemic barriers.',
      badge: 'Lifelong Belonging',
      color: 'bg-[#B45309]',
      lightBg: 'bg-amber-50'
    }
  ];

  return (
    <div id="t3-whatwedo" className="space-y-0 text-[#34252A] font-sans">
      
      {/* 1. "WHY FUTURE BLACK FEMALE?" — 8-CARD CREDIBILITY GRID (Inspired by Screenshot 7) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
              PROVEN COMMUNITY TRACK RECORD
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34252A] tracking-tight">
              Why Future Black Female?
            </h2>
            <p className="text-base text-[#34252A]/80 font-light leading-relaxed">
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
                    <h3 className="font-bold text-sm sm:text-base text-[#34252A] mt-1">
                      {item.label}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#34252A]/70 font-light leading-relaxed border-t border-[#F7E8E8] pt-3">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. THE THREE PILLARS OF TRANSFORMATION (Editorial Sisterhood Bento) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
              <Sparkles className="w-3 h-3 text-[#D68D82]" />
              <span>CORE CARE FRAMEWORKS</span>
            </div>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#34252A] leading-tight">
              Opportunities that create lasting change.
            </h2>
            <p className="text-base text-[#34252A]/80 font-light leading-relaxed">
              FBF’s Wellbeing Development Strategy addresses systemic disparities through three deeply interconnected areas during adolescence and early adulthood (ages 16–22).
            </p>
          </div>

          {/* 3 Editorial Pillars Spread */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Mental Health (Deep Burgundy) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="rounded-3xl bg-[#873F50] text-[#FFF9F2] p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-white/20 text-[#D9B879] text-xs font-bold uppercase tracking-wider font-mono inline-block">
                  PRO-BLACK MENTAL HEALTH
                </span>
                <h3 className="font-quando font-normal text-2xl sm:text-3xl leading-snug">
                  Culturally Grounded Emotional Wellbeing & Therapy.
                </h3>
                <p className="text-[#FFF9F2]/85 text-xs sm:text-sm leading-relaxed font-light">
                  Direct access to licensed Black psychologists and community circles through our Udada sisterhood initiative. Over 1,750 therapy sessions subsidized at zero cost.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-[#D9B879] font-semibold">
                  Free Individual & Group Care
                </span>
                <span className="w-9 h-9 rounded-full bg-[#D9B879] text-[#34252A] flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Pillar 2: Financial Wellbeing (Warm Terracotta) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="rounded-3xl bg-[#D68D82] text-[#FFF9F2] p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-black/15 text-[#FFF9F2] text-xs font-bold uppercase tracking-wider font-mono inline-block">
                  FINANCIAL WELLBEING
                </span>
                <h3 className="font-quando font-normal text-2xl sm:text-3xl leading-snug">
                  Sovereign Capital & Economic Mobility.
                </h3>
                <p className="text-[#FFF9F2]/90 text-xs sm:text-sm leading-relaxed font-light">
                  Closing generational wealth gaps through direct financial coaching, savings matching strategies, student budgeting, and youth micro-grants.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-[#FFF9F2] font-semibold">
                  Budgeting & Tax Clinics
                </span>
                <span className="w-9 h-9 rounded-full bg-white text-[#D68D82] flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Pillar 3: Career & Academic Strategies (Soft Blush with Deep Wine Accents) */}
            <div 
              onClick={() => onNavigate('programs')}
              className="rounded-3xl bg-[#F7E8E8] border border-[#EAD5D5] text-[#34252A] p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-white text-[#873F50] text-xs font-bold uppercase tracking-wider font-mono inline-block border border-[#D68D82]/30">
                  CAREER & EDUCATION
                </span>
                <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#34252A] leading-snug">
                  Institutional Access & Academic Bursaries.
                </h3>
                <p className="text-[#34252A]/80 text-xs sm:text-sm leading-relaxed font-light">
                  One-on-one mentorship with Black women industry leaders, paired with university partnerships including the annual $500 Brock U Trailblazers Award.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAD5D5] flex items-center justify-between">
                <span className="text-xs text-[#873F50] font-semibold">
                  CSJ Placements & Mentorship
                </span>
                <span className="w-9 h-9 rounded-full bg-[#873F50] text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CONNECTED STEP-BY-STEP PROCESS FLOW (Inspired by Share Samadhan Screenshot 2) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
              THEORY OF CHANGE IN ACTION
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34252A] tracking-tight">
              Our 3-Stage Community Engagement Model
            </h2>
            <p className="text-base text-[#34252A]/80 font-light leading-relaxed">
              To achieve our vision of a community-empowered Black female population, FBF relies on three interconnected stages of engagement:
            </p>
          </div>

          {/* Connected Process Flow with Step Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs relative flex flex-col justify-between space-y-6 text-left group hover:shadow-xl transition-all"
              >
                {/* Step Marker Badge */}
                <div className="flex items-center justify-between border-b border-[#F7E8E8] pb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center font-quando font-bold text-xs shadow-xs`}>
                      {step.step}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#873F50]">
                      {step.action}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F7E8E8] text-[#873F50] font-semibold">
                    {step.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-quando font-normal text-xl text-[#34252A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#34252A]/80 leading-relaxed font-light">
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

      {/* 4. THE ICONIC BOOK CLUB FEATURE BANNER: MELANIN & MANUSCRIPTS (Inspired by Screenshot 13) */}
      <section className="py-16 sm:py-20 bg-[#FDF289]/40 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#FDF289] border border-amber-300/80 shadow-md flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-4 max-w-2xl text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-900 text-[#FDF289] text-xs font-bold uppercase tracking-widest font-mono">
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

      {/* 5. MEDIA COVERAGE & THOUGHT LEADERSHIP (Inspired by Screenshot 12) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAD5D5] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#873F50] block font-mono">
                PRESS & NATIONAL RECOGNITION
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34252A] tracking-tight">
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

                  <h3 className="font-quando font-normal text-lg sm:text-xl text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                    {feat.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#34252A]/75 leading-relaxed font-light">
                    {feat.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F7E8E8]">
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

      {/* 6. GOOGLE REVIEWS & INTERN TESTIMONIALS (Inspired by Screenshots 3 & 8) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#34252A] tracking-tight">
              What Our Community Has to Say
            </h2>
            <p className="text-sm text-[#34252A]/75 font-light">
              Voices of youth fellows, interns, and academic mentees who found community, sisterhood, and leadership through FBF.
            </p>
          </div>

          {/* 3 Review Cards Side-by-Side (Inspired by Google Reviews Screenshot 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {INTERN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#34252A] text-base">{t.name}</h4>
                      <p className="text-xs text-[#873F50] font-medium">{t.role} • {t.university}</p>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#34252A]/85 leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#F7E8E8]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D68D82] shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">Verified Community Fellow</span>
                    <span className="text-[11px] text-slate-500 font-light">Brock University / Niagara College</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pull-Quote Callout (Inspired by Screenshot 5) */}
          <div className="bg-[#873F50] text-[#FFF9F2] p-8 sm:p-14 rounded-3xl shadow-xl text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
            <Quote className="w-12 h-12 text-[#D9B879]/30 mx-auto" />
            <blockquote className="font-quando font-normal text-xl sm:text-2xl lg:text-[28px] text-[#D9B879] leading-relaxed max-w-2xl mx-auto">
              "We ensure any work we do, any programs we run, and any resources and time spent are culturally relevant and responsive to the Black girls and young women we serve."
            </blockquote>
            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-full bg-[#D9B879] hover:bg-[#c9a764] text-[#34252A] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. OUR FUNDERS & COMMUNITY PATRONS */}
      <section className="py-16 bg-[#FFF9F2] border-b border-[#F7E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-quando text-2xl sm:text-3xl text-[#34252A]">
              Our Funders & Community Patrons
            </h2>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              We extend gratitude to the national foundations and federal agencies enabling our culturally safe care frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center bg-white p-8 rounded-3xl border border-[#EAD5D5] shadow-2xs">
            {FUNDERS_DATA.partners.map((funder) => (
              <a
                key={funder.name}
                href={funder.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
              >
                <img
                  src={funder.logo}
                  alt={funder.name}
                  className="max-h-14 w-auto object-contain"
                />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 8. COMMUNITY PARTNERS & SPONSOR STRIP */}
      <section className="py-16 bg-[#FFFDF9] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-quando text-2xl sm:text-3xl text-[#34252A]">
            Thank you for our founder and partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto py-2">
            <img
              src="/images/live_site/partner_otf.png"
              alt="Ontario Trillium Foundation"
              className="max-h-16 w-auto object-contain"
            />
            <img
              src="/images/live_site/partner_brock.png"
              alt="Brock LINC"
              className="max-h-14 w-auto object-contain"
            />
            <img
              src="/images/live_site/partner_downtown.png"
              alt="Downtown St. Catharines"
              className="max-h-14 w-auto object-contain"
            />
          </div>

          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              BECOME A SPONSOR
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

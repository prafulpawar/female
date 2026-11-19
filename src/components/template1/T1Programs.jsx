import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../../data/fbfData';

export default function T1Programs() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Exact Program Catalog Matching Screenshots 11-15
  const livePrograms = [
    {
      id: "gbv-ipv",
      title: "Gender-Based Violence & Intimate Partner Violence Program",
      tags: ["All Genders Programs", "Mental Health"],
      description: "At Future Black Female, we are dedicated to fostering a more inclusive and equitable society. As part of our ongoing commitment, we are excited to introduce our Black Youth Against Gender-Based Violence program. This program addresses the pressing issue of gender-based violence (GBV) and Intimate Partner Violence (IPV) within the Black communities, particularly among Black youth.",
      image: "/images/downloaded/programs_75.jpg",
      link: "https://www.futureblackfemale.com/our-programs/gender-based-violence-support"
    },
    {
      id: "gbv-courses",
      title: "GBV/IPV COURSES",
      tags: ["All Genders Programs", "Mental Health"],
      description: "The GBV Training Handbook is a comprehensive guide designed for anyone looking to conduct impactful and meaningful gender-based violence (GBV) training, particularly within Black communities. This resource is tailored for trainers, community leaders, educators, youth facilitators, and organizations committed to addressing GBV and fostering safe, inclusive spaces.",
      image: "/images/downloaded/programs_77.jpg",
      link: "https://www.futureblackfemale.com/gbv-ipv-courses"
    },
    {
      id: "empower-youth",
      title: "Empower Youth: Building Safer Communities",
      tags: ["All Genders Programs", "Mental Health", "Arts-Based"],
      description: "Are you ready to unlock your potential, make empowered choices, and navigate life's challenges with confidence? Introducing the Empower Youth Program, a dynamic initiative designed specifically for All Black youth aged 16–22 years old. Supported by the Building Safer Communities Grant Program, this program is your gateway to growth, resilience, and cultural celebration.",
      image: "/images/downloaded/programs_78.jpg",
      link: "https://www.futureblackfemale.com/our-programs/empower-youth-program"
    },
    {
      id: "diverse-voices",
      title: "Diverse Voices Same Message",
      tags: ["All Genders Programs", "Mental Health"],
      description: "The 'Diverse Voices Same Message' Project fosters inclusivity by amplifying diverse experiences through storytelling, workshops, and cultural exchanges. Engaging 200+ Indigenous and Black youth in the Niagara Region, it promotes cultural awareness, combats racism, and builds community capacity through collaboration with local organizations.",
      image: "/images/downloaded/programs_81.jpg",
      link: "https://www.futureblackfemale.com/our-programs/copy-2-of-black-women-s-economic-securi"
    },
    {
      id: "campus-dropin",
      title: "Campus Drop-in Sessions",
      tags: ["All Genders Programs", "Mental Health"],
      description: "Future Black Female is proud to introduce our impactful Campus Drop-In Sessions, a unique initiative designed to empower and uplift Black girls within the Niagara region both at a high school and university level. With a focus on pro-Black mental health, financial literacy, and education and career strategies, our program aims to create a nurturing environment where girls and young Black women can cultivate their skills and flourish.",
      image: "/images/downloaded/programs_82.jpg",
      link: "https://www.futureblackfemale.com/our-programs/campus-drop-in-sessions"
    },
    {
      id: "soul-canvas",
      title: "Soul Canvas Program",
      tags: ["All Genders Programs", "Arts-Based"],
      description: "Soul Canvas provides creative, expressive arts-based wellness spaces for Black youth to channel emotion, celebrate identity, and build communal resilience through painting, spoken word, and creative reflection.",
      image: "/images/downloaded/programs_80.jpg",
      link: "https://www.futureblackfemale.com/our-programs/soul-canvas"
    },
    {
      id: "mental-health-subsidy",
      title: "Pro-Black Mental Health Services & Subsidy (Udada Sisterhood)",
      tags: ["Mental Health", "Sisterhood Care"],
      description: "Subsidizing 100% of therapy costs for Black youth (ages 16–22), pairing participants with licensed pro-Black clinicians, and hosting monthly Udada sisterhood circles for collective healing and validation.",
      image: "/images/live_site/pillar_mental_health.jpg",
      link: "https://www.futureblackfemale.com/mental-health"
    },
    {
      id: "financial-wellbeing",
      title: "Financial Wellbeing & Literacy (Ujamaa Project)",
      tags: ["Financial Wellbeing", "Economic Sovereignty"],
      description: "Equipping young Black women with credit mastery, budgeting acumen, business capitalization, and incubator pathways to dissolve generational economic disparity.",
      image: "/images/live_site/pillar_financial.jpg",
      link: "https://www.futureblackfemale.com/financial-wellbeing"
    },
    {
      id: "career-education",
      title: "Career & Education Mentorship Hub",
      tags: ["Career & Education", "Mentorship"],
      description: "High-impact paid internships, university transition coaching, and executive 1-on-1 mentorship connecting Black youth with industry leaders across Canada.",
      image: "/images/live_site/pillar_career.jpg",
      link: "https://www.futureblackfemale.com/career-strategies"
    },
    {
      id: "melanin-manuscripts",
      title: "Melanin & Manuscripts Book & Writing Club",
      tags: ["Arts-Based", "Sisterhood Care"],
      description: "A cultural and literary space elevating Black female authors, intellectual discourse, and creative writing workshops for young women reclaiming their sovereign narrative.",
      image: "/images/downloaded/programs_73.jpg",
      link: "https://www.futureblackfemale.com/melanin-manuscripts"
    },
    {
      id: "youth-advisory",
      title: "Youth Advisory Council (YAC)",
      tags: ["Youth Empowerment", "Civic Action"],
      description: "Autonomous youth council leading strategic community inquiries, informing board decisions, and advocating for Black youth across provincial and federal levels.",
      image: "/images/downloaded/programs_71.jpg",
      link: "https://www.futureblackfemale.com/yac"
    },
    {
      id: "high-school-prep",
      title: "High School Prep & Academic Tutoring",
      tags: ["Career & Education", "Youth Empowerment"],
      description: "Culturally responsive tutoring in STEM, humanities, and post-secondary application navigation ensuring academic excellence and seamless transitions.",
      image: "/images/downloaded/programs_70.jpg",
      link: "https://www.futureblackfemale.com/prep"
    }
  ];

  const filtered = selectedFilter === 'All'
    ? livePrograms
    : livePrograms.filter(p => p.tags.some(t => t.toLowerCase().includes(selectedFilter.toLowerCase())));

  return (
    <div id="programs-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">
      
      {/* 1. EXACT SCREENSHOT 11: Gradient Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#6949D7] to-[#4378F7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-white">
            Our Programs
          </h1>
          
          <p className="text-white/95 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
            FBF’s Wellbeing Development Strategy is built on three interconnected pillars: <strong>Mental Wellbeing</strong>, delivered through our Pro-Black Mental Health Services; <strong>Financial Wellbeing</strong>, supported by our Financial Literacy programs; and <strong>Career Wellbeing</strong>, fostered through our Education and Career Strategies programs. We recognize that these areas are deeply intertwined during adolescence and early adulthood. By addressing all three, we empower Black female youth to establish a strong foundation for their futures, significantly enhancing their life outcomes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['All', 'Mental Health', 'All Genders Programs', 'Arts-Based', 'Career & Education', 'Financial Wellbeing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#FDF289] text-[#1B2828] shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXACT SCREENSHOTS 11-15: Horizontal Split Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {filtered.map((prog) => (
            <div key={prog.id} className="space-y-3">
              
              {/* Category Pill Badges Above Card */}
              <div className="flex items-center gap-1.5 pl-2">
                {prog.tags.map((tag, tIdx) => {
                  const isGradient = tIdx > 0;
                  return (
                    <span
                      key={tag}
                      className={`px-3.5 py-1 text-[11px] font-bold rounded-full shadow-2xs ${
                        isGradient
                          ? 'bg-gradient-to-r from-purple-500 to-amber-500 text-white'
                          : 'bg-[#8558CE] text-white'
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Exact Horizontal Split Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-white">
                
                {/* Left Panel: Royal Purple (#8558CE) */}
                <div className="lg:col-span-7 bg-[#8558CE] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#FDF289] leading-snug">
                      {prog.title}
                    </h3>
                    
                    <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-light">
                      {prog.description}
                    </p>
                  </div>

                  {/* Exact Pale Butter Yellow Pill Button: LEARN MORE > */}
                  <div className="pt-2">
                    <a
                      href={prog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-[#1B2828] font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-1 hover:scale-105"
                    >
                      <span>LEARN MORE &gt;</span>
                    </a>
                  </div>
                </div>

                {/* Right Panel: Clean Photo Fill */}
                <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto min-h-[260px] bg-stone-900 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                  />
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

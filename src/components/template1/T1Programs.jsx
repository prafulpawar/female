import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../../data/fbfData';

export default function T1Programs() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
      title: "GBV/IPV Courses & Training Handbook",
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
      description: "Subsidizing 100% of therapy costs for Black youth (ages 16–22), pairing participants with licensed pro-Black clinicians, and hosting monthly Udada sisterhood circles for collective healing and validation. Over 1,750 therapy sessions delivered at zero cost.",
      image: "/images/live_site/pillar_mental_health.jpg",
      link: "https://www.futureblackfemale.com/mental-health"
    },
    {
      id: "financial-wellbeing",
      title: "Financial Wellbeing & Literacy (Ujamaa Project)",
      tags: ["Financial Wellbeing", "Economic Sovereignty"],
      description: "Equipping young Black women with credit mastery, budgeting acumen, business capitalization, and incubator pathways to dissolve generational economic disparity across Canada.",
      image: "/images/live_site/pillar_financial.jpg",
      link: "https://www.futureblackfemale.com/financial-wellbeing"
    },
    {
      id: "career-education",
      title: "Career & Education Mentorship Hub",
      tags: ["Career & Education", "Mentorship"],
      description: "High-impact paid internships, university transition coaching, and executive 1-on-1 mentorship connecting Black youth with industry leaders across Ontario.",
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
      description: "Culturally responsive tutoring in STEM, humanities, and post-secondary application navigation ensuring academic excellence and seamless university transitions.",
      image: "/images/downloaded/programs_70.jpg",
      link: "https://www.futureblackfemale.com/prep"
    }
  ];

  const filtered = selectedFilter === 'All'
    ? livePrograms
    : livePrograms.filter(p => p.tags.some(t => t.toLowerCase().includes(selectedFilter.toLowerCase())));

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPrograms = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const el = document.getElementById('programs-catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="programs-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">
      
      {/* 1. Header Hero Banner (Royal Electric Indigo Background) */}
      <section className="py-16 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
            Holistic Wellbeing Development Strategy
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#FDF289]">
            Our Programs & Initiatives
          </h1>
          
          <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl font-light">
            FBF’s Wellbeing Development Strategy is built on three interconnected pillars: <strong>Mental Wellbeing</strong>, delivered through our Pro-Black Mental Health Services; <strong>Financial Wellbeing</strong>, supported by our Financial Literacy programs; and <strong>Career Wellbeing</strong>, fostered through our Education and Career Strategies programs. By addressing all three, we empower Black female youth (ages 16–22) to establish a strong foundation for their futures.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['All', 'Mental Health', 'All Genders Programs', 'Arts-Based', 'Career & Education', 'Financial Wellbeing'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#FDF289] text-slate-950 font-bold shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Program Cards with Pagination */}
      <section id="programs-catalog" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-4 text-xs text-stone-600">
            <span className="font-semibold">
              Showing <strong className="text-[#1B2828]">{startIndex + 1}–{Math.min(startIndex + itemsPerPage, filtered.length)}</strong> of <strong className="text-[#1B2828]">{filtered.length}</strong> Initiatives {selectedFilter !== 'All' && `(Filter: ${selectedFilter})`}
            </span>
            <span className="text-stone-400">
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>

          {/* Cards Grid */}
          <div className="space-y-10">
            {displayedPrograms.map((prog) => (
              <div 
                key={prog.id} 
                className="bg-white rounded-3xl border-2 border-[#1B2828]/10 overflow-hidden shadow-xs hover:border-[#D48B28] hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-900 group">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/live_site/pillar_mental_health.jpg';
                      }}
                    />
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {prog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FAF8F5] border border-[#E8DFC8] text-[#1B2828]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#1B2828] leading-tight">
                        {prog.title}
                      </h3>

                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                        {prog.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E8DFC8] flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs text-stone-500 font-semibold">
                        Ages 16–22 • Free & Subsidized
                      </span>

                      <a
                        href={prog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-[#5B60E6] hover:bg-[#4b50d0] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Learn More & Register</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#E8DFC8]">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-[#E8DFC8] bg-white text-xs font-bold uppercase tracking-wider text-[#1B2828] hover:bg-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#D48B28] text-white shadow-md'
                          : 'bg-white border border-[#E8DFC8] text-stone-700 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-[#E8DFC8] bg-white text-xs font-bold uppercase tracking-wider text-[#1B2828] hover:bg-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

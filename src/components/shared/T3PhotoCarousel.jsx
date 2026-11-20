import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function T3PhotoCarousel({ onNavigate }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);
  const scrollContainerRef = useRef(null);

  const photoGallery = [
    {
      id: 1,
      image: '/images/live_site/about_two_women.jpg',
      title: 'Udada Healing Circles & Retreats',
      category: 'Sisterhood & Wellness',
      location: 'Niagara Falls & St. Catharines',
      caption: 'Culturally safe emotional wellness retreats where Black young women connect, heal, and unpack trauma without judgment.'
    },
    {
      id: 2,
      image: '/images/live_site/intern_nappy.jpg',
      title: 'Future Black Trailblazers Award',
      category: 'Academic Awards',
      location: 'Brock University Campus',
      caption: 'Direct $500 academic scholarships and executive mentorship pairings awarded annually to incoming Black scholars.'
    },
    {
      id: 3,
      image: '/images/live_site/pillar_financial.jpg',
      title: 'Sovereign Capital & Wealth Clinics',
      category: 'Wealth & Enterprise',
      location: 'Downtown St. Catharines Hub',
      caption: 'Hands-on credit building, student budgeting, free tax preparation clinics, and emergency youth micro-grants.'
    },
    {
      id: 4,
      image: '/images/live_site/intern_bestbe.jpg',
      title: 'Youth Leadership & CSJ Fellowships',
      category: 'Leadership & STEM',
      location: 'Niagara Region & Ontario',
      caption: 'Real workforce integration through paid community outreach, public speaking masterclasses, and executive sponsorship.'
    },
    {
      id: 5,
      image: '/images/downloaded/about_32.jpg',
      title: 'STEM, Coding & Digital Innovation',
      category: 'Leadership & STEM',
      location: 'Brock University Computer Labs',
      caption: 'Empowering young Black women to lead in technology, data science, and feminist policy research across Canada.'
    },
    {
      id: 6,
      image: '/images/live_site/hero_darina.jpg',
      title: 'Radical Belonging National Conference',
      category: 'Sisterhood & Wellness',
      location: 'Ottawa & Niagara Regions',
      caption: 'Connecting over 500+ youth across secondary schools and universities through collective care and joy.'
    },
    {
      id: 7,
      image: '/images/live_site/pillar_mental_health.jpg',
      title: 'Pro-Black Psychological Care',
      category: 'Sisterhood & Wellness',
      location: 'Clinical Consulting Offices',
      caption: 'Direct access to licensed Black psychologists and specialized group healing circles with zero financial barrier.'
    },
    {
      id: 8,
      image: '/images/live_site/pillar_career.jpg',
      title: 'Executive Mentorship Pairings',
      category: 'Leadership & STEM',
      location: 'Toronto & St. Catharines',
      caption: 'One-on-one professional coaching with senior Black women corporate executives and government policy leaders.'
    },
    {
      id: 9,
      image: '/images/downloaded/about_33.jpg',
      title: 'Community Feasts & Intergenerational Solidarity',
      category: 'Sisterhood & Wellness',
      location: 'Niagara Community Centre',
      caption: 'Honoring ancestral wisdom, sharing culturally affirming meals, and strengthening grassroots community bonds.'
    },
    {
      id: 10,
      image: '/images/downloaded/about_29.jpg',
      title: 'Campus Drop-In Check-In Hubs',
      category: 'Academic Awards',
      location: 'Secondary & Post-Secondary Campuses',
      caption: 'On-site mental wellness check-ins, study groups, and sisterhood lounges right where students live and learn.'
    },
    {
      id: 11,
      image: '/images/downloaded/programs_75.jpg',
      title: 'Book Club: Melanin & Manuscripts',
      category: 'Sisterhood & Wellness',
      location: 'Community Reading Sanctuaries',
      caption: 'A sanctuary for Black women to connect, reflect, and find community through books, poetry, and creative writing.'
    },
    {
      id: 12,
      image: '/images/downloaded/programs_78.jpg',
      title: 'Black Women Founders Incubator',
      category: 'Wealth & Enterprise',
      location: 'Brock LINC & Enterprise Centre',
      caption: 'Supporting 46+ Black women founders through seed micro-grants, physical incubator workspace, and legal consultation.'
    }
  ];

  const tags = ['All', 'Sisterhood & Wellness', 'Academic Awards', 'Wealth & Enterprise', 'Leadership & STEM'];

  const filteredPhotos = selectedTag === 'All'
    ? photoGallery
    : photoGallery.filter((p) => p.category === selectedTag);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFF9F2] border-b border-[#EAD5D5] font-sans relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAD5D5] pb-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-[#873F50] font-semibold">
              Community Sisterhood Moments
            </p>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
              Life at Future Black Female
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Explore authentic snapshots of clinical retreats, university award ceremonies, financial literacy cohorts, and sisterhood circles across Ontario and Canada.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-[#EAD5D5] text-[#873F50] hover:bg-[#873F50] hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              title="Previous photos"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#873F50] text-[#FFF9F2] hover:bg-[#6e3140] transition-all flex items-center justify-center shadow-md cursor-pointer active:scale-95"
              title="Next photos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#873F50] text-white shadow-xs'
                  : 'bg-white border border-[#EAD5D5] text-slate-700 hover:border-[#873F50]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Draggable & Scrollable Multi-Photo Carousel Strip */}
        <div 
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth"
        >
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="w-[320px] sm:w-[360px] shrink-0 bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo Header */}
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#FDF289]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#FDF289] text-slate-950 font-bold text-[10px] uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-quando font-normal text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-[#873F50] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#873F50] font-bold mt-2">
                <span>View Sisterhood Moment</span>
                <span className="w-8 h-8 rounded-full bg-[#F7E8E8] text-[#873F50] flex items-center justify-center group-hover:bg-[#873F50] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox Preview for Selected Photo */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/20 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-3 text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#873F50]" />
                  <span>{activePhoto.location}</span>
                </span>
              </div>
              <h3 className="font-quando font-normal text-2xl text-slate-900">
                {activePhoto.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

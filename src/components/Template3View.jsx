import React, { useState } from 'react';
import T3Header from './template3/T3Header';
import T3Hero from './template3/T3Hero';
import T3WhatWeDo from './template3/T3WhatWeDo';
import T3About from './template3/T3About';
import T3ProgramsBento from './template3/T3ProgramsBento';
import T3Events from './template3/T3Events';
import T3Team from './template3/T3Team';
import T3Research from './template3/T3Research';
import T3Blog from './template3/T3Blog';
import T3Donate from './template3/T3Donate';
import T3Vacancies from './template3/T3Vacancies';
import T3Contact from './template3/T3Contact';
import T3Footer from './template3/T3Footer';

// Interactive Components
import Breadcrumbs from './shared/Breadcrumbs';
import CampaignProgressBar from './shared/CampaignProgressBar';
import MegaCarousel from './shared/MegaCarousel';
import Accordion from './shared/Accordion';
import { FAQ_DATA, PROGRAMS, ORG_DATA } from '../data/fbfData';

export default function Template3View({
  onOpenDonate,
  onSelectEvent,
  onApplyVacancy,
  onSelectPost,
  onOpenCommandPalette,
  initialPage = 'home'
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNavigate = (pageOrAnchor) => {
    let targetPage = pageOrAnchor;
    if (pageOrAnchor.includes('hero') || pageOrAnchor.includes('whatwedo')) targetPage = 'home';
    if (pageOrAnchor.includes('about')) targetPage = 'about';
    if (pageOrAnchor.includes('program')) targetPage = 'programs';
    if (pageOrAnchor.includes('event')) targetPage = 'events';
    if (pageOrAnchor.includes('team')) targetPage = 'team';
    if (pageOrAnchor.includes('research')) targetPage = 'research';
    if (pageOrAnchor.includes('blog')) targetPage = 'blog';
    if (pageOrAnchor.includes('donate')) targetPage = 'donate';
    if (pageOrAnchor.includes('vacanc') || pageOrAnchor.includes('career')) targetPage = 'vacancies';
    if (pageOrAnchor.includes('contact')) targetPage = 'contact';

    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#34252A] font-sans antialiased selection:bg-[#F7E8E8] selection:text-[#873F50] flex flex-col justify-between">
      
      {/* Header */}
      <T3Header 
        currentPage={currentPage}
        onOpenDonate={onOpenDonate} 
        onNavigate={handleNavigate} 
        onOpenCommandPalette={onOpenCommandPalette}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Breadcrumb path indicator */}
        {currentPage !== 'home' && (
          <div className="bg-[#F7E8E8]/40 border-b border-[#EAD5D5]">
            <Breadcrumbs currentPage={currentPage} onNavigate={handleNavigate} theme="burgundy" />
          </div>
        )}

        {/* 1. HOMEPAGE VIEW: Exact User Hero, What We Do, Funders & Interns */}
        {currentPage === 'home' && (
          <div className="animate-fade-in space-y-12 pb-16">
            <T3Hero onOpenDonate={onOpenDonate} onNavigate={handleNavigate} />

            {/* Campaign Progress Gauge */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CampaignProgressBar onOpenDonate={onOpenDonate} theme="burgundy" />
            </div>

            <T3WhatWeDo onNavigate={handleNavigate} />

            {/* Horizontal Mega Carousel for 12 Programs */}
            <section className="py-12 bg-[#F7E8E8]/30 border-y border-[#EAD5D5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MegaCarousel 
                  items={PROGRAMS} 
                  title="All 12 Holistic Programs"
                  subtitle="Explore mental wellbeing, economic independence, and leadership tracks designed for Black female youth."
                  theme="burgundy"
                />
              </div>
            </section>

            {/* Udada Sisterhood Community FAQ Accordion */}
            <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#873F50]">
                  Sisterhood & Common Questions
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#34252A]">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs sm:text-sm text-[#34252A]/70">
                  Everything you need to know about joining programs, attending retreats, and donor impact transparency.
                </p>
              </div>
              <Accordion items={FAQ_DATA} theme="burgundy" />
            </section>
          </div>
        )}

        {/* 2. ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <T3About onNavigate={handleNavigate} onApplyBoard={() => onApplyVacancy({ title: "Board of Directors Member", department: "Governance", type: "Volunteer" })} />
          </div>
        )}

        {/* 3. PROGRAMS BENTO PAGE */}
        {currentPage === 'programs' && (
          <div className="animate-fade-in">
            <T3ProgramsBento />
          </div>
        )}

        {/* 4. EVENTS CALENDAR PAGE */}
        {currentPage === 'events' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Gatherings & Sisters
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Community Events
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Upcoming summits and wellness retreats with circular ring pagination (first 5 then 5).
                </p>
              </div>
            </div>
            <T3Events onSelectEvent={onSelectEvent} />
          </div>
        )}

        {/* 5. TEAM PAGE */}
        {currentPage === 'team' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Sisterhood & Leadership
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Our Team & Fellows
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Meet the inspiring women leading change and advocating for Black youth across Canada.
                </p>
              </div>
            </div>
            <T3Team onNavigate={handleNavigate} />
          </div>
        )}

        {/* 6. RESEARCH HUB PAGE */}
        {currentPage === 'research' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Empirical Evidence
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Research Hub & Clinical Guides
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Downloadable clinical toolkits and national surveys mapping Black youth mental health in Canada.
                </p>
              </div>
            </div>
            <T3Research />
          </div>
        )}

        {/* 7. BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Stories & Reflections
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Community Blog
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Feminist perspectives, environmental justice, and essays on claiming our sovereign joy.
                </p>
              </div>
            </div>
            <T3Blog onSelectPost={onSelectPost} />
          </div>
        )}

        {/* 8. DONATE PAGE */}
        {currentPage === 'donate' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Support Our Mission
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Invest in Black Girls
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Charitable tax receipts (CRA #{ORG_DATA.charityNumber}) and 6 corporate sponsorship tiers.
                </p>
              </div>
            </div>
            <T3Donate onOpenDonate={onOpenDonate} />
          </div>
        )}

        {/* 9. VACANCIES PAGE */}
        {currentPage === 'vacancies' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Join Our Team
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Vacancies & Fellowships
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Paid internships, research fellowships, and board steward opportunities.
                </p>
              </div>
            </div>
            <T3Vacancies onApply={onApplyVacancy} />
          </div>
        )}

        {/* 10. CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <div className="bg-[#873F50] text-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#6e3140]">
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9B879]">
                  Get In Touch
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-black">
                  Contact Future Black Female
                </h1>
                <p className="text-[#FFF9F2]/80 text-sm sm:text-base max-w-3xl">
                  Headquartered in St. Catharines, Niagara Region. Serving Black girls across Canada.
                </p>
              </div>
            </div>
            <T3Contact />
          </div>
        )}

      </main>

      {/* Footer */}
      <T3Footer onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />

    </div>
  );
}

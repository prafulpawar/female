import React, { useState } from 'react';
import T1Header from './template1/T1Header';
import T1Hero from './template1/T1Hero';
import T1Pillars from './template1/T1Pillars';
import T1About from './template1/T1About';
import T1Programs from './template1/T1Programs';
import T1Events from './template1/T1Events';
import T1Team from './template1/T1Team';
import T1Research from './template1/T1Research';
import T1Blog from './template1/T1Blog';
import T1Donate from './template1/T1Donate';
import T1Vacancies from './template1/T1Vacancies';
import T1Contact from './template1/T1Contact';
import T1Footer from './template1/T1Footer';
import FBFLoginPage from './shared/FBFLoginPage';

// Interactive Components
import Breadcrumbs from './shared/Breadcrumbs';
import HeroSlider from './shared/HeroSlider';
import CampaignProgressBar from './shared/CampaignProgressBar';
import MegaCarousel from './shared/MegaCarousel';
import Accordion from './shared/Accordion';
import { FAQ_DATA, PROGRAMS, ORG_DATA } from '../data/fbfData';

export default function Template1View({
  onOpenDonate,
  onSelectEvent,
  onApplyVacancy,
  onSelectPost,
  onOpenCommandPalette,
  initialPage = 'home'
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [heroMode, setHeroMode] = useState('standard'); // 'standard' | 'carousel'

  const handleNavigate = (pageOrAnchor) => {
    let targetPage = pageOrAnchor;
    if (pageOrAnchor.includes('hero') || pageOrAnchor === 'pillars') targetPage = 'home';
    if (pageOrAnchor.includes('about')) targetPage = 'about';
    if (pageOrAnchor.includes('program')) targetPage = 'programs';
    if (pageOrAnchor.includes('event')) targetPage = 'events';
    if (pageOrAnchor.includes('team')) targetPage = 'team';
    if (pageOrAnchor.includes('research')) targetPage = 'research';
    if (pageOrAnchor.includes('blog')) targetPage = 'blog';
    if (pageOrAnchor.includes('donate') || pageOrAnchor.includes('build')) targetPage = 'donate';
    if (pageOrAnchor.includes('vacanc') || pageOrAnchor.includes('career')) targetPage = 'vacancies';
    if (pageOrAnchor.includes('contact')) targetPage = 'contact';
    if (pageOrAnchor.includes('login') || pageOrAnchor.includes('auth') || pageOrAnchor.includes('portal')) targetPage = 'login';

    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1B2828] font-dm antialiased selection:bg-amber-100 selection:text-stone-900 flex flex-col justify-between">
      
      {/* Real Live Header with Navigation & Dropdowns */}
      <T1Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenDonate={onOpenDonate} 
        onOpenCommandPalette={onOpenCommandPalette}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        
        {/* Breadcrumb Trail on all subpages */}
        {currentPage !== 'home' && (
          <div className="bg-white border-b border-stone-200">
            <Breadcrumbs currentPage={currentPage} onNavigate={handleNavigate} />
          </div>
        )}

        {/* 1. HOMEPAGE VIEW: The Authentic Live Homepage of futureblackfemale.com */}
        {currentPage === 'home' && (
          <div className="animate-fade-in space-y-12 pb-12">
            
            {/* Hero Section with Slider/Carousel Toggle Switch */}
            <div className="relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
                <div className="inline-flex items-center gap-1 p-1 bg-white border border-[#E8DFC8] rounded-xl text-xs font-semibold shadow-2xs">
                  <span className="text-stone-500 px-2 text-[11px] uppercase tracking-wider font-bold">Hero View:</span>
                  <button
                    onClick={() => setHeroMode('standard')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      heroMode === 'standard' ? 'bg-[#1B2828] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Authentic Split
                  </button>
                  <button
                    onClick={() => setHeroMode('carousel')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      heroMode === 'carousel' ? 'bg-[#1B2828] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Image Carousel (Auto)
                  </button>
                </div>
              </div>

              {heroMode === 'standard' ? (
                <T1Hero onOpenDonate={onOpenDonate} onNavigate={handleNavigate} />
              ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <HeroSlider onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />
                </div>
              )}
            </div>

            {/* Active Campaign Goal & Linear/Circular Progress Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CampaignProgressBar onOpenDonate={onOpenDonate} theme="warm" />
            </div>

            {/* Authentic Pillars, Methodology & Funders */}
            <T1Pillars onNavigate={handleNavigate} />

            {/* Horizontal Mega Carousel for 12 Programs */}
            <section className="py-12 bg-white border-y border-[#E8DFC8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MegaCarousel 
                  items={PROGRAMS} 
                  title="Explore All 12 Intersectional Programs" 
                  subtitle="Drag, swipe, or use arrows to discover our full programmatic portfolio"
                  onSelectItem={(prog) => handleNavigate('programs')}
                />
              </div>
            </section>

            {/* Interactive Accordion for Community FAQ */}
            <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                  Community Answers
                </span>
                <h3 className="text-2xl sm:text-3xl font-quando font-normal text-stone-900">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Key details on eligibility, pro-Black clinical services, and Canadian charitable receipting.
                </p>
              </div>

              <Accordion items={FAQ_DATA} theme="warm" />
            </section>

          </div>
        )}

        {/* 2. DEDICATED ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <T1About onNavigate={handleNavigate} onApplyBoard={() => onApplyVacancy({ title: "Board of Directors Member", department: "Governance", type: "Volunteer" })} />
            
            {/* FAQ Accordion Section on About */}
            <div className="py-16 bg-[#FAF8F5] border-t border-[#E8DFC8]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <h3 className="text-2xl font-quando font-normal text-stone-900 text-center">
                  Governance & Program FAQ
                </h3>
                <Accordion items={FAQ_DATA} theme="warm" />
              </div>
            </div>
          </div>
        )}

        {/* 3. DEDICATED PROGRAMS PAGE */}
        {currentPage === 'programs' && (
          <div className="animate-fade-in">
            <T1Programs />
          </div>
        )}

        {/* 4. DEDICATED EVENTS CALENDAR PAGE */}
        {currentPage === 'events' && (
          <div className="animate-fade-in">
            <T1Events onSelectEvent={onSelectEvent} />
          </div>
        )}

        {/* 5. DEDICATED OUR TEAM PAGE */}
        {currentPage === 'team' && (
          <div className="animate-fade-in">
            <T1Team onNavigate={handleNavigate} />
          </div>
        )}

        {/* 6. DEDICATED RESEARCH HUB PAGE */}
        {currentPage === 'research' && (
          <div className="animate-fade-in">
            <T1Research />
          </div>
        )}

        {/* 7. DEDICATED BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="animate-fade-in">
            <T1Blog onSelectPost={onSelectPost} />
          </div>
        )}

        {/* 8. DEDICATED BUILD & DONATE PAGE */}
        {currentPage === 'donate' && (
          <div className="animate-fade-in">
            <T1Donate onOpenModal={onOpenDonate} />
          </div>
        )}

        {/* 9. DEDICATED VACANCIES & CAREERS PAGE */}
        {currentPage === 'vacancies' && (
          <div className="animate-fade-in">
            <T1Vacancies onApply={onApplyVacancy} />
          </div>
        )}

        {/* 10. DEDICATED CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <T1Contact />
          </div>
        )}

        {/* 11. DEDICATED MEMBER PORTAL & LOGIN PAGE */}
        {currentPage === 'login' && (
          <div className="animate-fade-in">
            <FBFLoginPage theme="t1" onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />
          </div>
        )}

      </main>

      {/* Real Live Footer */}
      <T1Footer onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />

    </div>
  );
}

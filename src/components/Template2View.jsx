import React, { useState } from 'react';
import T2Header from './template2/T2Header';
import T2Hero from './template2/T2Hero';
import T2BentoPillars from './template2/T2BentoPillars';
import T2About from './template2/T2About';
import T2ProgramsMatrix from './template2/T2ProgramsMatrix';
import T2EventsDial from './template2/T2EventsDial';
import T2TeamDirectory from './template2/T2TeamDirectory';
import T2ResearchVault from './template2/T2ResearchVault';
import T2BlogFeed from './template2/T2BlogFeed';
import T2DonateTiers from './template2/T2DonateTiers';
import T2CareerPortal from './template2/T2CareerPortal';
import T2ContactConsole from './template2/T2ContactConsole';
import T2Footer from './template2/T2Footer';
import FBFLoginPage from './shared/FBFLoginPage';

// Shared Components
import Breadcrumbs from './shared/Breadcrumbs';
import CampaignProgressBar from './shared/CampaignProgressBar';
import HeroSlider from './shared/HeroSlider';
import Accordion from './shared/Accordion';
import { FAQ_DATA, ORG_DATA } from '../data/fbfData';

export default function Template2View({
  onOpenDonate,
  onSelectEvent,
  onApplyVacancy,
  onSelectPost,
  onOpenCommandPalette,
  initialPage = 'home'
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [heroMode, setHeroMode] = useState('standard');

  const handleNavigate = (pageOrAnchor) => {
    let targetPage = pageOrAnchor;
    if (pageOrAnchor.includes('hero') || pageOrAnchor.includes('pillar')) targetPage = 'home';
    if (pageOrAnchor.includes('about')) targetPage = 'about';
    if (pageOrAnchor.includes('program')) targetPage = 'programs';
    if (pageOrAnchor.includes('event')) targetPage = 'events';
    if (pageOrAnchor.includes('team')) targetPage = 'team';
    if (pageOrAnchor.includes('research')) targetPage = 'research';
    if (pageOrAnchor.includes('blog')) targetPage = 'blog';
    if (pageOrAnchor.includes('donate')) targetPage = 'donate';
    if (pageOrAnchor.includes('vacanc') || pageOrAnchor.includes('career')) targetPage = 'vacancies';
    if (pageOrAnchor.includes('contact')) targetPage = 'contact';
    if (pageOrAnchor.includes('login') || pageOrAnchor.includes('auth') || pageOrAnchor.includes('portal')) targetPage = 'login';

    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bannerGradient = {
    background: 'linear-gradient(135deg, #BE185D 0%, #E11D48 35%, #DB2777 70%, #9D174D 100%)'
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-rose-100 selection:text-rose-900 flex flex-col justify-between">
      
      {/* Header */}
      <T2Header 
        currentPage={currentPage}
        onOpenDonate={onOpenDonate} 
        onNavigate={handleNavigate} 
        onOpenCommandPalette={onOpenCommandPalette}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Breadcrumb path indicator */}
        {currentPage !== 'home' && (
          <div className="bg-rose-50/50 border-b border-rose-100">
            <Breadcrumbs currentPage={currentPage} onNavigate={handleNavigate} theme="rose" />
          </div>
        )}

        {/* 1. HOMEPAGE VIEW: High-Touch Human-Centric Pink Theme */}
        {currentPage === 'home' && (
          <div className="animate-fade-in space-y-12 pb-12">
            
            {/* Hero Section with Slider/Carousel Toggle Switch */}
            <div className="relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
                <div className="inline-flex items-center gap-1 p-1 bg-white border border-rose-200 rounded-xl text-xs font-semibold shadow-2xs">
                  <span className="text-slate-500 px-2 text-[11px] uppercase tracking-wider font-bold">Hero View:</span>
                  <button
                    onClick={() => setHeroMode('standard')}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      heroMode === 'standard' ? 'bg-[#E11D48] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Authentic Cover
                  </button>
                  <button
                    onClick={() => setHeroMode('carousel')}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      heroMode === 'carousel' ? 'bg-[#E11D48] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Image Carousel (Auto)
                  </button>
                </div>
              </div>

              {heroMode === 'standard' ? (
                <T2Hero onOpenDonate={onOpenDonate} onNavigate={handleNavigate} />
              ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <HeroSlider onNavigate={handleNavigate} onOpenDonate={onOpenDonate} theme="rose" />
                </div>
              )}
            </div>
            
            {/* Campaign Progress Gauge */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CampaignProgressBar onOpenDonate={onOpenDonate} theme="rose" />
            </div>

            <T2BentoPillars onNavigate={handleNavigate} />

            {/* Governance & Compliance FAQ Accordion */}
            <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">
                  Frequently Asked Questions
                </span>
                <h3 className="text-2xl sm:text-3xl font-quando font-normal text-slate-900">
                  Community Inquiries & Compliance FAQ
                </h3>
              </div>
              <Accordion items={FAQ_DATA} theme="rose" />
            </section>
          </div>
        )}

        {/* 2. ABOUT & GOVERNANCE PAGE */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <T2About onNavigate={handleNavigate} onApplyBoard={() => onApplyVacancy({ title: "Board of Directors Member", department: "Governance", type: "Volunteer" })} />
          </div>
        )}

        {/* 3. PROGRAMS MATRIX PAGE */}
        {currentPage === 'programs' && (
          <div className="animate-fade-in">
            <T2ProgramsMatrix />
          </div>
        )}

        {/* 4. EVENTS SCHEDULE PAGE */}
        {currentPage === 'events' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Community Gatherings
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Events Schedule & Archive
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Workshops, annual conventions, and youth roundtables with circular Number Ring Pagination.
                </p>
              </div>
            </div>
            <T2EventsDial onSelectEvent={onSelectEvent} />
          </div>
        )}

        {/* 5. TEAM DIRECTORY PAGE */}
        {currentPage === 'team' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Leadership & Faculty
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Team Directory
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Directors, research scientists, and academic interns leading equity across Canada.
                </p>
              </div>
            </div>
            <T2TeamDirectory onNavigate={handleNavigate} />
          </div>
        )}

        {/* 6. RESEARCH VAULT PAGE */}
        {currentPage === 'research' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Policy Lab
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Research Dossier & Data
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Evidence-based datasets, policy monographs, and Canadian youth advocacy whitepapers.
                </p>
              </div>
            </div>
            <T2ResearchVault />
          </div>
        )}

        {/* 7. BLOG FEED PAGE */}
        {currentPage === 'blog' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Public Commentary
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Dispatches & Perspectives
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Critical analysis of structural barriers, environmental equity, and Black youth agency.
                </p>
              </div>
            </div>
            <T2BlogFeed onSelectPost={onSelectPost} />
          </div>
        )}

        {/* 8. DONATE & INSTITUTIONAL PARTNERSHIPS */}
        {currentPage === 'donate' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Institutional Capital
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Philanthropic Support & Tiers
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Direct CRA charity donations (Reg #{ORG_DATA.charityNumber}) and 6 institutional funding tiers.
                </p>
              </div>
            </div>
            <T2DonateTiers onOpenModal={onOpenDonate} />
          </div>
        )}

        {/* 9. CAREER PORTAL */}
        {currentPage === 'vacancies' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Civic Opportunities
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Career Portal & CSJ Intakes
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  Federal placements, graduate research fellowships, and our institutional JEDI recruitment code.
                </p>
              </div>
            </div>
            <T2CareerPortal onApply={onApplyVacancy} />
          </div>
        )}

        {/* 10. CONTACT CONSOLE */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <div 
              className="text-white py-16 px-4 sm:px-6 lg:px-8"
              style={bannerGradient}
            >
              <div className="max-w-7xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDF289]">
                  Direct Inquiries
                </span>
                <h1 className="text-3xl sm:text-5xl font-quando font-normal">
                  Contact Console
                </h1>
                <p className="text-white text-sm sm:text-base max-w-3xl font-light">
                  St. Catharines Niagara headquarters. Official communications desk and institutional partnerships.
                </p>
              </div>
            </div>
            <T2ContactConsole />
          </div>
        )}

        {/* 11. LOGIN & MEMBER PORTAL */}
        {currentPage === 'login' && (
          <div className="animate-fade-in">
            <FBFLoginPage theme="t2" onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />
          </div>
        )}

      </main>

      {/* Footer */}
      <T2Footer onNavigate={handleNavigate} onOpenDonate={onOpenDonate} />

    </div>
  );
}

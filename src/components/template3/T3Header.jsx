import React, { useState } from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { 
  Menu, X, ArrowUpRight, BookOpen, Search, User, ChevronRight, Heart,
  Home, Sparkles, Calendar, Users, Briefcase, FileText, Newspaper, Mail 
} from 'lucide-react';

export default function T3Header({ onOpenDonate, onNavigate, onOpenCommandPalette, currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "home", icon: Home, desc: "Editorial Home & Community Focus" },
    { label: "About", page: "about", icon: Sparkles, desc: "Beliefs, Vision & National Roots" },
    { label: "Programs", page: "programs", icon: BookOpen, desc: "Pillars & Creative Development" },
    { label: "Events", page: "events", icon: Calendar, desc: "Roundtables, Summits & Retreats" },
    { label: "Team", page: "team", icon: Users, desc: "Sisterhood Collective & Interns" },
    { label: "Research", page: "research", icon: FileText, desc: "Disaggregated Knowledge Vault" },
    { label: "Blog", page: "blog", icon: Newspaper, desc: "Perspectives, Guides & Essays" },
    { label: "Careers", page: "vacancies", icon: Briefcase, desc: "Paid Internships & Fellowships" },
    { label: "Contact", page: "contact", icon: Mail, desc: "Niagara HQ & Partnerships" }
  ];

  const handleLinkClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    handleLinkClick('login');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-md border-b border-[#F7E8E8] text-[#34252A] font-sans transition-all">
      
      {/* 1. Top Authentic Micro-Bar */}
      <div className="bg-[#F7E8E8]/70 border-b border-[#EAD5D5] py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-[#873F50] w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#873F50] tracking-normal">
              Future Black Female
            </span>
            <span className="text-[#873F50]/40 hidden sm:inline">•</span>
            <span className="font-normal text-[#873F50]/80 hidden sm:inline">
              Privileging Black Girls & Women Across Canada & Globally
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span className="hidden sm:inline text-[#873F50]/90">
              Charity CRA <strong className="font-semibold">#{ORG_DATA.charityNumber}</strong>
            </span>
            <span className="hidden sm:inline text-[#873F50]/40">•</span>
            <button 
              onClick={() => handleLinkClick('programs')}
              className="hover:underline flex items-center gap-1 text-[#873F50] font-semibold"
            >
              <BookOpen className="w-3 h-3 text-[#873F50]" />
              <span>Book Club: Melanin & Manuscripts</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-2 xl:gap-4 w-full">
          
          {/* Logo Mark: Authentic Future Black Female Logo - Left Aligned */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer group py-1 shrink min-w-0"
          >
            <img 
              src="/images/live_site/header_logo.png" 
              alt="Future Black Female" 
              className="h-6 sm:h-8 lg:h-9 xl:h-10 2xl:h-11 max-w-[160px] sm:max-w-[240px] lg:max-w-none w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/branded/fbf-logo.png';
              }}
            />
          </div>

          {/* Desktop Navigation Links - Centered, balanced, no line wraps */}
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 mx-2 xl:mx-4 2xl:mx-8 gap-0.5 xl:gap-1.5 2xl:gap-3 text-[11px] xl:text-[12.5px] 2xl:text-[13px] font-semibold text-[#34252A]/80 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`py-1.5 px-2 xl:px-2.5 2xl:px-3 rounded-full relative transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#873F50] font-bold bg-[#F7E8E8] shadow-2xs'
                      : 'hover:text-[#873F50] hover:bg-[#F7E8E8]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Search, Log In & DONATE ↗ - Right Aligned */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 shrink-0 whitespace-nowrap">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 p-2 xl:px-3.5 xl:py-2 rounded-full border border-[#D68D82]/40 bg-[#FFF9F2] hover:bg-[#F7E8E8] text-[#873F50] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap shrink-0"
              title="Search or Jump to Page (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#873F50]" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden 2xl:inline px-1.5 py-0.5 text-[9px] bg-[#F7E8E8] text-[#873F50] rounded font-mono font-bold">⌘K</kbd>
            </button>

            {/* Clean Member Log In Button */}
            <button
              onClick={handleLoginClick}
              className={`flex items-center gap-1 px-2.5 py-1.5 xl:px-3 rounded-full text-xs font-semibold text-[#873F50] hover:bg-[#F7E8E8] border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'login' ? 'border-[#873F50] bg-[#F7E8E8] font-bold' : 'border-transparent hover:border-[#D68D82]/30'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#873F50]" />
              <span>Log In</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3.5 py-2 xl:px-6 xl:py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 group cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>DONATE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Tablet & Mobile Menu & Search Actions (< 1024px) - Clean, Prominent Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex p-2 rounded-xl text-[#873F50] hover:bg-[#F7E8E8] transition-colors cursor-pointer shrink-0"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={handleLoginClick}
              className="hidden sm:flex p-2 rounded-xl text-[#873F50] hover:bg-[#F7E8E8] transition-colors cursor-pointer shrink-0"
              title="Log In"
            >
              <User className="w-5 h-5 text-[#873F50]" />
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] text-[11px] sm:text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer shadow-xs transition-all active:scale-95"
            >
              <span>Donate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger Toggle Button - Always Visible on Right Edge */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-[#34252A] bg-[#F7E8E8]/70 hover:bg-[#F7E8E8] border border-[#D68D82]/40 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0 focus:outline-none shadow-2xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#873F50]" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6 text-[#34252A]" strokeWidth={2.5} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Responsive Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 top-18 sm:top-20 lg:hidden bg-stone-900/40 backdrop-blur-xs z-30 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative z-40 lg:hidden bg-[#FFF9F2] border-b border-[#F7E8E8] shadow-2xl w-full max-h-[calc(100vh-4.5rem)] overflow-y-auto divide-y divide-[#F7E8E8] animate-fade-in font-sans">
            
            {/* Quick Search in Mobile Drawer */}
            {onOpenCommandPalette && (
              <div className="p-4 bg-[#F7E8E8]/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-[#D68D82]/30 bg-white text-[#873F50] text-xs font-medium cursor-pointer shadow-2xs hover:border-[#873F50]"
                >
                  <Search className="w-4 h-4 text-[#873F50]" />
                  <span>Search programs, events & essays...</span>
                  <kbd className="ml-auto px-2 py-0.5 text-[9px] bg-[#F7E8E8] text-[#873F50] rounded font-mono font-bold">⌘K</kbd>
                </button>
              </div>
            )}

            {/* Navigation Links - Single Column Mobile List with Icons & Descriptions */}
            <div className="p-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                const IconComp = link.icon;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`w-full p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-3.5 text-left ${
                      isActive
                        ? 'bg-[#F7E8E8] text-[#873F50] font-bold border-l-4 border-[#873F50] shadow-2xs'
                        : 'text-[#34252A] hover:bg-[#F7E8E8]/50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#873F50] text-[#FFF9F2] shadow-xs' : 'bg-white text-[#873F50] border border-[#D68D82]/30'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <strong className="block text-sm font-bold text-[#34252A] leading-tight">
                          {link.label}
                        </strong>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-[#873F50] translate-x-0.5' : 'text-stone-400'
                        }`} />
                      </div>
                      {link.desc && (
                        <span className="block text-[11px] text-[#873F50]/80 truncate mt-0.5">
                          {link.desc}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action CTAs: Member Log In & Donate */}
            <div className="p-4 bg-[#F7E8E8]/30 space-y-3">
              <button
                onClick={handleLoginClick}
                className={`w-full py-3 px-4 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer transition-all ${
                  currentPage === 'login'
                    ? 'border-[#873F50] bg-white text-[#873F50] shadow-xs'
                    : 'border-[#D68D82]/30 bg-white text-[#34252A] hover:border-[#873F50]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#F7E8E8] text-[#873F50] flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block leading-tight font-bold">Member Portal</span>
                    <span className="block text-[10px] text-stone-500 font-normal normal-case">Sign in for Brock scholars & fellows</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>DONATE TO FUTURE BLACK FEMALE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-[#873F50]/70 pt-1 space-y-0.5">
                <div>HQ: St. Catharines, Niagara Region, ON</div>
                <div className="text-[10px] text-stone-400">Registered Canadian Charity CRA #{ORG_DATA.charityNumber}</div>
              </div>
            </div>

          </div>
        </>
      )}

    </header>
  );
}

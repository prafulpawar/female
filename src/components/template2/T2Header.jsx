import React, { useState } from 'react';
import { 
  Menu, X, Heart, Shield, FileText, ChevronRight, Search, User,
  Home, BookOpen, Calendar, Users, Briefcase, Newspaper, Mail 
} from 'lucide-react';
import { ORG_DATA, GOVERNANCE_REPORTS } from '../../data/fbfData';

export default function T2Header({ onOpenDonate, onNavigate, currentPage = 'home', onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home", icon: Home, desc: "Canadian Equity & Community Impact" },
    { label: "About", page: "about", icon: Shield, desc: "Governance, Principles & Reports" },
    { label: "Programs", page: "programs", icon: BookOpen, desc: "Pillars & Initiatives" },
    { label: "Events", page: "events", icon: Calendar, desc: "Conferences & Roundtables" },
    { label: "Team", page: "team", icon: Users, desc: "Leadership, Board & Interns" },
    { label: "Research", page: "research", icon: FileText, desc: "Disaggregated Knowledge Hub" },
    { label: "Blog", page: "blog", icon: Newspaper, desc: "Policy Perspectives & Essays" },
    { label: "Careers", page: "vacancies", icon: Briefcase, desc: "Career Opportunities & CSJ" },
    { label: "Contact", page: "contact", icon: Mail, desc: "National HQ & Inquiries" }
  ];

  const handleLinkClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    handleLinkClick('login');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-rose-100 text-slate-900 font-sans shadow-2xs transition-all w-full">

      {/* Top Institutional Strip (Rose & Gold Theme) */}
      <div className="bg-[#BE185D] text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#FDF289]">
              Future Black Female Inc.
            </span>
            <span className="text-rose-300">|</span>
            <span className="text-white hidden sm:inline">
              Charity Reg: CRA #{ORG_DATA.charityNumber}
            </span>
            <span className="text-rose-300 hidden md:inline">|</span>
            <a
              href={GOVERNANCE_REPORTS[0].pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FDF289] hidden md:inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-[#FDF289]" />
              <span>Latest Impact Report (2024–2025)</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-white">
            <span className="hidden sm:inline">HQ: St. Catharines, ON</span>
            <span className="text-rose-300 hidden sm:inline">•</span>
            <button
              onClick={() => handleLinkClick('vacancies')}
              className="hover:text-[#FDF289] transition-colors cursor-pointer"
            >
              Careers & Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-2 xl:gap-4 w-full">

          {/* Logo Mark - Left Aligned */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer py-1 group shrink min-w-0"
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

          {/* Desktop Navigation Links - Centered, evenly spaced, single horizontal row */}
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 mx-2 xl:mx-4 2xl:mx-8 gap-0.5 xl:gap-1.5 2xl:gap-3 text-[10.5px] xl:text-[12px] 2xl:text-xs font-semibold uppercase tracking-tight xl:tracking-wider text-slate-700 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`transition-colors py-2 px-1.5 xl:px-2.5 2xl:px-3 border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#BE185D] border-[#BE185D] font-bold'
                      : 'border-transparent hover:text-[#BE185D] hover:border-rose-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions: Search, Log In, and Donate - Right Aligned */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 shrink-0 whitespace-nowrap">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 p-2 xl:px-3 xl:py-1.5 rounded-full border border-rose-200 bg-white hover:bg-rose-50 text-slate-700 text-xs font-semibold transition-all shadow-2xs whitespace-nowrap shrink-0 cursor-pointer"
                title="Command Search (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#BE185D]" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden 2xl:inline px-1.5 py-0.5 text-[9px] bg-rose-50 text-slate-700 rounded font-mono font-bold">⌘K</kbd>
              </button>
            )}

            {/* Clean Member Log In Button */}
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-1 px-2.5 py-1.5 xl:px-3 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#BE185D] hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#BE185D]" />
              <span>Log In</span>
            </button>

            {/* Donate Now Button */}
            <button
              onClick={onOpenDonate}
              className="px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-full bg-[#BE185D] hover:bg-[#9d174d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>
          </div>

          {/* Tablet & Mobile Header Actions (< 1024px) - Clean, Prominent Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:flex p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5 text-[#BE185D]" />
              </button>
            )}

            <button
              onClick={handleLoginClick}
              className="hidden sm:flex p-2 rounded-lg text-slate-700 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
              title="Log In"
            >
              <User className="w-5 h-5 text-[#BE185D]" />
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#BE185D] hover:bg-[#9d174d] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1 shrink-0 cursor-pointer transition-all active:scale-95"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </button>

            {/* Hamburger Toggle Button - Always Visible on Right Edge */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-800 bg-rose-50/70 hover:bg-rose-100 border border-rose-200 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0 focus:outline-none shadow-2xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#BE185D]" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" strokeWidth={2.5} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 top-18 sm:top-20 lg:hidden bg-slate-900/40 backdrop-blur-xs z-30 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative z-40 lg:hidden bg-white border-b border-rose-100 shadow-2xl font-sans w-full max-h-[calc(100vh-4.5rem)] overflow-y-auto divide-y divide-rose-50 animate-fade-in">
            
            {/* Quick Search in Mobile Drawer */}
            {onOpenCommandPalette && (
              <div className="p-4 bg-rose-50/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-rose-200 bg-white text-slate-700 text-xs font-medium cursor-pointer shadow-2xs hover:border-[#BE185D]"
                >
                  <Search className="w-4 h-4 text-[#BE185D]" />
                  <span>Search pages, programs & reports...</span>
                  <kbd className="ml-auto px-2 py-0.5 text-[9px] bg-rose-50 border border-rose-200 rounded font-mono font-bold text-slate-600">⌘K</kbd>
                </button>
              </div>
            )}

            {/* Navigation Links - Single Column Mobile List with Icons & Descriptions */}
            <div className="p-3 space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                const IconComp = item.icon;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleLinkClick(item.page)}
                    className={`w-full p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-3.5 text-left ${
                      isActive
                        ? 'bg-rose-50 text-[#BE185D] font-bold border-l-4 border-[#BE185D] shadow-2xs'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#BE185D] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <strong className="block text-sm font-bold text-slate-900 leading-tight">
                          {item.label}
                        </strong>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-[#BE185D] translate-x-0.5' : 'text-slate-400'
                        }`} />
                      </div>
                      {item.desc && (
                        <span className="block text-[11px] text-slate-500 truncate mt-0.5">
                          {item.desc}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action CTAs: Member Log In & Donate */}
            <div className="p-4 bg-slate-50/60 space-y-3">
              <button
                onClick={handleLoginClick}
                className={`w-full py-3 px-4 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer transition-all ${
                  currentPage === 'login'
                    ? 'border-[#BE185D] bg-white text-[#BE185D] shadow-xs'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-[#BE185D]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#BE185D] flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block leading-tight font-bold">Member Portal</span>
                    <span className="block text-[10px] text-slate-500 font-normal normal-case">Sign in for Brock scholars & fellows</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3.5 rounded-full bg-[#BE185D] hover:bg-[#9d174d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Mission (Donate)</span>
              </button>

              <div className="text-center text-[11px] text-slate-500 pt-1 space-y-0.5">
                <div>National Office: St. Catharines, ON</div>
                <div className="text-[10px] text-slate-400">Registered Canadian Charity CRA #{ORG_DATA.charityNumber}</div>
              </div>
            </div>

          </div>
        </>
      )}

    </header>
  );
}

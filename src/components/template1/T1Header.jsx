import React, { useState } from 'react';
import { 
  Menu, X, Heart, User, Search, ChevronDown, ArrowUpRight, ChevronRight,
  Home, Sparkles, BookOpen, Calendar, Users, Briefcase, FileText, Newspaper, Mail 
} from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function T1Header({ onOpenDonate, onNavigate, currentPage = 'home', onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "home", icon: Home, desc: "Homepage & Community Impact" },
    { label: "About", page: "about", icon: Sparkles, desc: "Story, Principles & Governance", hasDropdown: false },
    { label: "Programs", page: "programs", icon: BookOpen, desc: "12 Culturally Responsive Initiatives" },
    { label: "Events", page: "events", icon: Calendar, desc: "Summits, Roundtables & Gatherings" },
    { label: "Our Team", page: "team", icon: Users, desc: "Leadership, Board & Intern Fellows" },
    { label: "Vacancies", page: "vacancies", icon: Briefcase, desc: "Careers, CSJ & Opportunities" },
    { label: "Research Hub", page: "research", icon: FileText, desc: "Disaggregated Data & Reports" },
    { label: "Blog", page: "blog", icon: Newspaper, desc: "Community Stories & Dispatches" },
    { label: "Contact", page: "contact", icon: Mail, desc: "St. Catharines HQ & Inquiries" }
  ];

  const handleLinkClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  const handleLoginClick = () => {
    handleLinkClick('login');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8DFC8] text-[#1B2828] font-dm shadow-xs transition-all w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-2 xl:gap-4 w-full">

          {/* Authentic Brand Logo - Left Aligned */}
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
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 mx-2 xl:mx-4 2xl:mx-8 gap-0.5 xl:gap-1.5 2xl:gap-3 text-[11px] xl:text-[12px] 2xl:text-xs font-bold uppercase tracking-tight xl:tracking-wider text-[#1B2828]/80 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.page}
                    className="relative group shrink-0"
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('about')}
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      className={`px-1.5 xl:px-2.5 2xl:px-3 py-2 flex items-center gap-1 border-b-2 whitespace-nowrap shrink-0 transition-colors ${isActive
                        ? 'text-[#D48B28] border-[#D48B28] font-black'
                        : 'border-transparent hover:text-[#D48B28]'
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-stone-400 group-hover:text-[#D48B28]" />
                    </button>

                    {aboutDropdownOpen && (
                      <div
                        className="absolute top-full left-0 w-52 bg-white border border-[#E8DFC8] rounded-xl shadow-xl py-2 z-50 text-left normal-case"
                        onMouseEnter={() => setAboutDropdownOpen(true)}
                        onMouseLeave={() => setAboutDropdownOpen(false)}
                      >
                        <button
                          onClick={() => handleLinkClick('about')}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-[#FAF8F5] hover:text-[#D48B28]"
                        >
                          About Us & Story
                        </button>
                        <button
                          onClick={() => handleLinkClick('about')}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-[#FAF8F5] hover:text-[#D48B28]"
                        >
                          Our Principles & Values
                        </button>
                        <button
                          onClick={() => handleLinkClick('team')}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-[#FAF8F5] hover:text-[#D48B28]"
                        >
                          Board of Directors
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`px-1.5 xl:px-2.5 2xl:px-3 py-2 border-b-2 whitespace-nowrap shrink-0 transition-colors ${isActive
                    ? 'text-[#D48B28] border-[#D48B28] font-black'
                    : 'border-transparent hover:text-[#D48B28]'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions: Search, Log In, and Donate - Right Aligned */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 shrink-0 whitespace-nowrap">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 p-2 xl:px-3 xl:py-1.5 rounded-full border border-[#E8DFC8] bg-[#FAF8F5] hover:bg-[#E8DFC8]/40 text-stone-700 text-xs font-semibold transition-all shadow-2xs whitespace-nowrap shrink-0"
                title="Search FBF (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#D48B28]" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden 2xl:inline px-1.5 py-0.5 text-[9px] bg-white border border-stone-200 text-stone-600 rounded font-mono font-bold">⌘K</kbd>
              </button>
            )}

            {/* Clean Log In Button */}
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-1 px-2.5 py-1.5 xl:px-3 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-wider text-[#1B2828] hover:text-[#D48B28] hover:bg-[#FAF8F5] border border-transparent hover:border-[#E8DFC8] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#D48B28]" />
              <span>Log In</span>
            </button>

            {/* Donate Now Button */}
            <button
              onClick={onOpenDonate}
              className="px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-full bg-[#D48B28] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
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
                className="hidden sm:flex p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-[#FAF8F5] transition-colors cursor-pointer shrink-0"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5 text-[#D48B28]" />
              </button>
            )}

            <button
              onClick={handleLoginClick}
              className="hidden sm:flex p-2 rounded-lg text-[#1B2828] hover:bg-[#FAF8F5] transition-colors cursor-pointer shrink-0"
              title="Log In"
            >
              <User className="w-5 h-5 text-[#D48B28]" />
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#D48B28] hover:bg-[#B45309] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1 shrink-0 cursor-pointer transition-all active:scale-95"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </button>

            {/* Hamburger Toggle Button - Always Visible on Right Edge */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-stone-900 bg-stone-100 hover:bg-[#FAF8F5] border border-stone-200 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0 focus:outline-none shadow-2xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D48B28]" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6 text-stone-900" strokeWidth={2.5} />
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
            className="fixed inset-0 top-18 lg:hidden bg-stone-900/40 backdrop-blur-xs z-30 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative z-40 lg:hidden bg-white border-b border-[#E8DFC8] shadow-2xl w-full max-h-[calc(100vh-4.5rem)] overflow-y-auto divide-y divide-stone-100 animate-fade-in">
            
            {/* Quick Search in Mobile Drawer */}
            {onOpenCommandPalette && (
              <div className="p-4 bg-[#FAF8F5]/80">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-stone-200 bg-white text-stone-600 text-xs font-medium cursor-pointer shadow-2xs hover:border-[#D48B28]"
                >
                  <Search className="w-4 h-4 text-[#D48B28]" />
                  <span>Search pages, programs & research...</span>
                  <kbd className="ml-auto px-2 py-0.5 text-[9px] bg-stone-100 border border-stone-200 rounded font-mono font-bold text-stone-500">⌘K</kbd>
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
                        ? 'bg-amber-50/80 text-[#D48B28] font-bold border-l-4 border-[#D48B28] shadow-2xs'
                        : 'text-stone-800 hover:bg-stone-50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#D48B28] text-white shadow-xs' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <strong className="block text-sm font-bold text-stone-900 leading-tight">
                          {link.label}
                        </strong>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-[#D48B28] translate-x-0.5' : 'text-stone-400'
                        }`} />
                      </div>
                      {link.desc && (
                        <span className="block text-[11px] text-stone-500 truncate mt-0.5">
                          {link.desc}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action CTAs: Member Log In & Donate */}
            <div className="p-4 bg-[#FAF8F5] space-y-3">
              <button
                onClick={handleLoginClick}
                className={`w-full py-3 px-4 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer transition-all ${
                  currentPage === 'login'
                    ? 'border-[#D48B28] bg-white text-[#D48B28] shadow-xs'
                    : 'border-stone-200 bg-white text-stone-800 hover:border-[#D48B28]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#D48B28] flex items-center justify-center">
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
                className="w-full py-3.5 rounded-full bg-[#D48B28] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Mission (Donate)</span>
              </button>

              <div className="text-center text-[11px] text-stone-500 pt-1 space-y-0.5">
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

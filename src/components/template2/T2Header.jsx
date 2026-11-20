import React, { useState } from 'react';
import { Menu, X, Heart, Shield, FileText, ChevronRight, Search, User } from 'lucide-react';
import { ORG_DATA, GOVERNANCE_REPORTS } from '../../data/fbfData';

export default function T2Header({ onOpenDonate, onNavigate, currentPage = 'home', onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Programs", page: "programs" },
    { label: "Events", page: "events" },
    { label: "Team", page: "team" },
    { label: "Research", page: "research" },
    { label: "Blog", page: "blog" },
    { label: "Careers", page: "vacancies" },
    { label: "Contact", page: "contact" }
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
            className="flex items-center gap-2 cursor-pointer py-1 group shrink-0"
          >
            <img
              src="/images/live_site/header_logo.png"
              alt="Future Black Female"
              className="h-8 sm:h-9 lg:h-9 xl:h-10 2xl:h-11 w-auto object-contain transition-transform group-hover:scale-102"
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

          {/* Tablet & Mobile Header Actions (< 1024px) */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-rose-50 transition-colors cursor-pointer"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5 text-[#BE185D]" />
              </button>
            )}

            <button
              onClick={handleLoginClick}
              className="p-2 rounded-lg text-slate-700 hover:bg-rose-50 transition-colors cursor-pointer"
              title="Log In"
            >
              <User className="w-5 h-5 text-[#BE185D]" />
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3.5 py-1.5 rounded-full bg-[#BE185D] hover:bg-[#9d174d] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-rose-50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-rose-100 px-6 py-6 space-y-4 animate-fade-in shadow-xl font-sans">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`text-left px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-rose-50 font-bold text-[#BE185D]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-rose-100 flex flex-col gap-2">
            <button
              onClick={handleLoginClick}
              className="w-full py-2.5 rounded-xl border border-rose-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-[#BE185D]" />
              <span>Member Log In</span>
            </button>

            <button
              onClick={() => {
                handleLinkClick('donate');
              }}
              className="w-full py-3 rounded-full bg-[#BE185D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Support Our Mission (Donate)</span>
            </button>

            <div className="text-center text-[11px] text-slate-500 pt-1">
              Registered Canadian Charity CRA #{ORG_DATA.charityNumber}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}

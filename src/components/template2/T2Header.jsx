import React, { useState } from 'react';
import { Menu, X, Heart, Shield, FileText, ChevronRight, Search } from 'lucide-react';
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
    { label: "Donate", page: "donate" },
    { label: "Careers", page: "vacancies" },
    { label: "Contact", page: "contact" }
  ];

  const handleLinkClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-rose-100 text-slate-900 font-sans shadow-2xs">

      {/* Top Institutional Strip (Rose & Gold Theme) */}
      <div className="bg-[#BE185D] text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
              className="hover:text-[#FDF289] transition-colors"
            >
              Careers & Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Mark */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer py-1"
          >
            <img
              src="/images/live_site/header_logo.png"
              alt="Future Black Female"
              className="h-12 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-slate-700">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`transition-colors py-2 border-b-2 ${
                    isActive
                      ? 'text-[#E11D48] border-[#E11D48] font-bold'
                      : 'border-transparent hover:text-[#E11D48] hover:border-rose-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Institutional CTA & Search */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-rose-50 transition-colors"
                title="Command Search (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-[#E11D48]" />
              </button>
            )}

            <button
              onClick={onOpenDonate}
              className="px-6 py-2.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-slate-950" />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDonate}
              className="px-4 py-1.5 rounded-full bg-[#FDF289] text-slate-950 text-xs font-bold uppercase tracking-wider"
            >
              Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:text-slate-900 hover:bg-rose-50"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-rose-100 px-6 py-6 space-y-3 text-sm animate-fade-in font-medium">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`text-left px-3 py-2 rounded text-slate-800 ${
                  currentPage === item.page ? 'bg-rose-50 font-bold text-[#E11D48]' : 'hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}

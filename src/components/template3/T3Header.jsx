import React, { useState } from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { Menu, X, ArrowUpRight, Heart, Sparkles, BookOpen, Search } from 'lucide-react';

export default function T3Header({ onOpenDonate, onNavigate, onOpenCommandPalette, currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", page: "home" },
    { label: "ABOUT", page: "about" },
    { label: "PROGRAMS", page: "programs" },
    { label: "EVENTS", page: "events" },
    { label: "TEAM", page: "team" },
    { label: "RESEARCH", page: "research" },
    { label: "BLOG", page: "blog" },
    { label: "DONATE", page: "donate" },
    { label: "CAREERS", page: "vacancies" },
    { label: "CONTACT", page: "contact" }
  ];

  const handleLinkClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FFF9F2]/95 backdrop-blur-md border-b border-[#F7E8E8] text-[#34252A] font-sans transition-all">
      
      {/* Top Feminine Modern Micro-Bar */}
      <div className="bg-[#F7E8E8]/70 border-b border-[#EAD5D5] py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-[#873F50]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
            <span className="font-medium tracking-wide">
              Future Black Female • Privileging Black Girls & Women Across Canada & Globally
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-semibold">
            <span className="hidden sm:inline text-[#873F50]/80">Charity: {ORG_DATA.charityNumber}</span>
            <span className="hidden sm:inline">•</span>
            <button 
              onClick={() => handleLinkClick('programs')}
              className="hover:underline flex items-center gap-1 text-[#873F50]"
            >
              <BookOpen className="w-3 h-3" />
              <span>Melanin & Manuscripts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Mark: FBF. */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7E8E8] border border-[#D68D82]/40 flex items-center justify-center p-2 group-hover:scale-105 transition-transform shadow-xs">
              <img 
                src="/images/branded/fbf-logo.png" 
                alt="FBF Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <span className="font-serif font-black text-2xl tracking-tight text-[#873F50] block leading-none">
                FBF<span className="text-[#D68D82]">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#34252A]/60 block mt-0.5">
                Future Black Female
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold tracking-wider text-[#34252A]/80">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`py-1 relative transition-colors ${
                    isActive
                      ? 'text-[#873F50] font-black after:scale-x-100'
                      : 'hover:text-[#873F50] after:scale-x-0'
                  } after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#873F50] after:transition-transform`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Search & DONATE ↗ */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D68D82]/40 bg-[#FFF9F2] hover:bg-[#F7E8E8] text-[#873F50] text-xs font-semibold transition-all shadow-2xs"
              title="Search or Jump to Page (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#D68D82]" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-[#F7E8E8] text-[#873F50] rounded font-mono font-bold">⌘K</kbd>
            </button>

            <button
              onClick={onOpenDonate}
              className="px-6 py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 group"
            >
              <span>DONATE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl text-[#873F50] hover:bg-[#F7E8E8] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenDonate}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#873F50] text-[#FFF9F2] text-xs font-bold"
            >
              Donate ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#34252A] hover:bg-[#F7E8E8] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F2] border-b border-[#F7E8E8] px-6 py-6 space-y-3 animate-fade-in text-sm font-semibold">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`text-left px-3 py-2 rounded-lg ${
                  currentPage === link.page
                    ? 'bg-[#F7E8E8] text-[#873F50] font-black'
                    : 'text-[#34252A] hover:bg-[#F7E8E8]/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}

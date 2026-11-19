import React, { useState } from 'react';
import { Menu, X, Heart, Globe, User, BookOpen, ShoppingBag, ChevronDown, ExternalLink, Search } from 'lucide-react';
import { ORG_DATA, TRAILBLAZERS_ANNOUNCEMENT } from '../../data/fbfData';
import MegaMenu from '../shared/MegaMenu';

export default function T1Header({ onOpenDonate, onNavigate, currentPage = 'home', onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [buildDropdownOpen, setBuildDropdownOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleLinkClick = (anchor) => {
    onNavigate(anchor);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setBuildDropdownOpen(false);
    setMegaMenuOpen(false);
  };

  const isLinkActive = (page) => currentPage === page;

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-stone-200 text-stone-900 font-dm shadow-xs">

      {/* 1. Top Announcement Bar (Exact Live Site Component) */}
      <div className="bg-[#D48B28] text-stone-950 py-2 px-4 text-xs font-medium border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-[11px] bg-stone-950 text-amber-300 px-2 py-0.5 rounded">
              {TRAILBLAZERS_ANNOUNCEMENT.title}
            </span>
            <span className="font-medium text-stone-900 hidden sm:inline">
              {TRAILBLAZERS_ANNOUNCEMENT.scholarship}
            </span>
          </div>

          <a
            href={TRAILBLAZERS_ANNOUNCEMENT.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-xs bg-stone-950 hover:bg-stone-800 text-white px-3 py-1 rounded transition-colors"
          >
            <span>{TRAILBLAZERS_ANNOUNCEMENT.buttonText}</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </a>
        </div>
      </div>

      {/* 2. Top Utility Bar (Exact Live Site Pattern) */}
      <div className="bg-[#1B2828] text-stone-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#2C3F3F]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-stone-300 hidden sm:inline">
              Charity Reg: <strong className="text-[#F8F495] font-semibold">{ORG_DATA.charityNumber}</strong>
            </span>
            <span className="hidden md:inline text-stone-500">•</span>
            <button
              onClick={() => handleLinkClick('programs')}
              className="hover:text-[#F8F495] transition-colors flex items-center gap-1.5 text-stone-300"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#F8F495]" />
              <span>Book Club: Melanin & Manuscripts</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            {/* Command Palette Quick Search */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden md:inline-flex items-center gap-1.5 text-stone-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors"
                title="Search FBF (Ctrl+K)"
              >
                <Search className="w-3 h-3 text-[#F8F495]" />
                <span className="text-[11px]">Search</span>
                <kbd className="text-[9px] font-mono bg-stone-900 px-1 py-0.2 rounded text-stone-400 border border-stone-700">⌘K</kbd>
              </button>
            )}

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${language === 'EN' ? 'bg-[#D48B28] text-white' : 'text-stone-400 hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-stone-600">|</span>
              <button
                onClick={() => setLanguage('FR')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${language === 'FR' ? 'bg-[#D48B28] text-white' : 'text-stone-400 hover:text-white'}`}
              >
                FR
              </button>
            </div>

            {/* Log In */}
            <div
              onClick={() => alert("Member Portal: Please sign in or register through Future Black Female's community network.")}
              className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"
            >
              <User className="w-3.5 h-3.5 text-stone-400" />
              <span>Log In</span>
            </div>

            {/* Cart */}
            <button
              onClick={() => handleLinkClick('programs')}
              className="flex items-center gap-1 hover:text-white transition-colors text-stone-300"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-400" />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">

          {/* Real Live Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer py-2"
          >
            <img
              src="/images/live_site/header_logo.png"
              alt="Future Black Female | Charity Support for Black Women and Girls"
              className="h-12 sm:h-14 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-bold uppercase tracking-wider text-stone-700">
            <button
              onClick={() => handleLinkClick('home')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('home') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative group" onMouseLeave={() => setAboutDropdownOpen(false)}>
              <button
                onClick={() => handleLinkClick('about')}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={`transition-colors py-2 flex items-center gap-1 border-b-2 ${
                  isLinkActive('about') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
                }`}
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {aboutDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-stone-200 rounded-lg shadow-lg py-2 z-50 text-left normal-case"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleLinkClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleLinkClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    Our Principles & Values
                  </button>
                  <button
                    onClick={() => handleLinkClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    Governance & AGM Reports
                  </button>
                </div>
              )}
            </div>

            {/* Mega Menu Trigger on Programs */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
            >
              <button
                onClick={() => handleLinkClick('programs')}
                className={`transition-colors py-2 flex items-center gap-1 border-b-2 ${
                  isLinkActive('programs') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>

            {/* Build Dropdown */}
            <div className="relative group" onMouseLeave={() => setBuildDropdownOpen(false)}>
              <button
                onClick={() => handleLinkClick('donate')}
                onMouseEnter={() => setBuildDropdownOpen(true)}
                className={`transition-colors py-2 flex items-center gap-1 border-b-2 ${
                  isLinkActive('donate') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
                }`}
              >
                <span>Build</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {buildDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-56 bg-white border border-stone-200 rounded-lg shadow-lg py-2 z-50 text-left normal-case"
                  onMouseEnter={() => setBuildDropdownOpen(true)}
                  onMouseLeave={() => setBuildDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleLinkClick('donate')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    Corporate Partnership Tiers
                  </button>
                  <button
                    onClick={() => handleLinkClick('donate')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    Host a Brick by Brick Fundraiser
                  </button>
                  <button
                    onClick={() => handleLinkClick('donate')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50 hover:text-[#D48B28]"
                  >
                    Legacy & Planned Giving
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('team')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('team') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Our Team
            </button>

            <button
              onClick={() => handleLinkClick('events')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('events') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Events
            </button>

            <button
              onClick={() => handleLinkClick('vacancies')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('vacancies') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Vacancies
            </button>

            <button
              onClick={() => handleLinkClick('research')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('research') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Research Hub
            </button>

            <button
              onClick={() => handleLinkClick('blog')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('blog') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`transition-colors py-2 border-b-2 ${
                isLinkActive('contact') ? 'text-[#D48B28] border-[#D48B28]' : 'border-transparent hover:text-[#D48B28]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Real Donate Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDonate}
              className="px-6 py-2.5 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>DONATE</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 rounded text-stone-700 hover:text-stone-900"
                title="Search"
              >
                <Search className="w-5 h-5 text-[#D48B28]" />
              </button>
            )}

            <button
              onClick={onOpenDonate}
              className="px-3.5 py-1.5 rounded bg-[#D48B28] text-white text-xs font-bold uppercase tracking-wider"
            >
              DONATE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mega Menu Component Mount */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onNavigate={handleLinkClick}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-3 animate-fade-in text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium">
            <button onClick={() => handleLinkClick('home')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Home</button>
            <button onClick={() => handleLinkClick('about')} className="text-left px-3 py-2 rounded hover:bg-stone-50">About Us</button>
            <button onClick={() => handleLinkClick('programs')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Programs (12)</button>
            <button onClick={() => handleLinkClick('team')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Our Team</button>
            <button onClick={() => handleLinkClick('events')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Events</button>
            <button onClick={() => handleLinkClick('vacancies')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Vacancies</button>
            <button onClick={() => handleLinkClick('research')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Research Hub</button>
            <button onClick={() => handleLinkClick('blog')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Blog</button>
            <button onClick={() => handleLinkClick('donate')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Build & Donate</button>
            <button onClick={() => handleLinkClick('contact')} className="text-left px-3 py-2 rounded hover:bg-stone-50">Contact Us</button>
          </div>
        </div>
      )}

    </header>
  );
}

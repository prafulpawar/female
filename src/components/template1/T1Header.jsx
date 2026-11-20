import React, { useState } from 'react';
import { Menu, X, Heart, User, Search, ChevronDown, ArrowUpRight } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function T1Header({ onOpenDonate, onNavigate, currentPage = 'home', onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about", hasDropdown: false },
    { label: "Programs", page: "programs" },
    { label: "Events", page: "events" },
    { label: "Our Team", page: "team" },
    { label: "Vacancies", page: "vacancies" },
    { label: "Research Hub", page: "research" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" }
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

          {/* Tablet & Mobile Header Actions (< 1024px) */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-[#FAF8F5] transition-colors"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5 text-[#D48B28]" />
              </button>
            )}

            <button
              onClick={handleLoginClick}
              className="p-2 rounded-lg text-[#1B2828] hover:bg-[#FAF8F5] transition-colors"
              title="Log In"
            >
              <User className="w-5 h-5 text-[#D48B28]" />
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3.5 py-1.5 rounded-full bg-[#D48B28] hover:bg-[#B45309] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1 shrink-0"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1B2828] hover:bg-[#FAF8F5] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8DFC8] px-6 py-6 space-y-4 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${isActive
                    ? 'bg-amber-100/60 text-[#D48B28] font-bold'
                    : 'text-stone-800 hover:bg-stone-50'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8DFC8] flex flex-col gap-2">
            <button
              onClick={handleLoginClick}
              className="w-full py-2.5 rounded-xl border border-[#E8DFC8] text-stone-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-[#D48B28]" />
              <span>Member Log In</span>
            </button>

            <button
              onClick={() => {
                handleLinkClick('donate');
              }}
              className="w-full py-3 rounded-full bg-[#D48B28] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Support Our Mission (Donate)</span>
            </button>

            <div className="text-center text-[11px] text-stone-500 pt-1">
              Registered Canadian Charity CRA #{ORG_DATA.charityNumber}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}

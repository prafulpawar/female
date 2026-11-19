import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ currentPage, onNavigate, theme = 'warm' }) {
  const pageLabels = {
    home: "Home",
    about: "About & Governance",
    programs: "12 Community Programs",
    events: "Events Calendar",
    team: "Meet Our Team",
    research: "Research Hub & Clinical Guides",
    blog: "Community Blog & Perspectives",
    donate: "Invest & Donate",
    vacancies: "Careers & Internships",
    contact: "Contact Us"
  };

  const currentLabel = pageLabels[currentPage] || "Page";

  const themeConfig = {
    warm: {
      text: "text-stone-500",
      hover: "hover:text-[#D48B28]",
      active: "text-stone-900 font-bold",
      chevron: "text-stone-400"
    },
    slate: {
      text: "text-slate-500",
      hover: "hover:text-amber-600",
      active: "text-slate-900 font-bold",
      chevron: "text-slate-400"
    },
    burgundy: {
      text: "text-[#873F50]/70",
      hover: "hover:text-[#873F50]",
      active: "text-[#873F50] font-black",
      chevron: "text-[#D68D82]"
    }
  };

  const currentTheme = themeConfig[theme] || themeConfig.warm;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-xs font-dm">
      <ol className={`flex items-center gap-1.5 ${currentTheme.text}`}>
        <li>
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1 ${currentTheme.hover} transition-colors`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </button>
        </li>

        {currentPage !== 'home' && (
          <>
            <li>
              <ChevronRight className={`w-3 h-3 ${currentTheme.chevron}`} />
            </li>
            <li className={currentTheme.active} aria-current="page">
              {currentLabel}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

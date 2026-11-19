import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NumberRingPagination({
  currentPage = 1,
  totalItems,
  totalPages: propTotalPages,
  pageSize = 5,
  onPageChange,
  theme = 'warm', // 'warm' | 'slate' | 'burgundy' | 'dark'
  accentColor
}) {
  const calculatedTotalPages = propTotalPages || (totalItems ? Math.ceil(totalItems / pageSize) : 1);
  const totalPages = Math.max(calculatedTotalPages, 1);
  const effectiveTotalItems = totalItems || (totalPages * pageSize);
  
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, effectiveTotalItems);

  // SVG circular progress calculation for the ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = totalPages > 1 ? (currentPage / totalPages) : 1;
  const strokeDashoffset = circumference - (progressPercent * circumference);

  // Theme styling definitions
  const themeStyles = {
    warm: {
      container: 'bg-[#FAF8F5] border-[#E8DFC8] text-[#1B2828]',
      ringTrack: 'text-[#E8DFC8]',
      ringProgress: 'text-[#D48B28]',
      labelAccent: 'text-[#D48B28]',
      countBold: 'text-[#1B2828]',
      btnActive: 'bg-[#D48B28] text-white shadow-md ring-2 ring-[#D48B28]/40 scale-105',
      btnInactive: 'bg-white hover:bg-[#F8F495]/40 text-[#1B2828] border border-[#E8DFC8]',
      navBtn: 'border-[#E8DFC8] hover:bg-white text-[#1B2828]'
    },
    slate: {
      container: 'bg-white border-slate-200 text-slate-900',
      ringTrack: 'text-slate-200',
      ringProgress: 'text-[#0F172A]',
      labelAccent: 'text-slate-500',
      countBold: 'text-[#0F172A]',
      btnActive: 'bg-[#0F172A] text-white shadow-md ring-2 ring-slate-400 scale-105',
      btnInactive: 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200',
      navBtn: 'border-slate-200 hover:bg-slate-100 text-slate-800'
    },
    burgundy: {
      container: 'bg-[#FFF9F2] border-[#E8D5CE] text-[#34252A]',
      ringTrack: 'text-[#F7E8E8]',
      ringProgress: 'text-[#873F50]',
      labelAccent: 'text-[#873F50]',
      countBold: 'text-[#34252A]',
      btnActive: 'bg-[#873F50] text-[#FFF9F2] shadow-md ring-2 ring-[#873F50]/40 scale-105',
      btnInactive: 'bg-white hover:bg-[#F7E8E8] text-[#34252A] border border-[#E8D5CE]',
      navBtn: 'border-[#E8D5CE] hover:bg-white text-[#34252A]'
    },
    dark: {
      container: 'bg-[#1B2828] border-stone-800 text-stone-200',
      ringTrack: 'text-stone-800',
      ringProgress: 'text-amber-400',
      labelAccent: 'text-amber-400',
      countBold: 'text-white',
      btnActive: 'bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-400/40 scale-105',
      btnInactive: 'bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700',
      navBtn: 'border-stone-700 hover:bg-stone-800 text-stone-200'
    }
  };

  const style = themeStyles[theme] || themeStyles.warm;

  return (
    <div className={`p-4 rounded-xl border transition-all ${style.container} flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs w-full max-w-3xl`}>
      
      {/* Left: Animated Ring Gauge & Summary Count */}
      <div className="flex items-center gap-3.5">
        <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
          <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 52 52">
            <circle
              cx="26"
              cy="26"
              r={radius}
              stroke="currentColor"
              strokeWidth="3.5"
              fill="transparent"
              className={style.ringTrack}
            />
            <circle
              cx="26"
              cy="26"
              r={radius}
              stroke="currentColor"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className={`transition-all duration-500 ${style.ringProgress}`}
            />
          </svg>
          <span className="absolute text-[11px] font-extrabold font-mono">
            {currentPage}/{totalPages}
          </span>
        </div>

        <div>
          <span className={`text-[11px] uppercase tracking-wider font-bold block ${style.labelAccent}`}>
            Events Pagination Ring
          </span>
          <span className="text-xs sm:text-sm font-medium">
            Showing <strong className={`font-bold ${style.countBold}`}>{startItem}–{endItem}</strong> of {effectiveTotalItems} Events
          </span>
        </div>
      </div>

      {/* Right: Circular Ring Page Buttons (5 Per Page) */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg border transition-all ${
            currentPage === 1
              ? 'opacity-30 cursor-not-allowed border-transparent'
              : style.navBtn
          }`}
          title="Previous 5 Events"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all transform ${
                  isActive ? style.btnActive : style.btnInactive
                }`}
                title={`Jump to events ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, effectiveTotalItems)}`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg border transition-all ${
            currentPage === totalPages
              ? 'opacity-30 cursor-not-allowed border-transparent'
              : style.navBtn
          }`}
          title="Next 5 Events"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

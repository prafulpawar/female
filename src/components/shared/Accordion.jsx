import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, allowMultiple = false, theme = 'warm' }) {
  const [openIndices, setOpenIndices] = useState([0]); // Default first item open

  const toggleIndex = (idx) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  const themeClasses = {
    warm: {
      card: 'bg-white border-[#E8DFC8] text-[#1B2828]',
      headerActive: 'text-[#D48B28]',
      chevron: 'text-[#D48B28]'
    },
    slate: {
      card: 'bg-white border-slate-200 text-slate-900',
      headerActive: 'text-slate-900',
      chevron: 'text-slate-600'
    },
    burgundy: {
      card: 'bg-[#FFF9F2] border-[#EAD5D5] text-[#34252A]',
      headerActive: 'text-[#873F50]',
      chevron: 'text-[#873F50]'
    }
  };

  const currentTheme = themeClasses[theme] || themeClasses.warm;

  return (
    <div className="space-y-3 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={item.id || idx}
            className={`border rounded-xl transition-all overflow-hidden ${currentTheme.card} ${
              isOpen ? 'shadow-xs' : 'hover:border-stone-400'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors font-medium text-sm sm:text-base cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`font-bold transition-colors ${isOpen ? currentTheme.headerActive : ''}`}>
                {item.question || item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-300 ${currentTheme.chevron} ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-fade-in">
                {item.answer || item.content || item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

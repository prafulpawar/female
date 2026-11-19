import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, BookOpen, Heart, FileText, ArrowRight, X, Layers, Users, Calendar } from 'lucide-react';
import { PROGRAMS, GOVERNANCE_REPORTS } from '../../data/fbfData';

export default function CommandPalette({ isOpen, onClose, onNavigate, onSelectTemplate, onOpenDonate }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpenPalette?.();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search items database
  const pagesList = [
    { type: 'page', title: 'Homepage', subtitle: 'Hero, Pillars, Methodology & Funders', id: 'home', icon: Compass },
    { type: 'page', title: 'About Us', subtitle: 'Principles, Guiding Values & Governance', id: 'about', icon: Users },
    { type: 'page', title: 'Our Programs', subtitle: '12 Culturally Responsive Initiatives', id: 'programs', icon: BookOpen },
    { type: 'page', title: 'Events Calendar', subtitle: 'Conferences, Retreats & Number Ring Pagination', id: 'events', icon: Calendar },
    { type: 'page', title: 'Our Team', subtitle: 'Leadership & Research Intern Fellows', id: 'team', icon: Users },
    { type: 'page', title: 'Research Hub', subtitle: 'Disaggregated Data & Downloadable Whitepapers', id: 'research', icon: FileText },
    { type: 'page', title: 'Community Blog', subtitle: 'Feminist Essays & Dispatches', id: 'blog', icon: BookOpen },
    { type: 'page', title: 'Build & Donate', subtitle: 'Tax-Deductible Gifts & 6 Partnership Tiers', id: 'donate', icon: Heart },
    { type: 'page', title: 'Careers & CSJ', subtitle: 'Job Vacancies & Volunteer Openings', id: 'vacancies', icon: Compass },
    { type: 'page', title: 'Contact Us', subtitle: 'St. Catharines HQ & Inquiries', id: 'contact', icon: Compass },
  ];

  const templatesList = [
    { type: 'template', title: 'Switch to Concept 1: Authentic Brand Original', subtitle: 'Live Site Replica in Quando & DM Sans', id: 't1', icon: Layers },
    { type: 'template', title: 'Switch to Concept 2: Modern Civic Institution', subtitle: 'Authoritative Foundation & Architectural Grid', id: 't2', icon: Layers },
    { type: 'template', title: 'Switch to Concept 3: Warm Editorial & Feminine Modern', subtitle: 'Bento Grid, Blush, Ivory & Burgundy', id: 't3', icon: Layers },
    { type: 'template', title: 'Switch to Executive Overview Hub', subtitle: 'Design Matrix & Content Spec Portal', id: 'hub', icon: Layers },
  ];

  const programsSearchList = PROGRAMS.map((p) => ({
    type: 'program',
    title: p.title,
    subtitle: `${p.category} • Audience: ${p.audience}`,
    id: 'programs',
    icon: BookOpen,
    link: p.link
  }));

  const allItems = [...pagesList, ...templatesList, ...programsSearchList];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 10)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 12);

  const handleSelect = (item) => {
    if (item.type === 'page' || item.type === 'program') {
      onNavigate(item.id);
    } else if (item.type === 'template') {
      onSelectTemplate(item.id);
    }
    onClose();
  };

  // Keyboard navigation up / down / enter
  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-xl w-full overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a program, page, or switch template... (ESC to close)"
            className="w-full bg-transparent text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-stone-100">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-500">
              No matching pages, programs, or actions found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.title}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                    isSelected ? 'bg-amber-50/80 text-[#D48B28]' : 'hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-100 text-[#D48B28]' : 'bg-stone-100 text-stone-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-500 shrink-0">
                    {item.type}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-amber-700 font-medium">Quick Command Palette</span>
        </div>
      </div>
    </div>
  );
}

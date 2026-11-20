import React, { useState } from 'react';
import { Layers, Palette, Building2, BookOpen, Heart, ChevronDown, ChevronUp, Eye, Compass, Search } from 'lucide-react';

export default function TemplateSwitcher({ 
  activeTemplate, 
  setActiveTemplate, 
  onOpenDonate,
  onOpenCommandPalette
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  const templates = [
    {
      id: 't1',
      name: '1. Authentic Brand',
      desc: 'Quando Serif • Exact Live Brand Refinement & Split/Slider Hero',
      icon: Palette
    },
    {
      id: 't2',
      name: '2. Civic Institution',
      desc: 'Plus Jakarta Sans • Deep Navy Slate • Policy Governance Matrix',
      icon: Building2
    },
    {
      id: 't3',
      name: '3. Warm Editorial',
      desc: 'Playfair Serif • Feminine Modern Bento Grid (Blush & Burgundy)',
      icon: BookOpen
    },
    {
      id: 'hub',
      name: 'Executive Hub',
      desc: 'Multi-Concept Comparison Matrix & Design Specifications',
      icon: Layers
    }
  ];

  const pages = [
    { label: "Homepage", id: "home" },
    { label: "About Us", id: "about" },
    { label: "12 Programs", id: "programs" },
    { label: "Events (Ring)", id: "events" },
    { label: "Our Team", id: "team" },
    { label: "Research Hub", id: "research" },
    { label: "Blog", id: "blog" },
    { label: "Build & Donate", id: "donate" },
    { label: "Careers", id: "vacancies" },
    { label: "Contact", id: "contact" },
    { label: "Log In Portal", id: "login" }
  ];

  const currentTemplateObj = templates.find(t => t.id === activeTemplate) || templates[0];

  return (
    <aside 
      aria-label="Design Review Toolbar"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-full px-3"
    >
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-full shadow-lg border border-stone-700 text-xs font-semibold hover:bg-stone-800 transition-all hover:scale-105"
          title="Open Template Switcher"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Active: {currentTemplateObj.name}</span>
          <ChevronUp className="w-3.5 h-3.5 text-stone-400" />
        </button>
      ) : (
        <div className="bg-white/95 backdrop-blur-md text-stone-800 px-3 py-2 rounded-2xl shadow-xl border border-stone-200 flex items-center justify-between gap-1.5 sm:gap-2 ring-1 ring-black/5">
          
          {/* Label / Brand Indicator */}
          <div className="hidden lg:flex items-center gap-2 pl-2 pr-3 border-r border-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Review Toolbar
            </span>
          </div>

          {/* Template Switcher Tabs */}
          <div className="flex items-center gap-1">
            {templates.map((tpl) => {
              const Icon = tpl.icon;
              const isActive = activeTemplate === tpl.id;
              return (
                <button
                  key={tpl.id}
                  onClick={() => {
                    setActiveTemplate(tpl.id);
                    setPagesMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                  title={tpl.desc}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  <span className="whitespace-nowrap">{tpl.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Page Jump Dropdown (when reviewing a template) */}
          {activeTemplate !== 'hub' && (
            <div className="relative border-l border-stone-200 pl-1 sm:pl-2">
              <button
                onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors flex items-center gap-1"
                title="Jump to a specific page view"
              >
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden md:inline">Jump to Page</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {pagesMenuOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-44 bg-white border border-stone-200 rounded-xl shadow-xl py-1.5 z-50 text-xs">
                  <div className="px-3 py-1 font-bold text-[10px] uppercase text-stone-400 border-b border-stone-100">
                    Template Page Views
                  </div>
                  {pages.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveTemplate(activeTemplate, p.id);
                        setPagesMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-stone-50 font-medium text-stone-800"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Search / Command Palette (Ctrl+K) */}
          <div className="border-l border-stone-200 pl-1 sm:pl-2">
            <button
              onClick={onOpenCommandPalette}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors flex items-center gap-1.5"
              title="Command Palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#D48B28]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[9px] font-mono bg-stone-100 border border-stone-300 rounded text-stone-500">⌘K</kbd>
            </button>
          </div>

          {/* Quick Donate Test Trigger */}
          <div className="flex items-center gap-1 pl-1 sm:pl-2 border-l border-stone-200">
            <button
              onClick={onOpenDonate}
              className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors flex items-center gap-1 shadow-xs"
              title="Test Donation Modal"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span className="hidden sm:inline">Donate</span>
            </button>

            {/* Collapse Button */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors ml-1"
              title="Minimize toolbar"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </aside>
  );
}

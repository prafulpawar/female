import React from 'react';
import { ArrowRight, Heart, Search } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function HubHero({ onSelectTemplate, onOpenDonate, onOpenCommandPalette }) {
  const previews = [
    {
      id: 't1',
      title: 'Concept 1: Authentic Brand Original',
      subtitle: 'Royal Violet & Electric Magenta Live Site',
      gradient: 'linear-gradient(135deg, #6949D7 0%, #B92B97 50%, #E91E63 100%)',
      btnBg: 'bg-[#FDF289] text-stone-900',
      badge: 'Exact Live Site Match',
      badgeColor: 'bg-white/20 text-white'
    },
    {
      id: 't2',
      title: 'Concept 2: Canadian Civic Institution',
      subtitle: 'Dignified Canadian Navy & Harvest Amber',
      gradient: 'linear-gradient(135deg, #1B365D 0%, #152B4A 50%, #20457A 100%)',
      btnBg: 'bg-[#D97706] text-white',
      badge: 'Civic Trust & Equity',
      badgeColor: 'bg-white/20 text-white'
    },
    {
      id: 't3',
      title: 'Concept 3: Warm Editorial & Feminine Modern',
      subtitle: 'Muted Burgundy, Warm Ivory & Champagne',
      gradient: 'linear-gradient(135deg, #873F50 0%, #A54F63 50%, #D68D82 100%)',
      btnBg: 'bg-[#D9B879] text-[#34252A]',
      badge: 'Empowering Magazine',
      badgeColor: 'bg-white/20 text-white'
    }
  ];

  return (
    <section className="bg-white text-stone-900 pt-12 pb-16 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tag & Identity */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <img 
              src="/images/live_site/header_logo.png" 
              alt="Future Black Female" 
              className="h-12 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="border-l border-stone-300 pl-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8558CE] block font-mono">
                Executive Review Hub
              </span>
              <span className="text-xs text-stone-500">
                Canadian Registered Charity #{ORG_DATA.charityNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-all shadow-2xs"
              title="Search or Jump to Page (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span>Search Index</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-stone-100 text-stone-600 rounded font-mono font-bold">⌘K</kbd>
            </button>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              3 Human Concepts Live
            </span>
            <button
              onClick={onOpenDonate}
              className="px-5 py-2 rounded-full bg-[#8558CE] hover:bg-[#6f42b8] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>
          </div>
        </div>

        {/* Hero Title & Mission Brief */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8558CE] font-mono block">
            HUMAN-CENTRIC WEBSITE REDESIGN
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 leading-[1.15] tracking-tight">
            Three Distinct Website Identities, <br />
            <span className="italic font-normal text-[#8558CE]">
              One Authentic Community Mission.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Designed from the ground up based on the 15 live website screenshots of <strong className="text-stone-900 font-semibold">Future Black Female (FBF)</strong>. No AI clichés, no generic gradients—each template mirrors the exact authentic layout, section architecture, and real content of FBF across three tailored color systems.
          </p>
        </div>

        {/* 3 Live Preview Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {previews.map((prev) => (
            <div
              key={prev.id}
              onClick={() => onSelectTemplate(prev.id)}
              className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              style={{ background: prev.gradient }}
            >
              <div className="p-7 space-y-4 text-white">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${prev.badgeColor}`}>
                  {prev.badge}
                </span>

                <h3 className="font-quando text-2xl font-normal leading-snug text-white">
                  {prev.title}
                </h3>

                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {prev.subtitle}
                </p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <span className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all group-hover:scale-105 ${prev.btnBg}`}>
                  Explore Template
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../../data/fbfData';
import NumberRingPagination from '../shared/NumberRingPagination';
import DateRangePicker from '../shared/DateRangePicker';

export default function T1Events({ onSelectEvent }) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('All');
  const itemsPerPage = 5;

  const currentList = activeTab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  const filteredList = currentList.filter(evt => {
    if (dateFilter === 'All') return true;
    if (dateFilter === 'Spring') return evt.date.includes('Apr') || evt.date.includes('May') || evt.date.includes('March');
    if (dateFilter === 'Summer') return evt.date.includes('Jun') || evt.date.includes('Jul') || evt.date.includes('Aug');
    if (dateFilter === 'Fall') return evt.date.includes('Sep') || evt.date.includes('Oct') || evt.date.includes('Nov');
    if (dateFilter === 'Conference') return evt.title.toLowerCase().includes('conference') || evt.title.toLowerCase().includes('summit');
    return true;
  });

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEvents = filteredList.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter) => {
    setDateFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div id="events-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. HERO SPOTLIGHT: GATHERINGS THAT SHIFT SYSTEMS (Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h1 className="font-quando text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FDF289] leading-tight">
              Gatherings That Shift Systems
            </h1>
            <p className="text-white/85 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              From the Black Women in Tech Roundtables to our Annual Youth Mental Health Summits in Ottawa and Niagara.
            </p>
          </div>

          {/* 3 Spotlight Arched Cards from Screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Breaking The Cycle Conference */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/15 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-stone-900 overflow-hidden">
                  <img
                    src="/images/live_site/hero_darina.jpg"
                    alt="Breaking The Cycle Conference"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#F8F495] tracking-wider block">
                    ANNUAL POLICY SUMMIT
                  </span>
                  <h3 className="font-quando text-xl text-white font-normal leading-snug">
                    Breaking The Cycle Conference
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Confronting systemic disparities in K–12 education with school board deans, parents, and Black youth.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectEvent(UPCOMING_EVENTS[3] || UPCOMING_EVENTS[0])}
                  className="text-xs font-bold text-[#F8F495] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Summit Dossier & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Black Women In Tech Roundtable */}
            <div className="bg-[#243535] rounded-3xl overflow-hidden border border-[#D48B28]/40 shadow-xl p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D48B28] text-stone-950 text-[10px] font-bold uppercase tracking-wider">
                  Black High School Students (Grades 10–12)
                </span>

                <div className="space-y-2 text-stone-300 text-xs font-light leading-relaxed">
                  <p className="font-bold text-white text-sm">Workshop Highlights:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-stone-300">
                    <li>Keynote: "Black Leadership in AI: Imagining What is Possible"</li>
                    <li>Speaker: Industry Leader in AI</li>
                    <li>Hands-on Lab Session: Introduction to AI</li>
                    <li>Financial Literacy Workshop</li>
                    <li>Career Pathways in AI & Tech</li>
                    <li>Student-led Breakout Sessions</li>
                  </ul>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[#F8F495] tracking-wider block mb-1">
                  INVEST OTTAWA • BEKH
                </span>
                <h3 className="font-quando text-lg text-white font-normal">
                  Black Women In Tech Roundtable
                </h3>
                <p className="text-xs text-stone-400 font-light mt-1">
                  Convening founders across Ontario to address venture access and systemic policy recommendations.
                </p>
              </div>
            </div>

            {/* Card 3: Niagara Waterfront Walkathon */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/15 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-stone-900 overflow-hidden">
                  <img
                    src="/images/downloaded/about_33.jpg"
                    alt="Niagara Waterfront Walkathon"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = '/images/live_site/about_two_women.jpg'; }}
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#F8F495] tracking-wider block">
                    COMMUNITY WELLNESS
                  </span>
                  <h3 className="font-quando text-xl text-white font-normal leading-snug">
                    Niagara Waterfront Walkathon
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Moving with purpose along the Lakeview Park waterfront trail to fund youth therapy bursaries.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectEvent(UPCOMING_EVENTS[2] || UPCOMING_EVENTS[0])}
                  className="text-xs font-bold text-[#F8F495] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Register to Walk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. ANNUAL GALA & SCHOLARSHIP BANNER (Full Butter Yellow Background - Matching Screenshots 2 & 5) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
                SIGNATURE ANNUAL GALA
              </span>
              <h2 className="font-quando text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-950 leading-tight">
                Future Black Trailblazers Gala & Awards
              </h2>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                Celebrating incoming Brock University Black scholars with $500 scholarship presentations, keynote addresses from leading Black women executives, and community recognition awards.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://futureblackfemale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>RESERVE GALA SEAT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FDF289]" />
                </a>
                <span className="text-xs text-slate-800 font-mono font-medium">
                  August 15, 2026 • Brock Alumni Pavilion
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-950/20 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/live_site/intern_nappy.jpg"
                  alt="Future Black Trailblazers Gala"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC EVENTS CALENDAR & ARCHIVE */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6">
            <div className="space-y-2 text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                Community Gatherings
              </span>
              <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                Our Events Schedule & Archive
              </h2>
              <p className="text-stone-600 text-sm max-w-xl font-light">
                Public symposiums, executive networking summits, and youth wellness workshops across Ontario.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

              <div className="flex items-center gap-2 p-1.5 bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl">
                <button
                  onClick={() => handleTabChange('upcoming')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'upcoming'
                      ? 'bg-[#5B60E6] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#5B60E6]'
                  }`}
                >
                  Upcoming ({UPCOMING_EVENTS.length})
                </button>
                <button
                  onClick={() => handleTabChange('past')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'past'
                      ? 'bg-[#5B60E6] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#5B60E6]'
                  }`}
                >
                  Past Archive ({PAST_EVENTS.length})
                </button>
              </div>
            </div>
          </div>

          {/* Number Ring Pagination */}
          {filteredList.length > 0 && (
            <div className="flex justify-center">
              <NumberRingPagination
                currentPage={currentPage}
                totalItems={filteredList.length}
                pageSize={itemsPerPage}
                onPageChange={(p) => setCurrentPage(p)}
                theme="warm"
              />
            </div>
          )}

          {/* Events List */}
          {displayedEvents.length > 0 ? (
            <div className="space-y-6 text-left">
              {displayedEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-[#FAF8F5] border-2 border-[#1B2828]/10 rounded-2xl p-6 sm:p-8 hover:border-[#D48B28] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs hover:shadow-md"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#D48B28]/15 text-[#B45309] font-bold">
                        {evt.category}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#D48B28]" />
                        <span>{evt.date}</span>
                      </span>
                      {evt.time && (
                        <>
                          <span className="text-stone-300">•</span>
                          <span className="flex items-center gap-1 text-stone-600">
                            <Clock className="w-3.5 h-3.5 text-stone-400" />
                            <span>{evt.time}</span>
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-quando font-normal text-xl sm:text-2xl text-[#1B2828]">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {evt.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D48B28]" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => onSelectEvent(evt)}
                      className="px-6 py-3 rounded-full bg-[#1B2828] hover:bg-[#D48B28] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>{activeTab === 'upcoming' ? 'Event Details & RSVP' : 'View Recap'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FAF8F5] rounded-3xl border border-[#E8DFC8] space-y-3">
              <Calendar className="w-10 h-10 text-stone-400 mx-auto" />
              <p className="text-sm font-semibold text-stone-700">No events found matching this filter</p>
              <button
                onClick={() => handleFilterChange('All')}
                className="text-xs text-[#D48B28] hover:underline font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. SIGNATURE ANNUAL GALA SPOTLIGHT (Matching Screenshot 2 & 5) */}
      <section className="py-20 sm:py-24 bg-[#F8F495] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-slate-950 text-[#F8F495] text-xs font-bold uppercase tracking-wider">
                SIGNATURE ANNUAL GALA
              </span>

              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 leading-tight">
                Future Black Trailblazers Gala & Awards
              </h2>

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                Celebrating incoming Brock University Black scholars with $500 scholarship presentations, keynote addresses from leading Black women executives, and community recognition awards.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => alert("Gala Registration: Brock University Alumni Pavilion. Please contact gala@futureblackfemale.com to reserve seats.")}
                  className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#F8F495] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>RESERVE GALA SEAT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8F495]" />
                </button>

                <span className="text-xs text-slate-700 font-semibold">
                  August 15, 2026 • Brock Alumni Pavilion
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-[2.5rem] overflow-hidden border-4 border-slate-950/20 shadow-2xl aspect-[4/3.8] bg-stone-900 group">
                <img
                  src="/images/downloaded/programs_80.jpg"
                  alt="Future Black Trailblazers Gala & Awards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/live_site/hero_darina.jpg'; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState } from 'react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../../data/fbfData';
import NumberRingPagination from '../shared/NumberRingPagination';
import DateRangePicker from '../shared/DateRangePicker';
import { Calendar, MapPin, Clock, ArrowUpRight, Star } from 'lucide-react';

export default function T3Events({ onSelectEvent }) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('All');
  const pageSize = 5;

  const currentList = activeTab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  const filteredList = currentList.filter(evt => {
    if (dateFilter === 'All') return true;
    if (dateFilter === 'Spring') return evt.date.includes('Apr') || evt.date.includes('May') || evt.date.includes('March');
    if (dateFilter === 'Summer') return evt.date.includes('Jun') || evt.date.includes('Jul') || evt.date.includes('Aug');
    if (dateFilter === 'Fall') return evt.date.includes('Sep') || evt.date.includes('Oct') || evt.date.includes('Nov');
    if (dateFilter === 'Conference') return evt.title.toLowerCase().includes('conference') || evt.title.toLowerCase().includes('summit');
    return true;
  });

  const totalItems = filteredList.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const displayedEvents = filteredList.slice(startIndex, startIndex + pageSize);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter) => {
    setDateFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div id="t3-events" className="text-[#34252A] font-sans">

      {/* 1. COMMUNITY SUMMITS & CONVENINGS HERO (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-quando text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FDF289] tracking-tight leading-tight">
              Gatherings That Shift Systems
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-light max-w-2xl mx-auto">
              From the Black Women in Tech Roundtables to our Annual Youth Mental Health Summits in Ottawa and Niagara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group hover:border-[#FDF289]/50 transition-all">
              <div className="aspect-[16/10] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/hero_darina.jpg"
                  alt="National Summit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#FDF289] tracking-wider block">
                  ANNUAL POLICY SUMMIT
                </span>
                <h3 className="font-quando text-xl text-white font-normal">
                  Breaking The Cycle Conference
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Confronting systemic disparities in K-12 education with school board deans, parents, and Black youth.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group hover:border-[#FDF289]/50 transition-all">
              <div className="aspect-[16/10] bg-indigo-950/60 p-4 flex flex-col justify-between border-b border-white/10">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-[#FDF289] self-start">
                  Black High School Students (Grades 10-12)
                </span>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#FDF289] uppercase tracking-wider block">Workshop Highlights:</span>
                  <ul className="text-[10px] text-white/80 space-y-0.5 font-light">
                    <li>• Keynote: "Black Leadership in AI: Imagining What is Possible"</li>
                    <li>• Hands-On Lab Session: Introduction to AI</li>
                    <li>• Financial Literacy Workshop & Career Pathways</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#FDF289] tracking-wider block">
                  INVEST OTTAWA • BEKH
                </span>
                <h3 className="font-quando text-xl text-white font-normal">
                  Black Women In Tech Roundtable
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Convening founders across Ontario to address venture access and systemic policy recommendations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group hover:border-[#FDF289]/50 transition-all">
              <div className="aspect-[16/10] bg-stone-900 overflow-hidden">
                <img
                  src="/images/downloaded/events_110.jpg"
                  alt="Niagara Walkathon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/live_site/about_two_women.jpg'; }}
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#FDF289] tracking-wider block">
                  COMMUNITY WELLNESS
                </span>
                <h3 className="font-quando text-xl text-white font-normal">
                  Niagara Waterfront Walkathon
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Moving with purpose along the Lakeview Park waterfront trail to fund youth therapy bursaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANNUAL GALA & SCHOLARSHIP BANNER (Full Butter Yellow Background) */}
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

      {/* 3. EVENTS SCHEDULE & ARCHIVE (Full Warm Cream Background) */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs uppercase tracking-wider text-[#873F50] font-semibold">
                Community Gatherings
              </p>
              <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
                Events Schedule & Archive
              </h2>
              <p className="text-[#34252A]/80 text-sm sm:text-base font-light leading-relaxed">
                Workshops, annual conventions, and youth roundtables with circular Number Ring Pagination.
              </p>
            </div>

            {/* Date Filter & Tabs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

              <div className="flex items-center p-1 bg-[#F7E8E8]/70 rounded-full border border-[#EAD5D5]">
                <button
                  onClick={() => handleTabChange('upcoming')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'upcoming'
                    ? 'bg-[#873F50] text-white shadow-xs'
                    : 'text-[#34252A]/70 hover:text-[#873F50]'
                    }`}
                >
                  <span>Upcoming</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === 'upcoming' ? 'bg-white/20 text-white' : 'bg-white text-[#873F50]'
                    }`}>
                    {UPCOMING_EVENTS.length}
                  </span>
                </button>

                <button
                  onClick={() => handleTabChange('past')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'past'
                    ? 'bg-[#873F50] text-white shadow-xs'
                    : 'text-[#34252A]/70 hover:text-[#873F50]'
                    }`}
                >
                  <span>Past Archive</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === 'past' ? 'bg-white/20 text-white' : 'bg-white text-[#873F50]'
                    }`}>
                    {PAST_EVENTS.length}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Number Ring Pagination Widget */}
          {totalItems > 0 && (
            <NumberRingPagination
              currentPage={currentPage}
              totalItems={totalItems}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
              theme="burgundy"
            />
          )}

          {/* Events List */}
          {displayedEvents.length > 0 ? (
            <div className="space-y-4">
              {displayedEvents.map((evt, idx) => {
                const itemNumber = startIndex + idx + 1;
                return (
                  <div
                    key={evt.id}
                    onClick={() => onSelectEvent(evt)}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F7E8E8] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#873F50]/40 group text-left"
                  >
                    <div className="flex items-start gap-4 sm:gap-6 w-full lg:w-auto flex-1 min-w-0">

                      {/* Circular Number Ring */}
                      <div className="w-12 h-12 rounded-full bg-[#F7E8E8] text-[#873F50] border border-[#EAD5D5] flex items-center justify-center shrink-0 font-serif font-black text-sm shadow-2xs group-hover:bg-[#873F50] group-hover:text-white transition-colors">
                        #{itemNumber}
                      </div>

                      {/* Thumbnail */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-stone-900 shrink-0 border border-[#F7E8E8]">
                        <img
                          src={evt.image || '/images/branded/hero-banner.jpg'}
                          alt={evt.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                        />
                      </div>

                      {/* Event Details */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                            {evt.category || 'Gathering'}
                          </span>
                          {activeTab === 'upcoming' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                              RSVP Open
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                          {evt.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#34252A]/70 pt-0.5">
                          <span className="flex items-center gap-1 font-semibold text-[#873F50]">
                            <Calendar className="w-3.5 h-3.5" />
                            {evt.date}
                          </span>
                          {evt.time && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#34252A]/50" />
                              {evt.time}
                            </span>
                          )}
                          <span className="flex items-center gap-1 truncate text-[#34252A]/60">
                            <MapPin className="w-3.5 h-3.5 text-[#34252A]/50" />
                            {evt.location}
                          </span>
                        </div>

                        <p className="text-xs text-[#34252A]/70 line-clamp-2 pt-1 font-light leading-relaxed">
                          {evt.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto justify-end pt-2 lg:pt-0 border-t lg:border-t-0 border-[#F7E8E8]">
                      <button
                        onClick={(e) => { e.stopPropagation(); onSelectEvent(evt); }}
                        className="px-5 py-2.5 rounded-full bg-[#873F50] group-hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{activeTab === 'upcoming' ? 'Event Details & RSVP' : 'View Summary'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#F7E8E8] space-y-3">
              <Calendar className="w-8 h-8 text-[#873F50]/40 mx-auto" />
              <p className="text-sm font-semibold text-[#34252A]">No events found for season: "{dateFilter}"</p>
              <button
                onClick={() => handleFilterChange('All')}
                className="text-xs text-[#873F50] hover:underline font-bold cursor-pointer"
              >
                Reset to All Dates
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <NumberRingPagination
              currentPage={currentPage}
              totalItems={totalItems}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
              theme="burgundy"
            />
          )}

        </div>
      </section>

      {/* 4. COMMUNITY TESTIMONIAL REVIEWS (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
              Community Voices & Feedback
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-white">
              What Attendees Are Saying
            </h3>
            <p className="text-white/80 text-sm font-light">
              Reflections from participants, educators, and scholars who joined our convenings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-xl space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "The Black Women in Tech roundtable opened rooms I never had access to. Being heard by industry leaders and BEKH researchers validated everything we are building."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Amara Diallo</strong>
                <span className="text-slate-400 font-mono text-[11px]">Ottawa Roundtable</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-xl space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "Breaking The Cycle Conference changed how our regional school board approaches Black parent councils. Actionable policy recommendations with real research backing."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Patricia K.</strong>
                <span className="text-slate-400 font-mono text-[11px]">Niagara District Board</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-xl space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "Walking alongside 100+ Black women along Lakeview Park was pure joy. Future Black Female gave me a community where I don't have to explain my existence."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Zari Campbell</strong>
                <span className="text-slate-400 font-mono text-[11px]">Brock University Scholar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

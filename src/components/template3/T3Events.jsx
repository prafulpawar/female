import React, { useState } from 'react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../../data/fbfData';
import NumberRingPagination from '../shared/NumberRingPagination';
import DateRangePicker from '../shared/DateRangePicker';
import { Calendar, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

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
    <section id="t3-events" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
              <Sparkles className="w-3 h-3 text-[#D68D82]" />
              <span>COMMUNITY CONVENINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#34252A] leading-tight">
              Our Events Schedule
            </h2>
            <p className="text-[#34252A]/80 text-sm sm:text-base font-light leading-relaxed">
              From our annual Black Girl Conference to roundtables with BEKH and Invest Ottawa, explore our upcoming gatherings and past event archive.
            </p>
          </div>

          {/* Date Filter & Tabs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

            <div className="flex items-center p-1 bg-[#F7E8E8]/70 rounded-full border border-[#EAD5D5]">
              <button
                onClick={() => handleTabChange('upcoming')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'upcoming'
                    ? 'bg-[#873F50] text-white shadow-xs'
                    : 'text-[#34252A]/70 hover:text-[#873F50]'
                }`}
              >
                <span>Upcoming</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeTab === 'upcoming' ? 'bg-white/20 text-white' : 'bg-white text-[#873F50]'
                }`}>
                  {UPCOMING_EVENTS.length}
                </span>
              </button>

              <button
                onClick={() => handleTabChange('past')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'past'
                    ? 'bg-[#873F50] text-white shadow-xs'
                    : 'text-[#34252A]/70 hover:text-[#873F50]'
                }`}
              >
                <span>Past</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeTab === 'past' ? 'bg-white/20 text-white' : 'bg-white text-[#873F50]'
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

        {/* Events Displayed for Current Page */}
        {displayedEvents.length > 0 ? (
          <div className="space-y-4">
            {displayedEvents.map((evt, idx) => {
              const itemNumber = startIndex + idx + 1;
              return (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent(evt)}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F7E8E8] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#873F50]/40 group"
                >
                {/* Left: Thumbnail & Details */}
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

                  {/* Event Info */}
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
                      {evt.tag && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600">
                          {evt.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
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

                {/* Right Action */}
                <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto justify-end pt-2 lg:pt-0 border-t lg:border-t-0 border-[#F7E8E8]">
                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectEvent(evt); }}
                    className="px-5 py-2.5 rounded-full bg-[#873F50] group-hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>{activeTab === 'upcoming' ? 'RSVP / Register' : 'View Summary'}</span>
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
              className="text-xs text-[#873F50] hover:underline font-bold"
            >
              Reset to All Dates
            </button>
          </div>
        )}

        {/* Bottom Number Ring Pagination */}
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
  );
}

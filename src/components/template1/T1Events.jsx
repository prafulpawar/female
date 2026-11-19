import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
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
    <section id="events" className="py-16 lg:py-20 bg-white text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Community Gatherings
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
              Our Events Calendar
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              From our annual Black Girls Conference to grassroots wellness retreats and entrepreneurship roundtables.
            </p>
          </div>

          {/* Date Filter & Tab Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

            <div className="flex items-center gap-2 p-1.5 bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl">
              <button
                onClick={() => handleTabChange('upcoming')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-[#1B2828] text-white shadow-xs'
                    : 'text-stone-600 hover:text-[#1B2828]'
                }`}
              >
                Upcoming ({UPCOMING_EVENTS.length})
              </button>
              <button
                onClick={() => handleTabChange('past')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'past'
                    ? 'bg-[#1B2828] text-white shadow-xs'
                    : 'text-stone-600 hover:text-[#1B2828]'
                }`}
              >
                Past Archive ({PAST_EVENTS.length})
              </button>
            </div>
          </div>
        </div>

        {/* Number Ring Pagination (Top Indicator) */}
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

        {/* Events List (Showing 5 per page) */}
        {displayedEvents.length > 0 ? (
          <div className="space-y-6">
          {displayedEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl p-6 hover:border-[#D48B28] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F8F495]/70 text-[#1B2828] font-bold border border-[#D48B28]/20">
                    {evt.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1 text-stone-600 font-semibold">
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

                <h3 className="font-quando font-normal text-xl text-[#1B2828]">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {evt.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D48B28]" />
                  <span>{evt.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectEvent(evt)}
                  className="px-5 py-2.5 rounded-lg bg-[#1B2828] hover:bg-[#2b3e3e] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <span>{activeTab === 'upcoming' ? 'RSVP / Details' : 'View Recap'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div className="text-center py-12 bg-[#FAF8F5] rounded-2xl border border-[#E8DFC8] space-y-3">
            <Calendar className="w-8 h-8 text-stone-400 mx-auto" />
            <p className="text-sm font-semibold text-stone-700">No events found for season: "{dateFilter}"</p>
            <button
              onClick={() => handleFilterChange('All')}
              className="text-xs text-[#D48B28] hover:underline font-bold"
            >
              Reset to All Dates
            </button>
          </div>
        )}

        {/* Number Ring Pagination (Bottom) */}
        {totalPages > 1 && (
          <div className="pt-6 border-t border-[#E8DFC8] flex justify-center">
            <NumberRingPagination
              currentPage={currentPage}
              totalItems={filteredList.length}
              pageSize={itemsPerPage}
              onPageChange={(p) => setCurrentPage(p)}
              theme="warm"
            />
          </div>
        )}

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../../data/fbfData';
import NumberRingPagination from '../shared/NumberRingPagination';
import DateRangePicker from '../shared/DateRangePicker';

export default function T2EventsDial({ onSelectEvent }) {
  const [tab, setTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [page, setPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('All');
  const itemsPerPage = 5;

  const list = tab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  const filteredList = list.filter(evt => {
    if (dateFilter === 'All') return true;
    if (dateFilter === 'Spring') return evt.date.includes('Apr') || evt.date.includes('May') || evt.date.includes('March');
    if (dateFilter === 'Summer') return evt.date.includes('Jun') || evt.date.includes('Jul') || evt.date.includes('Aug');
    if (dateFilter === 'Fall') return evt.date.includes('Sep') || evt.date.includes('Oct') || evt.date.includes('Nov');
    if (dateFilter === 'Conference') return evt.title.toLowerCase().includes('conference') || evt.title.toLowerCase().includes('summit');
    return true;
  });

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayed = filteredList.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setPage(1);
  };

  const handleFilterChange = (filter) => {
    setDateFilter(filter);
    setPage(1);
  };

  return (
    <section id="t2-events" className="py-16 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Community Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Events Schedule
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Public symposiums, executive networking summits, and youth wellness workshops.
            </p>
          </div>

          {/* Date Filter & Tab Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-full">
              <button
                onClick={() => handleTabChange('upcoming')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  tab === 'upcoming'
                    ? 'bg-[#7C3AED] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Upcoming ({UPCOMING_EVENTS.length})
              </button>
              <button
                onClick={() => handleTabChange('past')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  tab === 'past'
                    ? 'bg-[#7C3AED] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Past Archive ({PAST_EVENTS.length})
              </button>
            </div>
          </div>
        </div>

        {/* Top Number Ring Pagination Indicator */}
        {filteredList.length > 0 && (
          <div className="flex justify-center">
            <NumberRingPagination
              currentPage={page}
              totalItems={filteredList.length}
              pageSize={itemsPerPage}
              onPageChange={(p) => setPage(p)}
              theme="purple"
            />
          </div>
        )}

        {/* Events Table / List */}
        {displayed.length > 0 ? (
          <div className="space-y-4">
            {displayed.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#7C3AED] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] font-bold">
                      {evt.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{evt.date}</span>
                    </span>
                    {evt.time && (
                      <>
                        <span className="text-slate-400">•</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{evt.time}</span>
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-quando text-lg text-slate-900 font-normal">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {evt.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-slate-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="px-6 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-95"
                  >
                    <span>{tab === 'upcoming' ? 'Event Details & RSVP' : 'Archive Summary'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <Calendar className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-700">No events found for season: "{dateFilter}"</p>
            <button
              onClick={() => handleFilterChange('All')}
              className="text-xs text-[#7C3AED] hover:underline font-bold"
            >
              Reset to All Dates
            </button>
          </div>
        )}

        {/* Number Ring Pagination (5 per page) */}
        {totalPages > 1 && (
          <div className="pt-6 border-t border-slate-200 flex justify-center">
            <NumberRingPagination
              currentPage={page}
              totalItems={filteredList.length}
              pageSize={itemsPerPage}
              onPageChange={(p) => setPage(p)}
              theme="purple"
            />
          </div>
        )}

      </div>
    </section>
  );
}

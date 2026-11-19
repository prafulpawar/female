import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, List, LayoutGrid, Milestone, Sparkles } from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../../data/fbfData';
import NumberRingPagination from '../shared/NumberRingPagination';
import DateRangePicker from '../shared/DateRangePicker';

export default function T2EventsDial({ onSelectEvent }) {
  const [tab, setTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [page, setPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('All');
  const [viewMode, setViewMode] = useState('dial'); // 'dial' | 'cards' | 'timeline'
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

        {/* Header & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Community Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Events Schedule
            </h2>
            <p className="text-slate-600 text-sm max-w-xl font-light">
              Public symposiums, executive networking summits, and youth wellness workshops.
            </p>
          </div>

          {/* Date Filter, Tab Switcher & Component View Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <DateRangePicker onSelectDateRange={handleFilterChange} activeFilter={dateFilter} />

            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-full">
              <button
                onClick={() => handleTabChange('upcoming')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  tab === 'upcoming'
                    ? 'bg-[#7C3AED] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Upcoming ({UPCOMING_EVENTS.length})
              </button>
              <button
                onClick={() => handleTabChange('past')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  tab === 'past'
                    ? 'bg-[#7C3AED] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Past Archive ({PAST_EVENTS.length})
              </button>
            </div>

            {/* Interactive Events View Switcher */}
            <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-full text-xs shadow-2xs">
              <span className="text-[10px] font-mono font-bold uppercase px-2 text-slate-400">Events View:</span>
              <button
                onClick={() => setViewMode('dial')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'dial' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Numbered Ring Dial
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'cards' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Calendar Grid Cards
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'timeline' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
              >
                Timeline Agenda
              </button>
            </div>

          </div>
        </div>

        {/* Top Number Ring Pagination Indicator (For Dial View) */}
        {viewMode === 'dial' && filteredList.length > 0 && (
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

        {/* VIEW 1: NUMBERED RING DIAL LIST */}
        {viewMode === 'dial' && (
          <div className="space-y-4 animate-fade-in text-left">
            {displayed.map((evt, idx) => {
              const itemNumber = startIndex + idx + 1;
              return (
                <div
                  key={evt.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#7C3AED] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-[#7C3AED] font-bold text-sm flex items-center justify-center shrink-0 border border-purple-200">
                      #{itemNumber}
                    </div>

                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-3 py-0.5 rounded-full bg-purple-100 text-[#7C3AED] font-bold">
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
                  </div>

                  <div className="shrink-0">
                    <button
                      onClick={() => onSelectEvent(evt)}
                      className="px-6 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <span>{tab === 'upcoming' ? 'Event Details & RSVP' : 'Archive Summary'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: CALENDAR GRID CARDS */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in text-left">
            {filteredList.map((evt) => (
              <div
                key={evt.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-900 overflow-hidden relative">
                    <img
                      src={evt.image || '/images/branded/hero-banner.jpg'}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#7C3AED] font-bold text-[11px] shadow-xs">
                      {evt.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>

                    <h3 className="font-quando text-lg text-slate-900 font-normal leading-snug group-hover:text-[#7C3AED] transition-colors">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-light">
                      {evt.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-slate-500 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="w-full mt-4 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Event Details & RSVP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: TIMELINE AGENDA */}
        {viewMode === 'timeline' && (
          <div className="relative pl-6 sm:pl-10 space-y-8 animate-fade-in text-left border-l-2 border-purple-200 ml-4">
            {filteredList.map((evt) => (
              <div key={evt.id} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#7C3AED] border-4 border-white shadow-xs" />
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-[#7C3AED] transition-colors space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                      {evt.date} • {evt.time || 'All Day Event'}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-100 text-[#7C3AED]">
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="font-quando text-xl text-slate-900 font-normal">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/60">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{evt.location}</span>
                    </span>

                    <button
                      onClick={() => onSelectEvent(evt)}
                      className="text-xs font-bold text-[#7C3AED] hover:underline uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>RSVP & Agenda</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Number Ring Pagination (5 per page) */}
        {viewMode === 'dial' && totalPages > 1 && (
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

import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function DateRangePicker({ onSelectDateRange, activeFilter = 'All' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(activeFilter);

  const presets = [
    { label: 'All Dates', value: 'All' },
    { label: 'Spring 2025', value: 'Spring' },
    { label: 'Summer 2025', value: 'Summer' },
    { label: 'Fall 2025', value: 'Fall' },
    { label: 'Annual Conference', value: 'Conference' }
  ];

  const handleSelect = (preset) => {
    setSelectedPreset(preset.value);
    onSelectDateRange?.(preset.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-xs font-dm">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-400 transition-colors inline-flex items-center gap-2 shadow-2xs font-semibold"
      >
        <CalendarIcon className="w-3.5 h-3.5 text-[#D48B28]" />
        <span>Date Filter: {selectedPreset}</span>
      </button>

      {/* Calendar / Preset Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 z-40 bg-white border border-stone-200 rounded-xl shadow-xl p-4 w-64 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="font-bold text-xs text-stone-900">Filter By Season / Date</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1">
            {presets.map((p) => (
              <button
                key={p.value}
                onClick={() => handleSelect(p)}
                className={`w-full text-left px-3 py-1.5 rounded-md font-medium text-xs transition-colors flex items-center justify-between ${
                  selectedPreset === p.value
                    ? 'bg-amber-50 text-[#D48B28] font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{p.label}</span>
                {selectedPreset === p.value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48B28]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-400 text-center">
            Event archive updated monthly
          </div>
        </div>
      )}
    </div>
  );
}

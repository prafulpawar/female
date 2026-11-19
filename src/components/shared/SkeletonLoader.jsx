import React from 'react';

export default function SkeletonLoader({ type = 'card', count = 1 }) {
  const renderItem = (key) => {
    if (type === 'card') {
      return (
        <div key={key} className="bg-white border border-stone-200 rounded-xl overflow-hidden p-5 space-y-4 animate-pulse">
          <div className="h-44 bg-stone-200 rounded-lg w-full" />
          <div className="h-4 bg-stone-200 rounded w-3/4" />
          <div className="h-3 bg-stone-100 rounded w-full" />
          <div className="h-3 bg-stone-100 rounded w-2/3" />
          <div className="h-8 bg-stone-200 rounded w-1/3 pt-2" />
        </div>
      );
    }

    if (type === 'profile') {
      return (
        <div key={key} className="p-4 bg-white border border-stone-200 rounded-xl flex items-center gap-4 animate-pulse">
          <div className="w-14 h-14 rounded-full bg-stone-200 shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-stone-200 rounded w-1/2" />
            <div className="h-3 bg-stone-100 rounded w-1/3" />
          </div>
        </div>
      );
    }

    // Default text lines
    return (
      <div key={key} className="space-y-2.5 animate-pulse">
        <div className="h-4 bg-stone-200 rounded w-5/6" />
        <div className="h-4 bg-stone-100 rounded w-full" />
        <div className="h-4 bg-stone-100 rounded w-4/6" />
      </div>
    );
  };

  return (
    <div className={`w-full ${type === 'card' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-3'}`}>
      {Array.from({ length: count }, (_, i) => renderItem(i))}
    </div>
  );
}

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function MegaCarousel({ 
  items, 
  title = "Explore Our Initiatives",
  subtitle = "Swipe or scroll through our full portfolio",
  onSelectItem,
  theme = 'warm' 
}) {
  const scrollRef = useRef(null);

  const themes = {
    warm: {
      accent: 'text-[#D48B28]',
      tag: 'text-[#D48B28]',
      heading: 'font-quando text-stone-900',
      card: 'bg-white border-stone-200',
      btn: 'text-[#D48B28] hover:text-[#b8761d]',
      badge: 'bg-stone-900/90 text-white',
      arrow: 'border-stone-300 hover:bg-stone-100 text-stone-700'
    },
    slate: {
      accent: 'text-amber-600',
      tag: 'text-amber-600',
      heading: 'font-serif text-slate-900',
      card: 'bg-white border-slate-200',
      btn: 'text-amber-600 hover:text-amber-700',
      badge: 'bg-slate-900 text-white',
      arrow: 'border-slate-300 hover:bg-slate-100 text-slate-700'
    },
    burgundy: {
      accent: 'text-[#873F50]',
      tag: 'text-[#873F50]',
      heading: 'font-serif text-[#34252A]',
      card: 'bg-[#FFF9F2] border-[#F7E8E8] shadow-sm',
      btn: 'text-[#873F50] hover:text-[#6e3140]',
      badge: 'bg-[#873F50] text-[#FFF9F2]',
      arrow: 'border-[#EAD5D5] hover:bg-[#F7E8E8] text-[#873F50]'
    }
  };

  const style = themes[theme] || themes.warm;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-6 w-full font-sans">
      {/* Header with Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className={`text-xs uppercase font-bold tracking-widest ${style.tag} block`}>
            Programs Carousel
          </span>
          <h3 className={`text-2xl sm:text-3xl font-black ${style.heading} mt-1`}>
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => scroll('left')}
            className={`p-2.5 rounded-full border transition-colors shadow-2xs ${style.arrow}`}
            title="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-2.5 rounded-full border transition-colors shadow-2xs ${style.arrow}`}
            title="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`min-w-[280px] sm:min-w-[340px] max-w-[340px] snap-start rounded-2xl border overflow-hidden hover:shadow-md transition-all flex flex-col justify-between shrink-0 group ${style.card}`}
          >
            <div>
              <div className="h-48 overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${style.badge}`}>
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <h4 className={`font-bold text-base leading-snug ${style.heading}`}>
                  {item.title}
                </h4>
                <p className={`text-xs font-bold ${style.accent}`}>
                  Audience: {item.audience}
                </p>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-stone-100/60 mt-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold pt-3 transition-colors ${style.btn}`}
              >
                <span>Program Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

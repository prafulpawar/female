import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function ImageLightbox({ image, alt, caption, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-[110] bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 text-stone-300">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#D48B28]" />
            <span>FBF Community Photographic Archive</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            title="Close image view (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image */}
        <div className="relative max-h-[70vh] flex items-center justify-center bg-stone-950 p-2 sm:p-4 overflow-hidden">
          <img
            src={image}
            alt={alt || "Future Black Female Photography"}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Bottom Caption & Details */}
        <div className="p-5 bg-stone-900/90 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-300">
          <div>
            <h5 className="font-bold text-sm text-white">
              {alt || "Future Black Female Initiative"}
            </h5>
            {caption && (
              <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">
                {caption}
              </p>
            )}
          </div>

          <span className="text-[11px] text-[#D48B28] font-bold uppercase tracking-wider shrink-0">
            Canadian Registered Charity
          </span>
        </div>
      </div>
    </div>
  );
}

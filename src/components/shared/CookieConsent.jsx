import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fbf_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem('fbf_cookie_consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-[80] bg-[#1B2828] text-white rounded-2xl p-5 shadow-2xl border border-stone-700 animate-fade-in font-dm text-xs">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white/10 shrink-0">
          <ShieldCheck className="w-5 h-5 text-[#F8F495]" />
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-sm text-white">
              Privacy & Cookie Preferences
            </h5>
            <button
              onClick={() => handleAccept('dismissed')}
              className="text-stone-400 hover:text-white p-1"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-stone-300 text-xs leading-relaxed">
            Future Black Female complies with Canadian privacy standards (PIPEDA). We use essential cookies to maintain your navigation state and evaluate non-profit community reach.
          </p>

          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={() => handleAccept('all')}
              className="px-4 py-2 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              Accept All
            </button>
            <button
              onClick={() => handleAccept('essential')}
              className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-xs transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

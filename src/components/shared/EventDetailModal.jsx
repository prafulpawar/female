import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Tag, ExternalLink, CheckCircle } from 'lucide-react';

export default function EventDetailModal({ event, onClose }) {
  const [rsvpState, setRsvpState] = useState({ name: '', email: '', tickets: '1', submitted: false });

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRsvpState({ ...rsvpState, submitted: true });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-stone-200">
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full bg-stone-900 overflow-hidden">
          <img 
            src={event.image || '/images/branded/hero-banner.jpg'} 
            alt={event.title}
            className="w-full h-full object-cover opacity-85"
            onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-amber-500 text-stone-950">
              {event.category || 'Special Event'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Meta Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="font-medium">{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2 text-stone-700">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-medium">{event.time}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="font-medium truncate">{event.location}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">About This Event</h4>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Key Highlights</h4>
              <ul className="space-y-1.5">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* RSVP Section */}
          <div className="pt-4 border-t border-stone-200">
            {rsvpState.submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">RSVP Confirmed!</h5>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    We have saved your spot for {event.title}. Confirmation details will be emailed to {rsvpState.email}.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="text-sm font-semibold text-stone-900 mb-3">Quick RSVP / Register Interest</h4>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={rsvpState.name}
                    onChange={(e) => setRsvpState({ ...rsvpState, name: e.target.value })}
                    className="px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={rsvpState.email}
                    onChange={(e) => setRsvpState({ ...rsvpState, email: e.target.value })}
                    className="px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
                  >
                    Confirm RSVP
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* External links */}
          {event.rsvpLink && (
            <div className="flex justify-end pt-2">
              <a
                href={event.rsvpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 underline"
              >
                Official Ticketing / Event Page <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

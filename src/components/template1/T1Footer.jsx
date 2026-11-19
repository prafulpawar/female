import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp, ExternalLink, Check } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function T1Footer({ onOpenDonate, onNavigate }) {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setSubscribeEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B2828] text-stone-200 font-dm border-t border-[#2C3F3F]">
      
      {/* 1. Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand & Authentic Footer Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/live_site/footer_logo.png" 
                alt="Future Black Female" 
                className="h-16 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              {ORG_DATA.tagline}
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-1">
              <div><strong>Charity Registration:</strong> <span className="text-[#F8F495] font-semibold">{ORG_DATA.charityNumber}</span></div>
              <div><strong>Head Office:</strong> {ORG_DATA.headOffice.address}, {ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</div>
              <div><strong>Email:</strong> <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-stone-200 hover:text-[#F8F495]">{ORG_DATA.contact.generalEmail}</a></div>
            </div>
          </div>

          {/* Column 1: ABOUT US */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F495]">
              ABOUT US
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8F495] transition-colors">
                  Our Principle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F8F495] transition-colors">
                  Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-[#F8F495] transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research')} className="hover:text-[#F8F495] transition-colors">
                  Research Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: JOIN US */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F495]">
              JOIN US
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-[#F8F495] transition-colors">
                  Volunteer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-[#F8F495] transition-colors">
                  Career / Vacancies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-[#F8F495] transition-colors">
                  Canada Summer Jobs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-[#F8F495] transition-colors">
                  Book Club
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: DONATE & BUILD */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F495]">
              DONATE
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={onOpenDonate} className="hover:text-[#F8F495] transition-colors font-semibold text-white">
                  Donate Now
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('donate')} className="hover:text-[#F8F495] transition-colors">
                  Corporate Partnership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('donate')} className="hover:text-[#F8F495] transition-colors">
                  Brick by Brick Fundraiser
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('donate')} className="hover:text-[#F8F495] transition-colors">
                  Legacy Giving
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US & SUBSCRIBE */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F495]">
              CONTACT US
            </h4>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <label htmlFor="t1-sub-email" className="text-[11px] text-stone-300 block">
                Subscribe for newsletter updates
              </label>
              <div className="flex items-center gap-1">
                <input
                  id="t1-sub-email"
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-[#253939] border border-[#375252] rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#D48B28] w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#D48B28] hover:bg-[#b8761d] text-white px-3 py-1.5 rounded text-xs font-bold shrink-0 shadow-xs"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : "Subscribe"}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-300">Thank you for subscribing!</p>
              )}
            </form>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full text-center px-4 py-2 rounded bg-[#253939] hover:bg-[#2f4848] text-[#F8F495] border border-[#375252] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                BECOME A SPONSOR
              </button>
            </div>
          </div>

        </div>

        {/* 2. Official Land Acknowledgement (Exact Live Text) */}
        <div className="mt-12 pt-8 border-t border-[#2C3F3F] text-xs text-stone-300 space-y-3 leading-relaxed">
          <h5 className="font-bold uppercase tracking-wider text-[#F8F495]">
            Land Acknowledgement
          </h5>
          <p className="max-w-5xl">
            {ORG_DATA.landAcknowledgement}
          </p>
          <div className="text-stone-400 font-quando italic">
            Thank you for our founder and partners.
          </div>
        </div>

        {/* 3. Bottom Credits Bar (Exact Live Site Credits on Royal Purple) */}
        <div className="mt-8 pt-6 border-t border-[#2C3F3F] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-300">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="font-bold text-white">2022 © FUTURE BLACK FEMALE</span>
            <span>|</span>
            <span className="text-[#FDF289] font-medium">
              WEBSITE & BRANDING BY STELLA THE STUDIO
            </span>
            <span>|</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors underline">
              TERMS & CONDITIONS
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors text-stone-300 font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

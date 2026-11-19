import React, { useState } from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ORG_DATA, GOVERNANCE_REPORTS } from '../../data/fbfData';

export default function T2Footer({ onNavigate, onOpenDonate }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#180D1C] text-slate-300 font-sans border-t border-rose-950/40">
      
      {/* 1. TOP NEWSLETTER & ALLIES BANNER (Pink-Accented) */}
      <div className="border-b border-white/10 bg-black/20 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-1 text-center lg:text-left max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48] block">
                STAY CONNECTED WITH OUR WORK
              </span>
              <h3 className="font-quando text-2xl sm:text-3xl text-white font-normal">
                Join our circle of allies, mentors, and advocates
              </h3>
              <p className="text-xs sm:text-sm text-rose-200/80 font-light">
                Receive quarterly impact dispatches, youth scholarship announcements, and community event invitations.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Welcome to the circle! You're subscribed to FBF updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-rose-200/50 text-xs focus:outline-none focus:border-[#E11D48] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E11D48] hover:bg-[#BE185D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN 5-COLUMN DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Identity & Charity Status (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/live_site/footer_logo.png"
                alt="Future Black Female"
                className="h-16 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <p className="text-xs text-rose-100/80 leading-relaxed font-light">
              Feminist-informed Future Black Female (FBF) is a registered Canadian charity working to empower Black girls and women between 16 and 22 years to take charge of their education, careers, and civic wellbeing.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-rose-100/90">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
                <span>CRA Registered Charity #{ORG_DATA.charityNumber}</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light">
                Eligible for official Canadian tax credit deductions. Instant tax receipts provided for all donations.
              </p>
            </div>
          </div>

          {/* Col 2: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              OUR PROGRAMS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">
                  Pro-Black Mental Health
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">
                  Udada Support Circle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">
                  Financial Wellbeing & Literacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">
                  Career Strategies & Resume Labs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">
                  Book Club Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FDF289] font-medium transition-colors text-left">
                  Trailblazers Award ($500)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: About & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              ABOUT & GOVERNANCE
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Our Beliefs & Principles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Dr. Tapo Chimbganda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Board of Directors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research')} className="hover:text-white transition-colors text-left">
                  Policy Lab & Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left">
                  Community Commentary
                </button>
              </li>
              <li>
                <a 
                  href={GOVERNANCE_REPORTS[0].pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-left block"
                >
                  Impact Report (2024–25)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Get Involved (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              GET INVOLVED
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-white transition-colors text-left">
                  Volunteer Placements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-white transition-colors text-left">
                  Canada Summer Jobs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('donate')} className="hover:text-white transition-colors text-left">
                  Corporate Sponsorship
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('donate')} className="hover:text-white transition-colors text-left">
                  Brick by Brick Campaign
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-white transition-colors text-left">
                  Events Schedule
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Action (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              HEADQUARTERS
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-light">
              <div>{ORG_DATA.headOffice.address}</div>
              <div>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</div>
              <div className="pt-1">
                <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-rose-200 hover:text-white underline">
                  {ORG_DATA.contact.generalEmail}
                </a>
              </div>
              <div>{ORG_DATA.contact.phone}</div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 rounded-full bg-[#E11D48] hover:bg-[#BE185D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate Now</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-rose-100 font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                Become A Sponsor
              </button>
            </div>
          </div>

        </div>

        {/* 3. LAND ACKNOWLEDGEMENT */}
        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-rose-200/70 space-y-2 leading-relaxed">
          <h5 className="font-bold uppercase tracking-wider text-white">
            Land Acknowledgement
          </h5>
          <p className="max-w-5xl font-light">
            {ORG_DATA.landAcknowledgement}
          </p>
        </div>

        {/* 4. FOUNDER & PARTNER ACKNOWLEDGEMENT */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-medium text-white">Proud Community Partners:</span>
            <span>Ontario Trillium Foundation</span>
            <span>•</span>
            <span>Brock LINC</span>
            <span>•</span>
            <span>Downtown St. Catharines</span>
            <span>•</span>
            <span>Canadian Women's Foundation</span>
          </div>
        </div>

      </div>

      {/* 5. SOLID VIBRANT PINK BOTTOM BAR */}
      <div className="bg-[#E11D48] text-white py-4 px-4 sm:px-6 lg:px-8 border-t border-rose-600/40 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-medium tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>2022–2026 © FUTURE BLACK FEMALE</span>
            <span>•</span>
            <span>CRA CHARITY #79425 9531 RR0001</span>
            <span>•</span>
            <span>WEBSITE & BRANDING BY STELLA THE STUDIO</span>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-[#FDF289] underline underline-offset-2 transition-colors">
              TERMS & CONDITIONS
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white hover:text-[#FDF289] transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}

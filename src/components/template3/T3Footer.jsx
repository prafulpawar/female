import React, { useState } from 'react';
import { ORG_DATA, GOVERNANCE_REPORTS } from '../../data/fbfData';
import { Heart, ArrowUp, ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';

export default function T3Footer({ onNavigate, onOpenDonate }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#24171C] text-[#F7E8E8] font-sans border-t border-[#3B252E]">
      
      {/* 1. TOP NEWSLETTER STRIP (Inspired by Share Samadhan Footer Screenshot 14) */}
      <div className="border-b border-[#3B252E] bg-[#1E1217] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-1 text-center lg:text-left max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D9B879] block font-mono">
              SUBSCRIBE TO OUR COMMUNITY DISPATCHES
            </span>
            <h3 className="font-quando text-2xl sm:text-3xl text-white font-normal">
              Stay connected with our journal & impact stories
            </h3>
            <p className="text-xs sm:text-sm text-[#F7E8E8]/70 font-light">
              Receive quarterly feminist policy research, Brock U scholarship updates, and community event invitations.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#873F50]/60 border border-[#D68D82]/50 text-white text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for joining our community list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 px-4 py-3 rounded-full bg-[#2E1D24] border border-[#4D303C] text-white placeholder-[#F7E8E8]/40 text-xs focus:outline-none focus:border-[#D68D82] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-3.5 h-3.5 text-[#D9B879]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 2. MAIN 5-COLUMN DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Organization & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img 
                src="/images/live_site/footer_logo.png" 
                alt="Future Black Female" 
                className="h-14 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <p className="text-xs text-[#F7E8E8]/75 leading-relaxed font-light">
              Where Black women increase access to opportunities for Black female youth. Privileging Black girls and women across Canada and globally through pro-Black mental health, economic independence, and academic advocacy.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#F7E8E8]/90">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#D9B879]" />
                <span>CRA Registered Charity #{ORG_DATA.charityNumber}</span>
              </div>
              <p className="text-[11px] text-[#F7E8E8]/60 font-light">
                100% Tax Deductible across Canada under the Income Tax Act.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/75 font-light">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home Cover</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Our Beliefs</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Founder & Team</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">All 12 Programs</button></li>
              <li><button onClick={() => onNavigate('events')} className="hover:text-white transition-colors">Events & Retreats</button></li>
            </ul>
          </div>

          {/* Column 3: Our Services / Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs">
              OUR PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/75 font-light">
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Pro-Black Mental Health</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Udada Sisterhood</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Financial Wellbeing</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Career Strategies</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Book Club Sanctuary</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#D9B879] font-medium transition-colors">Trailblazers Award ($500)</button></li>
            </ul>
          </div>

          {/* Column 4: Research & Press (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs">
              RESEARCH & PRESS
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/75 font-light">
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors">Policy Research Hub</button></li>
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors">Clinical Guidelines</button></li>
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors">National Survey</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Community Blog</button></li>
              <li>
                <a 
                  href={GOVERNANCE_REPORTS[0].pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Impact Report 2024–25
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Headquarters & Action (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs">
              CONTACT US
            </h4>
            <div className="space-y-2 text-xs text-[#F7E8E8]/75 font-light">
              <div>{ORG_DATA.headOffice.address}</div>
              <div>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</div>
              <div className="pt-1">
                <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#D68D82] hover:text-white underline">
                  {ORG_DATA.contact.generalEmail}
                </a>
              </div>
              <div>{ORG_DATA.contact.phone}</div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>Donate Online</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF9F2] font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                Become A Sponsor
              </button>
            </div>
          </div>

        </div>

        {/* 3. INDIGENOUS LAND ACKNOWLEDGEMENT */}
        <div className="pt-8 border-t border-[#3B252E] text-xs text-[#F7E8E8]/70 space-y-2 leading-relaxed text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9B879] block">
            INDIGENOUS TERRITORIAL & TREATY ACKNOWLEDGEMENT
          </span>
          <p className="max-w-5xl font-light">
            {ORG_DATA.landAcknowledgement}
          </p>
        </div>

        {/* 4. COMMUNITY PARTNERS STRIP */}
        <div className="pt-6 border-t border-[#3B252E] flex flex-wrap items-center justify-between gap-4 text-xs text-[#F7E8E8]/50">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="font-medium text-white">Proud Partners:</span>
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

      {/* 5. BOTTOM EDITORIAL CREDITS BAR */}
      <div className="bg-[#1A0F14] text-white py-4 px-4 sm:px-6 lg:px-8 border-t border-[#3B252E] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-medium tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center sm:text-left text-[#F7E8E8]/70">
            <span>2022–2026 © FUTURE BLACK FEMALE</span>
            <span>•</span>
            <span>CRA CHARITY #{ORG_DATA.charityNumber}</span>
            <span>•</span>
            <a 
              href="https://stellathestudio.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D9B879] hover:underline"
            >
              WEBSITE & BRANDING BY STELLA THE STUDIO
            </a>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white underline underline-offset-2 transition-colors">
              TERMS & CONDITIONS
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#F7E8E8]/70 hover:text-white transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#D9B879]" />
          </button>
        </div>
      </div>

    </footer>
  );
}

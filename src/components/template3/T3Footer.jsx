import React from 'react';
import { ORG_DATA, GOVERNANCE_REPORTS } from '../../data/fbfData';
import { Heart, ArrowUp, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function T3Footer({ onNavigate, onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Community Faces Strip Data
  const communityFaces = [
    {
      image: '/images/live_site/about_two_women.jpg',
      label: 'Sisterhood Retreats'
    },
    {
      image: '/images/live_site/intern_nappy.jpg',
      label: 'Brock U Scholars'
    },
    {
      image: '/images/live_site/hero_darina.jpg',
      label: 'Radical Belonging'
    },
    {
      image: '/images/live_site/intern_bestbe.jpg',
      label: 'Youth Leadership'
    },
    {
      image: '/images/live_site/pillar_career.jpg',
      label: 'Executive Mentorship'
    }
  ];

  return (
    <footer className="bg-[#1F1318] text-[#F7E8E8] font-sans border-t border-[#3B252E] relative overflow-hidden">
      
      {/* 1. VISUAL SISTERHOOD PHOTO RIBBON (Images & Human Touch) */}
      <div className="bg-[#160B10] border-b border-[#3B252E] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <p className="text-xs uppercase tracking-wider text-[#D9B879] font-semibold">
              Sisterhood in Action • Over 500+ Youth Empowered
            </p>
            <h3 className="font-quando text-xl sm:text-2xl text-white font-normal">
              A future where every Black girl can thrive.
            </h3>
          </div>

          {/* 5 Overlapping Community Photos with Hover Pop */}
          <div className="flex items-center -space-x-3 sm:-space-x-4">
            {communityFaces.map((face, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                title={face.label}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#D9B879]/50 shadow-lg group-hover:scale-115 group-hover:z-30 transition-all duration-300">
                  <img
                    src={face.image}
                    alt={face.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5B60E6] border-2 border-[#FDF289] text-[#FDF289] flex flex-col items-center justify-center text-[10px] font-bold uppercase tracking-tighter shadow-lg shrink-0">
              <span>+428</span>
              <span className="text-[8px] font-light">Allies</span>
            </div>
          </div>
        </div>
      </div>



      {/* 3. MAIN 5-COLUMN DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Organization & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <img 
                src="/images/live_site/footer_logo.png" 
                alt="Future Black Female" 
                className="h-16 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <p className="text-xs text-[#F7E8E8]/80 leading-relaxed font-light">
              Where Black women increase access to opportunities for Black female youth. Privileging Black girls and women across Canada and globally through pro-Black mental health, economic independence, and academic advocacy.
            </p>

            {/* CRA Charity Badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#F7E8E8]/90">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#D9B879]" />
                <span>CRA Registered Charity #{ORG_DATA.charityNumber}</span>
              </div>
              <p className="text-[11px] text-[#F7E8E8]/60 font-light leading-relaxed">
                100% Tax Deductible across Canada under the Income Tax Act. Instant official receipt issued via email.
              </p>
            </div>
          </div>

          {/* Column 2: Sisterhood & Core Pillars (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs font-mono">
              CORE PILLARS
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/80 font-light">
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">Mental Health Services</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">Udada Sisterhood</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">Financial Wellbeing</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">Career Strategies</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">Melanin & Manuscripts</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#D9B879] font-medium transition-colors text-left">Trailblazers Award ($500)</button></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs font-mono">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/80 font-light">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Home Cover</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">Our Beliefs & Values</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">Founder Dr. Tapo</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors text-left">All 12 Programs</button></li>
              <li><button onClick={() => onNavigate('events')} className="hover:text-white transition-colors text-left">Events & Summits</button></li>
              <li><button onClick={() => onNavigate('vacancies')} className="hover:text-white transition-colors text-left">Careers & Board</button></li>
            </ul>
          </div>

          {/* Column 4: Research & Press (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs font-mono">
              RESEARCH & PRESS
            </h4>
            <ul className="space-y-2 text-xs text-[#F7E8E8]/80 font-light">
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors text-left">Policy Research Hub</button></li>
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors text-left">Clinical Guidelines</button></li>
              <li><button onClick={() => onNavigate('research')} className="hover:text-white transition-colors text-left">National Youth Survey</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left">Community Blog</button></li>
              <li>
                <a 
                  href={GOVERNANCE_REPORTS[0].pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block text-left"
                >
                  Impact Report 2024–25
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Headquarters & Action (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-bold uppercase tracking-wider text-[#D9B879] text-xs font-mono">
              HEADQUARTERS
            </h4>
            <div className="space-y-2 text-xs text-[#F7E8E8]/80 font-light">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D9B879] shrink-0 mt-0.5" />
                <span>{ORG_DATA.headOffice.address}, {ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span>
              </div>
              <div className="pt-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D9B879] shrink-0" />
                <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#D9B879] hover:text-white underline">
                  {ORG_DATA.contact.generalEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D9B879] shrink-0" />
                <span>{ORG_DATA.contact.phone}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
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

        {/* 4. INDIGENOUS LAND ACKNOWLEDGEMENT */}
        <div className="pt-8 border-t border-[#3B252E] text-xs text-[#F7E8E8]/70 space-y-2 leading-relaxed text-left bg-white/5 p-6 rounded-2xl border border-white/5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9B879] block font-mono">
            INDIGENOUS TERRITORIAL & TREATY ACKNOWLEDGEMENT
          </span>
          <p className="max-w-5xl font-light">
            {ORG_DATA.landAcknowledgement}
          </p>
        </div>

        {/* 5. COMMUNITY PARTNERS STRIP */}
        <div className="pt-6 border-t border-[#3B252E] flex flex-wrap items-center justify-between gap-4 text-xs text-[#F7E8E8]/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="font-semibold text-white">Institutional Benefactors:</span>
            <span>Ontario Trillium Foundation</span>
            <span>•</span>
            <span>Brock LINC</span>
            <span>•</span>
            <span>Downtown St. Catharines</span>
            <span>•</span>
            <span>Canadian Women's Foundation</span>
            <span>•</span>
            <span>Niagara Community Foundation</span>
            <span>•</span>
            <span>WAGE Canada</span>
          </div>
        </div>

      </div>

      {/* 6. BOTTOM EDITORIAL CREDITS BAR (Matching Electric Indigo Bar) */}
      <div className="bg-[#5B60E6] text-white py-4 px-4 sm:px-6 lg:px-8 border-t border-indigo-400/30 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-medium tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center sm:text-left text-white/90">
            <span>2022–2026 © FUTURE BLACK FEMALE</span>
            <span>•</span>
            <span>CRA CHARITY #{ORG_DATA.charityNumber}</span>
            <span>•</span>
            <a 
              href="https://stellathestudio.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FDF289] hover:underline"
            >
              WEBSITE & BRANDING BY STELLA THE STUDIO
            </a>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-[#FDF289] underline underline-offset-2 transition-colors">
              TERMS & CONDITIONS
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white/90 hover:text-[#FDF289] transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#FDF289]" />
          </button>
        </div>
      </div>

    </footer>
  );
}

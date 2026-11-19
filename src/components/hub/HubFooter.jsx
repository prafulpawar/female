import React from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { Heart, Mail, MapPin } from 'lucide-react';

export default function HubFooter({ onSelectTemplate, onOpenDonate }) {
  return (
    <footer className="bg-stone-900 text-stone-300 text-xs font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Org Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/live_site/header_logo.png" 
                alt="Future Black Female" 
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <p className="text-stone-400 text-xs leading-relaxed max-w-md">
              {ORG_DATA.tagline} Empowering Black girls and young women (16–22) across Canada and globally through pro-Black mental health services, financial literacy, and career advancement.
            </p>

            <div className="text-stone-400 space-y-1">
              <div>Charity Registration: <strong className="text-amber-400 font-normal">{ORG_DATA.charityNumber}</strong></div>
              <div>Head Office: {ORG_DATA.headOffice.address}, {ORG_DATA.headOffice.city}, ON {ORG_DATA.headOffice.postalCode}</div>
              <div>Official Email: <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-stone-200 hover:text-amber-400">{ORG_DATA.contact.generalEmail}</a></div>
            </div>
          </div>

          {/* Template 1 Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider text-xs">Concept 1</h4>
            <p className="text-[11px] text-stone-400 font-serif italic">Authentic Brand Original</p>
            <ul className="space-y-1.5 text-stone-400">
              <li><button onClick={() => onSelectTemplate('t1', 'hero')} className="hover:text-amber-400">Hero & Real Identity</button></li>
              <li><button onClick={() => onSelectTemplate('t1', 'pillars')} className="hover:text-amber-400">3 Pillars & Funders</button></li>
              <li><button onClick={() => onSelectTemplate('t1', 'programs')} className="hover:text-amber-400">12 Programs</button></li>
              <li><button onClick={() => onSelectTemplate('t1', 'events')} className="hover:text-amber-400">Events & Ring System</button></li>
            </ul>
          </div>

          {/* Template 2 Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-300 uppercase tracking-wider text-xs">Concept 2</h4>
            <p className="text-[11px] text-stone-400">Modern Civic Institution</p>
            <ul className="space-y-1.5 text-stone-400">
              <li><button onClick={() => onSelectTemplate('t2', 't2-hero')} className="hover:text-white">Institutional Mission</button></li>
              <li><button onClick={() => onSelectTemplate('t2', 't2-about')} className="hover:text-white">Governance & Filings</button></li>
              <li><button onClick={() => onSelectTemplate('t2', 't2-programs')} className="hover:text-white">Programs Index</button></li>
              <li><button onClick={() => onSelectTemplate('t2', 't2-research')} className="hover:text-white">Research Archive</button></li>
            </ul>
          </div>

          {/* Template 3 Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#D68D82] uppercase tracking-wider text-xs">Concept 3</h4>
            <p className="text-[11px] text-stone-400">Warm Editorial Magazine</p>
            <ul className="space-y-1.5 text-stone-400">
              <li><button onClick={() => onSelectTemplate('t3', 't3-hero')} className="hover:text-[#F7E8E8]">Hero & Bento Metrics</button></li>
              <li><button onClick={() => onSelectTemplate('t3', 't3-whatwedo')} className="hover:text-[#F7E8E8]">What We Do</button></li>
              <li><button onClick={() => onSelectTemplate('t3', 't3-programs')} className="hover:text-[#F7E8E8]">Programs Bento</button></li>
              <li><button onClick={() => onSelectTemplate('t3', 't3-donate')} className="hover:text-[#F7E8E8]">Giving & Tiers</button></li>
            </ul>
          </div>

        </div>

        {/* Land Acknowledgement Bar */}
        <div className="pt-8 border-t border-stone-800 text-[11px] text-stone-400 space-y-2 leading-relaxed">
          <span className="font-bold uppercase tracking-wider text-stone-300 block">
            Land Acknowledgement
          </span>
          <p className="max-w-5xl">
            {ORG_DATA.landAcknowledgement}
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>2022 © FUTURE BLACK FEMALE • WEBSITE & BRANDING BY STELLA THE STUDIO • ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenDonate} className="text-amber-400 hover:underline font-bold flex items-center gap-1">
              <Heart className="w-3 h-3 fill-amber-400" />
              <span>Donate to FBF</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

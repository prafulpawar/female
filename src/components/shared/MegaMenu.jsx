import React from 'react';
import { ArrowRight, BookOpen, HeartHandshake, TrendingUp, Briefcase, Award, Sparkles, ExternalLink } from 'lucide-react';
import { PROGRAMS, TRAILBLAZERS_ANNOUNCEMENT } from '../../data/fbfData';

export default function MegaMenu({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const categories = [
    {
      title: "Mental Health & Healing",
      icon: HeartHandshake,
      color: "text-rose-600 bg-rose-50",
      items: [
        { name: "Udada Sisterhood Circle", desc: "Culturally grounded group psychotherapy & peer healing" },
        { name: "Ujamaa Youth Initiative", desc: "Trauma-informed restorative counseling for Black youth" },
        { name: "Clinical Practitioner Toolkit", desc: "Culturally responsive care glossaries and guidelines" }
      ]
    },
    {
      title: "Financial Wellbeing",
      icon: TrendingUp,
      color: "text-amber-600 bg-amber-50",
      items: [
        { name: "Wealth & Credit Literacy", desc: "Workshops on budgeting, investing & credit confidence" },
        { name: "Youth Entrepreneurship Incubator", desc: "Seed capitalization & business mentorship" },
        { name: "Emergency Hardship Bursaries", desc: "Direct student relief and essential living bursaries" }
      ]
    },
    {
      title: "Career & Education",
      icon: Briefcase,
      color: "text-blue-600 bg-blue-50",
      items: [
        { name: "1-on-1 Mentorship Match", desc: "Direct pairing with executive leaders & industry mentors" },
        { name: "Future Black Trailblazers Award", desc: "$500 scholarship for incoming Brock University students" },
        { name: "Melanin & Manuscripts Book Club", desc: "Literary sisterhood centering Pan-African authors" }
      ]
    }
  ];

  return (
    <div 
      className="absolute top-full left-0 right-0 z-50 bg-white border-b border-stone-200 shadow-2xl animate-fade-in text-[#1B2828] font-dm"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Header of Mega Menu */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D48B28]">
              Intersectional Care Portfolio
            </span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs text-stone-600 font-medium">12 Active Community Programs Across Canada</span>
          </div>

          <button
            onClick={() => {
              onNavigate('programs');
              onClose();
            }}
            className="text-xs font-bold uppercase tracking-wider text-[#D48B28] hover:text-[#b8761d] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All 12 Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Categories + Featured Spotlight Card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">
                    {cat.title}
                  </h4>
                </div>

                <ul className="space-y-3">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <button
                        onClick={() => {
                          onNavigate('programs');
                          onClose();
                        }}
                        className="text-left group w-full"
                      >
                        <span className="block text-xs font-bold text-stone-800 group-hover:text-[#D48B28] transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-[11px] text-stone-500 leading-snug mt-0.5">
                          {item.desc}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Featured Spotlight Card */}
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D48B28] text-white text-[10px] font-bold uppercase tracking-wider">
                Featured Scholarship
              </span>
              <h5 className="font-quando font-normal text-base text-stone-900 leading-snug">
                Future Black Trailblazers Award
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                $500 Academic Award for incoming Black students enrolling at Brock University.
              </p>
            </div>

            <a
              href={TRAILBLAZERS_ANNOUNCEMENT.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#1B2828] hover:bg-[#2b3e3e] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Apply Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

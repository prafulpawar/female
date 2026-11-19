import React from 'react';
import { ArrowRight, Check, Palette, Building2, BookOpen } from 'lucide-react';

export default function TemplateComparison({ onSelectTemplate }) {
  const templates = [
    {
      id: 't1',
      title: 'Concept 1: Authentic Brand Original',
      subtitle: 'Live Site Identity • Royal Violet & Electric Magenta',
      icon: Palette,
      badge: 'Live Site 1:1 Design',
      badgeColor: 'bg-purple-100 text-[#8558CE] border-purple-300',
      description: 'The exact design from futureblackfemale.com matching the 15 live screenshots. Features the iconic purple-to-pink gradient, Quando serif headlines, butter yellow pill buttons, overlapping intro card, 3 tall pillar cards, 3 numbered circles, Canadian funders strip, floating callout, and 12 horizontal split program cards.',
      swatches: [
        { name: 'Royal Violet', hex: '#8558CE' },
        { name: 'Electric Magenta', hex: '#D81B60' },
        { name: 'Butter Yellow', hex: '#FDF289', border: true },
        { name: 'Sky Cyan', hex: '#2E86AB' },
        { name: 'Pure White', hex: '#FFFFFF', border: true }
      ],
      typography: {
        display: 'Quando (Authentic FBF Live Site Serif)',
        body: 'DM Sans / System Sans'
      },
      keyFeatures: [
        'Hero with purple-to-pink gradient & rounded white-framed photo card',
        'Overlapping intro card (left photo, right purple box with butter yellow title)',
        '3 tall rounded pillar cards with solid Blue, Purple, Magenta bottom bars',
        'Motivation section with 3 numbered outlined circles (1, 2, 3)',
        'Canadian Funders strip: CWF, NCF, Women and Gender Equality Canada',
        'Floating callout box with butter yellow GET IN TOUCH button',
        '12 Horizontal split program cards with category tags & LEARN MORE > buttons'
      ],
      buttonColor: 'bg-[#8558CE] hover:bg-[#6f42b8] text-white',
      cardBorder: 'border-purple-200'
    },
    {
      id: 't2',
      title: 'Concept 2: Canadian Civic Institution',
      subtitle: 'Civic Trust & Equity • Canadian Navy & Harvest Amber',
      icon: Building2,
      badge: 'Public Policy & Foundation',
      badgeColor: 'bg-blue-50 text-[#1B365D] border-blue-200',
      description: 'A clean, bright, dignified Canadian non-profit & civic foundation design. Built on a crisp, light background with dignified Canadian Navy (#1B365D), Harvest Amber (#D97706), and warm human imagery. Features an open split hero with 4-column metric strip, human intro story, 3 clean civic pillar cards with top photography, a dignified navy community engagement container, and a 12-program card grid.',
      swatches: [
        { name: 'Canadian Navy', hex: '#1B365D' },
        { name: 'Harvest Amber', hex: '#D97706' },
        { name: 'Clean Pearl Slate', hex: '#F8FAFC', border: true },
        { name: 'Pure White', hex: '#FFFFFF', border: true },
        { name: 'Deep Charcoal', hex: '#1E293B' }
      ],
      typography: {
        display: 'Dignified Serif (Institutional Mandate)',
        body: 'Plus Jakarta Sans (Humanist Grotesque)'
      },
      keyFeatures: [
        'Bright, human split hero with CRA Charity accreditation & 4-column metric strip',
        'Clean 2-column intro story card (photo on left, inviting story card on right)',
        '3 clean civic pillar cards with top photography & distinct category badges',
        'Community engagement methodology in dignified Canadian Navy container',
        'Clean Canadian Grantor & Funders registry (CWF, NCF, WAGE Canada)',
        '12-Program community grid with category filters & registration links',
        'Future Black Trailblazers Award endowment feature & 11 Core Values list'
      ],
      buttonColor: 'bg-[#1B365D] hover:bg-[#152B4A] text-white',
      cardBorder: 'border-slate-300'
    },
    {
      id: 't3',
      title: 'Concept 3: Warm Editorial & Feminine Modern',
      subtitle: 'Editorial Warmth • Muted Burgundy, Ivory & Champagne',
      icon: BookOpen,
      badge: 'Warm Editorial & Magazine',
      badgeColor: 'bg-[#F7E8E8] text-[#873F50] border-[#D68D82]/40',
      description: 'A warm, empowering Canadian feminist magazine & editorial publication. Features a literary cover story hero with journal masthead, an asymmetrical 4-cell sisterhood bento grid, an editorial manifesto with sticky chapter cards, an oversized flagship feature spread, and an intimate sisterhood values monograph.',
      swatches: [
        { name: 'Muted Burgundy', hex: '#873F50' },
        { name: 'Warm Ivory', hex: '#FFF9F2', border: true },
        { name: 'Soft Champagne', hex: '#D9B879' },
        { name: 'Dusty Terracotta', hex: '#D68D82' },
        { name: 'Deep Espresso', hex: '#34252A' }
      ],
      typography: {
        display: 'Playfair Display / Quando (Warm Editorial Serif)',
        body: 'Airy Humanist Grotesque'
      },
      keyFeatures: [
        'Magazine Cover Story Hero with journal issue masthead & 3-cell bento metric stamps',
        'Asymmetrical 4-Cell Sisterhood Bento Grid (Mental Health, Capital, Academics, Literature)',
        'Editorial Storytelling Manifesto with sticky title & 3 structured chapter cards',
        'Clean Editorial Patrons showcase with delicate hairline borders',
        'Floating Burgundy pull-quote & Intern Voices Community Journal spread',
        '12-Program Magazine Spread with oversized flagship feature story & alternating bento cards',
        'Sisterhood Monograph About Page with Trailblazers Fellowship & Values Tapestry'
      ],
      buttonColor: 'bg-[#873F50] hover:bg-[#6e3140] text-[#FFF9F2]',
      cardBorder: 'border-[#EAD5D5]'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
            Architectural Review
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
            Compare The Three Live Design Concepts
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            All three concepts faithfully mirror the exact layout, section structure, and content from the live screenshots of Future Black Female—differentiated by intentional, human-designed color schemes.
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {templates.map((tpl) => {
            const Icon = tpl.icon;
            return (
              <div
                key={tpl.id}
                className={`bg-white rounded-2xl border ${tpl.cardBorder} p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition-all`}
              >
                <div className="space-y-5">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${tpl.badgeColor}`}>
                      {tpl.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                      {tpl.title}
                    </h3>
                    <p className="text-xs font-semibold text-stone-500 mt-1">
                      {tpl.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {tpl.description}
                  </p>

                  {/* Palette Swatches */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block font-mono">
                      Color Palette
                    </span>
                    <div className="flex items-center gap-2">
                      {tpl.swatches.map((swatch) => (
                        <div
                          key={swatch.hex}
                          className="group relative"
                          title={`${swatch.name}: ${swatch.hex}`}
                        >
                          <div
                            className={`w-7 h-7 rounded-md shadow-2xs ${swatch.border ? 'border border-stone-300' : ''}`}
                            style={{ backgroundColor: swatch.hex }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Pairings */}
                  <div className="space-y-1 pt-2 border-t border-stone-100 text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block font-mono">
                      Typography
                    </span>
                    <p className="text-stone-800 font-semibold">{tpl.typography.display}</p>
                    <p className="text-stone-500">{tpl.typography.body}</p>
                  </div>

                  {/* Key Implementation Highlights */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block font-mono">
                      Screenshot Elements Implemented
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {tpl.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <button
                    onClick={() => onSelectTemplate(tpl.id)}
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-md active:scale-95 ${tpl.buttonColor}`}
                  >
                    <span>Open & Explore Template</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Quick Section Shortcuts */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 px-2 pt-1">
                    <button
                      onClick={() => onSelectTemplate(tpl.id, 'home')}
                      className="hover:text-stone-900 hover:underline"
                    >
                      Home
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => onSelectTemplate(tpl.id, 'about')}
                      className="hover:text-stone-900 hover:underline"
                    >
                      About
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => onSelectTemplate(tpl.id, 'programs')}
                      className="hover:text-stone-900 hover:underline"
                    >
                      Programs
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => onSelectTemplate(tpl.id, 'contact')}
                      className="hover:text-stone-900 hover:underline"
                    >
                      Contact
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

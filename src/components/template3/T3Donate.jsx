import React, { useState } from 'react';
import { PARTNERSHIP_TIERS, IMPACT_METRICS } from '../../data/fbfData';
import { Heart, Check, ArrowUpRight, ShieldCheck, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export default function T3Donate({ onOpenDonate }) {
  const [selectedAmount, setSelectedAmount] = useState('25');

  const impactPerAmount = {
    '5': 'Subsidizes monthly community drop-in supplies & peer therapy materials for 1 youth.',
    '25': 'Funds 1 full pro-Black therapy session with a licensed, culturally safe practitioner.',
    '50': 'Underwrites comprehensive financial capability workshops & seed workbook kits.',
    '100': 'Provides one month of 1-on-1 executive mentorship & academic transition advisement.',
    '250': 'Directly sponsors student bursary packages for secondary & post-secondary scholars.'
  };

  return (
    <div id="t3-donate" className="text-[#34252A] font-sans">
      
      {/* 1. HERO CONTRIBUTION CALCULATOR (Full Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-b border-[#6e3140] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#D9B879] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
                <Heart className="w-3.5 h-3.5 fill-[#D9B879] text-[#D9B879]" />
                <span>SUPPORT FUTURE BLACK FEMALE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FFF9F2] leading-tight">
                Fuel Generational Change
              </h2>

              <p className="text-[#FFF9F2]/90 text-base sm:text-lg leading-relaxed font-light">
                Your support fuels transformative change for Black girls and young women across Canada. By donating even <strong>$5 a month</strong>, you provide mentorship, mental healthcare, and resources that drive educational and career growth.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDonate}
                  className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-slate-950" />
                  <span>Make a Contribution</span>
                </button>

                <span className="text-xs text-[#FFF9F2]/75 font-mono">
                  CRA Registered Charity: <strong>79425 9531 RR0001</strong>
                </span>
              </div>
            </div>

            {/* Quick Contribution Impact Calculator */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-[2.5rem] bg-white text-[#34252A] shadow-2xl border border-white/20 space-y-5 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50]">Monthly Impact Calculator</span>
                  <span className="text-[10px] font-mono font-bold bg-[#F7E8E8] text-[#873F50] px-2.5 py-0.5 rounded-full">100% TAX DEDUCTIBLE</span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {['5', '25', '50', '100', '250'].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSelectedAmount(amt)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedAmount === amt
                          ? 'bg-[#873F50] text-white shadow-xs'
                          : 'bg-slate-50 hover:bg-[#FFF9F2] text-[#34252A] border border-slate-200'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-[#FFF9F2] rounded-2xl border border-[#EAD5D5] space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#873F50] block">
                    ${selectedAmount} / MONTH YOUTH DIRECT OUTCOME:
                  </span>
                  <p className="text-xs text-[#34252A]/85 leading-relaxed font-light">
                    {impactPerAmount[selectedAmount]}
                  </p>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="w-full py-3.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Pledge ${selectedAmount} / Month (CAD)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INSTITUTIONAL SPONSORSHIP TIERS (Full Warm Cream Background) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              CORPORATE ALLIES & BENEFACTORS
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-[#34252A]">
              Partnership Tiers
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/70 font-light">
              100% of corporate contributions are eligible as official business deductions or charitable tax receipts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {PARTNERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                      {tier.badge}
                    </span>
                    <span className="text-xs text-[#34252A]/50 font-mono font-bold">Tier 0{idx + 1}</span>
                  </div>

                  <div>
                    <h4 className="text-xl font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors">{tier.tier}</h4>
                    <div className="text-2xl font-quando font-normal text-[#873F50] mt-1">{tier.amount}</div>
                    <p className="text-xs text-[#34252A]/60 mt-1 italic">{tier.subtitle}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-[#34252A]/75 font-light">
                    {tier.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenDonate}
                    className="w-full py-3 rounded-full bg-[#F7E8E8] group-hover:bg-[#873F50] text-[#873F50] group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center shadow-2xs"
                  >
                    Select {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WHERE EVERY DOLLAR GOES: SISTERHOOD ACCOUNTABILITY (Full Royal Purple Background) */}
      <section className="py-20 sm:py-28 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
              RADICAL TRANSPARENCY
            </span>
            <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF289] tracking-tight">
              Where Your Investment Goes
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-light">
              Every dollar contributed translates directly into tangible mental health services, academic bursaries, and youth stipends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/pillar_mental_health.jpg"
                  alt="Free Therapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#FDF289] font-bold">1,750+ SESSIONS</span>
                <h3 className="font-quando text-lg text-white font-normal">Culturally Safe Therapy</h3>
                <p className="text-xs text-white/75 font-light">Free sessions with Black clinical psychologists.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/intern_nappy.jpg"
                  alt="Brock U Scholarships"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#FDF289] font-bold">$500 GRANTS</span>
                <h3 className="font-quando text-lg text-white font-normal">Brock U Trailblazers</h3>
                <p className="text-xs text-white/75 font-light">Annual scholarship awards for incoming scholars.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/pillar_financial.jpg"
                  alt="Micro-grants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#FDF289] font-bold">DIRECT RELIEF</span>
                <h3 className="font-quando text-lg text-white font-normal">Youth Micro-Grants</h3>
                <p className="text-xs text-white/75 font-light">Emergency funding for transit, food, and books.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl group">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src="/images/live_site/intern_bestbe.jpg"
                  alt="Paid Internships"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#FDF289] font-bold">LIVING WAGES</span>
                <h3 className="font-quando text-lg text-white font-normal">Youth Fellowships</h3>
                <p className="text-xs text-white/75 font-light">Paid CSJ employment building research careers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIDUCIARY GUARANTEE (Full Butter Yellow Background) */}
      <section className="py-16 sm:py-20 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#FDF289] text-slate-950 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-quando text-xl text-white font-normal">
                  CRA Registered Charity: #79425 9531 RR0001
                </h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Official Canadian tax receipts issued immediately via email for every donation. For bank wires or securities transfer, contact{' '}
                  <a href="mailto:accounting@futureblackfemale.com" className="font-bold underline text-[#FDF289]">
                    accounting@futureblackfemale.com
                  </a>.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

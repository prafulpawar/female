import React, { useState } from 'react';
import { PARTNERSHIP_TIERS, IMPACT_METRICS } from '../../data/fbfData';
import { Heart, Check, ArrowUpRight, ShieldCheck } from 'lucide-react';

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
    <section id="t3-donate" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
              <Heart className="w-3.5 h-3.5 fill-[#873F50]" />
              <span>SUPPORT FUTURE BLACK FEMALE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#34252A] leading-tight">
              Fuel Generational Change
            </h2>

            <p className="text-[#34252A]/85 text-base leading-relaxed font-light">
              Your support fuels transformative change for Black girls and young women across Canada. By donating even <strong>$5 a month</strong>, you provide mentorship, mental healthcare, and resources that drive educational and career growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="px-8 py-3.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Make a Contribution</span>
              </button>

              <span className="text-xs text-[#34252A]/60">
                Charity Number: <strong>79425 9531 RR0001</strong>
              </span>
            </div>
          </div>

          {/* Quick Contribution Impact Calculator */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#F7E8E8]/90 border border-[#EAD5D5] shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAD5D5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#873F50]">Monthly Impact Calculator</span>
                <span className="text-[10px] font-mono font-bold bg-white text-[#873F50] px-2 py-0.5 rounded-full">RECURRING</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {['5', '25', '50', '100', '250'].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedAmount === amt
                        ? 'bg-[#873F50] text-white shadow-xs'
                        : 'bg-white hover:bg-[#FFF9F2] text-[#34252A] border border-[#EAD5D5]'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#EAD5D5] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#873F50] block">
                  ${selectedAmount} / MONTH YOUTH DIRECT OUTCOME:
                </span>
                <p className="text-xs text-[#34252A]/80 leading-relaxed font-light">
                  {impactPerAmount[selectedAmount]}
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Pledge ${selectedAmount} / Month</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 6 Partnership Tiers Bento Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#873F50]">INSTITUTIONAL SPONSORSHIP</span>
            <h3 className="text-3xl font-serif font-bold text-[#34252A]">Partnership Tiers</h3>
            <p className="text-xs sm:text-sm text-[#34252A]/70 font-light">
              100% of corporate contributions are eligible as business marketing expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#F7E8E8] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7E8E8] text-[#873F50]">
                      {tier.badge}
                    </span>
                    <span className="text-xs text-[#34252A]/40 font-mono font-bold">Tier 0{idx + 1}</span>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif font-bold text-[#34252A]">{tier.tier}</h4>
                    <div className="text-2xl font-serif font-black text-[#873F50] mt-1">{tier.amount}</div>
                    <p className="text-xs text-[#34252A]/60 mt-1 italic">{tier.subtitle}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#F7E8E8] text-xs text-[#34252A]/75 font-light">
                    {tier.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F7E8E8]">
                  <button
                    onClick={onOpenDonate}
                    className="w-full py-2.5 rounded-full bg-[#F7E8E8] group-hover:bg-[#873F50] text-[#873F50] group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                  >
                    Select {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fiduciary tax info */}
        <div className="p-4 rounded-2xl bg-[#F7E8E8]/70 border border-[#EAD5D5] text-xs text-[#34252A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#873F50] shrink-0" />
            <span>
              If you require a tax receipt or have questions, contact the Treasurer at{' '}
              <a href="mailto:accounting@futureblackfemale.com" className="font-bold underline text-[#873F50]">
                accounting@futureblackfemale.com
              </a>.
            </span>
          </div>
          <span className="text-[11px] text-[#34252A]/60 shrink-0">Charity: 79425 9531 RR0001</span>
        </div>

      </div>
    </section>
  );
}

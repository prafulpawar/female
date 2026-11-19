import React, { useState } from 'react';
import { Heart, Shield, Check, ArrowRight } from 'lucide-react';
import { PARTNERSHIP_TIERS, ORG_DATA } from '../../data/fbfData';

export default function T2DonateTiers({ onOpenModal }) {
  const [freq, setFreq] = useState('monthly');
  const [amt, setAmt] = useState(50);
  const [custom, setCustom] = useState('');
  const [donated, setDonated] = useState(false);

  const presets = [5, 25, 50, 100, 250];

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonated(true);
    setTimeout(() => setDonated(false), 5000);
  };

  const currentAmt = custom ? parseFloat(custom) : amt;

  return (
    <section id="t2-donate" className="py-16 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Donation Briefing & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Charitable Giving
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-slate-900 leading-tight">
              Direct Charitable Impact
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Every dollar contributed goes directly toward delivering culturally responsive mental health therapy, university transition clinics, and paid workforce internships for Black girls and young women.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Shield className="w-4 h-4 text-[#7C3AED]" />
                <span>Canadian Registered Charity CRA #{ORG_DATA.charityNumber}</span>
              </div>
              <p className="font-light">
                Eligible for full charitable tax credit deductions under the Canada Revenue Agency. Instant tax receipts are generated for gifts of $10 or more.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-6">
              
              <div className="flex rounded-full bg-slate-200 p-1">
                <button
                  type="button"
                  onClick={() => setFreq('monthly')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                    freq === 'monthly' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Sustaining Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFreq('one-time')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                    freq === 'one-time' ? 'bg-[#7C3AED] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Contribution
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select Amount (CAD)
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmt(val);
                        setCustom('');
                      }}
                      className={`py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        amt === val && !custom
                          ? 'bg-[#7C3AED] text-white border-[#7C3AED] shadow-sm'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-500 font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Other Amount"
                    value={custom}
                    onChange={(e) => {
                      setCustom(e.target.value);
                      setAmt(0);
                    }}
                    className="w-full pl-8 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#7C3AED] font-semibold"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#FDF289] hover:bg-[#FBE850] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-slate-950" />
                  <span>
                    Confirm Contribution (${currentAmt || 0} {freq === 'monthly' ? '/ Month' : ''})
                  </span>
                </button>
              </form>

              {donated && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center font-medium flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Thank you! Your donation receipt has been dispatched.</span>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Corporate Partnerships */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Corporate & Foundation Sponsors
            </span>
            <h3 className="text-2xl sm:text-3xl font-quando font-normal text-slate-900">
              Partnership Tiers (Build)
            </h3>
            <p className="text-slate-600 text-sm font-light">
              Strategic multi-year alignments driving systemic equity across Canadian industry and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-all shadow-2xs hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                      {tier.badge}
                    </span>
                    <span className="text-xl font-quando font-normal text-slate-900">
                      {tier.amount}
                    </span>
                  </div>

                  <h4 className="font-quando font-normal text-lg text-slate-900">
                    {tier.tier}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {tier.subtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                    {tier.benefits.slice(0, 4).map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:${ORG_DATA.contact.generalEmail}?subject=Partnership Inquiry: ${tier.tier}`}
                  className="w-full text-center py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                >
                  Inquire For Tier
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

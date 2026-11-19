import React, { useState } from 'react';
import { Heart, ShieldCheck, Check, DollarSign, ArrowRight } from 'lucide-react';
import { ORG_DATA, PARTNERSHIP_TIERS } from '../../data/fbfData';

export default function T1Donate({ onOpenModal }) {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly'); // 'once' | 'monthly'

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  return (
    <section id="donate" className="py-16 lg:py-20 bg-white text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Direct Donation Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Fuel the Movement
            </span>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal text-[#1B2828] leading-[1.25]">
              Invest in Black Girls and Young Women
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              Your charitable investment funds culturally grounded mental health sessions, living-wage paid internships, and financial literacy workshops across Canada.
            </p>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B2828]">
                <ShieldCheck className="w-4 h-4 text-[#D48B28]" />
                <span>Canadian Registered Charity #{ORG_DATA.charityNumber}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                All donations are 100% tax-deductible under Canadian law. Instant official tax receipts are issued for gifts of $10 or more.
              </p>
            </div>
          </div>

          {/* Interactive Donation Form Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border-2 border-[#1B2828]/10 shadow-sm space-y-6">
              
              {/* Frequency Selector */}
              <div className="flex rounded-lg bg-stone-200/70 p-1">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    frequency === 'monthly'
                      ? 'bg-[#1B2828] text-white shadow-xs'
                      : 'text-stone-700 hover:text-[#1B2828]'
                  }`}
                >
                  Give Monthly (Sustaining)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    frequency === 'once'
                      ? 'bg-[#1B2828] text-white shadow-xs'
                      : 'text-stone-700 hover:text-[#1B2828]'
                  }`}
                >
                  Give Once
                </button>
              </div>

              {/* Amount Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Select Gift Amount (CAD)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handlePresetClick(amt)}
                      className={`py-3 rounded-lg text-sm font-bold border transition-all ${
                        selectedAmount === amt
                          ? 'bg-[#D48B28] text-white border-[#D48B28] shadow-xs scale-102'
                          : 'bg-white border-[#E8DFC8] text-stone-800 hover:border-[#D48B28]'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Field */}
              <div className="space-y-1">
                <label className="text-xs text-stone-500">Or enter custom amount:</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Other Amount"
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-[#E8DFC8] rounded-lg text-sm text-[#1B2828] focus:outline-none focus:border-[#D48B28]"
                  />
                </div>
              </div>

              {/* Impact Message */}
              <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-stone-700">
                <strong>Impact of your ${selectedAmount || customAmount || 100} gift:</strong>{' '}
                {(selectedAmount || customAmount || 100) >= 250
                  ? 'Covers a full month of culturally grounded therapy for 2 youth.'
                  : (selectedAmount || customAmount || 100) >= 100
                  ? 'Funds 2 pro-Black psychotherapy sessions and learning supplies.'
                  : 'Provides essential career mentorship workshops and transit bursaries.'}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full py-3.5 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Complete ${selectedAmount || customAmount || 100} {frequency === 'monthly' ? 'Monthly' : 'One-Time'} Donation</span>
              </button>

            </div>
          </div>

        </div>

        {/* 2. Build: Corporate Partnerships & 6 Tiers */}
        <div className="pt-12 border-t border-[#E8DFC8] space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Institutional Alignment
            </span>
            <h3 className="text-2xl sm:text-3xl font-quando font-normal text-[#1B2828]">
              Corporate & Foundation Partnership Tiers
            </h3>
            <p className="text-stone-600 text-sm">
              Align your company's ESG, JEDI, and corporate social responsibility goals with measurable community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#D48B28] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D48B28]">
                      {tier.badge}
                    </span>
                    <span className="text-xl font-quando font-normal text-[#1B2828]">
                      {tier.amount}
                    </span>
                  </div>

                  <h4 className="font-quando font-normal text-lg text-[#1B2828]">
                    {tier.tier}
                  </h4>
                  <p className="text-xs text-stone-600 font-medium">
                    {tier.subtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-[#E8DFC8]">
                    {tier.benefits.slice(0, 4).map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#D48B28] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:${ORG_DATA.contact.generalEmail}?subject=Partnership Inquiry: ${tier.tier}`}
                  className="w-full text-center py-2.5 rounded-lg bg-[#1B2828] hover:bg-[#2b3e3e] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block shadow-xs"
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

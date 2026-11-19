import React, { useState } from 'react';
import { X, Heart, CheckCircle2, ShieldCheck, DollarSign, ArrowRight, ArrowLeft, Download, CreditCard, Lock } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';
import { useToast } from './ToastContext';

export default function DonateModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Amount & Slider, 2: Donor Details, 3: Payment & Tax Receipt, 4: Success
  const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'one-time'
  const [amount, setAmount] = useState(100);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [isDedication, setIsDedication] = useState(false);
  const [dedicationName, setDedicationName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8892');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('321');
  
  const { addToast } = useToast();

  if (!isOpen) return null;

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 3) {
      setStep(4);
      addToast({
        title: "Charitable Gift Confirmed!",
        message: `Thank you, ${donorName || 'Generous Supporter'}! Your official tax receipt for $${amount} has been logged.`,
        type: "success"
      });
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  // Estimated Canadian Federal + Provincial Tax Credit (approx ~33% average)
  const estimatedTaxCredit = Math.round(amount * 0.33);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fade-in font-dm text-stone-900">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Step Progress Bar */}
        <div className="p-6 bg-[#1B2828] text-white relative">
          <button 
            onClick={handleClose} 
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#F8F495] text-xs font-bold uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-[#F8F495]" />
            <span>Support Future Black Female</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-quando font-normal">
            Multi-Step Community Giving
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">
            Canadian Registered Charity #<strong>{ORG_DATA.charityNumber}</strong> • Tax Receipts Guaranteed
          </p>

          {/* 3-Step Progress Indicators */}
          {step < 4 && (
            <div className="pt-4 flex items-center justify-between text-[11px] font-semibold text-stone-300">
              <span className={step >= 1 ? 'text-[#F8F495] font-bold' : ''}>1. Amount & Frequency</span>
              <span>→</span>
              <span className={step >= 2 ? 'text-[#F8F495] font-bold' : ''}>2. Donor Info</span>
              <span>→</span>
              <span className={step >= 3 ? 'text-[#F8F495] font-bold' : ''}>3. Review & Tax Receipt</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {step === 4 ? (
            /* Step 4: Success Screen */
            <div className="py-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-quando font-normal text-stone-900">
                Thank You, {donorName || 'Generous Supporter'}!
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
                Your pledge of <strong className="text-stone-900">${amount} ({frequency})</strong> directly funds pro-Black psychotherapy sessions, youth bursaries, and career mentorship in Canada.
              </p>

              {/* Official Receipt Card */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl text-xs text-stone-700 text-left border border-[#E8DFC8] space-y-1.5">
                <div className="flex items-center justify-between border-b border-stone-200 pb-1.5 font-bold">
                  <span>Official Charitable Donation Confirmation</span>
                  <span className="text-[#D48B28]">RECEIPT #{Date.now().toString().slice(-6)}</span>
                </div>
                <p><strong>Charity:</strong> Future Black Female Inc.</p>
                <p><strong>Charity Reg No:</strong> {ORG_DATA.charityNumber}</p>
                <p><strong>Eligible Tax Amount:</strong> ${amount}.00 CAD</p>
                <p><strong>Est. Tax Credit:</strong> ~${estimatedTaxCredit}.00 CAD</p>
                <p><strong>Email:</strong> {donorEmail || ORG_DATA.contact.generalEmail}</p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-[#1B2828] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#2b3e3e] transition-colors shadow-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNextStep} className="space-y-5">
              
              {/* STEP 1: Amount Selection with Range Slider & Toggle Switch */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Frequency Toggle Switch */}
                  <div className="flex items-center justify-between p-1 bg-stone-100 rounded-xl border border-stone-200">
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                        frequency === 'monthly'
                          ? 'bg-[#1B2828] text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      Monthly Sustaining Gift
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                        frequency === 'one-time'
                          ? 'bg-[#1B2828] text-white shadow-xs'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      One-Time Contribution
                    </button>
                  </div>

                  {/* Range Slider for Donation Amount */}
                  <div className="space-y-3 p-4 bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                        Adjust Gift Amount (Range Slider)
                      </label>
                      <div className="text-2xl font-quando font-normal text-[#D48B28]">
                        ${amount} <span className="text-xs font-dm text-stone-500 font-normal">CAD</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="5"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full accent-[#D48B28] cursor-pointer"
                    />

                    <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
                      <span>$10 Min</span>
                      <span>$250</span>
                      <span>$500</span>
                      <span>$1,000 Max</span>
                    </div>
                  </div>

                  {/* Preset Amount Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Or Quick Select Preset
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                            amount === preset
                              ? 'bg-[#D48B28] text-white border-[#D48B28] shadow-xs'
                              : 'bg-white border-stone-200 hover:border-stone-400 text-stone-700'
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Impact Statement */}
                  <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-stone-700 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D48B28] mt-0.5 shrink-0" />
                    <span>
                      <strong>Impact of ${amount} {frequency}:</strong>{' '}
                      {amount >= 250
                        ? 'Funds 2 complete months of culturally grounded psychotherapy.'
                        : amount >= 100
                        ? 'Covers 2 pro-Black counseling sessions and peer sisterhood materials.'
                        : 'Provides transit stipends, career toolkits, and mentor workshop supplies.'}
                    </span>
                  </div>

                </div>
              )}

              {/* STEP 2: Donor Details */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Maya Robinson"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D48B28]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Email for Official Tax Receipt *
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D48B28]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Mailing Address (Required for CRA Receipt)
                    </label>
                    <input
                      type="text"
                      value={donorAddress}
                      onChange={(e) => setDonorAddress(e.target.value)}
                      placeholder="Street, City, Province, Postal Code"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#D48B28]"
                    />
                  </div>

                  {/* Dedication Toggle */}
                  <div className="pt-2 border-t border-stone-200">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isDedication}
                        onChange={(e) => setIsDedication(e.target.checked)}
                        className="rounded accent-[#D48B28]"
                      />
                      <span className="text-xs font-semibold text-stone-800">
                        Dedicate this donation in honor of someone
                      </span>
                    </label>

                    {isDedication && (
                      <input
                        type="text"
                        value={dedicationName}
                        onChange={(e) => setDedicationName(e.target.value)}
                        placeholder="In honor of / In memory of..."
                        className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg mt-2 focus:outline-none focus:border-[#D48B28]"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: Payment Method & Tax Credit Preview */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Payment Methods */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                      Select Payment Method (Simulation)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['card', 'interac', 'paypal'].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setPaymentMethod(m)}
                          className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all ${
                            paymentMethod === m
                              ? 'bg-[#1B2828] text-white border-[#1B2828]'
                              : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                          }`}
                        >
                          {m === 'card' ? 'Credit Card' : m === 'interac' ? 'Interac' : 'PayPal'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3 text-xs">
                      <div className="flex items-center gap-2 text-stone-600">
                        <CreditCard className="w-4 h-4 text-[#D48B28]" />
                        <span className="font-semibold">Simulated Card Payment:</span>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded font-mono text-xs"
                          placeholder="Card Number"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            className="px-3 py-1.5 bg-white border border-stone-300 rounded font-mono text-xs"
                            placeholder="MM/YY"
                          />
                          <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="px-3 py-1.5 bg-white border border-stone-300 rounded font-mono text-xs"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Summary & Tax Credit Preview */}
                  <div className="p-4 bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold text-stone-900">
                      <span>Donation Summary:</span>
                      <span className="text-[#D48B28] font-quando text-lg">${amount} CAD ({frequency})</span>
                    </div>
                    <div className="flex items-center justify-between text-stone-600 pt-1 border-t border-stone-200">
                      <span>Estimated Canadian Tax Savings:</span>
                      <span className="text-emerald-700 font-bold">~${estimatedTaxCredit} CAD</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span>Real Net Cost to You:</span>
                      <span className="font-bold text-stone-900">${amount - estimatedTaxCredit} CAD</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-stone-500">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>256-Bit SSL Encrypted & CRA Compliant Charity</span>
                  </div>

                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-4 py-2 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-stone-500">
                    CRA #{ORG_DATA.charityNumber}
                  </span>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <span>{step === 3 ? `Confirm $${amount} Donation` : 'Next Step'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

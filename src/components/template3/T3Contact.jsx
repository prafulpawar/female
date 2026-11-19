import React, { useState } from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { MapPin, Mail, Clock, Send, CheckCircle2, Sparkles, HeartHandshake, PhoneCall } from 'lucide-react';

export default function T3Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="t3-contact" className="text-[#34252A] font-sans">
      
      {/* 1. CONTACT CONSOLE & FORM (Full Warm Cream Background) */}
      <section className="py-20 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-mono font-bold uppercase tracking-widest border border-[#D68D82]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
              <span>DIRECT INQUIRIES & PARTNERSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
              Contact Future Black Female
            </h2>
            <p className="text-[#34252A]/80 text-base font-light leading-relaxed">
              If you are interested in any of our programs, clinical sessions, or institutional sponsorship, feel free to ask us what we can do in your local community.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Office Details */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50] block mb-1">
                  National Headquarters
                </span>
                <h3 className="text-2xl font-quando font-normal text-[#34252A]">
                  St. Catharines Office
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-stone-900 shadow-inner">
                <img
                  src="/images/live_site/hero_darina.jpg"
                  alt="Future Black Female headquarters location"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs text-[#34252A]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#873F50] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#34252A] block font-sans">Main Office</strong>
                    <span>{ORG_DATA.headOffice.address}</span><br />
                    <span>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span><br />
                    <span className="text-[#34252A]/60">Niagara Region, Ontario, Canada</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#873F50] shrink-0" />
                  <div>
                    <span className="text-[#34252A]/60 block text-[10px]">GENERAL EMAIL</span>
                    <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#873F50] font-bold hover:underline">
                      {ORG_DATA.contact.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#873F50] shrink-0" />
                  <div>
                    <span className="text-[#34252A]/60 block text-[10px]">OPERATING HOURS</span>
                    <span>Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD5D5]">
                <span className="text-[11px] text-[#34252A]/60 font-mono">
                  Registered Canadian Charity: <strong>{ORG_DATA.charityNumber}</strong>
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAD5D5] shadow-md text-left">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#F7E8E8] text-[#873F50] rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-quando font-normal text-[#34252A]">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-[#34252A]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#873F50]">{formData.firstName}</strong>. Our team will review your inquiry and reply to <strong className="text-[#873F50]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                    }}
                    className="px-8 py-3 rounded-full bg-[#873F50] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6e3140] transition-colors shadow-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50]">
                      SECURE COMMUNICATION
                    </span>
                    <h3 className="text-2xl font-quando font-normal text-[#34252A]">
                      Leave Us a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#34252A] mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD5D5] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#34252A] mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD5D5] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#34252A] mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD5D5] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#34252A] mb-1">Subject *</label>
                      <input
                        type="text"
                        required
                        placeholder="Program Inquiry / Sponsorship"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD5D5] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#34252A] mb-1">Leave us a message... *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell us what program or partnership you'd like to explore..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD5D5] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#34252A]/50">Replies within 1–2 business days.</span>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>SUBMIT NOTE</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 2. REGIONAL DROP-IN & SISTERHOOD LOUNGES (Full Royal Purple Background) */}
      <section className="py-20 sm:py-24 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
                IN-PERSON SISTERHOOD HUBS
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF289] leading-tight">
                Drop In & Connect with Us
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
                Our campus ambassadors and regional coordinators host monthly tea circles, quiet study rooms, and mental wellness check-ins across the Niagara Region, Hamilton, and Ottawa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1">
                  <strong className="text-white font-bold block text-sm">Brock University Hub</strong>
                  <span className="text-xs text-white/75 font-light">Student Centre Lounge • Bi-weekly Wednesdays</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1">
                  <strong className="text-white font-bold block text-sm">Downtown St. Catharines</strong>
                  <span className="text-xs text-white/75 font-light">Community Reading Sanctuary • Fridays 3–6 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/live_site/about_two_women.jpg"
                  alt="Sisterhood drop in"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CRISIS SUPPORT & MENTAL WELLNESS HOTLINE (Full Butter Yellow Background) */}
      <section className="py-16 sm:py-20 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-slate-950 text-[#FDF289] flex items-center justify-center mx-auto shadow-md">
            <PhoneCall className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="font-quando text-3xl sm:text-4xl text-slate-950 font-normal">
              Need Immediate Mental Health Support?
            </h3>
            <p className="text-slate-800 text-sm max-w-xl mx-auto font-light leading-relaxed">
              If you or a Black young woman you know is in acute distress, our Udada clinician triage can connect you with culturally safe, trauma-informed emergency support within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:mentalhealth@futureblackfemale.com"
              className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-[#FDF289] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
            >
              <span>Connect with Clinician Triage</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

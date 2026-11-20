import React, { useState } from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { MapPin, Mail, Clock, Send, CheckCircle2, PhoneCall, HeartHandshake, ArrowUpRight } from 'lucide-react';

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

      {/* 1. HERO (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="max-w-3xl space-y-4 text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-[#FDF289] inline-block">
              DIRECT INQUIRIES & PARTNERSHIPS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
              Contact Future Black Female
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
              Headquartered in St. Catharines, Niagara Region. Serving Black girls and young women across Canada and globally. Whether you need free therapy bursaries, scholarship guidance, or community partnership, we are here.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>General Inquiries: Mon–Fri 9am–5pm EST</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="text-[#FDF289] font-bold">CRA Charity:</span>
              <span>#{ORG_DATA.charityNumber}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CONTACT CONSOLE & FORM (Full Warm Cream Background) */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Office Details */}
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
                    <span className="text-[#34252A]/60 block text-[10px] font-mono">GENERAL EMAIL</span>
                    <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#873F50] font-bold hover:underline">
                      {ORG_DATA.contact.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#873F50] shrink-0" />
                  <div>
                    <span className="text-[#34252A]/60 block text-[10px] font-mono">OPERATING HOURS</span>
                    <span>Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD5D5]">
                <span className="text-[11px] text-[#34252A]/60 font-mono">
                  Registered Canadian Charity: <strong>#{ORG_DATA.charityNumber}</strong>
                </span>
              </div>
            </div>

            {/* Right: Interactive Form */}
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
                    className="px-8 py-3 rounded-full bg-[#873F50] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6e3140] transition-colors shadow-xs cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50] block mb-1">
                      Direct Messaging
                    </span>
                    <h3 className="text-2xl font-quando font-normal text-[#34252A]">
                      Send Us a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#34252A]/80 uppercase font-mono">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Nia"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAD5D5] bg-[#FAF8F5] text-xs text-[#34252A] focus:outline-hidden focus:border-[#873F50]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#34252A]/80 uppercase font-mono">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Campbell"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAD5D5] bg-[#FAF8F5] text-xs text-[#34252A] focus:outline-hidden focus:border-[#873F50]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#34252A]/80 uppercase font-mono">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nia@example.ca"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAD5D5] bg-[#FAF8F5] text-xs text-[#34252A] focus:outline-hidden focus:border-[#873F50]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#34252A]/80 uppercase font-mono">Subject / Topic *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#EAD5D5] bg-[#FAF8F5] text-xs text-[#34252A] focus:outline-hidden focus:border-[#873F50]"
                    >
                      <option value="">Select a topic...</option>
                      <option value="therapy">Therapy Bursary / Mental Health</option>
                      <option value="scholarship">Future Black Trailblazers Scholarship</option>
                      <option value="programs">Program Registration (Tech, Career, Arts)</option>
                      <option value="research">Research Partnership / Whitepaper Access</option>
                      <option value="donation">Donation / CRA Tax Receipt</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#34252A]/80 uppercase font-mono">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are looking for or how we can support you..."
                      className="w-full px-4 py-3 rounded-xl border border-[#EAD5D5] bg-[#FAF8F5] text-xs text-[#34252A] focus:outline-hidden focus:border-[#873F50] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to FBF Team</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 3. REGIONAL HUBS (Full Butter Yellow Background) */}
      <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] inline-block shadow-xs">
              COMMUNITY SANCTUARY HUBS
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-slate-950">
              Where We Gather Across Ontario
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-light">
              Collaborative community hubs and partner university spaces centering Black youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Hub 1 */}
            <div className="p-8 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50] block">
                HEADQUARTERS
              </span>
              <h4 className="font-quando font-normal text-xl text-[#34252A]">
                Niagara Region Hub
              </h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                St. Catharines HQ & Brock University Campus Pavilion. Hosting regional walkathons, scholarship award galas, and local bursary clinics.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-[#873F50] font-bold">
                St. Catharines, ON
              </div>
            </div>

            {/* Hub 2 */}
            <div className="p-8 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50] block">
                POLICY & INNOVATION
              </span>
              <h4 className="font-quando font-normal text-xl text-[#34252A]">
                Ottawa Capital Hub
              </h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Bayview Yards (Invest Ottawa) & Carleton University (BEKH). Facilitating Black Women in Tech roundtables and federal policy symposiums.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-[#873F50] font-bold">
                Ottawa, ON
              </div>
            </div>

            {/* Hub 3 */}
            <div className="p-8 rounded-3xl bg-white text-[#34252A] border border-amber-200 shadow-md space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#873F50] block">
                AFFILIATES
              </span>
              <h4 className="font-quando font-normal text-xl text-[#34252A]">
                Greater Toronto Hub
              </h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Campus partnerships, peer drop-in circles, and virtual Afrocentric therapeutic care reaching youth across the GTA.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-[#873F50] font-bold">
                Toronto, ON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-STEP INTAKE PROCESS (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold">
              WARM & SUPPORTIVE
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#34252A]">
              What Happens When You Reach Out
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              Clear, dignified support from a team that understands your lived experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                1
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Rapid Human Triage</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Within 24 business hours, our community coordinator reviews your note to identify the exact right practitioner or program.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Dedicated Matching</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                You are paired directly with an Afrocentric clinician, academic mentor, or project facilitator suited to your background.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAD5D5] shadow-xs space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#873F50] text-[#FFF9F2] font-quando text-xl flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <h4 className="font-quando font-normal text-lg text-[#34252A]">Immediate Access</h4>
              <p className="text-xs text-[#34252A]/75 leading-relaxed font-light">
                Receive confidential bursary onboarding, invitation to retreats, or project kickoff with ongoing community care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CRISIS & CULTURALLY RELEVANT HELPLINES (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FDF289] font-bold">
              URGENT SUPPORT DIRECTORY
            </span>
            <h3 className="font-quando text-3xl sm:text-5xl text-white font-normal">
              Need Immediate Mental Health Care?
            </h3>
            <p className="text-white/80 text-sm font-light">
              If you or a Black youth you know are in distress, access these 24/7 dedicated Canadian crisis lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#FDF289] block">BLACK YOUTH HELPLINE</span>
              <h4 className="font-quando text-xl text-white font-normal">1-833-294-8650</h4>
              <p className="text-xs text-white/80 font-light">Available 9am–10pm EST nationwide for youth, parents, and schools.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#FDF289] block">CRISIS SUICIDE PREVENTION</span>
              <h4 className="font-quando text-xl text-white font-normal">Call or Text 9-8-8</h4>
              <p className="text-xs text-white/80 font-light">24/7 bilingual, trauma-informed suicide crisis helpline across Canada.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#FDF289] block">HOPE FOR WELLNESS</span>
              <h4 className="font-quando text-xl text-white font-normal">1-855-242-3310</h4>
              <p className="text-xs text-white/80 font-light">24/7 culturally competent counseling and telephone intervention.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

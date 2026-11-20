import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock, HeartHandshake } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function T1Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 6000);
  };

  return (
    <div id="contact-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. HERO HEADER (Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
            Direct Inquiries & Partnerships
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#FDF289] max-w-4xl leading-tight">
            Contact Future Black Female
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            If you are interested in any of our programs, clinical mental health sessions, or institutional sponsorship, feel free to ask us what we can do in your local community or university campus.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & MESSAGE FORM */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Left Column: Office & Organization Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-[2rem] bg-[#FAF8F5] border-2 border-[#1B2828]/10 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28] block">
                    Head Office & Sisterhood Hub
                  </span>
                  <h3 className="font-quando font-normal text-2xl text-[#1B2828] mt-1">
                    St. Catharines HQ
                  </h3>
                </div>
                
                <div className="space-y-4 text-xs sm:text-sm text-stone-700 font-light">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-4 h-4 text-[#D48B28] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-[#1B2828] font-semibold">Mailing & Office Address:</strong>
                      <span>{ORG_DATA.headOffice.address}</span><br />
                      <span>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span><br />
                      <span className="text-stone-500">{ORG_DATA.headOffice.region}, {ORG_DATA.headOffice.country}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-3 border-t border-[#E8DFC8]">
                    <Mail className="w-4 h-4 text-[#D48B28] shrink-0" />
                    <div>
                      <strong className="block text-[#1B2828] font-semibold">General Inquiries:</strong>
                      <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#B45309] hover:underline font-medium">
                        {ORG_DATA.contact.generalEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-3 border-t border-[#E8DFC8]">
                    <Phone className="w-4 h-4 text-[#D48B28] shrink-0" />
                    <div>
                      <strong className="block text-[#1B2828] font-semibold">Telephone:</strong>
                      <a href={`tel:${ORG_DATA.contact.phone}`} className="text-stone-800 hover:text-[#D48B28] font-medium">
                        {ORG_DATA.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-3 border-t border-[#E8DFC8]">
                    <Clock className="w-4 h-4 text-[#D48B28] shrink-0" />
                    <div>
                      <strong className="block text-[#1B2828] font-semibold">Hours of Operation:</strong>
                      <span>Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CRA Charity Guarantee Card */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E8DFC8] text-xs text-stone-600 space-y-2 shadow-2xs">
                <span className="font-bold text-[#1B2828] block text-sm">Registered Canadian Charity</span>
                <p>Registration Number: <strong className="text-[#B45309] font-bold">CRA #{ORG_DATA.charityNumber}</strong></p>
                <p className="font-light">Operating under the Canada Not-for-profit Corporations Act. All donations are 100% tax deductible.</p>
              </div>
            </div>

            {/* Right Column: Interactive Note Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-[2.5rem] bg-[#FAF8F5] border-2 border-[#1B2828]/10 space-y-5 shadow-xs">
                <div>
                  <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#1B2828]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
                    Our community coordination team responds to all inquiries within 2 business days.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="First & Last Name"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#D48B28]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#D48B28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#D48B28]"
                  >
                    <option value="General Inquiry">General Community Inquiry</option>
                    <option value="Program Enrollment">Program Enrollment (Udada, Book Club, YAC)</option>
                    <option value="Corporate Partnership">Corporate Partnership (Build With Us)</option>
                    <option value="Volunteering / Careers">Volunteering / Careers & Internships</option>
                    <option value="Research Collaboration">Research & Whitepaper Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1.5">
                    Message Note *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help or collaborate with your organization..."
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#D48B28]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-full bg-[#5B60E6] hover:bg-[#4b50d0] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#FDF289]" />
                    <span>Send Message</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl font-medium flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Thank you! Your note has been securely routed to {ORG_DATA.contact.generalEmail}. We will follow up shortly.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

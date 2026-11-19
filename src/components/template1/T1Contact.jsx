import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
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
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
            Contact Future Black Female
          </h2>
          <p className="text-stone-700 text-base leading-relaxed">
            If you are interested in any of our programs, feel free to ask us what we can do in your school, university, or community organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] space-y-4">
              <h3 className="font-quando font-normal text-lg text-[#1B2828]">
                Head Office
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D48B28] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#1B2828]">St. Catharines HQ:</span>
                    <span>{ORG_DATA.headOffice.address}</span><br />
                    <span>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span><br />
                    <span className="text-stone-500">{ORG_DATA.headOffice.region}, {ORG_DATA.headOffice.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E8DFC8]">
                  <Mail className="w-4 h-4 text-[#D48B28] shrink-0" />
                  <div>
                    <span className="font-bold block text-[#1B2828]">General Inquiries:</span>
                    <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#D48B28] hover:underline">
                      {ORG_DATA.contact.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E8DFC8]">
                  <Phone className="w-4 h-4 text-[#D48B28] shrink-0" />
                  <div>
                    <span className="font-bold block text-[#1B2828]">Phone:</span>
                    <a href={`tel:${ORG_DATA.contact.phone}`} className="text-stone-800 hover:text-[#D48B28]">
                      {ORG_DATA.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8DFC8] text-xs text-stone-600 space-y-1 shadow-2xs">
              <span className="font-bold text-[#1B2828] block">Registered Canadian Charity</span>
              <p>Registration Number: <strong className="text-[#D48B28] font-bold">{ORG_DATA.charityNumber}</strong></p>
              <p>Operating under the Canada Not-for-profit Corporations Act.</p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#FAF8F5] border-2 border-[#1B2828]/10 space-y-4 shadow-xs">
              <h3 className="font-quando font-normal text-xl text-[#1B2828] mb-2">
                Send Us a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="First & Last Name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DFC8] rounded-lg focus:outline-none focus:border-[#D48B28]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DFC8] rounded-lg focus:outline-none focus:border-[#D48B28]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DFC8] rounded-lg focus:outline-none focus:border-[#D48B28]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Program Enrollment">Program Enrollment (Udada, Book Club, etc.)</option>
                  <option value="Corporate Partnership">Corporate Partnership (Build)</option>
                  <option value="Volunteering / Careers">Volunteering / Careers</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help or collaborate with you?"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DFC8] rounded-lg focus:outline-none focus:border-[#D48B28]"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#1B2828] hover:bg-[#2b3e3e] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your inquiry has been routed to info@futureblackfemale.com.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

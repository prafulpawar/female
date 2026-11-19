import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function T2ContactConsole() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'General Inquiries',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', department: 'General Inquiries', message: '' });
    }, 5000);
  };

  return (
    <section id="t2-contact" className="py-16 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
            Institutional Communications
          </span>
          <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
            Contact Future Black Female
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-light">
            If you are interested in any of our programs, feel free to ask us what we can do in your school, university, or community organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Institutional Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 shadow-2xs">
              <h3 className="font-quando font-normal text-lg text-slate-900">
                Administrative Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Main Office:</span>
                    <span>{ORG_DATA.headOffice.address}</span><br />
                    <span>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span><br />
                    <span className="text-slate-500 font-light">{ORG_DATA.headOffice.region}, {ORG_DATA.headOffice.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <Mail className="w-5 h-5 text-[#7C3AED] shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-900">Official Inquiries:</span>
                    <a href={`mailto:${ORG_DATA.contact.generalEmail}`} className="text-[#7C3AED] hover:underline font-medium">
                      {ORG_DATA.contact.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <Phone className="w-5 h-5 text-[#7C3AED] shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-900">Telephone:</span>
                    <a href={`tel:${ORG_DATA.contact.phone}`} className="text-slate-800 hover:text-[#7C3AED]">
                      {ORG_DATA.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1 shadow-2xs">
              <span className="font-bold text-slate-900 block font-quando">Charity Registration</span>
              <p>CRA Registration: <strong className="text-slate-900">#{ORG_DATA.charityNumber}</strong></p>
              <p className="font-light">Incorporated under the Canada Not-for-profit Corporations Act.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <h3 className="font-quando font-normal text-xl text-slate-900 mb-2">
                Official Correspondence Dispatcher
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="First & Last Name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@organization.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Department
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#7C3AED]"
                >
                  <option value="General Inquiries">General Administrative Inquiries</option>
                  <option value="Clinical & Mental Health">Pro-Black Mental Health Services (Udada / Ujamaa)</option>
                  <option value="Corporate Sponsorship">Corporate & Foundation Partnerships (Build)</option>
                  <option value="Academic Collaboration">Academic & Research Collaboration</option>
                  <option value="Career & Internships">Careers, Internships & Volunteer Services</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your inquiry or institutional partnership proposal..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#7C3AED]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Dispatch</span>
                </button>
              </div>

              {sent && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dispatch recorded. An institutional representative will respond to your email.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

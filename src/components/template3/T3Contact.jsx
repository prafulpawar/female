import React, { useState } from 'react';
import { ORG_DATA } from '../../data/fbfData';
import { MapPin, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

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
    <section id="t3-contact" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30">
            <Sparkles className="w-3 h-3 text-[#D68D82]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#34252A] leading-tight">
            Contact Future Black Female
          </h2>
          <p className="text-[#34252A]/80 text-base font-light leading-relaxed">
            If you are interested in any of our programs, feel free to ask us what we can do in your local community.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Office Details */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#F7E8E8]/90 border border-[#EAD5D5] space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#873F50] block mb-1">
                Headquarters
              </span>
              <h3 className="text-xl font-serif font-bold text-[#34252A]">
                St. Catharines Office
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#34252A]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#873F50] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#34252A] block font-sans">Main Office</strong>
                  <span>{ORG_DATA.headOffice.address}</span><br />
                  <span>{ORG_DATA.headOffice.city}, {ORG_DATA.headOffice.province} {ORG_DATA.headOffice.postalCode}</span><br />
                  <span className="text-[#34252A]/60">Niagara Region, Canada</span>
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
                  <span className="text-[#34252A]/60 block text-[10px]">HOURS</span>
                  <span>Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAD5D5]">
              <span className="text-[11px] text-[#34252A]/60">
                Registered Charity No: <strong>{ORG_DATA.charityNumber}</strong>
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#F7E8E8] shadow-md">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F7E8E8] text-[#873F50] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#34252A]">Message Received!</h3>
                <p className="text-xs sm:text-sm text-[#34252A]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#873F50]">{formData.firstName}</strong>. Our team will review your inquiry and reply to <strong className="text-[#873F50]">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#873F50] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6e3140] transition-colors"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#34252A] mb-2">
                  Leave Us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#34252A] mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#F7E8E8] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
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
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#F7E8E8] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
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
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#F7E8E8] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#34252A] mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#F7E8E8] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#34252A] mb-1">Leave us a message... *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us what you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#F7E8E8] bg-[#FFF9F2] focus:outline-none focus:ring-2 focus:ring-[#873F50]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#34252A]/50">Replies within 1–2 business days.</span>
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#873F50] hover:bg-[#6e3140] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SUBMIT</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

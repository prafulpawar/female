import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function ApplyModal({ vacancy, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    message: ''
  });
  const [coverFile, setCoverFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!vacancy) return null;

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit: 15MB
    const maxBytes = 15 * 1024 * 1024;
    if (file.size > maxBytes) {
      setError(`File "${file.name}" exceeds the 15MB limit. Please choose a smaller file.`);
      return;
    }
    setError('');
    if (type === 'cover') setCoverFile(file);
    if (type === 'resume') setResumeFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setError('Please upload your Resume or C.V. before submitting.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-stone-200">
        {/* Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {vacancy.department || 'Future Black Female Careers'}
            </span>
            <h3 className="text-xl font-bold mt-0.5">{vacancy.title}</h3>
            <p className="text-xs text-stone-300 mt-1">
              {vacancy.type} • {vacancy.location}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">Application Submitted!</h4>
              <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you for applying for the <strong className="text-stone-800">{vacancy.title}</strong> role at Future Black Female. Our hiring committee will review your documents and contact you at <strong className="text-stone-800">{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amina Diallo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. amina@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">LinkedIn or Portfolio URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedIn}
                    onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Uploads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Resume Upload */}
                <div className="border-2 border-dashed border-stone-300 rounded-xl p-4 text-center hover:border-amber-500 transition-colors bg-stone-50/50">
                  <UploadCloud className="w-8 h-8 text-stone-400 mx-auto mb-1.5" />
                  <span className="block text-xs font-bold text-stone-800">C.V. / Resume *</span>
                  <span className="block text-[11px] text-stone-500 mb-2.5">PDF, DOCX up to 15MB</span>
                  
                  {resumeFile ? (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-medium bg-emerald-50 py-1 px-2 rounded-md">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[160px]">{resumeFile.name}</span>
                    </div>
                  ) : (
                    <label className="inline-block px-3 py-1.5 bg-white border border-stone-300 text-stone-700 text-xs font-medium rounded-lg cursor-pointer hover:bg-stone-50 transition-colors shadow-xs">
                      Choose File
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, 'resume')} 
                      />
                    </label>
                  )}
                </div>

                {/* Cover Letter Upload */}
                <div className="border-2 border-dashed border-stone-300 rounded-xl p-4 text-center hover:border-amber-500 transition-colors bg-stone-50/50">
                  <UploadCloud className="w-8 h-8 text-stone-400 mx-auto mb-1.5" />
                  <span className="block text-xs font-bold text-stone-800">Cover Letter</span>
                  <span className="block text-[11px] text-stone-500 mb-2.5">PDF, DOCX up to 15MB</span>
                  
                  {coverFile ? (
                    <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-medium bg-emerald-50 py-1 px-2 rounded-md">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[160px]">{coverFile.name}</span>
                    </div>
                  ) : (
                    <label className="inline-block px-3 py-1.5 bg-white border border-stone-300 text-stone-700 text-xs font-medium rounded-lg cursor-pointer hover:bg-stone-50 transition-colors shadow-xs">
                      Choose File
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, 'cover')} 
                      />
                    </label>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Brief Note / Motivation</label>
                <textarea
                  rows="3"
                  placeholder="Share a short note on why you are drawn to Future Black Female's mission..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <span className="text-xs text-stone-500">
                  Charity No: 79425 9531 RR0001
                </span>
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-stone-900 text-white font-medium text-sm rounded-xl hover:bg-stone-800 transition-colors shadow-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

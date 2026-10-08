import React, { useState } from 'react';
import { X, ArrowRight, Phone, Mail, Sun } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefill }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sun%20Star%20Green%20Energy%2C%20I%20would%20like%20a%20solar%20quote.${prefill ? '%20' + encodeURIComponent(prefill) : ''}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header gradient strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500"></div>

        <div className="p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0 border border-slate-700">
                  <img src="/logo.png" alt="Sun Star Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white font-heading">Request a Free Quote</h2>
                  <p className="text-xs text-slate-400">Sun Star Green Energy — Joebar, Paynesville</p>
                </div>
              </div>

              {prefill && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-xs text-emerald-300">
                  <span className="font-bold text-emerald-400">Pre-selected: </span>
                  {prefill}
                </div>
              )}

              {/* WhatsApp fast option */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-colors mb-5 group"
              >
                <span>💬 Message Us on WhatsApp (Fastest)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-slate-800"></div>
                <span className="text-xs text-slate-500">or fill in the form below</span>
                <div className="flex-1 h-px bg-slate-800"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wide">Name *</label>
                    <input required placeholder="Your name" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wide">Phone *</label>
                    <input required placeholder="+231 77..." className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wide">Location</label>
                  <input placeholder="County / City" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-all" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wide">System Needed</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-all appearance-none">
                    <option>Residential Home Solar System</option>
                    <option>Commercial / Business Solar</option>
                    <option>MySol PAYGo Kit</option>
                    <option>Solar Equipment Purchase</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-wide">Monthly Fuel Spend</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-all appearance-none">
                    <option>Under $100/month</option>
                    <option>$100–$300/month</option>
                    <option>$300–$600/month</option>
                    <option>Over $600/month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Quote Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex items-center gap-1 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />{COMPANY_INFO.phonePrimary}
                </a>
                <span>|</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />{COMPANY_INFO.email}
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-4 border-emerald-500/50 flex items-center justify-center mx-auto">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">Quote Request Sent!</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you! Our solar engineering team at Sun Star Green Energy in Joebar, Paynesville will contact you within <strong className="text-white">2 business hours</strong> to discuss your free customized solar quote.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-colors"
                >
                  💬 For instant reply — WhatsApp us now
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { FAQS_DATA } from '../data/siteData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = ['all', 'general', 'paygo', 'pricing', 'technical'];

  const filtered = activeFilter === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter(f => f.category === activeFilter);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Solar Questions, <span className="text-gradient-cyan">Answered</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know before going solar in Liberia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setOpenIdx(null); }}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all border capitalize ${
                activeFilter === f
                  ? 'bg-sky-500 text-slate-950 border-sky-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              {f === 'paygo' ? 'PAYGo' : f}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-sky-500/50 bg-slate-900/80' : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-400' : 'text-slate-500'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

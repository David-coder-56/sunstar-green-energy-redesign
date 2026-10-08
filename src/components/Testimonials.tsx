import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx(i => (i === 0 ? TESTIMONIALS_DATA.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === TESTIMONIALS_DATA.length - 1 ? 0 : i + 1));

  const t = TESTIMONIALS_DATA[activeIdx];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/8 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>What Our Clients Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Trusted by Liberians, <br />
            <span className="text-gradient-sun">Proven by Results</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <Quote className="w-12 h-12 text-amber-500/30 mx-auto mb-6" />

          <div className="flex justify-center mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed italic max-w-3xl mx-auto">
            "{t.quote}"
          </blockquote>

          <div className="mt-8 space-y-1">
            <div className="text-base font-bold text-white">{t.name}</div>
            <div className="text-sm text-amber-400">{t.role}</div>
            <div className="text-xs text-slate-500">{t.location}</div>
            <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold">
              <span>System: {t.system}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIdx ? 'bg-amber-400 w-6' : 'bg-slate-700 hover:bg-slate-500'}`}
              />
            ))}

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

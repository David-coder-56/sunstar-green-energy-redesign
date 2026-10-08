import React from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { Home, Building2, ShoppingBag, Wrench, Zap, Sun, ArrowRight, Star } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Home, Building2, ShoppingBag, Wrench, Zap, Sun,
};

interface ServicesProps {
  onOpenQuoteModal: (system?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Complete Solar Solutions <br />
            <span className="text-gradient-green">Across Liberia</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From residential homes in Paynesville to commercial facilities in Monrovia — we design, supply, install, and maintain every solar power system we deliver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Zap;
            return (
              <div
                key={service.id}
                className="group glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
              >
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Feature List */}
                <ul className="space-y-1.5 flex-1">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="text-xs text-slate-500 italic border-t border-slate-800/80 pt-3 mt-auto">
                  <span className="text-slate-400 font-semibold not-italic">Ideal for: </span>
                  {service.idealFor}
                </div>

                <button
                  onClick={() => onOpenQuoteModal(`Service Interest: ${service.title}`)}
                  className="mt-1 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

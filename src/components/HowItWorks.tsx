import React from 'react';
import { Sun, Battery, Zap, Home, Wifi, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Sun,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
      step: '01',
      title: 'Solar Panels Generate Power',
      desc: 'High-efficiency monocrystalline panels (450W–650W each) convert Liberia\'s abundant equatorial sunlight into raw DC electricity throughout the day — even under cloud cover.',
    },
    {
      icon: Zap,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/30',
      step: '02',
      title: 'Hybrid Inverter Converts & Manages',
      desc: 'Our smart hybrid inverters instantly convert DC power to clean AC electricity for all your appliances, while simultaneously routing excess power to charge your battery bank. Priority switches between Solar → Battery → LEC Grid automatically.',
    },
    {
      icon: Battery,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      step: '03',
      title: 'Lithium Batteries Store Excess Power',
      desc: 'Premium LiFePO4 Lithium batteries bank surplus daytime solar energy for reliable 24-hour use. No more power cuts at night or during cloudy rainy season days.',
    },
    {
      icon: Home,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30',
      step: '04',
      title: 'Your Home / Business Runs 24/7',
      desc: 'Lights, fans, refrigerators, TVs, ACs, water pumps, computers — every appliance runs continuously from your private solar micro-grid with zero fuel cost and zero generator noise.',
    },
    {
      icon: Wifi,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30',
      step: '05',
      title: 'Remote Monitoring via Mobile App',
      desc: 'Our Sun Star Smart Monitor app gives real-time dashboards showing live solar generation, battery charge state, daily energy produced, and estimated monthly savings — right on your smartphone.',
    },
  ];

  return (
    <section id="diagram" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>How Solar Power Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            How A <span className="text-gradient-cyan">Sun Star Solar System</span><br />Powers Your Liberian Home
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A complete end-to-end solar system works as a silent, zero-fuel private power station. Here's exactly how yours would work:
          </p>
        </div>

        {/* Steps: Large screen horizontal, Mobile vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-500/30 via-emerald-500/30 to-rose-500/30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center gap-4 group">
                  {/* Step number */}
                  <div className="text-[10px] font-extrabold text-slate-600 uppercase tracking-[0.2em]">{step.step}</div>

                  {/* Icon Circle */}
                  <div className={`relative w-16 h-16 rounded-2xl border ${step.bg} flex items-center justify-center z-10 bg-slate-950 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                    {/* Arrow for desktop */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-slate-700">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-sm font-bold ${step.color} font-heading`}>{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Diagram Visual */}
        <div className="mt-16 relative rounded-3xl overflow-hidden border border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1400"
            alt="Solar panel installation on roof — Sun Star Green Energy"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent flex items-center">
            <div className="pl-8 sm:pl-16 max-w-lg space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400">Liberia's Solar Experts</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Installed &amp; Commissioned by Certified Solar Engineers
              </h3>
              <p className="text-sm text-slate-300">
                Every Sun Star installation includes certified electrical wiring, surge protection, lightning arrestors, and a full system commissioning test report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

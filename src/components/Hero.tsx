import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Sun, ShieldCheck, Zap, ArrowRight, Calculator, CheckCircle2, Award, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (system?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigateTo }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-slate-950">
      {/* Real Solar Photo Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/solar.jpg"
          alt="Sun Star Green Energy Solar Installation"
          className="w-full h-full object-cover object-bottom opacity-60 scale-105"
        />
        {/* Balanced scrim gradients so solar panels are clearly visible while text stays sharp */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>
      </div>

      {/* Background Graphic Elements & Dynamic Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-amber-500/10 backdrop-blur-md">
              <img src="/logo.png" alt="Logo" className="w-5 h-5 rounded-full bg-white p-0.5 object-contain" />
              <span>Liberia's Premier Solar &amp; Renewable Energy Company</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
              Power Your Life With <br />
              <span className="text-gradient-sun">Clean, Continuous</span> &amp; <br />
              <span className="text-gradient-green">Affordable Solar</span>
            </h1>

            {/* Subheadline / Mission */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Say goodbye to high generator fuel bills and power outages in Liberia. <strong className="text-white">Sun Star Green Energy</strong> delivers world-class residential solar kits, commercial power grids, and MySol PAYGo mobile money systems.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Power Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Fuel Expenses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>25-Year Solar Warranty</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Free Solar Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigateTo('calculator')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-slate-700 hover:border-amber-500/40 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md backdrop-blur-md"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate My Solar Savings</span>
              </button>
            </div>

            {/* Contact Quick Call */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-slate-200">
                <PhoneCall className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Direct Hotline:</span>
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-amber-400 font-bold hover:underline">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </span>
              <span>•</span>
              <span>Joebar, Paynesville</span>
            </div>

          </div>

          {/* Right Hero Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/40 via-slate-800/60 to-emerald-500/40 shadow-2xl backdrop-blur-xl">
              <div className="relative bg-slate-900/95 rounded-[22px] overflow-hidden p-6 space-y-6">
                
                {/* Visual Image Header - Authentic Team and Installation */}
                <div className="relative h-72 rounded-2xl overflow-hidden group">
                  <img
                    src="/b.jpg"
                    alt="Sun Star Green Energy Leadership and Solar Installation in Liberia"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Floating Live Badge */}
                  <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/50 text-emerald-400 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Sun Star Leadership &amp; Field Work</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">Showroom &amp; Technical Hub</div>
                    <div className="text-base font-bold text-white">Joebar, Paynesville, Montserrado</div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Capacity Installed</span>
                    </div>
                    <div className="text-xl font-bold text-white mt-1 font-heading">{COMPANY_INFO.stats.installedCapacity}</div>
                  </div>

                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Homes Powered</span>
                    </div>
                    <div className="text-xl font-bold text-emerald-400 mt-1 font-heading">{COMPANY_INFO.stats.homesPowered}</div>
                  </div>
                </div>

                {/* PAYGo Highlight Card */}
                <div className="bg-gradient-to-r from-amber-950/40 to-emerald-950/40 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5 text-left">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">MySol PAYGo Option</div>
                    <div className="text-sm font-semibold text-white">Pay via MTN &amp; Orange Mobile Money</div>
                    <div className="text-xs text-slate-400">As low as LRD 100 / day</div>
                  </div>
                  <button
                    onClick={() => onNavigateTo('paygo')}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
                  >
                    View Kits
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Ticker Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading">{COMPANY_INFO.stats.installedCapacity}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Solar Power Installed</div>
          </div>
          <div className="text-center p-2 border-l border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">{COMPANY_INFO.stats.homesPowered}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Liberian Homes &amp; Shops</div>
          </div>
          <div className="text-center p-2 border-l border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-heading">{COMPANY_INFO.stats.fuelSavedAnnual}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Generator Fuel Saved</div>
          </div>
          <div className="text-center p-2 border-l border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading">25 Years</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Solar Panel Warranty</div>
          </div>
        </div>

      </div>
    </section>
  );
};

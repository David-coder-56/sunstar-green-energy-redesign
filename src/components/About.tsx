import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { ShieldCheck, Users, Leaf, DollarSign, Award, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    { icon: ShieldCheck, label: 'Certified Installers', desc: 'Licensed Liberian electrical engineers with advanced solar certification.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { icon: DollarSign, label: 'Affordable Pricing', desc: 'Transparent, competitive pricing with flexible PAYGo & payment plans.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { icon: Award, label: 'Reliable Products', desc: 'Only tier-1 internationally certified solar equipment with full warranty.', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/30' },
    { icon: Leaf, label: 'Eco-Friendly', desc: 'Zero carbon emissions, reducing Liberia\'s dependence on diesel fuel.', color: 'text-lime-400', bg: 'bg-lime-500/10 border-lime-500/30' },
    { icon: Users, label: 'Local Team', desc: 'A proud Liberian company creating local green energy jobs and capacity.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
    { icon: Globe, label: 'West Africa Vision', desc: 'Building toward a renewable energy grid serving all of West Africa.', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative group">
              <img
                src="/energy.jpg"
                alt="Sun Star Green Energy Certified Installation Team in Liberia"
                className="w-full h-80 lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Floating stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl p-3 border border-slate-800">
                  <div className="text-xl font-extrabold text-amber-400 font-heading">{COMPANY_INFO.stats.installedCapacity}</div>
                  <div className="text-[11px] text-slate-400">Solar Power Installed</div>
                </div>
                <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl p-3 border border-slate-800">
                  <div className="text-xl font-extrabold text-emerald-400 font-heading">{COMPANY_INFO.stats.co2Reduced}</div>
                  <div className="text-[11px] text-slate-400">CO₂ Emissions Avoided</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Sun Star Green Energy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Liberia's Trusted <br />
              <span className="text-gradient-sun">Solar Energy Partner</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                <strong className="text-white">Sun Star Green Energy</strong> is a Liberian-owned and operated renewable energy company headquartered in Joebar, Paynesville, Montserrado County. We are dedicated to delivering <em>clean, reliable, and affordable</em> solar power solutions to homes, businesses, health centers, and communities across Liberia and West Africa.
              </p>
              <p>
                Founded on the belief that every Liberian deserves access to uninterrupted, affordable electricity — our certified team of solar engineers designs custom systems that eliminate the burden of expensive diesel generators and unreliable LEC grid power.
              </p>
              <p>
                From compact MySol PAYGo home kits powered by MTN Mobile Money to heavy-duty 35kW+ three-phase commercial micro-grids, Sun Star Green Energy is the complete solar solution provider for modern Liberia.
              </p>
            </div>

            {/* Why Choose Us grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className={`glass-card glass-card-hover rounded-xl p-4 flex flex-col gap-2.5 border ${v.bg}`}>
                    <Icon className={`w-5 h-5 ${v.color}`} />
                    <div className="text-xs font-bold text-white">{v.label}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{v.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

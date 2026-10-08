import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/siteData';
import { Zap, Battery, Sun, ShoppingBag, ArrowRight, Star, Sparkles } from 'lucide-react';

interface PayGoProductsProps {
  onOpenQuoteModal: (system?: string) => void;
}

type FilterCategory = 'all' | 'paygo' | 'panels' | 'batteries' | 'inverters';

export const PayGoProducts: React.FC<PayGoProductsProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filters: { id: FilterCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Products', icon: ShoppingBag },
    { id: 'paygo', label: 'MySol PAYGo Kits', icon: Zap },
    { id: 'panels', label: 'Solar Panels', icon: Sun },
    { id: 'batteries', label: 'Batteries', icon: Battery },
    { id: 'inverters', label: 'Inverters', icon: Zap },
  ];

  const filtered = activeFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="paygo" className="py-20 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MySol PAYGo &amp; Equipment Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Solar Products &amp; <span className="text-gradient-sun">PAYGo Plans</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Browse our full range from compact MySol Pay-As-You-Go solar home kits starting at LRD 100/day to tier-1 heavy-duty commercial equipment.
          </p>
        </div>

        {/* PAYGo Mobile Money Info Banner */}
        <div className="mb-10 bg-gradient-to-r from-amber-950/60 via-slate-900 to-emerald-950/60 border border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shrink-0">💳</div>
            <div>
              <div className="font-bold text-white text-sm">PAYGo Mobile Money Payment</div>
              <div className="text-xs text-slate-400 mt-0.5">Pay daily or weekly via <span className="text-yellow-400 font-semibold">Lonestar MTN Mobile Money</span> or <span className="text-orange-400 font-semibold">Orange Money Liberia</span>. Full ownership after term completion.</div>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal('PAYGo Solar Kit Inquiry')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-colors"
          >
            Check PAYGo Availability
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map(f => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeFilter === f.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col relative group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredId === product.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/70 px-2 py-0.5 rounded-full">
                    {product.brand}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug font-heading group-hover:text-amber-300 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-xs text-emerald-400 font-semibold mt-1">{product.powerOutput}</div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1 flex-1">
                  {product.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Star className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* PAYGo rate */}
                {product.paygoRate && (
                  <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 text-left">
                    <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wide">PAYGo Rate</div>
                    <div className="text-sm font-bold text-white">{product.paygoRate}</div>
                  </div>
                )}

                <button
                  onClick={() => onOpenQuoteModal(`Product Interest: ${product.name}`)}
                  className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 text-xs font-bold text-amber-400 transition-all group/btn"
                >
                  <span>Get Quote / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';
import { MapPin, Zap, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onOpenQuoteModal: (system?: string) => void;
}

type ProjectFilter = 'all' | 'residential' | 'commercial' | 'health' | 'agriculture';

const categoryConfig = {
  residential: { label: 'Residential', color: 'text-emerald-400', bg: 'bg-emerald-950/50 border-emerald-700/50' },
  commercial: { label: 'Commercial', color: 'text-amber-400', bg: 'bg-amber-950/50 border-amber-700/50' },
  health: { label: 'Health', color: 'text-rose-400', bg: 'bg-rose-950/50 border-rose-700/50' },
  agriculture: { label: 'Agriculture', color: 'text-lime-400', bg: 'bg-lime-950/50 border-lime-700/50' },
};

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filtered = filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  const filters: { id: ProjectFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'health', label: 'Healthcare' },
    { id: 'agriculture', label: 'Agriculture' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Completed Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Solar Projects Delivered <br />
            <span className="text-gradient-green">Across Liberia</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real systems. Real savings. Real impact on Liberian homes, businesses, clinics, and farms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                filter === f.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(project => {
            const catConfig = categoryConfig[project.category];
            return (
              <div key={project.id} className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col sm:flex-row group">
                {/* Image */}
                <div className="relative sm:w-52 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catConfig.bg} ${catConfig.color}`}>
                      {catConfig.label}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-slate-400">{project.year}</div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading group-hover:text-amber-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed flex-1">{project.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-950/60 rounded-xl p-2.5 text-left border border-slate-800">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>System Size</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">{project.capacity}</div>
                    </div>
                    <div className="bg-emerald-950/40 rounded-xl p-2.5 text-left border border-emerald-900/50">
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-emerald-400" />
                        <span>Savings</span>
                      </div>
                      <div className="text-xs font-bold text-emerald-300 mt-0.5">{project.fuelSavings}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenQuoteModal('Custom Solar Project Inquiry')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform group"
          >
            <span>Start Your Custom Solar Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, MapPin, Clock, Sun, Menu, X, Calculator, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (prefillSystem?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'LRD'>('USD');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-950/95 border-b border-slate-800/60 text-slate-300 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Joebar, Paynesville, Montserrado, Liberia</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 rounded-full px-2.5 py-0.5 text-[11px] font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>MTN & Orange Money Accepted</span>
            </div>
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-md p-0.5 text-[11px]">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded ${currency === 'USD' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                USD ($)
              </button>
              <button 
                onClick={() => setCurrency('LRD')}
                className={`px-2 py-0.5 rounded ${currency === 'LRD' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                LRD (L$)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3' : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/80 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => handleNavClick('hero')} className="flex items-center gap-3 group text-left">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white p-1 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="Sun Star Green Energy Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center gap-1 font-heading">
                <span className="text-white">SUN STAR</span>
                <span className="text-emerald-400">GREEN</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400/90 -mt-0.5">
                ENERGY LIBERIA
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 p-[1px] font-semibold text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:from-amber-300 group-hover:to-emerald-400 px-5 py-2.5 rounded-[11px] text-xs uppercase tracking-wider font-extrabold text-slate-950">
                <span>Request Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  handleNavClick('calculator');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg bg-slate-800 text-amber-400 border border-amber-500/30"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Solar Savings</span>
              </button>

              <button
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-xs uppercase font-extrabold tracking-wider rounded-lg bg-gradient-to-r from-amber-400 to-emerald-500 text-slate-950 shadow-md text-center"
              >
                Get Free Custom Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

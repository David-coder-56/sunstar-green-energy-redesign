import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Sun, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

// Inline SVGs for brand icons not available in lucide-react
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenQuoteModal: (system?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Pre-footer CTA band */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white p-1.5 shadow-xl shrink-0 hidden sm:flex items-center justify-center border-2 border-slate-900/10">
              <img src="/logo.png" alt="Sun Star Green Energy Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-950 font-heading">
                Stop Paying for Diesel. Start Owning Your Power.
              </div>
              <div className="text-slate-800 text-sm mt-1 font-medium">
                Get a free, no-obligation solar quote from Liberia's most trusted solar company today.
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-950 text-amber-400 font-extrabold text-sm uppercase tracking-wider shadow-xl hover:bg-slate-900 transition-colors group"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="space-y-5">
            <button onClick={() => onNavigateTo('hero')} className="flex items-center gap-3.5 group text-left">
              <div className="w-14 h-14 rounded-full bg-white p-1.5 flex items-center justify-center shadow-lg border-2 border-emerald-500/40 overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img src="/logo.png" alt="Sun Star Green Energy Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white font-heading tracking-tight">SUN STAR GREEN</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400 -mt-0.5">ENERGY LIBERIA</div>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed">
              Liberia's premier provider of residential, commercial, and PAYGo solar energy systems. Empowering homes, businesses, and communities with clean, reliable power.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">Services</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                'Residential Solar Systems',
                'Commercial & Industrial Solar',
                'MySol PAYGo Home Kits',
                'Solar Equipment Sales',
                'Installation & Maintenance',
                'Mini-Grid & Rural Electrification',
              ].map(item => (
                <li key={item}>
                  <button
                    onClick={() => onNavigateTo('services')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">Quick Links</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: 'About Sun Star Green Energy', id: 'about' },
                { label: 'PAYGo Products Catalog', id: 'paygo' },
                { label: 'Solar Savings Calculator', id: 'calculator' },
                { label: 'How Solar Works', id: 'diagram' },
                { label: 'Installation Projects', id: 'projects' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact & Get Quote', id: 'contact' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigateTo(item.id)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">Contact Us</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-white transition-colors">{COMPANY_INFO.phonePrimary}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">{COMPANY_INFO.email}</a>
              </li>
            </ul>

            <div className="pt-2 p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50 space-y-1">
              <div className="text-xs font-bold text-emerald-400">MTN &amp; Orange Money Accepted</div>
              <div className="text-xs text-slate-400">PAYGo payments via mobile money from LRD 100/day</div>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Sun Star Logo" className="w-5 h-5 rounded-full bg-white p-0.5 object-contain inline" />
            <span>© {currentYear} {COMPANY_INFO.legalName}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built by</span>
            <a
              href="https://cyber-hybrid.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-emerald-400 font-bold tracking-wide transition-colors inline-flex items-center gap-1 underline underline-offset-4"
            >
              Cyber Hybrid
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-slate-700">|</span>
            <span>Designed for Liberia 🇱🇷 &amp; West Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Zap, Sun } from 'lucide-react';

interface ContactProps {
  onOpenQuoteModal: (system?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sun%20Star%20Green%20Energy%2C%20I%20am%20interested%20in%20a%20solar%20quote%20for%20my%20home%2Fbusiness%20in%20Liberia.`;

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Contact &amp; Get a Quote</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Ready to Go Solar? <br />
            <span className="text-gradient-green">Let's Talk Today</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Our solar engineering team in Paynesville is ready to design a custom power system for your home or business anywhere in Liberia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            {/* Info Cards */}
            {[
              {
                icon: MapPin,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10 border-amber-500/30',
                label: 'Visit Our Showroom',
                value: 'Joebar, Paynesville, Montserrado County, Liberia',
                sub: 'Near Duport Road Junction — Open Mon-Sat'
              },
              {
                icon: Phone,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10 border-emerald-500/30',
                label: 'Call or WhatsApp Us',
                value: `${COMPANY_INFO.phonePrimary}`,
                sub: 'Available Mon–Sat, 9AM–6PM Liberia Time'
              },
              {
                icon: Mail,
                color: 'text-sky-400',
                bg: 'bg-sky-500/10 border-sky-500/30',
                label: 'Email Our Team',
                value: COMPANY_INFO.email,
                sub: 'We respond within 2 business hours'
              },
              {
                icon: Clock,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10 border-purple-500/30',
                label: 'Working Hours',
                value: COMPANY_INFO.hours,
                sub: 'Emergency support line available 24/7'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-4 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border ${item.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-bold text-white mt-0.5 break-all">{item.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] group w-full"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Quick Quote Form */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl p-7 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-heading">Request a Free Solar Quote</div>
                <div className="text-xs text-slate-400">We'll respond within 2 business hours</div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formEl = e.target as HTMLFormElement;
                const name = (formEl.elements.namedItem('name') as HTMLInputElement)?.value;
                const system = (formEl.elements.namedItem('systemType') as HTMLSelectElement)?.value;
                onOpenQuoteModal(`Name: ${name}, System: ${system}`);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Phone / WhatsApp *</label>
                  <input
                    name="phone"
                    required
                    placeholder="+231 77..."
                    className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Location (County / District)</label>
                <input
                  name="location"
                  placeholder="e.g. Monrovia, Paynesville, Buchanan..."
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">System Type Needed *</label>
                <select
                  name="systemType"
                  required
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all appearance-none"
                >
                  <option value="" className="text-slate-500">— Select one —</option>
                  <option>Residential Home Solar System</option>
                  <option>Commercial / Business Solar</option>
                  <option>MySol PAYGo Solar Kit</option>
                  <option>Solar Equipment Purchase</option>
                  <option>Mini-Grid / Community Solar</option>
                  <option>Maintenance / Upgrade Existing System</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Monthly Generator / LEC Electricity Spend</label>
                <select
                  name="spend"
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-all appearance-none"
                >
                  <option>Under $100 / month</option>
                  <option>$100 – $300 / month</option>
                  <option>$300 – $600 / month</option>
                  <option>$600 – $1,000 / month</option>
                  <option>Over $1,000 / month</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Additional Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tell us about your appliances, property size, or any specific requirements..."
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 group"
              >
                <Zap className="w-4 h-4" />
                <span>Submit Quote Request — Free &amp; No Obligation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-slate-500">
                🔒 Your information is kept private and used only to prepare your solar quote.
              </p>
            </form>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-slate-800 h-64 bg-slate-900 flex items-center justify-center relative">
          <iframe
            title="Sun Star Green Energy Location – Joebar, Paynesville"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4!2d-10.76!3d6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnMDAuMCJOIDEwwrA0NSczNi4wIlc!5e0!3m2!1sen!2slr!4v1600000000000!5m2!1sen!2slr"
            width="100%"
            height="256"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PayGoProducts } from './components/PayGoProducts';
import { SolarCalculator } from './components/SolarCalculator';
import { HowItWorks } from './components/HowItWorks';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('hero');

  const openQuoteModal = (prefill?: string) => {
    setQuotePrefill(prefill);
    setQuoteModalOpen(true);
  };

  const navigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'paygo', 'calculator', 'diagram', 'projects', 'faq', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar
        onOpenQuoteModal={openQuoteModal}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <Hero onOpenQuoteModal={openQuoteModal} onNavigateTo={navigateTo} />
        <About />
        <Services onOpenQuoteModal={openQuoteModal} />
        <PayGoProducts onOpenQuoteModal={openQuoteModal} />
        <SolarCalculator onOpenQuoteModal={openQuoteModal} />
        <HowItWorks />
        <Projects onOpenQuoteModal={openQuoteModal} />
        <Testimonials />
        <FAQ />
        <Contact onOpenQuoteModal={openQuoteModal} />
      </main>

      <Footer onNavigateTo={navigateTo} onOpenQuoteModal={openQuoteModal} />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefill={quotePrefill}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/231778158517?text=Hello%20Sun%20Star%20Green%20Energy%2C%20I%20am%20interested%20in%20solar%20for%20my%20home%2Fbusiness."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-xl shadow-green-500/30 flex items-center justify-center text-white text-2xl transition-all hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Send,
  Globe,
  Smartphone,
  ChevronUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051a11] text-slate-300 border-t border-emerald-950/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-emerald-900/50">
          {/* Col 1: Brand & Apps (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-md">
                <span className="text-xl font-bold text-emerald-950 font-serif">S</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white font-serif">SafarHub</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">SAUDI</span>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-200">
              Your Journey in Saudi, Handled.
            </p>
            <p className="text-xs text-emerald-400/80 leading-relaxed">
              Hotels • Transport • Airport • Jastip • Umrah • Tours
            </p>

            {/* App Store / Google Play Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => alert('Opening App Store...')}
                className="flex items-center gap-2 px-3 py-2 bg-black/60 hover:bg-black border border-emerald-700/50 rounded-xl text-left transition-colors"
              >
                <Smartphone className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-[9px] text-slate-400 leading-none">Download on the</div>
                  <div className="text-xs font-bold text-white leading-tight">App Store</div>
                </div>
              </button>

              <button
                onClick={() => alert('Opening Google Play Store...')}
                className="flex items-center gap-2 px-3 py-2 bg-black/60 hover:bg-black border border-emerald-700/50 rounded-xl text-left transition-colors"
              >
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-[9px] text-slate-400 leading-none">GET IT ON</div>
                  <div className="text-xs font-bold text-white leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Packages</a></li>
              <li><a href="#city-guide" className="hover:text-amber-400 transition-colors">City Guide</a></li>
              <li><a href="#help" className="hover:text-amber-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Col 3: Support (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#partner" className="hover:text-amber-400 transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Follow Us</h4>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a href="#fb" className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#ig" className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Youtube */}
                <a href="#yt" className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#li" className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                {/* X */}
                <a href="#x" className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors" aria-label="X">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Newsletter</h4>
              <p className="text-[11px] text-slate-400 mb-2">Get latest deals and updates directly in your inbox</p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full py-2 pl-3 pr-10 text-xs bg-emerald-950/70 border border-emerald-800/60 rounded-xl text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-400/40"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                  title="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1 font-semibold">
                  ✓ Thank you! You are subscribed to SafarHub VIP alerts.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Currency & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-slate-400 gap-4">
          <div>
            © 2026 SafarHub. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>English (US)</span>
            </div>

            <div className="flex items-center gap-1 text-slate-300 font-semibold">
              <span>SAR (﷼)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-950 hover:bg-emerald-800 text-amber-400 transition-colors"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

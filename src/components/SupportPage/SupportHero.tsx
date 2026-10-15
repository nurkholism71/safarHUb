import React, { useState } from 'react';
import { Search, Headphones, Sparkles, ShieldCheck } from 'lucide-react';

interface SupportHeroProps {
  onSearch?: (query: string) => void;
  onLiveChatClick?: () => void;
}

export const SupportHero: React.FC<SupportHeroProps> = ({
  onSearch,
  onLiveChatClick
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower Panorama"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title & Search Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>SUPPORT CENTER</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
              We're Here to Help
            </h1>
            <p className="text-sm sm:text-base text-slate-200/90 mt-2 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
              Get fast and reliable support for all your travel needs in Saudi — hotels, transport, airport services, jastip, umrah packages, and more.
            </p>

            {/* Help Center Search Bar */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl">
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-1.5 border border-slate-200/80">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for help (e.g. booking, refund, hotel, visa...)"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 px-3 py-2 bg-transparent outline-hidden placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all shrink-0 active:scale-95"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Floating 24/7 Support Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div
              onClick={onLiveChatClick}
              className="bg-white/95 backdrop-blur-md text-slate-800 rounded-3xl p-5 shadow-2xl border border-white/60 max-w-sm w-full cursor-pointer hover:scale-[1.02] transition-transform group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    24/7 Support
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Our team is available anytime to assist you during your journey in Saudi Arabia.
                  </p>
                  <div className="flex items-center gap-1.5 mt-2.5 text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Online now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

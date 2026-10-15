import React, { useState } from 'react';
import { Search, Sparkles, Compass, ArrowRight } from 'lucide-react';

interface ExperiencesHeroProps {
  onSearch?: (query: string) => void;
  onExploreAlUla?: () => void;
}

export const ExperiencesHero: React.FC<ExperiencesHeroProps> = ({
  onSearch,
  onExploreAlUla
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
      {/* Background Graphic & Golden AlUla Desert Landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80"
          alt="AlUla Desert Sandstone Wonders"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title & Search Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AUTHENTIC SAUDI EXPERIENCES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
              Discover Saudi Arabia
            </h1>
            <p className="text-sm sm:text-base text-slate-200/90 mt-2 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
              Unique experiences, culture, adventure, and local life to make your journey unforgettable.
            </p>

            {/* Experience Search Bar */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl">
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-1.5 border border-slate-200/80">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search experiences (e.g. desert safari, historical tour, food tour...)"
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

          {/* Right Floating AlUla Experience Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div
              onClick={onExploreAlUla}
              className="bg-white/95 backdrop-blur-md text-slate-800 rounded-3xl p-4 shadow-2xl border border-white/60 max-w-xs w-full cursor-pointer hover:scale-[1.02] transition-transform group"
            >
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80"
                  alt="AlUla Ancient Hegra"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <h4 className="text-sm font-bold leading-none">AlUla Experience</h4>
                  <p className="text-[10px] text-amber-300 mt-0.5">UNESCO World Heritage</p>
                </div>
              </div>

              <div className="px-1 space-y-2">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Explore ancient wonders, natural beauty, and rich history.
                </p>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:underline">
                  <span>View Experiences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

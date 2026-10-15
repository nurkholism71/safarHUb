import React, { useState } from 'react';
import { Search, Sparkles, Sun, MapPin, Calendar } from 'lucide-react';

interface CityGuideHeroProps {
  onSearch?: (query: string) => void;
  onWeatherClick?: () => void;
}

export const CityGuideHero: React.FC<CityGuideHeroProps> = ({
  onSearch,
  onWeatherClick
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
              <span>EXPLORE SAUDI ARABIA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
              City Guide
            </h1>
            <p className="text-sm sm:text-base text-slate-200/90 mt-2 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
              Discover cities, attractions, culture, food, transport, and useful information to make your journey easier in Saudi Arabia.
            </p>

            {/* City & Attraction Search Bar */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl">
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-1.5 border border-slate-200/80">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search city, attraction, mosque, restaurant, area..."
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

          {/* Right Floating Weather & City Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div
              onClick={onWeatherClick}
              className="bg-white/95 backdrop-blur-md text-slate-800 rounded-3xl p-4 shadow-2xl border border-white/60 max-w-xs w-full cursor-pointer hover:scale-[1.02] transition-transform group"
            >
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80"
                  alt="Makkah Holy Mosque"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <h4 className="text-sm font-bold leading-none">Makkah</h4>
                    <p className="text-[10px] text-amber-300 mt-0.5">12 Oct 2026, Mon</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: '20s' }} />
                  <div>
                    <span className="text-base font-extrabold text-slate-900">32°C</span>
                    <p className="text-[11px] text-slate-500 font-medium">Mostly Sunny</p>
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <span>Humidity 38%</span>
                  <p>Wind 11 km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

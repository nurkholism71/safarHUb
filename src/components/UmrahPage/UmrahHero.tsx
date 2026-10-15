import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Search,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  Layers,
  HeartHandshake
} from 'lucide-react';

interface UmrahHeroProps {
  onSearch: (filters: any) => void;
}

export const UmrahHero: React.FC<UmrahHeroProps> = ({ onSearch }) => {
  const [packageType, setPackageType] = useState('all');
  const [city, setCity] = useState('Makkah & Madinah');
  const [duration, setDuration] = useState('7 Days');
  const [travelDate, setTravelDate] = useState('2026-11-15');
  const [travelers, setTravelers] = useState('2 Adults');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ packageType, city, duration, travelDate, travelers });
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Bright Daylight Panorama Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Holy Kaaba Makkah Umrah Panorama"
          className="w-full h-full object-cover object-center brightness-100 contrast-105"
        />
        {/* Soft gradient overlay for text readability while preserving brilliant sunlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Trust Badges (8 cols) */}
          <div className="lg:col-span-8">
            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30 mb-3 backdrop-blur-xs">
              UMRAH PACKAGES IN SAUDI ARABIA
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight text-white drop-shadow-md">
              A Meaningful <br className="hidden sm:inline" />
              Umrah Journey <br className="hidden sm:inline" />
              Made Easy.
            </h1>

            <p className="text-xs sm:text-sm text-slate-200/90 mt-3 max-w-xl font-medium leading-relaxed drop-shadow-xs">
              Complete Umrah packages with hotels, transportation, visa support, and guided services — comfortable, safe, and spiritually fulfilling.
            </p>

            {/* 5 Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 text-[11px] font-semibold">
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Trusted Partners in Saudi</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Halal & Comfortable</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                <Layers className="w-3.5 h-3.5 text-amber-300" />
                <span>Flexible Packages</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Experienced Guides</span>
              </div>
            </div>
          </div>

          {/* Right Column: Why Umrah with SafarHub Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#09261a]/90 backdrop-blur-md border border-emerald-600/40 rounded-3xl p-5 shadow-2xl space-y-3.5 text-slate-100">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-800/60">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold font-serif text-amber-100">
                  Why Umrah with SafarHub?
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Complete & organized packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Partnered hotels near Haram</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Comfortable & reliable transport</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Guided by experienced team</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>24/7 support in Saudi Arabia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Multi-Field Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 bg-white text-slate-800 p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 items-center"
        >
          {/* Package Type (3 cols) */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              Package Type
            </label>
            <div className="relative">
              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-slate-800 appearance-none pr-5 outline-hidden cursor-pointer"
              >
                <option value="all">All Packages</option>
                <option value="economy">Economy Package</option>
                <option value="standard">Standard Package</option>
                <option value="premium">Premium Package</option>
                <option value="luxury">Luxury VIP Package</option>
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* City (2 cols) */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <label className="block text-[10px] uppercase font-bold text-slate-400">City</label>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
              <MapPin className="w-3 h-3 text-emerald-700 flex-shrink-0" />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent outline-hidden font-bold truncate"
              />
            </div>
          </div>

          {/* Duration (2 cols) */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <label className="block text-[10px] uppercase font-bold text-slate-400">Duration</label>
            <div className="relative">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-slate-800 appearance-none pr-5 outline-hidden cursor-pointer"
              >
                <option value="7 Days">7 Days</option>
                <option value="9 Days">9 Days</option>
                <option value="10 Days">10 Days</option>
                <option value="12 Days">12 Days</option>
                <option value="14 Days">14 Days</option>
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Travel Date (2 cols) */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              Travel Date
            </label>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
              <Calendar className="w-3 h-3 text-emerald-700 flex-shrink-0" />
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-transparent outline-hidden font-semibold text-xs"
              />
            </div>
          </div>

          {/* Travelers (1.5 cols) */}
          <div className="lg:col-span-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              Travelers
            </label>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
              <Users className="w-3 h-3 text-emerald-700 flex-shrink-0" />
              <span className="truncate">{travelers}</span>
            </div>
          </div>

          {/* Search Button (1.5 cols) */}
          <button
            type="submit"
            className="lg:col-span-2 flex items-center justify-center gap-1.5 py-3 px-4 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            <span>Search Packages</span>
          </button>
        </form>
      </div>
    </div>
  );
};

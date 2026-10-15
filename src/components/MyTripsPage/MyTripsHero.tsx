import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface MyTripsHeroProps {
  onOpenNextTrip?: () => void;
}

export const MyTripsHero: React.FC<MyTripsHeroProps> = ({ onOpenNextTrip }) => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Luxury Daylight Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Saudi Arabia Makkah Skyline"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left Title & Subtitle */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Personal Travel Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
              My Trips
            </h1>
            <p className="text-sm sm:text-base text-slate-200/90 mt-1 max-w-xl font-medium drop-shadow-xs">
              All your journeys, bookings, and services in one place.
            </p>
          </div>

          {/* Right Next Trip Countdown Widget Card */}
          <div
            onClick={onOpenNextTrip}
            className="cursor-pointer group flex items-center justify-between gap-4 p-4 sm:p-5 bg-[#09261a]/95 backdrop-blur-md border border-emerald-500/40 rounded-3xl shadow-2xl hover:border-emerald-400 transition-all"
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-400">
                <Clock className="w-3 h-3" />
                <span>Next Trip</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif mt-0.5">
                Umrah Trip
              </h3>
              <p className="text-xs text-emerald-200/80 font-medium">12 – 19 Oct 2026</p>

              {/* Countdown Pills */}
              <div className="flex items-center gap-2 mt-3">
                <div className="text-center bg-black/40 px-2.5 py-1 rounded-xl border border-white/10 min-w-[48px]">
                  <span className="text-sm font-black text-amber-300">2</span>
                  <span className="block text-[9px] text-slate-300 uppercase font-bold">Days</span>
                </div>
                <div className="text-center bg-black/40 px-2.5 py-1 rounded-xl border border-white/10 min-w-[48px]">
                  <span className="text-sm font-black text-amber-300">14</span>
                  <span className="block text-[9px] text-slate-300 uppercase font-bold">Hours</span>
                </div>
                <div className="text-center bg-black/40 px-2.5 py-1 rounded-xl border border-white/10 min-w-[48px]">
                  <span className="text-sm font-black text-amber-300">32</span>
                  <span className="block text-[9px] text-slate-300 uppercase font-bold">Mins</span>
                </div>
              </div>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-all flex-shrink-0">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

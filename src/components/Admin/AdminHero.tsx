import React from 'react';
import { Sun, ChevronRight, Calendar } from 'lucide-react';

export const AdminHero: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 mb-6 bg-slate-900">
      {/* Background Daylight Image */}
      <img
        src="/images/umrah/hero_banner.jpg"
        alt="Makkah Panorama"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
      />

      {/* Subtle Gradient Overlays for high legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

      <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Welcome Text */}
        <div className="space-y-1.5 max-w-xl text-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 tracking-wide uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Tuesday, 7 Oct 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white drop-shadow-sm">
            Welcome Back, Admin
          </h1>
          <p className="text-sm sm:text-base text-slate-200 font-normal">
            Here's what's happening with SafarHub Saudi today.
          </p>
        </div>

        {/* Right Weather Widget */}
        <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-white/40 shadow-lg flex items-center gap-3 self-start md:self-auto hover:bg-white transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500">
            <Sun className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Makkah
            </div>
            <div className="text-lg font-bold text-slate-900 flex items-center gap-1.5 leading-tight">
              32°C
              <span className="text-xs font-normal text-slate-500">Mostly Sunny</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform ml-1" />
        </div>
      </div>
    </div>
  );
};

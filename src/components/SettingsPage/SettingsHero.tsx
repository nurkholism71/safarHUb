import React from 'react';
import { Settings as SettingsIcon, Sparkles } from 'lucide-react';

export const SettingsHero: React.FC = () => {
  return (
    <div className="relative w-full bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ACCOUNT & APP PREFERENCES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-200/90 mt-2 font-medium leading-relaxed drop-shadow-xs">
            Manage your account, preferences, security, notifications, and travel settings for a better experience with SafarHub Saudi.
          </p>
        </div>
      </div>
    </div>
  );
};

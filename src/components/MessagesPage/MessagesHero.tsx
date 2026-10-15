import React from 'react';
import {
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe2,
  Building2,
  Sparkles,
  Lock
} from 'lucide-react';

export const MessagesHero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title, Subtitle & Badges */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>24/7 Live Concierge & Travel Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
            Messages
          </h1>
          <p className="text-base sm:text-lg font-bold text-amber-200 mt-1">
            Stay connected for a smoother journey
          </p>
          <p className="text-xs sm:text-sm text-slate-200/90 mt-1 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
            Chat with our travel support team, hotels, transport providers, airport services, jastip, and umrah guides — all in one place.
          </p>

          {/* 4 Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 text-[11px] font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <div>
                <span className="font-bold text-white">Fast Response</span>
                <span className="block text-[9px] text-slate-300">Support team ready 24/7</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <div>
                <span className="font-bold text-white">Secure Messaging</span>
                <span className="block text-[9px] text-slate-300">Your data is protected</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <div>
                <span className="font-bold text-white">All Services</span>
                <span className="block text-[9px] text-slate-300">Hotels, transport, airport, jastip</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Globe2 className="w-3.5 h-3.5 text-purple-300" />
              <div>
                <span className="font-bold text-white">Multilingual Support</span>
                <span className="block text-[9px] text-slate-300">Arabic, English, Indonesian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

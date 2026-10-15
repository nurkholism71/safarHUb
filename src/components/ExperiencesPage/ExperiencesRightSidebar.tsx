import React from 'react';
import {
  Compass,
  Sliders,
  ShieldCheck,
  Tag,
  Headphones,
  RotateCcw,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

interface ExperiencesRightSidebarProps {
  onPlanCustomExperience?: () => void;
  onSelectMapLocation?: (city: string) => void;
}

export const ExperiencesRightSidebar: React.FC<ExperiencesRightSidebarProps> = ({
  onPlanCustomExperience,
  onSelectMapLocation
}) => {
  return (
    <div className="space-y-4">
      {/* 1. Popular Destinations Map Widget Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Popular Destinations</span>
          </h4>
          <button
            onClick={() => onSelectMapLocation?.('All Destinations')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-0.5"
          >
            <span>View Map</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Map Visual Container */}
        <div className="relative h-56 w-full rounded-2xl bg-[#e0f2fe]/40 border border-sky-100 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full text-emerald-100/70" viewBox="0 0 300 240" fill="currentColor">
            <path d="M 60,10 Q 140,20 240,40 Q 280,120 270,220 Q 180,230 100,200 Q 40,140 60,10 Z" />
          </svg>

          {/* Pins */}
          <button
            onClick={() => onSelectMapLocation?.('Tabuk')}
            className="absolute top-4 left-10 flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-emerald-800"
          >
            <span className="w-2 h-2 rounded-full bg-slate-500 ring-2 ring-white"></span>
            <span>Tabuk</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('AlUla')}
            className="absolute top-12 left-14 flex items-center gap-1 text-[10px] font-bold text-amber-800 hover:text-amber-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 ring-2 ring-white"></span>
            <span>AlUla</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Madinah')}
            className="absolute top-22 left-22 flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span className="w-3 h-3 rounded-full bg-emerald-600 ring-2 ring-white animate-pulse"></span>
            <span>Madinah</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Jeddah')}
            className="absolute top-34 left-14 flex items-center gap-1 text-[10px] font-bold text-sky-800 hover:text-sky-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 ring-2 ring-white"></span>
            <span>Jeddah</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Makkah')}
            className="absolute top-38 left-26 flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span className="w-3 h-3 rounded-full bg-[#0e5f2c] ring-2 ring-white animate-pulse"></span>
            <span>Makkah</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Taif')}
            className="absolute top-44 left-34 flex items-center gap-1 text-[10px] font-bold text-rose-800 hover:text-rose-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 ring-2 ring-white"></span>
            <span>Taif</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Abha')}
            className="absolute bottom-6 left-38 flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 ring-2 ring-white"></span>
            <span>Abha</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Riyadh')}
            className="absolute top-26 right-20 flex items-center gap-1 text-[10px] font-bold text-purple-800 hover:text-purple-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 ring-2 ring-white"></span>
            <span>Riyadh</span>
          </button>

          <button
            onClick={() => onSelectMapLocation?.('Dammam')}
            className="absolute top-16 right-6 flex items-center gap-1 text-[10px] font-bold text-amber-800 hover:text-amber-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white"></span>
            <span>Dammam</span>
          </button>

          {/* Zoom controls & view all locations */}
          <div className="absolute bottom-2 left-2 flex flex-col bg-white/90 rounded-lg shadow-xs border border-slate-200 overflow-hidden">
            <button className="p-1 hover:bg-slate-100 text-slate-600"><Plus className="w-3 h-3" /></button>
            <button className="p-1 hover:bg-slate-100 text-slate-600 border-t border-slate-100"><Minus className="w-3 h-3" /></button>
          </div>

          <button
            onClick={() => onSelectMapLocation?.('All Locations')}
            className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-white/95 text-[10px] font-bold text-slate-700 shadow-xs border border-slate-200 hover:bg-emerald-50"
          >
            View All Locations ▾
          </button>
        </div>
      </div>

      {/* 2. Customize Your Experience Card */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white rounded-3xl border border-emerald-200/80 p-4.5 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Customize Your Experience
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Create a personalized experience based on your interests, dates, and group size.
            </p>
          </div>
        </div>

        <button
          onClick={onPlanCustomExperience}
          className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98"
        >
          <span>Plan My Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Why Book with SafarHub? Trust Pillars */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4.5 shadow-xs space-y-3.5">
        <h4 className="text-sm font-bold text-slate-900 pb-1 border-b border-slate-100">
          Why Book with SafarHub?
        </h4>

        <div className="space-y-3">
          {/* Pillar 1 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Verified Local Partners</h5>
              <p className="text-[11px] text-slate-500">Trusted and professional guides</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Best Price Guarantee</h5>
              <p className="text-[11px] text-slate-500">Competitive prices and no hidden fees</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Easy Booking & Support</h5>
              <p className="text-[11px] text-slate-500">24/7 customer support in multiple languages</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Flexible Cancellation</h5>
              <p className="text-[11px] text-slate-500">Peace of mind for your travel plans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

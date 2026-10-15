import React from 'react';
import {
  Map,
  Compass,
  CalendarCheck,
  FileCheck,
  CreditCard,
  Scale,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  MapPin
} from 'lucide-react';
import { ESSENTIAL_INFO_LIST, NEARBY_CITIES_LIST } from '../../data/cityGuideData';

interface CityGuideRightSidebarProps {
  onPlanTrip?: () => void;
  onSelectCityPin?: (cityName: string) => void;
  onSelectEssentialInfo?: (infoId: string, title: string) => void;
  onSelectNearbyCity?: (cityName: string) => void;
}

export const CityGuideRightSidebar: React.FC<CityGuideRightSidebarProps> = ({
  onPlanTrip,
  onSelectCityPin,
  onSelectEssentialInfo,
  onSelectNearbyCity
}) => {
  const getEssentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-4 h-4 text-emerald-700" />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4 text-emerald-700" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-emerald-700" />;
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4 text-emerald-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-700" />;
      default:
        return <FileCheck className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Interactive Map Widget Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Interactive Map</span>
          </h4>
          <button
            onClick={() => onSelectCityPin?.('All Saudi Arabia')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-0.5"
          >
            <span>View Full Map</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Map Visual Container */}
        <div className="relative h-48 w-full rounded-2xl bg-[#e0f2fe]/40 border border-sky-100 overflow-hidden">
          {/* Subtle coastline background contour */}
          <svg className="absolute inset-0 w-full h-full text-emerald-100/70" viewBox="0 0 300 200" fill="currentColor">
            <path d="M 60,10 Q 140,20 240,40 Q 280,120 270,180 Q 180,190 100,160 Q 40,110 60,10 Z" />
          </svg>

          {/* City Pins */}
          <button
            onClick={() => onSelectCityPin?.('Tabuk')}
            className="absolute top-4 left-10 flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-emerald-800"
          >
            <span className="w-2 h-2 rounded-full bg-slate-500 ring-2 ring-white"></span>
            <span>Tabuk</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('AlUla')}
            className="absolute top-12 left-16 flex items-center gap-1 text-[10px] font-bold text-amber-800 hover:text-amber-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 ring-2 ring-white"></span>
            <span>AlUla</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Madinah')}
            className="absolute top-20 left-24 flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span className="w-3 h-3 rounded-full bg-emerald-600 ring-2 ring-white animate-pulse"></span>
            <span>Madinah</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Jeddah')}
            className="absolute top-30 left-14 flex items-center gap-1 text-[10px] font-bold text-sky-800 hover:text-sky-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 ring-2 ring-white"></span>
            <span>Jeddah</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Makkah')}
            className="absolute top-34 left-28 flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
          >
            <span className="w-3 h-3 rounded-full bg-[#0e5f2c] ring-2 ring-white animate-pulse"></span>
            <span>Makkah</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Taif')}
            className="absolute top-40 left-34 flex items-center gap-1 text-[10px] font-bold text-rose-800 hover:text-rose-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 ring-2 ring-white"></span>
            <span>Taif</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Riyadh')}
            className="absolute top-24 right-20 flex items-center gap-1 text-[10px] font-bold text-purple-800 hover:text-purple-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 ring-2 ring-white"></span>
            <span>Riyadh</span>
          </button>

          <button
            onClick={() => onSelectCityPin?.('Dammam')}
            className="absolute top-16 right-6 flex items-center gap-1 text-[10px] font-bold text-amber-800 hover:text-amber-950"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white"></span>
            <span>Dammam</span>
          </button>

          {/* Zoom controls & view by city button */}
          <div className="absolute bottom-2 left-2 flex flex-col bg-white/90 rounded-lg shadow-xs border border-slate-200 overflow-hidden">
            <button className="p-1 hover:bg-slate-100 text-slate-600"><Plus className="w-3 h-3" /></button>
            <button className="p-1 hover:bg-slate-100 text-slate-600 border-t border-slate-100"><Minus className="w-3 h-3" /></button>
          </div>

          <button
            onClick={() => onSelectCityPin?.('Makkah')}
            className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-white/95 text-[10px] font-bold text-slate-700 shadow-xs border border-slate-200 hover:bg-emerald-50"
          >
            View by City ▾
          </button>
        </div>
      </div>

      {/* 2. Plan Your Visit Card */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white rounded-3xl border border-emerald-200/80 p-4.5 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Plan Your Visit
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Get personalized recommendations based on your interests and travel dates.
            </p>
          </div>
        </div>

        <button
          onClick={onPlanTrip}
          className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98"
        >
          <span>Create Itinerary</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Essential Information List */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 mb-3 pb-1 border-b border-slate-100">
          Essential Information
        </h4>

        <div className="space-y-1">
          {ESSENTIAL_INFO_LIST.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectEssentialInfo?.(item.id, item.title)}
              className="w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors group"
            >
              <span className="flex items-center gap-2.5">
                {getEssentialIcon(item.icon)}
                <span>{item.title}</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>
      </div>

      {/* 4. Nearby Cities Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
          <h4 className="text-sm font-bold text-slate-900">
            Nearby Cities
          </h4>
          <button
            onClick={() => onSelectNearbyCity?.('All Nearby Destinations')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-0.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {NEARBY_CITIES_LIST.map((city) => (
            <div
              key={city.id}
              onClick={() => onSelectNearbyCity?.(city.name)}
              className="flex items-center justify-between p-2 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-emerald-50/70 hover:border-emerald-200 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900">
                    {city.name}
                  </h5>
                  <p className="text-[10px] text-slate-500 truncate">
                    {city.distanceFrom}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

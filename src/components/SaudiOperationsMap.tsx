import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  Sun,
  Navigation,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { CITY_PINS } from '../data/mockData';
import { CityPin } from '../types';

interface SaudiOperationsMapProps {
  onSelectCity?: (city: CityPin) => void;
}

export const SaudiOperationsMap: React.FC<SaudiOperationsMapProps> = ({ onSelectCity }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCity, setHoveredCity] = useState<CityPin | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityPin | null>(CITY_PINS[0]);

  const mapFilters = [
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'airport', label: 'Airport', icon: PlaneTakeoff },
    { id: 'jastip', label: 'Jastip', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah', icon: MoonStar },
  ];

  const handleCityClick = (city: CityPin) => {
    setSelectedCity(city);
    if (onSelectCity) onSelectCity(city);
  };

  return (
    <div className="flex flex-col h-full p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
      {/* Header & Map Layer Filters */}
      <div className="pb-3 mb-3 border-b border-slate-100 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <h2 className="text-base font-bold text-slate-900 font-serif">Saudi Operations Map</h2>
          </div>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Live Network
          </span>
        </div>
        
        <p className="text-[11px] text-slate-500">Live operational network across KSA</p>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scrollbar-none pt-0.5">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all shrink-0 ${
              activeFilter === 'all'
                ? 'bg-[#0e5f2c] text-white border-[#0e5f2c] shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All
          </button>
          {mapFilters.map((f) => {
            const Icon = f.icon;
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(activeFilter === f.id ? 'all' : f.id)}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#0e5f2c] text-white border-[#0e5f2c] shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Map Visual Area */}
      <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-[#eaf4ed] via-[#d7ede0] to-[#cae7d5] rounded-2xl overflow-hidden border border-emerald-900/10 p-4">
        {/* Soft Arabian Peninsula Topography Graphic */}
        <svg
          viewBox="0 0 1000 700"
          className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        >
          {/* Saudi Arabia Landmass Contour */}
          <path
            d="M 160,180 Q 280,100 480,110 T 780,220 Q 890,260 840,420 T 640,580 Q 480,640 380,620 T 220,490 Q 180,380 160,180 Z"
            fill="#c2e3ce"
            stroke="#9fd1b1"
            strokeWidth="3"
            strokeDasharray="4,4"
          />

          {/* Connected Corridor lines: Jeddah - Makkah - Madinah - Riyadh */}
          {/* Madinah (300, 245) to Makkah (350, 364) */}
          <line x1="300" y1="245" x2="350" y2="364" stroke="#15803d" strokeWidth="3" strokeDasharray="6,4" className="animate-pulse" />
          {/* Jeddah (280, 385) to Makkah (350, 364) */}
          <line x1="280" y1="385" x2="350" y2="364" stroke="#15803d" strokeWidth="4" />
          {/* Makkah (350, 364) to Taif (400, 406) */}
          <line x1="350" y1="364" x2="400" y2="406" stroke="#15803d" strokeWidth="2.5" strokeDasharray="3,3" />
          {/* Makkah (350, 364) to Riyadh (620, 315) */}
          <line x1="350" y1="364" x2="620" y2="315" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="4,4" />
          {/* Riyadh to Dammam */}
          <line x1="620" y1="315" x2="780" y2="294" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="4,4" />
        </svg>

        {/* Interactive City Pins */}
        {CITY_PINS.map((city) => {
          const isSelected = selectedCity?.id === city.id;
          return (
            <div
              key={city.id}
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              onClick={() => handleCityClick(city)}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* Pulse Ring for Hubs */}
              {city.isHub && (
                <span className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
              )}

              {/* Pin Icon / Dot */}
              <div
                className={`relative flex items-center justify-center w-7 h-7 rounded-full shadow-md transition-transform duration-200 group-hover:scale-125 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-300/60 font-bold'
                    : 'bg-emerald-800 text-white ring-2 ring-white hover:bg-emerald-700'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
              </div>

              {/* City Label Below Pin */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 bg-white/90 backdrop-blur-xs rounded-md shadow-xs border border-emerald-900/10 whitespace-nowrap text-[10px] font-extrabold text-slate-800">
                {city.name}
              </div>
            </div>
          );
        })}

        {/* Selected City Info Overlay Card */}
        {selectedCity && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs p-3 bg-white/95 backdrop-blur-md rounded-xl border border-emerald-900/20 shadow-lg z-30 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-900">{selectedCity.name} Hub</span>
                <span className="ml-1.5 text-[11px] text-emerald-800 font-arabic font-semibold">({selectedCity.arabicName})</span>
              </div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                {selectedCity.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{selectedCity.activeHotels} Hotels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5 text-blue-600" />
                <span>{selectedCity.activeTransfers} Transfers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>{selectedCity.temp} • {selectedCity.weather}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-emerald-700 font-bold">Express Available</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

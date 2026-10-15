import React, { useState } from 'react';
import {
  MapPin,
  Maximize2,
  PlaneLanding,
  PlaneTakeoff,
  Briefcase,
  Users,
  Car,
  Bus,
  Coffee,
  Info
} from 'lucide-react';

export const AirportTerminalMap: React.FC = () => {
  const [selectedAirportTab, setSelectedAirportTab] = useState<'jed' | 'ruh' | 'med' | 'dmm'>('jed');

  return (
    <div className="flex flex-col h-full p-5 bg-white border border-slate-200/90 rounded-3xl shadow-xs justify-between">
      <div>
        {/* Header with Title & Subtitle aligned cleanly */}
        <div className="pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Airport Map & Facilities
              </h3>
              <p className="text-[11px] text-slate-500">Terminal navigation & points</p>
            </div>
          </div>

          {/* City Switcher Tabs - Segmented Pill Bar */}
          <div className="flex items-center p-1 mt-2.5 bg-slate-100 rounded-xl text-[10px] font-bold overflow-x-auto no-scrollbar gap-1">
            <button
              onClick={() => setSelectedAirportTab('jed')}
              className={`flex-1 py-1 px-2 rounded-lg transition-all text-center whitespace-nowrap ${
                selectedAirportTab === 'jed' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jeddah (JED)
            </button>
            <button
              onClick={() => setSelectedAirportTab('ruh')}
              className={`flex-1 py-1 px-2 rounded-lg transition-all text-center whitespace-nowrap ${
                selectedAirportTab === 'ruh' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Riyadh (RUH)
            </button>
            <button
              onClick={() => setSelectedAirportTab('med')}
              className={`flex-1 py-1 px-2 rounded-lg transition-all text-center whitespace-nowrap ${
                selectedAirportTab === 'med' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Madinah (MED)
            </button>
            <button
              onClick={() => setSelectedAirportTab('dmm')}
              className={`flex-1 py-1 px-2 rounded-lg transition-all text-center whitespace-nowrap ${
                selectedAirportTab === 'dmm' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dammam
            </button>
          </div>
        </div>

        {/* Terminal Map Graphic & Facilities Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Map Graphic Canvas (7 cols) */}
          <div className="sm:col-span-7 relative h-48 sm:h-52 bg-gradient-to-br from-[#e0eff5] via-[#cfebf3] to-[#bee4ee] rounded-2xl overflow-hidden border border-slate-200 p-2">
            {/* Terminal Structure Schematic */}
            <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none">
              {/* Terminal Building Crescent Outline */}
              <path
                d="M 20,40 Q 90,15 160,40 L 170,160 Q 90,190 10,160 Z"
                fill="#ffffff"
                stroke="#64748b"
                strokeWidth="2"
              />
              {/* Gates Fingers */}
              <line x1="50" y1="40" x2="40" y2="15" stroke="#0e5f2c" strokeWidth="4" />
              <line x1="90" y1="25" x2="90" y2="5" stroke="#0e5f2c" strokeWidth="4" />
              <line x1="130" y1="40" x2="140" y2="15" stroke="#0e5f2c" strokeWidth="4" />
            </svg>

            {/* Pins */}
            <div className="absolute left-[35%] top-[25%] -translate-x-1/2 flex items-center gap-1 bg-emerald-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
              <span>Gate A14</span>
            </div>

            <div className="absolute left-[50%] top-[55%] -translate-x-1/2 flex items-center gap-1 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-10">
              <span>Meet & Greet</span>
            </div>

            <div className="absolute left-[50%] top-[82%] -translate-x-1/2 flex items-center gap-1 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-10">
              <span>Car Pickup Zone</span>
            </div>

            {/* Label */}
            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/90 rounded text-[9px] font-bold text-slate-800 shadow-xs border">
              Terminal 1 – JED
            </div>
          </div>

          {/* Facilities Icons Legend (5 cols) */}
          <div className="sm:col-span-5 space-y-1.5 text-[10px] font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-700 flex-shrink-0"></span>
              <span className="truncate">Arrivals & Baggage</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
              <span className="truncate">Meet & Greet Point</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
              <span className="truncate">Car & VIP Chauffeur</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></span>
              <span className="truncate">Pilgrim Bus / Coach</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-600 flex-shrink-0"></span>
              <span className="truncate">Executive Lounge & Prayer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span>Live Terminal Wayfinding</span>
        <button
          onClick={() => alert('Opening High-Res Airport Terminal Schematic Map')}
          className="text-emerald-800 font-bold hover:text-emerald-950 flex items-center gap-1"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Expand Map</span>
        </button>
      </div>
    </div>
  );
};

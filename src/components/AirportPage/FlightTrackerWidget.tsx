import React, { useState } from 'react';
import {
  Plane,
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

export const FlightTrackerWidget: React.FC = () => {
  const [flightNo, setFlightNo] = useState('SV816');
  const [isSearched, setIsSearched] = useState(true);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
    <div className="flex flex-col h-full p-5 bg-white border border-slate-200/90 rounded-3xl shadow-xs justify-between">
      <div>
        {/* Header */}
        <div className="pb-3 mb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900 font-serif">Real-time Flight Tracking</h3>
          <p className="text-[11px] text-slate-500">Track your flight and get automatic service updates</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleTrack} className="relative flex items-center mb-4">
          <input
            type="text"
            value={flightNo}
            onChange={(e) => setFlightNo(e.target.value)}
            placeholder="Enter flight number (e.g. SV816)"
            className="w-full py-2.5 pl-3 pr-28 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 outline-hidden focus:ring-2 focus:ring-emerald-600"
          />
          <button
            type="submit"
            className="absolute right-1 px-3 py-1.5 bg-[#0e5f2c] text-white font-bold text-xs rounded-lg hover:bg-[#09421e] transition-colors"
          >
            Track Flight
          </button>
        </form>

        {/* Flight Card */}
        {isSearched && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-amber-50/40 border border-emerald-200/80 shadow-xs space-y-3">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-800 text-amber-300 font-bold shadow-2xs">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">SV 816</div>
                  <div className="text-[10px] text-slate-500 font-medium">Saudi Arabian Airlines</div>
                </div>
              </div>

              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                Arrived
              </span>
            </div>

            {/* Departure vs Arrival */}
            <div className="flex items-center justify-between pt-1 text-center">
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Jakarta</div>
                <div className="text-sm font-black text-slate-900 font-serif">CGK</div>
                <div className="text-[10px] text-slate-500">12 Oct 2026 • 02:15</div>
              </div>

              <div className="flex flex-col items-center px-3">
                <Plane className="w-4 h-4 text-emerald-700 rotate-90 my-0.5" />
                <span className="text-[9px] text-emerald-800 font-bold bg-emerald-100/80 px-1.5 py-0.2 rounded">Direct</span>
              </div>

              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Jeddah</div>
                <div className="text-sm font-black text-slate-900 font-serif">JED</div>
                <div className="text-[10px] text-slate-500">12 Oct 2026 • 07:45</div>
              </div>
            </div>

            {/* Flight Timeline Progress */}
            <div className="pt-2 border-t border-emerald-100">
              <div className="relative flex items-center justify-between text-[10px] font-bold text-slate-600">
                <div className="flex items-center gap-1 text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>Departed</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>In Flight</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>Arrived</span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-emerald-200 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-emerald-700 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span>Terminal 1, Gate A14</span>
        <span className="font-bold text-emerald-800">Driver Assigned (Captain Tariq)</span>
      </div>
    </div>
  );
};

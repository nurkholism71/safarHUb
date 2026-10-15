import React from 'react';
import { Plus } from 'lucide-react';

interface AdminAirportHeaderProps {
  onNewServiceBooking?: () => void;
}

export const AdminAirportHeader: React.FC<AdminAirportHeaderProps> = ({
  onNewServiceBooking
}) => {
  return (
    <div className="space-y-4">
      {/* Title Bar with New Booking Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Airport Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all airport services including transfers, lounge access, meet & assist, fast track, baggage handling, and more.
          </p>
        </div>

        <button
          onClick={onNewServiceBooking}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0e5f2c] hover:bg-[#0b4b23] text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-900/20 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>New Service Booking</span>
        </button>
      </div>

      {/* Panoramic Daylight Airport Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 h-36 sm:h-44 group">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85"
          alt="Saudi Premier International Airport"
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/30 to-transparent flex flex-col justify-end p-5 text-white">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold w-fit mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            28 Active Airports • 24/7 Operations Hub
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-sm">
            Kingdom of Saudi Arabia Aviation & Transit Network
          </h2>
        </div>
      </div>
    </div>
  );
};

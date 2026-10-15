import React from 'react';
import { Download, Plus, ChevronDown } from 'lucide-react';

interface AdminHotelsHeaderProps {
  onAddHotel?: () => void;
  onExport?: () => void;
}

export const AdminHotelsHeader: React.FC<AdminHotelsHeaderProps> = ({
  onAddHotel,
  onExport
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
          Hotels
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage hotel properties, rooms, availability, pricing, and amenities across all destinations.
        </p>
      </div>

      <div className="flex items-center gap-2.5 flex-shrink-0 self-start sm:self-auto">
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 rounded-xl shadow-2xs transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-slate-500" />
          <span>Export</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button
          onClick={onAddHotel}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0e5f2c] hover:bg-[#0a4620] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Hotel</span>
        </button>
      </div>
    </div>
  );
};

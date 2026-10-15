import React from 'react';
import { Search, MapPin, Plane, Tag, CheckCircle2, RotateCcw } from 'lucide-react';

interface AdminUmrahFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCity: string;
  onCityChange: (val: string) => void;
  selectedAirline: string;
  onAirlineChange: (val: string) => void;
  selectedTier: string;
  onTierChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  onResetFilters: () => void;
}

export const AdminUmrahFilterBar: React.FC<AdminUmrahFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedAirline,
  onAirlineChange,
  selectedTier,
  onTierChange,
  selectedStatus,
  onStatusChange,
  onResetFilters
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by package name, code, PPIU partner, flight, or mutawwif..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Departure City Filter */}
        <div className="lg:col-span-2 relative">
          <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Departures</option>
            <option value="Jakarta (CGK)">Jakarta (CGK)</option>
            <option value="Surabaya (SUB)">Surabaya (SUB)</option>
            <option value="Kuala Lumpur (KUL)">Kuala Lumpur (KUL)</option>
          </select>
        </div>

        {/* Airline Filter */}
        <div className="lg:col-span-2 relative">
          <Plane className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedAirline}
            onChange={(e) => onAirlineChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Airlines</option>
            <option value="Saudia Airlines">Saudia Airlines</option>
            <option value="Garuda Indonesia">Garuda Indonesia</option>
            <option value="Turkish Airlines">Turkish Airlines</option>
            <option value="Malaysia Airlines">Malaysia Airlines</option>
          </select>
        </div>

        {/* Package Tier Filter */}
        <div className="lg:col-span-2 relative">
          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedTier}
            onChange={(e) => onTierChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Tiers</option>
            <option value="Reguler">Reguler</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="VIP & Executive">VIP & Executive</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Ramadhan">Ramadhan</option>
            <option value="Plus Turki">Plus Turki</option>
          </select>
        </div>

        {/* Reset Filters */}
        <div className="lg:col-span-2 flex items-center gap-2">
          <button
            onClick={onResetFilters}
            className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

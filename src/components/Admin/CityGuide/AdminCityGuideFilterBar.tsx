import React from 'react';
import { Search, MapPin, Tag, CheckCircle2, RotateCcw } from 'lucide-react';

interface AdminCityGuideFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedProvince: string;
  onProvinceChange: (val: string) => void;
  selectedTier: string;
  onTierChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  onResetFilters: () => void;
}

export const AdminCityGuideFilterBar: React.FC<AdminCityGuideFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedProvince,
  onProvinceChange,
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
            placeholder="Search city, code, Arabic name, heritage tags, or curator..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Province Filter */}
        <div className="lg:col-span-3 relative">
          <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Provinces</option>
            <option value="Makkah Province">Makkah Province</option>
            <option value="Madinah Province">Madinah Province</option>
            <option value="Riyadh Province">Riyadh Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="Tabuk Province">Tabuk Province</option>
          </select>
        </div>

        {/* City Tier Filter */}
        <div className="lg:col-span-2 relative">
          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedTier}
            onChange={(e) => onTierChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Tiers</option>
            <option value="Holy City">Holy City</option>
            <option value="Capital Metropolis">Capital Metropolis</option>
            <option value="Red Sea Hub">Red Sea Hub</option>
            <option value="UNESCO Heritage">UNESCO Heritage</option>
            <option value="Mountain City">Mountain City</option>
            <option value="Megacity / SEZ">Megacity / SEZ</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-2 relative">
          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="In Review">In Review</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* Reset Filters */}
        <div className="lg:col-span-1 flex items-center">
          <button
            onClick={onResetFilters}
            className="w-full py-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-slate-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

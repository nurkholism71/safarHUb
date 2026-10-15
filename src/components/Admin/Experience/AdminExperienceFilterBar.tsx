import React from 'react';
import { Search, MapPin, Tag, Filter, CheckCircle2, RotateCcw } from 'lucide-react';

interface AdminExperienceFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCity: string;
  onCityChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  selectedGroupType: string;
  onGroupTypeChange: (val: string) => void;
  onResetFilters: () => void;
}

export const AdminExperienceFilterBar: React.FC<AdminExperienceFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  selectedGroupType,
  onGroupTypeChange,
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
            placeholder="Search by tour name, code, guide, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* City Filter */}
        <div className="lg:col-span-2 relative">
          <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Destinations</option>
            <option value="Makkah">Makkah</option>
            <option value="Madinah">Madinah</option>
            <option value="AlUla">AlUla</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Taif">Taif</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-2 relative">
          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="Religious & Ziyarat">Religious & Ziyarat</option>
            <option value="Historical & Heritage">Historical & Heritage</option>
            <option value="Desert Safari & Nature">Desert Safari & Nature</option>
            <option value="Food & Culinary">Food & Culinary</option>
            <option value="Adventure & Diving">Adventure & Diving</option>
            <option value="City Tours & Architecture">City Tours & Architecture</option>
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
            <option value="Active">Active / Open</option>
            <option value="Full">Full Capacity</option>
            <option value="Draft">Draft</option>
            <option value="Inactive">Inactive</option>
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

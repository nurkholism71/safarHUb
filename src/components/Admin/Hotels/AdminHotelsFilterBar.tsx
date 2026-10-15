import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';

interface AdminHotelsFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDestination: string;
  onDestinationChange: (dest: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedRating: string;
  onRatingChange: (rating: string) => void;
  onFilterClick?: () => void;
}

export const AdminHotelsFilterBar: React.FC<AdminHotelsFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDestination,
  onDestinationChange,
  selectedStatus,
  onStatusChange,
  selectedCategory,
  onCategoryChange,
  selectedRating,
  onRatingChange,
  onFilterClick
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs mb-5">
      <div className="flex flex-wrap items-center gap-2.5 flex-1 min-w-0">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search hotel name, location, owner..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white transition-all"
          />
        </div>

        {/* Destination dropdown */}
        <div className="relative">
          <select
            value={selectedDestination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Destinations</option>
            <option value="makkah">Makkah</option>
            <option value="madinah">Madinah</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status dropdown */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Category dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="5star">5 Star Luxury</option>
            <option value="4star">4 Star Premium</option>
            <option value="3star">3 Star Economy</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Rating dropdown */}
        <div className="relative">
          <select
            value={selectedRating}
            onChange={(e) => onRatingChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Ratings</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={onFilterClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
        >
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

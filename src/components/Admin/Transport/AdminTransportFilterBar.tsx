import React from 'react';
import { Search, ChevronDown, Filter, Download } from 'lucide-react';

interface AdminTransportFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedDateRange: string;
  onDateRangeChange: (range: string) => void;
  onFilterClick?: () => void;
  onExport?: () => void;
}

export const AdminTransportFilterBar: React.FC<AdminTransportFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  selectedCity,
  onCityChange,
  selectedDateRange,
  onDateRangeChange,
  onFilterClick,
  onExport
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs mb-5">
      <div className="flex flex-wrap items-center gap-2.5 flex-1 min-w-0">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search service, route, provider, vehicle..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white transition-all"
          />
        </div>

        {/* Type Filter */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="flight">Flight</option>
            <option value="bus">Bus</option>
            <option value="private car">Private Car</option>
            <option value="train">Train</option>
            <option value="airport transfer">Airport Transfer</option>
            <option value="car rental">Car Rental</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status Filter */}
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

        {/* City Filter */}
        <div className="relative">
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">All Cities</option>
            <option value="makkah">Makkah</option>
            <option value="madinah">Madinah</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Date Range */}
        <div className="relative">
          <select
            value={selectedDateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
          >
            <option value="all">Date Range</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Filter and Export Buttons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={onFilterClick}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
        >
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <span>Filter</span>
        </button>

        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>Export</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </div>
    </div>
  );
};

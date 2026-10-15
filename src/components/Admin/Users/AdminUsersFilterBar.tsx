import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, Calendar, RotateCcw } from 'lucide-react';

interface AdminUsersFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  selectedUserType: string;
  onUserTypeChange: (val: string) => void;
  selectedCountry: string;
  onCountryChange: (val: string) => void;
  selectedJoinedDate: string;
  onJoinedDateChange: (val: string) => void;
  onResetFilters: () => void;
  onOpenMoreFilters?: () => void;
}

export const AdminUsersFilterBar: React.FC<AdminUsersFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedUserType,
  onUserTypeChange,
  selectedCountry,
  onCountryChange,
  selectedJoinedDate,
  onJoinedDateChange,
  onResetFilters,
  onOpenMoreFilters
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blocked">Blocked</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* User Types Filter */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedUserType}
            onChange={(e) => onUserTypeChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All User Types</option>
            <option value="Customer">Customer</option>
            <option value="Umrah Traveler">Umrah Traveler</option>
            <option value="Premium">Premium</option>
            <option value="Corporate">Corporate</option>
            <option value="Agent">Agent</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Countries Filter */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Countries</option>
            <option value="Indonesia">Indonesia 🇮🇩</option>
            <option value="Saudi Arabia">Saudi Arabia 🇸🇦</option>
            <option value="Egypt">Egypt 🇪🇬</option>
            <option value="Malaysia">Malaysia 🇲🇾</option>
            <option value="Pakistan">Pakistan 🇵🇰</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Joined Date Filter */}
        <div className="lg:col-span-1 relative">
          <select
            value={selectedJoinedDate}
            onChange={(e) => onJoinedDateChange(e.target.value)}
            className="w-full pl-2 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">Joined Date</option>
            <option value="2026">2026</option>
            <option value="last30">Last 30 Days</option>
            <option value="last90">Last 90 Days</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* More Filters & Reset */}
        <div className="lg:col-span-1 flex items-center gap-1.5">
          <button
            onClick={onOpenMoreFilters || onResetFilters}
            className="w-full py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1 transition-colors cursor-pointer"
            title="More Filters / Reset"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Search, Tag, Percent, CheckCircle2, RotateCcw } from 'lucide-react';

interface AdminDealsFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  selectedDiscountType: string;
  onDiscountTypeChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  onResetFilters: () => void;
  totalCount: number;
  filteredCount: number;
}

export const AdminDealsFilterBar: React.FC<AdminDealsFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDiscountType,
  onDiscountTypeChange,
  selectedStatus,
  onStatusChange,
  onResetFilters,
  totalCount,
  filteredCount
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search promo code, campaign name, Arabic text, target audience..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-3 relative">
          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Travel Verticals</option>
            <option value="Flash Deals">Flash Deals (Limited)</option>
            <option value="Umrah Packages">Umrah Packages</option>
            <option value="Hotels & Suites">Hotels & Suites</option>
            <option value="Flights & Airlines">Flights & Airlines</option>
            <option value="Transport & Rail">Transport & Rail</option>
            <option value="Experiences & Tours">Experiences & Tours</option>
            <option value="Jastip & Shopping">Jastip & Shopping</option>
          </select>
        </div>

        {/* Discount Type Filter */}
        <div className="lg:col-span-2 relative">
          <Percent className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedDiscountType}
            onChange={(e) => onDiscountTypeChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Discount Types</option>
            <option value="Percentage">Percentage (%)</option>
            <option value="Fixed Amount">Fixed Amount (SAR)</option>
            <option value="Bundle Offer">Bundle Offer</option>
            <option value="Cashback">Cashback</option>
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
            <option value="Scheduled">Scheduled</option>
            <option value="Paused">Paused</option>
            <option value="Expired">Expired</option>
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

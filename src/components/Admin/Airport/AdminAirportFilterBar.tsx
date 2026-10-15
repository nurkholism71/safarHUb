import React from 'react';
import { Search, Filter, Download, Calendar, ChevronDown } from 'lucide-react';

interface AdminAirportFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedAirport: string;
  onAirportChange: (airport: string) => void;
  selectedService: string;
  onServiceChange: (service: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedDateRange: string;
  onDateRangeChange: (date: string) => void;
  onFilterClick?: () => void;
  onExport?: () => void;
}

export const AdminAirportFilterBar: React.FC<AdminAirportFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedAirport,
  onAirportChange,
  selectedService,
  onServiceChange,
  selectedStatus,
  onStatusChange,
  selectedDateRange,
  onDateRangeChange,
  onFilterClick,
  onExport
}) => {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[200px]">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search booking ID, customer, service..."
          className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white transition-colors"
        />
      </div>

      {/* Filter Selects & Action Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Airports Dropdown */}
        <div className="relative">
          <select
            value={selectedAirport}
            onChange={(e) => onAirportChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg pl-2.5 pr-7 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none cursor-pointer"
          >
            <option value="all">All Airports</option>
            <option value="Riyadh">Riyadh (RUH)</option>
            <option value="Jeddah">Jeddah (JED)</option>
            <option value="Madinah">Madinah (MED)</option>
            <option value="Dammam">Dammam (DMM)</option>
            <option value="NEOM">NEOM (NUM)</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <select
            value={selectedService}
            onChange={(e) => onServiceChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg pl-2.5 pr-7 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none cursor-pointer"
          >
            <option value="all">All Services</option>
            <option value="Meet & Assist">Meet & Assist</option>
            <option value="Lounge Access">Lounge Access</option>
            <option value="Airport Transfer">Airport Transfer</option>
            <option value="Fast Track">Fast Track</option>
            <option value="Baggage Service">Baggage Service</option>
            <option value="Car Rental">Car Rental</option>
            <option value="Airport Hotel">Airport Hotel</option>
            <option value="Special Assistance">Special Assistance</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg pl-2.5 pr-7 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Date Range Picker Pill */}
        <div className="relative">
          <button
            type="button"
            onClick={() => onDateRangeChange(selectedDateRange === 'all' ? 'custom' : 'all')}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium flex items-center gap-1.5 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Calendar className="w-3 h-3 text-slate-400" />
            <span className="whitespace-nowrap">7 Oct 2026 - 7 Nov 2026</span>
          </button>
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="text-xs bg-white border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 rounded-lg px-3 py-1.5 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
        >
          <Filter className="w-3 h-3 text-slate-500" />
          <span>Filter</span>
        </button>

        {/* Export Dropdown Button */}
        <button
          onClick={onExport}
          className="text-xs bg-white border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 rounded-lg px-3 py-1.5 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
        >
          <Download className="w-3 h-3 text-slate-500" />
          <span>Export</span>
          <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
};

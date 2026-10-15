import React from 'react';
import { Search, ChevronDown, Calendar, RotateCcw } from 'lucide-react';

interface AdminPaymentsFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedDateRange: string;
  onDateRangeChange: (val: string) => void;
  selectedPaymentMethod: string;
  onPaymentMethodChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  selectedService: string;
  onServiceChange: (val: string) => void;
  selectedCurrency: string;
  onCurrencyChange: (val: string) => void;
  onResetFilters: () => void;
}

export const AdminPaymentsFilterBar: React.FC<AdminPaymentsFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDateRange,
  onDateRangeChange,
  selectedPaymentMethod,
  onPaymentMethodChange,
  selectedStatus,
  onStatusChange,
  selectedService,
  onServiceChange,
  selectedCurrency,
  onCurrencyChange,
  onResetFilters
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Date Range Picker */}
        <div className="lg:col-span-2 relative">
          <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedDateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
            className="w-full pl-8 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="1 Oct 2026 - 31 Oct 2026">1 Oct 2026 - 31 Oct 2026</option>
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Year 2026">Year 2026</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Payment Methods */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedPaymentMethod}
            onChange={(e) => onPaymentMethodChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Payment Methods</option>
            <option value="Credit Card">Credit & Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="STC Pay">STC Pay</option>
            <option value="Apple Pay">Apple Pay</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Cash (Offline)">Cash (Offline)</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
            <option value="Failed">Failed</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Services */}
        <div className="lg:col-span-2 relative">
          <select
            value={selectedService}
            onChange={(e) => onServiceChange(e.target.value)}
            className="w-full pl-3 pr-7 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">All Services</option>
            <option value="Umrah Package">Umrah Packages</option>
            <option value="Hotel Booking">Hotel Bookings</option>
            <option value="Flight Ticket">Flight Tickets</option>
            <option value="Transport">Transport</option>
            <option value="Airport Service">Airport Services</option>
            <option value="Jastip Service">Jastip</option>
            <option value="Experience">Experiences</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Currencies */}
        <div className="lg:col-span-1 relative">
          <select
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="w-full pl-2 pr-6 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            <option value="all">Currencies</option>
            <option value="SAR">SAR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="IDR">IDR</option>
            <option value="MYR">MYR</option>
            <option value="EGP">EGP</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Search Input */}
        <div className="lg:col-span-3 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by transaction ID, booking ID, or user..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};

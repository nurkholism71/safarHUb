import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  ChevronDown,
  MoreVertical,
  ArrowRight,
  CheckCircle2,
  Clock,
  Building2,
  Bus,
  Plane,
  MoonStar,
  ShoppingBag,
  Sparkles,
  Check
} from 'lucide-react';
import { BookingItem } from '../../types/bookings';

interface BookingsListSectionProps {
  bookings: BookingItem[];
  selectedCategory: string;
  onSelectBooking: (booking: BookingItem) => void;
}

export const BookingsListSection: React.FC<BookingsListSectionProps> = ({
  bookings,
  selectedCategory,
  onSelectBooking
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateFilter, setSelectedDateFilter] = useState('All Dates');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchCategory =
        selectedCategory === 'all' || b.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchTypeFilter =
        selectedTypeFilter === 'all' || b.category.toLowerCase() === selectedTypeFilter.toLowerCase();
      const matchTab =
        activeTab === 'All' || b.status.toLowerCase() === activeTab.toLowerCase();
      const matchQuery =
        !searchQuery ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.bookingCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.dateRange.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchTypeFilter && matchTab && matchQuery;
    });
  }, [bookings, selectedCategory, selectedTypeFilter, activeTab, searchQuery]);

  return (
    <div className="space-y-4">
      {/* 1. Status Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'All'
              ? 'bg-[#0e5f2c] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          All Bookings (8)
        </button>
        <button
          onClick={() => setActiveTab('Upcoming')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'Upcoming'
              ? 'bg-[#0e5f2c] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Upcoming (5)
        </button>
        <button
          onClick={() => setActiveTab('Completed')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'Completed'
              ? 'bg-[#0e5f2c] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Completed (2)
        </button>
        <button
          onClick={() => setActiveTab('Cancelled')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'Cancelled'
              ? 'bg-[#0e5f2c] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Cancelled (1)
        </button>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-2.5">
        {/* Search input */}
        <div className="relative flex-1 w-full flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search booking (hotel, transport, flight, etc...)"
            className="w-full text-xs font-semibold pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
          />
        </div>

        {/* All Dates Filter */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100">
          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
          <span>All Dates</span>
        </div>

        {/* All Types Dropdown */}
        <div className="relative">
          <select
            value={selectedTypeFilter}
            onChange={(e) => setSelectedTypeFilter(e.target.value)}
            className="appearance-none px-3 py-2 pr-7 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="hotel">Hotels</option>
            <option value="transport">Transport</option>
            <option value="airport">Airport Services</option>
            <option value="umrah">Umrah Packages</option>
            <option value="jastip">Jastip</option>
            <option value="flight">Flights</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Sort by */}
        <div className="relative">
          <select className="appearance-none px-3 py-2 pr-7 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer">
            <option>Sort by: Newest First</option>
            <option>Sort by: Departure Date</option>
            <option>Sort by: Price High to Low</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 3. List of Booking Cards */}
      <div className="space-y-3.5">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="group bg-white border border-slate-200/90 rounded-3xl p-4 shadow-xs hover:border-emerald-600/70 hover:shadow-md transition-all flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
          >
            {/* Left Image & Details */}
            <div className="flex items-start sm:items-center gap-4 flex-1">
              {/* Image thumbnail with badge */}
              <div className="relative w-28 sm:w-36 h-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold rounded-md shadow-2xs ${
                    b.status === 'Upcoming'
                      ? 'bg-emerald-800 text-white'
                      : b.status === 'Processing'
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-blue-700 text-white'
                  }`}
                >
                  {b.status}
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-1.5 flex-1 min-w-0">
                {/* Category & Booking Code */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    {b.category === 'hotel' && <Building2 className="w-3 h-3" />}
                    {b.category === 'transport' && <Bus className="w-3 h-3" />}
                    {b.category === 'airport' && <Plane className="w-3 h-3" />}
                    {b.category === 'umrah' && <MoonStar className="w-3 h-3" />}
                    {b.category === 'jastip' && <ShoppingBag className="w-3 h-3" />}
                    {b.category === 'flight' && <Plane className="w-3 h-3" />}
                    <span>{b.categoryLabel}</span>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono font-semibold">
                    Booking ID: <strong className="text-slate-700">{b.bookingCode}</strong>
                  </span>

                  <span
                    className={`ml-auto sm:ml-2 px-2 py-0.5 text-[10px] font-bold rounded-md border ${b.statusColor}`}
                  >
                    {b.badgeLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif leading-snug group-hover:text-emerald-900 transition-colors">
                  {b.title}
                </h3>

                {/* Date range */}
                <p className="text-[11px] text-slate-500 font-medium truncate">{b.dateRange}</p>

                {/* Specs Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] font-semibold text-slate-600">
                  {b.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Optional Jastip Milestone Pills */}
                {b.jastipSteps && (
                  <div className="flex items-center gap-1 pt-1.5 overflow-x-auto no-scrollbar">
                    {b.jastipSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          step.completed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {step.completed ? <Check className="w-2.5 h-2.5" /> : '○'}
                        <span>{step.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Price & Buttons */}
            <div className="flex md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex-shrink-0">
              <div className="text-left md:text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-emerald-800">SAR</span>
                  <span className="text-lg font-black text-slate-900">
                    {b.priceSAR.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectBooking(b)}
                  className="px-4 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  View Details
                </button>

                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(activeMenuId === b.id ? null : b.id);
                    }}
                    className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenuId === b.id && (
                    <div className="absolute right-0 bottom-full mb-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-30 text-xs font-medium text-slate-700 animate-in fade-in zoom-in-95">
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          onSelectBooking(b);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        Download PDF Voucher
                      </button>
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          alert(`Resending confirmation email for ${b.bookingCode}`);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        Resend Confirmation
                      </button>
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          alert(`Modifying dates for ${b.bookingCode}`);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        Change Dates
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

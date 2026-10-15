import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
  MoreVertical,
  Building2,
  Bus,
  Plane,
  MoonStar,
  ShoppingBag,
  CreditCard,
  Wallet,
  FileText,
  RotateCcw
} from 'lucide-react';
import { TransactionItem } from '../../types/payments';

interface TransactionHistorySectionProps {
  transactions: TransactionItem[];
  selectedCategory: string;
  onSelectTransaction: (tx: TransactionItem) => void;
}

export const TransactionHistorySection: React.FC<TransactionHistorySectionProps> = ({
  transactions,
  selectedCategory,
  onSelectTransaction
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'history' | 'methods' | 'wallet' | 'invoices' | 'refunds'>('history');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const mainTabs = [
    { id: 'history', label: 'Transaction History', icon: Clock },
    { id: 'methods', label: 'Payment Methods', icon: CreditCard },
    { id: 'wallet', label: 'Wallet & Balance', icon: Wallet },
    { id: 'invoices', label: 'Invoices & Receipts', icon: FileText },
    { id: 'refunds', label: 'Refunds', icon: RotateCcw }
  ];

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const matchCategory =
        selectedCategory === 'all' || tx.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchType =
        typeFilter === 'all' || tx.category.toLowerCase() === typeFilter.toLowerCase();
      const matchStatus =
        statusFilter === 'all' || tx.status.toLowerCase() === statusFilter.toLowerCase();
      const matchQuery =
        !searchQuery ||
        tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.bookingCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchType && matchStatus && matchQuery;
    });
  }, [transactions, selectedCategory, typeFilter, statusFilter, searchQuery]);

  return (
    <div className="space-y-4">
      {/* 1. Main Navigation Tabs */}
      <div className="flex items-center gap-1 border-b border-slate-200 overflow-x-auto no-scrollbar pb-1">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMainTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMainTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-2.5">
        {/* Search Input */}
        <div className="relative flex-1 w-full flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions (hotel, flight, umrah, etc.)"
            className="w-full text-xs font-semibold pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
          />
        </div>

        {/* All Dates */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 whitespace-nowrap cursor-pointer hover:bg-slate-100">
          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
          <span>All Dates</span>
        </div>

        {/* All Status Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer"
        >
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="refunded">Refunded</option>
        </select>

        {/* All Types Dropdown */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer"
        >
          <option value="all">All Types</option>
          <option value="hotel">Hotels</option>
          <option value="transport">Transport</option>
          <option value="airport">Airport Services</option>
          <option value="umrah">Umrah Packages</option>
          <option value="jastip">Jastip</option>
          <option value="flight">Flights</option>
        </select>
      </div>

      {/* 3. Transaction Items List */}
      <div className="space-y-3">
        {filteredTransactions.map((tx) => (
          <div
            key={tx.id}
            className="group bg-white border border-slate-200/90 rounded-3xl p-4 shadow-xs hover:border-emerald-600/70 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Left: Thumbnail & Details */}
            <div className="flex items-center gap-3.5 flex-1 min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={tx.image}
                  alt={tx.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {tx.category === 'hotel' && <Building2 className="w-3 h-3" />}
                    {tx.category === 'transport' && <Bus className="w-3 h-3" />}
                    {tx.category === 'airport' && <Plane className="w-3 h-3" />}
                    {tx.category === 'umrah' && <MoonStar className="w-3 h-3" />}
                    {tx.category === 'jastip' && <ShoppingBag className="w-3 h-3" />}
                    {tx.category === 'flight' && <Plane className="w-3 h-3" />}
                    <span>{tx.categoryLabel}</span>
                  </div>

                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md border ${
                      tx.status === 'Paid'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                        : tx.status === 'Pending'
                        ? 'bg-amber-100 text-amber-800 border-amber-200'
                        : tx.status === 'Processing'
                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                        : 'bg-rose-100 text-rose-800 border-rose-200'
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif truncate group-hover:text-emerald-900 transition-colors">
                  {tx.title}
                </h3>

                <p className="text-[11px] text-slate-500 font-medium">
                  {tx.dateTime} • Booking ID: <span className="font-mono font-bold text-slate-700">{tx.bookingCode}</span>
                </p>
              </div>
            </div>

            {/* Right: Amount & Action Button */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Amount</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-emerald-800">SAR</span>
                  <span className="text-lg font-black text-slate-900">
                    {tx.priceSAR.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectTransaction(tx)}
                className="px-4 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Building2,
  Luggage,
  Car,
  Compass,
  Plane,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { AdminBookingItem } from '../../../types/adminBooking';

interface AdminBookingsTableProps {
  bookings: AdminBookingItem[];
  selectedBookingId: string | null;
  onSelectBooking: (booking: AdminBookingItem) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminBookingsTable: React.FC<AdminBookingsTableProps> = ({
  bookings,
  selectedBookingId,
  onSelectBooking,
  onOpenActionModal
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedIds.length === bookings.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(bookings.map((b) => b.id));
    }
  };

  const toggleSelectOne = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'Hotel':
        return Building2;
      case 'Umrah Package':
        return Luggage;
      case 'Transport':
        return Car;
      case 'Experience':
        return Compass;
      case 'Airport Service':
        return Plane;
      default:
        return Building2;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'Hotel':
        return 'text-emerald-700 bg-emerald-50';
      case 'Umrah Package':
        return 'text-teal-700 bg-teal-50';
      case 'Transport':
        return 'text-rose-700 bg-rose-50';
      case 'Experience':
        return 'text-emerald-800 bg-emerald-100';
      case 'Airport Service':
        return 'text-blue-700 bg-blue-50';
      default:
        return 'text-slate-700 bg-slate-100';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden h-full">
      {/* Table Container */}
      <div className="overflow-x-auto flex-1 flex flex-col">
        <table className="w-full text-left border-collapse min-w-[880px]">
          <thead>
            <tr className="bg-slate-50/90 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
              <th className="py-3.5 pl-4 pr-2 w-12 text-center whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedIds.length === bookings.length && bookings.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                />
              </th>
              <th className="py-3.5 pl-3 pr-5 font-semibold whitespace-nowrap min-w-[115px]">Booking ID</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[170px]">Customer</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[150px]">Service</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[160px]">Details</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Date</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Amount</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Status</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Payment</th>
              <th className="py-3.5 pr-4 pl-2 font-semibold text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-xs">
            {bookings.map((item) => {
              const isSelected = selectedBookingId === item.id;
              const isChecked = selectedIds.includes(item.id);
              const ServiceIcon = getServiceIcon(item.service.type);
              const serviceColorClass = getServiceColor(item.service.type);

              return (
                <tr
                  key={item.id}
                  onClick={() => onSelectBooking(item)}
                  className={`hover:bg-slate-50/80 transition-colors cursor-pointer group ${
                    isSelected ? 'bg-emerald-50/50 font-medium' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-3.5 pl-4 pr-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => toggleSelectOne(item.id, e as any)}
                      className="rounded border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                    />
                  </td>

                  {/* Booking ID */}
                  <td className="py-3.5 pl-3 pr-5 font-bold font-mono text-slate-900 whitespace-nowrap">
                    {item.id}
                  </td>

                  {/* Customer */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.customer.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                        alt={item.customer.name}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate leading-tight">
                          {item.customer.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {item.customer.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Service */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${serviceColorClass}`}>
                        <ServiceIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 truncate leading-tight">
                          {item.service.category}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {item.service.sublabel}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Details */}
                  <td className="py-3.5 px-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 truncate leading-tight">
                        {item.details.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {item.details.subtitle}
                      </div>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap font-medium">
                    {item.date}
                  </td>

                  {/* Amount */}
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {item.amount}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : item.status === 'Cancelled'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Payment */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div>
                      <div
                        className={`text-xs font-semibold ${
                          item.payment.status === 'Paid'
                            ? 'text-slate-900'
                            : item.payment.status === 'Refunded'
                            ? 'text-rose-600'
                            : 'text-amber-600'
                        }`}
                      >
                        {item.payment.status}
                      </div>
                      {item.payment.method && (
                        <div className="text-[10px] text-slate-400">
                          ({item.payment.method} {item.payment.cardLast4 ? `**** ${item.payment.cardLast4}` : ''})
                        </div>
                      )}
                      {item.payment.refundAmount && (
                        <div className="text-[10px] text-rose-500 font-medium">
                          ({item.payment.refundAmount})
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 pr-4 pl-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => onSelectBooking(item)}
                        className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        View
                      </button>
                      <button
                        onClick={() => {
                          if (onOpenActionModal) {
                            onOpenActionModal(`action-${item.id}`, `Booking Menu ${item.id}`);
                          }
                        }}
                        className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                      >
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 mt-auto">
        <div>
          Showing <span className="font-semibold text-slate-900">1-8</span> of{' '}
          <span className="font-semibold text-slate-900">19,842</span> bookings
        </div>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#0e5f2c] text-white font-bold cursor-pointer">
            1
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium cursor-pointer">
            2
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium cursor-pointer">
            3
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium cursor-pointer">
            4
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium cursor-pointer">
            5
          </button>
          <span className="px-1 text-slate-400">...</span>
          <button className="px-2 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium cursor-pointer">
            2,481
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Per page selector */}
        <div className="relative">
          <button className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 cursor-pointer">
            <span>Show 10 per page</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

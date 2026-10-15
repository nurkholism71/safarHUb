import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { RECENT_BOOKINGS } from '../../data/adminData';

interface AdminRecentBookingsTableProps {
  onViewAll?: () => void;
  onSelectBooking?: (id: string) => void;
}

export const AdminRecentBookingsTable: React.FC<AdminRecentBookingsTableProps> = ({
  onViewAll,
  onSelectBooking
}) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-slate-900">Recent Bookings</span>
        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <th className="pb-2.5 font-semibold">ID</th>
              <th className="pb-2.5 font-semibold">Customer</th>
              <th className="pb-2.5 font-semibold">Service</th>
              <th className="pb-2.5 font-semibold">Date</th>
              <th className="pb-2.5 font-semibold">Amount</th>
              <th className="pb-2.5 font-semibold">Status</th>
              <th className="pb-2.5 w-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {RECENT_BOOKINGS.map((booking) => (
              <tr
                key={booking.id}
                onClick={() => onSelectBooking && onSelectBooking(booking.id)}
                className="hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                {/* ID */}
                <td className="py-3 font-semibold text-slate-700">{booking.id}</td>

                {/* Customer */}
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    {booking.customerAvatar ? (
                      <img
                        src={booking.customerAvatar}
                        alt={booking.customerName}
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                        {booking.customerName.charAt(0)}
                      </div>
                    )}
                    <span className="font-medium text-slate-900">{booking.customerName}</span>
                  </div>
                </td>

                {/* Service */}
                <td className="py-3 text-slate-600 font-medium">{booking.service}</td>

                {/* Date */}
                <td className="py-3 text-slate-500 whitespace-nowrap">{booking.date}</td>

                {/* Amount */}
                <td className="py-3 font-bold text-slate-900">{booking.amount}</td>

                {/* Status */}
                <td className="py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                      booking.status === 'Confirmed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : booking.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

                {/* Chevron */}
                <td className="py-3 text-right">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

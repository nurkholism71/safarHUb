import React, { useState } from 'react';
import {
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Armchair,
  Car,
  Zap,
  Luggage,
  Key,
  Hotel,
  HeartHandshake
} from 'lucide-react';
import { AdminAirportBookingItem } from '../../../types/adminAirport';

interface AdminAirportTableProps {
  items: AdminAirportBookingItem[];
  onOpenActionModal?: (actionId: string, title: string) => void;
}

export const AdminAirportTable: React.FC<AdminAirportTableProps> = ({
  items,
  onOpenActionModal
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedIds.length === items.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(items.map((i) => i.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-3.5 h-3.5 text-blue-600" />;
      case 'Armchair':
        return <Armchair className="w-3.5 h-3.5 text-amber-600" />;
      case 'Car':
        return <Car className="w-3.5 h-3.5 text-sky-600" />;
      case 'Zap':
        return <Zap className="w-3.5 h-3.5 text-purple-600" />;
      case 'Luggage':
        return <Luggage className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Key':
        return <Key className="w-3.5 h-3.5 text-emerald-600" />;
      case 'Hotel':
        return <Hotel className="w-3.5 h-3.5 text-teal-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />;
      default:
        return <UserCheck className="w-3.5 h-3.5 text-blue-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Completed':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Table Header Title */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Recent Airport Service Bookings
          </h3>
          <p className="text-[11px] text-slate-500">
            Real-time live passenger logistics across all Saudi terminals
          </p>
        </div>
      </div>

      {/* Table Canvas */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600">
              <th className="py-3 px-3.5 w-8">
                <input
                  type="checkbox"
                  checked={selectedIds.length === items.length && items.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
              </th>
              <th className="py-3 px-3 whitespace-nowrap">ID</th>
              <th className="py-3 px-3 whitespace-nowrap">Customer</th>
              <th className="py-3 px-3 whitespace-nowrap">Service</th>
              <th className="py-3 px-3 whitespace-nowrap">Airport</th>
              <th className="py-3 px-3 whitespace-nowrap">Flight / Details</th>
              <th className="py-3 px-3 whitespace-nowrap">Date & Time</th>
              <th className="py-3 px-3 whitespace-nowrap">Amount</th>
              <th className="py-3 px-3 whitespace-nowrap">Status</th>
              <th className="py-3 px-3 whitespace-nowrap text-right pr-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {items.map((item) => {
              const isSelected = selectedIds.includes(item.id);

              return (
                <tr
                  key={item.id}
                  className={`hover:bg-slate-50/70 transition-colors ${
                    isSelected ? 'bg-emerald-50/30' : ''
                  }`}
                >
                  <td className="py-3 px-3.5">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectItem(item.id)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </td>

                  {/* ID */}
                  <td className="py-3 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    {item.code}
                  </td>

                  {/* Customer */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.avatar}
                        alt={item.customer}
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                      />
                      <span className="font-medium text-slate-900">{item.customer}</span>
                    </div>
                  </td>

                  {/* Service */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                        {getServiceIcon(item.serviceIcon)}
                      </div>
                      <span className="font-medium text-slate-900">{item.service}</span>
                    </div>
                  </td>

                  {/* Airport */}
                  <td className="py-3 px-3 whitespace-nowrap text-slate-700 font-medium">
                    {item.airport}
                  </td>

                  {/* Flight / Details */}
                  <td className="py-3 px-3 whitespace-nowrap text-slate-600 font-medium">
                    {item.flightDetails}
                  </td>

                  {/* Date & Time */}
                  <td className="py-3 px-3 whitespace-nowrap text-slate-500 text-[11px]">
                    {item.dateTime}
                  </td>

                  {/* Amount */}
                  <td className="py-3 px-3 whitespace-nowrap font-bold text-slate-900">
                    {item.amount}
                  </td>

                  {/* Status */}
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-3 whitespace-nowrap text-right pr-4">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() =>
                          onOpenActionModal &&
                          onOpenActionModal(`view-${item.id}`, `Booking Details: ${item.code} - ${item.customer}`)
                        }
                        className="text-xs font-semibold text-slate-600 hover:text-emerald-700 px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          onOpenActionModal &&
                          onOpenActionModal(`options-${item.id}`, `Booking Options: ${item.code}`)
                        }
                        className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-700">1-8</span> of{' '}
          <span className="font-semibold text-slate-700">5,240</span> bookings
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="px-2.5 py-1 rounded bg-[#0e5f2c] text-white font-bold text-xs shadow-xs">
              1
            </button>
            <button className="px-2.5 py-1 rounded hover:bg-slate-100 text-slate-700 font-medium text-xs">
              2
            </button>
            <button className="px-2.5 py-1 rounded hover:bg-slate-100 text-slate-700 font-medium text-xs">
              3
            </button>
            <button className="px-2.5 py-1 rounded hover:bg-slate-100 text-slate-700 font-medium text-xs">
              4
            </button>
            <button className="px-2.5 py-1 rounded hover:bg-slate-100 text-slate-700 font-medium text-xs">
              5
            </button>
            <span className="px-1 text-slate-400">...</span>
            <button className="px-2.5 py-1 rounded hover:bg-slate-100 text-slate-700 font-medium text-xs">
              655
            </button>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-1.5 rounded border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pl-2 border-l border-slate-200">
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md px-2 py-1 font-medium focus:outline-none cursor-pointer">
              <option>Show 10 per page</option>
              <option>Show 25 per page</option>
              <option>Show 50 per page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

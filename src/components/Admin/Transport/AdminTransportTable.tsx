import React, { useState } from 'react';
import {
  Plane,
  Bus,
  Car,
  Train,
  PlaneTakeoff,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { AdminTransportItem } from '../../../types/adminTransport';

interface AdminTransportTableProps {
  items: AdminTransportItem[];
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminTransportTable: React.FC<AdminTransportTableProps> = ({
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
      case 'Flight':
        return Plane;
      case 'Bus':
        return Bus;
      case 'Private Car':
        return Car;
      case 'Train':
        return Train;
      case 'Airport Transfer':
        return PlaneTakeoff;
      case 'Car Rental':
        return Car;
      default:
        return Car;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'Flight':
        return 'text-blue-700 bg-blue-50';
      case 'Bus':
        return 'text-emerald-700 bg-emerald-50';
      case 'Private Car':
        return 'text-amber-700 bg-amber-50';
      case 'Train':
        return 'text-purple-700 bg-purple-50';
      case 'Airport Transfer':
        return 'text-sky-700 bg-sky-50';
      case 'Car Rental':
        return 'text-rose-700 bg-rose-50';
      default:
        return 'text-slate-700 bg-slate-50';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden h-full">
      {/* Table Container */}
      <div className="overflow-x-auto flex-1 flex flex-col">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead>
            <tr className="bg-slate-50/90 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
              <th className="py-3.5 pl-4 pr-2 w-12 text-center whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedIds.length === items.length && items.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                />
              </th>
              <th className="py-3.5 pl-3 pr-4 font-semibold whitespace-nowrap min-w-[90px]">ID</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[140px]">Type</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[190px]">Route / Service</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[130px]">Provider</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[140px]">Vehicle</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Price (SAR)</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Status</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Bookings</th>
              <th className="py-3.5 pr-4 pl-2 font-semibold text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-xs">
            {items.map((item) => {
              const isChecked = selectedIds.includes(item.id);
              const ServiceIcon = getServiceIcon(item.type);
              const serviceColor = getServiceColor(item.type);

              return (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
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

                  {/* ID */}
                  <td className="py-3.5 pl-3 pr-4 font-bold font-mono text-slate-900 whitespace-nowrap">
                    {item.code}
                  </td>

                  {/* Type */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${serviceColor}`}>
                        <ServiceIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-slate-900 whitespace-nowrap">
                        {item.type}
                      </span>
                    </div>
                  </td>

                  {/* Route / Service */}
                  <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                    {item.route}
                  </td>

                  {/* Provider */}
                  <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap font-medium">
                    {item.provider}
                  </td>

                  {/* Vehicle */}
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">
                    {item.vehicle}
                  </td>

                  {/* Price */}
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {item.price}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Bookings */}
                  <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                    {item.bookingsCount}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 pr-4 pl-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => {
                          if (onOpenActionModal) {
                            onOpenActionModal(`manage-transport-${item.id}`, `Manage Route: ${item.route}`);
                          }
                        }}
                        className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer"
                      >
                        Manage
                      </button>
                      <button
                        onClick={() => {
                          if (onOpenActionModal) {
                            onOpenActionModal(`transport-menu-${item.id}`, `Transport Options: ${item.code}`);
                          }
                        }}
                        className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
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
          <span className="font-semibold text-slate-900">860</span> services
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
            108
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

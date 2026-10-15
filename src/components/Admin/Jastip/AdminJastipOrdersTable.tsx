import React, { useState } from 'react';
import { MoreHorizontal, ArrowRight } from 'lucide-react';
import { AdminJastipOrderItem } from '../../../types/adminJastip';

interface AdminJastipOrdersTableProps {
  orders: AdminJastipOrderItem[];
  onOpenActionModal?: (actionId: string, title: string) => void;
  onViewAll?: () => void;
}

export const AdminJastipOrdersTable: React.FC<AdminJastipOrdersTableProps> = ({
  orders,
  onOpenActionModal,
  onViewAll
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedIds.length === orders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(orders.map((o) => o.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'On Process':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      <div>
        {/* Table Header */}
        <div className="p-3.5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Recent Jastip Orders
            </h3>
            <p className="text-[10px] text-slate-500">
              Live shopping requests and direct delivery status
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="text-[10px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            View All <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-semibold text-slate-600">
                <th className="py-2 px-2.5 w-6">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === orders.length && orders.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer w-3 h-3"
                  />
                </th>
                <th className="py-2 px-1.5 whitespace-nowrap">Order ID</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Customer</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Items</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Location</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Total</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Status</th>
                <th className="py-2 px-1.5 whitespace-nowrap">Date</th>
                <th className="py-2 px-1.5 whitespace-nowrap text-right pr-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11px] text-slate-700">
              {orders.map((item) => {
                const isSelected = selectedIds.includes(item.id);

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50/70 transition-colors ${
                      isSelected ? 'bg-emerald-50/30' : ''
                    }`}
                  >
                    <td className="py-2 px-2.5">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectItem(item.id)}
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer w-3 h-3"
                      />
                    </td>

                    {/* Order ID */}
                    <td className="py-2 px-1.5 font-semibold text-slate-900 whitespace-nowrap text-[10.5px]">
                      {item.code}
                    </td>

                    {/* Customer */}
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <img
                          src={item.avatar}
                          alt={item.customer}
                          className="w-5 h-5 rounded-full object-cover ring-1 ring-slate-200 flex-shrink-0"
                        />
                        <span className="font-medium text-slate-900 text-[10.5px] truncate max-w-[90px]">
                          {item.customer}
                        </span>
                      </div>
                    </td>

                    {/* Items */}
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-1 overflow-hidden">
                          {item.itemImages.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt="Item"
                              className="inline-block w-4 h-4 rounded object-cover ring-1 ring-white"
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium">
                          {item.itemsCount} items
                        </span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-2 px-1.5 whitespace-nowrap text-slate-700 font-medium text-[10px]">
                      {item.location}
                    </td>

                    {/* Total */}
                    <td className="py-2 px-1.5 whitespace-nowrap font-bold text-slate-900 text-[10.5px]">
                      {item.total}
                    </td>

                    {/* Status */}
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-[8.5px] font-semibold border ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-2 px-1.5 whitespace-nowrap text-slate-400 text-[9.5px]">
                      {item.date}
                    </td>

                    {/* Actions */}
                    <td className="py-2 px-1.5 whitespace-nowrap text-right pr-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() =>
                            onOpenActionModal &&
                            onOpenActionModal(`jastip-view-${item.id}`, `Order Details: ${item.code} - ${item.customer}`)
                          }
                          className="text-[10px] font-semibold text-emerald-700 hover:text-emerald-800 px-1.5 py-0.5 rounded hover:bg-emerald-50 transition-colors cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() =>
                            onOpenActionModal &&
                            onOpenActionModal(`jastip-options-${item.id}`, `Order Options: ${item.code}`)
                          }
                          className="p-0.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <MoreHorizontal className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Footer */}
      <div className="p-2.5 px-3.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500 bg-slate-50/40">
        <span>Showing <strong className="text-slate-800 font-semibold">1-8</strong> of 3,280 orders</span>
        <span className="text-emerald-700 font-semibold">Live Real-time Feed</span>
      </div>
    </div>
  );
};

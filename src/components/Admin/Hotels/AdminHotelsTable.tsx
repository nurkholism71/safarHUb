import React, { useState } from 'react';
import { Star, MoreVertical, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { AdminHotelItem } from '../../../types/adminHotel';

interface AdminHotelsTableProps {
  hotels: AdminHotelItem[];
  selectedHotelId: string | null;
  onSelectHotel: (hotel: AdminHotelItem) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminHotelsTable: React.FC<AdminHotelsTableProps> = ({
  hotels,
  selectedHotelId,
  onSelectHotel,
  onOpenActionModal
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedIds.length === hotels.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(hotels.map((h) => h.id));
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
                  checked={selectedIds.length === hotels.length && hotels.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                />
              </th>
              <th className="py-3.5 pl-3 pr-4 font-semibold whitespace-nowrap min-w-[190px]">Hotel</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[130px]">Location</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[110px]">Category</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Rooms</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap min-w-[120px]">Rating</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Status</th>
              <th className="py-3.5 px-4 font-semibold whitespace-nowrap">Owner</th>
              <th className="py-3.5 pr-4 pl-2 font-semibold text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-xs">
            {hotels.map((hotel) => {
              const isSelected = selectedHotelId === hotel.id;
              const isChecked = selectedIds.includes(hotel.id);

              return (
                <tr
                  key={hotel.id}
                  onClick={() => onSelectHotel(hotel)}
                  className={`hover:bg-slate-50/80 transition-colors cursor-pointer group ${
                    isSelected ? 'bg-emerald-50/50 font-medium' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-3.5 pl-4 pr-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => toggleSelectOne(hotel.id, e as any)}
                      className="rounded border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                    />
                  </td>

                  {/* Hotel Thumbnail & Info */}
                  <td className="py-3.5 pl-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-9 h-9 rounded-lg object-cover ring-1 ring-slate-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate leading-tight group-hover:text-emerald-800 transition-colors">
                          {hotel.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {hotel.code}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="py-3.5 px-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 truncate leading-tight">
                        {hotel.location.city}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {hotel.location.area}
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: hotel.stars }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {hotel.stars} Star
                      </div>
                    </div>
                  </td>

                  {/* Rooms */}
                  <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                    {hotel.roomsCount}
                  </td>

                  {/* Rating */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-900">{hotel.rating}</span>
                      <span className="text-[11px] text-slate-400">({hotel.reviewCount.toLocaleString()})</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        hotel.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : hotel.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {hotel.status}
                    </span>
                  </td>

                  {/* Owner */}
                  <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700">
                    {hotel.ownerType}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 pr-4 pl-2 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => onSelectHotel(hotel)}
                        className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        View
                      </button>
                      <button
                        onClick={() => {
                          if (onOpenActionModal) {
                            onOpenActionModal(`hotel-actions-${hotel.id}`, `Hotel Options: ${hotel.name}`);
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
          Showing <span className="font-semibold text-slate-900">1-10</span> of{' '}
          <span className="font-semibold text-slate-900">1,280</span> hotels
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
            128
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

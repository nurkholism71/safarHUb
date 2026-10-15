import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
  Calendar,
  Eye,
  Edit2,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { AdminExperienceItem } from '../../../types/adminExperience';

interface AdminExperienceTableProps {
  experiences: AdminExperienceItem[];
  onViewDetails?: (experience: AdminExperienceItem) => void;
  onEdit?: (experience: AdminExperienceItem) => void;
  onDelete?: (id: string) => void;
}

export const AdminExperienceTable: React.FC<AdminExperienceTableProps> = ({
  experiences,
  onViewDetails,
  onEdit,
  onDelete
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(experiences.map((exp) => exp.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </span>
        );
      case 'Full':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Full
          </span>
        );
      case 'Draft':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
            Draft
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 whitespace-nowrap">
            Inactive
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden">
      {/* Table Header Bar */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white whitespace-nowrap">
            Experience Inventory & Live Departures
          </h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap">
            {experiences.length} Records
          </span>
        </div>

        {selectedIds.length > 0 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
              {selectedIds.length} selected
            </span>
            <button className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-colors whitespace-nowrap">
              Batch Status
            </button>
            <button className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-medium transition-colors whitespace-nowrap">
              Archive
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1180px]">
          <thead>
            <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3.5 w-10 text-center whitespace-nowrap">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    experiences.length > 0 &&
                    selectedIds.length === experiences.length
                  }
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
              </th>
              <th className="py-3 px-3.5 whitespace-nowrap">Experience & Code</th>
              <th className="py-3 px-3.5 whitespace-nowrap">Location & Duration</th>
              <th className="py-3 px-3.5 whitespace-nowrap">Licensed Guide / Provider</th>
              <th className="py-3 px-3.5 whitespace-nowrap">Price & Capacity</th>
              <th className="py-3 px-3.5 whitespace-nowrap">Next Departure</th>
              <th className="py-3 px-3.5 whitespace-nowrap">Status</th>
              <th className="py-3 px-3.5 text-right whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
            {experiences.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              const occupancyPct = Math.round((item.bookedSlots / item.capacity) * 100);

              return (
                <tr
                  key={item.id}
                  className={`hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors ${
                    isSelected ? 'bg-emerald-50/40 dark:bg-emerald-950/20' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-3 px-3.5 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectRow(item.id)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </td>

                  {/* Experience Info */}
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800 shadow-xs">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {item.featured && (
                          <div className="absolute top-1 left-1 w-3.5 h-3.5 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
                            <Sparkles className="w-2 h-2" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            {item.code}
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap">
                            {item.category}
                          </span>
                        </div>
                        <h4
                          onClick={() => onViewDetails?.(item)}
                          className="font-bold text-slate-900 dark:text-white hover:text-emerald-600 cursor-pointer transition-colors whitespace-nowrap"
                        >
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 whitespace-nowrap">
                          <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                            <Star className="w-3 h-3 fill-amber-500" />
                            <span>{item.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{item.reviewsCount} reviews</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Location & Duration */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration} ({item.groupType})</span>
                      </div>
                    </div>
                  </td>

                  {/* Guide / Provider */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.provider.avatar}
                        alt={item.provider.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-xs"
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {item.provider.name}
                          </span>
                          {item.provider.verified && (
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400">
                          MTA Licensed Guide
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Price & Capacity */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="font-extrabold text-slate-900 dark:text-white">
                        {item.currency} {item.pricePerPax}
                        <span className="text-[10px] font-normal text-slate-400"> / pax</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              occupancyPct >= 90
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                            style={{ width: `${Math.min(occupancyPct, 100)}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                          {item.bookedSlots}/{item.capacity} ({occupancyPct}%)
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Next Departure */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span className="text-[11px] font-semibold">{item.nextAvailableDate}</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        📍 {item.meetingPoint}
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-3 px-3.5 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-3.5 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => onViewDetails?.(item)}
                        title="View Details"
                        className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-emerald-600 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onEdit?.(item)}
                        title="Edit Experience"
                        className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDelete?.(item.id)}
                        title="Delete"
                        className="p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
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
  );
};

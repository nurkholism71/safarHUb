import React from 'react';
import { Plus } from 'lucide-react';
import { TRAVELERS_LIST } from '../../data/profileData';
import { TravelerItem } from '../../types/profile';

interface MyTravelersSectionProps {
  onManageTravelers?: () => void;
  onAddTraveler?: () => void;
  onSelectTraveler?: (traveler: TravelerItem) => void;
}

export const MyTravelersSection: React.FC<MyTravelersSectionProps> = ({
  onManageTravelers,
  onAddTraveler,
  onSelectTraveler
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-slate-900">
          My Travelers
        </h3>
        <button
          onClick={onManageTravelers}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
        >
          Manage
        </button>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1">
        {TRAVELERS_LIST.map((traveler) => (
          <div
            key={traveler.id}
            onClick={() => onSelectTraveler?.(traveler)}
            className="flex flex-col items-center text-center cursor-pointer group shrink-0"
          >
            <div className="relative mb-2">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-xs transition-transform group-hover:scale-105 ${
                  traveler.isPrimary
                    ? 'bg-[#062416] text-white ring-2 ring-emerald-600'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {traveler.initials}
              </div>
              {traveler.isPrimary && (
                <span className="absolute -top-1 -right-1 text-xs">👑</span>
              )}
            </div>
            <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate max-w-[85px]">
              {traveler.name}
            </h4>
            <p className="text-[10px] text-slate-500 truncate max-w-[85px]">
              {traveler.role}
            </p>
          </div>
        ))}

        {/* Add Traveler Button */}
        <button
          onClick={onAddTraveler}
          className="flex flex-col items-center text-center group shrink-0"
        >
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-300 text-slate-400 group-hover:border-emerald-600 group-hover:text-emerald-700 flex items-center justify-center mb-2 transition-colors">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-900">
            Add Traveler
          </span>
          <span className="text-[10px] text-slate-400 opacity-0">...</span>
        </button>
      </div>
    </div>
  );
};

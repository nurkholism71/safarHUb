import React from 'react';
import {
  Users,
  User,
  Crown,
  Moon,
  Building2,
  Briefcase,
  Ban
} from 'lucide-react';
import { ADMIN_USER_SEGMENTS } from '../../../data/adminUsersData';

interface AdminUsersSegmentStripProps {
  activeSegment: string;
  onSelectSegment: (segmentId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Users,
  User,
  Crown,
  Moon,
  Building2,
  Briefcase,
  Ban
};

export const AdminUsersSegmentStrip: React.FC<AdminUsersSegmentStripProps> = ({
  activeSegment,
  onSelectSegment
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-0.5">
      <div className="flex items-center gap-2.5 min-w-max">
        {ADMIN_USER_SEGMENTS.map((seg) => {
          const Icon = iconMap[seg.iconName] || Users;
          const isActive = activeSegment === seg.id;

          return (
            <button
              key={seg.id}
              onClick={() => onSelectSegment(seg.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 shadow-xs ring-1 ring-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
              <span>{seg.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

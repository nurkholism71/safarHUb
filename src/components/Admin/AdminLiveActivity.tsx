import React from 'react';
import {
  CalendarCheck,
  UserPlus,
  CreditCard,
  MessageSquare,
  Star,
  ArrowRight
} from 'lucide-react';
import { LIVE_ACTIVITIES } from '../../data/adminData';

interface AdminLiveActivityProps {
  onViewAll?: () => void;
}

export const AdminLiveActivity: React.FC<AdminLiveActivityProps> = ({ onViewAll }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return CalendarCheck;
      case 'user':
        return UserPlus;
      case 'payment':
        return CreditCard;
      case 'support':
        return MessageSquare;
      case 'review':
        return Star;
      default:
        return CalendarCheck;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-slate-900 truncate">Live Activity</span>
        <button
          onClick={onViewAll}
          className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors flex-shrink-0"
        >
          View All <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Activities List */}
      <div className="space-y-2 my-auto">
        {LIVE_ACTIVITIES.map((activity) => {
          const IconComponent = getIcon(activity.iconType);

          return (
            <div
              key={activity.id}
              className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div
                  className={`w-6 h-6 rounded-full ${activity.iconBg} ${activity.iconColor} flex items-center justify-center flex-shrink-0`}
                >
                  <IconComponent className="w-3 h-3" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                    {activity.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate -mt-0.5">
                    {activity.subtitle}
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-slate-400 font-medium whitespace-nowrap flex-shrink-0">
                {activity.timeAgo}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

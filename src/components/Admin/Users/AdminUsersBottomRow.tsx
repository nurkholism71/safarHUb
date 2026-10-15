import React from 'react';
import { ArrowRight, Building2, Luggage, Star, Crown, Users } from 'lucide-react';
import { 
  ADMIN_RECENT_REGISTRATIONS, 
  ADMIN_TOP_USERS_BOOKINGS, 
  ADMIN_TOP_USERS_SPENDING, 
  ADMIN_USER_ACTIVITY_LOGS 
} from '../../../data/adminUsersData';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Luggage,
  Star,
  Crown,
  Users
};

interface AdminUsersBottomRowProps {
  onViewAllRegistrations?: () => void;
  onViewAllTopBookings?: () => void;
  onViewAllTopSpending?: () => void;
  onViewAllActivity?: () => void;
}

export const AdminUsersBottomRow: React.FC<AdminUsersBottomRowProps> = ({
  onViewAllRegistrations,
  onViewAllTopBookings,
  onViewAllTopSpending,
  onViewAllActivity
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
      {/* 1. Recent Registrations */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Recent Registrations
            </h3>
            <button
              onClick={onViewAllRegistrations}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_RECENT_REGISTRATIONS.map((user) => (
              <div key={user.id} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {user.timeAgo}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 flex-shrink-0 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-700/60">
                  <span>{user.flag}</span>
                  <span className="text-[10px] font-medium">{user.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Users by Bookings */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Top Users by Bookings
            </h3>
            <button
              onClick={onViewAllTopBookings}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_TOP_USERS_BOOKINGS.map((user) => (
              <div key={user.id} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="w-4 text-[11px] font-bold text-slate-400 font-mono text-center flex-shrink-0">
                    {user.rank}
                  </span>
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {user.bookingsCount} bookings
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-sans whitespace-nowrap flex-shrink-0 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-700/60">
                  {user.spending}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Top Users by Spending */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Top Users by Spending
            </h3>
            <button
              onClick={onViewAllTopSpending}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_TOP_USERS_SPENDING.map((user) => (
              <div key={user.id} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="w-4 text-[11px] font-bold text-slate-400 font-mono text-center flex-shrink-0">
                    {user.rank}
                  </span>
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      VIP Member
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-sans whitespace-nowrap flex-shrink-0 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-700/60">
                  {user.spending}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. User Activity */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              User Activity
            </h3>
            <button
              onClick={onViewAllActivity}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_USER_ACTIVITY_LOGS.map((act) => {
              const Icon = iconMap[act.iconName] || Users;

              return (
                <div key={act.id} className="flex items-start gap-2.5">
                  <div className={`p-1.5 rounded-lg flex-shrink-0 mt-0.5 ${act.iconColor || 'text-slate-600 bg-slate-100'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                      <span className="font-semibold text-slate-900 dark:text-white">{act.userName}</span>{' '}
                      {act.action}
                    </p>
                    <span className="text-[10px] text-slate-400">
                      {act.timeAgo}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

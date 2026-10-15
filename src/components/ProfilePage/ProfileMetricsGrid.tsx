import React from 'react';
import { Plane, CalendarDays, Star, Award, Diamond } from 'lucide-react';
import { PROFILE_STATS } from '../../data/profileData';

export const ProfileMetricsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-emerald-700" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5 text-blue-700" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-500 fill-amber-500" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-700" />;
      case 'Diamond':
        return <Diamond className="w-5 h-5 text-sky-600" />;
      default:
        return <Plane className="w-5 h-5 text-emerald-700" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return 'bg-emerald-50 text-emerald-700';
      case 'CalendarDays':
        return 'bg-blue-50 text-blue-700';
      case 'Star':
        return 'bg-amber-50 text-amber-700';
      case 'Award':
        return 'bg-purple-50 text-purple-700';
      case 'Diamond':
        return 'bg-sky-50 text-sky-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {PROFILE_STATS.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5"
        >
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${getIconBg(stat.icon)}`}>
            {getIcon(stat.icon)}
          </div>
          <div>
            <span className="text-lg font-extrabold text-slate-900 block leading-tight">
              {stat.value}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

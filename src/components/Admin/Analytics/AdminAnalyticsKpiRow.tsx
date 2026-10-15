import React from 'react';
import { 
  Calendar, 
  Coins, 
  Users, 
  ShoppingBag, 
  Star, 
  PieChart 
} from 'lucide-react';
import { ANALYTICS_KPIS } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsKpiRow: React.FC = () => {
  const getIcon = (iconName: string, iconColor: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className={`w-5 h-5 ${iconColor}`} />;
      case 'Coins':
        return <Coins className={`w-5 h-5 ${iconColor}`} />;
      case 'Users':
        return <Users className={`w-5 h-5 ${iconColor}`} />;
      case 'ShoppingBag':
        return <ShoppingBag className={`w-5 h-5 ${iconColor}`} />;
      case 'Star':
        return <Star className={`w-5 h-5 ${iconColor}`} />;
      case 'PieChart':
        return <PieChart className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <Calendar className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
      {ANALYTICS_KPIS.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              {kpi.title}
            </span>
            <div className={`p-2 rounded-xl ${kpi.bgColorClass}`}>
              {getIcon(kpi.iconName, kpi.iconColorClass)}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {kpi.value}
            </div>
            <div className="mt-1 text-[11px] flex items-center gap-1 font-medium">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                {kpi.change}
              </span>
              <span className="text-slate-400 dark:text-slate-500 truncate">
                {kpi.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

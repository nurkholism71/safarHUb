import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Users, 
  Store, 
  ShoppingBag 
} from 'lucide-react';
import { ANALYTICS_SALES_CHANNELS } from '../../../data/adminAnalyticsData';

interface AdminAnalyticsSalesByChannelProps {
  onViewAll?: () => void;
}

export const AdminAnalyticsSalesByChannel: React.FC<AdminAnalyticsSalesByChannelProps> = ({
  onViewAll
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />;
      case 'Smartphone':
        return <Smartphone className="w-3.5 h-3.5 text-blue-600 shrink-0" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5 text-purple-600 shrink-0" />;
      case 'Store':
        return <Store className="w-3.5 h-3.5 text-orange-600 shrink-0" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-3.5 h-3.5 text-pink-600 shrink-0" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Sales by Channel
        </h3>
        <button
          onClick={onViewAll || (() => alert('View All Sales Channels'))}
          className="text-xs font-semibold text-[#0e5f2c] hover:underline cursor-pointer whitespace-nowrap"
        >
          View All →
        </button>
      </div>

      <div className="space-y-3 my-auto">
        {ANALYTICS_SALES_CHANNELS.map((ch) => (
          <div key={ch.id} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                {getIcon(ch.iconName)}
                <span className="truncate max-w-[110px]">{ch.name}</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                {ch.percentage}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${ch.percentage * 2}%`,
                  backgroundColor: ch.color
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

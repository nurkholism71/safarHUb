import React from 'react';
import { Send, PhoneCall, Video, Activity } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { RecentMarketingActivityItem } from '../../../types/adminMarketing';

interface AdminMarketingRecentActivitiesProps {
  activities: RecentMarketingActivityItem[];
}

const renderActivityIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Send':
      return <Send className={className} />;
    case 'Facebook':
      return <FacebookIcon className={className} />;
    case 'PhoneCall':
      return <PhoneCall className={className} />;
    case 'Instagram':
      return <InstagramIcon className={className} />;
    case 'Video':
      return <TikTokIcon className={className} />;
    default:
      return <Activity className={className} />;
  }
};

export const AdminMarketingRecentActivities: React.FC<AdminMarketingRecentActivitiesProps> = ({
  activities
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Recent Activities
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Real-time marketing actions & triggers
          </p>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </div>

      {/* Activity List */}
      <div className="space-y-3.5">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start gap-3 text-xs">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-700/60 flex items-center justify-center shrink-0 mt-0.5">
              {renderActivityIcon(act.iconName, `w-3.5 h-3.5 ${act.iconColor}`)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="font-semibold text-neutral-900 dark:text-white truncate">
                  {act.title}
                </span>
                <span className="text-[10px] text-neutral-400 shrink-0">
                  {act.timestamp}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                {act.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-700/60 text-center">
        <button className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          View All Audit Logs →
        </button>
      </div>
    </div>
  );
};

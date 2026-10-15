import React from 'react';
import { Video, Target, Mail, PhoneCall } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from './SocialIcons';
import { ChannelPerformanceItem } from '../../../types/adminMarketing';

interface AdminMarketingChannelPerformanceProps {
  channels: ChannelPerformanceItem[];
}

const renderChannelIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Instagram':
      return <InstagramIcon className={className} />;
    case 'Video':
      return <TikTokIcon className={className} />;
    case 'Facebook':
      return <FacebookIcon className={className} />;
    case 'Youtube':
      return <YoutubeIcon className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'PhoneCall':
      return <PhoneCall className={className} />;
    default:
      return <Target className={className} />;
  }
};

export const AdminMarketingChannelPerformance: React.FC<AdminMarketingChannelPerformanceProps> = ({
  channels
}) => {
  const maxReach = Math.max(...channels.map(c => c.reach), 400);

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Channel Performance
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Reach vs Engagement vs Conversion
          </p>
        </div>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
          7 Channels
        </span>
      </div>

      {/* Grouped Channel Rows */}
      <div className="space-y-3">
        {channels.map((ch) => {
          const reachPct = (ch.reach / maxReach) * 100;
          const engPct = (ch.engagement / maxReach) * 100;
          const bookPct = (ch.bookings / maxReach) * 100;

          return (
            <div key={ch.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-medium text-neutral-800 dark:text-neutral-200">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: ch.color }}
                  >
                    {renderChannelIcon(ch.iconName, 'w-3 h-3')}
                  </div>
                  <span className="truncate">{ch.channel}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                  <span>{ch.reach}K reach</span>
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{ch.bookings} conv</span>
                </div>
              </div>

              {/* Multi-layered progress bar */}
              <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden relative">
                <div
                  className="h-full rounded-full absolute left-0 top-0 opacity-40 transition-all duration-500"
                  style={{ width: `${reachPct}%`, backgroundColor: ch.color }}
                />
                <div
                  className="h-full rounded-full absolute left-0 top-0 opacity-70 transition-all duration-500"
                  style={{ width: `${engPct}%`, backgroundColor: ch.color }}
                />
                <div
                  className="h-full rounded-full absolute left-0 top-0 transition-all duration-500"
                  style={{ width: `${bookPct}%`, backgroundColor: ch.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend Footer */}
      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-center gap-4 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-sm bg-neutral-400 opacity-40"></span>
          <span>Reach</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-sm bg-neutral-600 opacity-70"></span>
          <span>Engagement</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-sm bg-neutral-900 dark:bg-neutral-100"></span>
          <span>Bookings</span>
        </div>
      </div>
    </div>
  );
};

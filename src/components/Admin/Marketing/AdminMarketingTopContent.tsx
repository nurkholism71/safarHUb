import React from 'react';
import { Flame } from 'lucide-react';
import { InstagramIcon, TikTokIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { TopContentItem } from '../../../types/adminMarketing';

interface AdminMarketingTopContentProps {
  contentList: TopContentItem[];
  onViewAll?: () => void;
}

const renderChannelBadge = (channel: string) => {
  switch (channel) {
    case 'Instagram':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">
          <InstagramIcon className="w-3 h-3" />
          Instagram
        </span>
      );
    case 'TikTok':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-900 text-white dark:bg-neutral-700 dark:text-neutral-100">
          <TikTokIcon className="w-3 h-3" />
          TikTok
        </span>
      );
    case 'Facebook':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          <FacebookIcon className="w-3 h-3" />
          Facebook
        </span>
      );
    case 'YouTube':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          <YoutubeIcon className="w-3 h-3" />
          YouTube
        </span>
      );
    default:
      return null;
  }
};

export const AdminMarketingTopContent: React.FC<AdminMarketingTopContentProps> = ({
  contentList,
  onViewAll
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Top Performing Content
            </h3>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Ranked by engagement and conversions
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          View Library
        </button>
      </div>

      {/* Content Table / List */}
      <div className="overflow-x-auto no-scrollbar -mx-2 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-100 dark:border-neutral-700 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                <th className="py-2 px-2">#</th>
                <th className="py-2 px-2">Content</th>
                <th className="py-2 px-2">Channel</th>
                <th className="py-2 px-2">Reach</th>
                <th className="py-2 px-2">Engagement</th>
                <th className="py-2 px-2 text-right">Bookings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/50">
              {contentList.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors group"
                >
                  <td className="py-2.5 px-2 font-bold text-neutral-400 group-hover:text-emerald-600">
                    #{item.rank}
                  </td>
                  <td className="py-2.5 px-2">
                    <div className="flex items-center gap-2.5 min-w-[160px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-9 h-9 rounded-lg object-cover shrink-0 shadow-xs"
                      />
                      <div className="min-w-0">
                        <span className="font-semibold text-neutral-900 dark:text-white block truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 px-2 whitespace-nowrap">
                    {renderChannelBadge(item.channel)}
                  </td>
                  <td className="py-2.5 px-2 font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                    {item.reach}
                  </td>
                  <td className="py-2.5 px-2 font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    {item.engagement}
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-neutral-900 dark:text-white whitespace-nowrap">
                    {item.bookings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

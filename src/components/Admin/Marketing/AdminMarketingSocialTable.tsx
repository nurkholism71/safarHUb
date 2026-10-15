import React, { useState } from 'react';
import { Search, Plus, Calendar, Eye, Heart, MessageCircle, Share2, MousePointerClick } from 'lucide-react';
import { SocialPostDatabaseRecord } from '../../../types/adminMarketing';
import { InstagramIcon, TikTokIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

interface AdminMarketingSocialTableProps {
  posts: SocialPostDatabaseRecord[];
  onCreatePost?: () => void;
}

const renderPlatformBadge = (platform: string) => {
  switch (platform) {
    case 'Instagram':
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">
          <InstagramIcon className="w-3 h-3" /> Instagram
        </span>
      );
    case 'TikTok':
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-neutral-900 text-white dark:bg-neutral-700 dark:text-white">
          <TikTokIcon className="w-3 h-3" /> TikTok
        </span>
      );
    case 'Facebook':
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          <FacebookIcon className="w-3 h-3" /> Facebook
        </span>
      );
    case 'YouTube':
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          <YoutubeIcon className="w-3 h-3" /> YouTube
        </span>
      );
    default:
      return <span className="font-semibold text-xs">{platform}</span>;
  }
};

export const AdminMarketingSocialTable: React.FC<AdminMarketingSocialTableProps> = ({
  posts,
  onCreatePost
}) => {
  const [search, setSearch] = useState('');

  const filtered = posts.filter(
    (p) =>
      p.caption.toLowerCase().includes(search.toLowerCase()) ||
      p.platform.toLowerCase().includes(search.toLowerCase()) ||
      p.campaignTag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search social caption, hashtag, platform..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onCreatePost}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Schedule Post</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Platform & Format</th>
              <th className="py-3 px-3">Caption & Media Preview</th>
              <th className="py-3 px-3">Scheduled / Published</th>
              <th className="py-3 px-3">Likes & Comments</th>
              <th className="py-3 px-3">Shares & Clicks</th>
              <th className="py-3 px-3">Campaign Tag</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((post) => (
              <tr key={post.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div>{renderPlatformBadge(post.platform)}</div>
                  <div className="text-[10px] text-neutral-400 mt-1">{post.postType}</div>
                </td>

                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.mediaUrl}
                      alt="preview"
                      className="w-10 h-10 rounded-lg object-cover shrink-0 shadow-xs"
                    />
                    <p className="text-xs font-medium text-neutral-900 dark:text-white line-clamp-2 max-w-[280px]">
                      {post.caption}
                    </p>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap text-neutral-600 dark:text-neutral-300">
                  <div className="font-mono text-xs">{post.scheduledDate}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-semibold">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] mt-0.5">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments.toLocaleString()} comments</span>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
                    <Share2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>{post.shares.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px] mt-0.5">
                    <MousePointerClick className="w-3 h-3" />
                    <span>{post.clicks.toLocaleString()} clicks</span>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                    {post.campaignTag}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      post.status === 'Published'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

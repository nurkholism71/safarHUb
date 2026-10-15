import React, { useState } from 'react';
import { Search, Upload, Image, FileText, Video, Eye, Trash2, Download } from 'lucide-react';
import { ContentMediaAssetRecord } from '../../../types/adminContent';

interface AdminContentMediaLibraryProps {
  mediaAssets: ContentMediaAssetRecord[];
  onUpload?: () => void;
}

export const AdminContentMediaLibrary: React.FC<AdminContentMediaLibraryProps> = ({
  mediaAssets,
  onUpload
}) => {
  const [search, setSearch] = useState('');

  const filtered = mediaAssets.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.fileName.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search media assets, filename, tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onUpload}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload High-Res Assets</span>
        </button>
      </div>

      {/* Grid view */}
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-neutral-200/80 dark:border-neutral-700 overflow-hidden group hover:shadow-md transition-all bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-col justify-between"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-black/60 backdrop-blur-md text-white">
                {item.category}
              </span>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/60 backdrop-blur-md text-white">
                {item.dimensions}
              </span>
            </div>

            <div className="p-3.5">
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                {item.title}
              </h4>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5 truncate">
                {item.fileName} • {item.fileSize}
              </p>

              <div className="mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-semibold text-[11px]">
                  Used in {item.usedInCount} posts
                </span>

                <div className="flex items-center gap-1">
                  <button className="p-1 rounded text-neutral-500 hover:text-emerald-600">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded text-neutral-500 hover:text-rose-600">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

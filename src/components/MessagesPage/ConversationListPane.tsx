import React, { useState } from 'react';
import {
  Search,
  SquarePen,
  Headphones,
  Building2,
  Bus,
  Plane,
  ShoppingBag,
  FileCheck,
  MoonStar
} from 'lucide-react';
import { MessageThreadItem } from '../../types/messages';

interface ConversationListPaneProps {
  threads: MessageThreadItem[];
  selectedThreadId: string;
  onSelectThread: (id: string) => void;
  onCompose: () => void;
}

export const ConversationListPane: React.FC<ConversationListPaneProps> = ({
  threads,
  selectedThreadId,
  onSelectThread,
  onCompose
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterChips = [
    { id: 'all', label: 'All Messages', count: 12 },
    { id: 'support', label: 'Support', count: 3 },
    { id: 'hotel', label: 'Hotels', count: 2 },
    { id: 'transport', label: 'Transport', count: 2 },
    { id: 'airport', label: 'Airport Services', count: 1 },
    { id: 'jastip', label: 'Jastip', count: 2 }
  ];

  const filteredThreads = threads.filter((t) => {
    const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
    const matchQuery =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-xs flex flex-col h-[760px]">
      {/* 1. Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 border-b border-slate-100">
        {filterChips.map((chip) => {
          const isActive = selectedCategory === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => setSelectedCategory(chip.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                isActive
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{chip.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Search & Compose Bar */}
      <div className="flex items-center gap-2 my-3">
        <div className="relative flex-1 flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search messages..."
            className="w-full text-xs font-semibold pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
          />
        </div>

        <button
          onClick={onCompose}
          className="p-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl shadow-xs transition-colors"
          title="Compose New Message"
        >
          <SquarePen className="w-4 h-4" />
        </button>
      </div>

      {/* 3. Scrollable Thread List */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-1.5 pr-1">
        {filteredThreads.map((thread) => {
          const isSelected = selectedThreadId === thread.id;

          return (
            <button
              key={thread.id}
              onClick={() => onSelectThread(thread.id)}
              className={`flex items-start gap-3 w-full p-2.5 rounded-2xl text-left transition-all ${
                isSelected
                  ? 'bg-emerald-50/80 border border-emerald-300 shadow-2xs'
                  : 'hover:bg-slate-50 border border-transparent'
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {thread.avatarImage ? (
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={thread.avatarImage}
                      alt={thread.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200 font-bold">
                    {thread.avatarIcon === 'Headphones' && <Headphones className="w-5 h-5" />}
                    {thread.avatarIcon === 'Bus' && <Bus className="w-5 h-5" />}
                    {thread.avatarIcon === 'ShoppingBag' && <ShoppingBag className="w-5 h-5" />}
                    {thread.avatarIcon === 'FileCheck' && <FileCheck className="w-5 h-5" />}
                  </div>
                )}
                {thread.isOnline && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-600"></span>
                )}
              </div>

              {/* Text info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{thread.name}</h4>
                  <span className="text-[10px] text-slate-400 font-semibold">{thread.time}</span>
                </div>

                <p className="text-[11px] text-slate-500 truncate mt-0.5">{thread.lastMessage}</p>
              </div>

              {/* Unread badge */}
              {thread.unreadCount && thread.unreadCount > 0 && (
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center shadow-2xs mt-1">
                  {thread.unreadCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MessagesHero } from './MessagesHero';
import { ConversationListPane } from './ConversationListPane';
import { ChatWindowPane } from './ChatWindowPane';
import { ChatContextSidebar } from './ChatContextSidebar';
import { StartNewConversationRow } from './StartNewConversationRow';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';
import { MESSAGE_THREADS } from '../../data/messagesData';
import { MessageThreadItem } from '../../types/messages';

interface MessagesPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const MessagesPage: React.FC<MessagesPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [threads, setThreads] = useState<MessageThreadItem[]>(MESSAGE_THREADS);
  const [selectedThreadId, setSelectedThreadId] = useState<string>('th-support');

  // Active selected thread
  const activeThread =
    threads.find((t) => t.id === selectedThreadId) || threads[0];

  const handleSelectThread = (threadId: string) => {
    setSelectedThreadId(threadId);
    // Mark as read
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, unreadCount: 0 } : t))
    );
  };

  const handleSidebarTabClick = (tabId: string) => {
    if (tabId === 'messages') return;
    if (tabId === 'bookings') {
      onNavigateView?.('bookings');
    } else if (tabId === 'payments') {
      onNavigateView?.('payments');
    } else {
      // Overview, itinerary, trips all live in my-trips page
      onNavigateView?.('my-trips');
    }
  };

  const handleStartServiceChat = (serviceId: string) => {
    const rawCategory = serviceId.replace('conv-', '');
    const matchThread = threads.find((t) => t.category === rawCategory);
    if (matchThread) {
      setSelectedThreadId(matchThread.id);
    } else {
      // Switch to official support
      setSelectedThreadId('th-support');
    }
    // Scroll smoothly to chat
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section */}
      <MessagesHero />

      {/* 2. Main Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Column 1: Optional Left Sidebar Navigation on ultra-wide screens */}
          <div className="hidden 2xl:block 2xl:col-span-2 sticky top-20 self-start">
            <MyTripsSidebar
              activeTab="messages"
              onSelectTab={handleSidebarTabClick}
              onPlanTrip={() => onNavigateView?.('hotels')}
            />
          </div>

          {/* Column 2: Conversation List Pane (4 cols on lg/xl, 3 on 2xl) */}
          <div className="lg:col-span-4 2xl:col-span-3">
            <ConversationListPane
              threads={threads}
              selectedThreadId={selectedThreadId}
              onSelectThread={handleSelectThread}
              onCompose={() => {
                setSelectedThreadId('th-support');
              }}
            />
          </div>

          {/* Column 3: Active Live Chat Window (5 cols on lg/xl, 4 on 2xl) */}
          <div className="lg:col-span-5 2xl:col-span-4">
            <ChatWindowPane
              activeThread={activeThread}
              onOpenCardDetails={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('essential-umrah', 'Essential Umrah – 7 Days Package');
                } else {
                  onNavigateView?.('umrah');
                }
              }}
            />
          </div>

          {/* Column 4: Context & Shared Files Sidebar (3 cols on lg/xl/2xl) */}
          <div className="lg:col-span-3 2xl:col-span-3">
            <ChatContextSidebar
              onViewBookingDetails={() => {
                onNavigateView?.('bookings');
              }}
            />
          </div>
        </div>

        {/* 3. Bottom Row: Start New Conversation with 7 Services */}
        <div className="mt-8">
          <StartNewConversationRow onSelectService={handleStartServiceChat} />
        </div>
      </div>
    </div>
  );
};

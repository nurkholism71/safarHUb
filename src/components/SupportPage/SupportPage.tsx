import React, { useState } from 'react';
import { SupportHero } from './SupportHero';
import { QuickContactChannels } from './QuickContactChannels';
import { HelpCategoriesGrid } from './HelpCategoriesGrid';
import { RecentTicketsTable } from './RecentTicketsTable';
import { SupportRightSidebar } from './SupportRightSidebar';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';
import { HelpCategoryItem, SupportTicketItem } from '../../types/support';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SupportPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedTicket, setSelectedTicket] = useState<SupportTicketItem | null>(null);

  const handleSidebarTabClick = (tabId: string) => {
    if (tabId === 'support') return;
    if (tabId === 'messages') {
      onNavigateView?.('messages');
    } else if (tabId === 'bookings') {
      onNavigateView?.('bookings');
    } else if (tabId === 'payments') {
      onNavigateView?.('payments');
    } else {
      onNavigateView?.('my-trips');
    }
  };

  const handleChannelSelect = (channelId: string) => {
    if (channelId === 'ch-livechat') {
      onNavigateView?.('messages');
    } else if (channelId === 'ch-whatsapp') {
      window.open('https://wa.me/9668001234567', '_blank');
    } else if (channelId === 'ch-email') {
      window.location.href = 'mailto:support@safarhub.sa';
    } else if (channelId === 'ch-call') {
      window.location.href = 'tel:+9668001234567';
    }
  };

  const handleCategoryClick = (category: HelpCategoryItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`help-${category.id}`, `Help & Guides: ${category.title}`);
    } else {
      alert(`Opening ${category.title} help knowledge base...`);
    }
  };

  const handleTicketClick = (ticket: SupportTicketItem) => {
    setSelectedTicket(ticket);
    if (onOpenActionModal) {
      onOpenActionModal(
        ticket.ticketId,
        `Support Ticket ${ticket.ticketId}: ${ticket.subject} (${ticket.status})`
      );
    } else {
      alert(`Viewing Support Ticket ${ticket.ticketId}: ${ticket.subject}`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Support Hero Banner */}
      <SupportHero
        onSearch={(q) => {
          if (onOpenActionModal) {
            onOpenActionModal('support-search', `Support search results for "${q}"`);
          } else {
            alert(`Searching support database for "${q}"...`);
          }
        }}
        onLiveChatClick={() => onNavigateView?.('messages')}
      />

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Quick Contact Channels Row */}
        <QuickContactChannels onSelectChannel={handleChannelSelect} />

        {/* 3-Column Layout: Sidebar Nav | Main Categories & Tickets | Right Assistance & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (2.5 / 3 cols) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2.5 lg:sticky lg:top-20 self-start space-y-5">
            <MyTripsSidebar
              activeTab="support"
              onSelectTab={handleSidebarTabClick}
              onPlanTrip={() => onNavigateView?.('hotels')}
            />

            {/* Need Immediate Assistance Promo Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-emerald-950 text-white p-4.5 shadow-lg border border-emerald-800/40">
              <div className="absolute inset-0 opacity-25">
                <img
                  src="/images/umrah/hero_banner.jpg"
                  alt="Saudi Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 space-y-2">
                <h4 className="text-xs font-extrabold text-amber-300">
                  Need Immediate Assistance?
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Our support team is ready 24/7 to help you with your journey.
                </p>
                <button
                  onClick={() => onNavigateView?.('messages')}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle & Right Content Grid (9 cols / 10 cols) */}
          <div className="lg:col-span-9 xl:col-span-9.5 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Middle Section: Help Categories & Recent Support Tickets (7 cols on XL) */}
            <div className="xl:col-span-7 space-y-6">
              <HelpCategoriesGrid
                onSelectCategory={handleCategoryClick}
                onViewAll={() => {
                  if (onOpenActionModal) {
                    onOpenActionModal('all-categories', 'All SafarHub Help Categories & Knowledge Base');
                  }
                }}
              />

              <RecentTicketsTable
                onViewTicket={handleTicketClick}
                onViewAllTickets={() => {
                  if (onOpenActionModal) {
                    onOpenActionModal('all-tickets', 'All Support Tickets & History');
                  }
                }}
              />
            </div>

            {/* Right Section: Urgent Assistance, Track Requests, FAQ Accordion (5 cols on XL) */}
            <div className="xl:col-span-5">
              <SupportRightSidebar
                onCallEmergency={() => {
                  window.location.href = 'tel:+9668001234567';
                }}
                onTrackTickets={() => {
                  if (onOpenActionModal) {
                    onOpenActionModal('track-tickets', 'Track Active Support Tickets');
                  }
                }}
                onViewAllFaqs={() => {
                  if (onOpenActionModal) {
                    onOpenActionModal('all-faqs', 'Comprehensive SafarHub Saudi Travel FAQs');
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

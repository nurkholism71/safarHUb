import React, { useState, useMemo } from 'react';
import { AdminMessagesHeader } from './AdminMessagesHeader';
import { AdminMessagesKpiRow } from './AdminMessagesKpiRow';
import { AdminMessagesChannelStrip } from './AdminMessagesChannelStrip';
import { AdminMessagesFilterBar } from './AdminMessagesFilterBar';
import { AdminMessagesTable } from './AdminMessagesTable';
import { AdminMessagesBottomRow } from './AdminMessagesBottomRow';
import { AdminMessageDetailModal } from './AdminMessageDetailModal';
import { ADMIN_MESSAGE_ITEMS } from '../../../data/adminMessagesData';
import { AdminMessageItem, MessageChannelFilter } from '../../../types/adminMessages';

interface AdminMessagesPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminMessagesPage: React.FC<AdminMessagesPageProps> = ({
  onOpenActionModal
}) => {
  const [messages, setMessages] = useState<AdminMessageItem[]>(ADMIN_MESSAGE_ITEMS);
  const [activeChannel, setActiveChannel] = useState<MessageChannelFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDirection, setSelectedDirection] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Inspected message for modal
  const [inspectedMessage, setInspectedMessage] = useState<AdminMessageItem | null>(null);

  // Filter calculation
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      // 1. Channel filter
      if (activeChannel !== 'all') {
        if (activeChannel === 'whatsapp' && m.channel !== 'WhatsApp') return false;
        if (activeChannel === 'livechat' && m.channel !== 'Live Portal') return false;
        if (activeChannel === 'portal' && m.channel !== 'In-App') return false;
        if (activeChannel === 'vip' && m.channel !== 'VIP Hotline') return false;
        if (activeChannel === 'email' && m.channel !== 'Email') return false;
        if (activeChannel === 'sms' && m.channel !== 'SMS Gateway') return false;
        if (activeChannel === 'system' && m.channel !== 'System Bot') return false;
      }

      // 2. Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesId = m.id.toLowerCase().includes(query);
        const matchesSender = m.sender.name.toLowerCase().includes(query);
        const matchesRecipient = m.recipient.name.toLowerCase().includes(query);
        const matchesContent = m.content.toLowerCase().includes(query);
        if (!matchesId && !matchesSender && !matchesRecipient && !matchesContent) {
          return false;
        }
      }

      // 3. Status filter
      if (selectedStatus !== 'all' && m.status !== selectedStatus) {
        return false;
      }

      // 4. Type filter
      if (selectedType !== 'all' && m.messageType !== selectedType) {
        return false;
      }

      // 5. Direction filter
      if (selectedDirection !== 'all' && m.direction !== selectedDirection) {
        return false;
      }

      // 6. Category filter
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [messages, activeChannel, searchQuery, selectedStatus, selectedType, selectedDirection, selectedCategory]);

  const handleResetFilters = () => {
    setActiveChannel('all');
    setSearchQuery('');
    setSelectedStatus('all');
    setSelectedType('all');
    setSelectedDirection('all');
    setSelectedCategory('all');
  };

  const handleToggleStar = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isStarred: !m.isStarred } : m))
    );
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm(`Hapus pesan ${id} dari database?`)) {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (inspectedMessage?.id === id) {
        setInspectedMessage(null);
      }
    }
  };

  const handleExportCSV = () => {
    const csvHeader = 'MessageID,Direction,SenderName,SenderRole,RecipientName,Channel,Category,MessageType,Timestamp,Status,Content\n';
    const csvRows = filteredMessages
      .map(
        (m) =>
          `"${m.id}","${m.direction}","${m.sender.name}","${m.sender.role}","${m.recipient.name}","${m.channel}","${m.category}","${m.messageType}","${m.timestamp}","${m.status}","${m.content.replace(/"/g, '""')}"`
      )
      .join('\n');
    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `safarhub_messages_database_${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="space-y-4 sm:space-y-5 pb-10 w-full">
      {/* 1. Header Banner */}
      <AdminMessagesHeader
        onNewMessage={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-compose-message', 'Compose & Dispatch New Message');
          }
        }}
        onBroadcast={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-broadcast-message', 'Broadcast Message to Users & Pilgrims');
          }
        }}
        onExportAll={handleExportCSV}
      />

      {/* 2. 5 KPI Stat Metrics Row */}
      <AdminMessagesKpiRow />

      {/* 3. Channel Filter Tabs Strip */}
      <AdminMessagesChannelStrip
        activeChannel={activeChannel}
        onSelectChannel={setActiveChannel}
      />

      {/* 4. Multi-field Search & Filter Controls */}
      <AdminMessagesFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedDirection={selectedDirection}
        onDirectionChange={setSelectedDirection}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onResetFilters={handleResetFilters}
        onExportCSV={handleExportCSV}
        totalResults={filteredMessages.length}
      />

      {/* 5. Full Width Messages Database Table */}
      <div className="w-full">
        <AdminMessagesTable
          messages={filteredMessages}
          onViewMessage={(msg) => setInspectedMessage(msg)}
          onToggleStar={handleToggleStar}
          onDeleteMessage={handleDeleteMessage}
        />
      </div>

      {/* 6. Bottom Row Analytics & Dispatch Activity */}
      <AdminMessagesBottomRow />

      {/* 7. Message Detail Inspector Modal */}
      <AdminMessageDetailModal
        message={inspectedMessage}
        onClose={() => setInspectedMessage(null)}
        onDelete={handleDeleteMessage}
      />
    </div>
  );
};

import React from 'react';
import { 
  Layers, 
  PhoneCall, 
  MessageCircle, 
  Inbox, 
  Crown, 
  Mail, 
  Smartphone, 
  Bot 
} from 'lucide-react';
import { ADMIN_MESSAGE_TABS } from '../../../data/adminMessagesData';
import { MessageChannelFilter } from '../../../types/adminMessages';

interface AdminMessagesChannelStripProps {
  activeChannel: MessageChannelFilter;
  onSelectChannel: (channel: MessageChannelFilter) => void;
}

export const AdminMessagesChannelStrip: React.FC<AdminMessagesChannelStripProps> = ({
  activeChannel,
  onSelectChannel
}) => {
  const getChannelIcon = (iconName: string, isActive: boolean) => {
    const className = `w-3.5 h-3.5 ${isActive ? 'text-[#d4af37]' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`;
    switch (iconName) {
      case 'Layers':
        return <Layers className={className} />;
      case 'PhoneCall':
        return <PhoneCall className={className} />;
      case 'MessageCircle':
        return <MessageCircle className={className} />;
      case 'Inbox':
        return <Inbox className={className} />;
      case 'Crown':
        return <Crown className={className} />;
      case 'Mail':
        return <Mail className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Bot':
        return <Bot className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {ADMIN_MESSAGE_TABS.map((tab) => {
        const isActive = activeChannel === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectChannel(tab.id)}
            className={`group px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
              isActive
                ? 'bg-[#0e5f2c] text-white border-[#0e5f2c] shadow-sm shadow-[#0e5f2c]/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80'
            }`}
          >
            {getChannelIcon(tab.iconName, isActive)}
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                isActive
                  ? 'bg-emerald-800/80 text-emerald-100'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {tab.count.toLocaleString()}
            </span>
          </button>
        );
      })}
    </div>
  );
};

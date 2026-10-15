import React from 'react';
import {
  MessageSquare,
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CONTACT_CHANNELS } from '../../data/supportData';

interface QuickContactChannelsProps {
  onSelectChannel?: (channelId: string) => void;
}

export const QuickContactChannels: React.FC<QuickContactChannelsProps> = ({
  onSelectChannel
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-700" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-emerald-600" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-blue-600" />;
      case 'Phone':
        return <Phone className="w-5 h-5 text-sky-700" />;
      default:
        return <MessageSquare className="w-5 h-5 text-emerald-700" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return 'bg-emerald-100 text-emerald-800';
      case 'MessageCircle':
        return 'bg-emerald-100 text-emerald-800';
      case 'Mail':
        return 'bg-blue-100 text-blue-800';
      case 'Phone':
        return 'bg-sky-100 text-sky-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {CONTACT_CHANNELS.map((channel) => (
        <button
          key={channel.id}
          onClick={() => onSelectChannel?.(channel.id)}
          className="relative flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all text-left group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${getIconBg(channel.icon)} group-hover:scale-105 transition-transform`}>
              {getIcon(channel.icon)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                  {channel.title}
                </h4>
                {channel.isRecommended && (
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 shrink-0">
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                {channel.subtitle}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
        </button>
      ))}
    </div>
  );
};

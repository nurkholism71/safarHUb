import React from 'react';
import {
  Headphones,
  Building2,
  Bus,
  Plane,
  ShoppingBag,
  MoonStar,
  FileCheck,
  Plus,
  Sparkles
} from 'lucide-react';
import { NEW_CONVERSATION_SERVICES } from '../../data/messagesData';

interface StartNewConversationRowProps {
  onSelectService?: (serviceId: string) => void;
}

export const StartNewConversationRow: React.FC<StartNewConversationRowProps> = ({
  onSelectService
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Bus':
        return <Bus className="w-5 h-5" />;
      case 'Plane':
        return <Plane className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'MoonStar':
        return <MoonStar className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      default:
        return <Headphones className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Start a New Conversation
            </h3>
            <p className="text-xs text-slate-500">
              Connect directly with verified local Saudi departments & service specialists
            </p>
          </div>
        </div>
        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
          Average response: &lt; 2 minutes
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {NEW_CONVERSATION_SERVICES.map((srv) => (
          <button
            key={srv.id}
            onClick={() => onSelectService?.(srv.id)}
            className="group relative flex flex-col items-center text-center p-3.5 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-emerald-50/80 hover:border-emerald-300 hover:shadow-sm transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 shadow-sm border border-slate-100 flex items-center justify-center mb-2 group-hover:bg-emerald-700 group-hover:text-white group-hover:scale-105 transition-all">
              {getServiceIcon(srv.icon)}
            </div>
            <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 line-clamp-1">
              {srv.title}
            </h4>
            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
              {srv.desc}
            </p>
            <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-2.5 h-2.5" /> Start Chat
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import {
  Image,
  Calendar,
  Mail,
  MessageSquare,
  Megaphone,
  TrendingUp,
  Users,
  Gift,
  Bot,
  Wrench
} from 'lucide-react';
import { MarketingToolItem } from '../../../types/adminMarketing';

interface AdminMarketingToolsGridProps {
  tools: MarketingToolItem[];
  onToolClick?: (toolId: string) => void;
}

const renderToolIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Image':
      return <Image className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'MessageSquare':
      return <MessageSquare className={className} />;
    case 'Megaphone':
      return <Megaphone className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Gift':
      return <Gift className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    default:
      return <Wrench className={className} />;
  }
};

export const AdminMarketingToolsGrid: React.FC<AdminMarketingToolsGridProps> = ({
  tools,
  onToolClick
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Marketing Tools
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Quick access to suite tools & automations
          </p>
        </div>
        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
          9 Tools Available
        </span>
      </div>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => onToolClick?.(tool.id)}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-all duration-200 group text-center"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 ${tool.bgColor}`}
            >
              {renderToolIcon(tool.iconName, `w-4 h-4 ${tool.iconColor}`)}
            </div>
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 line-clamp-2 leading-tight">
              {tool.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

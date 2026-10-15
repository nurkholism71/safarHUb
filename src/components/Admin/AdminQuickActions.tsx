import React from 'react';
import {
  Building2,
  Car,
  Plane,
  Luggage,
  Tag,
  Users,
  ChevronRight
} from 'lucide-react';
import { QUICK_MANAGE_ITEMS } from '../../data/adminData';

interface AdminQuickActionsProps {
  onSelectAction?: (id: string) => void;
}

export const AdminQuickActions: React.FC<AdminQuickActionsProps> = ({ onSelectAction }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return Building2;
      case 'Car':
        return Car;
      case 'Plane':
        return Plane;
      case 'Luggage':
        return Luggage;
      case 'Tag':
        return Tag;
      case 'Users':
        return Users;
      default:
        return Building2;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-6">
      {QUICK_MANAGE_ITEMS.map((item) => {
        const IconComponent = getIcon(item.iconName);

        return (
          <div
            key={item.id}
            onClick={() => onSelectAction && onSelectAction(item.id)}
            className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group hover:border-[#0e5f2c]/40"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
          </div>
        );
      })}
    </div>
  );
};

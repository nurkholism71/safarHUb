import React from 'react';
import {
  Layers,
  CalendarCheck,
  Building2,
  Car,
  Plane,
  ShoppingBag,
  Luggage,
  Compass,
  MoreHorizontal
} from 'lucide-react';
import { ADMIN_PAYMENT_SERVICES } from '../../../data/adminPaymentsData';

interface AdminPaymentsServiceStripProps {
  activeService: string;
  onSelectService: (serviceId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layers,
  CalendarCheck,
  Building2,
  Car,
  Plane,
  ShoppingBag,
  Luggage,
  Compass,
  MoreHorizontal
};

export const AdminPaymentsServiceStrip: React.FC<AdminPaymentsServiceStripProps> = ({
  activeService,
  onSelectService
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-0.5">
      <div className="flex items-center gap-2.5 min-w-max">
        {ADMIN_PAYMENT_SERVICES.map((srv) => {
          const Icon = iconMap[srv.iconName] || Layers;
          const isActive = activeService === srv.id;

          return (
            <button
              key={srv.id}
              onClick={() => onSelectService(srv.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 shadow-xs ring-1 ring-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
              <span>{srv.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

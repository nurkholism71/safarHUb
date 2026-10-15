import React from 'react';
import {
  X,
  CheckCheck,
  Bell,
  Plane,
  Building2,
  Car,
  ShoppingBag,
  Clock
} from 'lucide-react';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onClearAll: () => void;
}

export const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  isOpen,
  onClose,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 'n1',
      title: 'Flight SV 816 Landed',
      desc: 'Flight from Jakarta has landed on time at Jeddah Terminal 1.',
      time: '10 min ago',
      icon: Plane,
      color: 'text-emerald-700 bg-emerald-50',
      unread: true,
    },
    {
      id: 'n2',
      title: 'Hotel Check-in Ready',
      desc: 'Your executive room at Makkah Hilton is confirmed for 12 Oct.',
      time: '45 min ago',
      icon: Building2,
      color: 'text-blue-700 bg-blue-50',
      unread: true,
    },
    {
      id: 'n3',
      title: 'Jastip Order Packed',
      desc: 'Ajwa Dates & Royal Oud Blend is packed and sealed for shipping.',
      time: '2 hours ago',
      icon: ShoppingBag,
      color: 'text-purple-700 bg-purple-50',
      unread: true,
    },
    {
      id: 'n4',
      title: 'Driver Tariq Assigned',
      desc: 'Captain Tariq will pick you up at Gate 4 with VIP GMC Yukon.',
      time: '5 hours ago',
      icon: Car,
      color: 'text-amber-700 bg-amber-50',
      unread: false,
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      <div className="absolute right-4 sm:right-24 top-16 z-50 w-80 sm:w-96 p-4 bg-white border border-slate-200 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-emerald-800" />
            <span className="text-xs font-bold text-slate-900">Notifications & Alerts</span>
          </div>
          <button
            onClick={onClearAll}
            className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950"
          >
            Mark all read
          </button>
        </div>

        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                  notif.unread ? 'bg-emerald-50/40 border border-emerald-100' : 'hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${notif.color} flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-800 truncate">{notif.title}</p>
                    <span className="text-[10px] text-slate-400">{notif.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">{notif.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 mt-2 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close Notification Center
          </button>
        </div>
      </div>
    </>
  );
};

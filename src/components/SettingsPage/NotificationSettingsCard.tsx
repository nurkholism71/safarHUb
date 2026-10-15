import React, { useState } from 'react';
import { Bell, Calendar, Diamond, Tag, Plane, Mail } from 'lucide-react';
import { INITIAL_NOTIFICATIONS_SETTINGS } from '../../data/settingsData';

export const NotificationSettingsCard: React.FC = () => {
  const [settings, setSettings] = useState(INITIAL_NOTIFICATIONS_SETTINGS);

  const toggleSetting = (id: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const getNotifIcon = (id: string) => {
    switch (id) {
      case 'notif-booking':
        return <Calendar className="w-4 h-4 text-emerald-600" />;
      case 'notif-deals':
        return <Diamond className="w-4 h-4 text-amber-500" />;
      case 'notif-price':
        return <Tag className="w-4 h-4 text-sky-600" />;
      case 'notif-reminders':
        return <Plane className="w-4 h-4 text-emerald-700" />;
      case 'notif-marketing':
        return <Mail className="w-4 h-4 text-purple-600" />;
      default:
        return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Notification Settings
            </h3>
            <p className="text-[11px] text-slate-500">
              Choose what updates you want to receive.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          {settings.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-2xl hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-start gap-3 min-w-0 pr-2">
                <div className="mt-0.5 shrink-0">
                  {getNotifIcon(item.id)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                onClick={() => toggleSetting(item.id)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  item.enabled ? 'bg-[#0e5f2c]' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    item.enabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

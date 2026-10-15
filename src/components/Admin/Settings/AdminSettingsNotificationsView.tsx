import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Phone, Save, CheckCircle2 } from 'lucide-react';
import { NotificationChannelSetting } from '../../../types/adminSettings';

interface AdminSettingsNotificationsViewProps {
  notifications: NotificationChannelSetting[];
  onSave?: (notifs: NotificationChannelSetting[]) => void;
}

export const AdminSettingsNotificationsView: React.FC<AdminSettingsNotificationsViewProps> = ({
  notifications,
  onSave
}) => {
  const [data, setData] = useState(notifications);
  const [saved, setSaved] = useState(false);

  const handleToggle = (id: string) => {
    setData((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  const handleSave = () => {
    onSave?.(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-neutral-100 dark:border-neutral-700">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Automated Notification Channels & Gateways
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Configure transaction email receipts, Unifonic SMS alerts, and WhatsApp Business dispatch.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Save className="w-4 h-4" />
          <span>{saved ? 'Saved!' : 'Save Notification Rules'}</span>
        </button>
      </div>

      {/* Notifications Grid */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                {item.channel === 'Email' ? (
                  <Mail className="w-4 h-4" />
                ) : item.channel === 'SMS' ? (
                  <Phone className="w-4 h-4" />
                ) : (
                  <MessageSquare className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                    {item.name}
                  </h4>
                  <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
                    {item.channel}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.description}
                </p>
                <div className="text-[10px] text-neutral-400 font-mono mt-1">
                  Trigger: <span className="text-emerald-600">{item.eventTrigger}</span> • Provider: {item.provider}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleToggle(item.id)}
              className={`w-11 h-6 rounded-full p-0.5 transition-colors shrink-0 ${
                item.enabled ? 'bg-emerald-600' : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  item.enabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

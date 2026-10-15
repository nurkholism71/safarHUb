import React, { useState } from 'react';
import { CalendarCheck, Save, CheckCircle2, Sliders, AlertCircle } from 'lucide-react';
import { BookingRuleSetting } from '../../../types/adminSettings';

interface AdminSettingsBookingViewProps {
  rules: BookingRuleSetting[];
  onSaveRules?: (rules: BookingRuleSetting[]) => void;
}

export const AdminSettingsBookingView: React.FC<AdminSettingsBookingViewProps> = ({
  rules,
  onSaveRules
}) => {
  const [currentRules, setCurrentRules] = useState(rules);
  const [saved, setSaved] = useState(false);

  const handleToggle = (id: string) => {
    setCurrentRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, currentValue: !r.currentValue } : r))
    );
  };

  const handleSelect = (id: string, val: string) => {
    setCurrentRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, currentValue: val } : r))
    );
  };

  const handleSave = () => {
    onSaveRules?.(currentRules);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-neutral-100 dark:border-neutral-700">
        <div>
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Booking Rules & Automation Engine
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Configure order confirmation thresholds, cancellation buffers, and visa requirements.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Save className="w-4 h-4" />
          <span>{saved ? 'Rules Saved!' : 'Save Booking Rules'}</span>
        </button>
      </div>

      {/* Rules List */}
      <div className="space-y-4">
        {currentRules.map((rule) => (
          <div
            key={rule.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors"
          >
            <div className="max-w-xl">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                {rule.category}
              </span>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                {rule.settingName}
              </h4>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {rule.description}
              </p>
            </div>

            <div className="shrink-0">
              {rule.type === 'toggle' ? (
                <button
                  onClick={() => handleToggle(rule.id)}
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors ${
                    rule.currentValue ? 'bg-emerald-600' : 'bg-neutral-300 dark:bg-neutral-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      rule.currentValue ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              ) : rule.type === 'select' && rule.options ? (
                <select
                  value={String(rule.currentValue)}
                  onChange={(e) => handleSelect(rule.id, e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
                >
                  {rule.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  value={Number(rule.currentValue)}
                  onChange={(e) =>
                    setCurrentRules((prev) =>
                      prev.map((r) =>
                        r.id === rule.id ? { ...r, currentValue: Number(e.target.value) } : r
                      )
                    )
                  }
                  className="w-24 px-3 py-1.5 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white text-center font-bold focus:outline-none"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

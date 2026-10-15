import React, { useState } from 'react';
import { Palette, Sun, Moon, Monitor, Layout, Sparkles, Check } from 'lucide-react';

export const AdminSettingsAppearanceView: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'Light' | 'Dark' | 'System'>('Light');
  const [accentColor, setAccentColor] = useState('Emerald Green (#0e5f2c)');

  const colors = [
    { name: 'Emerald Green', hex: '#0e5f2c' },
    { name: 'Royal Gold', hex: '#c59b27' },
    { name: 'Deep Sapphire', hex: '#1e40af' },
    { name: 'Burgundy Crimson', hex: '#881337' }
  ];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            Appearance, Theming & Saudi Branding
          </h2>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
          Customize the visual interface, brand colors, and typography scaling.
        </p>
      </div>

      {/* Theme Cards */}
      <div className="pt-2">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
          Interface Theme
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setSelectedTheme('Light')}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all ${
              selectedTheme === 'Light'
                ? 'border-emerald-600 bg-emerald-50/40 dark:bg-emerald-950/20'
                : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
              <Sun className="w-6 h-6" />
            </div>
            <span className="font-bold text-xs text-neutral-900 dark:text-white">Light Mode</span>
            <span className="text-[10px] text-neutral-400 mt-0.5">Standard crisp daylight palette</span>
          </button>

          <button
            onClick={() => setSelectedTheme('Dark')}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all ${
              selectedTheme === 'Dark'
                ? 'border-emerald-600 bg-emerald-50/40 dark:bg-emerald-950/20'
                : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-900 text-neutral-200 flex items-center justify-center mb-2">
              <Moon className="w-6 h-6" />
            </div>
            <span className="font-bold text-xs text-neutral-900 dark:text-white">Dark Mode</span>
            <span className="text-[10px] text-neutral-400 mt-0.5">High contrast night palette</span>
          </button>

          <button
            onClick={() => setSelectedTheme('System')}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all ${
              selectedTheme === 'System'
                ? 'border-emerald-600 bg-emerald-50/40 dark:bg-emerald-950/20'
                : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
              <Monitor className="w-6 h-6" />
            </div>
            <span className="font-bold text-xs text-neutral-900 dark:text-white">System Auto</span>
            <span className="text-[10px] text-neutral-400 mt-0.5">Matches your OS theme</span>
          </button>
        </div>
      </div>

      {/* Primary Brand Color */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
          Primary Brand Accent
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setAccentColor(c.name)}
              className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <div
                className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-white"
                style={{ backgroundColor: c.hex }}
              >
                {accentColor === c.name && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                {c.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Target } from 'lucide-react';
import { LeadSourceItem } from '../../../types/adminMarketing';

interface AdminMarketingLeadSourcesProps {
  leadSources: LeadSourceItem[];
}

export const AdminMarketingLeadSources: React.FC<AdminMarketingLeadSourcesProps> = ({
  leadSources
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Lead Sources
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Customer acquisition attribution
          </p>
        </div>
        <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
          <Target className="w-4 h-4" />
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {leadSources.map((source) => (
          <div key={source.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: source.color }}
                />
                <span className="truncate">{source.name}</span>
              </div>
              <span className="font-bold text-neutral-900 dark:text-white">
                {source.percentage}%
              </span>
            </div>

            <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${source.percentage}%`,
                  backgroundColor: source.color
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>Highest Growth:</span>
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          Social Media (+14%)
        </span>
      </div>
    </div>
  );
};

import React from 'react';
import { Globe } from 'lucide-react';
import { AudienceDemographicItem } from '../../../types/adminMarketing';

interface AdminMarketingAudienceDemographicsProps {
  demographics: AudienceDemographicItem[];
  totalReachText?: string;
}

export const AdminMarketingAudienceDemographics: React.FC<AdminMarketingAudienceDemographicsProps> = ({
  demographics,
  totalReachText = '2.8M'
}) => {
  // SVG Donut calculation
  const size = 96;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Audience Demographics
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Geographic reach distribution
          </p>
        </div>
        <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4" />
        </div>
      </div>

      {/* Donut Chart & Center Metric */}
      <div className="flex items-center justify-center py-2">
        <div className="relative w-[96px] h-[96px] min-w-[96px] max-w-[96px] shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
            {demographics.map((item) => {
              const dashLength = (item.percentage / 100) * circumference;
              const dashOffset = -currentOffset;
              currentOffset += dashLength;

              return (
                <circle
                  key={item.country}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs font-extrabold text-neutral-900 dark:text-white leading-tight">
              {totalReachText}
            </span>
            <span className="text-[9px] text-neutral-400 font-medium leading-none">
              Reach
            </span>
          </div>
        </div>
      </div>

      {/* Legend Grid with strict spacing */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-3 border-t border-neutral-100 dark:border-neutral-700/60">
        {demographics.map((item) => (
          <div key={item.country} className="flex items-center justify-between text-xs min-w-0">
            <div className="flex items-center gap-1.5 min-w-0 pr-1">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-neutral-600 dark:text-neutral-300 font-medium truncate">
                {item.country}
              </span>
            </div>
            <span className="font-bold text-neutral-900 dark:text-white text-xs shrink-0 whitespace-nowrap">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

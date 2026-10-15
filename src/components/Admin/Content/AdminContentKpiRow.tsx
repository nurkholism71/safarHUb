import React from 'react';
import { FileText, Eye, Image, BookOpen, Clock, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { ContentKpi } from '../../../types/adminContent';

interface AdminContentKpiRowProps {
  kpis: ContentKpi[];
}

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'FileText':
      return <FileText className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'Image':
      return <Image className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    default:
      return <FileText className={className} />;
  }
};

export const AdminContentKpiRow: React.FC<AdminContentKpiRowProps> = ({ kpis }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-3.5 sm:p-4 border border-neutral-200/80 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between gap-1.5 mb-2.5">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 truncate">
              {kpi.title}
            </span>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 ${kpi.bgColorClass}`}>
              {renderIcon(kpi.iconName, `w-3.5 h-3.5 sm:w-4 sm:h-4 ${kpi.iconColorClass}`)}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight truncate">
              {kpi.value}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5 text-[11px] font-semibold">
              <span
                className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded ${
                  kpi.isPositive
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                    : 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400'
                }`}
              >
                {kpi.isPositive ? (
                  <TrendingUp className="w-2.5 h-2.5" />
                ) : (
                  <TrendingDown className="w-2.5 h-2.5" />
                )}
                {kpi.change}
              </span>
              <span className="text-neutral-400 dark:text-neutral-500 font-normal truncate">
                {kpi.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { ArrowRight, Bus } from 'lucide-react';
import { TRANSPORT_IN_SAUDI } from '../../data/cityGuideData';
import { TransportGuideItem } from '../../types/cityGuide';

interface TransportInSaudiGridProps {
  onSelectTransport?: (transport: TransportGuideItem) => void;
  onViewAll?: () => void;
}

export const TransportInSaudiGrid: React.FC<TransportInSaudiGridProps> = ({
  onSelectTransport,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Transportation in Saudi
          </h3>
          <p className="text-xs text-slate-500">
            Convenient transit options across Saudi Arabian provinces
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {TRANSPORT_IN_SAUDI.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectTransport?.(item)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative h-24 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-2.5">
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 line-clamp-1">
                {item.title}
              </h4>
              <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

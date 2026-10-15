import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAll?: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onViewAll,
}) => {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">Our Services</h2>
          <p className="text-xs text-slate-500">Tailored luxury solutions for pilgrims and travelers</p>
        </div>
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {SERVICES_LIST.map((service) => {
          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative flex flex-col justify-between overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image with zoom effect */}
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Body */}
              <div className="p-3">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 truncate">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Dark Circle Arrow Button */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white group-hover:bg-[#0e5f2c] transition-colors flex-shrink-0 shadow-xs">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Clock, Flame, ArrowRight } from 'lucide-react';
import { LIMITED_TIME_OFFERS } from '../../data/dealsData';
import { DealItem } from '../../types/deals';

interface LimitedTimeOffersSectionProps {
  onSelectDeal?: (deal: DealItem) => void;
  onViewAll?: () => void;
}

export const LimitedTimeOffersSection: React.FC<LimitedTimeOffersSectionProps> = ({
  onSelectDeal,
  onViewAll
}) => {
  // Live ticking countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { ...prev, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="space-y-3.5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-rose-500" />
            <span>Limited Time Offers</span>
          </h3>
          <p className="text-xs text-slate-500">
            Flash sales with maximum price drops before timer expires
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Countdown timer badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 shadow-2xs">
            <span className="text-[11px] text-slate-500 font-semibold mr-1">Ends in</span>
            <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded text-[11px]">{pad(timeLeft.days)}</span>
            <span className="text-rose-500 font-bold">:</span>
            <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded text-[11px]">{pad(timeLeft.hours)}</span>
            <span className="text-rose-500 font-bold">:</span>
            <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded text-[11px]">{pad(timeLeft.minutes)}</span>
            <span className="text-rose-500 font-bold">:</span>
            <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded text-[11px]">{pad(timeLeft.seconds)}</span>
          </div>

          <button
            onClick={onViewAll}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-0.5 shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LIMITED_TIME_OFFERS.map((offer) => (
          <div
            key={offer.id}
            onClick={() => onSelectDeal?.(offer)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image with discount badge */}
            <div className="relative h-32 w-full overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-rose-600 text-white shadow-2xs">
                {offer.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                  {offer.title}
                </h4>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-xs font-medium text-slate-400">From</span>
                  <span className="text-sm font-extrabold text-slate-900">
                    SAR {offer.price}
                  </span>
                  {offer.originalPrice && (
                    <span className="text-[11px] text-slate-400 line-through">
                      SAR {offer.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Days left badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/60">
                  <Clock className="w-3 h-3 text-rose-500" />
                  <span>{offer.daysLeft} days left</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 group-hover:underline">
                  Claim Deal →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

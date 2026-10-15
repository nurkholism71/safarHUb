import React from 'react';
import { Building2, Bus, MoonStar, Mountain, ArrowRight, Check, Heart } from 'lucide-react';
import { FEATURED_DEALS } from '../../data/dealsData';
import { DealItem } from '../../types/deals';

interface FeaturedDealsSectionProps {
  onSelectDeal?: (deal: DealItem) => void;
  onViewAll?: () => void;
}

export const FeaturedDealsSection: React.FC<FeaturedDealsSectionProps> = ({
  onSelectDeal,
  onViewAll
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hotels':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'Transport':
        return <Bus className="w-3.5 h-3.5" />;
      case 'Umrah Packages':
        return <MoonStar className="w-3.5 h-3.5" />;
      case 'Experiences':
        return <Mountain className="w-3.5 h-3.5" />;
      default:
        return <Building2 className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Featured Deals
          </h3>
          <p className="text-xs text-slate-500">
            Best handpicked discounts across Saudi luxury travel services
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
        >
          <span>View All Deals</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURED_DEALS.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            {/* Image & Discount Badge */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-xs font-black uppercase px-2.5 py-1 rounded-xl bg-rose-600 text-white shadow-md">
                {deal.badge}
              </span>
              <button
                title="Wishlist"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Saved deal: ${deal.title}`);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-rose-600 flex items-center justify-center transition-colors shadow-2xs"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Content & Details */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 mb-1.5">
                  {getCategoryIcon(deal.category)}
                  <span>{deal.category}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                  {deal.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {deal.description}
                </p>
              </div>

              {/* Amenities list */}
              {deal.amenities && (
                <div className="space-y-1 py-2 border-y border-slate-100 text-[11px] text-slate-600 font-medium">
                  {deal.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Price & Button */}
              <div className="pt-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">From</span>
                  <span className="text-base font-extrabold text-slate-900">
                    SAR {deal.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400 ml-1 font-medium">{deal.priceUnit}</span>
                </div>

                <button
                  onClick={() => onSelectDeal?.(deal)}
                  className="py-2 px-3.5 rounded-xl bg-slate-900 group-hover:bg-[#0e5f2c] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>View Deal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

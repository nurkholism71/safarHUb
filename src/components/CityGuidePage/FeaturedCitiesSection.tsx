import React from 'react';
import {
  MoonStar,
  Building2,
  Bus,
  Utensils,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { CityItem } from '../../types/cityGuide';

interface FeaturedCitiesSectionProps {
  onExploreCity?: (cityId: string) => void;
  onViewAll?: () => void;
}

export const FeaturedCitiesSection: React.FC<FeaturedCitiesSectionProps> = ({
  onExploreCity,
  onViewAll
}) => {
  const featured = [
    {
      id: 'makkah',
      name: 'Makkah',
      description: 'The holiest city in Islam, home to Masjid Al-Haram and the Kaaba.',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
      tags: [
        { label: 'Holy Sites', icon: MoonStar },
        { label: 'Hotels', icon: Building2 },
        { label: 'Transport', icon: Bus },
        { label: 'Food', icon: Utensils },
        { label: 'Shopping', icon: ShoppingBag }
      ]
    },
    {
      id: 'madinah',
      name: 'Madinah',
      description: 'The city of the Prophet ﷺ, home to Masjid an-Nabawi.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      tags: [
        { label: 'Holy Sites', icon: MoonStar },
        { label: 'Hotels', icon: Building2 },
        { label: 'Transport', icon: Bus },
        { label: 'Food', icon: Utensils },
        { label: 'Shopping', icon: ShoppingBag }
      ]
    }
  ];

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Featured Cities
          </h3>
          <p className="text-xs text-slate-500">
            Primary holy destinations & pilgrimage hubs
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((city) => (
          <div
            key={city.id}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* City Panoramic Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <h4 className="absolute bottom-3 left-4 text-xl font-bold text-white font-serif drop-shadow-sm">
                {city.name}
              </h4>
            </div>

            {/* Content & Amenities */}
            <div className="p-4 space-y-3.5 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {city.description}
              </p>

              {/* Tag Chips */}
              <div className="flex items-center justify-between gap-1 py-2 px-1 border-y border-slate-100 text-[11px] text-slate-600 font-semibold">
                {city.tags.map((tag, idx) => {
                  const Icon = tag.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1 text-center">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] text-slate-500">{tag.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onExploreCity?.(city.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98"
              >
                <span>Explore {city.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

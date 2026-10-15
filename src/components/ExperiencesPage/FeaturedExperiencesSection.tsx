import React from 'react';
import { Star, MapPin, Clock, Users, ArrowRight, Heart } from 'lucide-react';
import { FEATURED_EXPERIENCES } from '../../data/experiencesData';
import { ExperienceItem } from '../../types/experiences';

interface FeaturedExperiencesSectionProps {
  onSelectExperience?: (exp: ExperienceItem) => void;
  onViewAll?: () => void;
}

export const FeaturedExperiencesSection: React.FC<FeaturedExperiencesSectionProps> = ({
  onSelectExperience,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Featured Experiences
          </h3>
          <p className="text-xs text-slate-500">
            Top-rated guided journeys, excursions & adventure activities
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            {/* Image & Wishlist Button */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <button
                title="Add to wishlist"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Added ${exp.title} to Saved Items`);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-rose-600 flex items-center justify-center transition-colors shadow-xs"
              >
                <Heart className="w-4 h-4" />
              </button>
              <span className="absolute bottom-2.5 left-3 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-800/90 text-white backdrop-blur-xs">
                {exp.category}
              </span>
            </div>

            {/* Content & Specs */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                  {exp.title}
                </h4>
                <div className="flex items-center gap-3 text-xs mt-1 text-slate-500">
                  <span className="flex items-center gap-1 text-slate-800 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {exp.rating}
                    <span className="text-slate-400 font-normal">({exp.reviewCount})</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {exp.cityName}
                  </span>
                </div>
              </div>

              {/* Specs chips */}
              <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-100 text-[11px] text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="truncate">{exp.groupType}</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-base font-extrabold text-slate-900">
                    SAR {exp.price}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-medium">
                    per person
                  </span>
                </div>

                <button
                  onClick={() => onSelectExperience?.(exp)}
                  className="py-2 px-3.5 rounded-xl bg-slate-900 group-hover:bg-[#0e5f2c] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>View Details</span>
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

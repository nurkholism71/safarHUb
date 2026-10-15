import React from 'react';
import { Star, MapPin, ArrowRight, Heart } from 'lucide-react';
import { TOP_EXPERIENCES } from '../../data/experiencesData';
import { ExperienceItem } from '../../types/experiences';

interface TopExperiencesGridProps {
  onSelectExperience?: (exp: ExperienceItem) => void;
  onViewAll?: () => void;
}

export const TopExperiencesGrid: React.FC<TopExperiencesGridProps> = ({
  onSelectExperience,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Top Experiences by Category
          </h3>
          <p className="text-xs text-slate-500">
            Handpicked adventures, local tastings, and cultural discoveries
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {TOP_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            onClick={() => onSelectExperience?.(exp)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative h-32 w-full overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                title="Save"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Saved ${exp.title}`);
                }}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-rose-600 flex items-center justify-center transition-colors shadow-2xs"
              >
                <Heart className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                  {exp.title}
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                  <span className="flex items-center gap-0.5 text-slate-800 font-bold">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {exp.rating}
                    <span className="text-slate-400 font-normal">({exp.reviewCount})</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    {exp.cityName}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold text-slate-900">
                    SAR {exp.price}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 group-hover:underline flex items-center gap-0.5">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

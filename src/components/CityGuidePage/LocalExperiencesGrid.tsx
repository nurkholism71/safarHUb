import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LOCAL_EXPERIENCES } from '../../data/cityGuideData';
import { ExperienceItem } from '../../types/cityGuide';

interface LocalExperiencesGridProps {
  onSelectExperience?: (experience: ExperienceItem) => void;
  onViewAll?: () => void;
}

export const LocalExperiencesGrid: React.FC<LocalExperiencesGridProps> = ({
  onSelectExperience,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Local Experiences
          </h3>
          <p className="text-xs text-slate-500">
            Immerse yourself in Saudi heritage, cuisine & outdoor wonders
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
        {LOCAL_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            onClick={() => onSelectExperience?.(exp)}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer transition-all aspect-4/5 flex flex-col justify-end p-3 border border-slate-200/80"
          >
            {/* Background Image */}
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 space-y-0.5 text-white">
              <h4 className="text-xs font-bold leading-tight drop-shadow-xs group-hover:text-amber-300 transition-colors">
                {exp.title}
              </h4>
              <p className="text-[10px] text-slate-300 line-clamp-1">
                {exp.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

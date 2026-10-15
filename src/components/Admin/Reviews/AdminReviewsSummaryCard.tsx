import React from 'react';
import { Star, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { RatingDistributionItem, ServiceRatingScoreItem } from '../../../types/adminReviews';

interface AdminReviewsSummaryCardProps {
  ratingDistribution: RatingDistributionItem[];
  serviceScores: ServiceRatingScoreItem[];
}

export const AdminReviewsSummaryCard: React.FC<AdminReviewsSummaryCardProps> = ({
  ratingDistribution,
  serviceScores
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* 1. Star Rating Distribution Breakdown (6 cols) */}
      <div className="lg:col-span-6 bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
              Star Rating Breakdown
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Distribution across 24,850 pilgrim reviews
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-xl text-amber-600 font-bold text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.88 / 5.0</span>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 w-12 shrink-0 font-bold text-neutral-700 dark:text-neutral-300">
                <span>{item.stars}</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </div>

              <div className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="w-20 text-right shrink-0">
                <span className="font-bold text-neutral-900 dark:text-white">{item.percentage}%</span>
                <span className="text-[10px] text-neutral-400 ml-1">({item.count.toLocaleString()})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Service Quality Satisfaction Scores (6 cols) */}
      <div className="lg:col-span-6 bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
              Satisfaction by Service Category
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Verified pilgrims satisfaction metrics
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-xl">
            98.4% Recommended
          </span>
        </div>

        <div className="space-y-2.5 pt-1">
          {serviceScores.map((sc) => {
            const pct = (sc.score / 5.0) * 100;
            return (
              <div key={sc.service} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {sc.service}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400">
                      {sc.totalReviews.toLocaleString()} reviews
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {sc.score}
                    </span>
                  </div>
                </div>

                <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

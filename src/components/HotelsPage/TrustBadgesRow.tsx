import React from 'react';
import {
  Building2,
  ShieldCheck,
  Tag,
  CalendarCheck,
  Headphones
} from 'lucide-react';

export const TrustBadgesRow: React.FC = () => {
  const badges = [
    {
      title: 'Wide Selection',
      desc: '1,000+ verified hotels',
      icon: Building2,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Trusted Partners',
      desc: 'Licensed and reliable',
      icon: ShieldCheck,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      title: 'Best Price',
      desc: 'Competitive rates',
      icon: Tag,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      title: 'Easy Booking',
      desc: 'Fast and secure',
      icon: CalendarCheck,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: '24/7 Support',
      desc: 'Multi-language team',
      icon: Headphones,
      color: 'text-teal-700 bg-teal-50 border-teal-200',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-8 border-t border-slate-200">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <div
            key={b.title}
            className="flex items-center gap-3 p-4 bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className={`p-2.5 rounded-xl ${b.color} border flex-shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{b.title}</div>
              <div className="text-[11px] text-slate-500 font-medium">{b.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

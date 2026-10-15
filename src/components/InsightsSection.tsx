import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Building2,
  Car,
  ShoppingBag,
  CreditCard,
  UserPlus,
  ArrowRight,
} from 'lucide-react';
import {
  INSIGHTS_CHART_DATA,
  REVENUE_DONUT_DATA,
  RECENT_ACTIVITIES
} from '../data/mockData';

export const InsightsSection: React.FC = () => {
  const [activeInsightTab, setActiveInsightTab] = useState<'bookings' | 'revenue' | 'cities'>('bookings');

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'Car':
        return Car;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'CreditCard':
        return CreditCard;
      case 'UserPlus':
      default:
        return UserPlus;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-8">
      {/* 1. Travel Insights (5 cols in 12-col grid) */}
      <div className="lg:col-span-5 p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
        <div>
          {/* Header with Switcher Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-100 gap-2">
            <div>
              <h2 className="text-base font-bold text-slate-900 font-serif">Travel Insights</h2>
              <p className="text-[11px] text-slate-500">Monthly booking trends</p>
            </div>

            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setActiveInsightTab('bookings')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeInsightTab === 'bookings'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveInsightTab('revenue')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeInsightTab === 'revenue'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveInsightTab('cities')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeInsightTab === 'cities'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Top Cities
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-3 text-[11px] font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
              <span>Hotel</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>Transport</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>Jastip</span>
            </div>
          </div>
        </div>

        {/* Recharts Multi-line Graph */}
        <div className="h-56 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={INSIGHTS_CHART_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderRadius: '10px',
                  border: 'none',
                  color: '#fff',
                  fontSize: '11px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              />
              <Line
                type="monotone"
                dataKey="Hotel"
                stroke="#15803d"
                strokeWidth={2.5}
                dot={{ r: 3, fill: '#15803d' }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Transport"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{ r: 3, fill: '#3b82f6' }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Jastip"
                stroke="#f59e0b"
                strokeWidth={2.5}
                dot={{ r: 3, fill: '#f59e0b' }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Revenue by Service Donut (3 cols in 12-col grid) */}
      <div className="lg:col-span-3 p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900 font-serif pb-3 border-b border-slate-100">
            Revenue by Service
          </h2>
        </div>

        {/* Center Donut with Total Revenue */}
        <div className="relative h-44 my-2 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={REVENUE_DONUT_DATA}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={70}
                paddingAngle={4}
                dataKey="value"
              >
                {REVENUE_DONUT_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: any) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '11px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Total KPI */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[9px] uppercase font-bold text-slate-400">SAR</span>
            <span className="text-xs sm:text-sm font-black text-slate-900 font-serif leading-tight">1,245,000</span>
            <span className="text-[9px] text-slate-400">Total Revenue</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          {REVENUE_DONUT_DATA.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600 font-medium truncate">{item.name}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="font-bold text-slate-800">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Recent Activity Feed (4 cols in 12-col grid) */}
      <div className="md:col-span-2 lg:col-span-4 p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900 font-serif">Recent Activity</h2>
            <p className="text-[11px] text-slate-500">Live operational events</p>
          </div>
          <button
            onClick={() => alert('Viewing full activity logs')}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Timeline Events List */}
        <div className="space-y-3.5 flex-1 overflow-y-auto">
          {RECENT_ACTIVITIES.map((act) => {
            const Icon = getActivityIcon(act.icon);
            return (
              <div key={act.id} className="flex items-start gap-3 group">
                <div className={`flex items-center justify-center w-8 h-8 rounded-xl ${act.iconBg} ${act.iconColor} flex-shrink-0 shadow-2xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 truncate">
                    {act.title}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {act.subtitle}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap flex-shrink-0">
                  {act.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  PlaneTakeoff,
  Users,
  Car,
  Headphones,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { FEATURED_AIRPORT_PACKAGES } from '../../data/airportData';
import { FeaturedAirportPackage } from '../../types/airport';

interface FeaturedAirportServicesProps {
  onBookPackage: (pkg: FeaturedAirportPackage) => void;
}

export const FeaturedAirportServices: React.FC<FeaturedAirportServicesProps> = ({ onBookPackage }) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 4 Featured Packages (8.5 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">Featured Services</h3>
              <p className="text-xs text-slate-500">Most requested airport packages with guaranteed fixed rates</p>
            </div>
            <button
              onClick={() => alert('Viewing all airport packages')}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {FEATURED_AIRPORT_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all p-3 group"
              >
                <div>
                  <div className="relative h-28 w-full overflow-hidden rounded-xl bg-slate-100 mb-2.5">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {pkg.name}
                  </h4>
                  <div className="text-sm font-black text-slate-900 font-serif mt-0.5">
                    SAR {pkg.price}
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mb-2">{pkg.category}</p>

                  <div className="space-y-1 text-[10px] text-slate-600 mb-3">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onBookPackage(pkg)}
                  className="w-full py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-xs transition-colors active:scale-95 text-center"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Why Choose SafarHub? (3.5 cols) */}
        <div className="lg:col-span-4 p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-serif pb-2 border-b border-slate-100">
              Why Choose SafarHub?
            </h4>

            <div className="space-y-3.5 text-xs text-slate-700 mt-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Licensed & Trusted Partners</div>
                  <div className="text-slate-500 text-[11px]">Official and verified airport service providers</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                  <PlaneTakeoff className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Real-Time Flight Monitoring</div>
                  <div className="text-slate-500 text-[11px]">We track your flight and adjust automatically</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Professional & Multilingual Staff</div>
                  <div className="text-slate-500 text-[11px]">Arabic, English, Indonesian and more</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Wide Vehicle Options</div>
                  <div className="text-slate-500 text-[11px]">Sedan, van, bus, luxury car and more</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-600 flex-shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">24/7 Customer Support</div>
                  <div className="text-slate-500 text-[11px]">We're always here to help anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

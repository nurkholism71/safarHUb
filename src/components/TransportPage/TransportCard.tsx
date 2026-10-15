import React, { useState } from 'react';
import {
  Star,
  Users,
  Briefcase,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { TransportVehicle } from '../../types/transport';

interface TransportCardProps {
  vehicle: TransportVehicle;
  onBook: (vehicle: TransportVehicle) => void;
}

export const TransportCard: React.FC<TransportCardProps> = ({ vehicle, onBook }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row overflow-hidden bg-white border border-slate-200/90 rounded-3xl shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group">
      {/* Vehicle Photo Container */}
      <div className="relative w-full sm:w-52 md:w-56 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-slate-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge on top-left */}
        {vehicle.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-lg shadow-md ${
              vehicle.badgeColor || 'bg-[#15803d] text-white'
            }`}
          >
            {vehicle.badge}
          </span>
        )}

        {/* Wishlist Heart (mobile) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-rose-600 sm:hidden transition-colors shadow-xs"
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>
      </div>

      {/* Vehicle Details */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
        <div>
          {/* Rating & Wishlist */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-900">{vehicle.rating}</span>
              <span className="text-[11px] text-slate-400">({vehicle.reviewCount} reviews)</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="p-1 text-slate-400 hover:text-rose-600 hidden sm:block transition-colors"
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`} />
            </button>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 leading-snug truncate">
            {vehicle.name}
          </h3>
          <p className="text-xs text-emerald-800/80 font-semibold mt-0.5">
            {vehicle.categoryLabel}
          </p>

          {/* Capacity Tags */}
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>{vehicle.seats} seats</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
              <span>{vehicle.luggage} luggage</span>
            </div>
          </div>

          {/* Amenities Row */}
          <div className="flex flex-wrap items-center gap-2 mt-2.5 text-[11px] text-slate-500">
            {vehicle.amenities.map((amenity, i) => (
              <span key={i} className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{amenity}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Price & Button */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 gap-2">
          {/* Price */}
          <div className="leading-none">
            <div className="text-base sm:text-lg font-black text-slate-900 font-serif">
              SAR {vehicle.price}
            </div>
            <div className="text-[10px] text-slate-400 font-medium mt-0.5">per vehicle (All Inclusive)</div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onBook(vehicle)}
            className="px-5 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-950/20 transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

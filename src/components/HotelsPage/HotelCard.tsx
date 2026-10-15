import React, { useState } from 'react';
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Bus,
  Dumbbell,
  Utensils,
  Heart,
} from 'lucide-react';
import { HotelItem } from '../../types/hotels';

interface HotelCardProps {
  hotel: HotelItem;
  onSelectHotel: (hotel: HotelItem) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onSelectHotel }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row overflow-hidden bg-white border border-slate-200/90 rounded-3xl shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group">
      {/* Hotel Photo Container (Proportionate width) */}
      <div className="relative w-full sm:w-48 md:w-52 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-slate-100">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge on top-left */}
        {hotel.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-lg shadow-md ${
              hotel.badgeColor || 'bg-[#ff5722] text-white'
            }`}
          >
            {hotel.badge}
          </span>
        )}

        {/* Wishlist Heart on top-right (mobile) */}
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

      {/* Hotel Body & Info */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
        <div>
          {/* Stars & Wishlist (Desktop) */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
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
            {hotel.name}
          </h3>
          {hotel.arabicName && (
            <p className="text-xs text-emerald-800/80 font-arabic font-semibold mt-0.5 truncate">
              {hotel.arabicName}
            </p>
          )}

          {/* Distance */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
            <span className="truncate">{hotel.distance}</span>
          </div>

          {/* Amenities Row */}
          <div className="flex flex-wrap items-center gap-2.5 mt-2.5 text-[11px] text-slate-500">
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Wifi className="w-3 h-3 text-slate-400" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Coffee className="w-3 h-3 text-slate-400" />
              <span>Breakfast</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Bus className="w-3 h-3 text-slate-400" />
              <span>Shuttle</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Dumbbell className="w-3 h-3 text-slate-400" />
              <span>Fitness</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              <Utensils className="w-3 h-3 text-slate-400" />
              <span>Restaurant</span>
            </div>
          </div>
        </div>

        {/* Bottom Rating, Price & CTA (Completely Clean & Anti-Collision Layout) */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 gap-2">
          {/* Left: Rating Badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-2xs font-mono flex-shrink-0">
              {hotel.rating}
            </div>
            <div className="leading-tight">
              <div className="text-xs font-bold text-slate-900">{hotel.ratingLabel}</div>
              <div className="text-[10px] text-slate-400">{hotel.reviewCount.toLocaleString()} reviews</div>
            </div>
          </div>

          {/* Right: Price & Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right leading-none">
              <div className="text-base sm:text-lg font-black text-slate-900 font-serif">
                SAR {hotel.price}
              </div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">per night</div>
            </div>

            <button
              onClick={() => onSelectHotel(hotel)}
              className="px-4 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-950/20 transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

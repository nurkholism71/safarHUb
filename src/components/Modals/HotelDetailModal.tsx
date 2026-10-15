import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  Wifi,
  Coffee,
  Bus,
  Dumbbell,
  Utensils,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { HotelItem } from '../../types/hotels';

interface HotelDetailModalProps {
  hotel: HotelItem | null;
  onClose: () => void;
  onBookRoom: (hotelName: string, roomName: string, price: number) => void;
}

export const HotelDetailModal: React.FC<HotelDetailModalProps> = ({
  hotel,
  onClose,
  onBookRoom,
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  if (!hotel) return null;

  const currentRooms = hotel.roomTypes || [
    { name: 'Executive King Haram View', bed: '1 King Bed', view: 'Direct Haram View', price: hotel.price, available: 3 },
    { name: 'Deluxe Twin Kaaba View', bed: '2 Twin Beds', view: 'Kaaba Front View', price: hotel.price + 120, available: 2 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Photo */}
        <div className="relative h-56 w-full bg-slate-900 flex-shrink-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              {hotel.badge && (
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${hotel.badgeColor || 'bg-amber-500 text-slate-900'}`}>
                  {hotel.badge}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-serif">{hotel.name}</h2>
            <div className="flex items-center gap-2 text-xs text-emerald-200 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{hotel.distance}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Rating and Overview */}
          <div className="flex flex-wrap items-center justify-between p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-800 text-white font-bold text-sm font-mono">
                {hotel.rating}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{hotel.ratingLabel} Rating</div>
                <div className="text-[11px] text-slate-600">Based on {hotel.reviewCount.toLocaleString()} verified pilgrims & guests</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>SafarHub Certified 5★ Luxury Partner</span>
            </div>
          </div>

          {/* Available Room Types */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-serif mb-3">Available Room Options</h3>

            <div className="space-y-3">
              {currentRooms.map((room, idx) => {
                const isSelected = selectedRoomIndex === idx;
                return (
                  <div
                    key={room.name}
                    onClick={() => setSelectedRoomIndex(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-emerald-50/70 border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{room.name}</h4>
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded">
                          {room.view}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{room.bed} • Free High Speed WiFi • Luxury Breakfast</p>
                      <span className="text-[11px] text-emerald-700 font-bold">Only {room.available} rooms left at this price!</span>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 font-serif">
                        SAR {room.price} <span className="text-xs font-normal text-slate-500">/ night</span>
                      </div>
                      <div className={`text-xs font-bold ${isSelected ? 'text-emerald-800' : 'text-slate-400'}`}>
                        {isSelected ? '✓ Selected' : 'Click to select'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 bg-slate-50 border-t border-slate-200 flex-shrink-0">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Selection</div>
            <div className="text-base font-black text-slate-900 font-serif">
              SAR {currentRooms[selectedRoomIndex].price} <span className="text-xs text-slate-500 font-normal">/ night (Taxes included)</span>
            </div>
          </div>

          <button
            onClick={() => {
              onBookRoom(hotel.name, currentRooms[selectedRoomIndex].name, currentRooms[selectedRoomIndex].price);
              onClose();
            }}
            className="px-6 py-3 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/20 transition-all active:scale-95"
          >
            Reserve Now & Issue Voucher
          </button>
        </div>
      </div>
    </div>
  );
};

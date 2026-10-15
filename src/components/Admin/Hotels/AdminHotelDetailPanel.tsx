import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  BedDouble,
  Wifi,
  Utensils,
  Sparkles,
  User,
  Phone,
  Mail,
  Clock,
  Edit3,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { AdminHotelItem } from '../../../types/adminHotel';

interface AdminHotelDetailPanelProps {
  hotel: AdminHotelItem | null;
  onClose: () => void;
  onEditHotel?: (id: string) => void;
  onManageRooms?: (id: string) => void;
  onViewOnWebsite?: (id: string) => void;
}

export const AdminHotelDetailPanel: React.FC<AdminHotelDetailPanelProps> = ({
  hotel,
  onClose,
  onEditHotel,
  onManageRooms,
  onViewOnWebsite
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'rooms' | 'availability' | 'amenities' | 'reviews'>('overview');

  if (!hotel) return null;

  const defaultGallery = [
    'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=300&q=80'
  ];

  const galleryImages = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : defaultGallery;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden">
      {/* 1. Panel Hero Header Image with Edit Button */}
      <div className="relative h-44 w-full bg-slate-900 flex-shrink-0">
        <img
          src={galleryImages[0]}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Edit Hotel Floating Button */}
        <button
          onClick={() => onEditHotel && onEditHotel(hotel.id)}
          className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Edit3 className="w-3.5 h-3.5 text-slate-600" />
          <span>Edit Hotel</span>
        </button>
      </div>

      {/* 2. Gallery Strip */}
      <div className="grid grid-cols-4 gap-1 p-2 bg-slate-100/70 border-b border-slate-200">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative h-12 rounded overflow-hidden cursor-pointer group">
            <img src={img} alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            {idx === 3 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-bold">
                +12
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Detail Sub-Tabs */}
      <div className="flex items-center border-b border-slate-100 px-4 text-xs font-semibold text-slate-500 gap-3 overflow-x-auto no-scrollbar">
        {(['overview', 'rooms', 'availability', 'amenities', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2.5 border-b-2 capitalize transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'border-[#0e5f2c] text-[#0e5f2c]'
                : 'border-transparent hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 4. Panel Scrollable Content Body */}
      <div className="p-4 space-y-4 overflow-y-auto flex-1 text-xs">
        {/* Title, Badges & Rating */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-bold text-slate-900 font-serif truncate">
              {hotel.name}
            </h2>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                {hotel.code}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  hotel.status === 'Active'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : hotel.status === 'Pending'
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}
              >
                {hotel.status}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{hotel.rating}</span>
            <span className="text-slate-400 font-normal">({hotel.reviewCount.toLocaleString()} reviews)</span>
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-[11px] mt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{hotel.location.area}, {hotel.location.city}</span>
          </div>
        </div>

        {/* 5 Amenity Badges Row */}
        <div className="grid grid-cols-5 gap-1.5 py-2.5 px-2 bg-slate-50 rounded-xl border border-slate-100 text-center">
          <div className="flex flex-col items-center">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span className="text-[10px] font-semibold text-slate-700 mt-1">{hotel.stars} Star</span>
          </div>
          <div className="flex flex-col items-center">
            <BedDouble className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-semibold text-slate-700 mt-1">{hotel.roomsCount} Rooms</span>
          </div>
          <div className="flex flex-col items-center">
            <Wifi className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-semibold text-slate-700 mt-1">Free WiFi</span>
          </div>
          <div className="flex flex-col items-center">
            <Utensils className="w-4 h-4 text-rose-600" />
            <span className="text-[10px] font-semibold text-slate-700 mt-1">Restaurant</span>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-[10px] font-semibold text-slate-700 mt-1">Spa</span>
          </div>
        </div>

        {/* Hotel Information Section */}
        <div className="space-y-2.5 border-b border-slate-100 pb-3.5">
          <div className="font-bold text-slate-900 text-xs mb-2">
            Hotel Information
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Owner
            </span>
            <span className="font-semibold text-slate-800">{hotel.ownerType}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              Contact
            </span>
            <span className="font-semibold text-slate-800">{hotel.contact || '+966 50 123 4567'}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Email
            </span>
            <span className="font-semibold text-emerald-700 truncate max-w-[200px]">{hotel.email || `${hotel.code.toLowerCase()}@safarhub.sa`}</span>
          </div>

          <div className="flex items-start justify-between py-0.5 gap-2">
            <span className="text-slate-500 flex items-center gap-1.5 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Address
            </span>
            <span className="font-medium text-slate-800 text-right">
              {hotel.location.fullAddress || `${hotel.location.area}, ${hotel.location.city}, Saudi Arabia`}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Check In
            </span>
            <span className="font-semibold text-slate-800">{hotel.checkInTime || '14:00'}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Check Out
            </span>
            <span className="font-semibold text-slate-800">{hotel.checkOutTime || '12:00'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onViewOnWebsite && onViewOnWebsite(hotel.id)}
            className="py-2.5 px-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View on Website</span>
          </button>

          <button
            onClick={() => onManageRooms && onManageRooms(hotel.id)}
            className="py-2.5 px-2 bg-[#0e5f2c] hover:bg-[#0a4620] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span>Manage Rooms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

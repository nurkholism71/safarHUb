import React, { useState } from 'react';
import {
  ArrowUpDown,
  ChevronDown,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { HotelsHero } from './HotelsHero';
import { CitySelectorBar } from './CitySelectorBar';
import { HotelsFilterSidebar } from './HotelsFilterSidebar';
import { HotelCard } from './HotelCard';
import { HaramMapView } from './HaramMapView';
import { TrustBadgesRow } from './TrustBadgesRow';
import { HotelDetailModal } from '../Modals/HotelDetailModal';
import { HOTELS_LIST } from '../../data/hotelsData';
import { HotelItem } from '../../types/hotels';

interface HotelsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const HotelsPage: React.FC<HotelsPageProps> = ({ onOpenActionModal }) => {
  const [selectedCity, setSelectedCity] = useState('Makkah');
  const [sortBy, setSortBy] = useState('Recommended');
  const [selectedHotel, setSelectedHotel] = useState<HotelItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (params: any) => {
    setSelectedCity(params.destination || 'Makkah');
  };

  const handleBookRoom = (hotelName: string, roomName: string, price: number) => {
    if (onOpenActionModal) {
      onOpenActionModal('booking-success', `Confirmed Reservation: ${roomName} at ${hotelName} (SAR ${price})`);
    } else {
      alert(`Booking confirmed for ${roomName} at ${hotelName}! E-Voucher generated.`);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Full-Width Panoramic Hotels Hero */}
      <HotelsHero onSearch={handleSearch} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. City Selector Carousel Bar (Hidden bottom scrollbar) */}
        <CitySelectorBar
          selectedCity={selectedCity}
          onSelectCity={(city) => setSelectedCity(city)}
        />

        {/* 3. Main Grid Layout (Sticky Left Filter | Scrolling Middle Hotels | Sticky Right Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
          {/* Left Column: Sticky Filter Sidebar (3 cols in 12) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
            <HotelsFilterSidebar />
          </div>

          {/* Middle Column: Hotel Listings (6 cols in 12) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Header: Count and Sort By */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                1,250 hotels in {selectedCity}
              </h2>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-800 outline-hidden cursor-pointer shadow-2xs"
                >
                  <option value="Recommended">Recommended</option>
                  <option value="PriceLow">Price (Lowest first)</option>
                  <option value="PriceHigh">Price (Highest first)</option>
                  <option value="Distance">Closest to Haram</option>
                  <option value="Rating">Guest Rating (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Hotel Cards List */}
            <div className="space-y-4">
              {HOTELS_LIST.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onSelectHotel={(h) => setSelectedHotel(h)}
                />
              ))}
            </div>

            {/* Group Booking Callout Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200 rounded-3xl gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-950 font-serif">
                    Need Group Booking or Special Request?
                  </h4>
                  <p className="text-xs text-amber-800">
                    Get the best rates for group, family, or travel agency bookings.
                  </p>
                </div>
              </div>

              <button
                onClick={() => alert('Connecting with SafarHub Dedicated Group Concierge')}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-amber-300 text-slate-900 rounded-xl text-xs font-bold shadow-xs transition-colors whitespace-nowrap"
              >
                Contact Our Team
              </button>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-1.5 py-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#0e5f2c] text-white shadow-md'
                      : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="px-1 text-slate-400 font-bold">...</span>

              <button
                onClick={() => setCurrentPage(125)}
                className="px-2.5 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
              >
                125
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Sticky Haram Map View & Promos (3 cols in 12) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
            <HaramMapView
              onSelectHotelPin={(name) => {
                const found = HOTELS_LIST.find((h) => h.name.toLowerCase().includes(name.toLowerCase()));
                if (found) setSelectedHotel(found);
              }}
              onOpenLongStay={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('longstay-promo', 'Long Stay in Makkah Special Rates (7+ Nights)');
                }
              }}
            />
          </div>
        </div>

        {/* 4. Trust Badges Row */}
        <TrustBadgesRow />
      </div>

      {/* Hotel Room Selection Detail Modal */}
      <HotelDetailModal
        hotel={selectedHotel}
        onClose={() => setSelectedHotel(null)}
        onBookRoom={handleBookRoom}
      />
    </div>
  );
};

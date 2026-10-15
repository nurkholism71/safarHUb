import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { TransportHero } from './TransportHero';
import { TransportCategoryChips } from './TransportCategoryChips';
import { TransportFilterSidebar } from './TransportFilterSidebar';
import { TransportCard } from './TransportCard';
import { TransportRouteMap } from './TransportRouteMap';
import { PopularRoutesRow } from './PopularRoutesRow';
import { TransportBookingModal } from '../Modals/TransportBookingModal';
import { VEHICLES_LIST } from '../../data/transportData';
import { TransportVehicle } from '../../types/transport';

interface TransportPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const TransportPage: React.FC<TransportPageProps> = ({ onOpenActionModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('airport');
  const [sortBy, setSortBy] = useState('Recommended');
  const [selectedVehicle, setSelectedVehicle] = useState<TransportVehicle | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (params: any) => {
    alert(`Searching transport from ${params.pickup} to ${params.destination} on ${params.date} at ${params.time}`);
  };

  const handleConfirmBooking = (vehicleName: string, price: number) => {
    if (onOpenActionModal) {
      onOpenActionModal('transport-confirmed', `Confirmed Transport Booking: ${vehicleName} (SAR ${price})`);
    } else {
      alert(`Transport confirmed for ${vehicleName}! Driver details dispatched.`);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Full-Width Panoramic Transport Hero */}
      <TransportHero onSearch={handleSearch} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Quick Route Category Chips (Hidden bottom scrollbar) */}
        <TransportCategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => setSelectedCategory(id)}
        />

        {/* 3. Main Grid Layout (Sticky Left Filter | Scrolling Middle Vehicles | Sticky Right Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
          {/* Left Column: Sticky Filter Sidebar (3 cols in 12) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
            <TransportFilterSidebar />
          </div>

          {/* Middle Column: Transport Options Listing (6 cols in 12) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Header: Count and Sort By */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                320 Transport Options
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
                  <option value="Capacity">Capacity (High to Low)</option>
                  <option value="Rating">Top Rated Chauffeurs</option>
                </select>
              </div>
            </div>

            {/* Transport Cards List */}
            <div className="space-y-4">
              {VEHICLES_LIST.map((vehicle) => (
                <TransportCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onBook={(v) => setSelectedVehicle(v)}
                />
              ))}
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
                onClick={() => setCurrentPage(32)}
                className="px-2.5 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
              >
                32
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Sticky Route Map & Information (3 cols in 12) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
            <TransportRouteMap />
          </div>
        </div>

        {/* 4. Popular Routes Row */}
        <PopularRoutesRow />
      </div>

      {/* Booking Confirmation Modal */}
      <TransportBookingModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

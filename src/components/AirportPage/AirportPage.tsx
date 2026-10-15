import React, { useState } from 'react';
import { AirportHero } from './AirportHero';
import { AirportServicesGrid } from './AirportServicesGrid';
import { FlightTrackerWidget } from './FlightTrackerWidget';
import { PopularAirportsGrid } from './PopularAirportsGrid';
import { AirportTerminalMap } from './AirportTerminalMap';
import { FeaturedAirportServices } from './FeaturedAirportServices';
import { HowItWorksSteps } from './HowItWorksSteps';
import { AirportServiceModal } from '../Modals/AirportServiceModal';
import { AirportServiceItem, FeaturedAirportPackage } from '../../types/airport';

interface AirportPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AirportPage: React.FC<AirportPageProps> = ({ onOpenActionModal }) => {
  const [selectedService, setSelectedService] = useState<AirportServiceItem | FeaturedAirportPackage | null>(null);

  const handleSearch = (params: any) => {
    alert(`Searching airport handling for ${params.serviceType} at ${params.airport} on ${params.date}`);
  };

  const handleConfirmService = (title: string, price: number) => {
    if (onOpenActionModal) {
      onOpenActionModal('airport-confirmed', `Confirmed Airport Service: ${title} (SAR ${price})`);
    } else {
      alert(`Airport service confirmed for ${title}! VIP assistant notified.`);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Full-Width Panoramic Airport Hero */}
      <AirportHero onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Our Airport Services 6-Grid */}
        <AirportServicesGrid
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3. Tri-Section Row: Real-Time Flight Tracking | Popular Airports | Airport Map & Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 my-8">
          {/* Column 1: Flight Tracking (4 cols) */}
          <div className="lg:col-span-4">
            <FlightTrackerWidget />
          </div>

          {/* Column 2: Popular Airports (4 cols) */}
          <div className="lg:col-span-4">
            <PopularAirportsGrid />
          </div>

          {/* Column 3: Airport Map & Facilities (4 cols) */}
          <div className="md:col-span-2 lg:col-span-4">
            <AirportTerminalMap />
          </div>
        </div>

        {/* 4. Featured Services & Why Choose SafarHub? */}
        <FeaturedAirportServices
          onBookPackage={(pkg) => setSelectedService(pkg)}
        />

        {/* 5. Combo Banner & How It Works 5 Steps */}
        <HowItWorksSteps
          onOpenComboModal={() => {
            if (onOpenActionModal) {
              onOpenActionModal('combo-journey', 'All-in-One Saudi VIP Package (Airport + Hotel + Transport)');
            }
          }}
        />
      </div>

      {/* Airport Service Booking Modal */}
      <AirportServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onConfirm={handleConfirmService}
      />
    </div>
  );
};

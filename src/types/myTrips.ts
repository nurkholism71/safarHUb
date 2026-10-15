export interface TripSummaryItem {
  id: string;
  title: string;
  dateRange: string;
  route: string;
  status: 'Upcoming' | 'Past' | 'Cancelled';
  image: string;
  flightsCount?: number;
  hotelsCount?: number;
  transportsCount?: number;
  activitiesCount?: number;
  activityName?: string;
}

export interface ItineraryItem {
  id: string;
  time: string;
  date: string;
  type: 'flight' | 'transport' | 'hotel' | 'activity';
  title: string;
  subTitle: string;
  status: 'Confirmed' | 'Planned' | 'Completed';
  location?: string;
}

export interface BookingOverviewItem {
  id: string;
  category: 'Flights' | 'Hotels' | 'Transport' | 'Activities';
  count: number;
  title: string;
  dateRange: string;
  image: string;
  status: 'Confirmed' | 'Planned';
}

export interface TravelDocumentItem {
  id: string;
  title: string;
  subTitle: string;
  iconType: 'flight' | 'hotel' | 'transport' | 'visa' | 'insurance';
  downloadUrl?: string;
}

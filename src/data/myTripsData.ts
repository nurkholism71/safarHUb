import {
  TripSummaryItem,
  ItineraryItem,
  BookingOverviewItem,
  TravelDocumentItem
} from '../types/myTrips';

export const MY_TRIPS_LIST: TripSummaryItem[] = [
  {
    id: 'trip-umrah-1',
    title: 'Umrah Trip',
    dateRange: '12 – 19 Oct 2026',
    route: 'Jeddah ➔ Makkah ➔ Madinah ➔ Jeddah',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    flightsCount: 1,
    hotelsCount: 2,
    transportsCount: 3,
    activitiesCount: 1,
    activityName: 'Ziyarat Tour'
  },
  {
    id: 'trip-business-2',
    title: 'Business Trip',
    dateRange: '5 – 8 Nov 2026',
    route: 'Riyadh ➔ Dammam',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    flightsCount: 1,
    hotelsCount: 1,
    transportsCount: 1
  },
  {
    id: 'trip-past-1',
    title: 'Ramadan Umrah 2025',
    dateRange: '10 – 22 Apr 2025',
    route: 'Madinah ➔ Makkah',
    status: 'Past',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    flightsCount: 2,
    hotelsCount: 2,
    transportsCount: 2
  }
];

export const DAY1_ITINERARY: ItineraryItem[] = [
  {
    id: 'itin-1',
    time: '02:15',
    date: '12 Oct',
    type: 'flight',
    title: 'Flight to Jeddah',
    subTitle: 'SV 816 • Saudi Arabian Airlines',
    status: 'Confirmed'
  },
  {
    id: 'itin-2',
    time: '09:00',
    date: '12 Oct',
    type: 'transport',
    title: 'Airport Pickup',
    subTitle: 'Meet & Greet Service • Driver: Ahmed • Vehicle: Van (7 seats)',
    status: 'Confirmed'
  },
  {
    id: 'itin-3',
    time: '10:30',
    date: '12 Oct',
    type: 'hotel',
    title: 'Check-in Makkah Hotel',
    subTitle: 'Makkah Hilton Convention Hotel • 3 Nights • Deluxe Room',
    status: 'Confirmed'
  },
  {
    id: 'itin-4',
    time: '15:00',
    date: '12 Oct',
    type: 'activity',
    title: 'Free Time & Umrah',
    subTitle: 'Perform Umrah Tawaf & Sai',
    status: 'Planned'
  }
];

export const BOOKINGS_OVERVIEW: BookingOverviewItem[] = [
  {
    id: 'book-flight',
    category: 'Flights',
    count: 2,
    title: 'JED ➔ JED',
    dateRange: '12 Oct 2026 - 19 Oct 2026',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80',
    status: 'Confirmed'
  },
  {
    id: 'book-hotel',
    category: 'Hotels',
    count: 2,
    title: 'Makkah & Madinah',
    dateRange: '12 Oct - 19 Oct 2026',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80',
    status: 'Confirmed'
  },
  {
    id: 'book-transport',
    category: 'Transport',
    count: 3,
    title: 'Airport + Intercity',
    dateRange: 'JED • Makkah • Madinah',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=500&q=80',
    status: 'Confirmed'
  },
  {
    id: 'book-activity',
    category: 'Activities',
    count: 1,
    title: 'Ziyarat Tour',
    dateRange: 'Madinah City Tour (Quba, Uhud)',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=500&q=80',
    status: 'Planned'
  }
];

export const TRAVEL_DOCUMENTS: TravelDocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Flight E-Ticket',
    subTitle: 'SV 816 / SV 817',
    iconType: 'flight'
  },
  {
    id: 'doc-2',
    title: 'Hotel Voucher',
    subTitle: 'Makkah & Madinah',
    iconType: 'hotel'
  },
  {
    id: 'doc-3',
    title: 'Transport Voucher',
    subTitle: 'Airport & Intercity',
    iconType: 'transport'
  },
  {
    id: 'doc-4',
    title: 'Visa Document',
    subTitle: 'Umrah Visa',
    iconType: 'visa'
  },
  {
    id: 'doc-5',
    title: 'Travel Insurance',
    subTitle: 'Policy Document',
    iconType: 'insurance'
  }
];

import {
  AdminUmrahPackageItem,
  AdminUmrahKpi,
  AdminUmrahCategorySummary,
  AdminUmrahPilgrimBooking,
  AdminUmrahDepartureBatch
} from '../types/adminUmrah';

export const ADMIN_UMRAH_KPIS: AdminUmrahKpi[] = [
  {
    id: 'active_packages',
    title: 'Active Packages',
    value: '48',
    change: '+14.2%',
    isPositive: true,
    subtitle: '12 new departures scheduled',
    iconName: 'Luggage'
  },
  {
    id: 'pilgrim_manifest',
    title: 'Pilgrim Manifest',
    value: '1,842',
    change: '+22.5%',
    isPositive: true,
    subtitle: '45 departure groups',
    iconName: 'Users'
  },
  {
    id: 'seat_occupancy',
    title: 'Flight Seat Quota',
    value: '91.8%',
    change: '+5.4 pt',
    isPositive: true,
    subtitle: '1,690 of 1,842 filled',
    iconName: 'Plane'
  },
  {
    id: 'gross_revenue',
    title: 'Gross Package Rev',
    value: 'SAR 38.6M',
    change: '+26.8%',
    isPositive: true,
    subtitle: 'SAR 4.2M deposits cleared',
    iconName: 'DollarSign'
  },
  {
    id: 'visa_clearance',
    title: 'Nusuk Visa Clearance',
    value: '99.4%',
    change: '+0.8 pt',
    isPositive: true,
    subtitle: '1,831 visas approved',
    iconName: 'ShieldCheck'
  }
];

export const ADMIN_UMRAH_CATEGORIES: AdminUmrahCategorySummary[] = [
  { id: 'all', name: 'All Packages', iconName: 'Layers', activePackages: 48, totalPilgrims: 1842, revenue: 'SAR 38.6M' },
  { id: 'reguler', name: 'Reguler (9 Days)', iconName: 'Calendar', activePackages: 18, totalPilgrims: 760, revenue: 'SAR 14.8M' },
  { id: 'ekonomi', name: 'Ekonomi (12 Days)', iconName: 'Tag', activePackages: 12, totalPilgrims: 480, revenue: 'SAR 9.2M' },
  { id: 'vip', name: 'VIP & Executive', iconName: 'Sparkles', activePackages: 8, totalPilgrims: 240, revenue: 'SAR 7.8M' },
  { id: 'keluarga', name: 'Family Private', iconName: 'Users', activePackages: 4, totalPilgrims: 120, revenue: 'SAR 2.6M' },
  { id: 'ramadhan', name: 'Ramadhan Special', iconName: 'Moon', activePackages: 3, totalPilgrims: 110, revenue: 'SAR 2.2M' },
  { id: 'plus-turki', name: 'Plus Turki/Dubai', iconName: 'Compass', activePackages: 2, totalPilgrims: 80, revenue: 'SAR 1.4M' },
  { id: 'custom', name: 'Custom Group', iconName: 'Settings', activePackages: 1, totalPilgrims: 52, revenue: 'SAR 600K' }
];

export const ADMIN_UMRAH_PACKAGES: AdminUmrahPackageItem[] = [
  {
    id: 'UMR-2026-09A',
    code: 'PKG-SV-9D',
    title: 'Umrah Reguler 9 Hari Saudia SV-819 Direct',
    tier: 'Reguler',
    duration: '9D8N (5N Makkah + 3N Madinah)',
    departureCity: 'Jakarta (CGK)',
    departureDate: '15 Oct 2026',
    returnDate: '24 Oct 2026',
    airline: {
      name: 'Saudia Airlines',
      flightNo: 'SV-819 / SV-818',
      route: 'CGK ➔ JED | MED ➔ CGK',
      class: 'Economy Direct'
    },
    makkahHotel: {
      name: 'Pullman Zamzam Makkah',
      stars: 5,
      distance: '0m (Clock Tower Concourse)',
      nights: 5
    },
    madinahHotel: {
      name: 'Anwar Al Madinah Mövenpick',
      stars: 5,
      distance: '50m to Gate 332',
      nights: 3
    },
    travelPartner: {
      name: 'PT Safar Al-Haramain Tour',
      licenseNo: 'PPIU No. 912/2021',
      verified: true,
      rating: 4.9
    },
    quota: 45,
    bookedPilgrims: 42,
    visaApproved: 40,
    pricing: {
      quad: 6850,
      triple: 7450,
      double: 8250,
      currency: 'SAR'
    },
    status: 'Active',
    featured: true,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Direct Flight SV-819', 'Fullboard Indonesian Buffet', 'Full Ziyarat Makkah & Madinah', 'Zamzam 5L per Pax', 'Nusuk MoHU Visa'],
    mutawwif: 'Ust. Dr. Ahmad Fauzan, Lc., MA'
  },
  {
    id: 'UMR-2026-12B',
    code: 'PKG-GA-12D',
    title: 'Umrah Ekonomi 12 Hari Garuda Indonesia Direct',
    tier: 'Ekonomi',
    duration: '12D11N (6N Makkah + 4N Madinah)',
    departureCity: 'Surabaya (SUB)',
    departureDate: '20 Oct 2026',
    returnDate: '31 Oct 2026',
    airline: {
      name: 'Garuda Indonesia',
      flightNo: 'GA-980 / GA-981',
      route: 'SUB ➔ JED | MED ➔ SUB',
      class: 'Economy Direct'
    },
    makkahHotel: {
      name: 'Le Meridien Towers Makkah',
      stars: 4,
      distance: '350m (24h Shuttle Access)',
      nights: 6
    },
    madinahHotel: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: '150m to Northern Courtyard',
      nights: 4
    },
    travelPartner: {
      name: 'PT Barakah Madani Wisata',
      licenseNo: 'PPIU No. 445/2019',
      verified: true,
      rating: 4.8
    },
    quota: 48,
    bookedPilgrims: 48,
    visaApproved: 48,
    pricing: {
      quad: 7950,
      triple: 8650,
      double: 9450,
      currency: 'SAR'
    },
    status: 'Full',
    featured: true,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Garuda Direct B777', 'Fullboard Catering', 'Train Haramain Highspeed Express', 'Zamzam 5L', 'Exclusive Baggage 30kg'],
    mutawwif: 'Ust. Muhammad Ihsan, M.Pd.I'
  },
  {
    id: 'UMR-2026-VIP03',
    code: 'PKG-VIP-9D',
    title: 'Umrah VIP Royal Executive Fairmont Clock Tower',
    tier: 'VIP & Executive',
    duration: '9D8N (5N Makkah + 3N Madinah)',
    departureCity: 'Jakarta (CGK)',
    departureDate: '25 Oct 2026',
    returnDate: '03 Nov 2026',
    airline: {
      name: 'Saudia Airlines',
      flightNo: 'SV-821 (Business)',
      route: 'CGK ➔ JED | MED ➔ CGK',
      class: 'Business Class'
    },
    makkahHotel: {
      name: 'Makkah Clock Royal Tower, A Fairmont',
      stars: 5,
      distance: 'Kaaba Direct View / Zero Meter',
      nights: 5
    },
    madinahHotel: {
      name: 'The Oberoi Madinah',
      stars: 5,
      distance: 'Direct Courtyard Access',
      nights: 3
    },
    travelPartner: {
      name: 'PT Royal Safar International',
      licenseNo: 'PPIU No. 102/2018',
      verified: true,
      rating: 5.0
    },
    quota: 25,
    bookedPilgrims: 22,
    visaApproved: 22,
    pricing: {
      quad: 14850,
      triple: 16200,
      double: 18500,
      currency: 'SAR'
    },
    status: 'Active',
    featured: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Business Class Flatbed', 'Private GMC Yukon Transfers', 'VIP Fast-track Lounge', 'Kaaba View Suites', 'Personal Mutawwif Guide'],
    mutawwif: 'Habib Ali Al-Habsyi, Lc.'
  },
  {
    id: 'UMR-2026-TRK04',
    code: 'PKG-TRK-13D',
    title: 'Umrah Plus Istanbul & Cappadocia 13 Hari',
    tier: 'Plus Turki',
    duration: '13D12N (5N Makkah + 4N Madinah + 3N Turkey)',
    departureCity: 'Jakarta (CGK)',
    departureDate: '05 Nov 2026',
    returnDate: '18 Nov 2026',
    airline: {
      name: 'Turkish Airlines',
      flightNo: 'TK-57 / TK-94',
      route: 'CGK ➔ IST ➔ JED | MED ➔ IST ➔ CGK',
      class: 'Economy Transit'
    },
    makkahHotel: {
      name: 'Swissotel Al Maqam Makkah',
      stars: 5,
      distance: '0m Abraj Al Bait Complex',
      nights: 5
    },
    madinahHotel: {
      name: 'Dar Al Taqwa Hotel Madinah',
      stars: 5,
      distance: 'King Fahd Gate Direct View',
      nights: 4
    },
    travelPartner: {
      name: 'PT Nusantara Global Umrah',
      licenseNo: 'PPIU No. 318/2020',
      verified: true,
      rating: 4.8
    },
    quota: 40,
    bookedPilgrims: 36,
    visaApproved: 35,
    pricing: {
      quad: 16850,
      triple: 17950,
      double: 19800,
      currency: 'SAR'
    },
    status: 'Active',
    featured: false,
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Turkish Airlines Return', 'Hagia Sophia & Bosphorus Cruise', 'Domestic Flight to Cappadocia', '5-Star Makkah/Madinah/Istanbul', 'Turkey E-Visa & Nusuk'],
    mutawwif: 'Ust. Fathur Rahman, S.Pd.I'
  },
  {
    id: 'UMR-2026-KLG05',
    code: 'PKG-KLG-10D',
    title: 'Umrah Private Keluarga & Lansia Ramah 10 Hari',
    tier: 'Keluarga',
    duration: '10D9N (5N Makkah + 4N Madinah)',
    departureCity: 'Kuala Lumpur (KUL)',
    departureDate: '12 Nov 2026',
    returnDate: '22 Nov 2026',
    airline: {
      name: 'Malaysia Airlines',
      flightNo: 'MH-156 / MH-157',
      route: 'KUL ➔ JED | MED ➔ KUL',
      class: 'Economy Direct'
    },
    makkahHotel: {
      name: 'Hilton Suites Makkah',
      stars: 5,
      distance: '50m Jabal Omar Direct Path',
      nights: 5
    },
    madinahHotel: {
      name: 'Madinah Hilton',
      stars: 5,
      distance: 'Northern Courtyard Access',
      nights: 4
    },
    travelPartner: {
      name: 'Al-Hidaayah Travel & Tours',
      licenseNo: 'KPK/LN 4192',
      verified: true,
      rating: 4.9
    },
    quota: 30,
    bookedPilgrims: 24,
    visaApproved: 22,
    pricing: {
      quad: 11250,
      triple: 12400,
      double: 13900,
      currency: 'SAR'
    },
    status: 'Active',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Direct A330 Flight', 'Elderly Wheelchair Companion Included', 'Private Family Van', 'Fullboard Buffet', 'Fast Haramain Bullet Train'],
    mutawwif: 'Ust. Wan Zulkifli, Lc.'
  },
  {
    id: 'UMR-2026-RMD06',
    code: 'PKG-RMD-14D',
    title: 'Umrah Itikaf Akhir Ramadhan 14 Hari Lailatul Qadar',
    tier: 'Ramadhan',
    duration: '14D13N (8N Makkah + 5N Madinah)',
    departureCity: 'Jakarta (CGK)',
    departureDate: '18 Mar 2027',
    returnDate: '01 Apr 2027',
    airline: {
      name: 'Saudia Airlines',
      flightNo: 'SV-817 / SV-818',
      route: 'CGK ➔ JED | JED ➔ CGK',
      class: 'Economy Direct'
    },
    makkahHotel: {
      name: 'Raffles Makkah Palace',
      stars: 5,
      distance: 'Zero Meter Kaaba Direct',
      nights: 8
    },
    madinahHotel: {
      name: 'Dar Al Iman InterContinental',
      stars: 5,
      distance: 'Direct Gate 25 Access',
      nights: 5
    },
    travelPartner: {
      name: 'PT Safar Al-Haramain Tour',
      licenseNo: 'PPIU No. 912/2021',
      verified: true,
      rating: 4.9
    },
    quota: 35,
    bookedPilgrims: 32,
    visaApproved: 30,
    pricing: {
      quad: 18500,
      triple: 20400,
      double: 23900,
      currency: 'SAR'
    },
    status: 'Closing Soon',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    inclusions: ['Sahur & Iftar Buffet Inclusions', 'Exclusive Itikaf Guide Program', 'Confirmed Haramain Train', 'Full Ziyarat', 'VIP Airport Fast Track'],
    mutawwif: 'Syaikh Abdullah Al-Makki'
  }
];

export const ADMIN_UMRAH_BOOKINGS: AdminUmrahPilgrimBooking[] = [
  {
    id: 'BK-UMR-1048',
    bookingCode: 'UMR-1048',
    packageTitle: 'Umrah Reguler 9 Hari Saudia SV-819 Direct',
    leadName: 'Drs. H. Bambang Soediro',
    passportNo: 'C9812456',
    phone: '+62 811-2345-6789',
    country: 'Indonesia',
    groupSize: 4,
    departureCity: 'Jakarta (CGK)',
    departureDate: '15 Oct 2026',
    totalAmount: 27400,
    currency: 'SAR',
    paymentStatus: 'Paid',
    visaStatus: 'Approved',
    manifestStatus: 'Ready'
  },
  {
    id: 'BK-UMR-1049',
    bookingCode: 'UMR-1049',
    packageTitle: 'Umrah VIP Royal Executive Fairmont Clock Tower',
    leadName: 'Dato Seri Syed Azlan',
    passportNo: 'A5612349',
    phone: '+60 19-876-5432',
    country: 'Malaysia',
    groupSize: 2,
    departureCity: 'Kuala Lumpur (KUL)',
    departureDate: '25 Oct 2026',
    totalAmount: 37000,
    currency: 'SAR',
    paymentStatus: 'Paid',
    visaStatus: 'Approved',
    manifestStatus: 'Ready'
  },
  {
    id: 'BK-UMR-1050',
    bookingCode: 'UMR-1050',
    packageTitle: 'Umrah Ekonomi 12 Hari Garuda Indonesia Direct',
    leadName: 'Hj. Siti Aminah Marzuki',
    passportNo: 'C4512980',
    phone: '+62 813-9876-1122',
    country: 'Indonesia',
    groupSize: 3,
    departureCity: 'Surabaya (SUB)',
    departureDate: '20 Oct 2026',
    totalAmount: 25950,
    currency: 'SAR',
    paymentStatus: 'Partial',
    visaStatus: 'Processing',
    manifestStatus: 'Incomplete'
  },
  {
    id: 'BK-UMR-1051',
    bookingCode: 'UMR-1051',
    packageTitle: 'Umrah Plus Istanbul & Cappadocia 13 Hari',
    leadName: 'Ir. Hendra Gunawan',
    passportNo: 'C7712390',
    phone: '+62 812-3344-5566',
    country: 'Indonesia',
    groupSize: 2,
    departureCity: 'Jakarta (CGK)',
    departureDate: '05 Nov 2026',
    totalAmount: 39600,
    currency: 'SAR',
    paymentStatus: 'Paid',
    visaStatus: 'Approved',
    manifestStatus: 'Ready'
  }
];

export const ADMIN_UMRAH_DEPARTURE_BATCHES: AdminUmrahDepartureBatch[] = [
  {
    id: 'BATCH-2026-OCT15',
    batchCode: 'MANIFEST-SV-819',
    packageCode: 'PKG-SV-9D',
    flightCode: 'SV-819 Direct',
    airline: 'Saudia Airlines',
    departureDate: '15 Oct 2026 • 11:30 AM',
    departureCity: 'CGK ➔ JED',
    route: 'Terminal 3 Ultimate Soekarno Hatta',
    totalPilgrims: 42,
    capacity: 45,
    status: 'Boarding Ready',
    mutawwif: 'Ust. Dr. Ahmad Fauzan, Lc., MA'
  },
  {
    id: 'BATCH-2026-OCT20',
    batchCode: 'MANIFEST-GA-980',
    packageCode: 'PKG-GA-12D',
    flightCode: 'GA-980 Direct',
    airline: 'Garuda Indonesia',
    departureDate: '20 Oct 2026 • 01:15 PM',
    departureCity: 'SUB ➔ JED',
    route: 'Juanda International Terminal 2',
    totalPilgrims: 48,
    capacity: 48,
    status: 'Finalizing Visas',
    mutawwif: 'Ust. Muhammad Ihsan, M.Pd.I'
  },
  {
    id: 'BATCH-2026-OCT25',
    batchCode: 'MANIFEST-VIP-821',
    packageCode: 'PKG-VIP-9D',
    flightCode: 'SV-821 Business',
    airline: 'Saudia Airlines',
    departureDate: '25 Oct 2026 • 09:45 AM',
    departureCity: 'CGK ➔ JED',
    route: 'CGK Sapphire VIP Lounge Departure',
    totalPilgrims: 22,
    capacity: 25,
    status: 'Manifest Open',
    mutawwif: 'Habib Ali Al-Habsyi, Lc.'
  }
];

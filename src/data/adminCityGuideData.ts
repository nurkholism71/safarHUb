import {
  AdminCityRecord,
  AdminCityKpi,
  AdminCityProvinceFilter,
  AdminCityUpdateLog,
  AdminProvinceSummary
} from '../types/adminCityGuide';

export const ADMIN_CITY_KPIS: AdminCityKpi[] = [
  {
    id: 'total_cities',
    title: 'Total Cities & Hubs',
    value: '84',
    change: '+8.2%',
    isPositive: true,
    subtitle: '13 Administrative Provinces',
    iconName: 'Building2'
  },
  {
    id: 'catalogued_attractions',
    title: 'Catalogued POIs',
    value: '1,420',
    change: '+14.6%',
    isPositive: true,
    subtitle: '185 verified historical sites',
    iconName: 'Compass'
  },
  {
    id: 'food_guides',
    title: 'Verified Food Guides',
    value: '285',
    change: '+19.2%',
    isPositive: true,
    subtitle: 'Authentic Saudi & Hijazi',
    iconName: 'Utensils'
  },
  {
    id: 'visitor_traffic',
    title: 'Annual Tourism Traffic',
    value: '32.8M',
    change: '+22.4%',
    isPositive: true,
    subtitle: 'STA & Hajj Season Data',
    iconName: 'Users'
  },
  {
    id: 'kb_completeness',
    title: 'Database Completeness',
    value: '98.6%',
    change: '+1.2 pt',
    isPositive: true,
    subtitle: 'STA & UNESCO Certified',
    iconName: 'ShieldCheck'
  }
];

export const ADMIN_CITY_PROVINCE_FILTERS: AdminCityProvinceFilter[] = [
  { id: 'all', name: 'All Provinces', iconName: 'Layers', citiesCount: 84, attractionsCount: 1420 },
  { id: 'makkah_prov', name: 'Makkah Province', iconName: 'Moon', citiesCount: 16, attractionsCount: 380 },
  { id: 'madinah_prov', name: 'Madinah Province', iconName: 'Landmark', citiesCount: 12, attractionsCount: 290 },
  { id: 'riyadh_prov', name: 'Riyadh Province', iconName: 'Building', citiesCount: 18, attractionsCount: 320 },
  { id: 'eastern_prov', name: 'Eastern Province', iconName: 'Waves', citiesCount: 14, attractionsCount: 180 },
  { id: 'tabuk_prov', name: 'Tabuk & NEOM', iconName: 'Sparkles', citiesCount: 8, attractionsCount: 110 },
  { id: 'asir_prov', name: 'Asir Highlands', iconName: 'Mountain', citiesCount: 10, attractionsCount: 95 },
  { id: 'alula_heritage', name: 'AlUla Royal Territory', iconName: 'Castle', citiesCount: 6, attractionsCount: 85 }
];

export const ADMIN_CITY_RECORDS: AdminCityRecord[] = [
  {
    id: 'CITY-SA-01',
    code: 'SA-MKH-01',
    name: 'Makkah Al-Mukarramah',
    arabicName: 'مكة المكرمة',
    province: 'Makkah Province',
    tier: 'Holy City',
    population: '2,400,000',
    attractionsCount: 154,
    unescoSitesCount: 2,
    hotelsCount: 420,
    primaryAirport: 'King Abdulaziz Intl (JED) - 75km',
    transitHub: 'Haramain Highspeed Rail Makkah Station',
    heritageTags: ['Masjid Al-Haram', 'Kaaba', 'Jabal Al-Nour', 'Mina & Arafat', 'Abraj Al Bait'],
    weather: { temp: '36°C', condition: 'Sunny' },
    startingPrice: 'From SAR 350',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    curator: 'Dr. Tariq Al-Makki',
    lastUpdated: '10 mins ago',
    featured: true
  },
  {
    id: 'CITY-SA-02',
    code: 'SA-MED-02',
    name: 'Madinah Al-Munawwarah',
    arabicName: 'المدينة المنورة',
    province: 'Madinah Province',
    tier: 'Holy City',
    population: '1,500,000',
    attractionsCount: 128,
    unescoSitesCount: 1,
    hotelsCount: 310,
    primaryAirport: 'Prince Mohammad Bin Abdulaziz Intl (MED)',
    transitHub: 'Haramain Highspeed Rail Madinah Station',
    heritageTags: ['Masjid An-Nabawi', 'Quba Mosque', 'Mount Uhud', 'Qiblatain', 'Wadi Al-Aqiq'],
    weather: { temp: '34°C', condition: 'Sunny' },
    startingPrice: 'From SAR 320',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80',
    curator: 'Ust. Fadhil Madani',
    lastUpdated: '1 hour ago',
    featured: true
  },
  {
    id: 'CITY-SA-03',
    code: 'SA-RUH-03',
    name: 'Riyadh',
    arabicName: 'الرياض',
    province: 'Riyadh Province',
    tier: 'Capital Metropolis',
    population: '7,600,000',
    attractionsCount: 215,
    unescoSitesCount: 2,
    hotelsCount: 560,
    primaryAirport: 'King Khalid Intl Airport (RUH)',
    transitHub: 'Riyadh Metro Network (6 Lines)',
    heritageTags: ['Diriyah At-Turaif UNESCO', 'Kingdom Tower', 'Al Masmak Fortress', 'Boulevard City'],
    weather: { temp: '32°C', condition: 'Clear' },
    startingPrice: 'From SAR 280',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80',
    curator: 'Eng. Sarah Al-Otaibi',
    lastUpdated: 'Today, 09:30 AM',
    featured: true
  },
  {
    id: 'CITY-SA-04',
    code: 'SA-JED-04',
    name: 'Jeddah',
    arabicName: 'جدة',
    province: 'Makkah Province',
    tier: 'Red Sea Hub',
    population: '4,100,000',
    attractionsCount: 165,
    unescoSitesCount: 1,
    hotelsCount: 380,
    primaryAirport: 'King Abdulaziz Intl Airport (JED)',
    transitHub: 'Haramain Highspeed Rail Jeddah Central',
    heritageTags: ['Historic Jeddah Al-Balad UNESCO', 'Jeddah Corniche', 'King Fahd Fountain', 'Red Sea Gateway'],
    weather: { temp: '30°C', condition: 'Sunny' },
    startingPrice: 'From SAR 250',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    curator: 'Hassan Bin Mahfouz',
    lastUpdated: 'Yesterday',
    featured: true
  },
  {
    id: 'CITY-SA-05',
    code: 'SA-ULA-05',
    name: 'AlUla',
    arabicName: 'العلا',
    province: 'Madinah Province',
    tier: 'UNESCO Heritage',
    population: '45,000',
    attractionsCount: 92,
    unescoSitesCount: 3,
    hotelsCount: 65,
    primaryAirport: 'AlUla International Airport (ULH)',
    transitHub: 'Royal Commission Tourist Shuttle System',
    heritageTags: ['Hegra (Madain Salih) UNESCO', 'Dadan & Jabal Ikmah', 'Elephant Rock', 'Old Town AlUla'],
    weather: { temp: '29°C', condition: 'Sunny' },
    startingPrice: 'From SAR 720',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    curator: 'RCU Heritage Team',
    lastUpdated: '2 days ago',
    featured: true
  },
  {
    id: 'CITY-SA-06',
    code: 'SA-TAF-06',
    name: 'Taif',
    arabicName: 'الطائف',
    province: 'Makkah Province',
    tier: 'Mountain City',
    population: '690,000',
    attractionsCount: 84,
    unescoSitesCount: 0,
    hotelsCount: 120,
    primaryAirport: 'Taif Regional Airport (TIF)',
    transitHub: 'Al-Hada Mountain Highway & Cable Car',
    heritageTags: ['Shubra Palace', 'Taif Rose Plantations', 'Al Hada Mountains', 'Al Rudaf Park'],
    weather: { temp: '24°C', condition: 'Cloudy' },
    startingPrice: 'From SAR 300',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
    curator: 'Bandar Al-Thaqafi',
    lastUpdated: '3 days ago',
    featured: false
  },
  {
    id: 'CITY-SA-07',
    code: 'SA-DMM-07',
    name: 'Dammam & Al-Khobar',
    arabicName: 'الدمام والخبر',
    province: 'Eastern Province',
    tier: 'Regional Center',
    population: '1,800,000',
    attractionsCount: 110,
    unescoSitesCount: 1,
    hotelsCount: 220,
    primaryAirport: 'King Fahd Intl Airport (DMM)',
    transitHub: 'Saudi Railway Organization (SRO) Terminal',
    heritageTags: ['Ithra Cultural Center', 'Half Moon Bay', 'Al-Ahsa Oasis UNESCO', 'Corniche Al-Khobar'],
    weather: { temp: '31°C', condition: 'Clear' },
    startingPrice: 'From SAR 260',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80',
    curator: 'Khalid Al-Dossary',
    lastUpdated: '4 days ago',
    featured: false
  },
  {
    id: 'CITY-SA-08',
    code: 'SA-NEO-08',
    name: 'NEOM & The Line',
    arabicName: 'نيوم',
    province: 'Tabuk Province',
    tier: 'Megacity / SEZ',
    population: '120,000 (Phase 1)',
    attractionsCount: 65,
    unescoSitesCount: 0,
    hotelsCount: 45,
    primaryAirport: 'NEOM Bay Airport (NUM)',
    transitHub: 'High-speed Under-ground Transit Spine',
    heritageTags: ['Sindalah Luxury Island', 'Trojena Mountain Resort', 'Oxagon Clean Port', 'The Line'],
    weather: { temp: '26°C', condition: 'Breezy' },
    startingPrice: 'From SAR 950',
    status: 'In Review',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    curator: 'NEOM Authority Team',
    lastUpdated: '5 days ago',
    featured: true
  }
];

export const ADMIN_CITY_UPDATE_LOGS: AdminCityUpdateLog[] = [
  {
    id: 'log-1',
    cityName: 'Makkah Al-Mukarramah',
    action: 'Added 4 new heritage walking routes in Jabal Thawr',
    editor: 'Dr. Tariq Al-Makki',
    timestamp: '10 mins ago',
    tag: 'Attraction POI'
  },
  {
    id: 'log-2',
    cityName: 'Riyadh',
    action: 'Updated transit guides with 6 operational Riyadh Metro lines',
    editor: 'Eng. Sarah Al-Otaibi',
    timestamp: 'Today, 09:30 AM',
    tag: 'Transit Hub'
  },
  {
    id: 'log-3',
    cityName: 'AlUla',
    action: 'Synchronized UNESCO buffer zone preservation data',
    editor: 'RCU Heritage Team',
    timestamp: 'Yesterday',
    tag: 'UNESCO Heritage'
  },
  {
    id: 'log-4',
    cityName: 'NEOM',
    action: 'Submitted Sindalah Island hospitality profiles for review',
    editor: 'NEOM Authority Team',
    timestamp: '2 days ago',
    tag: 'Hospitality'
  }
];

export const ADMIN_PROVINCE_SUMMARIES: AdminProvinceSummary[] = [
  {
    id: 'prov-1',
    province: 'Makkah Province',
    citiesCount: 16,
    coverage: 99,
    topCity: 'Makkah & Jeddah'
  },
  {
    id: 'prov-2',
    province: 'Riyadh Province',
    citiesCount: 18,
    coverage: 98,
    topCity: 'Riyadh Capital'
  },
  {
    id: 'prov-3',
    province: 'Madinah Province',
    citiesCount: 12,
    coverage: 96,
    topCity: 'Madinah & AlUla'
  },
  {
    id: 'prov-4',
    province: 'Eastern Province',
    citiesCount: 14,
    coverage: 94,
    topCity: 'Dammam & Al-Khobar'
  },
  {
    id: 'prov-5',
    province: 'Tabuk & Asir',
    citiesCount: 18,
    coverage: 91,
    topCity: 'NEOM & Abha'
  }
];

import { JastipCategory, JastipProduct, JastipRecentOrder, JastipShopPlace } from '../types/jastip';

export const JASTIP_CATEGORIES: JastipCategory[] = [
  {
    id: 'dates',
    name: 'Dates',
    subName: 'Kurma & Olahan',
    image: '/images/jastip/ajwa_dates.jpg',
    count: 48
  },
  {
    id: 'perfume',
    name: 'Perfume & Oud',
    subName: 'Parfum & Wangi-wangian',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    count: 62
  },
  {
    id: 'islamic',
    name: 'Islamic Products',
    subName: 'Al-Quran, Sajadah, dll',
    image: '/images/jastip/islamic_giftset.jpg',
    count: 85
  },
  {
    id: 'abaya',
    name: 'Abaya & Clothing',
    subName: 'Pakaian Muslim',
    image: '/images/jastip/abaya_luxury.jpg',
    count: 54
  },
  {
    id: 'thobe',
    name: 'Thobe & Accessories',
    subName: 'Thobe, Shemagh, Igal',
    image: '/images/jastip/saudi_thobe.jpg',
    count: 32
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    subName: 'Makanan & Minuman',
    image: '/images/jastip/saffron.jpg',
    count: 40
  },
  {
    id: 'souvenir',
    name: 'Souvenir & Gifts',
    subName: 'Oleh-oleh',
    image: '/images/jastip/zamzam_water.jpg',
    count: 76
  },
  {
    id: 'electronics',
    name: 'Electronics',
    subName: 'Elektronik',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80',
    count: 24
  }
];

export const JASTIP_PRODUCTS: JastipProduct[] = [
  {
    id: 'prod-1',
    name: 'Ajwa Dates',
    subName: 'Kurma Ajwa Premium Aliya',
    category: 'dates',
    priceSAR: 120,
    originalPriceSAR: 145,
    rating: 4.9,
    reviewsCount: 320,
    image: '/images/jastip/ajwa_dates.jpg',
    location: 'Madinah Al-Munawwarah',
    badge: 'Best Seller',
    weight: '1 kg Box',
    isPopular: true
  },
  {
    id: 'prod-2',
    name: 'Oud Perfume',
    subName: 'Parfum Oud Royal Bukhoor Original',
    category: 'perfume',
    priceSAR: 350,
    originalPriceSAR: 420,
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    location: 'Makkah Abraj Al-Bait',
    badge: 'Luxury',
    weight: '100 ml EDP',
    isPopular: true
  },
  {
    id: 'prod-3',
    name: 'Madinah Dates',
    subName: 'Kurma Sukari Basah Madinah',
    category: 'dates',
    priceSAR: 95,
    rating: 4.9,
    reviewsCount: 185,
    image: '/images/jastip/ajwa_dates.jpg',
    location: 'Madinah Date Market',
    weight: '1 kg Vacuum',
    isPopular: true
  },
  {
    id: 'prod-4',
    name: 'Saffron Premium',
    subName: 'Zafron Asli Super Negin Iran-Saudi',
    category: 'food',
    priceSAR: 250,
    originalPriceSAR: 290,
    rating: 4.8,
    reviewsCount: 90,
    image: '/images/jastip/saffron.jpg',
    location: 'Jeddah Gold Souq',
    badge: 'Grade A',
    weight: '5 grams',
    isPopular: true
  },
  {
    id: 'prod-5',
    name: 'Abaya Premium',
    subName: 'Abaya Hitam Saudi Bordir Gold Silk',
    category: 'abaya',
    priceSAR: 400,
    originalPriceSAR: 480,
    rating: 4.7,
    reviewsCount: 150,
    image: '/images/jastip/abaya_luxury.jpg',
    location: 'Riyadh Fashion District',
    weight: 'Full Set w/ Shawl',
    isPopular: true
  },
  {
    id: 'prod-6',
    name: 'Thobe Saudi',
    subName: 'Thobe Putih Al-Aseel Original',
    category: 'thobe',
    priceSAR: 180,
    rating: 4.8,
    reviewsCount: 110,
    image: '/images/jastip/saudi_thobe.jpg',
    location: 'Makkah Clock Tower Mall',
    weight: 'Size 52 - 62',
    isPopular: true
  },
  {
    id: 'prod-7',
    name: 'Zamzam Items',
    subName: 'Botol Galon Zamzam & Mug Eksklusif',
    category: 'souvenir',
    priceSAR: 85,
    rating: 4.9,
    reviewsCount: 260,
    image: '/images/jastip/zamzam_water.jpg',
    location: 'Kudai Zamzam Center, Makkah',
    weight: 'Official Factory Pack',
    isPopular: true
  },
  {
    id: 'prod-8',
    name: 'Islamic Gift Set',
    subName: 'Mushaf Madinah, Sajadah Turki, Tasbih Oud',
    category: 'islamic',
    priceSAR: 220,
    originalPriceSAR: 260,
    rating: 4.8,
    reviewsCount: 140,
    image: '/images/jastip/islamic_giftset.jpg',
    location: 'Madinah Al-Munawwarah',
    badge: 'Gift Box',
    weight: 'Velvet Gift Box',
    isPopular: true
  }
];

export const JASTIP_RECENT_ORDERS: JastipRecentOrder[] = [
  {
    id: 'ord-1',
    itemTitle: 'Oud Perfume × 2',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=200&q=80',
    orderDate: '12 Oct 2026',
    status: 'Shopping',
    statusColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 'ord-2',
    itemTitle: 'Ajwa Dates × 5',
    image: 'https://images.unsplash.com/photo-1598155523122-3842334d2c17?auto=format&fit=crop&w=200&q=80',
    orderDate: '10 Oct 2026',
    status: 'Packed',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    id: 'ord-3',
    itemTitle: 'Abaya × 1',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=200&q=80',
    orderDate: '8 Oct 2026',
    status: 'Shipped',
    statusColor: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'ord-4',
    itemTitle: 'Islamic Gift Set × 3',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=200&q=80',
    orderDate: '5 Oct 2026',
    status: 'Delivered',
    statusColor: 'bg-teal-100 text-teal-800 border-teal-200'
  }
];

export const JASTIP_SHOPPING_PLACES: JastipShopPlace[] = [
  {
    id: 'makkah',
    city: 'Makkah',
    tags: 'Souvenir, Islamic Products',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    popularShops: ['Abraj Al-Bait Complex', 'Souq Al-Khalil', 'Zamzam Factory Kudai']
  },
  {
    id: 'madinah',
    city: 'Madinah',
    tags: 'Dates, Perfume, Gifts',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=600&q=80',
    popularShops: ['Central Date Market', 'Taiba Shopping Centre', 'Al-Noor Mall']
  },
  {
    id: 'jeddah',
    city: 'Jeddah',
    tags: 'Malls, Electronics',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=600&q=80',
    popularShops: ['Red Sea Mall', 'Mall of Arabia', 'Al-Balad Heritage Souq']
  },
  {
    id: 'riyadh',
    city: 'Riyadh',
    tags: 'Luxury, Fashion, Brands',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80',
    popularShops: ['Kingdom Centre Mall', 'Centria Mall', 'Boulevard Riyadh City']
  },
  {
    id: 'taif',
    city: 'Taif',
    tags: 'Honey, Roses, Local Products',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    popularShops: ['Taif Rose Distilleries', 'Al-Balad Souq Taif', 'Honey Souq']
  }
];

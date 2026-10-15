import { ContactChannelItem, HelpCategoryItem, SupportTicketItem, FaqItem } from '../types/support';

export const CONTACT_CHANNELS: ContactChannelItem[] = [
  {
    id: 'ch-livechat',
    title: 'Live Chat',
    subtitle: 'Chat with our support team in real time',
    icon: 'MessageSquare',
    link: 'messages'
  },
  {
    id: 'ch-whatsapp',
    title: 'WhatsApp',
    subtitle: 'Chat via WhatsApp (Recommended)',
    icon: 'MessageCircle',
    isRecommended: true,
    link: 'https://wa.me/9668001234567'
  },
  {
    id: 'ch-email',
    title: 'Email Support',
    subtitle: 'support@safarhub.sa • We reply within 2 hours',
    icon: 'Mail',
    link: 'mailto:support@safarhub.sa'
  },
  {
    id: 'ch-call',
    title: 'Call Support',
    subtitle: '+966 800 123 4567 • Available 24/7',
    icon: 'Phone',
    link: 'tel:+9668001234567'
  }
];

export const HELP_CATEGORIES: HelpCategoryItem[] = [
  {
    id: 'cat-bookings',
    title: 'Bookings',
    description: 'Modify, cancel or check your booking',
    icon: 'CalendarCheck',
    articleCount: 18
  },
  {
    id: 'cat-hotels',
    title: 'Hotels',
    description: 'Check-in, amenities, special requests',
    icon: 'Building2',
    articleCount: 24
  },
  {
    id: 'cat-transport',
    title: 'Transport',
    description: 'Bus, car, taxi, private transfer',
    icon: 'Bus',
    articleCount: 15
  },
  {
    id: 'cat-airport',
    title: 'Airport Services',
    description: 'Meet & greet, lounge, fast track',
    icon: 'PlaneTakeoff',
    articleCount: 12
  },
  {
    id: 'cat-jastip',
    title: 'Jastip',
    description: 'Orders, shipping, delivery status',
    icon: 'ShoppingBag',
    articleCount: 14
  },
  {
    id: 'cat-umrah',
    title: 'Umrah Packages',
    description: 'Itinerary, guide, ziyarat, services',
    icon: 'MoonStar',
    articleCount: 22
  },
  {
    id: 'cat-payments',
    title: 'Payments',
    description: 'Payment issues, refunds, invoices',
    icon: 'CreditCard',
    articleCount: 16
  },
  {
    id: 'cat-visa',
    title: 'Visa & Documentation',
    description: 'Visa, insurance, required documents',
    icon: 'FileCheck',
    articleCount: 19
  }
];

export const RECENT_SUPPORT_TICKETS: SupportTicketItem[] = [
  {
    id: 't-1',
    ticketId: '#SP-102941',
    subject: 'Hotel check-in issue',
    category: 'Hotels',
    categoryKey: 'hotels',
    status: 'In Progress',
    lastUpdate: '12 Oct 2026, 14:32',
    icon: 'Building2'
  },
  {
    id: 't-2',
    ticketId: '#SP-102938',
    subject: 'Refund request',
    category: 'Payments',
    categoryKey: 'payments',
    status: 'Resolved',
    lastUpdate: '10 Oct 2026, 09:15',
    icon: 'CreditCard'
  },
  {
    id: 't-3',
    ticketId: '#SP-102935',
    subject: 'Airport meet & greet',
    category: 'Airport Services',
    categoryKey: 'airport',
    status: 'Pending',
    lastUpdate: '9 Oct 2026, 18:20',
    icon: 'PlaneTakeoff'
  },
  {
    id: 't-4',
    ticketId: '#SP-102930',
    subject: 'Change umrah date',
    category: 'Umrah Packages',
    categoryKey: 'umrah',
    status: 'Resolved',
    lastUpdate: '8 Oct 2026, 11:05',
    icon: 'MoonStar'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How can I change or cancel my booking?',
    answer: 'You can easily change or cancel your hotel, transport, or Umrah booking directly through the "Bookings" tab in your dashboard, or by contacting our 24/7 concierge support team.'
  },
  {
    id: 'faq-2',
    question: 'What is the refund policy?',
    answer: 'Full refunds are processed within 24–48 hours for cancellations made up to 72 hours before check-in or service departure. Instant wallet credit is also available.'
  },
  {
    id: 'faq-3',
    question: 'How does airport meet & greet service work?',
    answer: 'Our VIP airport representative will meet you at the aircraft gate or arrival terminal with a personalized name sign, assist with luggage, expedite immigration, and escort you to your vehicle.'
  },
  {
    id: 'faq-4',
    question: 'Can I modify my umrah package date?',
    answer: 'Yes, Umrah package dates can be modified up to 5 business days before your scheduled departure date subject to hotel room and transport availability.'
  },
  {
    id: 'faq-5',
    question: 'What payment methods are accepted?',
    answer: 'We accept Saudi Mada cards, Visa, Mastercard, American Express, Apple Pay, STC Pay, and verified corporate wire transfers.'
  },
  {
    id: 'faq-6',
    question: 'How long does jastip delivery take?',
    answer: 'Local Saudi deliveries are delivered within 24 hours. International express shipments typically take 3–5 working days with real-time tracking.'
  }
];

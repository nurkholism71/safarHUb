import { MessageThreadItem, ChatMessage, SharedFileItem } from '../types/messages';

export const MESSAGE_THREADS: MessageThreadItem[] = [
  {
    id: 'th-support',
    name: 'SafarHub Support',
    category: 'support',
    categoryLabel: 'Official Support',
    avatarIcon: 'Headphones',
    lastMessage: "Assalamu'alaikum, how can we help you today?",
    time: '10:24',
    unreadCount: 3,
    isOnline: true
  },
  {
    id: 'th-hotel',
    name: 'Makkah Hilton Hotel',
    category: 'hotel',
    categoryLabel: 'Hotel Concierge',
    avatarImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'Your room is confirmed. Check-in details have been sent.',
    time: '09:15',
    unreadCount: 1,
    isOnline: true
  },
  {
    id: 'th-transport-jed',
    name: 'Jeddah Transport',
    category: 'transport',
    categoryLabel: 'Driver Dispatch',
    avatarIcon: 'Bus',
    lastMessage: 'Your driver will pick you up at Terminal 1.',
    time: '08:30',
    isOnline: false
  },
  {
    id: 'th-airport',
    name: 'Jeddah Airport Service',
    category: 'airport',
    categoryLabel: 'VIP Fast Track',
    avatarImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'Meet & Greet service confirmed for 12 Oct.',
    time: 'Yesterday',
    isOnline: true
  },
  {
    id: 'th-guide',
    name: 'Umrah Guide – Ahmad',
    category: 'guide',
    categoryLabel: 'Muthawwif',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'Ziyarat tour schedule for tomorrow is ready.',
    time: 'Yesterday',
    isOnline: false
  },
  {
    id: 'th-jastip',
    name: 'Jastip Saudi',
    category: 'jastip',
    categoryLabel: 'Personal Shopper',
    avatarIcon: 'ShoppingBag',
    lastMessage: 'Your order has been packed and ready to ship.',
    time: '12 Oct',
    isOnline: true
  },
  {
    id: 'th-visa',
    name: 'Visa & Documentation',
    category: 'visa',
    categoryLabel: 'Embassy Processing',
    avatarIcon: 'FileCheck',
    lastMessage: 'Your visa document has been issued.',
    time: '11 Oct',
    isOnline: false
  },
  {
    id: 'th-transport-ruh',
    name: 'Riyadh Transport',
    category: 'transport',
    categoryLabel: 'Executive Fleet',
    avatarImage: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=200&q=80',
    lastMessage: 'Thank you for using our service.',
    time: '10 Oct',
    isOnline: false
  }
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'support',
    text: "Assalamu'alaikum, welcome to SafarHub Saudi 👋 How can we help you today?",
    time: '10:20'
  },
  {
    id: 'msg-2',
    sender: 'user',
    text: 'Wa\'alaikumussalam, I want to confirm my Umrah package for 12 – 19 Oct 2026.',
    time: '10:21'
  },
  {
    id: 'msg-3',
    sender: 'support',
    text: 'Sure, let me check your booking details.',
    time: '10:22',
    embeddedCard: {
      type: 'package',
      title: 'Essential Umrah – 7 Days',
      subTitle: '12 Oct – 19 Oct 2026',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'msg-4',
    sender: 'support',
    text: "Your package is confirmed ✅\nAll services have been arranged:\n• Hotel: Makkah (3 nights) + Madinah (3 nights)\n• Transport: Private bus\n• Airport: Meet & Greet\n• Guide: Ziyarat tour included",
    time: '10:23'
  },
  {
    id: 'msg-5',
    sender: 'user',
    text: 'Can you send me the hotel voucher and transport details?',
    time: '10:23'
  },
  {
    id: 'msg-6',
    sender: 'support',
    text: "Of course! I've attached the vouchers below.",
    time: '10:24',
    attachments: [
      {
        name: 'Hotel Voucher (Makkah Hilton.pdf)',
        size: '2.4 MB',
        type: 'pdf'
      },
      {
        name: 'Transport Voucher (Jeddah Airport.pdf)',
        size: '1.8 MB',
        type: 'pdf'
      }
    ]
  },
  {
    id: 'msg-7',
    sender: 'support',
    text: 'Is there anything else we can help you with?',
    time: '10:24'
  }
];

export const SHARED_FILES_LIST: SharedFileItem[] = [
  {
    id: 'file-1',
    title: 'Hotel Voucher',
    size: '2.4 MB',
    date: '12 Oct',
    fileType: 'pdf'
  },
  {
    id: 'file-2',
    title: 'Transport Voucher',
    size: '1.8 MB',
    date: '12 Oct',
    fileType: 'pdf'
  },
  {
    id: 'file-3',
    title: 'Umrah Itinerary',
    size: '1.1 MB',
    date: '10 Oct',
    fileType: 'pdf'
  }
];

export const NEW_CONVERSATION_SERVICES = [
  {
    id: 'conv-support',
    title: 'SafarHub Support',
    desc: 'General Questions',
    icon: 'Headphones'
  },
  {
    id: 'conv-hotels',
    title: 'Hotels',
    desc: 'Hotel Booking & Stay',
    icon: 'Building2'
  },
  {
    id: 'conv-transport',
    title: 'Transport',
    desc: 'Bus, Car, Taxi',
    icon: 'Bus'
  },
  {
    id: 'conv-airport',
    title: 'Airport Services',
    desc: 'Meet & Greet, Lounge',
    icon: 'Plane'
  },
  {
    id: 'conv-jastip',
    title: 'Jastip',
    desc: 'Shopping Service',
    icon: 'ShoppingBag'
  },
  {
    id: 'conv-umrah',
    title: 'Umrah Guide',
    desc: 'Ziyarat & Tour',
    icon: 'MoonStar'
  },
  {
    id: 'conv-visa',
    title: 'Visa Support',
    desc: 'Documentation',
    icon: 'FileCheck'
  }
];

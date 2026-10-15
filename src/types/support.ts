export interface ContactChannelItem {
  id: string;
  title: string;
  subtitle: string;
  icon: 'MessageSquare' | 'MessageCircle' | 'Mail' | 'Phone';
  badge?: string;
  link: string;
  isRecommended?: boolean;
}

export interface HelpCategoryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  articleCount?: number;
}

export interface SupportTicketItem {
  id: string;
  ticketId: string;
  subject: string;
  category: string;
  categoryKey: 'hotels' | 'payments' | 'airport' | 'umrah' | 'transport' | 'jastip' | 'visa';
  status: 'In Progress' | 'Resolved' | 'Pending' | 'Open' | 'Closed';
  lastUpdate: string;
  icon?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

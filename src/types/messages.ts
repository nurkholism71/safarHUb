export interface MessageThreadItem {
  id: string;
  name: string;
  category: 'support' | 'hotel' | 'transport' | 'airport' | 'jastip' | 'guide' | 'visa';
  categoryLabel: string;
  avatarImage?: string;
  avatarIcon?: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'support' | 'user';
  text?: string;
  time: string;
  embeddedCard?: {
    type: 'package' | 'hotel' | 'transport';
    title: string;
    subTitle: string;
    image: string;
  };
  attachments?: {
    name: string;
    size: string;
    type: string;
  }[];
}

export interface SharedFileItem {
  id: string;
  title: string;
  size: string;
  date: string;
  fileType: 'pdf' | 'doc' | 'img';
}

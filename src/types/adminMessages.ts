export type MessageChannelFilter = 'all' | 'whatsapp' | 'livechat' | 'portal' | 'email' | 'vip' | 'sms' | 'system';
export type MessageDeliveryStatus = 'Read' | 'Delivered' | 'Sent' | 'Unread' | 'Failed' | 'Starred';
export type MessageType = 'Text' | 'Document PDF' | 'Image' | 'Voice Note' | 'System Notification' | 'Location';
export type MessageCategory = 'Umrah & Visa' | 'Hotel Reservation' | 'Flight & Airport' | 'VIP Concierge' | 'Partner B2B' | 'Payment & Invoicing' | 'System Alert';

export interface AdminMessageAttachment {
  name: string;
  type: string;
  size: string;
  url?: string;
}

export interface AdminMessageItem {
  id: string;
  threadId: string;
  sender: {
    name: string;
    username: string;
    avatar: string;
    role: 'Customer' | 'VIP Gold' | 'Travel Agent' | 'Partner Hotel' | 'Admin Support' | 'Super Admin' | 'System Bot';
    email: string;
    phone: string;
    flag: string;
  };
  recipient: {
    name: string;
    role: 'Support Desk' | 'Customer' | 'Finance Desk' | 'Operation Team' | 'Hotel Concierge' | 'All Registered Users';
    avatar?: string;
  };
  content: string;
  messageType: MessageType;
  attachment?: AdminMessageAttachment;
  channel: 'WhatsApp' | 'Live Portal' | 'In-App' | 'Email' | 'VIP Hotline' | 'SMS Gateway' | 'System Bot';
  category: MessageCategory;
  timestamp: string;
  direction: 'Incoming' | 'Outgoing' | 'Broadcast' | 'System';
  status: MessageDeliveryStatus;
  isStarred: boolean;
  charCount: number;
}

export interface AdminMessageKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
  bgColorClass: string;
  textColorClass: string;
}

export interface AdminMessageChannelTab {
  id: MessageChannelFilter;
  label: string;
  count: number;
  iconName: string;
}

export interface AdminMessageTrafficShare {
  channel: string;
  count: number;
  percentage: number;
  color: string;
  iconName: string;
}

export interface AdminMessageHourlyVolume {
  hour: string;
  sent: number;
  received: number;
}

export interface AdminMessageAuditLog {
  id: string;
  action: string;
  messageId: string;
  operator: string;
  timestamp: string;
  details: string;
}

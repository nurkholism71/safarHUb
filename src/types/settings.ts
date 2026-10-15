export interface NotificationSettingItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export interface SecuritySettingItem {
  id: string;
  title: string;
  badge?: string;
  icon: string;
}

export interface LanguageRegionItem {
  id: string;
  title: string;
  value: string;
  icon: string;
}

export interface TravelPreferenceItem {
  id: string;
  label: string;
  value: string;
  icon: string;
}

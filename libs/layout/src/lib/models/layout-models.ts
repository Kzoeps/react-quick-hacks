export interface NavigationItem {
  title: string;
  icon: React.ReactElement;
  value: string;
}

export type NavigationConfiguration = NavigationItem[];

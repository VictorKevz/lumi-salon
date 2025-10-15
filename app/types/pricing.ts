// Pricing section types
export type PricingTabId =
  | "haircut"
  | "coloring"
  | "styling"
  | "treatment"
  | "extensions"
  | "grooming";

export interface PricingTab {
  id: PricingTabId;
  label: string;
  icon: string;
}

export interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export type PricingTabContent = {
  tab: PricingTab;
  items: PricingItem[];
};

export type PricingTabs = PricingTab[];
export type PricingData = Record<PricingTabId, PricingItem[]>;

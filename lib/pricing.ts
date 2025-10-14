import { Messages } from "./header";
import {
  PricingTabId,
  PricingItem,
  PricingTabs,
  PricingData,
} from "@/app/types/pricing";

const pricingOptions: PricingTabId[] = [
  "haircut",
  "coloring",
  "styling",
  "treatment",
  "extensions",
  "grooming",
];
export function getPricingTabs(messages: Messages): PricingTabs {
  return pricingOptions.map((id) => ({
    id: id,
    label: messages[`pricing.tabs.${id}`],
    icon: `/icons/${id}.png`,
  })) as PricingTabs;
}

export function getPricingData(messages: Messages): PricingData {
  const data: Partial<PricingData> = {};
  pricingOptions.forEach((tabId) => {
    const items: PricingItem[] = Array.from({ length: 6 }, (_, i) => {
      const idx = i + 1;
      return {
        id: `${tabId}-${idx}`,
        title: messages[`pricing.${tabId}.${idx}.title`],
        description: messages[`pricing.${tabId}.${idx}.desc`],
        price: messages[`pricing.${tabId}.${idx}.price`],
        image: `/images/services/${tabId}.png`,
      };
    });
    data[tabId as PricingTabId] = items;
  });
  return data as PricingData;
}

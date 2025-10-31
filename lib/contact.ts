import { Messages } from "@/lib/header";
import {
  ContactCard,
  ContactDetail,
  ServiceCategory,
} from "@/app/types/contact";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import { getPricingData, getPricingTabs } from "@/lib/pricing";

/**
 * Get contact information cards data
 */
export function getContactCards(messages: Messages): ContactCard[] {
  return [
    {
      id: "info",
      icon: Phone,
      title: messages["contact.card.info.title"],
      details: [
        {
          id: "phone",
          label: "",
          value: messages["phone"],
          href: `tel:${messages["phone"]}`,
          type: "phone",
        },
        {
          id: "email",
          label: "",
          value: messages["email"],
          href: `mailto:${messages["email"]}`,
          type: "email",
        },
      ],
    },
    {
      id: "address",
      icon: LocationOn,
      title: messages["contact.card.address.title"],
      details: [
        {
          id: "location",
          value: messages["location"],
          type: "text",
        },
        {
          id: "full-address",
          value: messages["footer.address"],
          type: "text",
        },
      ],
    },
    {
      id: "hours",
      icon: AccessTime,
      title: messages["contact.card.hours.title"],
      details: [
        {
          id: "working-hours",
          value: messages["hours"],
          type: "text",
        },
      ],
    },
  ];
}

/**
 * Get service categories for the service selector
 */
export function getServiceCategories(messages: Messages): ServiceCategory[] {
  const tabs = getPricingTabs(messages);
  const pricingData = getPricingData(messages);

  return tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    icon: tab.icon,
    services: pricingData[tab.id].map((item) => ({
      id: `${tab.id}-${item.id}`,
      title: item.title,
      description: item.description,
      price: item.price,
    })),
  }));
}

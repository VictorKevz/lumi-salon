import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhone,
  Email,
  WhatsApp,
  AccessAlarm,
} from "@mui/icons-material";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};
/* eslint-enable @typescript-eslint/no-empty-object-type */

export type Messages = Record<string, string>;
export type SectionProps = {
  isClient: boolean;
  messages: Messages;
};
export type Contact = {
  type: string;
  label: string;
  href?: string;
  icon?: string;
};

export type NavLink = { id: string; href: string; label?: string };

export type Social = { id: string; label: string; href: string; icon?: string };

export function formatPhone(raw?: string) {
  return raw || "+358 40 123 4567";
}

export function getContacts(messages: Messages): Contact[] {
  const phone = formatPhone(messages["phone"]);
  const email = messages["email"] || "info@lumisalo.fi";

  return [
    {
      type: "phone",
      label: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      icon: "LocalPhone",
    },
    { type: "email", label: email, href: `mailto:${email}`, icon: "Email" },
    {
      type: "hours",
      label: messages["hours"] || "",
      href: undefined,
      icon: "AccessAlarm",
    },
  ];
}

export function getNavLinks(messages: Messages): NavLink[] {
  return [
    { id: "home", href: "#home", label: messages["nav.menu.home"] },
    { id: "services", href: "#services", label: messages["nav.menu.services"] },
    { id: "gallery", href: "#gallery", label: messages["nav.menu.gallery"] },
    {
      id: "testimonials",
      href: "#testimonials",
      label: messages["nav.menu.testimonials"],
    },
    { id: "contact", href: "#contact", label: messages["nav.menu.contact"] },
  ];
}

export const socials: Social[] = [
  { id: "fb", label: "Facebook", href: "#", icon: "Facebook" },
  { id: "ig", label: "Instagram", href: "#", icon: "Instagram" },
  { id: "in", label: "LinkedIn", href: "#", icon: "LinkedIn" },
];

export const iconMap: Record<string, MuiIcon> = {
  fb: Facebook,
  ig: Instagram,
  in: LinkedIn,
  phone: LocalPhone,
  email: Email,
  whatsapp: WhatsApp,
  hours: AccessAlarm,
};

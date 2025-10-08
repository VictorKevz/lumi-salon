export type Messages = Record<string, string>;

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
  const whatsappNumber = phone.replace(/[^+\d]/g, "");

  return [
    {
      type: "phone",
      label: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      icon: "LocalPhone",
    },
    { type: "email", label: email, href: `mailto:${email}`, icon: "Email" },
    // {
    //   type: "whatsapp",
    //   label: `WhatsApp: ${phone}`,
    //   href: `https://wa.me/${whatsappNumber.replace(/^\+/, "")}`,
    //   icon: "WhatsApp",
    // },
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

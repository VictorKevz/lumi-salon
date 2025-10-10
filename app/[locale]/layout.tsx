import React from "react";
import type { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const description =
    locale === "fi"
      ? "Ammattilaistasoista hiustenleikkausta ja kauneudenhoitoa Oulussa. Leikkaukset, värjäykset ja kauneuspalvelut."
      : "Professional hair styling and beauty services in Oulu, Finland. Expert cuts, coloring, and beauty treatments.";

  const alternates = {
    languages: {
      en: "/en",
      fi: "/fi",
    },
  };

  return {
    description,
    alternates,
    openGraph: {
      title:
        locale === "fi"
          ? "Lumi Salo - Kampaamo Oulussa"
          : "Lumi Salo - Hair Salon in Oulu",
      description,
      locale,
      alternateLocale: locale === "fi" ? "en" : "fi",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <div lang={locale} className="min-h-screen">
      {children}
    </div>
  );
}

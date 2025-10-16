import "./globals.css";
import type { Metadata } from "next";
import { titillium, josefin } from "./fonts";

export const metadata: Metadata = {
  title: "Lumi Salon - Professional Hair Salon in Oulu",
  description:
    "Professional hair styling and beauty services in Oulu, Finland. Ammattimaiset hiustenmuotoilu- ja kauneuspalvelut Oulussa.",
  keywords: [
    "hair salon",
    "beauty salon",
    "Oulu",
    "hairdresser",
    "hair styling",
    "beauty services",
    "kampaamo",
    "kauneussalonki",
    "hiustenmuotoilu",
    "kauneuspalvelut",
  ],
  authors: [{ name: "Lumi Salon" }],
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fi"
      suppressHydrationWarning
      className={`${titillium.variable} ${josefin.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="preload"
          href="/images/hero-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/hero-desktop.webp"
          as="image"
          type="image/webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased preload">{children}</body>
    </html>
  );
}

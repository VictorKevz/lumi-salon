import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="fi" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Titillium+Web:wght@400;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className="antialiased preload">{children}</body>
    </html>
  );
}

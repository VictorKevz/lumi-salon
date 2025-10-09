import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumisalon.fi"),
  title: {
    template: "%s | Lumi Salon",
    default: "Lumi Salon - Professional Hair Salon in Oulu",
  },
  description:
    "Professional hair styling and beauty services in Oulu, Finland. Expert cuts, coloring, and beauty treatments.",
  keywords: [
    "hair salon",
    "beauty salon",
    "Oulu",
    "hairdresser",
    "hair styling",
    "beauty services",
  ],
  authors: [{ name: "Lumi Salo" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased preload">{children}</body>
    </html>
  );
}

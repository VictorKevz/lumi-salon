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
        {/* <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
        </style> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
        </style>
      </head>
      <body className="antialiased preload">{children}</body>
    </html>
  );
}

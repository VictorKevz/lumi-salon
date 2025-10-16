import Head from "next/head";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="alternate" href="https://lumisalon.fi/fi" hrefLang="fi" />
        <link rel="alternate" href="https://lumisalon.fi/en" hrefLang="en" />
        <link
          rel="alternate"
          href="https://lumisalon.fi/fi"
          hrefLang="x-default"
        />
      </Head>
      {children}
    </>
  );
}

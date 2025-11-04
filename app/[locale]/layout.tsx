import Head from "next/head";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          href="https://lumi-salon.vercel.app/fi"
          hrefLang="fi"
        />
        <link
          rel="alternate"
          href="https://lumi-salon.vercel.app/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://lumi-salon.vercel.app/fi"
          hrefLang="x-default"
        />
      </Head>
      {children}
    </>
  );
}

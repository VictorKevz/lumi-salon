import { Metadata } from "next";
import en from "../../messages/en.json";
import fi from "../../messages/fi.json";
import dynamic from "next/dynamic";

type Messages = Record<string, string>;
type Params = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === "fi" ? fi : en;

  return {
    title: `${t["hero.title"]} | Lumi Salon`,
    description: t["hero.subtitle"],
    openGraph: {
      title: `${t["hero.title"]} | Lumi Salon`,
      description: t["hero.subtitle"],
      url: `https://lumisalo.fi/${locale}`,
      siteName: "Lumi Salon",
      locale: locale,
      type: "website",
    },
  };
}
const HomeClient = dynamic(() => import("./HomeClient"), { ssr: true });

export default async function Home({ params }: Params) {
  const { locale } = await params;
  const messages: Messages =
    locale === "fi" ? (fi as Messages) : (en as Messages);

  return (
    <>
      <HomeClient messages={messages} />
    </>
  );
}

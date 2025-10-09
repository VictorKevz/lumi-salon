import { Metadata } from "next";
import en from "../../messages/en.json";
import fi from "../../messages/fi.json";
import dynamic from "next/dynamic";

type Messages = Record<string, string>;
type Params = {
  params: {
    locale: string;
  };
};
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = params.locale === "fi" ? fi : en;

  return {
    title: `${t["hero.title"]} | Lumi Salo`,
    description: t["hero.subtitle"],
    openGraph: {
      title: `${t["hero.title"]} | Lumi Salo`,
      description: t["hero.subtitle"],
      url: `https://lumisalo.fi/${params.locale}`,
      siteName: "Lumi Salo",
      locale: params.locale,
      type: "website",
    },
  };
}
const HomeClient = dynamic(() => import("./HomeClient"), { ssr: true });

export default function Home({ params }: Params) {
  const messages: Messages =
    params.locale === "fi" ? (fi as Messages) : (en as Messages);

  return (
    <main className="min-h-screen w-full">
      <HomeClient messages={messages} />
    </main>
  );
}

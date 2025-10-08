import en from "../../messages/en.json";
import fi from "../../messages/fi.json";
import dynamic from "next/dynamic";

type Messages = Record<string, string>;
type Params = {
  params: {
    locale: string;
  };
};

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

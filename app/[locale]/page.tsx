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
    <main className="flex items-center justify-center min-h-screen w-full">
      {/* Single component that handles both SSR and client-side animations */}
      <HomeClient messages={messages} />
    </main>
  );
}

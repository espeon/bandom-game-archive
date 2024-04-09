import { usePathname } from "next/navigation";

export default function Home({params}: {params: {slug: string}}) {
  // build swf
  const swf = "/" + params.slug + ".swf";
  return (
    <main className="flex h-full min-h-screen min-w-screen flex-col items-start justify-start">
      <embed
        src={swf}
        className="min-w-screen min-h-screen w-full bg-white"
        width="100vw"
      />
    </main>
  );
}

export async function generateStaticParams() {
  // list of swfs
  return ["fob-trail", "helena", "mystery-decaydance", "sweet-revenge", "witw-cobra-starship"].map((name) => ({ slug: name }));
}
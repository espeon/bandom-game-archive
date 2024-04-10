import { usePathname } from "next/navigation";

export default async function Home({ params }: { params: { slug: string } }) {
  // build swf
  const swf = "/" + params.slug + ".swf";

  const notesPath = `./public/notes/${params.slug}.md`;
  let notesContent = "";
  try {
    const notesFile = require(`fs`).promises.readFile(notesPath, "utf8");
    notesContent = await notesFile;
  } catch (err) {
    // ignore
  }

  return (
    <main className="flex h-full min-h-screen min-w-screen flex-col items-start justify-start">
      <embed
        src={swf}
        className="min-w-screen min-h-screen w-full bg-white"
        width="100vw"
      />
      <div className="text-xl py-16">
        {notesContent.split("\n").map((line, i) => (
          i == 0?
          <h1 className="text-3xl" key={i}>{line}</h1>:(
            line.startsWith("http")?
            <a href={line} className="text-slate-400 hover:text-sky-400 transition-colors duration-300" key={i}>{line}</a>:
          <p className="pt-2" key={i}>{line}</p>)
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // list of swfs
  return [
    "fob-trail",
    "helena",
    "mystery-decaydance",
    "sweet-revenge",
    "witw-cobra-starship",
  ].map((name) => ({ slug: name }));
}

const gamesList = [
  { id: "fob-trail", label: "Fall Out Boy Trail", description: "Fall Out Boy Trail is a Flash game inspired by the classic educational computer game Oregon Trail. In this customized version, you embark on a long and arduous tour with band members Pete Wentz, Patrick Stump, Andy Hurley, and Joe Trohman, along with other friends of the band, while navigating challenges like rationing food and playing Guitar Hero-style minigames." },
  { id: "helena", label: "Helena", description: "Helena is a flash game inspired by the My Chemical Romance (MCR) song of the same name. In the game, you take on the role of Helena, attempting to return to life while the 8-bit version of the song plays in the background." },
  { id: "sweet-revenge", label: "Sweet Revenge", description: "Sweet Revenge is a NES style action scroller created by MCR to promote \"Three Cheers for Sweet Revenge\". In this pixelated adventure, you take on the role of the band members as they seek said sweet revenge. " },
  { id: "mystery-decaydance", label: "Mystery at Decaydance High", description:"Mystery at Decaydance High was a web browser RPG game set in high school, featuring characters from Decaydance Records/DCD2 Records bands. Players navigated the school, answered band-related questions, and engaged in fights." },
  {
    id: "witw-cobra-starship",
    label: "Where in the World is Cobra Starship",
    description: "Where In The World Is Cobra Starship was a flash game created by the American dance-rock band Cobra Starship to promote their tour. The game allows players to embark on a virtual adventure, exploring different locations while encountering band-related content."
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: gamesList.find((game) => game.id === params.slug)?.label,
    description: gamesList.find((game) => game.id === params.slug)?.description,
  };
}
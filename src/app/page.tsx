import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-start justify-start mt-12">
      <div className="text-xl">
        These are all the flash games (at least all of them that I can find) made
        by{" "}
        <Link href="https://jasonoda.com/" className="text-slate-400">
          Jason Oda
        </Link>{" "}
        and others for Decaydance (/ DCD2).
      </div>
      <div className="text-xl mt-2">Flash has been discontinued, so I&apos;m using <Link href="https://ruffle.rs/" className="text-slate-400">Ruffle</Link> to run these.</div>
      <div className="text-md mt-4 flex-1">(note: if you&apos;re missing the header, the button to get it back is at the very bottom of the page)</div>

      <div className="mt-4 text-xl">
        anyways, have fun!
      </div>
    </main>
  );
}

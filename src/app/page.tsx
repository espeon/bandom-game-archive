import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-start justify-start mt-12">
      <div className="text-xl">
        Here are all the flash games (at least all of them that I can find) made
        by{" "}
        <Link href="https://jasonoda.com/" className="text-slate-400">
          Jason Oda
        </Link>{" "}
        for Decaydance (/ DCD2).
      </div>
      <div className="text-xl mt-2">have fun!</div>
    </main>
  );
}

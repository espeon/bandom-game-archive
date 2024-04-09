"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  // build swf
  const swf = "/" + usePathname().split("/")[2] + ".swf";
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

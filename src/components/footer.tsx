"use client";
import Link from "next/link";
import { useAtom } from "jotai";
import { headerHiddenAtom } from "../tools/atoms";

export default function Footer() {
  const [hidden, setHidden] = useAtom(headerHiddenAtom);
  return (
    <div className="m-4 w-full xl:max-w-screen-2xl max-w-screen z-0 flex items-center space-between">
      made with ❤️ (and lots of emo music) by{" "}
      <Link
        href="https://natalie.sh"
        className="dark:bg-slate-900 bg-slate-200 dark:hover:bg-slate-700 hover:bg-slate-400 transition-colors duration-300 rounded-md p-1 ml-1 mr-2 -z-10"
      >
        natalie b.
      </Link>
      games © decaydance/dcd2.
      {hidden ? (
        <div className="ml-12" onClick={(_) => setHidden(!hidden)}>
          (show the header?)
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

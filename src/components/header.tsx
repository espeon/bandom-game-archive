"use client";
import Link from "next/link";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { redirect, usePathname } from "next/navigation";
import { headerHiddenAtom } from "../tools/atoms";
import { useAtom } from "jotai";

export default function Header() {
  // get current page
  const basePath = usePathname();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(basePath);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  const [hidden, setHidden] = useAtom(headerHiddenAtom);
  const navItems = [
    { id: "/", label: "About" },
    { id: "/exp/fob-trail", label: "Fall Out Boy Trail" },
    { id: "/exp/helena", label: "Helena" },
    { id: "/exp/mystery-decaydance", label: "Mystery at Decaydance High" },
    { id: "/exp/sweet-revenge", label: "Sweet Revenge" },
    {
      id: "/exp/witw-cobra-starship",
      label: "Where in the World is Cobra Starship",
    },
  ];
  const handleNavItemClick = (navId: string) => {
    setActiveNavItem(navId);
    setHoveredNavItem(null);
  };
  const handleNavItemHover = (navId: string) => {
    setHoveredNavItem(navId);
  };
  const handleNavItemMouseLeave = () => {
    setHoveredNavItem(null);
  };
  return (
    <div
      className={`w-screen border-b-2 bg-slate-50 dark:bg-black dark:border-gray-800 pb-2 min-w-screen header-container ${hidden ? "hidden" : ""}`}
    >
      <div className="sticky top-0 container mx-auto flex justify-between items-center dark:text-white text-black dark:border-gray-800 xl:max-w-screen-2xl min-w-screen">
        <div className="mt-12 text-5xl mb-2 ml-4">
          decaydance flash game archive
        </div>
        <div onClick={(_) => setHidden(!hidden)}>(hide this header) </div>
      </div>
      <nav className="top-0 container mx-auto flex justify-between items-center dark:text-white text-black dark:border-gray-800 xl:max-w-screen-2xl min-w-screen overflow-auto header-hide-scrollbar">
        <ul className="flex flex-1">
          {navItems.map((nav) => (
            <Link
              key={nav.id}
              href={`${nav.id}`}
              className={`relative z-20  ${
                activeNavItem === nav.id
                  ? "dark:text-gray-200 text-gray-900"
                  : "text-gray-500"
              }`}
            >
              <li
                onClick={() => handleNavItemClick(nav.id)}
                onMouseMove={() => handleNavItemHover(nav.id)}
                onMouseLeave={handleNavItemMouseLeave}
                className="relative px-4 py-2 transition-colors text-nowrap"
              >
                {nav.label}
                {hoveredNavItem === nav.id && (
                  <motion.span
                    layoutId="hover"
                    transition={{ type: "spring", duration: 0.3 }}
                    className="absolute inset-0 -z-10 bg-slate-300/30 dark:bg-slate-800/50 rounded-lg"
                  ></motion.span>
                )}
                {activeNavItem === nav.id && (
                  <motion.span
                    layoutId="active"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="z-50 inset-0 absolute border-b-2 -mb-2.5 border-black dark:border-gray-200"
                  ></motion.span>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

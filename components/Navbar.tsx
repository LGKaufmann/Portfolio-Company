"use client";

import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";

import Link from "next/link";

import React from "react";

import MotionTransition from "./TransitionComponent";

export const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/10 background-blur-sm">
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className={`px-3 py-2 transition duration-150 rounded-full cursor-ponter hover:bg-secondary ${
              router === item.link && "bg-secondary"
            }`}
            data-tooltip-target="tooltip-default"
          >
            <Link href={item.link}>{item.icon}</Link>
          </div>
        ))}
      </nav>
    </MotionTransition>
  );
};

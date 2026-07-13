"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
  import { useRouter } from "next/navigation";

const FaBars = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaBars),
  { ssr: false }
);

export default function Header() {
  const [mounted, setMounted] = useState(false);

 

const router = useRouter();

  useEffect(() => setMounted(true), []);
 
  if (!mounted) return null;

  return (
    <nav className="bg-white border-b border-neutral-200/80 sticky top-0 z-50 shadow-sm backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo Anchor Slot */}
          <div 
            onClick={() => router.push("/")}
            className="flex flex-col cursor-pointer select-none"
          >
            <span className="text-xl font-black tracking-tighter text-neutral-950 uppercase leading-none">
              K'S CHICKEN
            </span>
            <span className="text-[8px] font-bold tracking-[0.35em] text-red-600 uppercase mt-1">
              Fried · Grilled · Delicious
            </span>
          </div>

          {/* Desktop Link Pill Modules */}
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-wider text-neutral-600">
 <button
    onClick={() => router.push("/menu")}
  className="hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
>
  Digital Menu
</button>
            <button 
              // onClick={() => scrollToSection("combo-deals")} 
              className="hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
            >
              Sharing Deals
            </button>
            <button 
              // onClick={() => scrollToSection("location")} 
              className="hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
            >
              Store Info
            </button>
          </div>

          {/* Hotline CTA Module Link */}
          <div className="hidden md:flex">
            <a 
              href="tel:01708780264" 
              className="bg-red-600 text-white text-xs font-black uppercase tracking-widest px-5 py-3.5 rounded-xl hover:bg-neutral-950 transition-all duration-300 shadow-sm focus:outline-none"
            >
              📞 01708 780264
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
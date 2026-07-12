'use client'
// app/page.tsx

import { Suspense } from "react";
//import AOSInit from "@/components/AOSInit";

import HeroSectionCustom from "@/custom/cus-components/HeroSectionCustom";
import CategorySliderLight from "@/components/level-1/CategorySliderLight";
import Products from "@/components/level-1/Products";
import BestOfMonth from "@/custom/cus-components/BestOfMonth";
import ContactInfoWrapper from "@/components/ContactInfoWrapper";
import ProductsWrapper from "@/components/ProductsWrapper";
import Navibar from "../components/Navibar";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Deals from "../components/Deals";




export default function Page() {
  return (
   <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased scroll-smooth">
      
      {/* 1. Organized Header Navigation Section */}
      <Navibar />

      {/* 2. Organized Hero Component */}
      <Main />

      {/* 3. Organized Digital Menu Matrix with All 15 Items */}
      <Menu />
      <Deals />

      {/* 6. Corporate Location Footer Bar */}
      <footer id="location" className="bg-neutral-950 text-neutral-500 text-xs py-12 px-4 border-t border-neutral-900 text-center uppercase tracking-wider font-semibold">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1">
            <p className="text-white text-sm font-black">© {new Date().getFullYear()} K'S CHICKEN LTD.</p>
            <p className="text-[10px] text-neutral-600 font-medium">135, WENNINGTON ROAD, RAINHAM, RM13 9TR</p>
          </div>
        </div>
      </footer>

    </div>

    // <main className="text-gray-900 font-sans">

    //   {/* ✅ Client-only animation init */}
    //   {/* <AOSInit /> */}

    //   {/* Sections */}
    //   <HeroSectionCustom />
    //   <BestOfMonth />
    //   <CategorySliderLight />
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <ProductsWrapper />
    //   </Suspense>

    //   {/* ✅ Server async component with streaming */}
    //   <Suspense fallback={<div className="h-40" />}>
    //     <ContactInfoWrapper />
    //   </Suspense>

    // </main>
  );
}
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionLuxuryMinimal() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <Image
        src="/hero-1.jpg"
        alt="Restaurant dining background"
        fill
        priority
        className="object-cover"
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-black/65" />

      {/* =====================================================
          AMBIENT GLOW
      ====================================================== */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* =================================================
              MAIN BIG VISUAL CARD
          ================================================= */}
          <div className="lg:col-span-7 bg-neutral-950/95 text-white p-8 sm:p-10 md:p-14 rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group">

            {/* Ambient Vector Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* =================================================
                MAIN CONTENT
            ================================================= */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}
              <div className="space-y-6">

                {/* Halal Badge */}
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Halal
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase">
                  Savour The
                  <span className="text-red-600"> Flavour</span>,
                  <br />
                  Any Time You Crave.
                </h1>

                {/* Description */}
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
                  Freshly prepared fried chicken crunch, flame-grilled Peri-Peri,
                  gourmet burgers and freshly made meals every day.
                </p>

              </div>

              {/* =================================================
                  RIGHT FOOD IMAGE
              ================================================= */}
              <div className="relative flex justify-center items-center">

                {/* Image glow */}
                <div className="absolute w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

                <Image
                  src="/chicken.jpg"
                  alt="Delicious Chicken"
                  width={420}
                  height={420}
                  priority
                  className="relative z-10 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}
            <div className="pt-10 lg:pt-12 relative z-10 flex flex-col sm:flex-row gap-4">

              {/* Order From Menu Matrix */}
              <button
                onClick={() =>
                  document
                    .getElementById("menu-matrix")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-red-600 hover:bg-white hover:text-neutral-950 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer"
              >
                Order From Menu Matrix
              </button>

              {/* Online Order Setup */}
              <Link
                href="/menu"
                className="bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                🛒 Online Order Setup
              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE STACK
          ================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* =================================================
                OPERATIONAL HOURS
            ================================================= */}
            <div className="bg-red-600 text-white p-8 rounded-[2.5rem] shadow-lg flex flex-col justify-between flex-1 min-h-[220px]">

              {/* Header */}
              <div className="flex justify-between items-start">

                <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  Operational Hours
                </span>

                <span className="text-xl">
                  🕒
                </span>

              </div>

              {/* Hours */}
              <div className="space-y-1 mt-8">

                <p className="text-2xl font-black tracking-tight uppercase font-serif italic text-neutral-950">
                  Mon - Sat: 12pm - 11pm
                </p>

                <p className="text-sm font-medium tracking-wide text-red-100">
                  Sunday: 1pm - 10pm
                </p>

              </div>

            </div>

            {/* =================================================
                STORE FINDER
            ================================================= */}
            <div className="bg-white border border-neutral-200 p-8 rounded-[2.5rem] shadow-md flex flex-col justify-between flex-1 min-h-[220px]">

              {/* Header */}
              <div className="flex justify-between items-start">

                <span className="text-[10px] font-black uppercase tracking-widest bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">
                  Store Finder
                </span>

                <span className="text-xl text-red-600">
                  📍
                </span>

              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-neutral-600 italic">
                Follow the aroma of freshly prepared chicken to your
                neighbourhood favourite.
              </p>

              {/* Directions */}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-red-600 hover:text-neutral-950 transition-colors"
              >
                Get Directions &amp; Visit Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Address */}
              <div className="space-y-1 mt-6">

                <h3 className="text-xl font-black text-neutral-950 tracking-tight uppercase">
                  135, Wennington Road
                </h3>

                <p className="text-xs text-neutral-500 font-semibold tracking-wide uppercase">
                  Rainham, London · RM13 9TR
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
 

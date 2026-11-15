
"use client";

import { ArrowUpRight, Clock3, MapPin, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionLuxuryMinimal() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-neutral-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero-1.jpg"
          alt="Restaurant dining background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-neutral-950/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
      <div className="absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-red-600/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pt-24">
        
        {/* Main Hero */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Halal Badge */}
            {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              
            </div> */}

            {/* Heading */}
            <h1 className="text-5xl font-black uppercase leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[82px]">
              Savour The
              <span className="block text-red-500">Flavour,</span>
              <span className="mt-2 block text-3xl leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
                Any Time You Crave.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-300 sm:text-base">
              Freshly prepared fried chicken crunch, flame-grilled Peri-Peri,
              gourmet burgers and freshly made meals every day.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex gap-3 flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("order_now")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
              >
                Order Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <ShoppingBag className="h-4 w-4" />
                Menu
              </Link>
            </div>
          </div>

          {/* Right Food Visual */}
          <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[440px] lg:min-h-[540px]">
            {/* Decorative Glow */}
            <div className="absolute h-[260px] w-[260px] rounded-full bg-red-600/20 blur-[90px] sm:h-[400px] sm:w-[400px]" />

            {/* Decorative Circle */}
            <div className="absolute h-[270px] w-[270px] rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-white/5 sm:h-[350px] sm:w-[350px]" />

            <Image
              src="/chicken.jpg"
              alt="Delicious Chicken"
              width={650}
              height={650}
              priority
              className="relative z-10 w-full max-w-[440px] object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-105 sm:max-w-[540px]"
            />
          </div>
        </div>

        {/* Bottom Information Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12">
          
          {/* Operational Hours */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-red-600 p-6 shadow-2xl shadow-red-950/20 sm:p-8">
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
                  <Clock3 className="h-3.5 w-3.5" />
                  Operational Hours
                </span>
                <Clock3 className="h-6 w-6 text-white/70" />
              </div>

              <div>
                <p className="text-2xl font-black uppercase tracking-tight text-neutral-950 sm:text-3xl">
                  Mon - Sat: 12pm - 11pm
                </p>
                <p className="mt-2 text-sm font-medium text-red-100">
                  Sunday: 1pm - 10pm
                </p>
              </div>
            </div>
          </div>

          {/* Store Finder */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white p-6 text-neutral-950 shadow-2xl transition-all duration-300 hover:border-red-200 sm:p-8">
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-red-100 blur-3xl transition-transform duration-500 group-hover:scale-125" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600">
                  <MapPin className="h-3.5 w-3.5 text-red-600" />
                  Store Finder
                </span>
                <MapPin className="h-6 w-6 text-red-600" />
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-neutral-600">
                Follow the aroma of freshly prepared chicken to your
                neighbourhood favourite.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600 transition-colors hover:text-neutral-950"
              >
                Get Directions &amp; Visit Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <div className="mt-6 border-t border-neutral-200 pt-5">
                <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                  135, Wennington Road
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
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

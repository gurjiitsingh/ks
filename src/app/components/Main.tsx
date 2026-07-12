'use client'

import Image from "next/image";

// src/app/components/Main.tsx
export default function Main() {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Asymmetric Dribbble-style Grid Block Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Big Visual Card Block (Takes up 7 out of 12 columns) */}
        <div className="lg:col-span-7 bg-neutral-950 text-white p-10 md:p-14 rounded-[3rem] shadow-xl flex flex-col justify-between relative overflow-hidden group">
          {/* Pure CSS Ambient Vector Mesh Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

  {/* Left */}
  <div className="space-y-6">
    <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      Halal Certified · Rainham
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase">
      Savour The
      <span className="text-red-600"> Flavour</span>,
      <br />
      Any Time You Crave.
    </h1>

    <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
      Freshly prepared fried chicken crunch, flame-grilled Peri-Peri,
      gourmet burgers and freshly made meals every day.
    </p>
  </div>

  {/* Right */}
  <div className="relative flex justify-center">
    <Image
      src="/chicken.jpg"
      alt="Delicious Chicken"
      width={420}
      height={420}
      priority
      className="object-contain drop-shadow-2xl"
    />
  </div>

</div>

          <div className="pt-12 relative z-10 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById("menu-matrix")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-red-600 hover:bg-white hover:text-neutral-950 text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer"
            >
              Order From Menu Matrix
            </button>
            <a 
              href="/menu" 
              
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              🛒 Online Order Setup
            </a>
          </div>
        </div>

        {/* Side Stack Split Cards Layout (Takes up 5 out of 12 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Top Split Card: Info/Opening Hours block */}
          <div className="bg-red-600 text-white p-8 rounded-[2.5rem] shadow-lg flex flex-col justify-between flex-1 min-h-[220px]">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">Operational Hours</span>
              <span className="text-xl">🕒</span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black tracking-tight uppercase font-serif italic text-neutral-950">Mon - Sat: 12pm - 11pm</p>
              <p className="text-sm font-medium tracking-wide text-red-100">Sunday: 1pm - 10pm</p>
            </div>
          </div>

          {/* Bottom Split Card: High-Contrast Location block */}
          <div className="bg-white border border-neutral-200 p-8 rounded-[2.5rem] shadow-md flex flex-col justify-between flex-1 min-h-[220px]">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">Store Finder</span>
              <span className="text-xl text-red-600">📍</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-neutral-950 tracking-tight uppercase">135, Wennington Road</h3>
              <p className="text-xs text-neutral-500 font-semibold tracking-wide uppercase">Rainham, London · RM13 9TR</p>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}

  
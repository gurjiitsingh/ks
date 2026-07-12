"use client";
// src/app/components/Navibar.tsx

export default function Navibar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="bg-white border-b border-neutral-200/80 sticky top-0 z-50 shadow-sm backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo Anchor Slot */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
              onClick={() => scrollToSection("menu-matrix")} 
              className="hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
            >
              Digital Menu
            </button>
            <button 
              onClick={() => scrollToSection("combo-deals")} 
              className="hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
            >
              Sharing Deals
            </button>
            <button 
              onClick={() => scrollToSection("location")} 
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
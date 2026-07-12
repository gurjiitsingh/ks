// src/app/components/Deals.tsx
export default function Deals() {
  return (
    <section id="deals" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Minimal Pure-Code Section Header */}
      <div className="space-y-1 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">Greatest Value</span>
        <h2 className="text-4xl font-black text-neutral-950 tracking-tight uppercase">Family Combo Sharing Boxes</h2>
      </div>

      {/* Asymmetric Pure-Code Card Layout System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Deal Card 1: Flat Dark Contrast Panel (No Graphics Needed) */}
        <div className="bg-neutral-950 text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-neutral-900 group flex flex-col justify-between min-h-[320px]">
          {/* Pure CSS Ambient Vector Mesh Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-red-500 tracking-wider block">Most Popular</span>
                <h3 className="text-2xl font-black tracking-tight text-white uppercase group-hover:text-red-500 transition-colors">Family Variety Pack</h3>
              </div>
              <div className="text-3xl font-black text-red-500 tracking-tight">£29.99</div>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              6x crisp fried chicken pieces, 6x spicy wings, 3x custom chicken fillet burgers, 3x large golden fries box setups, and a clean 1.5L drink bottle.
            </p>
          </div>

          <div className="pt-6 relative z-10">
            <div className="h-[1px] w-full bg-neutral-900 mb-6" />
            <a href="tel:01708780264" className="inline-block bg-white text-neutral-950 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition-all text-center focus:outline-none">
              Call to Claim Deal
            </a>
          </div>
        </div>

        {/* Deal Card 2: Flat White Contrast Panel (No Graphics Needed) */}
        <div className="bg-white text-neutral-900 p-8 md:p-10 rounded-[2.5rem] shadow-md border border-neutral-200 group flex flex-col justify-between min-h-[320px]">
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider block">Perfect Dual Combo</span>
                <h3 className="text-2xl font-black tracking-tight text-neutral-950 uppercase group-hover:text-red-600 transition-colors">Double Couple Meal</h3>
              </div>
              <div className="text-3xl font-black text-neutral-950 tracking-tight">£19.99</div>
            </div>
            <p className="text-xs text-neutral-500 font-normal leading-relaxed max-w-sm">
              2x juicy chicken fillet burgers, 2x classic pieces fried chicken, 4x sizzling wings, a basket of large golden fries, and 2x carbonated cold drink cans.
            </p>
          </div>

          <div className="pt-6">
            <div className="h-[1px] w-full bg-neutral-100 mb-6" />
            <a href="tel:01708780264" className="inline-block bg-red-600 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-neutral-950 transition-all text-center focus:outline-none">
              Call to Claim Deal
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

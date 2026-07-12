"use client";
import { useState } from "react";

const MENU_DATA = [
  // --- SPECIALS CATEGORY ---
  { id: 1, category: "Specials", title: "K's Special Smash Burger", description: "2x 3oz fresh ground beef beef patties, 2x premium cheese slices, caramelized onions, and K's secret sauce in a seeded bun.", priceOnItsOwn: "£6.99", priceMeal: "£8.50", tag: "Best Seller" },
  { id: 2, category: "Specials", title: "Full BBQ Ribs Combo Rack", description: "8 pieces of flame-grilled tender BBQ short ribs heavily glazed in rich smoky hickory marinade sauce.", priceOnItsOwn: "£12.99", priceMeal: "£14.49", tag: "Chef Special" },
  
  // --- BURGERS CATEGORY ---
  { id: 3, category: "Burgers", title: "Tower Chicken Crunch Burger", description: "Crispy fried chicken breast fillet, golden crunch hash brown, melted cheddar cheese, fresh lettuce, and cool mayo.", priceOnItsOwn: "£6.00", priceMeal: "£7.50", tag: "Giant Stack" },
  { id: 4, category: "Burgers", title: "The 1/2 Pounder Stack", description: "Two 4oz grilled prime beef patties layered with melted cheddar cheese, crisp raw onions, pickles, and classic burger relish.", priceOnItsOwn: "£5.99", priceMeal: "£7.49", tag: "Heavyweight" },
  { id: 5, category: "Burgers", title: "Quarter Pounder Cheese", description: "Classic grilled beef patty, melted cheese, fresh tomato slices, pickles, and burger sauce in a toasted bun.", priceOnItsOwn: "£4.50", priceMeal: "£5.99", tag: "Classic" },
  { id: 6, category: "Burgers", title: "Premium Fish Fillet Burger", description: "Crispy breaded fish cod fillet patty topped with melted cheese slice and rich creamy tartar dressing sauce.", priceOnItsOwn: "£4.25", priceMeal: "£5.75", tag: "Seafood" },
  { id: 7, category: "Burgers", title: "Spicy Zinger Chicken Fillet", description: "Fiery hot breaded chicken breast fillet, crispy crunch coat, layered with spicy mayo and shredded crunchy lettuce.", priceOnItsOwn: "£5.25", priceMeal: "£6.75", tag: "Fiery Hot" },

  // --- PERI-PERI CATEGORY ---
  { id: 8, category: "Peri-Peri", title: "Signature Half Peri Chicken", description: "Flame-grilled half chicken basted thoroughly with authentic African bird's eye chili Peri marinade. Made completely fresh to order.", priceOnItsOwn: "£7.99", priceMeal: "£9.49", tag: "Flame Grilled" },
  { id: 9, category: "Peri-Peri", title: "Full Platter Chicken Feast", description: "Whole flame-grilled chicken heavily basted in customized signature hot or lemon-herb peri sauce.", priceOnItsOwn: "£13.50", priceMeal: "£15.00", tag: "Sharing" },
  { id: 10, category: "Peri-Peri", title: "5x Grilled Peri-Peri Wings", description: "Succulent chicken wings grilled over single flame bars, basted in rich spicy peri glaze elements.", priceOnItsOwn: "£4.99", priceMeal: "£6.49", tag: "Spicy Wings" },
  { id: 11, category: "Peri-Peri", title: "Grilled Peri-Peri Chicken Strips", description: "6 pieces of tender boneless chicken breast strips grilled and tossed in mild or wild peri chili values.", priceOnItsOwn: "£5.99", priceMeal: "£7.49", tag: "Lean Protein" },

  // --- SIDES CATEGORY ---
  { id: 12, category: "Sides", title: "Jalapeno Cheese Bites (6pcs)", description: "Spicy chopped jalapeno peppers blended with premium cheddar cream cheese in a crisp golden tortilla chip crumbs shell.", priceOnItsOwn: "£3.50", priceMeal: "N/A", tag: "Hot Side" },
  { id: 13, category: "Sides", title: "Classic Golden Fries (Large)", description: "Thick cut deep-fried potato fries salted lightly with high-grade sea salt flakes for maximum crisp crunch surface values.", priceOnItsOwn: "£2.50", priceMeal: "N/A", tag: "Vegan" },
  { id: 14, category: "Sides", title: "Mozzarella Dippers (6pcs)", description: "Gooey stringy mozzarella cheese sticks inside an Italian seasoned crispy herb crumbs coating grid.", priceOnItsOwn: "£3.75", priceMeal: "N/A", tag: "Cheesy" },
  { id: 15, category: "Sides", title: "Spicy BBQ Chicken Wings (6pcs)", description: "Deep fried crispy chicken wing joints tossed inside sweet, sticky, smokey barbecue text coating sauces.", priceOnItsOwn: "£4.50", priceMeal: "N/A", tag: "Crispy" }
];

export default function Menu() {
  const [activeMenuTab, setActiveMenuTab] = useState("Specials");
  const menuCategories = ["Specials", "Burgers", "Peri-Peri", "Sides"];

  return (
    <section id="menu-matrix" className="bg-neutral-50 border-t border-neutral-200 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Asymmetric Dribbble-Style Navigation Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">Fresh Variety</span>
            <h2 className="text-4xl font-black text-neutral-950 tracking-tight uppercase">Our Digital Menu Matrix</h2>
          </div>
          
          {/* Asymmetric Capsule Navigation Selector */}
          <div className="flex flex-wrap gap-2 bg-neutral-200 p-1.5 rounded-2xl border border-neutral-300/40">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenuTab(category)}
                className={`px-6 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer focus:outline-none ${
                  activeMenuTab === category 
                    ? "bg-neutral-950 text-white shadow-md" 
                    : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Alternating Layout Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_DATA.filter((item) => item.category === activeMenuTab).map((dish, index) => (
            <div 
              key={dish.id} 
              className={`border rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-600/50 hover:bg-white transition-all duration-500 group relative overflow-hidden ${
                index % 2 === 1 
                  ? "bg-white border-neutral-200" 
                  : "bg-neutral-100 border-neutral-300/40"
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-black text-neutral-950 tracking-tight uppercase group-hover:text-red-600 transition-colors leading-tight">
                    {dish.title}
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full shrink-0 shadow-sm">
                    {dish.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-sm">
                  {dish.description}
                </p>
              </div>

              {/* Dribbble-style Price Badge Capsules */}
              <div className="mt-8 pt-6 border-t border-neutral-200/60 grid grid-cols-2 gap-4">
                <div className="bg-white/80 border border-neutral-200 p-3 rounded-2xl text-center shadow-inner">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase block tracking-wider">On Its Own</span>
                  <span className="text-lg font-black text-neutral-950">{dish.priceOnItsOwn}</span>
                </div>
                <div className="bg-red-600 p-3 rounded-2xl text-center shadow-md">
                  <span className="text-[9px] font-bold text-red-200 uppercase block tracking-wider">Meal Combo</span>
                  <span className="text-lg font-black text-white">{dish.priceMeal}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

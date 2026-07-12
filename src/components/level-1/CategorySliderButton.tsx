"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import { Lato, Poppins } from "next/font/google";

//  Category type definition
export type CategoryType = {
  id: string;
  name: string;
  desc?: string;
  productDesc?: string;
  slug?: string;
  image?: string;
  isFeatured?: boolean | string;
  sortOrder?: number;
  disablePickupDiscount?: boolean;
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function CategorySliderButton() {
  const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
  const [displayCategory, setDisplayCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    productCategoryIdG,
    setProductCategoryIdG,
    setDisablePickupCatDiscountIds,
    settings,
  } = UseSiteContext();

  //  Handle displayCategory selection


useEffect(() => {
  if (!productCategoryIdG) {
   setDisplayCategory(settings.display_category?.toString() ?? null);
  } else {
    setDisplayCategory(productCategoryIdG);
  }
}, [settings, productCategoryIdG]);

  //  Fetch categories
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("/api/categories");
      const categories: CategoryType[] = await res.json();

      categories.sort((a, b) => Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0));

      const featured = categories.filter(
        (category) => category.isFeatured !== "no"
      );
      setCategoryData(featured);

      const disablePickupCategoryIds = categories
        .filter((category) => category.disablePickupDiscount === true)
        .map((category) => category.id);

      setDisablePickupCatDiscountIds(disablePickupCategoryIds);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };



  fetchData();
}, []);


  //  Scroll handler
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

 return (
  <section
    id="order_now"
    className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8"
  >
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-neutral-200 pb-8">

      {/* Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">
          Fresh Selection
        </span>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-neutral-950">
          Browse Categories
        </h2>
      </div>

      {/* Category Selector */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-2
          overflow-x-auto
          scrollbar-hide
          rounded-2xl
          border
          border-neutral-300/40
          bg-neutral-200
          p-1.5
          w-full
          lg:w-auto
        "
      >
        {categoryData.length > 0 ? (
          categoryData.map((category) => {
            const isActive = displayCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setProductCategoryIdG(category.id)}
                className={`
                  whitespace-nowrap
                  rounded-xl
                  px-6
                  py-3
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-md"
                      : "text-neutral-500 hover:text-neutral-950 hover:bg-white/70"
                  }
                `}
              >
                {category.name}
              </button>
            );
          })
        ) : (
          [...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-11 w-28 rounded-xl bg-neutral-300 animate-pulse flex-shrink-0"
            />
          ))
        )}
      </div>
    </div>
  </section>
);
}

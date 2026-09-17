"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Chicle } from "next/font/google";
import ProductCardPrductOfMonth from "../../components/level-2/ProductCardPOM";

const chicle = Chicle({
  subsets: ["latin"],
  weight: "400",
});

export default function BestOfMonth() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products/featured", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch featured products");
        }

        const products = await res.json();
        setFeaturedProducts(products);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchData();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      const scrollAmount =
        direction === "left"
          ? -clientWidth / 1.5
          : clientWidth / 1.5;

      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* =====================================================
          MAIN SECTION
      ====================================================== */}
      <div className="relative overflow-hidden my-12 rounded-[2.5rem] bg-neutral-950 shadow-xl">

        {/* ===================================================
            RED AMBIENT GLOW
        ==================================================== */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.10),transparent_45%)] pointer-events-none" />

        {/* ===================================================
            CONTENT
        ==================================================== */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-8 md:py-12">

          {/* =================================================
              HEADER
          ================================================= */}
          <div className="text-left mb-9">

            <div
              className={`${chicle.className} text-3xl md:text-4xl text-[#fff1dc] uppercase flex items-center gap-3`}
            >
              <FaStar className="text-red-500 text-2xl" />
              Trending Foods
            </div>

            <p className="text-red-100/70 text-sm mt-2">
              The most ordered dishes of the last 30 days
            </p>

          </div>

          {/* =================================================
              LEFT ARROW
          ================================================= */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous products"
            className="absolute left-3 md:left-5 top-[52%] z-20
              bg-neutral-900/90
              border border-white/10
              text-white
              p-3
              rounded-full
              shadow-lg
              hover:bg-red-600
              hover:border-red-600
              transition-all duration-300"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next products"
            className="absolute right-3 md:right-5 top-[52%] z-20
              bg-neutral-900/90
              border border-white/10
              text-white
              p-3
              rounded-full
              shadow-lg
              hover:bg-red-600
              hover:border-red-600
              transition-all duration-300"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* =================================================
              PRODUCT SLIDER
          ================================================= */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              scrollbar-hide
              px-1
              pb-2
            "
          >

            {featuredProducts.length > 0 ? (

              featuredProducts.map((product, i) => (
                <div
                  key={product.id ?? `${product.name}-${i}`}
                  className="snap-center flex-shrink-0"
                >
                  <ProductCardPrductOfMonth product={product} />
                </div>
              ))

            ) : (

              /* =================================================
                 LOADING SKELETON
              ================================================== */
              [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="
                    min-w-[260px]
                    flex-shrink-0
                    bg-neutral-900/80
                    border border-white/5
                    rounded-2xl
                    p-6
                    animate-pulse
                  "
                >

                  <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />

                  <div className="h-3 bg-white/10 rounded w-1/2 mb-2" />

                  <div className="h-3 bg-white/10 rounded w-full mb-1" />

                  <div className="h-3 bg-white/10 rounded w-2/3" />

                </div>
              ))

            )}

          </div>

        </div>
      </div>
    </section>
  );
}
 

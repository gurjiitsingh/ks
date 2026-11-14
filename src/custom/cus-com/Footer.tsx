"use client";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/store/LanguageContext";
import { Cinzel, Lato, Roboto, Abel } from "next/font/google";
// import { Montserrat, Oswald, Bebas_Neue, Anton, Poppins } from "next/font/google";
// import { Great_Vibes, Pacifico, Dancing_Script } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const abel = Abel({ subsets: ["latin"], weight: "400" });
const fonts = {
  Cinzel: cinzel,
  Abel: abel,
  // Playfair: playfair,
  // Cormorant: cormorant,
  // Lora: lora,
  // Montserrat: montserrat,
  // Oswald: oswald,
  // Bebas: bebas,
  // Anton: anton,
  // GreatVibes: vibes,
  // Pacifico: pacifico,
  // Dancing: dancing,
  Lato: lato,
  Roboto: roboto,
  //Poppins: poppins,
};

const fontTitle =
  fonts[process.env.NEXT_PUBLIC_FONT_TITLE as keyof typeof fonts] || cinzel;
const fontDescription =
  fonts[process.env.NEXT_PUBLIC_FONT_DESCRIPTION as keyof typeof fonts] || lato;
const fontPrice =
  fonts[process.env.NEXT_PUBLIC_FONT_PRICE as keyof typeof fonts] || roboto;

type FooterLink = { href: string; name: string };

type Props = {
  outlet?: any;
};

export default function Footer({ outlet }: Props) {
  const { TEXT, BRANDING } = useLanguage();

  // Fallbacks
const fallbackBrand = {
  brand_name: outlet?.outletName || BRANDING?.brand_name || "",
  poweredBy: BRANDING?.poweredBy || "Powered by",
  poweredByUrl:
    BRANDING?.poweredByUrl || "https://www.gstadeveloper.com",

  copyright: {
    prefix: BRANDING?.copyright?.prefix || "Copyright ©",
    suffix:
      BRANDING?.copyright?.suffix || "All Rights Reserved by",

    // ✅ dynamic company
    company:
      outlet?.outletName ||
      BRANDING?.copyright?.company ||
      "",
  },
};

  const fallbackText = {
    logo_alt: TEXT?.logo_alt || "Restaurant Logo",
    sections: {
      links: {
        title: BRANDING?.sections?.links?.title || "Links",
        items: BRANDING?.sections?.links?.items || [
          { name: "Home", href: "/" },
          { name: "Menu", href: "/menu" },
          { name: "About Us", href: "/about" },
          { name: "Contact", href: "/contact" },
          { name: "Table Reservation", href: "/reservation" },
          { name: "Allergens", href: "/allergene" },
        ],
      },
      company: {
        title: BRANDING?.sections?.company?.title || "Company",
        items: BRANDING?.sections?.company?.items || [
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Terms of Service", href: "#" },
        ],
      },
      social: {
        title: BRANDING?.sections?.social?.title || "Social Media",
      },
    },
  };
// 2B2E4A     navi dark color   d24a0f  orange

const companyName =
  outlet?.web
    ? new URL(
        outlet.web.startsWith("http")
          ? outlet.web
          : `https://${outlet.web}`
      ).hostname
    : outlet?.outletName || fallbackBrand.brand_name;
    
  return (<footer className="relative pt-14 -mb-20 bg-neutral-950 text-white overflow-hidden">

  {/* =====================================================
      SUBTLE RED AMBIENT GLOW
  ====================================================== */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

  <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

  {/* =====================================================
      CONTENT
  ====================================================== */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">

      {/* =================================================
          LOGO + BRAND
      ================================================= */}
      <div className="w-full">

        <div
          className="
            flex flex-col
            items-start
            md:w-[70%]
            gap-2
            h-fit
            bg-neutral-900/70
            border border-white/10
            p-4
            mx-1
            rounded-2xl
          "
        >

          {/* Logo */}
          <div className="flex items-center justify-start rounded-full">

            <Link href="/">
              <img
                className="h-20 md:h-24 w-auto object-contain"
                src={outlet?.logo || "/logo.png"}
                alt={fallbackText.logo_alt}
              />
            </Link>

          </div>

          {/* Brand */}
          <div className="flex items-center h-fit">

            <span
              className={`
                ${fontPrice.className}
                self-center
                text-md
                text-[#fff1dc]
              `}
            >
              {fallbackBrand.brand_name}
            </span>

          </div>

        </div>

      </div>


      {/* =================================================
          LINKS
      ================================================= */}
      <div className="flex flex-col gap-2 w-full px-4">

        <h3
          className={`
            ${fontTitle.className}
            tracking-wide
            text-xl
            font-bold
            uppercase
            pb-3
            text-[#fff1dc]
          `}
        >
          {fallbackText.sections.links.title}
        </h3>

        <ul className="flex flex-col gap-1">

          {fallbackText.sections.links.items.map(
            (item: FooterLink, idx: number) => (

              <li
                key={idx}
                className={`
                  pb-2
                  ${
                    idx <
                    fallbackText.sections.links.items.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                `}
              >

                <Link
                  href={item.href}
                  className={`
                    ${fontDescription.className}
                    text-white/65
                    hover:text-red-500
                    transition-colors
                    duration-200
                  `}
                >
                  {item.name}
                </Link>

              </li>

            )
          )}

        </ul>

      </div>


      {/* =================================================
          COMPANY
      ================================================= */}
      <div className="flex flex-col gap-2 w-full px-4">

        <h3
          className={`
            ${fontTitle.className}
            tracking-wide
            text-xl
            font-bold
            uppercase
            pb-3
            text-[#fff1dc]
          `}
        >
          {fallbackText.sections.company.title}
        </h3>

        <ul className="space-y-1">

          {fallbackText.sections.company.items.map(
            (item: FooterLink, idx: number) => (

              <li
                key={idx}
                className={
                  idx === 0
                    ? "border-b border-white/10 pb-2"
                    : ""
                }
              >

                <a
                  rel="noopener noreferrer"
                  href={item.href}
                  className={`
                    ${fontDescription.className}
                    text-white/65
                    hover:text-red-500
                    transition-colors
                    duration-200
                  `}
                >
                  {item.name}
                </a>

              </li>

            )
          )}

        </ul>

      </div>


      {/* =================================================
          SOCIAL MEDIA
      ================================================= */}
      <div className="flex flex-col gap-2 w-full px-4">

        <div
          className={`
            ${fontTitle.className}
            tracking-wide
            text-xl
            font-bold
            uppercase
            pb-3
            text-[#fff1dc]
          `}
        >
          {fallbackText.sections.social.title}
        </div>

        <div className="flex justify-start space-x-3">

          {/* Add social media icons here */}

        </div>

      </div>

    </div>
  </div>


  {/* =====================================================
      FOOTER BOTTOM
  ====================================================== */}
  <div className="relative z-10 mt-12 pt-4 pb-6 bg-red-600">

    <div className="container mx-auto px-4 flex flex-col items-center gap-1">

      {/* Powered By */}
      <p className="text-sm text-red-50/80 text-center">

        {fallbackBrand.poweredBy}{" "}

        <a
          href={fallbackBrand.poweredByUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-neutral-950 transition-colors"
        >
          {new URL(fallbackBrand.poweredByUrl).hostname}
        </a>

      </p>


      {/* Copyright */}
      <p className="text-sm text-red-50/80 text-center">

        {fallbackBrand.copyright.prefix}{" "}

        {new Date().getFullYear()}{" "}

        {fallbackBrand.copyright.suffix}{" "}

        <b className="text-white">
          {companyName}
        </b>

      </p>

    </div>

  </div>

</footer>
   );
}
